from django.db import models
from django_extensions.db.models import TimeStampedModel


class Blog(TimeStampedModel):
    title = models.CharField(max_length=100)
    content = models.TextField(blank=False, null=False)
