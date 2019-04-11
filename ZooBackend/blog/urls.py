from rest_framework import routers

from .views import BlogVS

router = routers.SimpleRouter()
router.register('blog', BlogVS)

urlpatterns = router.urls
