from rest_framework import routers
from .views import ProyectoViewSet

router = routers.DefaultRouter()
router.register('proyectos', ProyectoViewSet)

urlpatterns = router.urls
