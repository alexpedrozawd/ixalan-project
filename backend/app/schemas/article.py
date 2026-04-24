from datetime import date
from pydantic import BaseModel, HttpUrl, field_validator


class ArticleBase(BaseModel):
    title: str
    description: str
    image_url: str
    slug: str


class ArticleCreate(ArticleBase):
    pass


class ArticleResponse(ArticleBase):
    id: int
    date: date

    model_config = {"from_attributes": True}


class ArticleListResponse(BaseModel):
    articles: list[ArticleResponse]
    total: int


class PaginationParams(BaseModel):
    page: int = 1
    per_page: int = 10

    @field_validator("page")
    @classmethod
    def page_must_be_positive(cls, v: int) -> int:
        if v < 1:
            raise ValueError("page must be >= 1")
        return v

    @field_validator("per_page")
    @classmethod
    def per_page_range(cls, v: int) -> int:
        if not (1 <= v <= 100):
            raise ValueError("per_page must be between 1 and 100")
        return v
