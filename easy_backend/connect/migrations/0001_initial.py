# Generated by Django 3.2.9 on 2022-02-14 15:41

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('event_name', models.CharField(blank=True, max_length=250, null=True)),
                ('event_date', models.DateField()),
                ('event_venue', models.CharField(blank=True, max_length=250, null=True)),
                ('max_participants', models.IntegerField()),
                ('restricted_participants', models.IntegerField()),
                ('ticket_price', models.DecimalField(decimal_places=2, max_digits=7)),
                ('restricted_ticket_price', models.DecimalField(decimal_places=2, max_digits=7)),
                ('registration_link', models.CharField(blank=True, max_length=250, null=True)),
                ('event_topic', models.CharField(blank=True, max_length=250, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Organisation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('organization_name', models.CharField(blank=True, max_length=250, null=True)),
                ('organization_host_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Feedback',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('subject', models.CharField(blank=True, max_length=250, null=True)),
                ('feedback', models.TextField(blank=True, null=True)),
                ('rating', models.DecimalField(decimal_places=2, max_digits=7)),
                ('event_id', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='connect.event')),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='event',
            name='organisation',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='connect.organisation'),
        ),
        migrations.CreateModel(
            name='EndUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('DOB', models.DateField()),
                ('event_participated_id', models.ManyToManyField(related_name='event_participated', to='connect.Event')),
                ('upcoming_events_id', models.ManyToManyField(related_name='upcoming_events', to='connect.Event')),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
