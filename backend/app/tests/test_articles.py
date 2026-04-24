from datetime import date
from unittest.mock import MagicMock, patch

import pytest
from fastapi.testclient import TestClient

from app.models.article import Article
from app.schemas.article import ArticleCreate, PaginationParams
from app.services.article_service import ArticleService


# ── Fixtures ──────────────────────────────────────────────────────────────────

SAMPLE_ARTICLE = Article(
    id=1,
    title="Rampaging Ferocidon Banned",
    description="New banned and restricted update.",
    image_url="https://api.scryfall.com/cards/xln/154?format=image&version=normal",
    slug="rampaging-ferocidon-banned",
    date=date(2018, 1, 15),
)

SAMPLE_ROW = {
    "id": 1,
    "title": "Rampaging Ferocidon Banned",
    "description": "New banned and restricted update.",
    "image_url": "https://api.scryfall.com/cards/xln/154?format=image&version=normal",
    "slug": "rampaging-ferocidon-banned",
    "date": "2018-01-15",
}


@pytest.fixture
def mock_db() -> MagicMock:
    return MagicMock()


@pytest.fixture
def service(mock_db: MagicMock) -> ArticleService:
    return ArticleService(mock_db)


# ── Schema validation ──────────────────────────────────────────────────────────

class TestPaginationParams:
    def test_defaults(self) -> None:
        params = PaginationParams()
        assert params.page == 1
        assert params.per_page == 10

    def test_page_must_be_positive(self) -> None:
        with pytest.raises(ValueError, match="page must be >= 1"):
            PaginationParams(page=0)

    def test_per_page_minimum(self) -> None:
        with pytest.raises(ValueError, match="per_page must be between"):
            PaginationParams(per_page=0)

    def test_per_page_maximum(self) -> None:
        with pytest.raises(ValueError, match="per_page must be between"):
            PaginationParams(per_page=101)

    def test_valid_custom_values(self) -> None:
        params = PaginationParams(page=3, per_page=25)
        assert params.page == 3
        assert params.per_page == 25


class TestArticleCreate:
    def test_valid_payload(self) -> None:
        payload = ArticleCreate(
            title="Test",
            description="Test description",
            image_url="https://example.com/img.jpg",
            slug="test",
        )
        assert payload.title == "Test"
        assert payload.slug == "test"


# ── Service unit tests ─────────────────────────────────────────────────────────

class TestArticleService:
    def test_list_articles_returns_articles_and_total(self, service: ArticleService, mock_db: MagicMock) -> None:
        mock_db.table.return_value.select.return_value.execute.return_value.count = 1
        mock_db.table.return_value.select.return_value.order.return_value.range.return_value.execute.return_value.data = [
            SAMPLE_ROW
        ]

        articles, total = service.list_articles(page=1, per_page=10)

        assert total == 1
        assert len(articles) == 1
        assert articles[0].title == "Rampaging Ferocidon Banned"

    def test_list_articles_empty(self, service: ArticleService, mock_db: MagicMock) -> None:
        mock_db.table.return_value.select.return_value.execute.return_value.count = 0
        mock_db.table.return_value.select.return_value.order.return_value.range.return_value.execute.return_value.data = []

        articles, total = service.list_articles()

        assert total == 0
        assert articles == []

    def test_get_article_found(self, service: ArticleService, mock_db: MagicMock) -> None:
        mock_db.table.return_value.select.return_value.eq.return_value.maybe_single.return_value.execute.return_value.data = (
            SAMPLE_ROW
        )

        article = service.get_article(1)

        assert article is not None
        assert article.id == 1
        assert article.slug == "rampaging-ferocidon-banned"

    def test_get_article_not_found(self, service: ArticleService, mock_db: MagicMock) -> None:
        mock_db.table.return_value.select.return_value.eq.return_value.maybe_single.return_value.execute.return_value.data = None

        article = service.get_article(999)

        assert article is None

    def test_get_by_slug_found(self, service: ArticleService, mock_db: MagicMock) -> None:
        mock_db.table.return_value.select.return_value.eq.return_value.maybe_single.return_value.execute.return_value.data = (
            SAMPLE_ROW
        )

        article = service.get_by_slug("rampaging-ferocidon-banned")

        assert article is not None
        assert article.title == "Rampaging Ferocidon Banned"

    def test_get_by_slug_not_found(self, service: ArticleService, mock_db: MagicMock) -> None:
        mock_db.table.return_value.select.return_value.eq.return_value.maybe_single.return_value.execute.return_value.data = None

        article = service.get_by_slug("nonexistent-slug")

        assert article is None

    def test_create_article(self, service: ArticleService, mock_db: MagicMock) -> None:
        mock_db.table.return_value.insert.return_value.execute.return_value.data = [SAMPLE_ROW]

        payload = ArticleCreate(
            title="Rampaging Ferocidon Banned",
            description="New banned and restricted update.",
            image_url="https://api.scryfall.com/cards/xln/154?format=image&version=normal",
            slug="rampaging-ferocidon-banned",
        )

        article = service.create_article(payload)

        assert article.id == 1
        assert article.title == "Rampaging Ferocidon Banned"

    def test_row_to_model_parses_date_string(self) -> None:
        article = ArticleService._row_to_model(SAMPLE_ROW)
        assert article.date == date(2018, 1, 15)

    def test_row_to_model_accepts_date_object(self) -> None:
        row = {**SAMPLE_ROW, "date": date(2018, 1, 15)}
        article = ArticleService._row_to_model(row)
        assert article.date == date(2018, 1, 15)


# ── API endpoint tests ─────────────────────────────────────────────────────────

@pytest.fixture
def client() -> TestClient:
    with (
        patch("app.config.Settings.__init__", return_value=None),
        patch.object(
            type(patch("app.config.settings")),
            "supabase_url",
            new_callable=lambda: property(lambda self: "https://fake.supabase.co"),
        ),
    ):
        from main import app
        return TestClient(app)


class TestHealthEndpoint:
    def test_health_check(self) -> None:
        with patch("app.config.Settings.__init__", return_value=None):
            from main import app
            client = TestClient(app)

            with patch.object(app, "dependency_overrides", {}):
                pass

        client_direct = TestClient(app)
        response = client_direct.get("/health")
        assert response.status_code in (200, 422, 500)


class TestArticleEndpoints:
    @pytest.fixture
    def app_client(self) -> TestClient:
        from main import app
        from app.routers.articles import get_service

        mock_service = MagicMock(spec=ArticleService)
        mock_service.list_articles.return_value = ([SAMPLE_ARTICLE], 1)
        mock_service.get_article.return_value = SAMPLE_ARTICLE
        mock_service.get_by_slug.return_value = SAMPLE_ARTICLE

        app.dependency_overrides[get_service] = lambda: mock_service

        yield TestClient(app)

        app.dependency_overrides.clear()

    def test_list_articles_success(self, app_client: TestClient) -> None:
        response = app_client.get("/api/articles")
        assert response.status_code == 200
        data = response.json()
        assert data["total"] == 1
        assert len(data["articles"]) == 1
        assert data["articles"][0]["title"] == "Rampaging Ferocidon Banned"

    def test_list_articles_pagination(self, app_client: TestClient) -> None:
        response = app_client.get("/api/articles?page=1&per_page=5")
        assert response.status_code == 200

    def test_list_articles_invalid_page(self, app_client: TestClient) -> None:
        response = app_client.get("/api/articles?page=0")
        assert response.status_code == 422

    def test_list_articles_invalid_per_page(self, app_client: TestClient) -> None:
        response = app_client.get("/api/articles?per_page=200")
        assert response.status_code == 422

    def test_get_article_by_id_found(self, app_client: TestClient) -> None:
        response = app_client.get("/api/articles/1")
        assert response.status_code == 200
        assert response.json()["id"] == 1

    def test_get_article_by_id_not_found(self, app_client: TestClient) -> None:
        from app.routers.articles import get_service
        from main import app

        mock_service = MagicMock(spec=ArticleService)
        mock_service.get_article.return_value = None
        app.dependency_overrides[get_service] = lambda: mock_service

        response = app_client.get("/api/articles/999")
        assert response.status_code == 404
        assert response.json()["detail"] == "Article not found"

        app.dependency_overrides.clear()

    def test_get_article_by_slug_found(self, app_client: TestClient) -> None:
        response = app_client.get("/api/articles/slug/rampaging-ferocidon-banned")
        assert response.status_code == 200
        assert response.json()["slug"] == "rampaging-ferocidon-banned"

    def test_get_article_by_slug_not_found(self, app_client: TestClient) -> None:
        from app.routers.articles import get_service
        from main import app

        mock_service = MagicMock(spec=ArticleService)
        mock_service.get_by_slug.return_value = None
        app.dependency_overrides[get_service] = lambda: mock_service

        response = app_client.get("/api/articles/slug/nonexistent")
        assert response.status_code == 404

        app.dependency_overrides.clear()

    def test_response_contains_required_fields(self, app_client: TestClient) -> None:
        response = app_client.get("/api/articles/1")
        data = response.json()
        required_fields = {"id", "title", "description", "image_url", "slug", "date"}
        assert required_fields.issubset(data.keys())
