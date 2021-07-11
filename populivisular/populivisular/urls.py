
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('DataHub/', include('Datahub.urls')),
    path('admin/', admin.site.urls),
]
