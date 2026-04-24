from fastapi import APIRouter, Depends, HTTPException, Query
from supabase import Client, create_client

from app.config import settings
from app.schemas.article import ArticleListResponse, ArticleResponse, PaginationParams
from app.services.article_service import ArticleService

router = APIRouter(prefix="/api/articles", tags=["articles"])


def get_db() -> Client:
    return create_client(settings.supabase_url, settings.supabase_anon_key)


def get_service(db: Client = Depends(get_db)) -> ArticleService:
    return ArticleService(db)


@router.get("", response_model=ArticleListResponse)
def list_articles(
    page: int = Query(default=1, ge=1, description="Page number"),
    per_page: int = Query(default=10, ge=1, le=100, description="Items per page"),
    service: ArticleService = Depends(get_service),
) -> ArticleListResponse:
    params = PaginationParams(page=page, per_page=per_page)
    articles, total = service.list_articles(params.page, params.per_page)
    return ArticleListResponse(
        articles=[ArticleResponse.model_validate(a.__dict__) for a in articles],
        total=total,
    )


@router.get("/{article_id}", response_model=ArticleResponse)
def get_article(
    article_id: int,
    service: ArticleService = Depends(get_service),
) -> ArticleResponse:
    article = service.get_article(article_id)
    if article is None:
        raise HTTPException(status_code=404, detail="Article not found")
    return ArticleResponse.model_validate(article.__dict__)


@router.get("/slug/{slug}", response_model=ArticleResponse)
def get_article_by_slug(
    slug: str,
    service: ArticleService = Depends(get_service),
) -> ArticleResponse:
    article = service.get_by_slug(slug)
    if article is None:
        raise HTTPException(status_code=404, detail="Article not found")
    return ArticleResponse.model_validate(article.__dict__)
