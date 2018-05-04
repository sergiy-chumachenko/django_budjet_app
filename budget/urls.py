from django.urls import path
from . import views

urlpatterns = [
    path('projects', views.project_list, name='list'),
    path('projects/add', views.ProjectCreateView.as_view(), name='add'),
    path('projects/<slug:project_slug>', views.project_detail, name='detail')
]
