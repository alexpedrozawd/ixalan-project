from datetime import date
from dataclasses import dataclass


@dataclass
class Article:
    id: int
    title: str
    description: str
    image_url: str
    slug: str
    date: date
