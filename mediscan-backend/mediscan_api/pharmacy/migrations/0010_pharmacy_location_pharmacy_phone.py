# Generated by Django 5.0.4 on 2024-05-07 18:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pharmacy', '0009_medicine_is_deleted'),
    ]

    operations = [
        migrations.AddField(
            model_name='pharmacy',
            name='location',
            field=models.CharField(blank=True, max_length=155, null=True),
        ),
        migrations.AddField(
            model_name='pharmacy',
            name='phone',
            field=models.CharField(blank=True, max_length=155, null=True),
        ),
    ]
