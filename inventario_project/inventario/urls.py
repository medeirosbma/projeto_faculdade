from django.urls import path
from .views import EditarItemView
from . import views

urlpatterns = [
    path('list', views.item_list, name='item_list'),
    path('', views.item_create, name='item_create'),
    path('deletar_item/<int:id>', views.deletar_item, name="deletar_item"),
    path('editar/<int:id>/', EditarItemView.as_view(), name='editar_item'),
    
]