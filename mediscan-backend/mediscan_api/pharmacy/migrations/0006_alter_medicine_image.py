# Generated by Django 5.0.4 on 2024-05-05 15:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pharmacy', '0005_pharmacy_username'),
    ]

    operations = [
        migrations.AlterField(
            model_name='medicine',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]