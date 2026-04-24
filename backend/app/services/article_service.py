from datetime import date
from supabase import Client
from app.models.article import Article
from app.schemas.article import ArticleCreate


class ArticleService:
    TABLE = "articles"

    def __init__(self, db: Client) -> None:
        self._db = db

    def list_articles(self, page: int = 1, per_page: int = 10) -> tuple[list[Article], int]:
        offset = (page - 1) * per_page

        count_resp = self._db.table(self.TABLE).select("id", count="exact").execute()
        total = count_resp.count or 0

        resp = (
            self._db.table(self.TABLE)
            .select("*")
            .order("date", desc=True)
            .range(offset, offset + per_page - 1)
            .execute()
        )

        articles = [self._row_to_model(row) for row in (resp.data or [])]
        return articles, total

    def get_article(self, article_id: int) -> Article | None:
        resp = (
            self._db.table(self.TABLE)
            .select("*")
            .eq("id", article_id)
            .maybe_single()
            .execute()
        )
        if resp.data is None:
            return None
        return self._row_to_model(resp.data)

    def get_by_slug(self, slug: str) -> Article | None:
        resp = (
            self._db.table(self.TABLE)
            .select("*")
            .eq("slug", slug)
            .maybe_single()
            .execute()
        )
        if resp.data is None:
            return None
        return self._row_to_model(resp.data)

    def create_article(self, payload: ArticleCreate) -> Article:
        data = {
            **payload.model_dump(),
            "date": date.today().isoformat(),
        }
        resp = self._db.table(self.TABLE).insert(data).execute()
        return self._row_to_model(resp.data[0])

    @staticmethod
    def _row_to_model(row: dict) -> Article:
        return Article(
            id=row["id"],
            title=row["title"],
            description=row["description"],
            image_url=row["image_url"],
            slug=row["slug"],
            date=date.fromisoformat(row["date"]) if isinstance(row["date"], str) else row["date"],
        )
