# Generated by Django 5.0.4 on 2024-05-05 03:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pharmacy', '0004_alter_pharmacy_pincode'),
    ]

    operations = [
        migrations.AddField(
            model_name='pharmacy',
            name='username',
            field=models.CharField(blank=True, max_length=200, null=True, unique=True),
        ),
    ]
