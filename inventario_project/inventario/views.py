from django.shortcuts import render, redirect
from django.views.generic.edit import UpdateView
from django.urls import reverse_lazy
from .models import Item
from .forms import ItemForm


def item_create(request):
    if request.method == 'POST':
        nome = request.POST['nome']
        descricao = request.POST['descricao']
        quantidade = request.POST['quantidade']
        preco = request.POST['preco']
        Item.objects.create(nome=nome, descricao=descricao, quantidade=quantidade, preco=preco)
        return redirect('item_list')
    return render(request, 'item_form.html')


class EditarItemView(UpdateView):
    model = Item  
    fields = ['nome', 'descricao', 'quantidade', 'preco'] 
    template_name = 'inventario/item_form.html' 
    success_url = reverse_lazy('item_list') 
    pk_url_kwarg = 'id'
    

def item_list(request):
    items = Item.objects.all()
    return render(request, 'inventario/item_list.html', {'items': items})

def item_create(request):
    if request.method == 'POST':
        form = ItemForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('item_list')
    else:
        form = ItemForm()
    return render(request, 'inventario/item_form.html', {'form': form})

def deletar_item(request, id):
    item = Item.objects.filter(id=id)
    item.delete()
    items = Item.objects.all()
    return render(request, 'inventario/item_list.html', {'items': items})
