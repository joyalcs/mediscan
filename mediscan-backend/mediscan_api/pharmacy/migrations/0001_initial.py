# Generated by Django 5.0.4 on 2024-04-21 10:06

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Doctors',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=200)),
                ('last_name', models.CharField(max_length=255)),
                ('address', models.CharField(max_length=255)),
                ('doc_id', models.CharField(max_length=200)),
                ('qualification', models.CharField(max_length=155)),
                ('specialization', models.CharField(max_length=155)),
                ('image', models.ImageField(upload_to='')),
            ],
        ),
        migrations.CreateModel(
            name='Medicine',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('mfd_date', models.DateField()),
                ('exp_date', models.DateField()),
                ('stock', models.IntegerField()),
                ('company', models.CharField(max_length=155)),
                ('image', models.ImageField(upload_to='')),
            ],
        ),
        migrations.CreateModel(
            name='Pharmacy',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('name', models.CharField(max_length=200)),
                ('address', models.CharField(max_length=255)),
                ('password', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='TimeSlot',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('start_time', models.DateTimeField()),
                ('end_time', models.DateTimeField()),
                ('doctor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='pharmacy.doctors')),
            ],
        ),
    ]
