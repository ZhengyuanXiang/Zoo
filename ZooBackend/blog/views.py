from rest_framework import viewsets

from .serializers import BlogS
from .models import Blog


class BlogVS(viewsets.ModelViewSet):
    queryset = Blog.objects.order_by('-id')
    serializer_class = BlogS
