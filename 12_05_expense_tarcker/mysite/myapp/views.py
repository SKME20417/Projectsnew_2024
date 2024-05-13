from django.shortcuts import render, redirect
from .forms import ExpenseForm
from .models import Expense
from django.db.models import Sum
import datetime
# Create your views here.

def index(request):
    if request.method == 'POST':
        expense = ExpenseForm(data=request.POST)
        if expense.is_valid():
            expense.save()
        return redirect('index')
    
    else:
        expenses =  Expense.objects.all()
        total_expenses = expenses.aggregate(Sum('amount'))
        
        # calculating expense of last 365 datys
        last_year = datetime.date.today() - datetime.timedelta(days=365)
        data = expenses.filter(date__gt = last_year)
        yearly_sum = data.aggregate(Sum('amount'))
        #print(yearly_sum)
        
         # calculating expense of last 30 datys
        last_month = datetime.date.today() - datetime.timedelta(days=30)
        data = expenses.filter(date__gt = last_month)
        monthly_sum = data.aggregate(Sum('amount'))
        
         # calculating expense of last 7 days
        last_week = datetime.date.today() - datetime.timedelta(days=7)
        data = expenses.filter(date__gt = last_week)
        weekly_sum = data.aggregate(Sum('amount'))
        
        daily_sums = Expense.objects.filter().values('date').order_by('date').annotate(sum = Sum('amount'))
        #print(daily_sums)
        
        cat_sums = Expense.objects.filter().values('category').order_by('category').annotate(sum = Sum('amount'))
        print(cat_sums)
        
        expense_data = ExpenseForm()
    return render(request, 'myapp/index.html', {'expense_data': expense_data, 
            'expenses': expenses, 
            'total_expenses' : total_expenses, 
            'yearly_sum':yearly_sum,
            'monthly_sum' : monthly_sum,
            'weekly_sum' : weekly_sum,
            'daily_sums' : daily_sums,
            'cat_sums' : cat_sums,
            })


def edit(request, id):
    if request.method == 'POST':
        expense = Expense.objects.get(id =id)
        form = ExpenseForm(data=request.POST , instance=expense)
        if form.is_valid():
            form.save()
            return redirect('index')
        
    expense = Expense.objects.get(id =id)
    expense_data = ExpenseForm(instance=expense)
    return render(request, 'myapp/edit.html', {'expense_data': expense_data})

def delete(request, id):
    if request.method == "POST" and 'delete' in request.POST:
        expense = Expense.objects.get(id=id)
        expense.delete()
        return redirect('index')


