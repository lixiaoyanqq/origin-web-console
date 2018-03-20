#!/bin/sh

# replace nginx config
NGINX_CONF_TEMP=/etc/nginx/conf.d/default.conf.temp
NGINX_CONF_FILE=/etc/nginx/conf.d/default.conf

cp -f $NGINX_CONF_TEMP $NGINX_CONF_FILE

echo PORT
if [ $LISTEN_PORT ]
then
sed -i "s#{{PORT}}#$LISTEN_PORT#g" $NGINX_CONF_FILE
else
sed -i "s#{{PORT}}#9000#g" $NGINX_CONF_FILE
fi

# replace js config
JS_CONF_TEMP=/usr/share/nginx/html/console/config.js.temp
JS_CONF_FILE=/usr/share/nginx/html/console/config.js

cp -f $JS_CONF_TEMP $JS_CONF_FILE

echo MASTER_HOST
if [ $MASTER_HOST ]
then
sed -i "s#{{MASTER_HOST}}#$MASTER_HOST#g" $JS_CONF_FILE
else
MASTER_HOST="$HOSTNAME:8443"
sed -i "s#{{MASTER_HOST}}#$MASTER_HOST#g" $JS_CONF_FILE
fi

echo CONSOLE_HOST
if [ $CONSOLE_HOST ]
then
sed -i "s#{{CONSOLE_HOST}}#$CONSOLE_HOST#g" $JS_CONF_FILE
else
CONSOLE_HOST="origin-dm-web.$HOSTNAME:$LISTEN_PORT"
sed -i "s#{{CONSOLE_HOST}}#$CONSOLE_HOST#g" $JS_CONF_FILE
fi

echo LOGGING_URL
if [ $LOGGING_URL ]
then
sed -i "s#{{LOGGING_URL}}#$LOGGING_URL#g" $JS_CONF_FILE
else
sed -i "s#{{LOGGING_URL}}##g" $JS_CONF_FILE
fi

echo METRICS_URL
if [ $METRICS_URL ]
then
sed -i "s#{{METRICS_URL}}#$METRICS_URL#g" $JS_CONF_FILE
else
sed -i "s#{{METRICS_URL}}##g" $JS_CONF_FILE
fi

echo DMOS_ADDRESS
if [ $DMOS_ADDRESS ]
then
sed -i "s#{{DMOS_ADDRESS}}#$DMOS_ADDRESS#g" $JS_CONF_FILE
else
sed -i "s#{{DMOS_ADDRESS}}##g" $JS_CONF_FILE
fi

echo DMOS_OPENSHIFT_PROJECTNAMES
if [ $DMOS_OPENSHIFT_PROJECTNAMES ]
then
sed -i "s#{{DMOS_OPENSHIFT_PROJECTNAMES}}#$DMOS_OPENSHIFT_PROJECTNAMES#g" $JS_CONF_FILE
else
sed -i "s#{{DMOS_OPENSHIFT_PROJECTNAMES}}##g" $JS_CONF_FILE
fi

echo "Start"
sh -c "nginx -g \"daemon off;\""
