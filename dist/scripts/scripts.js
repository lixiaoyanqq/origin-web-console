"use strict";

<<<<<<< HEAD
<<<<<<< ff3f303f420f4b91730a7540d983ad838c1066d8
<<<<<<< ef52c8133c2db3c4cd7fd65e70916f0810106955
<<<<<<< d1374e0d38bda427a8abc969a26c800a8655527a
<<<<<<< a7ac38734e283c62b66f3704534cf85a8c2e57ea
<<<<<<< a298bf54c6d69181db24f82c4f57e31d6593a703
<<<<<<< 5a5abb10022ace76e53952881794b8da5e05c754
<<<<<<< cee78891ef5b90dc9d764af806ad8d24921e33e7
<<<<<<< ec71286f0cccf37d4ccb7b821af388c90b7dfb8b
<<<<<<< 781c52e2514fa63b5c0f8b0a855ebdcc7b69dc5c
<<<<<<< fb7e045b3c36f3f05491e7175a009e332598475a
<<<<<<< 16329d90debdb77c067a7c660602894462bf426f
<<<<<<< 7540d28435321477b97f501394451f928d5723ea
<<<<<<< 49088bdb5c54dcbace691e73393f5206d1d7139b
<<<<<<< 18ca7187f00d137970eaa51b6781868cb6603239
<<<<<<< 5479afb30c5f67d0d51d56d622dc9a98171c3daa
<<<<<<< a8a6721a66ecf6e0309b8cb7e496a9db1b4eccf6
function Noop() {
gettext("Manual"), gettext("Rolling"), gettext("Recreate"), gettext("deployment config"), gettext("Deployment Config"), gettext("horizontal pod autoscaler"), gettext("Config Map"), gettext("pull"), gettext("push"), gettext("Route"), gettext("openshift.io/imagestreams"), gettext("CPU (Request)"), gettext("Memory (Request)"), gettext("CPU (Limit)"), gettext("Memory (Limit)"), gettext("Storage (Request)"), gettext("user"), gettext("manual change"), gettext("complete"), gettext("running"), gettext("The minimum amount of"), gettext("the container is guaranteed."), gettext("The maximum amount of"), gettext("the container is allowed to use when running."), gettext("User"), gettext("user"), gettext("Group"), gettext("group"), gettext("Service Account"), gettext("service account"), gettext("System User"), gettext("system user"), gettext("System Group"), gettext("system group"), gettext("Read-Write-Once"), gettext("Read-Write-Many"), gettext("Read-Only-Many"), gettext("Bound"), gettext("Cancelled"), 
gettext("Active"), gettext("Complete"), gettext("Running"), gettext("Failed"), gettext("Terminating"), gettext("Completed"), gettext("Cores"), gettext("Custom"), gettext("Abort"), gettext("Retry"), gettext("Ignore"), gettext("Pre"), gettext("Mid"), gettext("Client state could not be verified");
}

function OverviewController(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A) {
var B = this, C = b("isIE")() || b("isEdge")(), D = 6e4, E = _.get(h, "ENABLE_TECH_PREVIEW_FEATURE.service_catalog_landing_page") && e.apiInfo({
group:"servicecatalog.k8s.io",
resource:"serviceclasses"
}) && e.apiInfo({
group:"servicecatalog.k8s.io",
resource:"instances"
}) && e.apiInfo({
group:"servicecatalog.k8s.io",
resource:"bindings"
});
a.projectName = c.project;
var F, G, H = b("annotation"), I = b("buildConfigForBuild"), J = b("deploymentIsInProgress"), K = b("imageObjectRef"), L = b("isJenkinsPipelineStrategy"), M = b("isNewerResource"), N = b("label"), O = b("podTemplate"), P = {}, Q = {}, R = {}, S = B.state = {
alerts:{},
builds:{},
clusterQuotas:{},
imageStreamImageRefByDockerReference:{},
imagesByDockerReference:{},
limitRanges:{},
limitWatches:C,
notificationsByObjectUID:{},
pipelinesByDeploymentConfig:{},
podsByOwnerUID:{},
quotas:{},
recentPipelinesByDeploymentConfig:{},
routesByService:{},
servicesByObjectUID:{},
serviceInstances:{},
bindingsByInstanceRef:{},
bindingsByApplicationUID:{},
applicationsByBinding:{},
showMetrics:!1
};
B.state.breakpoint = l.getBreakpoint();
var T = _.throttle(function() {
var b = l.getBreakpoint();
B.state.breakpoint !== b && a.$evalAsync(function() {
B.state.breakpoint = b;
});
}, 50);
$(window).on("resize.overview", T), B.showGetStarted = !1, B.showLoading = !0, B.filterByOptions = [ {
id:"name",
label:"Name"
}, {
id:"label",
label:"Label"
} ], B.filterBy = o.getLabelSelector().isEmpty() ? "name" :"label", B.viewByOptions = [ {
id:"app",
label:z("Application")
}, {
id:"resource",
label:z("Resource Type")
}, {
id:"pipeline",
label:z("Pipeline")
} ];
var U = function(a) {
return _.get(a, "metadata.name");
}, V = function(a) {
return _.get(a, "metadata.uid");
}, W = function() {
return _.size(B.deploymentConfigs) + _.size(B.vanillaReplicationControllers) + _.size(B.deployments) + _.size(B.vanillaReplicaSets) + _.size(B.statefulSets) + _.size(B.monopods) + _.size(B.state.serviceInstances);
}, X = function() {
return _.size(B.filteredDeploymentConfigs) + _.size(B.filteredReplicationControllers) + _.size(B.filteredDeployments) + _.size(B.filteredReplicaSets) + _.size(B.filteredStatefulSets) + _.size(B.filteredMonopods) + _.size(B.filteredServiceInstances);
}, Y = function() {
B.size = W(), B.filteredSize = X();
var a = 0 === B.size, b = B.deploymentConfigs && B.replicationControllers && B.deployments && B.replicaSets && B.statefulSets && B.pods && B.state.serviceInstances;
S.expandAll = b && 1 === B.size, B.showGetStarted = b && a, B.showLoading = !b && a, B.everythingFiltered = !a && !B.filteredSize, B.hidePipelineOtherResources = "pipeline" === B.viewBy && (B.filterActive || _.isEmpty(B.pipelineBuildConfigs));
}, Z = function(a) {
return f.groupByApp(a, "metadata.name");
}, aa = function(a) {
var b = null;
return _.each(a, function(a) {
return b ? void (b = y.getPreferredDisplayRoute(b, a)) :void (b = a);
}), b;
}, ba = _.debounce(function() {
a.$evalAsync(function() {
if (B.bestRouteByApp = {}, B.routes) {
var a = [ B.filteredDeploymentConfigsByApp, B.filteredReplicationControllersByApp, B.filteredDeploymentsByApp, B.filteredReplicaSetsByApp, B.filteredStatefulSetsByApp, B.filteredMonopodsByApp ];
_.each(B.apps, function(b) {
var c = {};
_.each(a, function(a) {
var d = _.get(a, b, []);
_.each(d, function(a) {
var b = V(a), d = _.get(S, [ "servicesByObjectUID", b ], []);
_.each(d, function(a) {
var b = _.get(S, [ "routesByService", a.metadata.name ], []);
_.assign(c, _.indexBy(b, "metadata.name"));
});
});
}), B.bestRouteByApp[b] = aa(c);
=======
function OverviewController(e, t, n, a, r, o, i, s, c, l, u, d, m, p, g, f, h, v, y, b, C, S, w, k, j) {
var P = this, R = t("isIE")() || t("isEdge")();
e.projectName = n.project;
<<<<<<< 03bf3aac21d9bdd52cb978e9de058c59032f392f
<<<<<<< f220d455c736c216e4f6c930266948065449646d
var E, T, I = t("annotation"), N = t("buildConfigForBuild"), D = t("deploymentIsInProgress"), A = t("imageObjectRef"), B = t("isJenkinsPipelineStrategy"), L = t("isNewerResource"), U = t("label"), O = t("podTemplate"), x = {}, F = {}, M = {}, V = P.state = {
=======
var E, T, N = t("annotation"), I = t("buildConfigForBuild"), D = t("deploymentIsInProgress"), A = t("imageObjectRef"), B = t("isJenkinsPipelineStrategy"), L = t("isNewerResource"), U = t("label"), O = t("podTemplate"), F = {}, x = {}, M = {}, V = P.state = {
>>>>>>> Show provision status of service instances on the overview page.
=======
var E, T, I = t("annotation"), N = t("buildConfigForBuild"), D = t("deploymentIsInProgress"), A = t("imageObjectRef"), B = t("isJenkinsPipelineStrategy"), L = t("isNewerResource"), U = t("label"), O = t("podTemplate"), x = {}, F = {}, M = {}, V = P.state = {
>>>>>>> Adjust events to show in the drawer
=======
function OverviewController(e, t, n, a, r, o, i, s, c, l, u, d, m, p, f, g, h, v, y, b, C, S, w, k, j) {
=======
function OverviewController(e, t, n, a, r, o, i, s, c, l, u, d, p, m, f, g, h, v, y, b, C, S, w, k, j) {
>>>>>>> Updates for Service Instance & Bindings
=======
function OverviewController(e, t, n, a, r, o, i, s, c, l, u, d, m, p, f, g, h, v, y, b, C, S, w, k, j) {
>>>>>>> Support EnvFrom in the Env Editors
var P = this, R = t("isIE")() || t("isEdge")();
<<<<<<< 803385a97c28d1b8a6f92684d6a4f6634e2dbcc5
e.projectName = n.project;
<<<<<<< 74daf8dfb26526d2e4312f5e74aefbe159df9ec0
var E, T, I = t("annotation"), N = t("buildConfigForBuild"), D = t("deploymentIsInProgress"), A = t("imageObjectRef"), B = t("isJenkinsPipelineStrategy"), L = t("isNewerResource"), U = t("label"), O = t("podTemplate"), F = {}, x = {}, M = {}, V = P.state = {
>>>>>>> Patternfly vertical navigation and project bar
=======
var T, E, I = t("annotation"), N = t("buildConfigForBuild"), D = t("deploymentIsInProgress"), A = t("imageObjectRef"), B = t("isJenkinsPipelineStrategy"), L = t("isNewerResource"), U = t("label"), O = t("podTemplate"), F = {}, x = {}, M = {}, V = P.state = {
>>>>>>> Add the ability to add a secret to an application
=======
e.projectName = n.project, P.catalogLandingPageEnabled = !c.DISABLE_SERVICE_CATALOG_LANDING_PAGE;
<<<<<<< 49088bdb5c54dcbace691e73393f5206d1d7139b
<<<<<<< ac2f88b8b8fad2105ff0c0d7fb18001c6948074f
<<<<<<< 18ca7187f00d137970eaa51b6781868cb6603239
var T, I, E = t("annotation"), N = t("buildConfigForBuild"), D = t("deploymentIsInProgress"), A = t("imageObjectRef"), B = t("isJenkinsPipelineStrategy"), L = t("isNewerResource"), U = t("label"), O = t("podTemplate"), F = {}, x = {}, M = {}, V = P.state = {
>>>>>>> Enable new landing page experience by default
=======
var I, T, E = t("annotation"), N = t("buildConfigForBuild"), D = t("deploymentIsInProgress"), A = t("imageObjectRef"), B = t("isJenkinsPipelineStrategy"), L = t("isNewerResource"), U = t("label"), O = t("podTemplate"), F = {}, x = {}, M = {}, V = P.state = {
>>>>>>> Updates for Service Instance & Bindings
=======
var I, T, N = t("annotation"), E = t("buildConfigForBuild"), D = t("deploymentIsInProgress"), A = t("imageObjectRef"), B = t("isJenkinsPipelineStrategy"), L = t("isNewerResource"), U = t("label"), O = t("podTemplate"), F = {}, x = {}, M = {}, V = P.state = {
>>>>>>> Quota Notifications
=======
var I, E, T = t("annotation"), N = t("buildConfigForBuild"), D = t("deploymentIsInProgress"), A = t("imageObjectRef"), B = t("isJenkinsPipelineStrategy"), L = t("isNewerResource"), U = t("label"), O = t("podTemplate"), F = {}, x = {}, M = {}, V = P.state = {
>>>>>>> Support EnvFrom in the Env Editors
=======
function OverviewController(e, t, n, a, r, o, i, s, c, l, u, d, m, p, f, g, h, v, y, b, C, S, w, k, j, P) {
=======
function OverviewController(e, t, n, a, r, o, i, s, c, l, u, d, m, p, f, g, v, h, y, b, C, S, w, k, j, P) {
<<<<<<< 7805d1f04a3652c674cffed28e1a923f61d88a08
>>>>>>> Add SVG icons
var R = this, I = t("isIE")() || t("isEdge")();
=======
=======
function OverviewController(e, t, n, a, r, o, i, s, c, l, u, d, m, p, f, g, v, h, y, b, S, C, w, k, P, j) {
>>>>>>> Service instance details configuration and edit
=======
function OverviewController(e, t, n, a, r, o, i, s, c, l, u, d, m, p, f, g, v, h, y, b, S, C, w, k, j, P) {
>>>>>>> Add product icons for service catalog
=======
function OverviewController(e, t, n, a, r, o, i, s, c, l, u, d, m, p, f, g, v, h, y, b, S, C, w, k, P, j) {
>>>>>>> Handle displaying parameters when secrets are not available.
=======
function OverviewController(e, t, n, a, r, o, i, s, c, l, u, d, m, p, f, g, v, h, y, b, C, S, w, k, j, P) {
>>>>>>> Added 'no projects and cant create' empty state to process-template, deploy-image, and from-file
=======
function OverviewController(e, t, n, a, r, o, i, s, c, l, u, d, m, p, f, g, v, h, y, b, C, S, w, k, P, j) {
>>>>>>> Update template service broker flag name
var R = this, I = t("isIE")();
>>>>>>> Allow unlimited websockets on Edge - also fix leaking websockets on monitoring page
e.projectName = n.project, R.catalogLandingPageEnabled = !l.DISABLE_SERVICE_CATALOG_LANDING_PAGE;
<<<<<<< 5a5abb10022ace76e53952881794b8da5e05c754
<<<<<<< cee78891ef5b90dc9d764af806ad8d24921e33e7
<<<<<<< ec71286f0cccf37d4ccb7b821af388c90b7dfb8b
<<<<<<< 2a3d518f8accb19b77ed445e1bcabc202f1d0ba9
<<<<<<< a49eefc714ad5d9e140ca7c6cefa36e4ebb2f24e
var E, T, N = t("annotation"), D = t("canI"), A = t("buildConfigForBuild"), B = t("deploymentIsInProgress"), L = t("imageObjectRef"), U = t("isJenkinsPipelineStrategy"), O = t("isNewerResource"), F = t("label"), x = t("podTemplate"), M = r.getPreferredVersion("servicebindings"), V = r.getPreferredVersion("clusterserviceclasses"), q = r.getPreferredVersion("serviceinstances"), z = r.getPreferredVersion("clusterserviceplans"), H = {}, G = {}, K = {}, W = R.state = {
>>>>>>> Adopt service catalog API changes
=======
var E, T, N = t("annotation"), D = t("canI"), A = t("buildConfigForBuild"), B = t("deploymentIsInProgress"), L = t("imageObjectRef"), U = t("isJenkinsPipelineStrategy"), O = t("isNewerResource"), F = t("label"), x = t("podTemplate"), V = r.getPreferredVersion("servicebindings"), M = r.getPreferredVersion("clusterserviceclasses"), q = r.getPreferredVersion("serviceinstances"), z = r.getPreferredVersion("clusterserviceplans"), H = {}, G = {}, K = {}, W = R.state = {
>>>>>>> Adopt more service catalog API changes
=======
var E, T, N = t("annotation"), D = t("canI"), A = t("buildConfigForBuild"), B = t("deploymentIsInProgress"), L = t("imageObjectRef"), U = t("isJenkinsPipelineStrategy"), O = t("isNewerResource"), F = t("label"), x = t("podTemplate"), V = r.getPreferredVersion("servicebindings"), M = r.getPreferredVersion("clusterserviceclasses"), q = r.getPreferredVersion("serviceinstances"), z = r.getPreferredVersion("clusterserviceplans"), H = {}, G = {}, W = {}, K = R.state = {
>>>>>>> Replacing empty tables with empty state message
=======
var E, T, N = t("annotation"), D = t("canI"), A = t("buildConfigForBuild"), B = t("deploymentIsInProgress"), L = t("imageObjectRef"), U = t("isJenkinsPipelineStrategy"), O = t("isNewerResource"), F = t("label"), x = t("podTemplate"), V = r.getPreferredVersion("servicebindings"), M = r.getPreferredVersion("clusterserviceclasses"), q = r.getPreferredVersion("serviceinstances"), z = r.getPreferredVersion("clusterserviceplans"), H = {}, G = {}, K = {}, W = R.state = {
>>>>>>> Handle displaying parameters when secrets are not available.
=======
var E, N, T = t("annotation"), D = t("canI"), A = t("buildConfigForBuild"), B = t("deploymentIsInProgress"), L = t("imageObjectRef"), U = t("isJenkinsPipelineStrategy"), O = t("isNewerResource"), F = t("label"), x = t("podTemplate"), V = r.getPreferredVersion("servicebindings"), M = r.getPreferredVersion("clusterserviceclasses"), q = r.getPreferredVersion("serviceinstances"), z = r.getPreferredVersion("clusterserviceplans"), H = {}, G = {}, K = {}, W = R.state = {
>>>>>>> Added 'no projects and cant create' empty state to process-template, deploy-image, and from-file
=======
var E, T, N = t("annotation"), D = t("canI"), A = t("buildConfigForBuild"), B = t("deploymentIsInProgress"), L = t("imageObjectRef"), U = t("isJenkinsPipelineStrategy"), O = t("isNewerResource"), F = t("label"), x = t("podTemplate"), V = r.getPreferredVersion("servicebindings"), M = r.getPreferredVersion("clusterserviceclasses"), q = r.getPreferredVersion("serviceinstances"), z = r.getPreferredVersion("clusterserviceplans"), H = {}, G = {}, K = {}, W = R.state = {
>>>>>>> Update template service broker flag name
=======
function OverviewController(e, t, n, a, r, o, i, s, c, l, u, d, m, p, f, g, v, h, y, b, C, S, w, k, P, j, R, I) {
=======
function OverviewController(e, t, n, a, r, o, i, s, c, l, u, d, m, p, f, g, v, h, y, b, C, S, w, P, k, j, R, I) {
>>>>>>> Fix for adding non-builder templates to a project
=======
function OverviewController(e, t, n, a, r, o, i, s, c, l, u, d, m, p, f, g, v, h, y, b, C, S, w, k, P, j, R, I) {
>>>>>>> Bug 1505281 - Improve import YAML results message
=======
=======
<<<<<<< HEAD
>>>>>>> Init translation.
function OverviewController(e, t, n, a, r, o, i, s, c, l, u, d, m, p, f, g, v, h, y, b, S, C, w, k, P, j, R, I) {
>>>>>>> Add ProvisionedSuccessfully even to notification drawer
var E = this, T = t("isIE")();
e.projectName = a.project, E.catalogLandingPageEnabled = !u.DISABLE_SERVICE_CATALOG_LANDING_PAGE;
var N, D, A = t("annotation"), B = t("canI"), L = t("buildConfigForBuild"), U = t("deploymentIsInProgress"), O = t("imageObjectRef"), F = t("isJenkinsPipelineStrategy"), x = t("isNewerResource"), V = t("label"), M = t("podTemplate"), q = o.getPreferredVersion("servicebindings"), z = o.getPreferredVersion("clusterserviceclasses"), H = o.getPreferredVersion("serviceinstances"), G = o.getPreferredVersion("clusterserviceplans"), K = {}, W = {}, Q = {}, J = E.state = {
>>>>>>> Wait for service classes and plans to load
=======
function OverviewController(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D) {
var E = this, F = b("isIE")(), G = 6e4;
a.projectName = d.project, E.catalogLandingPageEnabled = !k.DISABLE_SERVICE_CATALOG_LANDING_PAGE;
var H, I, J = b("annotation"), K = b("canI"), L = b("buildConfigForBuild"), M = b("deploymentIsInProgress"), N = b("imageObjectRef"), O = b("isJenkinsPipelineStrategy"), P = b("isNewerResource"), Q = b("label"), R = b("podTemplate"), S = f.getPreferredVersion("servicebindings"), T = f.getPreferredVersion("clusterserviceclasses"), U = f.getPreferredVersion("serviceinstances"), V = f.getPreferredVersion("clusterserviceplans"), W = {}, X = {}, Y = {}, Z = E.state = {
>>>>>>> rebase from poc 3.6
alerts: {},
builds: {},
clusterQuotas: {},
imageStreamImageRefByDockerReference: {},
imagesByDockerReference: {},
limitRanges: {},
limitWatches: F,
notificationsByObjectUID: {},
pipelinesByDeploymentConfig: {},
podsByOwnerUID: {},
quotas: {},
recentPipelinesByDeploymentConfig: {},
routesByService: {},
servicesByObjectUID: {},
serviceInstances: {},
serviceClasses: {},
servicePlans: {},
bindingsByInstanceRef: {},
bindingsByApplicationUID: {},
applicationsByBinding: {},
showMetrics: !1
};
E.state.breakpoint = o.getBreakpoint();
var aa = _.throttle(function() {
var b = o.getBreakpoint();
E.state.breakpoint !== b && a.$evalAsync(function() {
E.state.breakpoint = b;
});
}, 50);
$(window).on("resize.overview", aa), E.showGetStarted = !1, E.showLoading = !0, E.filterByOptions = [ {
id: "name",
label: "Name"
}, {
id: "label",
label: "Label"
} ], E.filterBy = r.getLabelSelector().isEmpty() ? "name" : "label", E.viewByOptions = [ {
id: "app",
label: C("Application")
}, {
id: "resource",
label: C("Resource Type")
}, {
id: "pipeline",
label: C("Pipeline")
} ];
var ba = function(a) {
return _.get(a, "metadata.name");
}, ca = function(a) {
return _.get(a, "metadata.uid");
}, da = function() {
return _.size(E.deploymentConfigs) + _.size(E.vanillaReplicationControllers) + _.size(E.deployments) + _.size(E.vanillaReplicaSets) + _.size(E.statefulSets) + _.size(E.monopods) + _.size(E.state.serviceInstances);
}, ea = function() {
return _.size(E.filteredDeploymentConfigs) + _.size(E.filteredReplicationControllers) + _.size(E.filteredDeployments) + _.size(E.filteredReplicaSets) + _.size(E.filteredStatefulSets) + _.size(E.filteredMonopods) + _.size(E.filteredServiceInstances);
}, fa = function() {
E.size = da(), E.filteredSize = ea();
var a = 0 === E.size, b = E.deploymentConfigs && E.replicationControllers && E.deployments && E.replicaSets && E.statefulSets && E.pods && E.state.serviceInstances;
Z.expandAll = b && 1 === E.size, E.showGetStarted = b && a, E.showLoading = !b && a, E.everythingFiltered = !a && !E.filteredSize, E.hidePipelineOtherResources = "pipeline" === E.viewBy && (E.filterActive || _.isEmpty(E.pipelineBuildConfigs));
}, ga = function(a) {
return g.groupByApp(a, "metadata.name");
}, ha = function(a) {
var b = null;
return _.each(a, function(a) {
return b ? void (b = A.getPreferredDisplayRoute(b, a)) : void (b = a);
}), b;
}, ia = _.debounce(function() {
a.$evalAsync(function() {
if (E.bestRouteByApp = {}, E.routes) {
var a = [ E.filteredDeploymentConfigsByApp, E.filteredReplicationControllersByApp, E.filteredDeploymentsByApp, E.filteredReplicaSetsByApp, E.filteredStatefulSetsByApp, E.filteredMonopodsByApp ];
_.each(E.apps, function(b) {
var c = {};
_.each(a, function(a) {
var d = _.get(a, b, []);
_.each(d, function(a) {
var b = ca(a), d = _.get(Z, [ "servicesByObjectUID", b ], []);
_.each(d, function(a) {
var b = _.get(Z, [ "routesByService", a.metadata.name ], []);
_.assign(c, _.keyBy(b, "metadata.name"));
});
});
}), E.bestRouteByApp[b] = ha(c);
});
}
});
}, 300, {
maxWait: 1500
}), ja = function() {
E.filteredDeploymentConfigsByApp = ga(E.filteredDeploymentConfigs), E.filteredReplicationControllersByApp = ga(E.filteredReplicationControllers), E.filteredDeploymentsByApp = ga(E.filteredDeployments), E.filteredReplicaSetsByApp = ga(E.filteredReplicaSets), E.filteredStatefulSetsByApp = ga(E.filteredStatefulSets), E.filteredMonopodsByApp = ga(E.filteredMonopods), E.apps = _.union(_.keys(E.filteredDeploymentConfigsByApp), _.keys(E.filteredReplicationControllersByApp), _.keys(E.filteredDeploymentsByApp), _.keys(E.filteredReplicaSetsByApp), _.keys(E.filteredStatefulSetsByApp), _.keys(E.filteredMonopodsByApp)), g.sortAppNames(E.apps), ia();
}, ka = function() {
var a = _.filter(E.deploymentConfigs, function(a) {
var b = ba(a);
return _.isEmpty(Z.pipelinesByDeploymentConfig[b]);
});
E.deploymentConfigsNoPipeline = _.sortBy(a, "metadata.name"), E.pipelineViewHasOtherResources = !(_.isEmpty(E.deploymentConfigsNoPipeline) && _.isEmpty(E.vanillaReplicationControllers) && _.isEmpty(E.deployments) && _.isEmpty(E.vanillaReplicaSets) && _.isEmpty(E.statefulSets) && _.isEmpty(E.monopods));
}, la = function() {
E.disableFilter = "pipeline" === E.viewBy && _.isEmpty(E.pipelineBuildConfigs);
}, ma = function(a) {
return r.getLabelSelector().select(a);
}, na = [ "metadata.name", "spec.clusterServiceClassExternalName" ], oa = function(a) {
return q.filterForKeywords(a, na, Z.filterKeywords);
}, pa = function(a) {
switch (E.filterBy) {
case "label":
return ma(a);

case "name":
return oa(a);
}
return a;
}, qa = function() {
switch (E.filterBy) {
case "label":
return !r.getLabelSelector().isEmpty();

case "name":
return !_.isEmpty(Z.filterKeywords);
}
}, ra = function() {
E.filteredDeploymentConfigs = pa(E.deploymentConfigs), E.filteredReplicationControllers = pa(E.vanillaReplicationControllers), E.filteredDeployments = pa(E.deployments), E.filteredReplicaSets = pa(E.vanillaReplicaSets), E.filteredStatefulSets = pa(E.statefulSets), E.filteredMonopods = pa(E.monopods), E.filteredPipelineBuildConfigs = pa(E.pipelineBuildConfigs), E.filteredServiceInstances = pa(Z.orderedServiceInstances), E.filterActive = qa(), ja(), fa();
}, sa = d.project + "/overview/view-by";
E.viewBy = localStorage.getItem(sa) || "app", a.$watch(function() {
return E.viewBy;
}, function(a) {
localStorage.setItem(sa, a), la(), na = "app" === E.viewBy ? [ "metadata.name", "metadata.labels.app" ] : [ "metadata.name" ], ra(), "pipeline" === E.viewBy ? r.setLabelSuggestions(X) : r.setLabelSuggestions(W);
}), k.DISABLE_OVERVIEW_METRICS || (t.isAvailable(!0).then(function(a) {
Z.showMetrics = a;
}), a.$on("metrics-connection-failed", function(a, b) {
var c = e.isAlertPermanentlyHidden("metrics-connection-failed");
c || Z.alerts["metrics-connection-failed"] || (Z.alerts["metrics-connection-failed"] = {
type: "warning",
message: D.getString(C("An error occurred getting metrics.")),
links: [ {
href: b.url,
label: D.getString(C("Open Metrics URL")),
target: "_blank"
}, {
href: "",
label: D.getString(C("Don't Show Me Again")),
onClick: function() {
return e.permanentlyHideAlert("metrics-connection-failed"), !0;
}
} ]
});
}));
var ta = function(a) {
return a && "Pod" === a.kind;
}, ua = function(a) {
var b = ca(a);
return b ? ta(a) ? [ a ] : _.get(E, [ "state", "podsByOwnerUID", b ], []) : [];
}, va = function(a, b) {
var c = ca(a);
Z.notificationsByObjectUID[c] = b || {};
}, wa = function(a) {
var b = ca(a);
return b ? _.get(Z, [ "notificationsByObjectUID", b ], {}) : {};
}, xa = function(a) {
var b = ca(a);
if (b) {
var c = ua(a), e = z.getPodAlerts(c, d.project);
va(a, e);
}
}, ya = function(a) {
_.each(a, xa);
}, za = function(a) {
var b = ba(a);
return b ? Y[b] : null;
}, Aa = function(a) {
var b = ba(a);
return b ? _.get(E, [ "replicationControllersByDeploymentConfig", b ]) : [];
};
E.getPreviousReplicationController = function(a) {
var b = Aa(a);
return _.size(b) < 2 ? null : b[1];
};
var Ba = function(a) {
var b = {}, c = za(a);
_.assign(b, z.getDeploymentStatusAlerts(a, c), z.getPausedDeploymentAlerts(a));
var d = Aa(a);
_.each(d, function(a) {
var c = wa(a);
_.assign(b, c);
}), va(a, b);
}, Ca = function() {
_.each(E.deploymentConfigs, Ba);
}, Da = function(a) {
var b = ca(a);
return b ? _.get(E, [ "replicaSetsByDeploymentUID", b ]) : {};
}, Ea = function(a) {
var b = z.getPausedDeploymentAlerts(a), c = Da(a);
_.each(c, function(a) {
var c = wa(a);
_.assign(b, c);
}), va(a, b);
}, Fa = function() {
_.each(E.deployments, Ea);
}, Ga = function() {
ya(E.replicationControllers), ya(E.replicaSets), ya(E.statefulSets), ya(E.monopods);
}, Ha = _.debounce(function() {
a.$evalAsync(function() {
Ga(), Ca(), Fa();
});
}, 500), Ia = function(a) {
_.isEmpty(a) || (r.addLabelSuggestionsFromResources(a, W), "pipeline" !== E.viewBy && r.setLabelSuggestions(W));
}, Ja = function(a) {
_.isEmpty(a) || (r.addLabelSuggestionsFromResources(a, X), "pipeline" === E.viewBy && r.setLabelSuggestions(X));
}, Ka = function(a) {
return "Succeeded" !== a.status.phase && "Failed" !== a.status.phase && (!Q(a, "openshift.io/deployer-pod-for.name") && (!J(a, "openshift.io/build.name") && "slave" !== Q(a, "jenkins")));
}, La = function() {
Z.podsByOwnerUID = w.groupByOwnerUID(E.pods), E.monopods = _.filter(Z.podsByOwnerUID[""], Ka);
}, Ma = function(a) {
if (_.get(a, "status.replicas")) return !0;
var b = J(a, "deploymentConfig");
return !b || M(a);
}, Na = function(a) {
return J(a, "deploymentConfig");
}, Oa = function() {
if (E.deploymentConfigs && E.replicationControllers) {
var a = [];
E.replicationControllersByDeploymentConfig = {}, E.currentByDeploymentConfig = {}, Y = {};
var b = {}, c = {};
_.each(E.replicationControllers, function(d) {
var e = Na(d) || "";
(!e || !E.deploymentConfigs[e] && _.get(d, "status.replicas")) && a.push(d);
var f = Y[e];
f && !P(d, f) || (Y[e] = d);
var g;
"Complete" === J(d, "deploymentStatus") && (g = b[e], g && !P(d, g) || (b[e] = d)), Ma(d) && _.set(c, [ e, d.metadata.name ], d);
}), _.each(b, function(a, b) {
_.set(c, [ b, a.metadata.name ], a);
}), _.each(c, function(a, b) {
var c = m.sortByDeploymentVersion(a, !0);
E.replicationControllersByDeploymentConfig[b] = c, E.currentByDeploymentConfig[b] = _.head(c);
}), E.vanillaReplicationControllers = _.sortBy(a, "metadata.name"), Ca();
}
}, Pa = function(a, b) {
if (_.get(a, "status.replicas")) return !0;
var c = m.getRevision(a);
return !c || !!b && m.getRevision(b) === c;
}, Qa = function() {
E.replicaSets && H && (E.replicaSetsByDeploymentUID = v.groupByControllerUID(E.replicaSets), E.currentByDeploymentUID = {}, _.each(E.replicaSetsByDeploymentUID, function(a, b) {
if (b) {
var c = H[b], d = _.filter(a, function(a) {
return Pa(a, c);
}), e = m.sortByRevision(d);
E.replicaSetsByDeploymentUID[b] = e, E.currentByDeploymentUID[b] = _.head(e);
}
}), E.vanillaReplicaSets = _.sortBy(E.replicaSetsByDeploymentUID[""], "metadata.name"), Fa());
}, Ra = {}, Sa = function(a) {
a && Z.allServices && _.each(a, function(a) {
var b = [], c = ca(a), d = R(a);
_.each(Ra, function(a, c) {
a.matches(d) && b.push(Z.allServices[c]);
}), Z.servicesByObjectUID[c] = _.sortBy(b, "metadata.name");
});
}, Ta = function() {
if (Z.allServices) {
Ra = _.mapValues(Z.allServices, function(a) {
return new LabelSelector(a.spec.selector);
});
var a = [ E.deploymentConfigs, E.vanillaReplicationControllers, E.deployments, E.vanillaReplicaSets, E.statefulSets, E.monopods ];
_.each(a, Sa), ia();
}
}, Ua = function() {
var a = A.groupByService(E.routes, !0);
Z.routesByService = _.mapValues(a, A.sortRoutesByScore), ia();
}, Va = function() {
Z.hpaByResource = n.groupHPAs(E.horizontalPodAutoscalers);
}, Wa = function(a) {
var b = L(a), c = E.buildConfigs[b];
if (c) {
E.recentPipelinesByBuildConfig[b] = E.recentPipelinesByBuildConfig[b] || [], E.recentPipelinesByBuildConfig[b].push(a);
var d = i.usesDeploymentConfigs(c);
_.each(d, function(b) {
Z.recentPipelinesByDeploymentConfig[b] = Z.recentPipelinesByDeploymentConfig[b] || [], Z.recentPipelinesByDeploymentConfig[b].push(a);
}), ka();
}
}, Xa = {}, Ya = function() {
Xa = i.groupBuildConfigsByOutputImage(E.buildConfigs);
}, Za = function(a) {
var b = ca(a);
if (b) return _.get(Z, [ "buildConfigsByObjectUID", b ], []);
}, $a = function(a) {
var b = [], c = Za(a);
_.each(c, function(a) {
var c = _.get(Z, [ "recentBuildsByBuildConfig", a.metadata.name ], []);
b = b.concat(c);
});
var d = ba(a);
_.set(Z, [ "recentBuildsByDeploymentConfig", d ], b);
}, _a = function(a, b) {
var c = ca(b);
c && _.set(Z, [ "buildConfigsByObjectUID", c ], a);
}, ab = function() {
var a = [];
E.deploymentConfigsByPipeline = {}, Z.pipelinesByDeploymentConfig = {}, _.each(E.buildConfigs, function(b) {
if (O(b)) {
a.push(b);
var c = i.usesDeploymentConfigs(b), d = ba(b);
_.set(E, [ "deploymentConfigsByPipeline", d ], c), _.each(c, function(a) {
Z.pipelinesByDeploymentConfig[a] = Z.pipelinesByDeploymentConfig[a] || [], Z.pipelinesByDeploymentConfig[a].push(b);
});
}
}), E.pipelineBuildConfigs = _.sortBy(a, "metadata.name"), ka(), Ja(E.pipelineBuildConfigs), la();
}, bb = function() {
Z.buildConfigsByObjectUID = {}, _.each(E.deploymentConfigs, function(a) {
var b = [], c = _.get(a, "spec.triggers");
_.each(c, function(c) {
var d = _.get(c, "imageChangeParams.from");
if (d) {
var e = N(d, a.metadata.namespace), f = Xa[e];
_.isEmpty(f) || (b = b.concat(f));
}
}), b = _.sortBy(b, "metadata.name"), _a(b, a), $a(a);
});
}, cb = function() {
ab(), bb();
}, db = function() {
_.each(E.deploymentConfigs, $a);
}, eb = function() {
if (Z.builds && E.buildConfigs) {
E.recentPipelinesByBuildConfig = {}, Z.recentBuildsByBuildConfig = {}, Z.recentPipelinesByDeploymentConfig = {};
var a = {};
_.each(i.interestingBuilds(Z.builds), function(b) {
var c = L(b);
O(b) ? Wa(b) : (a[c] = a[c] || [], a[c].push(b));
}), E.recentPipelinesByBuildConfig = _.mapValues(E.recentPipelinesByBuildConfig, function(a) {
return i.sortBuilds(a, !0);
}), Z.recentPipelinesByDeploymentConfig = _.mapValues(Z.recentPipelinesByDeploymentConfig, function(a) {
return i.sortBuilds(a, !0);
}), Z.recentBuildsByBuildConfig = _.mapValues(a, function(a) {
return i.sortBuilds(a, !0);
}), db();
}
}, fb = function() {
z.setQuotaNotifications(Z.quotas, Z.clusterQuotas, d.project);
};
E.clearFilter = function() {
r.clear(), E.filterText = "";
}, a.$watch(function() {
return E.filterText;
}, _.debounce(function(b, c) {
b !== c && (Z.filterKeywords = q.generateKeywords(b), a.$evalAsync(ra));
}, 50, {
maxWait: 250
})), a.$watch(function() {
return E.filterBy;
}, function(a, b) {
a !== b && (E.clearFilter(), ra());
}), r.onActiveFiltersChanged(function() {
a.$evalAsync(ra);
}), E.startBuild = i.startBuild;
var gb = function() {
if (Z.bindingsByApplicationUID = {}, Z.applicationsByBinding = {}, Z.deleteableBindingsByApplicationUID = {}, !_.isEmpty(Z.bindings)) {
var a = [ E.deployments, E.deploymentConfigs, E.vanillaReplicationControllers, E.vanillaReplicaSets, E.statefulSets ];
if (!_.some(a, function(a) {
return !a;
})) {
var b = h.getPodPresetSelectorsForBindings(Z.bindings);
_.each(a, function(a) {
_.each(a, function(a) {
var c = ca(a), d = new LabelSelector(_.get(a, "spec.selector"));
Z.bindingsByApplicationUID[c] = [], Z.deleteableBindingsByApplicationUID[c] = [], _.each(b, function(b, e) {
b.covers(d) && (Z.bindingsByApplicationUID[c].push(Z.bindings[e]), _.get(Z.bindings[e], "metadata.deletionTimestamp") || Z.deleteableBindingsByApplicationUID[c].push(Z.bindings[e]), Z.applicationsByBinding[e] = Z.applicationsByBinding[e] || [], Z.applicationsByBinding[e].push(a));
});
});
}), E.bindingsByInstanceRef = _.reduce(E.bindingsByInstanceRef, function(a, b, c) {
return a[c] = _.sortBy(b, function(a) {
var b = _.get(Z.applicationsByBinding, [ a.metadata.name ]), c = _.get(_.head(b), [ "metadata", "name" ]);
return c || a.metadata.name;
}), a;
}, {});
}
}
}, hb = function() {
Z.bindableServiceInstances = h.filterBindableServiceInstances(Z.serviceInstances, Z.serviceClasses, Z.servicePlans), Z.orderedServiceInstances = h.sortServiceInstances(Z.serviceInstances, Z.serviceClasses);
}, ib = [];
x.get(d.project).then(_.spread(function(b, d) {
Z.project = a.project = b, Z.context = d;
var e = function() {
E.pods && p.fetchReferencedImageStreamImages(E.pods, Z.imagesByDockerReference, Z.imageStreamImageRefByDockerReference, d);
};
ib.push(l.watch("pods", d, function(a) {
E.pods = a.by("metadata.name"), La(), e(), Ha(), Sa(E.monopods), ya(E.monopods), Ia(E.monopods), ra(), s.log("pods (subscribe)", E.pods);
})), ib.push(l.watch("replicationcontrollers", d, function(a) {
E.replicationControllers = a.by("metadata.name"), Oa(), Sa(E.vanillaReplicationControllers), Sa(E.monopods), ya(E.vanillaReplicationControllers), Ia(E.vanillaReplicationControllers), gb(), ra(), s.log("replicationcontrollers (subscribe)", E.replicationControllers);
})), ib.push(l.watch("deploymentconfigs", d, function(a) {
E.deploymentConfigs = a.by("metadata.name"), Oa(), Sa(E.deploymentConfigs), Sa(E.vanillaReplicationControllers), Ia(E.deploymentConfigs), Fa(), cb(), db(), gb(), ra(), s.log("deploymentconfigs (subscribe)", E.deploymentConfigs);
})), ib.push(l.watch({
group: "extensions",
resource: "replicasets"
}, d, function(a) {
<<<<<<< 61b7ccebc1be9196354cef218d1e7a812de7a0c6
E.replicaSets = a.by("metadata.name"), Qa(), Sa(E.vanillaReplicaSets), Sa(E.monopods), ya(E.vanillaReplicaSets), Ia(E.vanillaReplicaSets), gb(), ra(), s.log("replicasets (subscribe)", E.replicaSets);
})), ib.push(l.watch({
group: "apps",
resource: "deployments"
=======
z.replicaSets = a.by("metadata.name"), Ha(), Ja(z.vanillaReplicaSets), Ja(z.monopods), pa(z.vanillaReplicaSets), za(z.vanillaReplicaSets), $a(), ia(), p.log("replicasets (subscribe)", z.replicaSets);
})), ab.push(i.watch({
group:"apps",
resource:"deployments"
>>>>>>> Use `apps` API group for deployments
}, d, function(a) {
H = a.by("metadata.uid"), E.deployments = _.sortBy(H, "metadata.name"), Qa(), Sa(E.deployments), Sa(E.vanillaReplicaSets), Ia(E.deployments), gb(), ra(), s.log("deployments (subscribe)", E.deploymentsByUID);
})), ib.push(l.watch("builds", d, function(a) {
Z.builds = a.by("metadata.name"), eb(), s.log("builds (subscribe)", Z.builds);
})), ib.push(l.watch({
group: "apps",
resource: "statefulsets"
}, d, function(a) {
E.statefulSets = a.by("metadata.name"), Sa(E.statefulSets), Sa(E.monopods), ya(E.statefulSets), Ia(E.statefulSets), gb(), ra(), s.log("statefulsets (subscribe)", E.statefulSets);
}, {
poll: F,
pollInterval: G
})), ib.push(l.watch("services", d, function(a) {
Z.allServices = a.by("metadata.name"), Ta(), s.log("services (subscribe)", Z.allServices);
}, {
poll: F,
pollInterval: G
})), ib.push(l.watch("routes", d, function(a) {
E.routes = a.by("metadata.name"), Ua(), s.log("routes (subscribe)", E.routes);
}, {
poll: F,
pollInterval: G
})), ib.push(l.watch("buildConfigs", d, function(a) {
E.buildConfigs = a.by("metadata.name"), Ya(), cb(), eb(), ra(), s.log("buildconfigs (subscribe)", E.buildConfigs);
}, {
poll: F,
pollInterval: G
})), ib.push(l.watch({
group: "autoscaling",
resource: "horizontalpodautoscalers",
version: "v1"
}, d, function(a) {
E.horizontalPodAutoscalers = a.by("metadata.name"), Va(), s.log("autoscalers (subscribe)", E.horizontalPodAutoscalers);
}, {
poll: F,
pollInterval: G
})), ib.push(l.watch("imagestreams", d, function(a) {
I = a.by("metadata.name"), p.buildDockerRefMapForImageStreams(I, Z.imageStreamImageRefByDockerReference), e(), s.log("imagestreams (subscribe)", I);
}, {
poll: F,
pollInterval: G
})), ib.push(l.watch("resourcequotas", d, function(a) {
Z.quotas = a.by("metadata.name"), fb();
}, {
poll: !0,
pollInterval: G
})), ib.push(l.watch("appliedclusterresourcequotas", d, function(a) {
Z.clusterQuotas = a.by("metadata.name"), fb();
}, {
poll: !0,
pollInterval: G
}));
var f, g, h = {}, i = {};
j.SERVICE_CATALOG_ENABLED && K(U, "watch") && (f = function(a) {
var b = B.getServiceClassNameForInstance(a), d = _.get(Z, [ "serviceClasses", b ]);
return d ? c.when(d) : (h[b] || (h[b] = l.get(T, b, {}).then(function(a) {
return Z.serviceClasses[b] = a, a;
})["finally"](function() {
delete i[b];
})), h[b]);
}, g = function(a) {
var b = B.getServicePlanNameForInstance(a), d = _.get(Z, [ "servicePlans", b ]);
return d ? c.when(d) : (i[b] || (i[b] = l.get(V, b, {}).then(function(a) {
return Z.servicePlans[b] = a, a;
})["finally"](function() {
delete i[b];
})), i[b]);
}, ib.push(l.watch(U, d, function(a) {
Z.serviceInstances = a.by("metadata.name");
var b = [];
_.each(Z.serviceInstances, function(a) {
var c = z.getServiceInstanceAlerts(a);
va(a, c), b.push(f(a)), b.push(g(a));
}), y.waitForAll(b)["finally"](function() {
hb(), ra();
}), Ia(Z.serviceInstances);
}, {
poll: F,
pollInterval: G
}))), j.SERVICE_CATALOG_ENABLED && K(S, "watch") && ib.push(l.watch(S, d, function(a) {
Z.bindings = a.by("metadata.name"), E.bindingsByInstanceRef = _.groupBy(Z.bindings, "spec.instanceRef.name"), gb();
}, {
poll: F,
pollInterval: G
})), l.list("limitranges", d, function(a) {
Z.limitRanges = a.by("metadata.name");
});
var m = k.SAMPLE_PIPELINE_TEMPLATE;
m && l.get("templates", m.name, {
namespace: m.namespace
}, {
errorNotification: !1
}).then(function(b) {
E.samplePipelineURL = u.createFromTemplateURL(b, a.projectName);
}), a.$on("$destroy", function() {
l.unwatchAll(ib), $(window).off(".overview");
});
}));
}

function ResourceServiceBindings(a, b, c, d, e) {
var f, g = this, h = a("enableTechPreviewFeature");
g.bindings = [], g.bindableServiceInstances = [], g.serviceClasses = [], g.serviceInstances = [], g.showBindings = d.SERVICE_CATALOG_ENABLED && h("pod_presets");
var i = a("isIE")(), j = 6e4, k = [], l = a("canI"), m = g.serviceBindingsVersion = b.getPreferredVersion("servicebindings"), n = b.getPreferredVersion("clusterserviceclasses"), o = b.getPreferredVersion("serviceinstances"), p = b.getPreferredVersion("clusterserviceplans"), q = function() {
g.apiObject && g.bindings && (g.bindings = c.getBindingsForResource(g.bindings, g.apiObject));
}, r = function() {
g.bindableServiceInstances = c.filterBindableServiceInstances(g.serviceInstances, g.serviceClasses, f), g.orderedServiceInstances = c.sortServiceInstances(g.serviceInstances, g.serviceClasses);
};
g.createBinding = function() {
g.overlayPanelVisible = !0, g.overlayPanelName = "bindService";
}, g.closeOverlayPanel = function() {
g.overlayPanelVisible = !1;
};
var s = function() {
e.unwatchAll(k), k = [], d.SERVICE_CATALOG_ENABLED && l(m, "watch") && k.push(e.watch(m, g.projectContext, function(a) {
g.bindings = a.by("metadata.name"), q();
}, {
poll: i,
pollInterval: j
})), d.SERVICE_CATALOG_ENABLED && l(o, "watch") && (k.push(e.watch(o, g.projectContext, function(a) {
g.serviceInstances = a.by("metadata.name"), r();
}, {
poll: i,
pollInterval: j
})), e.list(n, {}, function(a) {
g.serviceClasses = a.by("metadata.name"), r();
}), e.list(p, {}, function(a) {
f = a.by("metadata.name");
}));
};
g.$onChanges = function(a) {
a.projectContext && g.showBindings && s();
}, g.$onDestroy = function() {
e.unwatchAll(k);
};
}

function ServiceInstanceBindings(a, b, c) {
var d = this, e = a("canI"), f = d.serviceBindingsVersion = b.getPreferredVersion("servicebindings"), g = function() {
d.bindable = e(f, "create") && c.isServiceBindable(d.serviceInstance, d.serviceClass, d.servicePlan);
};
d.createBinding = function() {
d.overlayPanelVisible = !0;
}, d.closeOverlayPanel = function() {
d.overlayPanelVisible = !1;
}, d.$onChanges = function() {
g();
};
}

var gettext = function(a) {
return a;
};

angular.isUndefined(window.OPENSHIFT_CONSTANTS) && (window.OPENSHIFT_CONSTANTS = {}), angular.extend(window.OPENSHIFT_CONSTANTS, {
HELP_BASE_URL: "https://docs.openshift.org/latest/",
HELP: {
cli: "cli_reference/index.html",
get_started_cli: "cli_reference/get_started_cli.html",
basic_cli_operations: "cli_reference/basic_cli_operations.html",
"build-triggers": "dev_guide/builds/triggering_builds.html",
webhooks: "dev_guide/builds/triggering_builds.html#webhook-triggers",
new_app: "dev_guide/application_lifecycle/new_app.html",
"start-build": "dev_guide/builds/basic_build_operations.html#starting-a-build",
"deployment-operations": "cli_reference/basic_cli_operations.html#build-and-deployment-cli-operations",
"route-types": "architecture/networking/routes.html#route-types",
persistent_volumes: "dev_guide/persistent_volumes.html",
compute_resources: "dev_guide/compute_resources.html",
pod_autoscaling: "dev_guide/pod_autoscaling.html",
application_health: "dev_guide/application_health.html",
source_secrets: "dev_guide/builds/build_inputs.html#using-secrets-during-build",
git_secret: "dev_guide/builds/build_inputs.html#source-clone-secrets",
pull_secret: "dev_guide/managing_images.html#using-image-pull-secrets",
managing_secrets: "dev_guide/service_accounts.html#managing-allowed-secrets",
creating_secrets: "dev_guide/secrets.html#creating-secrets",
storage_classes: "install_config/persistent_storage/dynamically_provisioning_pvs.html",
selector_label: "install_config/persistent_storage/selector_label_binding.html",
rolling_strategy: "dev_guide/deployments/deployment_strategies.html#rolling-strategy",
recreate_strategy: "dev_guide/deployments/deployment_strategies.html#recreate-strategy",
custom_strategy: "dev_guide/deployments/deployment_strategies.html#custom-strategy",
lifecycle_hooks: "dev_guide/deployments/deployment_strategies.html#lifecycle-hooks",
new_pod_exec: "dev_guide/deployments/deployment_strategies.html#pod-based-lifecycle-hook",
authorization: "architecture/additional_concepts/authorization.html",
roles: "architecture/additional_concepts/authorization.html#roles",
service_accounts: "dev_guide/service_accounts.html",
users_and_groups: "architecture/additional_concepts/authentication.html#users-and-groups",
"pipeline-builds": "architecture/core_concepts/builds_and_image_streams.html#pipeline-build",
"pipeline-plugin": "using_images/other_images/jenkins.html#openshift-origin-pipeline-plug-in",
quota: "dev_guide/compute_resources.html",
"config-maps": "dev_guide/configmaps.html",
secrets: "dev_guide/secrets.html",
deployments: "dev_guide/deployments/how_deployments_work.html",
pods: "architecture/core_concepts/pods_and_services.html#pods",
services: "architecture/core_concepts/pods_and_services.html#services",
routes: "architecture/networking/routes.html",
builds: "architecture/core_concepts/builds_and_image_streams.html#builds",
"image-streams": "architecture/core_concepts/builds_and_image_streams.html#image-streams",
storage: "architecture/additional_concepts/storage.html",
"build-hooks": "dev_guide/builds/build_hooks.html",
"default": "welcome/index.html"
},
CLI: {
"Latest Release": "https://github.com/openshift/origin/releases/latest"
},
DEFAULT_HPA_CPU_TARGET_PERCENT: 80,
DISABLE_OVERVIEW_METRICS: !1,
DISABLE_CUSTOM_METRICS: !1,
DISABLE_WILDCARD_ROUTES: !0,
DISABLE_CONFIRM_ON_EXIT: !1,
DISABLE_SERVICE_CATALOG_LANDING_PAGE: !1,
AVAILABLE_KINDS_BLACKLIST: [],
DISABLE_GLOBAL_EVENT_WATCH: !1,
DISABLE_COPY_LOGIN_COMMAND: !1,
TEMPLATE_SERVICE_BROKER_ENABLED: !1,
ENABLE_TECH_PREVIEW_FEATURE: {
pod_presets: !1
},
SAMPLE_PIPELINE_TEMPLATE: {
name: "jenkins-pipeline-example",
namespace: "openshift"
},
CREATE_FROM_URL_WHITELIST: [ "openshift" ],
SECURITY_CHECK_WHITELIST: [ {
resource: "buildconfigs",
group: ""
}, {
resource: "buildconfigs",
group: "build.openshift.io"
}, {
resource: "builds",
group: ""
}, {
resource: "builds",
group: "build.openshift.io"
}, {
resource: "configmaps",
group: ""
}, {
resource: "daemonsets",
group: "extensions"
}, {
resource: "deployments",
group: "apps"
}, {
resource: "deployments",
group: "extensions"
}, {
resource: "deploymentconfigs",
group: ""
}, {
resource: "deploymentconfigs",
group: "apps.openshift.io"
}, {
resource: "endpoints",
group: ""
}, {
resource: "events",
group: ""
}, {
resource: "horizontalpodautoscalers",
group: "autoscaling"
}, {
resource: "horizontalpodautoscalers",
group: "extensions"
}, {
resource: "imagestreamimages",
group: ""
}, {
resource: "imagestreamimages",
group: "image.openshift.io"
}, {
resource: "imagestreams",
group: ""
}, {
resource: "imagestreams",
group: "image.openshift.io"
}, {
resource: "imagestreamtags",
group: ""
}, {
resource: "imagestreamtags",
group: "image.openshift.io"
}, {
resource: "ingresses",
group: "extensions"
}, {
resource: "jobs",
group: "batch"
}, {
resource: "persistentvolumeclaims",
group: ""
}, {
resource: "pods",
group: ""
}, {
resource: "podtemplates",
group: ""
}, {
resource: "replicasets",
group: "extensions"
}, {
resource: "replicationcontrollers",
group: ""
}, {
resource: "routes",
group: ""
}, {
resource: "routes",
group: "route.openshift.io"
}, {
resource: "secrets",
group: ""
}, {
resource: "serviceaccounts",
group: ""
}, {
resource: "services",
group: ""
}, {
resource: "statefulsets",
group: "apps"
} ],
MEMBERSHIP_WHITELIST: [ "admin", "basic-user", "edit", "system:deployer", "system:image-builder", "system:image-puller", "system:image-pusher", "view" ],
EVENTS_TO_SHOW: {
FailedCreate: !0,
FailedDelete: !0,
FailedScheduling: !0,
FailedUpdate: !0,
BuildCancelled: !0,
BuildCompleted: !0,
BuildFailed: !0,
BuildStarted: !0,
BuildConfigInstantiateFailed: !0,
Failed: !0,
DeploymentCreated: !0,
DeploymentCreationFailed: !0,
RolloutCancelled: !0,
FailedRescale: !0,
SuccessfulRescale: !0,
BackOff: !0,
FailedSync: !0,
InvalidEnvironmentVariableNames: !0,
Unhealthy: !0,
FailedBinding: !0,
ProvisioningFailed: !0,
VolumeDeleted: !0,
LoadBalancerUpdateFailed: !0,
Deprovisioning: !0,
ErrorCallingProvision: !0,
ErrorInjectingBindResult: !0,
ProvisionCallFailed: !0,
ProvisionedSuccessfully: !0,
Provisioning: !0,
ReferencesNonexistentServiceClass: !0,
ReferencesNonexistentServicePlan: !0,
UnbindCallFailed: !0
},
PROJECT_NAVIGATION: [ {
label: gettext("Overview"),
iconClass: "fa fa-dashboard",
href: "/overview"
}, {
label: gettext("Applications"),
iconClass: "fa fa-cubes",
secondaryNavSections: [ {
items: [ {
label: gettext("Deployments"),
href: "/browse/deployments",
prefixes: [ "/add-config-volume", "/attach-pvc", "/browse/deployment/", "/browse/dc/", "/browse/rs/", "/browse/rc/", "/edit/autoscaler", "/edit/dc/", "/edit/health-checks", "/set-limits" ]
}, {
label: gettext("Stateful Sets"),
href: "/browse/stateful-sets",
prefixes: [ "/browse/stateful-sets/" ]
}, {
label: gettext("Pods"),
href: "/browse/pods",
prefixes: [ "/browse/pods/" ]
}, {
label: gettext("Services"),
href: "/browse/services",
prefixes: [ "/browse/services/" ]
}, {
label: gettext("Routes"),
href: "/browse/routes",
prefixes: [ "/browse/routes/", "/create-route", "/edit/routes/" ]
}, {
label: "Provisioned Services",
href: "/browse/service-instances",
prefixes: [ "/browse/service-instances/" ],
canI: {
resource: "serviceinstances",
group: "servicecatalog.k8s.io",
verb: "list"
}
} ]
} ]
}, {
label: gettext("Builds"),
iconClass: "pficon pficon-build",
secondaryNavSections: [ {
items: [ {
label: gettext("Builds"),
href: "/browse/builds",
prefixes: [ "/browse/builds/", "/browse/builds-noconfig/", "/edit/builds/" ]
}, {
label: gettext("Pipelines"),
href: "/browse/pipelines",
prefixes: [ "/browse/pipelines/", "/edit/pipelines/" ]
}, {
label: gettext("Images"),
href: "/browse/images",
prefixes: [ "/browse/images/" ]
} ]
} ]
}, {
label: gettext("Resources"),
iconClass: "fa fa-files-o",
secondaryNavSections: [ {
items: [ {
label: gettext("Quota"),
href: "/quota"
}, {
label: gettext("Membership"),
href: "/membership",
canI: {
resource: "rolebindings",
verb: "list"
}
}, {
label: gettext("Config Maps"),
href: "/browse/config-maps",
prefixes: [ "/browse/config-maps/", "/create-config-map", "/edit/config-maps/" ]
}, {
label: gettext("Secrets"),
href: "/browse/secrets",
prefixes: [ "/browse/secrets/", "/create-secret" ],
canI: {
resource: "secrets",
verb: "list"
}
}, {
label: gettext("Other Resources"),
href: "/browse/other"
} ]
} ]
}, {
label: gettext("Storage"),
iconClass: "pficon pficon-container-node",
href: "/browse/storage",
prefixes: [ "/browse/storage/", "/create-pvc" ]
}, {
label: gettext("Monitoring"),
iconClass: "pficon pficon-screen",
href: "/monitoring",
prefixes: [ "/browse/events" ]
} ],
CATALOG_CATEGORIES: [ {
id: "eams",
label: "数人云微服务治理",
items: [ {
id: "octopus",
categoryAliases: [ "octopus" ],
label: "Octopus",
iconClass: "font-icon icon-octopus-m",
description: ""
}, {
id: "squid",
categoryAliases: [ "squid" ],
label: "Squid",
iconClass: "font-icon icon-squid-m",
description: ""
}, {
id: "hawk",
categoryAliases: [ "hawk" ],
label: "Hawk",
iconClass: "font-icon icon-hawk-m",
description: ""
} ]
}, {
id: "dmos",
label: "数人云基础服务",
items: [ {
id: "monitor",
categoryAliases: [ "monitor" ],
label: "Monitor",
iconClass: "font-icon icon-monitor-m",
description: ""
} ]
}, {
id: "languages",
label: gettext("Languages"),
iconClassDefault: "fa fa-code",
items: [ {
id: "java",
label: gettext("Java"),
iconClass: "font-icon icon-openjdk",
subcategories: [ {
id: "java-subcategories",
items: [ {
id: "amq",
label: gettext("Red Hat JBoss A-MQ")
}, {
id: "processserver",
label: gettext("Red Hat JBoss BPM Suite")
}, {
id: "decisionserver",
label: gettext("Red Hat JBoss BRMS")
}, {
id: "datagrid",
label: gettext("Red Hat JBoss Data Grid")
}, {
id: "eap",
label: gettext("Red Hat JBoss EAP")
}, {
id: "jboss-fuse",
label: gettext("Red Hat JBoss Fuse")
}, {
id: "tomcat",
label: gettext("Red Hat JBoss Web Server (Tomcat)")
}, {
id: "sso",
label: gettext("Red Hat Single Sign-On")
}, {
id: "wildfly",
label: gettext("WildFly")
} ]
} ]
}, {
id: "javascript",
categoryAliases: [ "nodejs", "js" ],
label: gettext("JavaScript"),
iconClass: "font-icon icon-js"
}, {
id: "dotnet",
label: gettext(".NET"),
iconClass: "font-icon icon-dotnet"
}, {
id: "perl",
label: gettext("Perl"),
iconClass: "font-icon icon-perl"
}, {
id: "php",
label: gettext("PHP"),
iconClass: "font-icon icon-php"
}, {
id: "python",
label: gettext("Python"),
iconClass: "font-icon icon-python"
}, {
id: "ruby",
label: gettext("Ruby"),
iconClass: "font-icon icon-ruby"
}, {
id: "Golang",
categoryAliases: [ "go" ],
label: gettext("Go"),
iconClass: "font-icon icon-go-gopher"
} ]
}, {
id: "technologies",
label: gettext("Technologies"),
items: [ {
id: "business-process-services",
categoryAliases: [ "decisionserver", "processserver" ],
label: gettext("Business Process Services"),
description: gettext("Model, automate, and orchestrate business processes across applications, services, and data.")
}, {
id: "ci-cd",
categoryAliases: [ "jenkins" ],
label: gettext("Continuous Integration & Deployment"),
description: gettext("Automate the build, test, and deployment of your application with each new code revision.")
}, {
id: "datastore",
categoryAliases: [ "database", "datagrid" ],
label: gettext("Data Stores"),
description: gettext("Store and manage collections of data.")
}, {
id: "messaging",
label: gettext("Messaging"),
description: gettext("Facilitate communication between applications and distributed processes with a messaging server.")
}, {
id: "integration",
label: gettext("Integration"),
description: gettext("Connect with other applications and data to enhance functionality without duplication.")
}, {
id: "single-sign-on",
categoryAliases: [ "sso" ],
label: gettext("Single Sign-On"),
description: gettext("A centralized authentication server for users to log in, log out, register, and manage user accounts for applications and RESTful web services.")
}, {
id: "",
label: gettext("Uncategorized"),
description: ""
} ]
} ],
SAAS_OFFERINGS: [],
APP_LAUNCHER_NAVIGATION: [],
QUOTA_NOTIFICATION_MESSAGE: {},
LOGO_BASE_URL: "images/logos/",
LOGOS: {
"icon-3scale": "3scale.svg",
"icon-aerogear": "aerogear.svg",
"icon-amq": "amq.svg",
"icon-angularjs": "angularjs.svg",
"icon-ansible": "ansible.svg",
"icon-apache": "apache.svg",
"icon-beaker": "beaker.svg",
"icon-capedwarf": "capedwarf.svg",
"icon-cassandra": "cassandra.svg",
"icon-clojure": "clojure.svg",
"icon-codeigniter": "codeigniter.svg",
"icon-datagrid": "datagrid.svg",
"icon-datavirt": "datavirt.svg",
"icon-decisionserver": "decisionserver.svg",
"icon-django": "django.svg",
"icon-dotnet": "dotnet.svg",
"icon-drupal": "drupal.svg",
"icon-eap": "eap.svg",
"icon-elastic": "elastic.svg",
"icon-erlang": "erlang.svg",
"icon-git": "git.svg",
"icon-github": "github.svg",
"icon-gitlab": "gitlab.svg",
"icon-glassfish": "glassfish.svg",
"icon-go-gopher": "go-gopher.svg",
"icon-grails": "grails.svg",
"icon-hadoop": "hadoop.svg",
"icon-haproxy": "haproxy.svg",
"icon-infinispan": "infinispan.svg",
"icon-jboss": "jboss.svg",
"icon-jenkins": "jenkins.svg",
"icon-jetty": "jetty.svg",
"icon-joomla": "joomla.svg",
"icon-jruby": "jruby.svg",
"icon-js": "js.svg",
"icon-laravel": "laravel.svg",
"icon-load-balancer": "load-balancer.svg",
"icon-mariadb": "mariadb.svg",
"icon-mediawiki": "mediawiki.svg",
"icon-memcached": "memcached.svg",
"icon-mongodb": "mongodb.svg",
"icon-mysql-database": "mysql-database.svg",
"icon-nginx": "nginx.svg",
"icon-nodejs": "nodejs.svg",
"icon-openjdk": "openjdk.svg",
"icon-openstack": "openstack.svg",
"icon-perl": "perl.svg",
"icon-phalcon": "phalcon.svg",
"icon-php": "php.svg",
"icon-play": "play.svg",
"icon-postgresql": "postgresql.svg",
"icon-processserver": "processserver.svg",
"icon-python": "python.svg",
"icon-rabbitmq": "rabbitmq.svg",
"icon-rails": "rails.svg",
"icon-redis": "redis.svg",
"icon-rh-integration": "rh-integration.svg",
"icon-rh-openjdk": "openjdk.svg",
"icon-rh-tomcat": "rh-tomcat.svg",
"icon-ruby": "ruby.svg",
"icon-scala": "scala.svg",
"icon-shadowman": "shadowman.svg",
"icon-spring": "spring.svg",
"icon-sso": "sso.svg",
"icon-stackoverflow": "stackoverflow.svg",
"icon-symfony": "symfony.svg",
"icon-tomcat": "tomcat.svg",
"icon-wildfly": "wildfly.svg",
"icon-wordpress": "wordpress.svg",
"icon-zend": "zend.svg"
}
}), angular.module("i18n", [ "gettext", "angularMoment" ]).run([ "$window", "gettextCatalog", "amMoment", function(a, b, c) {
function d() {
if (4 === g.readyState) if (200 === g.status) {
var a = JSON.parse(g.response);
for (var c in a) b.setStrings(c, a[c]);
} else console.error("Problem retrieving language data");
}
function e(a) {
null !== g ? (g.onreadystatechange = d, g.open("GET", a, !1), g.send(null)) : console.error("Your browser does not support XMLHttpRequest.");
}
b.debug = !1;
var f = a.OPENSHIFT_LANG, g = new XMLHttpRequest();
"en" !== f && (e("languages/" + f + ".json"), b.setCurrentLanguage(f), c.changeLocale(f.toLowerCase()));
} ]), angular.module("openshiftConsole", [ "ngAnimate", "ngCookies", "ngResource", "ngRoute", "ngSanitize", "kubernetesUI", "registryUI.images", "ui.bootstrap", "patternfly.charts", "patternfly.navigation", "patternfly.sort", "patternfly.notification", "openshiftConsoleTemplates", "ui.ace", "extension-registry", "as.sortable", "ui.select", "angular-inview", "angularMoment", "ab-base64", "gettext", "i18n", "openshiftCommonServices", "openshiftCommonUI", "webCatalog", "gettext" ]).config([ "$routeProvider", function(a) {
var b, c = {
templateUrl: "views/projects.html",
controller: "ProjectsController"
};
_.get(window, "OPENSHIFT_CONSTANTS.DISABLE_SERVICE_CATALOG_LANDING_PAGE") ? (b = c, a.when("/projects", {
redirectTo: "/"
})) : (b = {
templateUrl: "views/landing-page.html",
controller: "LandingPageController",
reloadOnSearch: !1
}, a.when("/projects", c)), a.when("/", b).when("/create-project", {
templateUrl: "views/create-project.html",
controller: "CreateProjectController"
}).when("/project/:project", {
redirectTo: function(a) {
return "/project/" + encodeURIComponent(a.project) + "/overview";
}
}).when("/project/:project/overview", {
templateUrl: "views/overview.html",
controller: "OverviewController",
controllerAs: "overview",
reloadOnSearch: !1
}).when("/project/:project/quota", {
templateUrl: "views/quota.html",
controller: "QuotaController"
}).when("/project/:project/monitoring", {
templateUrl: "views/monitoring.html",
controller: "MonitoringController",
reloadOnSearch: !1
}).when("/project/:project/membership", {
templateUrl: "views/membership.html",
controller: "MembershipController",
reloadOnSearch: !1
}).when("/project/:project/browse", {
redirectTo: function(a) {
return "/project/" + encodeURIComponent(a.project) + "/browse/pods";
}
}).when("/project/:project/browse/builds", {
templateUrl: "views/builds.html",
controller: "BuildsController",
reloadOnSearch: !1
}).when("/project/:project/browse/pipelines", {
templateUrl: "views/pipelines.html",
controller: "PipelinesController"
}).when("/project/:project/browse/builds/:buildconfig", {
templateUrl: "views/browse/build-config.html",
controller: "BuildConfigController",
reloadOnSearch: !1
}).when("/project/:project/browse/pipelines/:buildconfig", {
templateUrl: "views/browse/build-config.html",
controller: "BuildConfigController",
resolve: {
isPipeline: [ "$route", function(a) {
a.current.params.isPipeline = !0;
} ]
}
}).when("/project/:project/edit/yaml", {
templateUrl: "views/edit/yaml.html",
controller: "EditYAMLController"
}).when("/project/:project/edit/builds/:buildconfig", {
templateUrl: "views/edit/build-config.html",
controller: "EditBuildConfigController"
}).when("/project/:project/edit/pipelines/:buildconfig", {
templateUrl: "views/edit/build-config.html",
controller: "EditBuildConfigController",
resolve: {
isPipeline: [ "$route", function(a) {
a.current.params.isPipeline = !0;
} ]
},
reloadOnSearch: !1
}).when("/project/:project/browse/builds/:buildconfig/:build", {
templateUrl: function(a) {
return "chromeless" === a.view ? "views/logs/chromeless-build-log.html" : "views/browse/build.html";
},
controller: "BuildController",
reloadOnSearch: !1
}).when("/project/:project/browse/pipelines/:buildconfig/:build", {
templateUrl: "views/browse/build.html",
controller: "BuildController",
resolve: {
isPipeline: [ "$route", function(a) {
a.current.params.isPipeline = !0;
} ]
},
reloadOnSearch: !1
}).when("/project/:project/browse/builds-noconfig/:build", {
templateUrl: "views/browse/build.html",
controller: "BuildController",
reloadOnSearch: !1
}).when("/project/:project/browse/pipelines-noconfig/:build", {
templateUrl: "views/browse/build.html",
controller: "BuildController",
resolve: {
isPipeline: [ "$route", function(a) {
a.current.params.isPipeline = !0;
} ]
},
reloadOnSearch: !1
}).when("/project/:project/browse/deployments", {
templateUrl: "views/deployments.html",
controller: "DeploymentsController",
reloadOnSearch: !1
}).when("/project/:project/browse/deployment/:deployment", {
templateUrl: "views/browse/deployment.html",
controller: "DeploymentController",
reloadOnSearch: !1
}).when("/project/:project/browse/dc/:deploymentconfig", {
templateUrl: "views/browse/deployment-config.html",
controller: "DeploymentConfigController",
reloadOnSearch: !1
}).when("/project/:project/edit/dc/:deploymentconfig", {
templateUrl: "views/edit/deployment-config.html",
controller: "EditDeploymentConfigController"
}).when("/project/:project/browse/stateful-sets/", {
templateUrl: "views/browse/stateful-sets.html",
controller: "StatefulSetsController",
reloadOnSearch: !1
}).when("/project/:project/browse/stateful-sets/:statefulset", {
templateUrl: "views/browse/stateful-set.html",
controller: "StatefulSetController",
reloadOnSearch: !1
}).when("/project/:project/browse/rs/:replicaSet", {
templateUrl: "views/browse/replica-set.html",
resolve: {
kind: function() {
return "ReplicaSet";
}
},
controller: "ReplicaSetController",
reloadOnSearch: !1
}).when("/project/:project/browse/rc/:replicaSet", {
templateUrl: function(a) {
return "chromeless" === a.view ? "views/logs/chromeless-deployment-log.html" : "views/browse/replica-set.html";
},
resolve: {
kind: function() {
return "ReplicationController";
}
},
controller: "ReplicaSetController",
reloadOnSearch: !1
}).when("/project/:project/browse/events", {
templateUrl: "views/events.html",
controller: "EventsController"
}).when("/project/:project/browse/images", {
templateUrl: "views/images.html",
controller: "ImagesController",
reloadOnSearch: !1
}).when("/project/:project/browse/images/:imagestream", {
templateUrl: "views/browse/imagestream.html",
controller: "ImageStreamController"
}).when("/project/:project/browse/images/:imagestream/:tag", {
templateUrl: "views/browse/image.html",
controller: "ImageController",
reloadOnSearch: !1
}).when("/project/:project/browse/pods", {
templateUrl: "views/pods.html",
controller: "PodsController",
reloadOnSearch: !1
}).when("/project/:project/browse/pods/:pod", {
templateUrl: function(a) {
return "chromeless" === a.view ? "views/logs/chromeless-pod-log.html" : "views/browse/pod.html";
},
controller: "PodController",
reloadOnSearch: !1
}).when("/project/:project/browse/services", {
templateUrl: "views/services.html",
controller: "ServicesController",
reloadOnSearch: !1
}).when("/project/:project/browse/services/:service", {
templateUrl: "views/browse/service.html",
controller: "ServiceController",
reloadOnSearch: !1
}).when("/project/:project/browse/service-instances", {
templateUrl: "views/service-instances.html",
controller: "ServiceInstancesController",
reloadOnSearch: !1
}).when("/project/:project/browse/service-instances/:instance", {
templateUrl: "views/browse/service-instance.html",
controller: "ServiceInstanceController",
reloadOnSearch: !1
}).when("/project/:project/browse/storage", {
templateUrl: "views/storage.html",
controller: "StorageController",
reloadOnSearch: !1
}).when("/project/:project/browse/secrets/:secret", {
templateUrl: "views/browse/secret.html",
controller: "SecretController",
reloadOnSearch: !1
}).when("/project/:project/browse/secrets", {
templateUrl: "views/secrets.html",
controller: "SecretsController",
reloadOnSearch: !1
}).when("/project/:project/create-secret", {
templateUrl: "views/create-secret.html",
controller: "CreateSecretController"
}).when("/project/:project/browse/config-maps", {
templateUrl: "views/browse/config-maps.html",
controller: "ConfigMapsController",
reloadOnSearch: !1
}).when("/project/:project/browse/config-maps/:configMap", {
templateUrl: "views/browse/config-map.html",
controller: "ConfigMapController"
}).when("/project/:project/create-config-map", {
templateUrl: "views/create-config-map.html",
controller: "CreateConfigMapController"
}).when("/project/:project/edit/config-maps/:configMap", {
templateUrl: "views/edit/config-map.html",
controller: "EditConfigMapController"
}).when("/project/:project/browse/other", {
templateUrl: "views/other-resources.html",
controller: "OtherResourcesController",
reloadOnSearch: !1
}).when("/project/:project/browse/persistentvolumeclaims/:pvc", {
templateUrl: "views/browse/persistent-volume-claim.html",
controller: "PersistentVolumeClaimController"
}).when("/project/:project/browse/routes", {
templateUrl: "views/browse/routes.html",
controller: "RoutesController",
reloadOnSearch: !1
}).when("/project/:project/edit/routes/:route", {
templateUrl: "views/edit/route.html",
controller: "EditRouteController"
}).when("/project/:project/browse/routes/:route", {
templateUrl: "views/browse/route.html",
controller: "RouteController"
}).when("/project/:project/create-route", {
templateUrl: "views/create-route.html",
controller: "CreateRouteController"
}).when("/project/:project/edit", {
templateUrl: "views/edit/project.html",
controller: "EditProjectController"
}).when("/project/:project/create-pvc", {
templateUrl: "views/create-persistent-volume-claim.html",
controller: "CreatePersistentVolumeClaimController"
}).when("/project/:project/attach-pvc", {
templateUrl: "views/attach-pvc.html",
controller: "AttachPVCController"
}).when("/project/:project/add-config-volume", {
templateUrl: "views/add-config-volume.html",
controller: "AddConfigVolumeController"
}).when("/project/:project/create", {
templateUrl: "views/create.html",
controller: "CreateController",
reloadOnSearch: !1
}).when("/project/:project/create/category/:category", {
templateUrl: "views/create/category.html",
controller: "BrowseCategoryController"
}).when("/project/:project/create/category/:category/:subcategory", {
templateUrl: "views/create/category.html",
controller: "BrowseCategoryController"
}).when("/project/:project/create/fromtemplate", {
templateUrl: "views/newfromtemplate.html",
controller: "NewFromTemplateController"
}).when("/project/:project/create/fromimage", {
templateUrl: "views/create/fromimage.html",
controller: "CreateFromImageController"
}).when("/project/:project/create/next", {
templateUrl: "views/create/next-steps.html",
controller: "NextStepsController"
}).when("/project/:project/set-limits", {
templateUrl: "views/set-limits.html",
controller: "SetLimitsController"
}).when("/project/:project/edit/autoscaler", {
templateUrl: "views/edit/autoscaler.html",
controller: "EditAutoscalerController"
}).when("/project/:project/edit/health-checks", {
templateUrl: "views/edit/health-checks.html",
controller: "EditHealthChecksController"
}).when("/about", {
templateUrl: "views/about.html",
controller: "AboutController"
}).when("/command-line", {
templateUrl: "views/command-line.html",
controller: "CommandLineController"
}).when("/oauth", {
templateUrl: "views/util/oauth.html",
controller: "OAuthController"
}).when("/error", {
templateUrl: "views/util/error.html",
controller: "ErrorController"
}).when("/logout", {
templateUrl: "views/util/logout.html",
controller: "LogoutController"
}).when("/create", {
templateUrl: "views/create-from-url.html",
controller: "CreateFromURLController"
}).when("/createProject", {
redirectTo: "/create-project"
}).when("/project/:project/createRoute", {
redirectTo: "/project/:project/create-route"
}).when("/project/:project/attachPVC", {
redirectTo: "/project/:project/attach-pvc"
}).when("/project/:project/browse/deployments/:deploymentconfig", {
redirectTo: "/project/:project/browse/dc/:deploymentconfig"
}).when("/project/:project/browse/deployments/:deploymentconfig/:rc", {
redirectTo: "/project/:project/browse/rc/:rc"
}).when("/project/:project/browse/deployments-replicationcontrollers/:rc", {
redirectTo: "/project/:project/browse/rc/:rc"
}).otherwise({
redirectTo: "/"
});
} ]).constant("LOGGING_URL", _.get(window.OPENSHIFT_CONFIG, "loggingURL")).constant("METRICS_URL", _.get(window.OPENSHIFT_CONFIG, "metricsURL")).constant("LIMIT_REQUEST_OVERRIDES", _.get(window.OPENSHIFT_CONFIG, "limitRequestOverrides")).constant("SOURCE_URL_PATTERN", /^[a-z][a-z0-9+.-@]*:(\/\/)?[0-9a-z_-]+/i).constant("RELATIVE_PATH_PATTERN", /^(?!\/)(?!\.\.(\/|$))(?!.*\/\.\.(\/|$)).*$/).constant("IS_SAFARI", /Version\/[\d\.]+.*Safari/.test(navigator.userAgent)).constant("amTimeAgoConfig", {
titleFormat: "LLL"
}).config([ "kubernetesContainerSocketProvider", function(a) {
a.WebSocketFactory = "ContainerWebSocket";
} ]).config([ "$compileProvider", function(a) {
a.aHrefSanitizationWhitelist(/^\s*(https?|mailto|git):/i);
} ]).run([ "$rootScope", "LabelFilter", function(a, b) {
b.persistFilterState(!0), a.$on("$routeChangeSuccess", function() {
b.readPersistedState();
});
} ]).run([ "durationFilter", "timeOnlyDurationFromTimestampsFilter", function(a, b) {
setInterval(function() {
$(".duration[data-timestamp]").text(function(c, d) {
var e = $(this).data("timestamp"), f = $(this).data("omit-single"), g = $(this).data("precision"), h = $(this).data("time-only");
return h ? b(e, null) || d : a(e, null, f, g) || d;
});
}, 1e3);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
} ]).run([ "IS_IOS", function(a) {
a && $("body").addClass("ios");
} ]).run([ "$rootScope", function(a) {
_.get(window, "OPENSHIFT_CONSTANTS.ENABLE_TECH_PREVIEW_FEATURE.service_catalog_landing_page") && (a.globalTechPreviewIndicator = !0, $("body").addClass("tech-preview"));
} ]).run([ "DataService", "AuthService", function(a, b) {
var c = b.UserStore(), d = {
errorNotification:!1,
http:{
auth:{
token:c.getToken(),
triggerLogin:!1
}
}
};
a.get("users", "~", {}, d).then(function(a) {
c.setUser(a, 86400);
});
} ]), hawtioPluginLoader.addModule("openshiftConsole"), angular.module("openshiftConsole").factory("APIDiscovery", [ "LOGGING_URL", "METRICS_URL", "$q", function(a, b, c) {
=======
=======
>>>>>>> Init translation.
} ]).run([ "IS_IOS", function(e) {
e && $("body").addClass("ios");
<<<<<<< HEAD
} ]).run([ "$rootScope", function(e) {
_.get(window, "OPENSHIFT_CONSTANTS.ENABLE_TECH_PREVIEW_FEATURE.service_catalog_landing_page") && (e.globalTechPreviewIndicator = !0, $("body").addClass("tech-preview"));
<<<<<<< HEAD
} ]), hawtioPluginLoader.addModule("openshiftConsole"), angular.module("openshiftConsole").factory("APIDiscovery", [ "LOGGING_URL", "METRICS_URL", "$q", function(e, t, n) {
>>>>>>> Bump grunt-contrib-uglify to 3.0.1
=======
=======
>>>>>>> Enable new landing page experience by default
=======
} ]).run([ "IS_IOS", function(a) {
a && $("body").addClass("ios");
} ]).run([ "$window", "gettextCatalog", "amMoment", function(a, b, c) {
b.debug = !1;
var d = a.OPENSHIFT_LANG;
"en" !== d && (b.loadRemote("languages/" + d + ".json"), b.setCurrentLanguage(d), c.changeLocale(d.toLowerCase()));
>>>>>>> rebase from poc 3.6
} ]), hawtioPluginLoader.addModule("openshiftConsole"), angular.module("openshiftConsole").factory("BrowserStore", [ function() {
var a = "openshift/", b = {
local: window.localStorage,
session: window.sessionStorage
};
return {
saveJSON: function(c, d, e) {
return b[c].setItem(a + d, JSON.stringify(e));
},
loadJSON: function(c, d) {
return JSON.parse(b[c].getItem(a + d) || "{}");
}
};
<<<<<<< HEAD
<<<<<<< HEAD
} ]), angular.module("openshiftConsole").factory("APIDiscovery", [ "LOGGING_URL", "METRICS_URL", "$q", function(e, t, n) {
>>>>>>> Add notification-drawer to show curated list of events to user
=======
} ]), angular.module("openshiftConsole").factory("APIDiscovery", [ "LOGGING_URL", "METRICS_URL", "$q", "$filter", function(e, t, n, a) {
<<<<<<< HEAD
>>>>>>> bug 1480988. Use project annotation to determine kibana url for ops namespaces
=======
=======
} ]).run([ "IS_IOS", function(a) {
a && $("body").addClass("ios");
} ]).run([ "$rootScope", function(a) {
_.get(window, "OPENSHIFT_CONSTANTS.ENABLE_TECH_PREVIEW_FEATURE.service_catalog_landing_page") && (a.globalTechPreviewIndicator = !0, $("body").addClass("tech-preview"));
} ]).run([ "$window", "gettextCatalog", "amMoment", function(a, b, c) {
b.debug = !1;
var d = a.OPENSHIFT_LANG;
"en" !== d && (b.loadRemote("languages/" + d + ".json"), b.setCurrentLanguage(d), c.changeLocale(d.toLowerCase()));
} ]), hawtioPluginLoader.addModule("openshiftConsole"), angular.module("openshiftConsole").factory("APIDiscovery", [ "LOGGING_URL", "METRICS_URL", "$q", function(a, b, c) {
>>>>>>> a7d6e5ea... DM update.
>>>>>>> Init translation.
=======
} ]), angular.module("openshiftConsole").factory("APIDiscovery", [ "LOGGING_URL", "METRICS_URL", "$q", "$filter", function(a, b, c, d) {
>>>>>>> rebase from poc 3.6
return {
getLoggingURL: function(b) {
var e = a, f = d("annotation")(b, "loggingUIHostname");
return f && (e = "https://" + f), c.when(e);
},
getMetricsURL: function() {
return c.when(b);
}
};
} ]), angular.module("openshiftConsole").service("ApplicationGenerator", [ "DataService", "APIService", "Logger", "$parse", "$q", function(a, b, c, d, e) {
var f = {}, g = function(a) {
return _.isArray(a) ? a : _.map(a, function(a, b) {
return {
name: b,
value: a
};
});
};
return f._generateSecret = function() {
function a() {
return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
}
return a() + a() + a() + a();
}, f.parsePorts = function(a) {
var b = function(b) {
var e = [];
return angular.forEach(b, function(b, f) {
var g = f.split("/");
1 === g.length && g.push("tcp");
var h = parseInt(g[0], 10);
isNaN(h) ? c.warn("Container port " + g[0] + " is not a number for image " + d("metadata.name")(a)) : e.push({
containerPort: h,
protocol: g[1].toUpperCase()
});
}), e.sort(function(a, b) {
return a.containerPort - b.containerPort;
}), e;
}, e = d("dockerImageMetadata.Config.ExposedPorts")(a) || d("dockerImageMetadata.ContainerConfig.ExposedPorts")(a) || [];
return b(e);
}, f.generate = function(a) {
var b = f.parsePorts(a.image);
a.annotations["openshift.io/generated-by"] = "OpenShiftWebConsole";
var c;
null !== a.buildConfig.sourceUrl && (c = {
name: a.name,
tag: "latest",
kind: "ImageStreamTag",
toString: function() {
return this.name + ":" + this.tag;
}
});
var d = {
imageStream: f._generateImageStream(a),
buildConfig: f._generateBuildConfig(a, c, a.labels),
deploymentConfig: f._generateDeploymentConfig(a, c, b, a.labels)
};
a.scaling.autoscale && (d.hpa = f._generateHPA(a, d.deploymentConfig));
var e = f._generateService(a, a.name, b);
return e && (d.service = e, d.route = f._generateRoute(a, a.name, d.service.metadata.name)), d;
}, f.createRoute = function(a, b, c) {
return f._generateRoute({
labels: c || {},
routing: angular.extend({
include: !0
}, a)
}, a.name, b);
}, f._generateRoute = function(a, b, c) {
if (!a.routing.include) return null;
var d = {
kind: "Route",
apiVersion: "v1",
metadata: {
name: b,
labels: a.labels,
annotations: a.annotations
},
spec: {
to: {
kind: "Service",
name: c
},
wildcardPolicy: "None"
}
}, e = a.routing.host;
e && (e.startsWith("*.") ? (d.spec.wildcardPolicy = "Subdomain", d.spec.host = "wildcard" + e.substring(1)) : d.spec.host = e), a.routing.path && (d.spec.path = a.routing.path), a.routing.targetPort && (d.spec.port = {
targetPort: a.routing.targetPort
});
var f = a.routing.tls;
return f && f.termination && (d.spec.tls = {
termination: f.termination
}, f.insecureEdgeTerminationPolicy && (d.spec.tls.insecureEdgeTerminationPolicy = f.insecureEdgeTerminationPolicy), "passthrough" !== f.termination && (f.certificate && (d.spec.tls.certificate = f.certificate), f.key && (d.spec.tls.key = f.key), f.caCertificate && (d.spec.tls.caCertificate = f.caCertificate), f.destinationCACertificate && "reencrypt" === f.termination && (d.spec.tls.destinationCACertificate = f.destinationCACertificate))), d;
}, f._generateDeploymentConfig = function(a, b, c) {
var d = g(a.deploymentConfig.envVars), e = angular.copy(a.labels);
e.deploymentconfig = a.name;
var f, h = {
image: b.toString(),
name: a.name,
ports: c,
env: d,
resources: _.get(a, "container.resources")
};
f = a.scaling.autoscaling ? a.scaling.minReplicas || 1 : a.scaling.replicas;
var i = {
apiVersion: "v1",
kind: "DeploymentConfig",
metadata: {
name: a.name,
labels: a.labels,
annotations: a.annotations
},
spec: {
replicas: f,
selector: {
deploymentconfig: a.name
},
triggers: [],
template: {
metadata: {
labels: e
},
spec: {
containers: [ h ]
}
}
}
};
return i.spec.triggers.push({
type: "ImageChange",
imageChangeParams: {
automatic: !!a.deploymentConfig.deployOnNewImage,
containerNames: [ a.name ],
from: {
kind: b.kind,
name: b.toString()
}
}
}), a.deploymentConfig.deployOnConfigChange && i.spec.triggers.push({
type: "ConfigChange"
}), i;
}, f._generateHPA = function(a, b) {
var c = {
apiVersion: "autoscaling/v1",
kind: "HorizontalPodAutoscaler",
metadata: {
name: a.name,
labels: a.labels,
annotations: a.annotations
},
spec: {
scaleTargetRef: {
kind: "DeploymentConfig",
name: b.metadata.name,
apiVersion: "extensions/v1beta1",
subresource: "scale"
},
minReplicas: a.scaling.minReplicas,
maxReplicas: a.scaling.maxReplicas,
targetCPUUtilizationPercentage: a.scaling.targetCPU || a.scaling.defaultTargetCPU || null
}
};
return c;
}, f._generateBuildConfig = function(a, b) {
var c = g(a.buildConfig.envVars), d = [ {
generic: {
secret: f._generateSecret()
},
type: "Generic"
} ];
a.buildConfig.buildOnSourceChange && d.push({
github: {
secret: f._generateSecret()
},
type: "GitHub"
}), a.buildConfig.buildOnImageChange && d.push({
imageChange: {},
type: "ImageChange"
}), a.buildConfig.buildOnConfigChange && d.push({
type: "ConfigChange"
});
var e = new URI(a.buildConfig.sourceUrl), h = e.fragment();
h || (h = "master"), e.fragment("");
var i = e.href(), j = {
apiVersion: "v1",
kind: "BuildConfig",
metadata: {
name: a.name,
labels: a.labels,
annotations: a.annotations
},
spec: {
output: {
to: {
name: b.toString(),
kind: b.kind
}
},
source: {
git: {
ref: a.buildConfig.gitRef || h,
uri: i
},
type: "Git"
},
strategy: {
type: "Source",
sourceStrategy: {
from: {
kind: "ImageStreamTag",
name: a.imageName + ":" + a.imageTag,
namespace: a.namespace
},
env: c
}
},
triggers: d
}
};
return _.get(a, "buildConfig.secrets.gitSecret[0].name") && (j.spec.source.sourceSecret = _.head(a.buildConfig.secrets.gitSecret)), a.buildConfig.contextDir && (j.spec.source.contextDir = a.buildConfig.contextDir), j;
}, f._generateImageStream = function(a) {
return {
apiVersion: "v1",
kind: "ImageStream",
metadata: {
name: a.name,
labels: a.labels,
annotations: a.annotations
}
};
}, f.getServicePort = function(a) {
return {
port: a.containerPort,
targetPort: a.containerPort,
protocol: a.protocol,
name: (a.containerPort + "-" + a.protocol).toLowerCase()
};
}, f._generateService = function(a, b, c) {
if (!c || !c.length) return null;
var d = {
kind: "Service",
apiVersion: "v1",
metadata: {
name: b,
labels: a.labels,
annotations: a.annotations
},
spec: {
selector: {
deploymentconfig: a.name
},
ports: _.map(c, f.getServicePort)
}
};
return d;
}, f.ifResourcesDontExist = function(c, d) {
function f() {
0 === j && (h.length > 0 ? g.reject({
nameTaken: !0
}) : g.resolve({
nameTaken: !1
}));
}
var g = e.defer(), h = [], i = [], j = c.length;
return c.forEach(function(c) {
var e = b.objectToResourceGroupVersion(c);
return e ? b.apiInfo(e) ? void a.get(e, c.metadata.name, {
namespace: d
}, {
errorNotification: !1
}).then(function(a) {
h.push(a), j--, f();
}, function(a) {
i.push(a), j--, f();
}) : (i.push({
data: {
message: b.unsupportedObjectKindOrVersion(c)
}
}), j--, void f()) : (i.push({
data: {
message: b.invalidObjectKindOrVersion(c)
}
}), j--, void f());
}), g.promise;
}, f;
} ]), angular.module("openshiftConsole").service("Navigate", [ "$location", "$window", "$timeout", "annotationFilter", "LabelFilter", "$filter", "APIService", function(a, b, c, d, e, f, g) {
var h = f("annotation"), i = f("buildConfigForBuild"), j = f("isJenkinsPipelineStrategy"), k = f("displayName"), l = function(a, b) {
return _.get(b, "isPipeline") ? "pipelines" : _.isObject(a) && j(a) ? "pipelines" : "builds";
};
return {
toErrorPage: function(c, d, e) {
var f = URI("error").query({
error_description: c,
error: d
}).toString();
e ? b.location.href = f : a.url(f).replace();
},
toProjectOverview: function(b) {
a.path(this.projectOverviewURL(b));
},
projectOverviewURL: function(a) {
return "project/" + encodeURIComponent(a) + "/overview";
},
toProjectList: function() {
a.path("projects");
},
membershipURL: function(a) {
return "project/" + encodeURIComponent(a) + "/membership";
},
toProjectMembership: function(b) {
a.path(this.membershipURL(b));
},
quotaURL: function(a) {
return "project/" + encodeURIComponent(a) + "/quota";
},
createFromImageURL: function(a, b, c, d) {
var e = URI.expand("project/{project}/create/fromimage{?q*}", {
project: c,
q: angular.extend({
imageStream: a.metadata.name,
imageTag: b,
namespace: a.metadata.namespace,
displayName: k(a)
}, d || {})
});
return e.toString();
},
createFromTemplateURL: function(a, b, c) {
var d = URI.expand("project/{project}/create/fromtemplate{?q*}", {
project: b,
q: angular.extend({
template: a.metadata.name,
namespace: a.metadata.namespace
}, c || {})
});
return d.toString();
},
toNextSteps: function(b, c, d) {
var e = {
name: b
};
_.isObject(d) && _.extend(e, d), a.path("project/" + encodeURIComponent(c) + "/create/next").search(e);
},
toPodsForDeployment: function(b, d) {
return 1 === _.size(d) ? void this.toResourceURL(_.sample(d)) : (a.url("/project/" + b.metadata.namespace + "/browse/pods"), void c(function() {
e.setLabelSelector(new LabelSelector(b.spec.selector, (!0)));
}, 1));
},
resourceURL: function(a, b, c, d, e) {
if (d = d || "browse", !(a && (a.metadata || b && c))) return null;
b || (b = a.kind), c || (c = a.metadata.namespace);
var h = a;
a.metadata && (h = a.metadata.name);
var i = URI("").segment("project").segmentCoded(c).segment(d);
switch (b) {
case "Build":
var j = f("buildConfigForBuild")(a), k = l(a, e);
j ? i.segment(k).segmentCoded(j).segmentCoded(h) : i.segment(k + "-noconfig").segmentCoded(h);
break;

case "BuildConfig":
i.segment(l(a, e)).segmentCoded(h);
break;

case "ConfigMap":
i.segment("config-maps").segmentCoded(h);
break;

case "Deployment":
i.segment("deployment").segmentCoded(h);
break;

case "DeploymentConfig":
i.segment("dc").segmentCoded(h);
break;

case "ReplicaSet":
i.segment("rs").segmentCoded(h);
break;

case "ReplicationController":
i.segment("rc").segmentCoded(h);
break;

case "ImageStream":
i.segment("images").segmentCoded(h);
break;

case "ImageStreamTag":
var m = h.indexOf(":");
i.segment("images").segmentCoded(h.substring(0, m)).segmentCoded(h.substring(m + 1));
break;

case "ServiceInstance":
i.segment("service-instances").segmentCoded(h);
break;

case "StatefulSet":
i.segment("stateful-sets").segmentCoded(h);
break;

case "PersistentVolumeClaim":
case "Pod":
case "Route":
case "Secret":
case "Service":
i.segment(g.kindToResource(b)).segmentCoded(h);
break;

default:
var n;
if (a.metadata) n = g.objectToResourceGroupVersion(a); else if (_.get(e, "apiVersion")) {
var o = g.kindToResource(b), p = g.parseGroupVersion(e.apiVersion);
p.resource = o, n = g.toResourceGroupVersion(p);
} else n = g.toResourceGroupVersion(g.kindToResource(b));
var q = g.apiInfo(n);
if (!q) return null;
i.segment("other").search({
kind: b,
group: n.group
});
}
return _.get(e, "tab") && i.setSearch("tab", e.tab), i.toString();
},
toResourceURL: function(b) {
a.url(this.resourceURL(b));
},
configURLForResource: function(a, b) {
var c, d, e = _.get(a, "kind"), f = _.get(a, "metadata.namespace");
if (!e || !f) return null;
switch (e) {
case "Build":
return c = i(a), c ? this.resourceURL(c, "BuildConfig", f, b, {
isPipeline: j(a)
}) : null;

case "ReplicationController":
return d = h(a, "deploymentConfig"), d ? this.resourceURL(d, "DeploymentConfig", f, b) : null;
}
return null;
},
resourceListURL: function(a, b) {
var c = {
builds: "builds",
buildconfigs: "builds",
configmaps: "config-maps",
deployments: "deployments",
deploymentconfigs: "deployments",
imagestreams: "images",
pods: "pods",
replicasets: "deployments",
replicationcontrollers: "deployments",
routes: "routes",
secrets: "secrets",
services: "services",
serviceinstances: "service-instances",
persistentvolumeclaims: "storage",
statefulsets: "stateful-sets"
};
return URI.expand("project/{projectName}/browse/{browsePath}", {
projectName: b,
browsePath: c[a]
}).toString();
},
toResourceList: function(b, c) {
a.url(this.resourceListURL(b, c));
},
yamlURL: function(a, b) {
if (!a) return "";
var c = g.parseGroupVersion(a.apiVersion);
return URI.expand("project/{projectName}/edit/yaml?kind={kind}&name={name}&group={group}&returnURL={returnURL}", {
projectName: a.metadata.namespace,
kind: a.kind,
name: a.metadata.name,
group: c.group || "",
returnURL: b || ""
}).toString();
},
healthCheckURL: function(a, b, c, d) {
return URI.expand("project/{projectName}/edit/health-checks?kind={kind}&name={name}&group={group}", {
projectName: a,
kind: b,
name: c,
group: d || ""
}).toString();
}
};
} ]), angular.module("openshiftConsole").service("NameGenerator", function() {
return {
suggestFromSourceUrl: function(a) {
var b = a.substr(a.lastIndexOf("/") + 1, a.length), c = b.indexOf(".");
return c !== -1 && (b = b.substr(0, c)), b.split("#")[0];
}
};
}), angular.module("openshiftConsole").factory("TaskList", [ "$timeout", function(a) {
function b() {
this.tasks = [];
}
var c = 6e4, d = new b();
return b.prototype.add = function(b, e, f, g) {
var h = {
status: "started",
titles: b,
helpLinks: e,
namespace: f
};
this.tasks.push(h), g().then(function(b) {
h.status = "completed", h.hasErrors = b.hasErrors || !1, h.alerts = b.alerts || [], h.hasErrors || a(function() {
d.deleteTask(h);
}, c);
});
}, b.prototype.taskList = function() {
return this.tasks;
}, b.prototype.deleteTask = function(a) {
var b = d.tasks.indexOf(a);
b >= 0 && this.tasks.splice(b, 1);
}, b.prototype.clear = function() {
d.tasks = [];
}, d;
} ]), angular.module("openshiftConsole").factory("ImageStreamResolver", [ "$q", "DataService", function(a, b) {
function c() {}
return c.prototype.fetchReferencedImageStreamImages = function(c, d, e, f) {
var g = {};
return angular.forEach(c, function(a) {
angular.forEach(a.spec.containers, function(a) {
var c = a.image;
if (c && !d[c] && !g[c]) {
var h = e[c];
if (h) {
var i = h.split("@"), j = b.get("imagestreamimages", h, f);
j.then(function(a) {
if (a && a.image) {
var b = angular.copy(a.image);
b.imageStreamName = i[0], b.imageStreamNamespace = f.project.metadata.name, d[c] = b;
}
}), g[c] = j;
}
}
});
}), a.all(g);
}, c.prototype.buildDockerRefMapForImageStreams = function(a, b) {
angular.forEach(a, function(a) {
angular.forEach(a.status.tags, function(c) {
angular.forEach(c.items, function(c) {
c.image && (b[c.dockerImageReference] = a.metadata.name + "@" + c.image);
});
});
});
}, new c();
} ]), angular.module("openshiftConsole").factory("ContainerWebSocket", [ "API_CFG", "$ws", function(a, b) {
return function(c, d) {
var e;
return 0 === c.indexOf("/") && (e = "http:" === window.location.protocol ? "ws://" : "wss://", c = e + a.openshift.hostPort + c), b({
url: c,
method: "WATCH",
protocols: d,
auth: {}
});
};
} ]), angular.module("openshiftConsole").factory("BaseHref", [ "$document", function(a) {
return a.find("base").attr("href") || "/";
} ]), angular.module("openshiftConsole").factory("BuildsService", [ "$filter", "$q", "DataService", "Navigate", "NotificationsService", function(a, b, c, d, e) {
var f = a("annotation"), g = a("buildConfigForBuild"), h = a("getErrorDetails"), i = a("isIncompleteBuild"), j = a("isJenkinsPipelineStrategy"), k = a("isNewerResource"), l = function(a) {
var b = f(a, "buildNumber") || parseInt(a.metadata.name.match(/(\d+)$/), 10);
return isNaN(b) ? null : b;
}, m = function(a, b) {
var c = l(a);
return b && c ? b + " #" + c : a.metadata.name;
}, n = function(a) {
var f = j(a) ? "pipeline" : "build", g = {
kind: "BuildRequest",
apiVersion: "v1",
metadata: {
name: a.metadata.name
}
}, i = {
namespace: a.metadata.namespace
};
return c.create("buildconfigs/instantiate", a.metadata.name, g, i).then(function(b) {
var c, g, h = m(b, a.metadata.name), i = _.get(a, "spec.runPolicy");
"Serial" === i || "SerialLatestOnly" === i ? (c = _.capitalize(f) + " " + h + " successfully queued.", g = "Builds for " + a.metadata.name + " are configured to run one at a time.") : c = _.capitalize(f) + " " + h + " successfully created.", e.addNotification({
type: "success",
message: c,
details: g,
links: [ {
href: d.resourceURL(b),
label: "View Build"
} ]
});
}, function(a) {
return e.addNotification({
type: "error",
message: "An error occurred while starting the " + f + ".",
details: h(a)
}), b.reject(a);
});
}, o = function(a, d) {
var f = j(a) ? "pipeline" : "build", g = m(a, d), i = {
namespace: a.metadata.namespace
}, k = angular.copy(a);
return k.status.cancelled = !0, c.update("builds", k.metadata.name, k, i).then(function() {
e.addNotification({
type: "success",
message: _.capitalize(f) + " " + g + " successfully cancelled."
});
}), function(a) {
return e.addNotification({
type: "error",
message: "An error occurred cancelling " + f + " " + g + ".",
details: h(a)
}), b.reject(a);
};
}, p = function(a, f) {
var g = j(a) ? "pipeline" : "build", i = m(a, f), k = {
kind: "BuildRequest",
apiVersion: "v1",
metadata: {
name: a.metadata.name
}
}, l = {
namespace: a.metadata.namespace
};
return c.create("builds/clone", a.metadata.name, k, l).then(function(a) {
var b = m(a, f);
e.addNotification({
type: "success",
message: _.capitalize(g) + " " + i + " is being rebuilt as " + b + ".",
links: [ {
href: d.resourceURL(a),
label: "View Build"
} ]
});
}, function(a) {
return e.addNotification({
type: "error",
message: "An error occurred while rerunning " + g + " " + i + ".",
details: h(a)
}), b.reject();
});
}, q = function(a) {
return "true" === f(a, "openshift.io/build-config.paused");
}, r = function(a) {
return !!a && (!a.metadata.deletionTimestamp && !q(a));
}, s = function(a) {
var b = f(a, "pipeline.alpha.openshift.io/uses");
if (!b) return [];
try {
b = JSON.parse(b);
} catch (c) {
return void Logger.warn('Could not parse "pipeline.alpha.openshift.io/uses" annotation', c);
}
var d = [];
return _.each(b, function(b) {
b.name && (b.namespace && b.namespace !== _.get(a, "metadata.namespace") || "DeploymentConfig" === b.kind && d.push(b.name));
}), d;
}, t = function(a, b) {
return _.pickBy(b, function(b) {
var c = f(b, "buildConfig");
return !c || c === a;
});
}, u = function(a, b) {
var c = {};
return _.each(a, function(a) {
var d = g(a) || "";
b && !b(a) || k(a, c[d]) && (c[d] = a);
}), c;
}, v = function(a) {
return a.status.startTimestamp || a.metadata.creationTimestamp;
}, w = function(a) {
return _.round(a / 1e3 / 1e3);
}, x = function(a) {
var b = _.get(a, "status.duration");
if (b) return w(b);
var c = v(a), d = a.status.completionTimestamp;
return c && d ? moment(d).diff(moment(c)) : 0;
}, y = function(a) {
return _.map(a, function(a) {
return i(a);
});
}, z = function(a) {
return _.map(a, function(a) {
return !i(a);
});
}, A = function(b) {
return _.reduce(b, function(b, c) {
if (i(c)) return b;
var d = a("annotation")(c, "buildConfig");
return k(c, b[d]) && (b[d] = c), b;
}, {});
}, B = function(b) {
var c = {}, d = _.filter(b, function(b) {
if (i(b)) return !0;
var d = a("annotation")(b, "buildConfig");
k(b, c[d]) && (c[d] = b);
});
return d.concat(_.map(c, function(a) {
return a;
}));
}, C = a("imageObjectRef"), D = function(a) {
var b = {};
return _.each(a, function(a) {
var c = _.get(a, "spec.output.to"), d = C(c, a.metadata.namespace);
d && (b[d] = b[d] || [], b[d].push(a));
}), b;
}, E = function(a, b) {
var c = function(a, c) {
var d, e, f = l(a), g = l(c);
return f || g ? f ? g ? b ? g - f : f - g : b ? -1 : 1 : b ? 1 : -1 : (d = _.get(a, "metadata.name", ""), e = _.get(c, "metadata.name", ""), b ? e.localeCompare(d) : d.localeCompare(e));
}, d = function(a, d) {
var e = _.get(a, "metadata.creationTimestamp", ""), f = _.get(d, "metadata.creationTimestamp", "");
return e === f ? c(a, d) : b ? f.localeCompare(e) : e.localeCompare(f);
};
return _.toArray(a).sort(d);
}, F = function(a) {
var b = f(a, "jenkinsStatus");
if (!b) return null;
try {
return JSON.parse(b);
} catch (c) {
return Logger.error("Could not parse Jenkins status as JSON", b), null;
}
}, G = function(a) {
var b = F(a), c = _.get(b, "stages", []);
return _.last(c);
};
return {
startBuild: n,
cancelBuild: o,
cloneBuild: p,
isPaused: q,
canBuild: r,
usesDeploymentConfigs: s,
validatedBuildsForBuildConfig: t,
latestBuildByConfig: u,
getBuildNumber: l,
getBuildDisplayName: m,
getStartTimestsamp: v,
getDuration: x,
incompleteBuilds: y,
completeBuilds: z,
lastCompleteByBuildConfig: A,
interestingBuilds: B,
groupBuildConfigsByOutputImage: D,
sortBuilds: E,
getJenkinsStatus: F,
getCurrentStage: G
};
} ]), angular.module("openshiftConsole").factory("DeploymentsService", [ "APIService", "NotificationsService", "DataService", "$filter", "$q", "LabelFilter", function(a, b, c, d, e, f) {
function g() {}
var h = d("annotation");
g.prototype.startLatestDeployment = function(a, e) {
var f = {
kind: "DeploymentRequest",
apiVersion: "v1",
name: a.metadata.name,
latest: !0,
force: !0
};
c.create("deploymentconfigs/instantiate", a.metadata.name, f, e).then(function(c) {
b.addNotification({
type: "success",
message: "Deployment #" + c.status.latestVersion + " of " + a.metadata.name + " has started."
});
}, function(a) {
b.addNotification({
type: "error",
message: "An error occurred while starting the deployment.",
details: d("getErrorDetails")(a)
});
});
}, g.prototype.retryFailedDeployment = function(a, e, f) {
var g = angular.copy(a), i = a.metadata.name, j = h(a, "deploymentConfig");
c.list("pods", e, function(a) {
var b = a.by("metadata.name"), e = function(a) {
var b = d("annotationName")("deployerPodFor");
a.metadata.labels[b] === i && c["delete"]("pods", a.metadata.name, f).then(function() {
Logger.info("Deployer pod " + a.metadata.name + " deleted");
}, function(a) {
f.alerts = f.alerts || {}, f.alerts.retrydeployer = {
type: "error",
message: "An error occurred while deleting the deployer pod.",
details: d("getErrorDetails")(a)
};
});
};
angular.forEach(b, e);
});
var k = d("annotationName")("deploymentStatus"), l = d("annotationName")("deploymentStatusReason"), m = d("annotationName")("deploymentCancelled");
g.metadata.annotations[k] = "New", delete g.metadata.annotations[l], delete g.metadata.annotations[m], c.update("replicationcontrollers", i, g, e).then(function() {
b.addNotification({
type: "success",
message: "Retrying deployment " + i + " of " + j + "."
});
}, function(a) {
b.addNotification({
type: "error",
message: "An error occurred while retrying the deployment.",
details: d("getErrorDetails")(a)
});
});
}, g.prototype.rollbackToDeployment = function(e, f, g, i, j) {
var k = e.metadata.name, l = h(e, "deploymentConfig"), m = {
apiVersion: "apps.openshift.io/v1",
kind: "DeploymentConfigRollback",
name: l,
spec: {
from: {
name: k
},
includeTemplate: !0,
includeReplicationMeta: f,
includeStrategy: g,
includeTriggers: i
}
};
c.create({
group: "apps.openshift.io",
resource: "deploymentconfigs/rollback"
}, l, m, j).then(function(e) {
var f = a.objectToResourceGroupVersion(e);
c.update(f, l, e, j).then(function(a) {
b.addNotification({
type: "success",
message: "Deployment #" + a.status.latestVersion + " is rolling back " + l + " to " + k + "."
});
}, function(a) {
b.addNotification({
id: "rollback-deployment-error",
type: "error",
message: "An error occurred while rolling back the deployment.",
details: d("getErrorDetails")(a)
});
});
}, function(a) {
b.addNotification({
id: "rollback-deployment-error",
type: "error",
message: "An error occurred while rolling back the deployment.",
details: d("getErrorDetails")(a)
});
});
}, g.prototype.cancelRunningDeployment = function(a, e) {
var f = a.metadata.name, g = d("annotation")(a, "deploymentConfig"), h = angular.copy(a), i = d("annotationName")("deploymentCancelled"), j = d("annotationName")("deploymentStatusReason");
h.metadata.annotations[i] = "true", h.metadata.annotations[j] = "The deployment was cancelled by the user", c.update("replicationcontrollers", f, h, e).then(function() {
b.addNotification({
type: "success",
message: "Cancelled deployment " + f + " of " + g + "."
});
}, function(a) {
b.addNotification({
id: "cancel-deployment-error",
type: "error",
message: "An error occurred while cancelling the deployment.",
details: d("getErrorDetails")(a)
});
});
}, g.prototype.associateDeploymentsToDeploymentConfig = function(a, b, c) {
var e = {}, g = f.getLabelSelector();
return angular.forEach(a, function(a, f) {
var h = d("annotation")(a, "deploymentConfig");
(!c || b && b[h] || g.matches(a)) && (h = h || "", e[h] = e[h] || {}, e[h][f] = a);
}), angular.forEach(b, function(a, b) {
e[b] = e[b] || {};
}), e;
}, g.prototype.deploymentBelongsToConfig = function(a, b) {
return !(!a || !b) && b === d("annotation")(a, "deploymentConfig");
}, g.prototype.associateRunningDeploymentToDeploymentConfig = function(a) {
var b = {};
return angular.forEach(a, function(a, c) {
b[c] = {}, angular.forEach(a, function(a, e) {
var f = d("deploymentStatus")(a);
"New" !== f && "Pending" !== f && "Running" !== f || (b[c][e] = a);
});
}), b;
}, g.prototype.getActiveDeployment = function(a) {
var b = d("deploymentIsInProgress"), c = d("annotation"), e = null;
return _.each(a, function(a) {
return b(a) ? (e = null, !1) : void ("Complete" === c(a, "deploymentStatus") && (!e || e.metadata.creationTimestamp < a.metadata.creationTimestamp) && (e = a));
}), e;
}, g.prototype.getRevision = function(a) {
return h(a, "deployment.kubernetes.io/revision");
}, g.prototype.isActiveReplicaSet = function(a, b) {
var c = this.getRevision(a), d = this.getRevision(b);
return !(!c || !d) && c === d;
}, g.prototype.getActiveReplicaSet = function(a, b) {
var c = this.getRevision(b);
if (!c) return null;
var d = this;
return _.find(a, function(a) {
return d.getRevision(a) === c;
});
}, g.prototype.getScaleResource = function(b) {
var c = {
resource: a.kindToResource(b.kind) + "/scale"
};
switch (b.kind) {
case "DeploymentConfig":
break;

case "Deployment":
case "ReplicaSet":
case "ReplicationController":
c.group = "extensions";
break;

default:
return null;
}
return c;
}, g.prototype.scale = function(a, b) {
var d = this.getScaleResource(a);
if (!d) return e.reject({
data: {
message: "Cannot scale kind " + a.kind + "."
}
});
var f = {
apiVersion: "extensions/v1beta1",
kind: "Scale",
metadata: {
name: a.metadata.name,
namespace: a.metadata.namespace,
creationTimestamp: a.metadata.creationTimestamp
},
spec: {
replicas: b
}
};
return c.update(d, a.metadata.name, f, {
namespace: a.metadata.namespace
});
};
var i = function(a, b) {
var c = _.get(b, [ a ]);
return !_.isEmpty(c);
}, j = function(a, b) {
var c = _.get(b, [ a ]);
return !_.isEmpty(c);
};
return g.prototype.isScalable = function(a, b, c, d, e) {
if (j(a.metadata.name, d)) return !1;
var f = h(a, "deploymentConfig");
if (!f) return !0;
if (!b) return !1;
if (!b[f]) return !0;
if (i(f, c)) return !1;
var g = _.get(e, [ f, "metadata", "name" ]);
return g === a.metadata.name;
}, g.prototype.groupByDeploymentConfig = function(a) {
var b = {};
return _.each(a, function(a) {
var c = d("annotation")(a, "deploymentConfig") || "";
_.set(b, [ c, a.metadata.name ], a);
}), b;
}, g.prototype.sortByDeploymentVersion = function(a, b) {
var c = function(a, c) {
var d, e, f = parseInt(h(a, "deploymentVersion"), 10), g = parseInt(h(c, "deploymentVersion"), 10);
return _.isFinite(f) || _.isFinite(g) ? f ? g ? b ? g - f : f - g : b ? -1 : 1 : b ? 1 : -1 : (d = _.get(a, "metadata.name", ""), e = _.get(c, "metadata.name", ""), b ? e.localeCompare(d) : d.localeCompare(e));
};
return _.toArray(a).sort(c);
}, g.prototype.sortByRevision = function(a) {
var b = this, c = function(a) {
var c = b.getRevision(a);
if (!c) return null;
var d = parseInt(c, 10);
return isNaN(d) ? null : d;
}, d = function(a, b) {
var d = c(a), e = c(b);
return d || e ? d ? e ? e - d : -1 : 1 : a.metadata.name.localeCompare(b.metadata.name);
};
return _.toArray(a).sort(d);
}, g.prototype.setPaused = function(b, d, e) {
var f = angular.copy(b), g = a.objectToResourceGroupVersion(b);
return _.set(f, "spec.paused", d), c.update(g, b.metadata.name, f, e);
}, new g();
} ]), angular.module("openshiftConsole").factory("ImageStreamsService", function() {
return {
tagsByName: function(a) {
var b = {};
return angular.forEach(a.spec.tags, function(c) {
b[c.name] = b[c.name] || {}, b[c.name].name = c.name, b[c.name].spec = angular.copy(c);
var d = b[c.name].spec.from;
if (d) {
var e;
if ("ImageStreamImage" === d.kind ? e = "@" : "ImageStreamTag" === d.kind && (e = ":"), e) {
d._nameConnector = e;
var f = d.name.split(e);
1 === f.length ? (d._imageStreamName = a.metadata.name, d._idOrTag = f[0], d._completeName = d._imageStreamName + e + d._idOrTag) : (d._imageStreamName = f.shift(), d._idOrTag = f.join(e), d._completeName = d._imageStreamName + e + d._idOrTag);
}
}
}), angular.forEach(a.status.tags, function(a) {
b[a.tag] = b[a.tag] || {}, b[a.tag].name = a.tag, b[a.tag].status = angular.copy(a);
}), b;
}
};
}), angular.module("openshiftConsole").factory("MembershipService", [ "$filter", "Constants", "gettext", "gettextCatalog", function(a, b, c, d) {
var e = (a("annotation"), function(a, b) {
return 1 === _.filter(b, function(b) {
return _.some(b.subjects, {
name: a
});
}).length;
}), f = function() {
return _.reduce(_.slice(arguments), function(a, b, c) {
return b ? _.isEqual(c, 0) ? b : a + "-" + b : a;
}, "");
}, g = function() {
return {
User: {
kind: "User",
sortOrder: 1,
name: "User",
subjects: {}
},
Group: {
kind: "Group",
sortOrder: 2,
name: "Group",
subjects: {}
},
ServiceAccount: {
kind: "ServiceAccount",
sortOrder: 3,
description: d.getString(c("Service accounts provide a flexible way to control API access without sharing a regular user’s credentials.")),
helpLinkKey: "service_accounts",
name: "ServiceAccount",
subjects: {}
},
SystemUser: {
kind: "SystemUser",
sortOrder: 4,
description: d.getString(c("System users are virtual users automatically provisioned by the system.")),
helpLinkKey: "users_and_groups",
name: "SystemUser",
subjects: {}
},
SystemGroup: {
kind: "SystemGroup",
sortOrder: 5,
description: d.getString(c("System groups are virtual groups automatically provisioned by the system.")),
helpLinkKey: "users_and_groups",
name: "SystemGroup",
subjects: {}
}
};
}, h = function(a, b) {
var c = _.reduce(a, function(a, c) {
var d = f(c.roleRef.namespace ? "Role" : "ClusterRole", c.roleRef.name);
return _.each(c.subjects, function(c) {
var e = f(c.namespace, c.name);
a[c.kind].subjects[e] || (a[c.kind].subjects[e] = {
name: c.name,
roles: {}
}, c.namespace && (a[c.kind].subjects[e].namespace = c.namespace)), _.includes(a[c.kind].subjects[e].roles, d) || b[d] && (a[c.kind].subjects[e].roles[d] = b[d]);
}), a;
}, g());
return _.sortBy(c, "sortOrder");
}, i = function(a) {
return _.sortBy(a, "metadata.name");
}, j = function(a) {
return _.filter(a, function(a) {
return _.includes(b.MEMBERSHIP_WHITELIST, a.metadata.name);
});
}, k = function(a) {
return _.reduce(a, function(a, b) {
return a[f(b.kind, b.metadata.name)] = b, a;
}, {});
}, l = function(a, b) {
return _.merge(k(a), k(b));
};
return {
sortRoles: i,
filterRoles: j,
mapRolesForUI: l,
isLastRole: e,
getSubjectKinds: g,
mapRolebindingsForUI: h
};
} ]), angular.module("openshiftConsole").factory("RolesService", [ "$q", "DataService", function(a, b) {
var c = function(c) {
return a.all([ b.list("roles", c, null), b.list("clusterroles", {}, null) ]);
};
return {
listAllRoles: c
};
} ]), angular.module("openshiftConsole").factory("RoleBindingsService", [ "$q", "DataService", function(a, b) {
var c = {}, d = function(a, b) {
var e = b ? a + b : a;
return _.some(c, _.matchesProperty("metadata.name", e)) ? d(a, _.uniqueId()) : e;
}, e = function(a, b) {
var c = _.get(a, "metadata.name"), e = c ? d(c) : null;
return {
kind: "RoleBinding",
apiVersion: "v1",
metadata: {
name: e,
namespace: b
},
roleRef: {
name: _.get(a, "metadata.name"),
namespace: _.get(a, "metadata.namespace")
},
subjects: []
};
}, f = function(a, b) {
return _.isEqual(a.kind, "ServiceAccount") ? a.namespace = a.namespace || b : (_.isEqual(a.kind, "SystemUser") || _.isEqual(a.kind, "SystemGroup")) && (_.startsWith(a.name, "system:") || (a.name = "system:" + a.name)), a;
}, g = function(a) {
a.userNames = null, a.groupNames = null;
}, h = function(a, c, d, g) {
var h = e(a, d);
return c = f(c, d), h.subjects.push(angular.copy(c)), b.create("rolebindings", null, h, g);
}, i = function(a, c, d, h) {
var i = e(), j = _.extend(i, a);
if (!c) return j;
if (c = f(c, d), _.isArray(j.subjects)) {
if (_.includes(j.subjects, c)) return;
j.subjects.push(c);
} else j.subjects = [ c ];
return g(j), b.update("rolebindings", j.metadata.name, j, h);
}, j = function(c, d, f, h, i) {
var j = _.filter(h, {
roleRef: {
name: d
}
});
return a.all(_.map(j, function(a) {
var d = e();
a = _.extend(d, a), g(a);
var h = {
name: c
};
return f && (h.namespace = f), a.subjects = _.reject(a.subjects, h), a.subjects.length ? b.update("rolebindings", a.metadata.name, a, i) : b["delete"]("rolebindings", a.metadata.name, i).then(function() {
return a;
});
}));
}, k = function(a, d, e) {
return b.list("rolebindings", a, function(a) {
c = a.by("metadata.name"), d(a);
}, e);
};
return {
list: k,
create: h,
addSubject: i,
removeSubject: j
};
} ]), angular.module("openshiftConsole").factory("MetricsService", [ "$filter", "$http", "$q", "$rootScope", "APIDiscovery", function(a, b, c, d, e) {
function f() {
return angular.isDefined(k) ? c.when(k) : e.getMetricsURL().then(function(a) {
return k = (a || "").replace(/\/$/, "");
});
}
function g(a) {
if (a.length) return _.each(a, function(a) {
a.empty || !_.isNumber(a.avg) ? a.value = null : a.value = a.avg;
}), a;
}
function h(a) {
return a.join("|");
}
function i() {
return f().then(function(a) {
return a ? a + "/m/stats/query" : a;
});
}
function j(a) {
return f().then(function(b) {
var c;
return c = "counter" === a.type ? b + o : b + n, URI.expand(c, {
podUID: a.pod.metadata.uid,
containerName: a.containerName,
metric: a.metric
}).toString();
});
}
var k, l, m, n = "/gauges/{containerName}%2F{podUID}%2F{metric}/data", o = "/counters/{containerName}%2F{podUID}%2F{metric}/data", p = function(a) {
return f().then(function(c) {
return !!c && (!a || (!!l || !m && b.get(c).then(function() {
return l = !0, !0;
}, function(a) {
return m = !0, d.$broadcast("metrics-connection-failed", {
url: c,
response: a
}), !1;
})));
});
}, q = function(a) {
var b = a.split("/");
return {
podUID: b[1],
descriptor: b[2] + "/" + b[3]
};
}, r = function(a, c, d) {
var e = _.keyBy(d.pods, "metadata.uid");
return b.post(a, c, {
auth: {},
headers: {
Accept: "application/json",
"Content-Type": "application/json",
"Hawkular-Tenant": d.namespace
}
}).then(function(a) {
var b = {}, c = function(a, c) {
var d = q(c), f = _.get(e, [ d.podUID, "metadata", "name" ]), h = g(a);
_.set(b, [ d.descriptor, f ], h);
};
return _.each(a.data.counter, c), _.each(a.data.gauge, c), b;
});
}, s = _.template("descriptor_name:network/tx_rate|network/rx_rate,type:pod,pod_id:<%= uid %>"), t = _.template("descriptor_name:memory/usage|cpu/usage_rate,type:pod_container,pod_id:<%= uid %>,container_name:<%= containerName %>"), u = _.template("descriptor_name:network/tx_rate|network/rx_rate|memory/usage|cpu/usage_rate,type:pod,pod_id:<%= uid %>"), v = function(a) {
return i().then(function(b) {
var d = {
bucketDuration: a.bucketDuration,
start: a.start
};
a.end && (d.end = a.end);
var e = [], f = [], g = h(_.map(a.pods, "metadata.uid"));
return a.containerName ? (e.push(_.assign({
tags: t({
uid: g,
containerName: a.containerName
})
}, d)), e.push(_.assign({
tags: s({
uid: g
})
}, d))) : e.push(_.assign({
tags: u({
uid: g
})
}, d)), _.each(e, function(c) {
var d = r(b, c, a);
f.push(d);
}), c.all(f).then(function(a) {
var b = {};
return _.each(a, function(a) {
_.assign(b, a);
}), b;
});
});
}, w = function(a) {
var c = a.metadata.namespace, d = a.metadata.uid;
return f().then(function(a) {
if (!a) return null;
var e = a + "/m", f = {
tags: "custom_metric:true,pod_id:" + d
};
return b.get(e, {
auth: {},
headers: {
Accept: "application/json",
"Hawkular-Tenant": c
},
params: f
}).then(function(a) {
return _.map(a.data, function(a) {
return {
id: a.id,
name: a.tags.metric_name,
unit: a.tags.units,
description: a.tags.description,
type: a.type
};
});
});
});
};
return {
isAvailable: p,
getMetricsURL: f,
get: function(a) {
return j(a).then(function(c) {
if (!c) return null;
var d = {
bucketDuration: a.bucketDuration,
start: a.start
};
return a.end && (d.end = a.end), b.get(c, {
auth: {},
headers: {
Accept: "application/json",
"Hawkular-Tenant": a.namespace
},
params: d
}).then(function(b) {
return _.assign(b, {
metricID: a.metric,
data: g(b.data)
});
});
});
},
getCurrentUsage: function(a) {
return j(a).then(function(c) {
if (!c) return null;
var d = {
bucketDuration: "1mn",
start: "-1mn"
};
return b.get(c, {
auth: {},
headers: {
Accept: "application/json",
"Hawkular-Tenant": a.namespace
},
params: d
}).then(function(b) {
return _.assign(b, {
metricID: a.metric,
usage: _.head(g(b.data))
});
});
});
},
getPodMetrics: v,
getCustomMetrics: w
};
} ]), angular.module("openshiftConsole").factory("MetricsCharts", [ "$timeout", "ConversionService", "gettext", "gettextCatalog", function(a, b, c, d) {
var e = function(a, c) {
if (void 0 === a.value || null === a.value) return null;
switch (c) {
case "memory/usage":
return _.round(b.bytesToMiB(a.value), 2);

case "cpu/usage_rate":
return b.millicoresToCores(a.value);

case "network/rx_rate":
case "network/tx_rate":
return _.round(b.bytesToKiB(a.value), 2);

default:
return _.round(a.value);
}
}, f = {
"memory/usage": d.getString(c("Memory")),
"cpu/usage_rate": "CPU",
"network/tx_rate": d.getString(c("Sent")),
"network/rx_rate": d.getString(c("Received"))
};
return {
uniqueID: function() {
return _.uniqueId("metrics-");
},
getDefaultUpdateInterval: function() {
return 6e4;
},
getTimeRangeOptions: function() {
return [ {
label: c("Last hour"),
value: 60
}, {
label: c("Last 4 hours"),
value: 240
}, {
label: c("Last 12 hours"),
value: 720
}, {
label: c("Last day"),
value: 1440
}, {
label: c("Last 3 days"),
value: 4320
}, {
label: c("Last week"),
value: 10080
} ];
},
getDefaultSparklineConfig: function(a, b, c) {
return {
bindto: "#" + a,
axis: {
x: {
show: !c,
type: "timeseries",
padding: {
left: 0,
bottom: 0
},
tick: {
type: "timeseries",
format: "%a %H:%M"
}
},
y: {
show: !c,
label: b,
min: 0,
padding: {
left: 0,
top: 20,
bottom: 0
}
}
},
point: {
show: !1
},
size: {
height: c ? 35 : 175
},
tooltip: {
format: {
value: function(a) {
var c = "cores" === b ? 3 : 2;
return d3.round(a, c) + " " + b;
}
}
}
};
},
getSparklineData: function(a) {
var b, c = {
type: "spline",
x: "dates",
names: f
}, d = {};
return _.each(a, function(a, c) {
b = [ "dates" ], d[c] = [ c ], _.each(a, function(a) {
var f = e(a, c);
b.push(a.start), d[c].push(f);
});
}), c.columns = [ b ].concat(_.values(d)), c;
},
formatUsage: function(a) {
return a < .001 ? "0" : a < 1 ? d3.format(".1r")(a) : d3.format(".2r")(a);
},
redraw: function(b) {
a(function() {
_.each(b, function(a) {
a.flush();
});
}, 0);
}
};
} ]), angular.module("openshiftConsole").factory("StorageService", [ "$filter", "APIService", "DataService", "NotificationsService", function(a, b, c, d) {
var e = a("getErrorDetails"), f = a("humanizeKind");
return {
createVolume: function(a, b) {
return {
name: a,
persistentVolumeClaim: {
claimName: b.metadata.name
}
};
},
createVolumeMount: function(a, b, c, d) {
var e = {
name: a,
mountPath: b,
readOnly: !!d
};
return c && (e.subPath = c), e;
},
getVolumeNames: function(a) {
var b = _.get(a, "spec.volumes", []);
return _.map(b, "name");
},
getMountPaths: function(a, b) {
var c = [], d = _.get(a, "spec.containers", []);
return _.each(d, function(a) {
if (!b || b(a)) {
var d = _.get(a, "volumeMounts", []);
_.each(d, function(a) {
c.push(a.mountPath);
});
}
}), c;
},
removeVolume: function(a, g, h) {
var i = angular.copy(a), j = _.get(i, "spec.template.spec.volumes");
_.remove(j, {
name: g.name
});
var k = _.get(i, "spec.template.spec.containers");
_.each(k, function(a) {
_.remove(a.volumeMounts, {
name: g.name
});
});
var l = b.objectToResourceGroupVersion(i);
return c.update(l, i.metadata.name, i, h).then(function() {
d.addNotification({
type: "success",
message: "Volume " + g.name + " removed from " + f(a.kind) + " " + a.metadata.name + "."
});
}, function(b) {
d.addNotification({
type: "error",
message: "An error occurred removing volume " + g.name + " from " + f(a.kind) + " " + a.metadata.name + ".",
details: e(b)
});
});
}
};
} ]), angular.module("openshiftConsole").factory("LimitRangesService", [ "$filter", "LIMIT_REQUEST_OVERRIDES", function(a, b) {
var c = a("usageValue"), d = a("usageWithUnits"), e = a("amountAndUnit"), f = function(a, b) {
return !!a && (!b || c(a) < c(b));
}, g = function(a, b) {
return !!a && (!b || c(a) > c(b));
}, h = function(c) {
if (!b) return !1;
var d = a("annotation")(c, "quota.openshift.io/cluster-resource-override-enabled");
return !d || "true" === d;
}, i = function(a, c) {
if (!h(c)) return null;
switch (a) {
case "cpu":
return b.cpuRequestToLimitPercent;

case "memory":
return b.memoryRequestToLimitPercent;

default:
return null;
}
}, j = function(a, b) {
return !!i(a, b);
}, k = function(a, c) {
return h(c) && "cpu" === a && !!b.limitCPUToMemoryPercent;
}, l = function(a, b, c, d) {
var h = {};
angular.forEach(a, function(a) {
angular.forEach(a.spec.limits, function(a) {
if (a.type === c) {
a.min && g(a.min[b], h.min) && (h.min = a.min[b]), a.max && f(a.max[b], h.max) && (h.max = a.max[b]), a["default"] && (h.defaultLimit = a["default"][b] || h.defaultLimit), a.defaultRequest && (h.defaultRequest = a.defaultRequest[b] || h.defaultRequest);
var d;
a.maxLimitRequestRatio && (d = a.maxLimitRequestRatio[b], d && (!h.maxLimitRequestRatio || d < h.maxLimitRequestRatio) && (h.maxLimitRequestRatio = d));
}
});
});
var j, k, l, m;
return h.min && (j = i(b, d), j && (k = e(h.min), l = Math.ceil(k[0] / (j / 100)), m = k[1] || "", h.min = "" + l + m)), h;
}, m = function(b, e, f, g) {
if (!f || !f.length) return [];
var h = l(b, e, "Pod", g), i = l(b, e, "Container", g), m = 0, n = 0, o = h.min && c(h.min), p = h.max && c(h.max), q = [], r = a("computeResourceLabel")(e, !0);
return angular.forEach(f, function(a) {
var b = a.resources || {}, d = b.requests && b.requests[e] || i.defaultRequest;
d && (m += c(d));
var f = b.limits && b.limits[e] || i.defaultLimit;
f && (n += c(f));
}), j(e, g) || (o && m < o && q.push(r + " request total for all containers is less than pod minimum (" + d(h.min, e) + ")."), p && m > p && q.push(r + " request total for all containers is greater than pod maximum (" + d(h.max, e) + ").")), k(e, g) || (o && n < o && q.push(r + " limit total for all containers is less than pod minimum (" + d(h.min, e) + ")."), p && n > p && q.push(r + " limit total for all containers is greater than pod maximum (" + d(h.max, e) + ").")), q;
};
return {
getEffectiveLimitRange: l,
getRequestToLimitPercent: i,
isRequestCalculated: j,
isLimitCalculated: k,
validatePodLimits: m
};
} ]), angular.module("openshiftConsole").factory("RoutesService", [ "$filter", "gettext", "gettextCatalog", function(a, b, c) {
var d = function(a) {
return angular.isString(a);
}, e = function(a, b) {
return _.find(b.spec.ports, function(b) {
return d(a) ? b.name === a : b.targetPort === a;
});
}, f = function(a, f, g, h) {
if ("Service" === f.kind) {
var i = _.get(g, [ f.name ]);
if (!i) return void h.push('Routes to service "' + f.name + '", but service does not exist.');
var j = a.spec.port ? a.spec.port.targetPort : null;
if (!j) return void (_.size(i.spec.ports) > 1 && h.push('Route has no target port, but service "' + i.metadata.name + '" has multiple ports. The route will round robin traffic across all exposed ports on the service.'));
var k = e(j, i);
k || (d(j) ? h.push(c.getString(b('Route target port is set to "')) + j + c.getString(b('", but service "')) + i.metadata.name + c.getString(b('" has no port with that name.'))) : h.push(c.getString(b('Route target port is set to "')) + j + c.getString(b('", but service "')) + i.metadata.name + c.getString(b('" does not expose that port.'))));
}
}, g = function(a, b) {
a.spec.tls && (a.spec.tls.termination || b.push("Route has a TLS configuration, but no TLS termination type is specified. TLS will not be enabled until a termination type is set."), "passthrough" === a.spec.tls.termination && a.spec.path && b.push('Route path "' + a.spec.path + '" will be ignored since the route uses passthrough termination.'));
}, h = function(a, b) {
var c = _.get(a, "spec.wildcardPolicy");
angular.forEach(a.status.ingress, function(a) {
var d = _.find(a.conditions, {
type: "Admitted",
status: "False"
});
if (d) {
var e = "Requested host " + (a.host || "<unknown host>") + " was rejected by the router.";
(d.message || d.reason) && (e += " Reason: " + (d.message || d.reason) + "."), b.push(e);
}
d || "Subdomain" !== c || a.wildcardPolicy === c || b.push('Router "' + a.routerName + '" does not support wildcard subdomains. Your route will only be available at host ' + a.host + ".");
});
}, i = function(a) {
return _.some(a.status.ingress, function(a) {
return _.some(a.conditions, {
type: "Admitted",
status: "True"
});
});
}, j = a("annotation"), k = function(a) {
return "true" !== j(a, "openshift.io/host.generated");
}, l = function(a) {
var b = 0;
i(a) && (b += 11);
var c = _.get(a, "spec.alternateBackends");
return _.isEmpty(c) || (b += 5), k(a) && (b += 3), a.spec.tls && (b += 1), b;
}, m = function(a) {
return _.orderBy(a, [ l ], [ "desc" ]);
}, n = function(a, b) {
var c = l(a), d = l(b);
return d > c ? b : a;
}, o = function(a) {
var b = {}, c = function(a, c) {
b[c] = b[c] || [], b[c].push(a);
};
return _.each(a, function(a) {
c(a, a.spec.to.name);
var b = _.get(a, "spec.alternateBackends", []);
_.each(b, function(b) {
"Service" === b.kind && c(a, b.name);
});
}), b;
}, p = function(a, b) {
return b ? o(a) : _.groupBy(a, "spec.to.name");
}, q = function(a) {
var b = _.get(a, "spec.host", "");
return b.replace(/^[a-z0-9]([-a-z0-9]*[a-z0-9])\./, "");
};
return {
getRouteWarnings: function(a, b) {
var c = [];
return a ? (f(a, a.spec.to, b, c), _.each(a.spec.alternateBackends, function(d) {
f(a, d, b, c);
}), g(a, c), h(a, c), c) : c;
},
getServicePortForRoute: e,
getPreferredDisplayRoute: n,
groupByService: p,
getSubdomain: q,
isCustomHost: k,
sortRoutesByScore: m
};
} ]), angular.module("openshiftConsole").factory("ChartsService", [ "Logger", function(a) {
return {
updateDonutCenterText: function(b, c, d) {
var e = d3.select(b).select("text.c3-chart-arcs-title");
return e ? (e.selectAll("*").remove(), e.insert("tspan").text(c).classed(d ? "donut-title-big-pf" : "donut-title-med-pf", !0).attr("dy", d ? 0 : 5).attr("x", 0), void (d && e.insert("tspan").text(d).classed("donut-title-small-pf", !0).attr("dy", 20).attr("x", 0))) : void a.warn("Can't select donut title element");
}
};
} ]), angular.module("openshiftConsole").factory("HPAService", [ "$filter", "$q", "LimitRangesService", "MetricsService", "Logger", "gettext", "gettextCatalog", function(a, b, c, d, e, f, g) {
var h = function(a) {
return c.getRequestToLimitPercent("cpu", a);
}, i = function(a, b) {
var c = h(b);
if (!c) return e.warn("convertRequestPercentToLimit called, but no request/limit ratio defined."), NaN;
if (!a) return a;
var d = c / 100 * a;
return Math.round(d);
}, j = function(a, b) {
var c = h(b);
if (!c) return e.warn("convertLimitPercentToRequest called, but no request/limit ratio defined."), NaN;
if (!a) return a;
var d = a / (c / 100);
return Math.round(d);
}, k = function(a, b, c) {
return _.every(c, function(c) {
return _.get(c, [ "resources", b, a ]);
});
}, l = function(a, b) {
return k(a, "requests", b);
}, m = function(a, b) {
return k(a, "limits", b);
}, n = function(a, b, d, e) {
var f = c.getEffectiveLimitRange(d, a, "Container", e);
return !!f[b];
}, o = function(a, b, c) {
return n(a, "defaultRequest", b, c);
}, p = function(a, b, c) {
return n(a, "defaultLimit", b, c);
}, q = function(a, b, d) {
return !(!l("cpu", a) && !o("cpu", b, d)) || (!(!m("cpu", a) && !p("cpu", b, a)) || !!c.isLimitCalculated("cpu", d) && (m("memory", a) || p("memory", b, d)));
}, r = function(a, b, c) {
return _.filter(a, function(a) {
return a.spec.scaleTargetRef.kind === b && a.spec.scaleTargetRef.name === c;
});
}, s = a("humanizeKind"), t = a("hasDeploymentConfig"), u = function(a, e, h, i) {
return !a || _.isEmpty(e) ? b.when([]) : d.isAvailable().then(function(b) {
var d = [];
b || d.push({
message: "Metrics might not be configured by your cluster administrator. Metrics are required for autoscaling.",
reason: "MetricsNotAvailable"
});
var j, k, l = _.get(a, "spec.template.spec.containers", []);
q(l, h, i) || (j = s(a.kind), c.isRequestCalculated("cpu", i) ? (k = g.getString(f("This ")) + g.getString(j) + g.getString(f(" does not have any containers with a CPU limit set. ")) + g.getString(f("Autoscaling will not work without a CPU limit.")), c.isLimitCalculated("cpu", i) && (k += g.getString(f(" The CPU limit will be automatically calculated from the container memory limit.")))) : k = g.getString(f("This ")) + g.getString(j) + g.getString(f(" does not have any containers with a CPU request set. ")) + g.getString(f("Autoscaling will not work without a CPU request.")), d.push({
message: k,
reason: "NoCPURequest"
})), _.size(e) > 1 && d.push({
message: g.getString(f("More than one autoscaler is scaling this resource. ")) + g.getString(f("This is not recommended because they might compete with each other. ")) + g.getString(f("Consider removing all but one autoscaler.")),
reason: "MultipleHPA"
});
var m = function() {
return _.some(e, function(a) {
return "ReplicationController" === _.get(a, "spec.scaleTargetRef.kind");
});
};
return "ReplicationController" === a.kind && t(a) && _.some(e, m) && d.push({
message: g.getString(f("This deployment is scaled by both a deployment configuration and an autoscaler. ")) + g.getString(f("This is not recommended because they might compete with each other.")),
reason: "DeploymentHasHPA"
}), d;
});
}, v = function(a) {
var b = {};
return _.each(a, function(a) {
var c = a.spec.scaleTargetRef.name, d = a.spec.scaleTargetRef.kind;
c && d && (_.has(b, [ d, c ]) || _.set(b, [ d, c ], []), b[d][c].push(a));
}), b;
};
return {
convertRequestPercentToLimit: i,
convertLimitPercentToRequest: j,
hasCPURequest: q,
filterHPA: r,
getHPAWarnings: u,
groupHPAs: v
};
} ]), angular.module("openshiftConsole").factory("PodsService", [ "OwnerReferencesService", function(a) {
return {
getImageIDs: function(a, b) {
var c = {}, d = /^.*sha256:/;
return _.each(a, function(a) {
var e, f = _.get(a, "status.containerStatuses", []), g = _.find(f, {
name: b
}), h = _.get(g, "imageID", "");
d.test(h) && (e = h.replace(d, ""), c[e] = !0);
}), _.keys(c);
},
generateDebugPod: function(a, b) {
var c = angular.copy(a), d = _.find(c.spec.containers, {
name: b
});
return d ? (c.metadata = {
name: a.metadata.name + "-debug",
annotations: {
"debug.openshift.io/source-container": b,
"debug.openshift.io/source-resource": "pods/" + a.metadata.name
},
labels: {}
}, c.spec.restartPolicy = "Never", delete c.spec.host, delete c.spec.nodeName, c.status = {}, delete d.readinessProbe, delete d.livenessProbe, d.command = [ "sleep" ], d.args = [ "3600" ], c.spec.containers = [ d ], c) : null;
},
groupByOwnerUID: function(b) {
return a.groupByControllerUID(b);
},
filterForOwner: function(b, c) {
return a.filterForController(b, c);
}
};
} ]), angular.module("openshiftConsole").service("CachedTemplateService", function() {
var a = null;
return {
setTemplate: function(b) {
a = b;
},
getTemplate: function() {
return a;
},
clearTemplate: function() {
a = null;
}
};
}).service("ProcessedTemplateService", function() {
var a = function() {
return {
params: {
all: [],
generated: []
},
message: null
};
}, b = a();
return {
setTemplateData: function(a, c, d) {
_.each(a, function(a) {
b.params.all.push({
name: a.name,
value: a.value
});
}), _.each(c, function(a) {
a.value || b.params.generated.push(a.name);
}), d && (b.message = d);
},
getTemplateData: function() {
return b;
},
clearTemplateData: function() {
b = a();
}
};
}), angular.module("openshiftConsole").factory("SecretsService", [ "$filter", "Logger", "NotificationsService", function(a, b, c) {
var d = function(a) {
var b = {
source: [],
image: [],
other: []
};
return _.each(a.by("metadata.name"), function(a) {
switch (a.type) {
case "kubernetes.io/basic-auth":
case "kubernetes.io/ssh-auth":
case "Opaque":
b.source.push(a);
break;

case "kubernetes.io/dockercfg":
case "kubernetes.io/dockerconfigjson":
b.image.push(a);
break;

default:
b.other.push(a);
}
}), b;
}, e = function(d, e) {
c.addNotification({
type: "error",
message: "Base64-encoded " + e + " string could not be decoded.",
details: a("getErrorDetails")(d)
}), b.error("Base64-encoded " + e + " string could not be decoded.", d);
}, f = function(a) {
var b = _.pick(a, [ "email", "username", "password" ]);
if (a.auth) try {
var c = _.spread(function(a, c) {
b.username = a, b.password = c;
});
c(_.split(window.atob(a.auth), ":", 2));
} catch (d) {
return void e(d, "username:password");
}
return b;
}, g = function(a, b) {
var c, d = {
auths: {}
};
try {
c = JSON.parse(window.atob(a));
} catch (g) {
e(g, b);
}
return c.auths ? (_.each(c.auths, function(a, b) {
return a.auth ? void (d.auths[b] = f(a)) : void (d.auths[b] = a);
}), c.credsStore && (d.credsStore = c.credsStore)) : _.each(c, function(a, b) {
d.auths[b] = f(a);
}), d;
}, h = function(a) {
var b = {}, c = _.mapValues(a, function(a, c) {
if (!a) return "";
var d, e;
return ".dockercfg" === c || ".dockerconfigjson" === c ? g(a, c) : (d = window.atob(a), e = /[\x00-\x09\x0E-\x1F]/.test(d), e ? (b[c] = !0, a) : d);
});
return c.$$nonprintable = b, c;
};
return {
groupSecretsByType: d,
decodeSecretData: h
};
} ]), angular.module("openshiftConsole").factory("ServicesService", [ "$filter", "$q", "DataService", function(a, b, c) {
var d = "service.alpha.openshift.io/dependencies", e = "service.openshift.io/infrastructure", f = a("annotation"), g = function(a) {
var b = f(a, d);
if (!b) return null;
try {
return JSON.parse(b);
} catch (c) {
return Logger.warn('Could not parse "service.alpha.openshift.io/dependencies" annotation', c), null;
}
}, h = function(a) {
var b, c = g(a);
if (!c) return [];
b = _.get(a, "metadata.namespace");
var d = function(a) {
return !!a.name && ((!a.kind || "Service" === a.kind) && (!a.namespace || a.namespace === b));
};
return _.chain(c).filter(d).map(function(a) {
return a.name;
}).value();
}, i = function(a, b) {
return b.length ? void _.set(a, [ "metadata", "annotations", d ], JSON.stringify(b)) : void (_.has(a, [ "metadata", "annotations", d ]) && delete a.metadata.annotations[d]);
}, j = function(a, b) {
var d = angular.copy(a), e = g(d) || [];
return e.push({
name: b.metadata.name,
namespace: a.metadata.namespace === b.metadata.namespace ? "" : b.metadata.namespace,
kind: b.kind
}), i(d, e), c.update("services", d.metadata.name, d, {
namespace: d.metadata.namespace
});
}, k = function(a, d) {
var e = angular.copy(a), f = g(e) || [], h = _.reject(f, function(b) {
if (b.kind !== d.kind) return !1;
var c = b.namespace || a.metadata.namespace;
return c === d.metadata.namespace && b.name === d.metadata.name;
});
return h.length === f.length ? b.when(!0) : (i(e, h), c.update("services", e.metadata.name, e, {
namespace: e.metadata.namespace
}));
}, l = function(a) {
return "true" === f(a, e);
};
return {
getDependentServices: h,
linkService: j,
removeServiceLink: k,
isInfrastructure: l
};
} ]), angular.module("openshiftConsole").factory("ImagesService", [ "$filter", "ApplicationGenerator", "DataService", function(a, b, c) {
var d = function(a) {
return _.isArray(a) ? a : _.map(a, function(a, b) {
return {
name: b,
value: a
};
});
}, e = function(a, b) {
var d = {
kind: "ImageStreamImport",
apiVersion: "v1",
metadata: {
name: "newapp",
namespace: b.namespace
},
spec: {
"import": !1,
images: [ {
from: {
kind: "DockerImage",
name: a
}
} ]
},
status: {}
};
return c.create("imagestreamimports", null, d, b).then(function(a) {
return {
name: _.get(a, "spec.images[0].from.name"),
image: _.get(a, "status.images[0].image"),
tag: _.get(a, "status.images[0].tag"),
result: _.get(a, "status.images[0].status")
};
});
}, f = function(a) {
var b = _.get(a, "dockerImageMetadata.Config.User");
return !b || "0" === b || "root" === b;
}, g = function(a) {
return _.get(a, "dockerImageMetadata.Config.Volumes");
}, h = function(a) {
var c = [], e = {
"openshift.io/generated-by": "OpenShiftWebConsole"
}, f = d(a.env), g = [], h = [], i = 0;
if (_.forEach(a.volumes, function(b, c) {
i++;
var d = a.name + "-" + i;
g.push({
name: d,
emptyDir: {}
}), h.push({
name: d,
mountPath: c
});
}), !a.namespace) {
var j = {
kind: "ImageStream",
apiVersion: "v1",
metadata: {
name: a.name,
labels: a.labels
},
spec: {
tags: [ {
name: a.tag,
annotations: _.assign({
"openshift.io/imported-from": a.image
}, e),
from: {
kind: "DockerImage",
name: a.image
},
importPolicy: {}
} ]
}
};
c.push(j);
}
var k = _.assign({
deploymentconfig: a.name
}, a.labels), l = {
kind: "DeploymentConfig",
apiVersion: "v1",
metadata: {
name: a.name,
labels: a.labels,
annotations: e
},
spec: {
strategy: {
resources: {}
},
triggers: [ {
type: "ConfigChange"
}, {
type: "ImageChange",
imageChangeParams: {
automatic: !0,
containerNames: [ a.name ],
from: {
kind: "ImageStreamTag",
name: (a.namespace ? a.image : a.name) + ":" + a.tag,
namespace: a.namespace
}
}
} ],
replicas: 1,
test: !1,
selector: k,
template: {
metadata: {
labels: k,
annotations: e
},
spec: {
volumes: g,
containers: [ {
name: a.name,
image: a.image,
ports: a.ports,
env: f,
volumeMounts: h
} ],
resources: {}
}
}
},
status: {}
};
c.push(l);
var m;
return _.isEmpty(a.ports) || (m = {
kind: "Service",
apiVersion: "v1",
metadata: {
name: a.name,
labels: a.labels,
annotations: e
},
spec: {
selector: {
deploymentconfig: a.name
},
ports: _.map(a.ports, function(a) {
return b.getServicePort(a);
})
}
}, c.push(m)), c;
}, i = function(a) {
return _.map(_.get(a, "image.dockerImageMetadata.Config.Env"), function(a) {
var b = a.indexOf("="), c = "", d = "";
return b > 0 ? (c = a.substring(0, b), b + 1 < _.size(a) && (d = a.substring(b + 1))) : c = a, {
name: c,
value: d
};
});
};
return {
findImage: e,
getVolumes: g,
runsAsRoot: f,
getResources: h,
getEnvironment: i
};
} ]), angular.module("openshiftConsole").factory("ConversionService", function() {
var a = function(a) {
return a ? a / 1048576 : a;
}, b = function(a) {
return a ? a / 1024 : a;
}, c = function(a) {
return a ? a / 1e3 : a;
};
return {
bytesToMiB: a,
bytesToKiB: b,
millicoresToCores: c
};
}), angular.module("openshiftConsole").service("BreadcrumbsService", [ "$filter", "APIService", "Navigate", function(a, b, c) {
var d = a("annotation"), e = a("displayName"), f = function(a) {
switch (a) {
case "DeploymentConfig":
return "Deployments";

default:
return _.startCase(b.kindToResource(a, !0));
}
}, g = function(a, d, g, h) {
var i, j = [], k = h.humanizedKind || f(d);
return h.includeProject && (i = h.project ? e(h.project) : g, j.push({
title: i,
link: c.projectOverviewURL(g)
})), j.push({
title: k,
link: c.resourceListURL(b.kindToResource(d), g)
}), h.parent && j.push(h.parent), h.subpage ? (j.push({
title: h.displayName || a,
link: c.resourceURL(a, d, g)
}), j.push({
title: h.subpage
})) : j.push({
title: h.displayName || a
}), j;
}, h = function(b, e) {
e = e || {};
var f, h = d(b, "deploymentConfig");
return h && (e.humanizedKind = "Deployments", e.parent = {
title: h,
link: c.configURLForResource(b)
}, f = a("annotation")(b, "deploymentVersion"), f && (e.displayName = "#" + f)), g(b.metadata.name, b.kind, b.metadata.namespace, e);
}, i = function(a, b) {
switch (a.kind) {
case "ReplicationController":
return h(a, b);

default:
return g(a.metadata.name, a.kind, a.metadata.namespace, b);
}
}, j = function(a) {
return a = a || {}, a.object ? i(a.object, a) : a.kind && a.name && a.namespace ? g(a.name, a.kind, a.namespace, a) : [];
};
return {
getBreadcrumbs: j
};
} ]), angular.module("openshiftConsole").factory("QuotaService", [ "APIService", "$filter", "$location", "$rootScope", "$routeParams", "$q", "Constants", "DataService", "EventsService", "Logger", "NotificationsService", function(a, b, c, d, e, f, g, h, i, j, k) {
var l = b("isNil"), m = b("usageValue"), n = b("usageWithUnits"), o = b("percent"), p = function(a) {
return _.every(a.spec.containers, function(a) {
var b = _.some(_.get(a, "resources.requests"), function(a) {
return !l(a) && 0 !== m(a);
}), c = _.some(_.get(a, "resources.limits"), function(a) {
return !l(a) && 0 !== m(a);
});
return !b && !c;
});
}, q = function(a) {
return _.has(a, "spec.activeDeadlineSeconds");
}, r = function(a, b) {
var c = p(a), d = q(a);
return _.filter(b, function(a) {
var b = function(a) {
switch (a) {
case "Terminating":
return d;

case "NotTerminating":
return !d;

case "BestEffort":
return c;

case "NotBestEffort":
return !c;
}
return !0;
}, e = a.spec.quota ? a.spec.quota.scopes : a.spec.scopes;
return _.every(e, b);
});
}, s = function(a, b) {
return a ? "Pod" === a.kind ? r(a, b) : _.has(a, "spec.template") ? r(a.spec.template, b) : b : b;
}, t = b("humanizeQuotaResource"), u = b("humanizeKind"), v = function(a, b, c) {
var d = a.status.total || a.status;
if (m(d.hard[c]) <= m(d.used[c])) {
var e, f;
return e = "Pod" === b.kind ? "You will not be able to create the " + u(b.kind) + " '" + b.metadata.name + "'." : "You can still create " + u(b.kind) + " '" + b.metadata.name + "' but no pods will be created until resources are freed.", f = "pods" === c ? "You are at your quota for pods." : "You are at your quota for " + t(c) + " on pods.", {
type: "Pod" === b.kind ? "error" : "warning",
message: f,
details: e,
links: [ {
href: "project/" + a.metadata.namespace + "/quota",
label: "View Quota",
target: "_blank"
} ]
};
}
return null;
}, w = {
cpu: "resources.requests.cpu",
"requests.cpu": "resources.requests.cpu",
"limits.cpu": "resources.limits.cpu",
memory: "resources.requests.memory",
"requests.memory": "resources.requests.memory",
"limits.memory": "resources.limits.memory",
persistentvolumeclaims: "resources.limits.persistentvolumeclaims",
"requests.storage": "resources.request.storage"
}, x = function(a, b, c, d) {
var e = a.status.total || a.status, f = w[d], g = 0;
if (_.each(c.spec.containers, function(a) {
var b = _.get(a, f);
b && (g += m(b));
}), m(e.hard[d]) < m(e.used[d]) + g) {
var h;
return h = "Pod" === b.kind ? "You may not be able to create the " + u(b.kind) + " '" + b.metadata.name + "'." : "You can still create " + u(b.kind) + " '" + b.metadata.name + "' but you may not have pods created until resources are freed.", {
type: "warning",
message: "You are close to your quota for " + t(d) + " on pods.",
details: h,
links: [ {
href: "project/" + a.metadata.namespace + "/quota",
label: "View Quota",
target: "_blank"
} ]
};
}
}, y = function(a, b) {
var c = [], d = "Pod" === a.kind ? a : _.get(a, "spec.template");
return d ? (_.each([ "cpu", "memory", "requests.cpu", "requests.memory", "limits.cpu", "limits.memory", "pods" ], function(e) {
var f = b.status.total || b.status;
if (("Pod" !== a.kind || "pods" !== e) && _.has(f, [ "hard", e ]) && _.has(f, [ "used", e ])) {
var g = v(b, a, e);
if (g) c.push(g); else if ("pods" !== e) {
var h = x(b, a, d, e);
h && c.push(h);
}
}
}), c) : c;
}, z = function(b, c, d) {
var e = [];
return b && c ? (_.each(b, function(b) {
var f = s(b, c), g = s(b, d), h = a.objectToResourceGroupVersion(b);
if (h) {
var i = a.kindToResource(b.kind, !0), j = u(b.kind), k = "";
h.group && (k = h.group + "/"), k += h.resource;
var n = function(a) {
var c = a.status.total || a.status;
!l(c.hard[k]) && m(c.hard[k]) <= m(c.used[k]) && e.push({
type: "error",
message: "You are at your quota of " + c.hard[k] + " " + ("1" === c.hard[k] ? j : i) + " in this project.",
details: "You will not be able to create the " + j + " '" + b.metadata.name + "'.",
links: [ {
href: "project/" + a.metadata.namespace + "/quota",
label: "View Quota",
target: "_blank"
} ]
}), e = e.concat(y(b, a));
};
_.each(f, n), _.each(g, n);
}
}), e) : e;
}, A = function(a, b) {
var c, d, e = [];
return e.push(h.list("resourcequotas", b).then(function(a) {
c = a.by("metadata.name"), j.log("quotas", c);
})), e.push(h.list("appliedclusterresourcequotas", b).then(function(a) {
d = a.by("metadata.name"), j.log("cluster quotas", d);
})), f.all(e).then(function() {
var b = z(a, c, d);
return {
quotaAlerts: b
};
});
}, B = [ "cpu", "requests.cpu", "memory", "requests.memory", "limits.cpu", "limits.memory" ], C = function(a, b, c, d, e) {
var f, h = "Your project is " + (d < b ? "over" : "at") + " quota. ";
return f = _.includes(B, e) ? h + "It is using " + o(b / d, 0) + " of " + n(c, e) + " " + t(e) + "." : h + "It is using " + b + " of " + d + " " + t(e) + ".", f = _.escape(f), g.QUOTA_NOTIFICATION_MESSAGE && g.QUOTA_NOTIFICATION_MESSAGE[e] && (f += " " + g.QUOTA_NOTIFICATION_MESSAGE[e]), f;
}, D = function(a, b, f) {
var g = [], h = function(a) {
var b = a.status.total || a.status;
_.each(b.hard, function(a, h) {
var i = m(a), j = _.get(b, [ "used", h ]), l = m(j);
"resourcequotas" !== h && i && l && i <= l && g.push({
id: f + "/quota-limit-reached-" + h,
namespace: f,
type: i < l ? "warning" : "info",
message: C(j, l, a, i, h),
isHTML: !0,
skipToast: !0,
showInDrawer: !0,
actions: [ {
name: "View Quotas",
title: "View project quotas",
onClick: function() {
c.url("/project/" + e.project + "/quota"), d.$emit("NotificationDrawerWrapper.hide");
}
}, {
name: "Don't Show Me Again",
title: "Permenantly hide this notificaiton until quota limit changes",
onClick: function(a) {
k.permanentlyHideNotification(a.uid, a.namespace), d.$emit("NotificationDrawerWrapper.clear", a);
}
}, {
name: "Clear",
title: "Clear this notificaiton",
onClick: function(a) {
d.$emit("NotificationDrawerWrapper.clear", a);
}
} ]
});
});
};
return _.each(a, h), _.each(b, h), g;
}, E = function(a, b, c) {
var d = function(a) {
var b = a.status.total || a.status;
return _.some(b.hard, function(a, d) {
if ("resourcequotas" === d) return !1;
if (!c || _.includes(c, d)) {
if (a = m(a), !a) return !1;
var e = m(_.get(b, [ "used", d ]));
return !!e && a <= e;
}
});
};
return _.some(a, d) || _.some(b, d);
}, F = function(a, b) {
return E(a, b, [ "requests.storage", "persistentvolumeclaims" ]);
}, G = function(a, b, c, d) {
var e = function(a) {
var b = a.status.total || a.status, e = m(d);
if (!c) return !1;
var f = _.get(b.hard, c);
if (f = m(f), !f) return !1;
var g = m(_.get(b, [ "used", c ]));
return g ? f < g + e : f < e;
};
return _.some(a, e) || _.some(b, e);
};
return {
filterQuotasForResource: s,
isBestEffortPod: p,
isTerminatingPod: q,
getResourceLimitAlerts: y,
getQuotaAlerts: z,
getLatestQuotaAlerts: A,
isAnyQuotaExceeded: E,
isAnyStorageQuotaExceeded: F,
willRequestExceedQuota: G,
getQuotaNotifications: D
};
} ]), angular.module("openshiftConsole").factory("SecurityCheckService", [ "APIService", "$filter", "Constants", function(a, b, c) {
var d = b("humanizeKind"), e = function(b, e) {
var f = [], g = [], h = [], i = [], j = [], k = [];
if (_.each(b, function(b) {
if (_.get(b, "kind")) {
var d = a.objectToResourceGroupVersion(b), e = a.apiInfo(d);
if (!e) return void g.push(b);
if (e.namespaced) if ("rolebindings" !== d.resource || "" !== d.group && "rbac.authorization.k8s.io" !== d.group) "roles" !== d.resource || "" !== d.group && "rbac.authorization.k8s.io" !== d.group ? _.find(c.SECURITY_CHECK_WHITELIST, {
resource: d.resource,
group: d.group
}) || k.push(b) : j.push(b); else {
var f = _.get(b, "roleRef.name");
"view" !== f && "system:image-puller" !== f && i.push(b);
} else h.push(b);
}
}), g.length) {
var l = _.uniq(_.map(g, function(a) {
var b = _.get(a, "apiVersion", "<none>");
return "API version " + b + " for kind " + d(a.kind);
}));
f.push({
type: "warning",
message: "Some resources will not be created.",
details: "The following resource versions are not supported by the server: " + l.join(", ")
});
}
if (h.length) {
var m = _.uniq(_.map(h, function(a) {
return d(a.kind);
}));
f.push({
type: "warning",
message: "This will create resources outside of the project, which might impact all users of the cluster.",
details: "Typically only cluster administrators can create these resources. The cluster-level resources being created are: " + m.join(", ")
});
}
if (i.length) {
var n = [];
_.each(i, function(a) {
_.each(a.subjects, function(a) {
var b = d(a.kind) + " ";
"ServiceAccount" === a.kind && (b += (a.namespace || e) + "/"), b += a.name, n.push(b);
});
}), n = _.uniq(n), f.push({
type: "warning",
message: "This will grant permissions to your project.",
details: "Permissions are being granted to: " + n.join(", ")
});
}
if (j.length && f.push({
type: "info",
message: "This will create additional membership roles within the project.",
details: "Admins will be able to grant these custom roles to users, groups, and service accounts."
}), k.length) {
var o = _.uniq(_.map(k, function(a) {
return d(a.kind);
}));
f.push({
type: "warning",
message: "This will create resources that may have security or project behavior implications.",
details: "Make sure you understand what they do before creating them. The resources being created are: " + o.join(", ")
});
}
return f;
};
return {
getSecurityAlerts: e
};
} ]), angular.module("openshiftConsole").factory("LabelsService", function() {
var a = function(a) {
return _.get(a, "spec.template", {
metadata: {
labels: {}
}
});
};
return {
groupBySelector: function(b, c, d) {
var e = {}, f = {};
return d = d || {}, _.each(c, function(a) {
f[a.metadata.uid] = new LabelSelector(a.spec.selector);
}), _.each(b, function(b) {
if (!d.include || d.include(b)) {
var g = _.filter(c, function(c) {
var e = f[c.metadata.uid];
return d.matchTemplate ? e.matches(a(b)) : d.matchSelector ? e.covers(new LabelSelector(b.spec.selector)) : e.matches(b);
});
g.length || _.set(e, [ "", b.metadata.name ], b), _.each(g, function(a) {
var c = _.get(a, d.key || "metadata.name", "");
_.set(e, [ c, b.metadata.name ], b);
});
}
}), e;
}
};
}), angular.module("openshiftConsole").factory("CatalogService", [ "$filter", "APIService", "Constants", "KeywordService", function(a, b, c, d) {
var e = a("tags"), f = b.getPreferredVersion("servicebindings"), g = b.getPreferredVersion("clusterserviceclasses"), h = b.getPreferredVersion("serviceinstances"), i = b.getPreferredVersion("clusterserviceplans"), j = !c.DISABLE_SERVICE_CATALOG_LANDING_PAGE && b.apiInfo(f) && b.apiInfo(g) && b.apiInfo(h) && b.apiInfo(i), k = function() {
return !!c.TEMPLATE_SERVICE_BROKER_ENABLED;
}, l = {};
_.each(c.CATALOG_CATEGORIES, function(a) {
_.each(a.items, function(a) {
l[a.id] = a;
var b = _.get(a, "subcategories", []);
_.each(b, function(a) {
_.each(a.items, function(a) {
l[a.id] = a;
});
});
});
});
var m = function(a) {
return l[a];
}, n = function(a, b) {
a = a.toLowerCase();
var c;
for (c = 0; c < b.length; c++) {
var d = b[c].toLowerCase();
if (a === d) return !0;
}
return !1;
}, o = function(a, b) {
var c = _.get(a, "categoryAliases", []), d = [ a.id ].concat(c);
return _.some(d, function(a) {
return n(a, b);
});
}, p = function(a) {
var b = {};
return _.each(a, function(a) {
if (a.status) {
var c = {};
a.spec && a.spec.tags && _.each(a.spec.tags, function(a) {
var b = _.get(a, "annotations.tags");
b && (c[a.name] = b.split(/\s*,\s*/));
});
var d = !1;
_.each(l, function(e) {
var f = function(a) {
return _.some(a.status.tags, function(a) {
var b = c[a.tag] || [];
return o(e, b) && n("builder", b) && !n("hidden", b);
});
};
f(a) && (b[e.id] = b[e.id] || [], b[e.id].push(a), d = !0);
});
var e;
d || (e = _.some(a.status.tags, function(a) {
var b = c[a.tag] || [];
return n("builder", b) && !n("hidden", b);
}), e && (b[""] = b[""] || [], b[""].push(a)));
}
}), b;
}, q = function(a) {
var b = {};
return _.each(a, function(a) {
var c = e(a), d = !1;
_.each(l, function(e) {
o(e, c) && (b[e.id] = b[e.id] || [], b[e.id].push(a), d = !0);
}), d || (b[""] = b[""] || [], b[""].push(a));
}), b;
}, r = function(a) {
return a.from && "ImageStreamTag" === a.from.kind && a.from.name.indexOf(":") === -1 && !a.from.namespace;
}, s = a("displayName"), t = function(a, b) {
if (!b.length) return a;
var c = [];
return _.each(a, function(a) {
var d = _.get(a, "metadata.name", ""), e = s(a, !0), f = [], g = {}, h = {};
_.each(a.spec.tags, function(a) {
return r(a) ? (g[a.name] = a.from.name, h[a.from.name] = h[a.from.name] || [], void h[a.from.name].push(a.name)) : void f.push(a);
});
var i = _.keyBy(f, "name");
_.each(b, function(a) {
a.test(d) || e && a.test(e) || _.each(f, function(b) {
var c = _.get(b, "annotations.tags", "");
if (!/\bbuilder\b/.test(c) || /\bhidden\b/.test(c)) return void delete i[b.name];
if (!a.test(b.name)) {
var d = function(b) {
return a.test(b);
};
if (!_.some(h[b.name], d)) {
var e = _.get(b, "annotations.description");
e && a.test(e) || delete i[b.name];
}
}
});
});
var j;
_.isEmpty(i) || (j = angular.copy(a), j.status.tags = _.filter(j.status.tags, function(a) {
var b = g[a.tag];
return b ? i[b] : i[a.tag];
}), c.push(j));
}), c;
}, u = [ "metadata.name", 'metadata.annotations["openshift.io/display-name"]', "metadata.annotations.description" ], v = function(a, b) {
return d.filterForKeywords(a, u, b);
};
return {
SERVICE_CATALOG_ENABLED: j,
isTemplateServiceBrokerEnabled: k,
getCategoryItem: m,
categorizeImageStreams: p,
categorizeTemplates: q,
referencesSameImageStream: r,
filterImageStreams: t,
filterTemplates: v
};
} ]), angular.module("openshiftConsole").factory("ModalsService", [ "$uibModal", function(a) {
return {
confirm: function(b) {
var c = a.open({
animation: !0,
templateUrl: "views/modals/confirm.html",
controller: "ConfirmModalController",
resolve: {
modalConfig: b
}
});
return c.result;
},
confirmSaveLog: function(b) {
var c = a.open({
animation: !0,
templateUrl: "views/modals/confirm-save-log.html",
controller: "ConfirmSaveLogController",
resolve: {
object: b
}
});
return c.result;
},
showJenkinsfileExamples: function() {
a.open({
animation: !0,
templateUrl: "views/modals/jenkinsfile-examples-modal.html",
controller: "JenkinsfileExamplesModalController",
size: "lg"
});
},
showComputeUnitsHelp: function() {
a.open({
animation: !0,
templateUrl: "views/modals/about-compute-units-modal.html",
controller: "AboutComputeUnitsModalController"
});
}
};
} ]), angular.module("openshiftConsole").factory("CLIHelp", [ "$filter", function(a) {
var b = a("annotation"), c = function(a, c) {
if (!a) return null;
var d, e, f;
switch (a.kind) {
case "Pod":
d = "oc logs " + a.metadata.name, c && (d += " -c " + c);
break;

case "DeploymentConfig":
d = "oc logs dc/" + a.metadata.name;
break;

case "ReplicationController":
e = b(a, "deploymentConfig"), f = b(a, "deploymentVersion"), d = e && f ? "oc logs --version " + f + " dc/" + e : "oc logs rc/" + a.metadata.name;
break;

case "BuildConfig":
d = "oc logs bc/" + a.metadata.name;
break;

case "Build":
e = b(a, "buildConfig"), f = b(a, "buildNumber"), d = "oc logs --version " + f + " bc/" + e;
break;

default:
return null;
}
return d += " -n " + a.metadata.namespace;
};
return {
getLogsCommand: c
};
} ]), angular.module("openshiftConsole").factory("EnvironmentService", [ "$filter", "keyValueEditorUtils", function(a, b) {
var c = function(a) {
<<<<<<< f56378c1e748449074be8738ae159f02ed953303
return "Pod" === a.kind ? _.get(a, "spec.containers", []) : _.get(a, "spec.template.spec.containers", []);
};
return {
getContainers: c,
normalize: function(a) {
=======
return "Pod" === a.kind ? _.get(a, "spec.containers", []) :_.get(a, "spec.template.spec.containers", []);
};
return {
getContainers:c,
normalize:function(a) {
>>>>>>> Create reusable edit-environment-variables component
var b = c(a);
_.each(b, function(a) {
a.env = a.env || [], a.envFrom = a.envFrom || [];
});
},
compact: function(a) {
var d = c(a);
_.each(d, function(a) {
a.env = b.compactEntries(a.env), a.envFrom = _.reject(a.envFrom, function(a) {
return !_.get(a, "configMapRef.name") && !_.get(a, "secretRef.name");
});
});
},
copyAndNormalize: function(a) {
var b = angular.copy(a);
return this.normalize(b), b;
},
isEnvironmentEqual: function(a, b) {
var d = c(a), e = c(b);
if (d.length !== e.length) return !1;
var f, g, h, i, j;
for (f = 0; f < d.length; f++) {
if (d[f].name !== e[f].name) return !1;
if (g = d[f].env || [], h = e[f].env || [], i = d[f].envFrom || [], j = e[f].envFrom || [], !_.isEqual(g, h) || !_.isEqual(i, j)) return !1;
}
return !0;
},
mergeEdits: function(a, b) {
var d, e = angular.copy(b), f = c(a), g = c(e);
for (d = 0; d < g.length; d++) g[d].env = _.get(f, [ d, "env" ], []), g[d].envFrom = _.get(f, [ d, "envFrom" ], []);
return e;
}
};
} ]), function() {
angular.module("openshiftConsole").provider("keyValueEditorConfig", [ function() {
var a = {
keyMinlength: "",
keyMaxlength: "",
valueMinlength: "",
valueMaxlength: "",
keyValidator: "[a-zA-Z0-9-_]+",
valueValidator: "",
keyValidatorError: "Validation error",
keyValidatorErrorTooltip: void 0,
keyValidatorErrorTooltipIcon: "pficon pficon-help",
valueValidatorError: "Validation error",
valueValidatorErrorTooltip: void 0,
valueValidatorErrorTooltipIcon: "pficon pficon-help",
keyPlaceholder: "",
valuePlaceholder: "",
keyRequiredError: "Key is required"
};
this.set = function(b, c) {
angular.isObject(b) ? angular.extend(a, b) : a[b] = c;
}, this.$get = [ function() {
return a;
} ];
} ]);
}(), function() {
angular.module("openshiftConsole").factory("keyValueEditorUtils", [ "$timeout", "$window", function(a, b) {
var c = function() {
return {
name: "",
value: ""
};
}, d = function(a, b) {
a && a.push(b || c());
}, e = function(a) {
a && a.push({
name: "",
selectedValueFrom: null,
selectedValueFromKey: null,
valueFrom: {}
});
}, f = function(a, b) {
if (!a.value && a.valueFrom) {
a.valueIcon = "pficon pficon-help", a.valueIconTooltip = "This is a referenced value that will be generated when a container is created.  On running pods you can check the resolved values by going to the Terminal tab and echoing the environment variable.";
var c = {
config: "configMapKeyRef",
secret: "secretKeyRef",
field: "fieldRef"
};
a.valueFrom[c.config] ? (a.apiObj = {
kind: "ConfigMap",
metadata: {
name: a.valueFrom[c.config].name,
namespace: b
}
}, a.refType = c.config) : a.valueFrom[c.secret] ? (a.apiObj = {
kind: "Secret",
metadata: {
name: a.valueFrom[c.secret].name,
namespace: b
}
}, a.refType = c.secret, a.valueIcon = "fa fa-user-secret") : a.valueFrom[c.field] ? (a.isReadonlyValue = !0, a.refType = c.field, a.valueAlt = "Set to the field " + a.valueFrom.fieldRef.fieldPath + " in current object") : (a.isReadonlyValue = !0, a.valueAlt = "Set to a reference on a " + _.head(_.keys(a.valueFrom)));
}
}, g = function(a, b, c) {
a.valueFrom && (a.valueFrom.configMapKeyRef && (c || (a.isReadonlyValue = !0)), a.valueFrom.secretKeyRef && (b || (a.isReadonlyValue = !0)));
}, h = [ "apiObj", "cannotDelete", "isReadonly", "isReadonlyKey", "isReadonlyValue", "keyValidator", "keyValidatorError", "keyValidatorErrorTooltip", "keyValidatorErrorTooltipIcon", "refType", "selected", "selectedValueFrom", "selectedValueFromKey", "valueValidatorError", "valueIcon", "valueIconTooltip", "valueAlt", "valueValidator", "valueValidatorErrorTooltip", "valueValidatorErrorTooltipIcon" ], i = function(a) {
return _.each(h, function(b) {
a[b] = void 0, delete a[b];
}), a;
}, j = function(a) {
return _.map(a, i);
}, k = function(a) {
return _.compact(_.map(a, function(a) {
return a = i(a), a.name || a.value || a.valueFrom ? a : void 0;
}));
}, l = function(a) {
return Logger.log("DEPRECATED: mapEntries() drops valueFrom from the entry."), _.reduce(k(a), function(a, b) {
return a[b.name] = b.value, a;
}, {});
}, m = function(c, d) {
a(function() {
var a = _.head(b.document.querySelectorAll(c));
a && (a.focus(), d && (a.value = "", a.value = d));
}, 25);
}, n = function(a, b) {
return "key-value-editor-key-" + a + "-" + b;
}, o = function(a, b) {
return "key-value-editor-value-" + a + "-" + b;
}, p = function(a, b) {
return {
object: _.find(b, function(b) {
return "ConfigMap" === b.kind && b.metadata.name === a.valueFrom.configMapKeyRef.name;
}),
key: a.valueFrom.configMapKeyRef.key
};
}, q = function(a, b) {
return {
object: _.find(b, function(b) {
return "Secret" === b.kind && b.metadata.name === a.valueFrom.secretKeyRef.name;
}),
key: a.valueFrom.secretKeyRef.key
};
}, r = function(a, b) {
var c = null;
return a.valueFrom.configMapKeyRef ? c = p(a, b) : a.valueFrom.secretKeyRef && (c = q(a, b)), c;
}, s = function(a, b) {
_.each(a, function(a) {
var c;
a.valueFrom && (c = r(a, b), c && (_.set(a, "selectedValueFrom", c.object), _.set(a, "selectedValueFromKey", c.key)));
});
};
return {
newEntry: c,
addEntry: d,
addEntryWithSelectors: e,
altTextForValueFrom: f,
setEntryPerms: g,
cleanEntry: i,
cleanEntries: j,
compactEntries: k,
mapEntries: l,
setFocusOn: m,
uniqueForKey: n,
uniqueForValue: o,
findReferenceValue: r,
findReferenceValueForEntries: s
};
} ]);
}(), angular.module("openshiftConsole").factory("FullscreenService", [ "IS_SAFARI", function(a) {
var b = document.documentElement.requestFullScreen || document.documentElement.webkitRequestFullScreen || document.documentElement.mozRequestFullScreen || document.documentElement.msRequestFullscreen, c = function(a) {
if (!a || !_.isString(a)) return a;
var b = $(a);
return b.length ? b[0] : null;
};
return {
hasFullscreen: function(c) {
return (!c || !a) && !!b;
},
requestFullscreen: function(a) {
b && (a = c(a), a && b.call(a));
},
exitFullscreen: function() {
document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen();
}
};
} ]), angular.module("openshiftConsole").factory("AppsService", function() {
var a = function(a) {
return _.get(a, "metadata.labels.app", "");
}, b = function(a, b) {
return a || b ? a ? b ? a.toLowerCase().localeCompare(b.toLowerCase()) : -1 : 1 : 0;
};
return {
groupByApp: function(b, c) {
var d = _.groupBy(b, a);
return c && _.mapValues(d, function(a) {
return _.sortBy(a, c);
}), d;
},
sortAppNames: function(a) {
a.sort(b);
}
};
}), angular.module("openshiftConsole").factory("ResourceAlertsService", [ "$filter", "AlertMessageService", "DeploymentsService", "Navigate", "NotificationsService", "QuotaService", "gettextCatalog", "gettext", function(a, b, c, d, e, f, g, h) {
var i = a("annotation"), j = a("humanizeKind"), k = a("deploymentStatus"), l = a("groupedPodWarnings"), m = function(a, c) {
if (_.isEmpty(a)) return {};
var e = {}, f = l(a);
return _.each(f, function(a, f) {
var i = _.head(a);
if (i) {
var j = "pod_warning" + f, k = {
type: i.severity || "warning",
message: i.message
};
switch (i.reason) {
case "Looping":
case "NonZeroExit":
var l = d.resourceURL(i.pod, "Pod", c), m = URI(l).addSearch({
tab: "logs",
container: i.container
}).toString();
k.links = [ {
href: m,
label: g.getString(h("View Log"))
} ];
break;

case "NonZeroExitTerminatingPod":
if (b.isAlertPermanentlyHidden(j, c)) return;
k.links = [ {
href: "",
label: g.getString(h("Don't Show Me Again")),
onClick: function() {
return b.permanentlyHideAlert(j, c), !0;
}
} ];
}
e[j] = k;
}
}), e;
}, n = function(a, b, c) {
var d = f.getQuotaNotifications(a, b, c);
_.each(d, function(a) {
e.isNotificationPermanentlyHidden(a) || e.addNotification(a);
});
}, o = function(b) {
var d = {};
return _.get(b, "spec.paused") && (d[b.metadata.uid + "-paused"] = {
type: "info",
message: b.metadata.name + " is paused.",
details: "This will stop any new rollouts or triggers from running until resumed.",
links: [ {
href: "",
label: "Resume Rollouts",
onClick: function() {
return c.setPaused(b, !1, {
namespace: b.metadata.namespace
}).then(_.noop, function(c) {
d[b.metadata.uid + "-pause-error"] = {
type: "error",
message: "An error occurred resuming the " + j(b.kind) + ".",
details: a("getErrorDetails")(c)
};
}), !0;
}
} ]
}), d;
}, p = function(a, b) {
if (!a || !b) return {};
var c, e = {}, f = _.get(a, "metadata.name"), j = k(b), l = i(b, "deploymentVersion"), m = l ? f + " #" + l : b.metadata.name, n = d.resourceURL(b);
switch (j) {
case "Cancelled":
e[b.metadata.uid + "-cancelled"] = {
type: "info",
message: g.getString(h("Deployment")) + " " + m + " " + g.getString(h("was cancelled.")),
links: [ {
href: n,
label: g.getString(h("View Deployment"))
} ]
};
break;

case "Failed":
c = URI(n).addSearch({
tab: "logs"
}).toString(), e[b.metadata.uid + "-failed"] = {
type: "error",
message: g.getString(h("Deployment")) + " " + m + " " + g.getString(h("failed.")),
reason: i(b, "openshift.io/deployment.status-reason"),
links: [ {
href: c,
label: g.getString(h("View Log"))
}, {
href: "project/" + b.metadata.namespace + "/browse/events",
label: g.getString(h("View Events"))
} ]
};
}
return e;
}, q = function(a, b, c, d) {
a[b + "-" + c.reason] = {
type: d,
message: c.message
};
}, r = function(a) {
var b = {};
if (!a) return b;
var c = a.metadata.uid, d = _.find(a.status.conditions, {
reason: "ErrorFindingNamespaceForInstance"
}), e = _.find(a.status.conditions, {
reason: "ProvisionFailed"
}), f = _.find(a.status.conditions, {
reason: "DeprovisioningFailed"
});
return d && q(b, c, d, "warning"), e && q(b, c, e, "error"), f && q(b, c, f, "error"), b;
};
return {
getPodAlerts: m,
getDeploymentStatusAlerts: p,
getPausedDeploymentAlerts: o,
getServiceInstanceAlerts: r,
setQuotaNotifications: n
};
} ]), angular.module("openshiftConsole").factory("ListRowUtils", function() {
var a = function(a) {
var b = _.get(a, "metadata.uid");
return b ? "overview/expand/" + b : null;
}, b = function(b) {
var c = a(b.apiObject);
if (!c) return void (b.expanded = !1);
var d = sessionStorage.getItem(c);
return !d && b.state.expandAll ? void (b.expanded = !0) : void (b.expanded = "true" === d);
};
return {
getNotifications: function(a, b) {
var c = _.get(a, "metadata.uid");
return c ? _.get(b, [ "notificationsByObjectUID", c ]) : null;
},
ui: {
toggleExpand: function(b, c) {
if (c || !($(b.target).closest("a").length > 0)) {
var d = a(this.apiObject);
d && (this.expanded = !this.expanded, sessionStorage.setItem(d, this.expanded ? "true" : "false"));
}
},
$onInit: function() {
_.set(this, "selectedTab.networking", !0), b(this);
}
}
};
}), angular.module("openshiftConsole").factory("OwnerReferencesService", function() {
var a = function(a) {
return _.get(a, "metadata.ownerReferences");
}, b = function(b) {
var c = a(b);
return _.filter(c, "controller");
};
return {
getOwnerReferences: a,
getControllerReferences: b,
groupByControllerUID: function(b) {
var c = {};
return _.each(b, function(b) {
var d = !1;
_.each(a(b), function(a) {
a.controller && (d = !0, c[a.uid] = c[a.uid] || [], c[a.uid].push(b));
}), d || (c[""] = c[""] || [], c[""].push(b));
}), c;
},
filterForController: function(b, c) {
var d = _.get(c, "metadata.uid");
return _.filter(b, function(b) {
return _.some(a(b), {
uid: d,
controller: !0
});
});
}
};
}), angular.module("openshiftConsole").factory("ServiceInstancesService", [ "$filter", "$q", "$uibModal", "APIService", "BindingService", "CatalogService", "DataService", "Logger", "NotificationsService", function(a, b, c, d, e, f, g, h, i) {
var j = d.getPreferredVersion("clusterserviceclasses"), k = d.getPreferredVersion("clusterserviceplans"), l = function(a) {
return _.get(a, "spec.clusterServiceClassRef.name");
}, m = function(a) {
var b = l(a);
return g.get(j, b, {});
}, n = function(a) {
return _.get(a, "spec.clusterServicePlanRef.name");
}, o = function(a) {
var b = n(a);
return g.get(k, b, {});
}, p = function(a, b) {
var c = n(a);
return c === _.get(b, "metadata.name");
}, q = function(a, c) {
if (angular.isDefined(c)) return b.when(c);
var f = {
namespace: a.metadata.namespace
}, h = d.getPreferredVersion("servicebindings");
return g.list(h, f).then(function(b) {
return c = b.by("metadata.name"), e.getBindingsForResource(c, a);
});
}, r = function(b) {
var c = {
namespace: b.metadata.namespace
}, e = d.getPreferredVersion("serviceinstances");
i.hideNotification("deprovision-service-error");
var f = {
propagationPolicy: null
};
return g["delete"](e, b.metadata.name, c, f).then(function() {
i.addNotification({
type: "success",
message: "Provisioned service '" + b.metadata.name + "' was marked for deletion."
});
}, function(c) {
i.addNotification({
id: "deprovision-service-error",
type: "error",
message: "An error occurred while deleting provisioned service " + b.metadata.name + ".",
details: a("getErrorDetails")(c)
}), h("An error occurred while deleting provisioned service " + b.metadata.name + ".", c);
});
}, s = function(b, c) {
if (f.SERVICE_CATALOG_ENABLED) {
var e = {
namespace: b.metadata.namespace
}, j = d.getPreferredVersion("servicebindings");
q(b, c).then(function(b) {
_.each(b, function(b) {
if (!b.metadata.deletionTimestamp) {
var c = {
propagationPolicy: null
};
g["delete"](j, b.metadata.name, e, c).then(function() {
i.addNotification({
type: "success",
message: "Binding " + b.metadata.name + "' was marked for deletion."
});
})["catch"](function(c) {
i.addNotification({
type: "error",
message: "Binding " + b.metadata.name + "' could not be deleted.",
details: a("getErrorDetails")(c)
}), h.error("Binding " + b.metadata.name + "' could not be deleted.", c);
});
}
});
});
}
}, t = function(a, b) {
var d, e = {
kind: a.kind,
displayName: a.metadata.name,
okButtonText: "Delete",
okButtonClass: "btn-danger",
cancelButtonText: "Cancel",
"delete": function() {
d.close("delete");
}
};
return d = c.open({
animation: !0,
templateUrl: "views/modals/delete-resource.html",
controller: "ConfirmModalController",
resolve: {
modalConfig: function() {
return e;
}
}
}), d.result.then(function() {
s(a, b), r(a);
});
};
return {
getServiceClassNameForInstance: l,
fetchServiceClassForInstance: m,
getServicePlanNameForInstance: n,
fetchServicePlanForInstance: o,
isCurrentPlan: p,
deprovision: t
};
} ]), angular.module("openshiftConsole").controller("LandingPageController", [ "$scope", "$rootScope", "AuthService", "Catalog", "CatalogService", "Constants", "DataService", "Navigate", "NotificationsService", "RecentlyViewedServiceItems", "GuidedTourService", "HTMLService", "$timeout", "$q", "$routeParams", "$location", function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
function q() {
var b = p.search();
return b.serviceExternalName ? _.find(a.catalogItems, {
resource: {
spec: {
externalName: b.serviceExternalName
}
}
}) : null;
}
function r() {
var c = q();
if (c) return void a.$broadcast("open-overlay-panel", c);
if (t) if (o.startTour) m(function() {
p.replace(), p.search("startTour", null), a.startGuidedTour();
}, 500); else if (_.get(s, "auto_launch")) {
var d = "openshift/viewedHomePage/" + b.user.metadata.name;
"true" !== localStorage.getItem(d) && m(function() {
a.startGuidedTour() && localStorage.setItem(d, "true");
}, 500);
}
}
var s = _.get(f, "GUIDED_TOURS.landing_page_tour"), t = s && s.enabled && s.steps;
a.saasOfferings = f.SAAS_OFFERINGS, a.viewMembership = function(a) {
h.toProjectMembership(a.metadata.name);
}, t && (a.startGuidedTour = function() {
return !l.isWindowBelowBreakpoint(l.WINDOW_SIZE_SM) && (k.startTour(s.steps), !0);
}), i.clearNotifications();
var u = function() {
var b = _.get(a, "template.metadata.uid");
b && j.addItem(b);
}, v = function(a) {
return "PartialObjectMetadata" === a.kind;
}, w = function(a) {
return v(a) ? g.get("templates", a.metadata.name, {
namespace: a.metadata.namespace
}) : n.when(a);
};
a.templateSelected = function(b) {
w(b).then(function(b) {
_.set(a, "ordering.panelName", "template"), a.template = b;
});
}, a.closeOrderingPanel = function() {
a.template && (u(), a.template = null), _.set(a, "ordering.panelName", "");
}, a.deployImageSelected = function() {
_.set(a, "ordering.panelName", "deployImage");
}, a.fromFileSelected = function() {
_.set(a, "ordering.panelName", "fromFile");
}, a.fromProjectSelected = function() {
_.set(a, "ordering.panelName", "fromProject");
}, c.withUser().then(function() {
var b = !e.isTemplateServiceBrokerEnabled();
d.getCatalogItems(b).then(_.spread(function(b, c) {
if (c) {
var d = {
type: "error",
message: c
};
i.addNotification(d);
}
a.catalogItems = b, r();
}));
}), a.$on("$destroy", function() {
u();
}), t && a.$on("$locationChangeStart", function(b) {
p.search().startTour && (a.startGuidedTour(), b.preventDefault());
});
} ]), angular.module("openshiftConsole").factory("EventsService", [ "BrowserStore", function(a) {
var b = "read", c = "cleared", d = a.loadJSON("session", "events") || {}, e = _.get(window, "OPENSHIFT_CONSTANTS.EVENTS_TO_SHOW"), f = function(a) {
return e[a.reason];
}, g = function(c) {
_.set(d, [ c, b ], !0), a.saveJSON("session", "events", d);
}, h = function(b) {
_.set(d, [ b, c ], !0), a.saveJSON("session", "events", d);
}, i = function(a) {
return _.get(d, [ a, b ]);
}, j = function(a) {
return _.get(d, [ a, c ]);
};
return {
isImportantAPIEvent: f,
markRead: g,
isRead: i,
markCleared: h,
isCleared: j
};
<<<<<<< HEAD
var q, r = window.DMOS_OPENSHIFT_PROJECTNAMES.split(","), s = [ "metadata.name", 'metadata.annotations["openshift.io/display-name"]', 'metadata.annotations["openshift.io/description"]', 'metadata.annotations["openshift.io/requester"]' ], t = function() {
a.projects = h.filterForKeywords(n, s, p);
}, u = b("displayName"), v = function() {
=======
} ]), angular.module("openshiftConsole").controller("ProjectsController", [ "$scope", "$filter", "$location", "$route", "$timeout", "AuthService", "DataService", "KeywordService", "Navigate", "Logger", "ProjectsService", "gettext", "gettextCatalog", function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
var n, o, p = 250, q = [], r = [], s = !1;
a.alerts = a.alerts || {}, a.loading = !0, a.showGetStarted = !1, a.canCreate = void 0, a.search = {
text: ""
}, a.limitListTo = p;
var t, u = [ "metadata.name", 'metadata.annotations["openshift.io/display-name"]', 'metadata.annotations["openshift.io/description"]', 'metadata.annotations["openshift.io/requester"]' ], v = function() {
a.projects = h.filterForKeywords(o, u, r);
}, w = b("displayName"), x = function() {
>>>>>>> rebase from poc 3.6
var b = _.get(a, "sortConfig.currentField.id");
t !== b && (a.sortConfig.isAscending = "metadata.creationTimestamp" !== b);
var c = function(a) {
<<<<<<< HEAD
return u(a).toLowerCase();
}, d = a.sortConfig.isAscending ? "asc" :"desc";
=======
return w(a).toLowerCase();
}, d = a.sortConfig.isAscending ? "asc" : "desc";
>>>>>>> rebase from poc 3.6
switch (b) {
case 'metadata.annotations["openshift.io/display-name"]':
o = _.orderBy(n, [ c, "metadata.name" ], [ d ]);
break;

case 'metadata.annotations["openshift.io/requester"]':
o = _.orderBy(n, [ b, c ], [ d, "asc" ]);
break;

default:
o = _.orderBy(n, [ b ], [ d ]);
}
<<<<<<< HEAD
q = b;
}, w = function() {
v(), t();
};
a.sortConfig = {
fields:[ {
id:'metadata.annotations["openshift.io/display-name"]',
title:l.getString(k("Display Name")),
sortType:"alpha"
}, {
id:"metadata.name",
title:l.getString(k("Name")),
sortType:"alpha"
}, {
id:'metadata.annotations["openshift.io/requester"]',
title:l.getString(k("Creator")),
sortType:"alpha"
}, {
id:"metadata.creationTimestamp",
title:l.getString(k("Creation Date")),
sortType:"alpha"
} ],
isAscending:!0,
onSortChange:w
}, a.$watch("search.text", _.debounce(function(b) {
a.keywords = p = h.generateKeywords(b), a.$apply(t);
}, 50, {
maxWait:250
})), f.withUser().then(function() {
o.push(g.watch("projects", a, function(b) {
m = _.toArray(b.by("metadata.name")), m = m.filter(function(a) {
return r.indexOf(a.metadata.name) < 0;
}), a.loading = !1, a.showGetStarted = _.isEmpty(m), w();
}));
}), j.canCreate().then(function() {
a.canCreate = !0;
}, function(b) {
a.canCreate = !1;
var c = b.data || {};
if (403 !== b.status) {
var d = "Failed to determine create project permission";
return 0 !== b.status && (d += " (" + b.status + ")"), void i.warn(d);
}
if (c.details) {
var e = [];
_.forEach(c.details.causes || [], function(a) {
a.message && e.push(a.message);
}), _.isEmpty(e) || (a.newProjectMessage = e.join("\n"));
}
}), a.$on("$destroy", function() {
g.unwatchAll(o);
});
} ]), angular.module("openshiftConsole").controller("PodsController", [ "$routeParams", "$scope", "DataService", "ProjectsService", "$filter", "LabelFilter", "Logger", "gettext", function(a, b, c, d, e, f, g, h) {
b.projectName = a.project, b.pods = {}, b.unfilteredPods = {}, b.labelSuggestions = {}, b.alerts = b.alerts || {}, b.emptyMessage = h("Loading...");
var i = [];
d.get(a.project).then(_.spread(function(a, d) {
function e() {
f.getLabelSelector().isEmpty() || !$.isEmptyObject(b.pods) || $.isEmptyObject(b.unfilteredPods) ? delete b.alerts.pods :b.alerts.pods = {
type:"warning",
details:"The active filters are hiding all pods."
};
}
b.project = a, i.push(c.watch("pods", d, function(a) {
b.unfilteredPods = a.by("metadata.name"), b.pods = f.getLabelSelector().select(b.unfilteredPods), b.emptyMessage = h("No pods to show"), f.addLabelSuggestionsFromResources(b.unfilteredPods, b.labelSuggestions), f.setLabelSuggestions(b.labelSuggestions), e(), g.log("pods (subscribe)", b.unfilteredPods);
})), f.onActiveFiltersChanged(function(a) {
b.$apply(function() {
b.pods = a.select(b.unfilteredPods), e();
});
}), b.$on("$destroy", function() {
c.unwatchAll(i);
=======
=======
<<<<<<< HEAD
>>>>>>> Init translation.
}), e.$on("$destroy", function() {
S();
}), b && e.$on("$locationChangeStart", function(t) {
g.search().startTour && (e.startGuidedTour(), t.preventDefault());
});
} ]), angular.module("openshiftConsole").factory("EventsService", [ "BrowserStore", function(e) {
var t = e.loadJSON("session", "events") || {}, n = _.get(window, "OPENSHIFT_CONSTANTS.EVENTS_TO_SHOW");
return {
isImportantAPIEvent: function(e) {
return n[e.reason];
},
markRead: function(n) {
_.set(t, [ n, "read" ], !0), e.saveJSON("session", "events", t);
},
isRead: function(e) {
return _.get(t, [ e, "read" ]);
},
markCleared: function(n) {
_.set(t, [ n, "cleared" ], !0), e.saveJSON("session", "events", t);
},
isCleared: function(e) {
return _.get(t, [ e, "cleared" ]);
}
};
} ]), angular.module("openshiftConsole").controller("ProjectsController", [ "$scope", "$filter", "$location", "$route", "$timeout", "AuthService", "DataService", "KeywordService", "Navigate", "Logger", "ProjectsService", function(e, t, n, a, r, o, i, s, c, l, u) {
var d, m, p = [], f = [], g = !1;
e.alerts = e.alerts || {}, e.loading = !0, e.showGetStarted = !1, e.canCreate = void 0, e.search = {
text: ""
}, e.limitListTo = 250;
var v, h = [ "metadata.name", 'metadata.annotations["openshift.io/display-name"]', 'metadata.annotations["openshift.io/description"]', 'metadata.annotations["openshift.io/requester"]' ], y = function() {
e.projects = s.filterForKeywords(m, h, f);
}, b = t("displayName"), S = function() {
var t = _.get(e, "sortConfig.currentField.id");
v !== t && (e.sortConfig.isAscending = "metadata.creationTimestamp" !== t);
var n = function(e) {
return b(e).toLowerCase();
}, a = e.sortConfig.isAscending ? "asc" : "desc";
switch (t) {
case 'metadata.annotations["openshift.io/display-name"]':
m = _.orderBy(d, [ n, "metadata.name" ], [ a ]);
break;

case 'metadata.annotations["openshift.io/requester"]':
m = _.orderBy(d, [ t, n ], [ a, "asc" ]);
break;

default:
m = _.orderBy(d, [ t ], [ a ]);
}
v = t;
}, C = function() {
S(), y();
};
e.sortConfig = {
=======
t = b;
}, y = function() {
x(), v();
};
a.sortConfig = {
>>>>>>> rebase from poc 3.6
fields: [ {
id: 'metadata.annotations["openshift.io/display-name"]',
title: m.getString(l("Display Name")),
sortType: "alpha"
}, {
id: "metadata.name",
title: m.getString(l("Name")),
sortType: "alpha"
}, {
id: 'metadata.annotations["openshift.io/requester"]',
title: m.getString(l("Creator")),
sortType: "alpha"
}, {
id: "metadata.creationTimestamp",
title: m.getString(l("Creation Date")),
sortType: "alpha"
} ],
isAscending: !0,
onSortChange: y
};
var z = function(b) {
n = _.toArray(b.by("metadata.name")), a.loading = !1, a.showGetStarted = _.isEmpty(n) && !a.isProjectListIncomplete, y();
}, A = function() {
s || k.list().then(z);
};
a.newProjectPanelShown = !1, a.createProject = function(b) {
for (var c = _.get(b, "target"); c && !angular.element(c).hasClass("btn"); ) c = c.parentElement;
a.popupElement = c, a.newProjectPanelShown = !0;
}, a.closeNewProjectPanel = function() {
a.newProjectPanelShown = !1;
}, a.onNewProject = function() {
a.newProjectPanelShown = !1, A();
}, a.editProjectPanelShown = !1, a.editProject = function(b) {
a.editingProject = b, a.editProjectPanelShown = !0;
}, a.closeEditProjectPanel = function() {
a.editProjectPanelShown = !1;
}, a.onEditProject = function() {
a.editProjectPanelShown = !1, A();
}, a.onDeleteProject = A, a.goToProject = function(a) {
i.toProjectOverview(a);
}, a.$watch("search.text", _.debounce(function(b) {
a.keywords = r = h.generateKeywords(b), a.$applyAsync(v);
}, 350)), f.withUser().then(function() {
k.list().then(function(b) {
a.isProjectListIncomplete = k.isProjectListIncomplete(), z(b), !a.isProjectListIncomplete && _.size(n) <= p && (q.push(k.watch(a, z)), s = !0);
}, function() {
a.isProjectListIncomplete = !0, a.loading = !1, n = [], y();
});
}), k.canCreate().then(function() {
a.canCreate = !0;
}, function(b) {
a.canCreate = !1;
var c = b.data || {};
if (403 !== b.status) {
var d = "Failed to determine create project permission";
return 0 !== b.status && (d += " (" + b.status + ")"), void j.warn(d);
}
if (c.details) {
var e = [];
_.forEach(c.details.causes || [], function(a) {
a.message && e.push(a.message);
}), _.isEmpty(e) || (a.newProjectMessage = e.join("\n"));
}
}), a.$on("$destroy", function() {
g.unwatchAll(q);
});
} ]), angular.module("openshiftConsole").controller("PodsController", [ "$routeParams", "$scope", "DataService", "ProjectsService", "$filter", "LabelFilter", "Logger", function(a, b, c, d, e, f, g) {
b.projectName = a.project, b.pods = {}, b.unfilteredPods = {}, b.labelSuggestions = {}, b.clearFilter = function() {
f.clear();
};
var h = [];
d.get(a.project).then(_.spread(function(a, d) {
function e() {
b.filterWithZeroResults = !f.getLabelSelector().isEmpty() && _.isEmpty(b.pods) && !_.isEmpty(b.unfilteredPods);
}
b.project = a, h.push(c.watch("pods", d, function(a) {
b.podsLoaded = !0, b.unfilteredPods = a.by("metadata.name"), b.pods = f.getLabelSelector().select(b.unfilteredPods), f.addLabelSuggestionsFromResources(b.unfilteredPods, b.labelSuggestions), f.setLabelSuggestions(b.labelSuggestions), e(), g.log("pods (subscribe)", b.unfilteredPods);
})), f.onActiveFiltersChanged(function(a) {
b.$evalAsync(function() {
b.pods = a.select(b.unfilteredPods), e();
});
}), b.$on("$destroy", function() {
c.unwatchAll(h);
});
}));
} ]), angular.module("openshiftConsole").controller("PodController", [ "$scope", "$filter", "$routeParams", "$timeout", "$uibModal", "Logger", "DataService", "FullscreenService", "ImageStreamResolver", "MetricsService", "OwnerReferencesService", "PodsService", "ProjectsService", function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
a.projectName = c.project, a.pod = null, a.imageStreams = {}, a.imagesByDockerReference = {}, a.imageStreamImageRefByDockerReference = {}, a.builds = {}, a.alerts = {}, a.terminalDisconnectAlert = {}, a.renderOptions = a.renderOptions || {}, a.renderOptions.hideFilterWidget = !0, a.logOptions = {}, a.terminalTabWasSelected = !1, a.breadcrumbs = [ {
title: "Pods",
link: "project/" + c.project + "/browse/pods"
}, {
title: c.pod
} ], a.terminalDisconnectAlert.disconnect = {
type: "warning",
message: "This terminal has been disconnected. If you reconnect, your terminal history will be lost."
}, a.noContainersYet = !0, a.selectedTab = {};
var n = [], o = null;
j.isAvailable().then(function(b) {
a.metricsAvailable = b;
});
var p = function() {
if (a.pod) {
var b = _.find(a.pod.status.containerStatuses, {
name: a.logOptions.container
}), c = _.get(b, "state"), d = _.head(_.keys(c)), e = _.includes([ "running", "waiting", "terminated" ], d) ? d : "", f = _.get(b, "lastState"), g = _.head(_.keys(f)), h = _.get(b, "state.waiting");
angular.extend(a, {
containerStatusKey: e,
containerStateReason: _.get(c, [ d, "reason" ])
}), h ? angular.extend(a, {
lasStatusKey: g,
containerStartTime: _.get(f, [ g, "startedAt" ]),
containerEndTime: _.get(f, [ g, "finishedAt" ])
}) : angular.extend(a, {
containerStartTime: _.get(c, [ d, "startedAt" ]),
containerEndTime: _.get(c, [ d, "finishedAt" ])
});
}
}, q = function() {
var a = $("<span>").css({
position: "absolute",
top: "-100px"
}).addClass("terminal-font").text(_.repeat("x", 10)).appendTo("body"), b = {
width: a.width() / 10,
height: a.height()
};
return a.remove(), b;
}, r = q(), s = $(window), t = function(b) {
b || (b = 0), r.height && r.width && a.selectedTab.terminal && !(b > 10) && a.$apply(function() {
var c = $(".container-terminal-wrapper").get(0);
if (!c) return void d(function() {
t(b + 1);
}, 50);
var e = c.getBoundingClientRect();
if (0 === e.left && 0 === e.top && 0 === e.width && 0 === e.height) return void d(function() {
t(b + 1);
}, 50);
<<<<<<< f56378c1e748449074be8738ae159f02ed953303
var f = s.width(), g = s.height(), h = f - e.left - 54, i = g - e.top - 36;
=======
var f = s.width(), g = s.height(), h = f - e.left - 40, i = g - e.top - 50;
>>>>>>> Create reusable edit-environment-variables component
a.terminalCols = Math.max(_.floor(h / r.width), 80), a.terminalRows = Math.max(_.floor(i / r.height), 24);
});
};
a.$watch("selectedTab.terminal", function(a) {
<<<<<<< f56378c1e748449074be8738ae159f02ed953303
a ? (r.height && r.width ? $(window).on("resize.terminalsize", _.debounce(t, 100)) : f.warn("Unable to calculate the bounding box for a character.  Terminal will not be able to resize."), d(t, 0)) : $(window).off("resize.terminalsize");
=======
a ? (r.height && r.width ? $(window).on("resize.terminalsize", _.debounce(t, 100)) :f.warn("Unable to calculate the bounding box for a character.  Terminal will not be able to resize."), d(t, 0)) :$(window).off("resize.terminalsize");
>>>>>>> Create reusable edit-environment-variables component
}), a.onTerminalSelectChange = function(b) {
_.each(a.containerTerminals, function(a) {
a.isVisible = !1;
}), b.isVisible = !0, b.isUsed = !0, a.selectedTerminalContainer = b;
};
var u = function(a) {
var b = _.get(a, "state", {});
return _.head(_.keys(b));
}, v = function() {
var b = [];
_.each(a.pod.spec.containers, function(c) {
var d = _.find(a.pod.status.containerStatuses, {
<<<<<<< f56378c1e748449074be8738ae159f02ed953303
name: c.name
=======
name:c.name
>>>>>>> Create reusable edit-environment-variables component
}), e = u(d);
b.push({
containerName: c.name,
isVisible: !1,
isUsed: !1,
containerState: e
});
});
var c = _.head(b);
return c.isVisible = !0, c.isUsed = !0, a.selectedTerminalContainer = c, b;
}, w = function(b) {
a.noContainersYet && (a.noContainersYet = 0 === a.containersRunning(b.status.containerStatuses));
}, x = function(b) {
_.each(b, function(b) {
var c = _.find(a.pod.status.containerStatuses, {
<<<<<<< f56378c1e748449074be8738ae159f02ed953303
name: b.containerName
=======
name:b.containerName
>>>>>>> Create reusable edit-environment-variables component
}), d = u(c);
b.containerState = d;
});
}, y = b("annotation"), z = function(b, c) {
if (a.loaded = !0, a.pod = b, a.dcName = y(b, "deploymentConfig"), a.rcName = y(b, "deployment"), a.deploymentVersion = y(b, "deploymentVersion"), a.logCanRun = !_.includes([ "New", "Pending", "Unknown" ], b.status.phase), p(), delete a.controllerRef, !a.dcName) {
var d = k.getControllerReferences(b);
a.controllerRef = _.find(d, function(a) {
return "ReplicationController" === a.kind || "ReplicaSet" === a.kind || "Build" === a.kind;
});
}
"DELETED" === c && (a.alerts.deleted = {
type: "warning",
message: "This pod has been deleted."
});
};
m.get(c.project).then(_.spread(function(d, j) {
o = j, a.project = d, a.projectContext = j, g.get("pods", c.pod, j, {
<<<<<<< f56378c1e748449074be8738ae159f02ed953303
errorNotification: !1
=======
errorNotification:!1
>>>>>>> Create reusable edit-environment-variables component
}).then(function(b) {
z(b);
var d = {};
d[b.metadata.name] = b, a.logOptions.container = c.container || b.spec.containers[0].name, a.containerTerminals = v(), w(b), i.fetchReferencedImageStreamImages(d, a.imagesByDockerReference, a.imageStreamImageRefByDockerReference, o), n.push(g.watchObject("pods", c.pod, j, function(b, c) {
z(b, c), x(a.containerTerminals), w(b);
}));
}, function(c) {
a.loaded = !0, a.alerts.load = {
type: "error",
message: "The pod details could not be loaded.",
details: b("getErrorDetails")(c)
};
}), a.$watch("logOptions.container", p), n.push(g.watch("imagestreams", j, function(b) {
a.imageStreams = b.by("metadata.name"), i.buildDockerRefMapForImageStreams(a.imageStreams, a.imageStreamImageRefByDockerReference), i.fetchReferencedImageStreamImages(a.pods, a.imagesByDockerReference, a.imageStreamImageRefByDockerReference, j), f.log("imagestreams (subscribe)", a.imageStreams);
})), n.push(g.watch("builds", j, function(b) {
a.builds = b.by("metadata.name"), f.log("builds (subscribe)", a.builds);
}));
var k, m = function() {
var c = a.debugPod;
k && (g.unwatch(k), k = null), $(window).off("beforeunload.debugPod"), c && (g["delete"]("pods", c.metadata.name, j, {
<<<<<<< f56378c1e748449074be8738ae159f02ed953303
gracePeriodSeconds: 0
=======
gracePeriodSeconds:0
>>>>>>> Create reusable edit-environment-variables component
}).then(_.noop, function(d) {
a.alerts["debug-container-error"] = {
type: "error",
message: "Could not delete pod " + c.metadata.name,
details: b("getErrorDetails")(d)
};
}), a.debugPod = null);
}, q = function() {
$(".terminal:visible").focus();
};
a.hasFullscreen = h.hasFullscreen(!0), a.fullscreenTerminal = function() {
h.requestFullscreen("#container-terminal-wrapper"), setTimeout(q);
}, a.exitFullscreen = function() {
h.exitFullscreen();
}, a.debugTerminal = function(c) {
var d = l.generateDebugPod(a.pod, c);
return d ? void g.create("pods", null, d, j).then(function(b) {
var f = _.find(a.pod.spec.containers, {
name: c
});
a.debugPod = b, $(window).on("beforeunload.debugPod", function() {
return "Are you sure you want to leave with the debug terminal open? The debug pod will not be deleted unless you close the dialog.";
}), k = g.watchObject("pods", d.metadata.name, j, function(b) {
a.debugPod = b;
});
var h = e.open({
<<<<<<< f56378c1e748449074be8738ae159f02ed953303
animation: !0,
templateUrl: "views/modals/debug-terminal.html",
controller: "DebugTerminalModalController",
scope: a,
resolve: {
container: function() {
=======
animation:!0,
templateUrl:"views/modals/debug-terminal.html",
controller:"DebugTerminalModalController",
scope:a,
resolve:{
container:function() {
>>>>>>> Create reusable edit-environment-variables component
return f;
},
image: function() {
return _.get(a, [ "imagesByDockerReference", f.image ]);
}
},
backdrop: "static"
});
h.result.then(m);
}, function(d) {
a.alerts["debug-container-error"] = {
type: "error",
message: "Could not debug container " + c,
details: b("getErrorDetails")(d)
};
}) : void (a.alerts["debug-container-error"] = {
type: "error",
message: "Could not debug container " + c
});
}, a.containersRunning = function(a) {
var b = 0;
return a && a.forEach(function(a) {
a.state && a.state.running && b++;
}), b;
}, a.$on("$destroy", function() {
g.unwatchAll(n), m(), $(window).off("resize.terminalsize");
});
}));
} ]), angular.module("openshiftConsole").controller("OverviewController", [ "$scope", "$filter", "$q", "$routeParams", "AlertMessageService", "APIService", "AppsService", "BindingService", "BuildsService", "CatalogService", "Constants", "DataService", "DeploymentsService", "HPAService", "HTMLService", "ImageStreamResolver", "KeywordService", "LabelFilter", "Logger", "MetricsService", "Navigate", "OwnerReferencesService", "PodsService", "ProjectsService", "PromiseUtils", "ResourceAlertsService", "RoutesService", "ServiceInstancesService", "gettext", OverviewController ]), angular.module("openshiftConsole").controller("QuotaController", [ "$filter", "$routeParams", "$scope", "DataService", "ProjectsService", "Logger", "gettext", "gettextCatalog", function(a, b, c, d, e, f, g, h) {
c.projectName = b.project, c.limitRanges = {}, c.limitsByType = {}, c.labelSuggestions = {}, c.alerts = c.alerts || {}, c.quotaHelp = h.getString(g("Limits resource usage within this project.")), c.emptyMessageLimitRanges = g("Loading..."), c.limitRangeHelp = h.getString(g("Defines minimum and maximum constraints for runtime resources such as memory and CPU.")), c.renderOptions = c.renderOptions || {}, c.renderOptions.hideFilterWidget = !0;
var i = [], j = a("usageValue");
c.isAtLimit = function(a, b) {
var c = a.status.total || a.status, d = j(_.get(c, [ "hard", b ]));
if (!d) return !1;
var e = j(_.get(c, [ "used", b ]));
return !!e && e >= d;
};
var k = a("humanizeQuotaResource"), l = function(a, b) {
return "cpu" === a || "requests.cpu" === a ? "cpu" === b || "requests.cpu" === b ? 0 : -1 : "cpu" === b || "requests.cpu" === b ? 1 : "memory" === a || "requests.memory" === a ? "memory" === b || "requests.memory" === b ? 0 : -1 : "memory" === b || "requests.memory" === b ? 1 : "limits.cpu" === a ? "limits.cpu" === b ? 0 : -1 : "limits.cpu" === b ? 1 : "limits.memory" === a ? "limits.memory" === b ? 0 : -1 : "limits.memory" === b ? 1 : (a = k(a), b = k(b), a.localeCompare(b));
}, m = function(a) {
var b = {};
return _.each(a, function(a) {
var c = _.get(a, "spec.quota.hard") || _.get(a, "spec.hard"), d = _.keys(c).sort(l);
b[a.metadata.name] = d;
}), b;
};
e.get(b.project).then(_.spread(function(a, e) {
c.project = a, d.list("resourcequotas", e).then(function(a) {
c.quotas = _.sortBy(a.by("metadata.name"), "metadata.name"), c.orderedTypesByQuota = m(c.quotas), f.log("quotas", c.quotas);
}), d.list("appliedclusterresourcequotas", e).then(function(a) {
c.clusterQuotas = _.sortBy(a.by("metadata.name"), "metadata.name"), c.orderedTypesByClusterQuota = m(c.clusterQuotas), c.namespaceUsageByClusterQuota = {}, _.each(c.clusterQuotas, function(a) {
if (a.status) {
var d = _.find(a.status.namespaces, {
namespace: b.project
});
c.namespaceUsageByClusterQuota[a.metadata.name] = d.status;
}
}), f.log("cluster quotas", c.clusterQuotas);
}), d.list("limitranges", e).then(function(a) {
c.limitRanges = _.sortBy(a.by("metadata.name"), "metadata.name"), c.emptyMessageLimitRanges = g("There are no limit ranges set on this project."), angular.forEach(c.limitRanges, function(a) {
var b = a.metadata.name;
c.limitsByType[b] = {}, angular.forEach(a.spec.limits, function(a) {
var d = c.limitsByType[b][a.type] = {};
angular.forEach(a.max, function(a, b) {
d[b] = d[b] || {}, d[b].max = a;
}), angular.forEach(a.min, function(a, b) {
d[b] = d[b] || {}, d[b].min = a;
}), angular.forEach(a["default"], function(a, b) {
d[b] = d[b] || {}, d[b]["default"] = a;
}), angular.forEach(a.defaultRequest, function(a, b) {
d[b] = d[b] || {}, d[b].defaultRequest = a;
}), angular.forEach(a.maxLimitRequestRatio, function(a, b) {
d[b] = d[b] || {}, d[b].maxLimitRequestRatio = a;
});
});
}), f.log("limitRanges", c.limitRanges);
}), c.$on("$destroy", function() {
d.unwatchAll(i);
});
}));
} ]), angular.module("openshiftConsole").controller("MonitoringController", [ "$routeParams", "$location", "$scope", "$filter", "BuildsService", "DataService", "ImageStreamResolver", "KeywordService", "Logger", "MetricsService", "Navigate", "PodsService", "ProjectsService", "$rootScope", "gettext", function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
c.projectName = a.project, c.alerts = c.alerts || {}, c.renderOptions = c.renderOptions || {}, c.renderOptions.showEventsSidebar = !0, c.renderOptions.collapseEventsSidebar = "true" === localStorage.getItem("monitoring.eventsidebar.collapsed");
var p = d("isIE")(), q = 6e4, r = [];
c.kinds = [ {
kind: o("All")
}, {
kind: "Pods"
}, {
label: "Deployments",
kind: "ReplicationControllers"
}, {
kind: "Builds"
}, {
kind: "StatefulSets"
} ], c.kindSelector = {
selected: _.find(c.kinds, {
kind: a.kind
}) || _.head(c.kinds)
}, c.logOptions = {
pods: {},
replicationControllers: {},
builds: {},
statefulSets: {}
}, c.logCanRun = {
pods: {},
replicationControllers: {},
builds: {},
statefulSets: {}
}, c.logEmpty = {
pods: {},
replicationControllers: {},
builds: {},
statefulSets: {}
}, c.expanded = {
pods: {},
replicationControllers: {},
replicaSets: {},
builds: {},
statefulSets: {}
};
var s = d("isNil");
c.filters = {
hideOlderResources: s(a.hideOlderResources) || "true" === a.hideOlderResources,
text: ""
};
var t, u, v, w;
j.isAvailable().then(function(a) {
c.metricsAvailable = a;
});
var x = d("orderObjectsByDate"), y = [ "metadata.name" ], z = [], A = function() {
c.filteredPods = h.filterForKeywords(w, y, z), c.filteredReplicationControllers = h.filterForKeywords(u, y, z), c.filteredReplicaSets = h.filterForKeywords(v, y, z), c.filteredBuilds = h.filterForKeywords(t, y, z), c.filteredStatefulSets = h.filterForKeywords(_.values(c.statefulSets), y, z);
}, B = function(a) {
c.logOptions.pods[a.metadata.name] = {
container: a.spec.containers[0].name
}, c.logCanRun.pods[a.metadata.name] = !_.includes([ "New", "Pending", "Unknown" ], a.status.phase);
}, C = function(a) {
c.logOptions.replicationControllers[a.metadata.name] = {};
var b = d("annotation")(a, "deploymentVersion");
b && (c.logOptions.replicationControllers[a.metadata.name].version = b), c.logCanRun.replicationControllers[a.metadata.name] = !_.includes([ "New", "Pending" ], d("deploymentStatus")(a));
}, D = function(a) {
c.logOptions.builds[a.metadata.name] = {}, c.logCanRun.builds[a.metadata.name] = !_.includes([ "New", "Pending", "Error" ], a.status.phase);
}, E = function() {
c.filteredStatefulSets = h.filterForKeywords(_.values(c.statefulSets), y, z);
}, F = function() {
w = _.filter(c.pods, function(a) {
return !c.filters.hideOlderResources || "Succeeded" !== a.status.phase && "Failed" !== a.status.phase;
}), c.filteredPods = h.filterForKeywords(w, y, z);
}, G = d("isIncompleteBuild"), H = d("buildConfigForBuild"), I = d("isRecentBuild"), J = function() {
moment().subtract(5, "m");
t = _.filter(c.builds, function(a) {
if (!c.filters.hideOlderResources) return !0;
if (G(a)) return !0;
var b = H(a);
return b ? c.latestBuildByConfig[b].metadata.name === a.metadata.name : I(a);
}), c.filteredBuilds = h.filterForKeywords(t, y, z);
}, K = d("deploymentStatus"), L = d("deploymentIsInProgress"), M = function() {
u = _.filter(c.replicationControllers, function(a) {
return !c.filters.hideOlderResources || (L(a) || "Active" === K(a));
}), c.filteredReplicationControllers = h.filterForKeywords(u, y, z);
}, N = function() {
v = _.filter(c.replicaSets, function(a) {
return !c.filters.hideOlderResources || _.get(a, "status.replicas");
}), c.filteredReplicaSets = h.filterForKeywords(v, y, z);
};
c.toggleItem = function(a, b, e) {
var f = $(a.target);
if (!f || !f.closest("a", b).length) {
var g, h;
switch (e.kind) {
case "Build":
g = !c.expanded.builds[e.metadata.name], c.expanded.builds[e.metadata.name] = g, h = g ? "event.resource.highlight" : "event.resource.clear-highlight", n.$emit(h, e);
var i = _.get(c.podsByName, d("annotation")(e, "buildPod"));
i && n.$emit(h, i);
break;

case "ReplicationController":
g = !c.expanded.replicationControllers[e.metadata.name], c.expanded.replicationControllers[e.metadata.name] = g, h = g ? "event.resource.highlight" : "event.resource.clear-highlight", n.$emit(h, e);
var j = d("annotation")(e, "deployerPod");
j && n.$emit(h, {
kind: "Pod",
metadata: {
name: j
}
}), _.each(c.podsByOwnerUID[e.metadata.uid], function(a) {
n.$emit(h, a);
});
break;

case "ReplicaSet":
g = !c.expanded.replicaSets[e.metadata.name], c.expanded.replicaSets[e.metadata.name] = g, h = g ? "event.resource.highlight" : "event.resource.clear-highlight", n.$emit(h, e), _.each(c.podsByOwnerUID[e.metadata.uid], function(a) {
n.$emit(h, a);
});
break;

case "Pod":
g = !c.expanded.pods[e.metadata.name], c.expanded.pods[e.metadata.name] = g, h = g ? "event.resource.highlight" : "event.resource.clear-highlight", n.$emit(h, e);
break;

case "StatefulSet":
g = !c.expanded.statefulSets[e.metadata.name], c.expanded.statefulSets[e.metadata.name] = g, h = g ? "event.resource.highlight" : "event.resource.clear-highlight", n.$emit(h, e);
}
}
}, c.viewPodsForSet = function(a) {
var b = _.get(c, [ "podsByOwnerUID", a.metadata.uid ], []);
_.isEmpty(b) || k.toPodsForDeployment(a, b);
}, m.get(a.project).then(_.spread(function(a, d) {
c.project = a, c.projectContext = d, r.push(f.watch("pods", d, function(a) {
c.podsByName = a.by("metadata.name"), c.pods = x(c.podsByName, !0), c.podsByOwnerUID = l.groupByOwnerUID(c.pods), c.podsLoaded = !0, _.each(c.pods, B), F(), i.log("pods", c.pods);
})), r.push(f.watch({
resource: "statefulsets",
group: "apps",
version: "v1beta1"
}, d, function(a) {
c.statefulSets = a.by("metadata.name"), c.statefulSetsLoaded = !0, E(), i.log("statefulSets", c.statefulSets);
}, {
poll: p,
pollInterval: q
})), r.push(f.watch("replicationcontrollers", d, function(a) {
c.replicationControllers = x(a.by("metadata.name"), !0), c.replicationControllersLoaded = !0, _.each(c.replicationControllers, C), M(), i.log("replicationcontrollers", c.replicationControllers);
})), r.push(f.watch("builds", d, function(a) {
c.builds = x(a.by("metadata.name"), !0), c.latestBuildByConfig = e.latestBuildByConfig(c.builds), c.buildsLoaded = !0, _.each(c.builds, D), J(), i.log("builds", c.builds);
})), r.push(f.watch({
group: "extensions",
resource: "replicasets"
}, d, function(a) {
c.replicaSets = x(a.by("metadata.name"), !0), c.replicaSetsLoaded = !0, N(), i.log("replicasets", c.replicaSets);
}, {
poll: p,
pollInterval: q
})), c.$on("$destroy", function() {
f.unwatchAll(r);
}), c.$watch("filters.hideOlderResources", function() {
F(), J(), M(), N(), E();
var a = b.search();
a.hideOlderResources = c.filters.hideOlderResources ? "true" : "false", b.replace().search(a);
}), c.$watch("kindSelector.selected.kind", function() {
var a = b.search();
a.kind = c.kindSelector.selected.kind, b.replace().search(a);
}), c.$watch("filters.text", _.debounce(function() {
c.filterKeywords = z = h.generateKeywords(c.filters.text), c.$apply(A);
}, 50, {
maxWait: 250
})), c.$watch("renderOptions.collapseEventsSidebar", function(a, b) {
a !== b && (localStorage.setItem("monitoring.eventsidebar.collapsed", c.renderOptions.collapseEventsSidebar ? "true" : "false"), n.$emit("metrics.charts.resize"));
});
}));
} ]), angular.module("openshiftConsole").controller("MembershipController", [ "$filter", "$location", "$routeParams", "$scope", "$timeout", "$uibModal", "AuthService", "AuthorizationService", "DataService", "ProjectsService", "MembershipService", "NotificationsService", "RoleBindingsService", "RolesService", "gettext", "gettextCatalog", function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
var q, r = c.project, s = a("humanizeKind"), t = a("annotation"), u = a("canI"), v = [], w = {
notice: {
yourLastRole: _.template(p.getString(o('Removing the role "<%= roleName %>" may completely remove your ability to see this project.')))
},
warning: {
serviceAccount: _.template(p.getString(o("Removing a system role granted to a service account may cause unexpected behavior.")))
},
remove: {
areYouSure: {
html: {
subject: _.template(p.getString(o("Are you sure you want to remove <strong><%- roleName %></strong> from the <%- kindName %> <strong><%- subjectName %></strong>?"))),
self: _.template(p.getString(o("Are you sure you want to remove <strong><%- roleName %></strong> from <strong><%- subjectName %></strong> (you)?")))
}
},
success: _.template('The role "<%= roleName %>" was removed from "<%= subjectName %>".'),
error: _.template('The role "<%= roleName %>" was not removed from "<%= subjectName %>".')
},
update: {
subject: {
success: _.template('The role "<%= roleName %>" was granted to "<%= subjectName %>".'),
error: _.template('The role "<%= roleName %>" could not be granted to "<%= subjectName %>".'),
exists: _.template('The role "<%= roleName %>" has already been granted to "<%= subjectName %>".')
}
},
errorReason: _.template('Reason: "<%= httpErr %>"')
}, x = function(a, b, c) {
l.addNotification({
type: a,
message: b,
details: c
});
}, y = function() {
d.disableAddForm = !1, d.newBinding.name = "", d.newBinding.namespace = r, d.newBinding.newRole = null;
}, z = function(a) {
i.list("serviceaccounts", a).then(function(a) {
var b = _.keys(a.by("metadata.name")).sort();
angular.extend(d, {
serviceAccounts: b,
refreshServiceAccounts: function(a) {
a && !_.includes(d.serviceAccounts, a) ? d.serviceAccounts = [ a ].concat(b) : d.serviceAccounts = b;
}
});
});
}, A = function(a) {
i.list("rolebindings", q, null, {
errorNotification: !1
}).then(function(a) {
angular.extend(d, {
canShowRoles: !0,
roleBindings: a.by("metadata.name"),
subjectKindsForUI: k.mapRolebindingsForUI(a.by("metadata.name"), v)
}), y();
}, function() {
a && (d.roleBindings[a.metadata.name] = a, d.subjectKindsForUI = k.mapRolebindingsForUI(d.roleBindings, v)), y();
});
}, B = function(b, c) {
d.disableAddForm = !0, m.create(b, c, r, q).then(function() {
A(), x("success", w.update.subject.success({
roleName: b.metadata.name,
subjectName: c.name
}));
}, function(d) {
y(), A(), x("error", w.update.subject.error({
roleName: b.metadata.name,
subjectName: c.name
}), w.errorReason({
httpErr: a("getErrorDetails")(d)
}));
});
}, C = function(b, c, e) {
d.disableAddForm = !0, m.addSubject(b, c, e, q).then(function() {
A(), x("success", w.update.subject.success({
roleName: b.roleRef.name,
subjectName: c.name
}));
}, function(d) {
y(), A(), x("error", w.update.subject.error({
roleName: b.roleRef.name,
subjectName: c.name
}), w.errorReason({
httpErr: a("getErrorDetails")(d)
}));
});
}, D = {};
c.tab && (D[c.tab] = !0);
var E = k.getSubjectKinds();
angular.extend(d, {
selectedTab: D,
projectName: r,
forms: {},
subjectKinds: E,
newBinding: {
role: "",
kind: c.tab || "User",
name: ""
},
toggleEditMode: function() {
y(), d.mode.edit = !d.mode.edit;
},
mode: {
edit: !1
},
selectTab: function(a) {
d.newBinding.kind = a, d.newBinding.name = "";
}
}), angular.extend(d, {
excludeExistingRoles: function(a) {
return function(b) {
return !_.some(a, {
kind: b.kind,
metadata: {
name: b.metadata.name
}
});
};
},
roleHelp: function(a) {
if (a) {
var b = "", c = _.get(a, "metadata.namespace"), d = _.get(a, "metadata.name"), e = c ? c + " / " + d + ": " : "";
return a ? e + (t(a, "description") || b) : b;
}
}
});
var F = function(a, b, c, e) {
var f = {
alerts: {},
detailsMarkup: w.remove.areYouSure.html.subject({
roleName: c,
kindName: p.getString(s(b)),
subjectName: a
}),
okButtonText: p.getString(o("Remove")),
okButtonClass: "btn-danger",
cancelButtonText: p.getString(o("Cancel"))
};
return _.isEqual(a, e) && (f.detailsMarkup = w.remove.areYouSure.html.self({
roleName: c,
subjectName: a
}), k.isLastRole(d.user.metadata.name, d.roleBindings) && (f.alerts.currentUserLabelRole = {
type: "error",
message: w.notice.yourLastRole({
roleName: c
})
})), _.isEqual(b, "ServiceAccount") && _.startsWith(c, "system:") && (f.alerts.editingServiceAccountRole = {
type: "error",
message: w.warning.serviceAccount()
}), f;
};
g.withUser().then(function(a) {
d.user = a;
}), j.list().then(function(a) {
var b = _.keys(a.by("metadata.name")).sort();
angular.extend(d, {
projects: b,
selectProject: function(a) {
d.newBinding.name = "", z({
namespace: a
});
},
refreshProjects: function(a) {
a && !_.includes(d.projects, a) ? d.projects = [ a ].concat(b) : d.projects = b;
}
});
}), j.get(c.project).then(_.spread(function(c, e) {
q = e, A(), z(q), angular.extend(d, {
project: c,
subjectKinds: E,
canUpdateRolebindings: u("rolebindings", "update", r),
confirmRemove: function(c, e, g, i) {
var j = null, l = F(c, e, g, d.user.metadata.name);
_.isEqual(c, d.user.metadata.name) && k.isLastRole(d.user.metadata.name, d.roleBindings) && (j = !0), f.open({
animation: !0,
templateUrl: "views/modals/confirm.html",
controller: "ConfirmModalController",
resolve: {
modalConfig: function() {
return l;
}
}
}).result.then(function() {
m.removeSubject(c, g, i, d.roleBindings, q).then(function(a) {
j ? b.url("./") : (h.getProjectRules(r, !0).then(function() {
A(a[0]);
var b = u("rolebindings", "update", r);
angular.extend(d, {
canUpdateRolebindings: b,
mode: {
edit: !!d.mode.edit && b
}
});
}), x("success", w.remove.success({
roleName: g,
subjectName: c
})));
}, function(b) {
x("error", w.remove.error({
roleName: g,
subjectName: c
}), w.errorReason({
httpErr: a("getErrorDetails")(b)
}));
});
});
},
addRoleTo: function(a, b, c, e) {
var f = {
name: a,
kind: b
};
"ServiceAccount" === b && (f.namespace = e);
var g = _.find(d.roleBindings, {
roleRef: {
name: c.metadata.name
}
});
g && _.some(g.subjects, f) ? x("error", w.update.subject.exists({
roleName: c.metadata.name,
subjectName: a
})) : g ? C(g, f, e) : B(c, f, e);
}
}), n.listAllRoles(q, {
errorNotification: !1
}).then(function(a) {
v = k.mapRolesForUI(_.head(a).by("metadata.name"), _.last(a).by("metadata.name"));
var b = k.sortRoles(v), c = k.filterRoles(v), e = function(a, b) {
return _.some(b, {
metadata: {
name: a
}
});
};
A(), angular.extend(d, {
toggle: {
roles: !1
},
filteredRoles: c,
toggleRoles: function() {
d.toggle.roles = !d.toggle.roles, d.toggle.roles ? d.filteredRoles = b : (d.filteredRoles = c, e(d.newBinding.role, c) || (d.newBinding.role = null));
}
});
});
}));
} ]), angular.module("openshiftConsole").controller("BuildsController", [ "$filter", "$location", "$routeParams", "$scope", "APIService", "BuildsService", "DataService", "LabelFilter", "Logger", "ProjectsService", function(a, b, c, d, e, f, g, h, i, j) {
d.projectName = c.project, d.builds = {}, d.unfilteredBuildConfigs = {}, d.buildConfigs = void 0, d.labelSuggestions = {}, d.latestByConfig = {}, d.clearFilter = function() {
h.clear();
};
var k = a("buildConfigForBuild"), l = e.getPreferredVersion("builds"), m = e.getPreferredVersion("buildconfigs"), n = [];
j.get(c.project).then(_.spread(function(b, c) {
function e(a) {
var b = h.getLabelSelector();
if (b.isEmpty()) return !0;
var c = k(a) || "";
return c && d.unfilteredBuildConfigs[c] ? !!d.buildConfigs[c] : b.matches(a);
}
<<<<<<< c3402a2575d9b360c752c51c219d95fe163ccb12
function j(a) {
var b = k(a);
if (b) return !1;
var c = h.getLabelSelector();
return !!c.isEmpty() || c.matches(a);
}
function o() {
d.latestByConfig = f.latestBuildByConfig(d.builds, e), d.buildsNoConfig = _.pickBy(d.builds, j), angular.forEach(d.buildConfigs, function(a, b) {
d.latestByConfig[b] = d.latestByConfig[b] || null;
});
}
function p() {
var a = _.omitBy(d.latestByConfig, _.isNull);
d.filterWithZeroResults = !h.getLabelSelector().isEmpty() && _.isEmpty(d.buildConfigs) && _.isEmpty(a);
}
d.project = b;
var q = a("isJenkinsPipelineStrategy");
n.push(g.watch(l, c, function(a) {
d.buildsLoaded = !0, d.builds = _.omitBy(a.by("metadata.name"), q), o(), h.addLabelSuggestionsFromResources(d.builds, d.labelSuggestions), i.log("builds (subscribe)", d.builds);
})), n.push(g.watch(m, c, function(a) {
d.unfilteredBuildConfigs = _.omitBy(a.by("metadata.name"), q), h.addLabelSuggestionsFromResources(d.unfilteredBuildConfigs, d.labelSuggestions), h.setLabelSuggestions(d.labelSuggestions), d.buildConfigs = h.getLabelSelector().select(d.unfilteredBuildConfigs), o(), p(), i.log("buildconfigs (subscribe)", d.buildConfigs);
})), h.onActiveFiltersChanged(function(a) {
d.$evalAsync(function() {
d.buildConfigs = a.select(d.unfilteredBuildConfigs), o(), p();
=======
function l(a) {
var b = j(a);
if (b) return !1;
var c = e.getLabelSelector();
return !!c.isEmpty() || c.matches(a);
}
function m() {
b.latestByConfig = h.latestBuildByConfig(b.builds, i), b.buildsNoConfig = _.pick(b.builds, l), angular.forEach(b.buildConfigs, function(a, c) {
b.latestByConfig[c] = b.latestByConfig[c] || null;
});
}
function n() {
var a = _.omit(b.latestByConfig, _.isNull);
!e.getLabelSelector().isEmpty() && _.isEmpty(b.buildConfigs) && _.isEmpty(a) ? b.alerts.builds = {
type:"warning",
details:"The active filters are hiding all builds."
} :delete b.alerts.builds;
}
b.project = a;
var o = d("isJenkinsPipelineStrategy");
k.push(c.watch("builds", g, function(a) {
b.builds = _.omit(a.by("metadata.name"), o), b.emptyMessage = "No builds to show", m(), e.addLabelSuggestionsFromResources(b.builds, b.labelSuggestions), f.log("builds (subscribe)", b.builds);
})), k.push(c.watch("buildconfigs", g, function(a) {
b.unfilteredBuildConfigs = _.omit(a.by("metadata.name"), o), e.addLabelSuggestionsFromResources(b.unfilteredBuildConfigs, b.labelSuggestions), e.setLabelSuggestions(b.labelSuggestions), b.buildConfigs = e.getLabelSelector().select(b.unfilteredBuildConfigs), m(), n(), f.log("buildconfigs (subscribe)", b.buildConfigs);
})), e.onActiveFiltersChanged(function(a) {
b.$apply(function() {
b.buildConfigs = a.select(b.unfilteredBuildConfigs), m(), n();
>>>>>>> Fix missing builds with no build config
});
}), d.$on("$destroy", function() {
g.unwatchAll(n);
});
}));
} ]), angular.module("openshiftConsole").controller("PipelinesController", [ "$filter", "$routeParams", "$scope", "Constants", "Navigate", "BuildsService", "DataService", "Logger", "ProjectsService", function(a, b, c, d, e, f, g, h, i) {
c.projectName = b.project, c.alerts = c.alerts || {}, c.buildConfigs = {};
var j = [];
i.get(b.project).then(_.spread(function(b, h) {
c.project = b;
var i = {}, k = a("buildConfigForBuild"), l = a("isIncompleteBuild"), m = a("isJenkinsPipelineStrategy"), n = a("isNewerResource"), o = function(a, b) {
if (!l(b)) {
c.statsByConfig[a] || (c.statsByConfig[a] = {
count: 0,
totalDuration: 0
});
var d = c.statsByConfig[a];
d.count++, d.totalDuration += f.getDuration(b), d.avgDuration = _.round(d.totalDuration / d.count);
}
}, p = function() {
var a = {}, b = {};
c.statsByConfig = {}, _.each(i, function(d) {
if (m(d)) {
var e = k(d) || "";
c.buildConfigs[e] || (c.buildConfigs[e] = null), l(d) ? _.set(a, [ e, d.metadata.name ], d) : n(d, b[e]) && (b[e] = d), o(e, d);
}
}), _.each(b, function(b, c) {
_.set(a, [ c, b.metadata.name ], b);
}), c.interestingBuildsByConfig = a;
};
j.push(g.watch("builds", h, function(a) {
c.buildsLoaded = !0, i = a.by("metadata.name"), p();
}));
var q = !1;
j.push(g.watch("buildconfigs", h, function(a) {
if (c.buildConfigsLoaded = !0, c.buildConfigs = _.pickBy(a.by("metadata.name"), m), _.isEmpty(c.buildConfigs) && !q && (q = !0, d.SAMPLE_PIPELINE_TEMPLATE)) {
var b = d.SAMPLE_PIPELINE_TEMPLATE.name, f = d.SAMPLE_PIPELINE_TEMPLATE.namespace;
g.get("templates", b, {
namespace: f
}, {
errorNotification: !1
}).then(function(a) {
c.createSampleURL = e.createFromTemplateURL(a, c.projectName);
});
}
p();
})), c.startBuild = f.startBuild, c.$on("$destroy", function() {
g.unwatchAll(j);
});
}));
} ]), angular.module("openshiftConsole").controller("BuildConfigController", [ "$scope", "$filter", "$routeParams", "APIService", "BuildsService", "ImagesService", "DataService", "LabelFilter", "ModalsService", "NotificationsService", "ProjectsService", "keyValueEditorUtils", "gettext", function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
a.projectName = c.project, a.buildConfigName = c.buildconfig, a.buildConfig = null, a.labelSuggestions = {}, a.alerts = {}, a.breadcrumbs = [], a.forms = {}, a.expand = {
imageEnv: !1
}, c.isPipeline ? a.breadcrumbs.push({
title: "Pipelines",
link: "project/" + c.project + "/browse/pipelines"
}) : a.breadcrumbs.push({
title: "Builds",
link: "project/" + c.project + "/browse/builds"
}), a.breadcrumbs.push({
title: c.buildconfig
}), a.buildConfigsVersion = d.getPreferredVersion("buildconfigs"), a.buildsVersion = d.getPreferredVersion("builds"), a.buildConfigsInstantiateVersion = d.getPreferredVersion("buildconfigs/instantiate"), a.emptyMessage = m("Loading..."), a.aceLoaded = function(a) {
var b = a.getSession();
b.setOption("tabSize", 2), b.setOption("useSoftTabs", !0), a.$blockScrolling = 1 / 0;
};
var n = b("buildConfigForBuild"), o = b("buildStrategy"), p = [], q = function(b) {
a.updatedBuildConfig = angular.copy(b), a.envVars = o(a.updatedBuildConfig).env || [];
};
a.compareTriggers = function(a, b) {
return _.isNumber(a.value) ? -1 : "ConfigChange" === a.value ? -1 : "ConfigChange" === b.value ? 1 : "ImageChange" === a.value ? -1 : "ImageChange" === b.value ? 1 : a.value.localeCompare(b.value);
}, a.saveEnvVars = function() {
j.hideNotification("save-bc-env-error"), a.envVars = _.filter(a.envVars, "name"), o(a.updatedBuildConfig).env = l.compactEntries(angular.copy(a.envVars)), g.update(a.buildConfigsVersion, c.buildconfig, a.updatedBuildConfig, a.projectContext).then(function() {
j.addNotification({
type: "success",
message: "Environment variables for build config " + a.buildConfigName + " were successfully updated."
}), a.forms.bcEnvVars.$setPristine();
}, function(c) {
j.addNotification({
id: "save-bc-env-error",
type: "error",
message: "An error occurred updating environment variables for build config " + a.buildConfigName + ".",
details: b("getErrorDetails")(c)
});
});
}, a.clearEnvVarUpdates = function() {
q(a.buildConfig), a.forms.bcEnvVars.$setPristine();
};
var r, s = function(c, h) {
a.loaded = !0, a.buildConfig = c, a.buildConfigPaused = e.isPaused(a.buildConfig), a.buildConfig.spec.source.images && (a.imageSources = a.buildConfig.spec.source.images, a.imageSourcesPaths = [], a.imageSources.forEach(function(c) {
a.imageSourcesPaths.push(b("destinationSourcePair")(c.paths));
}));
var i = _.get(o(c), "from", {}), j = i.kind + "/" + i.name + "/" + (i.namespace || a.projectName);
r !== j && (_.includes([ "ImageStreamTag", "ImageStreamImage" ], i.kind) ? (r = j, g.get(d.kindToResource(i.kind), i.name, {
namespace: i.namespace || a.projectName
}, {
errorNotification: !1
}).then(function(b) {
a.BCEnvVarsFromImage = f.getEnvironment(b);
}, function() {
a.BCEnvVarsFromImage = [];
})) : a.BCEnvVarsFromImage = []), q(c), "DELETED" === h && (a.alerts.deleted = {
type: "warning",
message: "This build configuration has been deleted."
}, a.buildConfigDeleted = !0), !a.forms.bcEnvVars || a.forms.bcEnvVars.$pristine ? q(c) : a.alerts.background_update = {
type: "warning",
message: "This build configuration has been updated in the background. Saving your changes may create a conflict or cause loss of data.",
links: [ {
label: "Reload Environment Variables",
onClick: function() {
return a.clearEnvVarUpdates(), !0;
}
} ]
}, a.paused = e.isPaused(a.buildConfig);
};
k.get(c.project).then(_.spread(function(d, f) {
function j() {
h.getLabelSelector().isEmpty() || !$.isEmptyObject(a.builds) || $.isEmptyObject(a.unfilteredBuilds) ? delete a.alerts.builds : a.alerts.builds = {
type: "warning",
details: "The active filters are hiding all builds."
};
}
a.project = d, a.projectContext = f, g.get(a.buildConfigsVersion, c.buildconfig, f, {
errorNotification: !1
}).then(function(b) {
s(b), p.push(g.watchObject(a.buildConfigsVersion, c.buildconfig, f, s));
}, function(c) {
a.loaded = !0, a.alerts.load = {
type: "error",
message: 404 === c.status ? "This build configuration can not be found, it may have been deleted." : "The build configuration details could not be loaded.",
details: 404 === c.status ? "Any remaining build history for this build will be shown." : b("getErrorDetails")(c)
};
}), p.push(g.watch(a.buildsVersion, f, function(b, d, f) {
if (a.emptyMessage = m("No builds to show"), d) {
var g = n(f);
if (g === c.buildconfig) {
var i = f.metadata.name;
switch (d) {
case "ADDED":
case "MODIFIED":
a.unfilteredBuilds[i] = f;
break;

case "DELETED":
delete a.unfilteredBuilds[i];
}
}
} else a.unfilteredBuilds = e.validatedBuildsForBuildConfig(c.buildconfig, b.by("metadata.name"));
a.builds = h.getLabelSelector().select(a.unfilteredBuilds), j(), h.addLabelSuggestionsFromResources(a.unfilteredBuilds, a.labelSuggestions), h.setLabelSuggestions(a.labelSuggestions), a.orderedBuilds = e.sortBuilds(a.builds, !0), a.latestBuild = _.head(a.orderedBuilds);
}, {
http: {
params: {
labelSelector: b("labelName")("buildConfig") + "=" + _.truncate(a.buildConfigName, {
length: 63,
omission: ""
})
}
}
})), h.onActiveFiltersChanged(function(b) {
a.$apply(function() {
a.builds = b.select(a.unfilteredBuilds), a.orderedBuilds = e.sortBuilds(a.builds, !0), a.latestBuild = _.head(a.orderedBuilds), j();
});
}), a.startBuild = function() {
e.startBuild(a.buildConfig);
}, a.showJenkinsfileExamples = function() {
i.showJenkinsfileExamples();
}, a.$on("$destroy", function() {
g.unwatchAll(p);
});
}));
} ]), angular.module("openshiftConsole").controller("BuildController", [ "$scope", "$filter", "$routeParams", "APIService", "BuildsService", "DataService", "ModalsService", "Navigate", "ProjectsService", function(a, b, c, d, e, f, g, h, i) {
a.projectName = c.project, a.build = null, a.buildConfig = null, a.buildConfigName = c.buildconfig, a.builds = {}, a.alerts = {}, a.showSecret = !1, a.renderOptions = {
hideFilterWidget: !0
}, a.breadcrumbs = [], c.isPipeline ? (a.breadcrumbs.push({
title: "Pipelines",
link: "project/" + c.project + "/browse/pipelines"
}), c.buildconfig && a.breadcrumbs.push({
title: c.buildconfig,
link: "project/" + c.project + "/browse/pipelines/" + c.buildconfig
})) : (a.breadcrumbs.push({
title: "Builds",
link: "project/" + c.project + "/browse/builds"
}), c.buildconfig && a.breadcrumbs.push({
title: c.buildconfig,
link: "project/" + c.project + "/browse/builds/" + c.buildconfig
})), a.breadcrumbs.push({
title: c.build
}), a.buildsVersion = d.getPreferredVersion("builds"), a.buildConfigsVersion = d.getPreferredVersion("buildconfigs"), a.podsVersion = d.getPreferredVersion("pods");
var j, k = b("annotation"), l = [], m = function(b) {
a.logCanRun = !_.includes([ "New", "Pending", "Error" ], b.status.phase);
}, n = function() {
a.buildConfig ? a.canBuild = e.canBuild(a.buildConfig) : a.canBuild = !1;
};
i.get(c.project).then(_.spread(function(d, h) {
a.project = d, a.projectContext = h, a.logOptions = {};
var i = function() {
j ? a.eventObjects = [ a.build, j ] : a.eventObjects = [ a.build ];
}, o = function(b, c) {
a.loaded = !0, a.build = b, m(b), i();
var d = k(b, "buildNumber");
d && a.breadcrumbs[2] && (a.breadcrumbs[2].title = "#" + d), "DELETED" === c && (a.alerts.deleted = {
type: "warning",
message: "This build has been deleted."
});
var e;
j || (e = k(b, "buildPod"), e && f.get(a.podsVersion, e, h, {
errorNotification: !1
}).then(function(a) {
j = a, i();
}));
}, p = function(c) {
a.loaded = !0, a.alerts.load = {
type: "error",
message: "The build details could not be loaded.",
details: b("getErrorDetails")(c)
};
}, q = function(b, c) {
"DELETED" === c && (a.alerts.deleted = {
type: "warning",
message: "Build configuration " + a.buildConfigName + " has been deleted."
}, a.buildConfigDeleted = !0), a.buildConfig = b, a.buildConfigPaused = e.isPaused(a.buildConfig), n();
};
f.get(a.buildsVersion, c.build, h, {
errorNotification: !1
}).then(function(b) {
o(b), l.push(f.watchObject(a.buildsVersion, c.build, h, o)), l.push(f.watchObject(a.buildConfigsVersion, c.buildconfig, h, q));
}, p), a.toggleSecret = function() {
a.showSecret = !0;
}, a.cancelBuild = function() {
e.cancelBuild(a.build, a.buildConfigName);
}, a.cloneBuild = function() {
a.build && a.canBuild && e.cloneBuild(a.build, a.buildConfigName);
}, a.showJenkinsfileExamples = function() {
g.showJenkinsfileExamples();
}, a.$on("$destroy", function() {
f.unwatchAll(l);
});
}));
} ]), angular.module("openshiftConsole").controller("ImageController", [ "$filter", "$scope", "$routeParams", "APIService", "DataService", "ImageStreamsService", "imageLayers", "ProjectsService", function(a, b, c, d, e, f, g, h) {
function i(a, d) {
var e = f.tagsByName(a);
b.imageStream = a, b.tagsByName = e, b.tagName = c.tag;
var g = e[c.tag];
return g ? (delete b.alerts.load, void m(g, d)) : void (b.alerts.load = {
type: "error",
message: "The image tag was not found in the stream."
});
}
b.projectName = c.project, b.imageStream = null, b.image = null, b.layers = null, b.tagsByName = {}, b.alerts = {}, b.renderOptions = b.renderOptions || {}, b.renderOptions.hideFilterWidget = !0, b.breadcrumbs = [ {
title: "Image Streams",
link: "project/" + c.project + "/browse/images"
}, {
title: c.imagestream,
link: "project/" + c.project + "/browse/images/" + c.imagestream
}, {
title: ":" + c.tag
} ];
var j = d.getPreferredVersion("imagestreamtags"), k = d.getPreferredVersion("imagestreams"), l = [], m = _.debounce(function(d, f) {
var h = c.imagestream + ":" + c.tag;
e.get(j, h, f).then(function(a) {
b.loaded = !0, b.image = a.image, b.layers = g(b.image);
}, function(c) {
b.loaded = !0, b.alerts.load = {
type: "error",
message: "The image details could not be loaded.",
details: a("getErrorDetails")(c)
};
});
}, 200), n = function(a, c, d) {
i(a, c), "DELETED" === d && (b.alerts.deleted = {
type: "warning",
message: "This image stream has been deleted."
});
};
h.get(c.project).then(_.spread(function(d, f) {
b.project = d, e.get(k, c.imagestream, f, {
errorNotification: !1
}).then(function(a) {
n(a, f), l.push(e.watchObject(k, c.imagestream, f, function(a, b) {
n(a, f, b);
}));
}, function(c) {
b.loaded = !0, b.alerts.load = {
type: "error",
message: "The image stream details could not be loaded.",
details: a("getErrorDetails")(c)
};
}), b.$on("$destroy", function() {
e.unwatchAll(l);
});
}));
} ]), angular.module("openshiftConsole").controller("ImagesController", [ "$filter", "$routeParams", "$scope", "APIService", "DataService", "LabelFilter", "Logger", "ProjectsService", function(a, b, c, d, e, f, g, h) {
c.projectName = b.project, c.imageStreams = {}, c.unfilteredImageStreams = {}, c.missingStatusTagsByImageStream = {}, c.builds = {}, c.labelSuggestions = {}, c.clearFilter = function() {
f.clear();
};
var i = d.getPreferredVersion("imagestreams"), j = [];
h.get(b.project).then(_.spread(function(a, b) {
function d() {
angular.forEach(c.unfilteredImageStreams, function(a, b) {
var d = c.missingStatusTagsByImageStream[b] = {};
if (a.spec && a.spec.tags) {
var e = {};
a.status && a.status.tags && angular.forEach(a.status.tags, function(a) {
e[a.tag] = !0;
}), angular.forEach(a.spec.tags, function(a) {
e[a.name] || (d[a.name] = a);
});
}
});
}
function h() {
c.filterWithZeroResults = !f.getLabelSelector().isEmpty() && _.isEmpty(c.imageStreams) && !_.isEmpty(c.unfilteredImageStreams);
}
c.project = a, j.push(e.watch(i, b, function(a) {
c.imageStreamsLoaded = !0, c.unfilteredImageStreams = a.by("metadata.name"), f.addLabelSuggestionsFromResources(c.unfilteredImageStreams, c.labelSuggestions), f.setLabelSuggestions(c.labelSuggestions), c.imageStreams = f.getLabelSelector().select(c.unfilteredImageStreams), d(), h(), g.log("image streams (subscribe)", c.imageStreams);
})), f.onActiveFiltersChanged(function(a) {
c.$evalAsync(function() {
c.imageStreams = a.select(c.unfilteredImageStreams), h();
});
}), c.$on("$destroy", function() {
e.unwatchAll(j);
});
}));
} ]), angular.module("openshiftConsole").controller("ImageStreamController", [ "$filter", "$routeParams", "$scope", "APIService", "DataService", "ImageStreamsService", "Navigate", "ProjectsService", "gettext", function(a, b, c, d, e, f, g, h, i) {
c.projectName = b.project, c.imageStream = null, c.tags = [], c.tagShowOlder = {}, c.alerts = {}, c.renderOptions = c.renderOptions || {}, c.renderOptions.hideFilterWidget = !0, c.breadcrumbs = [ {
title: "Image Streams",
link: "project/" + b.project + "/browse/images"
}, {
title: b.imagestream
} ], c.emptyMessage = i("Loading..."), c.imageStreamsVersion = d.getPreferredVersion("imagestreams");
var j = [];
h.get(b.project).then(_.spread(function(d, g) {
c.project = d, e.get(c.imageStreamsVersion, b.imagestream, g, {
errorNotification: !1
}).then(function(a) {
c.loaded = !0, c.imageStream = a, c.emptyMessage = i("No tags to show"), j.push(e.watchObject(c.imageStreamsVersion, b.imagestream, g, function(a, b) {
"DELETED" === b && (c.alerts.deleted = {
type: "warning",
message: "This image stream has been deleted."
}), c.imageStream = a, c.tags = _.toArray(f.tagsByName(c.imageStream));
}));
}, function(b) {
c.loaded = !0, c.alerts.load = {
type: "error",
message: "The image stream details could not be loaded.",
details: a("getErrorDetails")(b)
};
}), c.$on("$destroy", function() {
e.unwatchAll(j);
});
})), c.imagestreamPath = function(a, b) {
if (!b.status) return "";
var c = g.resourceURL(a.metadata.name, "ImageStream", a.metadata.namespace);
return b && (c += "/" + b.name), c;
};
} ]), angular.module("openshiftConsole").controller("DeploymentsController", [ "$scope", "$filter", "$routeParams", "APIService", "DataService", "DeploymentsService", "LabelFilter", "Logger", "OwnerReferencesService", "ProjectsService", "gettext", function(a, b, c, d, e, f, g, h, i, j, k) {
function l() {
var b = _.isEmpty(a.unfilteredDeploymentConfigs) && _.isEmpty(a.unfilteredReplicationControllers) && _.isEmpty(a.unfilteredDeployments) && _.isEmpty(a.unfilteredReplicaSets), c = !g.getLabelSelector().isEmpty(), d = _.isEmpty(a.deploymentConfigs) && _.isEmpty(a.replicationControllersByDC[""]) && _.isEmpty(a.deployments) && _.isEmpty(a.replicaSets);
a.showEmptyState = b, a.filterWithZeroResults = c && d && !b;
}
a.projectName = c.project, a.replicationControllers = {}, a.unfilteredDeploymentConfigs = {}, a.unfilteredDeployments = {}, a.replicationControllersByDC = {}, a.labelSuggestions = {}, a.emptyMessage = k("Loading..."), a.expandedDeploymentConfigRow = {}, a.unfilteredReplicaSets = {}, a.unfilteredReplicationControllers = {}, a.showEmptyState = !0, a.clearFilter = function() {
g.clear();
};
var m, n, o = b("annotation"), p = d.getPreferredVersion("deployments"), q = d.getPreferredVersion("deploymentconfigs"), r = d.getPreferredVersion("replicationcontrollers"), s = d.getPreferredVersion("replicasets"), t = function() {
m && n && (a.replicaSetsByDeploymentUID = i.groupByControllerUID(m), a.unfilteredReplicaSets = _.get(a, [ "replicaSetsByDeploymentUID", "" ], {}), g.addLabelSuggestionsFromResources(a.unfilteredReplicaSets, a.labelSuggestions), g.setLabelSuggestions(a.labelSuggestions), a.replicaSets = g.getLabelSelector().select(a.unfilteredReplicaSets), a.latestReplicaSetByDeploymentUID = {}, _.each(a.replicaSetsByDeploymentUID, function(b, c) {
c && (a.latestReplicaSetByDeploymentUID[c] = f.getActiveReplicaSet(b, n[c]));
}), l());
}, u = [];
j.get(c.project).then(_.spread(function(c, d) {
a.project = c, u.push(e.watch(r, d, function(c, d, e) {
a.replicationControllers = c.by("metadata.name");
var i, j;
if (e && (i = o(e, "deploymentConfig"), j = e.metadata.name), a.replicationControllersByDC = f.associateDeploymentsToDeploymentConfig(a.replicationControllers, a.deploymentConfigs, !0), a.replicationControllersByDC[""] && (a.unfilteredReplicationControllers = a.replicationControllersByDC[""], g.addLabelSuggestionsFromResources(a.unfilteredReplicationControllers, a.labelSuggestions), g.setLabelSuggestions(a.labelSuggestions), a.replicationControllersByDC[""] = g.getLabelSelector().select(a.replicationControllersByDC[""])), l(), d) {
if ("ADDED" === d || "MODIFIED" === d && [ "New", "Pending", "Running" ].indexOf(b("deploymentStatus")(e)) > -1) a.deploymentConfigDeploymentsInProgress[i] = a.deploymentConfigDeploymentsInProgress[i] || {}, a.deploymentConfigDeploymentsInProgress[i][j] = e; else if ("MODIFIED" === d) {
var k = b("deploymentStatus")(e);
"Complete" !== k && "Failed" !== k || delete a.deploymentConfigDeploymentsInProgress[i][j];
}
} else a.deploymentConfigDeploymentsInProgress = f.associateRunningDeploymentToDeploymentConfig(a.replicationControllersByDC);
e ? "DELETED" !== d && (e.causes = b("deploymentCauses")(e)) : angular.forEach(a.replicationControllers, function(a) {
a.causes = b("deploymentCauses")(a);
<<<<<<< 61b7ccebc1be9196354cef218d1e7a812de7a0c6
}), h.log("replicationControllers (subscribe)", a.replicationControllers);
})), u.push(e.watch(s, d, function(b) {
m = b.by("metadata.name"), t(), h.log("replicasets (subscribe)", a.replicaSets);
})), u.push(e.watch(q, d, function(b) {
a.deploymentConfigsLoaded = !0, a.unfilteredDeploymentConfigs = b.by("metadata.name"), g.addLabelSuggestionsFromResources(a.unfilteredDeploymentConfigs, a.labelSuggestions), g.setLabelSuggestions(a.labelSuggestions), a.deploymentConfigs = g.getLabelSelector().select(a.unfilteredDeploymentConfigs), a.emptyMessage = k("No deployment configurations to show"), a.replicationControllersByDC = f.associateDeploymentsToDeploymentConfig(a.replicationControllers, a.deploymentConfigs, !0), a.replicationControllersByDC[""] && (a.unfilteredReplicationControllers = a.replicationControllersByDC[""], a.replicationControllersByDC[""] = g.getLabelSelector().select(a.replicationControllersByDC[""])), l(), h.log("deploymentconfigs (subscribe)", a.deploymentConfigs);
})), u.push(e.watch(p, d, function(b) {
n = a.unfilteredDeployments = b.by("metadata.uid"), g.addLabelSuggestionsFromResources(a.unfilteredDeployments, a.labelSuggestions), g.setLabelSuggestions(a.labelSuggestions), a.deployments = g.getLabelSelector().select(a.unfilteredDeployments), t(), h.log("deployments (subscribe)", a.unfilteredDeployments);
})), a.showDeploymentConfigTable = function() {
var b = _.size(a.replicationControllersByDC);
return b > 1 || 1 === b && !a.replicationControllersByDC[""];
}, g.onActiveFiltersChanged(function(b) {
a.$evalAsync(function() {
a.deploymentConfigs = b.select(a.unfilteredDeploymentConfigs), a.replicationControllersByDC = f.associateDeploymentsToDeploymentConfig(a.replicationControllers, a.deploymentConfigs, !0), a.replicationControllersByDC[""] && (a.unfilteredReplicationControllers = a.replicationControllersByDC[""], a.replicationControllersByDC[""] = g.getLabelSelector().select(a.replicationControllersByDC[""])), a.deployments = b.select(a.unfilteredDeployments), a.replicaSets = b.select(a.unfilteredReplicaSets), l();
=======
}), g.log("replicationControllers (subscribe)", a.replicationControllers);
})), n.push(d.watch({
group:"extensions",
resource:"replicasets"
}, h, function(b) {
j = b.by("metadata.name"), m(), g.log("replicasets (subscribe)", a.replicaSets);
})), n.push(d.watch("deploymentconfigs", h, function(b) {
a.unfilteredDeploymentConfigs = b.by("metadata.name"), f.addLabelSuggestionsFromResources(a.unfilteredDeploymentConfigs, a.labelSuggestions), f.setLabelSuggestions(a.labelSuggestions), a.deploymentConfigs = f.getLabelSelector().select(a.unfilteredDeploymentConfigs), a.emptyMessage = "No deployment configurations to show", a.replicationControllersByDC = e.associateDeploymentsToDeploymentConfig(a.replicationControllers, a.deploymentConfigs, !0), a.replicationControllersByDC[""] && (a.unfilteredReplicationControllers = a.replicationControllersByDC[""], a.replicationControllersByDC[""] = f.getLabelSelector().select(a.replicationControllersByDC[""])), i(), g.log("deploymentconfigs (subscribe)", a.deploymentConfigs);
})), n.push(d.watch({
group:"apps",
resource:"deployments"
}, h, function(b) {
k = a.unfilteredDeployments = b.by("metadata.uid"), f.addLabelSuggestionsFromResources(a.unfilteredDeployments, a.labelSuggestions), f.setLabelSuggestions(a.labelSuggestions), a.deployments = f.getLabelSelector().select(a.unfilteredDeployments), m(), g.log("deployments (subscribe)", a.unfilteredDeployments);
})), a.showEmptyMessage = function() {
return 0 === b("hashSize")(a.replicationControllersByDC) || !(1 !== b("hashSize")(a.replicationControllersByDC) || !a.replicationControllersByDC[""]);
}, f.onActiveFiltersChanged(function(b) {
a.$apply(function() {
a.deploymentConfigs = b.select(a.unfilteredDeploymentConfigs), a.replicationControllersByDC = e.associateDeploymentsToDeploymentConfig(a.replicationControllers, a.deploymentConfigs, !0), a.replicationControllersByDC[""] && (a.unfilteredReplicationControllers = a.replicationControllersByDC[""], a.replicationControllersByDC[""] = f.getLabelSelector().select(a.replicationControllersByDC[""])), a.deployments = b.select(a.unfilteredDeployments), a.replicaSets = b.select(a.unfilteredReplicaSets), i();
>>>>>>> Use `apps` API group for deployments
});
}), a.$on("$destroy", function() {
e.unwatchAll(u);
});
}));
<<<<<<< f56378c1e748449074be8738ae159f02ed953303
<<<<<<< 61b7ccebc1be9196354cef218d1e7a812de7a0c6
} ]), angular.module("openshiftConsole").controller("DeploymentController", [ "$scope", "$filter", "$routeParams", "APIService", "DataService", "DeploymentsService", "HPAService", "ImageStreamResolver", "LabelFilter", "Logger", "ModalsService", "Navigate", "OwnerReferencesService", "ProjectsService", "StorageService", "gettext", "gettextCatalog", function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
var r = {};
a.projectName = c.project, a.name = c.deployment, a.replicaSetsForDeployment = {}, a.unfilteredReplicaSetsForDeployment = {}, a.labelSuggestions = {}, a.emptyMessage = "Loading...", a.forms = {}, a.alerts = {}, a.imagesByDockerReference = {}, a.breadcrumbs = [ {
title: p("Deployments"),
link: "project/" + c.project + "/browse/deployments"
}, {
title: c.deployment
} ];
var s = d.getPreferredVersion("builds"), t = d.getPreferredVersion("replicasets"), u = d.getPreferredVersion("limitranges"), v = d.getPreferredVersion("imagestreams");
a.deploymentsVersion = d.getPreferredVersion("deployments"), a.eventsVersion = d.getPreferredVersion("events"), a.horizontalPodAutoscalersVersion = d.getPreferredVersion("horizontalpodautoscalers"), a.healthCheckURL = l.healthCheckURL(c.project, "Deployment", c.deployment, a.deploymentsVersion.group);
var w = [];
n.get(c.project).then(_.spread(function(d, l) {
function n() {
i.getLabelSelector().isEmpty() || !_.isEmpty(a.replicaSetsForDeployment) || _.isEmpty(a.unfilteredReplicaSetsForDeployment) ? delete a.alerts["filter-hiding-all"] : a.alerts["filter-hiding-all"] = {
type: "warning",
details: "The active filters are hiding all rollout history."
=======
} ]), angular.module("openshiftConsole").controller("DeploymentController", [ "$scope", "$filter", "$routeParams", "DataService", "DeploymentsService", "EnvironmentService", "HPAService", "ImageStreamResolver", "ModalsService", "Navigate", "OwnerReferencesService", "Logger", "ProjectsService", "StorageService", function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
var o = {};
=======
} ]), angular.module("openshiftConsole").controller("DeploymentController", [ "$scope", "$filter", "$routeParams", "DataService", "DeploymentsService", "HPAService", "ImageStreamResolver", "ModalsService", "Navigate", "OwnerReferencesService", "Logger", "ProjectsService", "StorageService", function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
var n = {};
>>>>>>> Create reusable edit-environment-variables component
a.projectName = c.project, a.name = c.deployment, a.forms = {}, a.alerts = {}, a.imagesByDockerReference = {}, a.breadcrumbs = [ {
title:"Deployments",
link:"project/" + c.project + "/browse/deployments"
}, {
title:c.deployment
<<<<<<< f56378c1e748449074be8738ae159f02ed953303
} ], a.healthCheckURL = j.healthCheckURL(c.project, "Deployment", c.deployment, "apps");
var p = !1, q = function(b, c) {
if (!p) {
if (!a.forms.deploymentEnvVars || a.forms.deploymentEnvVars.$pristine) return void (a.updatedDeployment = f.copyAndNormalize(b));
if (f.isEnvironmentEqual(b, c)) return void (a.updatedDeployment = f.mergeEdits(a.updatedDeployment, b));
p = !0, a.alerts["env-conflict"] = {
type:"warning",
message:"The environment variables for the deployment have been updated in the background. Saving your changes may create a conflict or cause loss of data.",
links:[ {
label:"Reload Environment Variables",
onClick:function() {
return a.clearEnvVarUpdates(), !0;
}
} ]
>>>>>>> Use `apps` API group for deployments
};
}
a.project = d, a.projectContext = l;
var x = {}, y = function() {
g.getHPAWarnings(a.deployment, a.autoscalers, x, d).then(function(b) {
=======
} ], a.healthCheckURL = i.healthCheckURL(c.project, "Deployment", c.deployment, "apps");
var o = [];
l.get(c.project).then(_.spread(function(i, l) {
a.project = i, a.projectContext = l;
var p = {}, q = function() {
f.getHPAWarnings(a.deployment, a.autoscalers, p, i).then(function(b) {
>>>>>>> Create reusable edit-environment-variables component
a.hpaWarnings = b;
});
};
<<<<<<< 61b7ccebc1be9196354cef218d1e7a812de7a0c6
e.get(a.deploymentsVersion, c.deployment, l, {
errorNotification: !1
}).then(function(b) {
a.loaded = !0, a.deployment = b, y(), w.push(e.watchObject(a.deploymentsVersion, c.deployment, l, function(b, c) {
=======
d.get({
group:"apps",
resource:"deployments"
}, c.deployment, l, {
errorNotification:!1
}).then(function(b) {
a.loaded = !0, a.deployment = b, q(), o.push(d.watchObject({
group:"apps",
resource:"deployments"
<<<<<<< f56378c1e748449074be8738ae159f02ed953303
}, c.deployment, m, function(b, c) {
>>>>>>> Use `apps` API group for deployments
"DELETED" === c && (a.alerts.deleted = {
type: "warning",
message: "This deployment has been deleted."
}), a.deployment = b, a.updatingPausedState = !1, y(), h.fetchReferencedImageStreamImages([ b.spec.template ], a.imagesByDockerReference, r, l);
})), w.push(e.watch(t, l, function(c) {
a.emptyMessage = "No deployments to show";
var d = c.by("metadata.name");
d = m.filterForController(d, b), a.inProgressDeployment = _.chain(d).filter("status.replicas").length > 1, a.unfilteredReplicaSetsForDeployment = f.sortByRevision(d), a.replicaSetsForDeployment = i.getLabelSelector().select(a.unfilteredReplicaSetsForDeployment), n(), i.addLabelSuggestionsFromResources(a.unfilteredReplicaSetsForDeployment, a.labelSuggestions), i.setLabelSuggestions(a.labelSuggestions);
=======
}, c.deployment, l, function(b, c) {
"DELETED" === c && (a.alerts.deleted = {
type:"warning",
message:"This deployment has been deleted."
}), a.deployment = b, a.updatingPausedState = !1, q(), g.fetchReferencedImageStreamImages([ b.spec.template ], a.imagesByDockerReference, n, l);
})), o.push(d.watch({
group:"extensions",
resource:"replicasets"
}, l, function(c) {
var d = c.by("metadata.name");
d = j.filterForController(d, b), a.inProgressDeployment = _.chain(d).filter("status.replicas").size() > 1, a.replicaSetsForDeployment = e.sortByRevision(d);
>>>>>>> Create reusable edit-environment-variables component
}));
}, function(c) {
a.loaded = !0, a.alerts.load = {
type: "error",
message: 404 === c.status ? "This deployment can not be found, it may have been deleted." : "The deployment details could not be loaded.",
details: b("getErrorDetails")(c)
};
<<<<<<< f56378c1e748449074be8738ae159f02ed953303
}), e.list(u, l).then(function(a) {
x = a.by("metadata.name"), y();
}), w.push(e.watch(v, l, function(b) {
var c = b.by("metadata.name");
h.buildDockerRefMapForImageStreams(c, r), a.deployment && h.fetchReferencedImageStreamImages([ a.deployment.spec.template ], a.imagesByDockerReference, r, l), j.log("imagestreams (subscribe)", a.imageStreams);
})), w.push(e.watch(a.horizontalPodAutoscalersVersion, l, function(b) {
a.autoscalers = g.filterHPA(b.by("metadata.name"), "Deployment", c.deployment), y();
})), w.push(e.watch(s, l, function(b) {
a.builds = b.by("metadata.name"), j.log("builds (subscribe)", a.builds);
})), i.onActiveFiltersChanged(function(b) {
a.$evalAsync(function() {
a.replicaSetsForDeployment = b.select(a.unfilteredReplicaSetsForDeployment), n();
});
}), a.scale = function(c) {
=======
}), d.list("limitranges", l).then(function(a) {
p = a.by("metadata.name"), q();
}), o.push(d.watch("imagestreams", l, function(b) {
var c = b.by("metadata.name");
g.buildDockerRefMapForImageStreams(c, n), a.deployment && g.fetchReferencedImageStreamImages([ a.deployment.spec.template ], a.imagesByDockerReference, n, l), k.log("imagestreams (subscribe)", a.imageStreams);
})), o.push(d.watch({
group:"autoscaling",
resource:"horizontalpodautoscalers",
version:"v1"
}, l, function(b) {
a.autoscalers = f.filterHPA(b.by("metadata.name"), "Deployment", c.deployment), q();
})), o.push(d.watch("builds", l, function(b) {
a.builds = b.by("metadata.name"), k.log("builds (subscribe)", a.builds);
})), a.scale = function(c) {
>>>>>>> Create reusable edit-environment-variables component
var d = function(c) {
a.alerts = a.alerts || {}, a.alerts.scale = {
type: "error",
message: "An error occurred scaling the deployment.",
details: b("getErrorDetails")(c)
};
};
f.scale(a.deployment, c).then(_.noop, d);
}, a.setPaused = function(c) {
<<<<<<< f56378c1e748449074be8738ae159f02ed953303
a.updatingPausedState = !0, f.setPaused(a.deployment, c, l).then(_.noop, function(d) {
=======
a.updatingPausedState = !0, e.setPaused(a.deployment, c, l).then(_.noop, function(d) {
>>>>>>> Create reusable edit-environment-variables component
a.updatingPausedState = !1, a.alerts = a.alerts || {}, a.alerts.scale = {
type: "error",
message: q.getString(p("An error occurred")) + " " + (c ? q.getString(p("pausing")) : q.getString(p("resuming"))) + " " + q.getString(p("the deployment.")),
details: b("getErrorDetails")(d)
};
});
}, a.removeVolume = function(b) {
var c;
<<<<<<< f56378c1e748449074be8738ae159f02ed953303
c = _.get(a, "deployment.spec.paused") ? q.getString(p("This will remove the volume from the deployment.")) : q.getString(p("This will remove the volume from the deployment and start a new rollout.")), b.persistentVolumeClaim ? c += " " + q.getString(p("It will not delete the persistent volume claim.")) : b.secret ? c += " " + q.getString(p("It will not delete the secret.")) : b.configMap && (c += " " + q.getString(p("It will not delete the config map.")));
var d = k.confirm({
message: q.getString(p("Remove volume")) + " " + b.name + "?",
details: c,
okButtonText: q.getString(p("Remove")),
okButtonClass: "btn-danger",
cancelButtonText: q.getString(p("Cancel"))
}), e = function() {
o.removeVolume(a.deployment, b, l);
};
d.then(e);
}, a.$on("$destroy", function() {
e.unwatchAll(w);
});
}));
} ]), angular.module("openshiftConsole").controller("DeploymentConfigController", [ "$scope", "$filter", "$routeParams", "APIService", "BreadcrumbsService", "DataService", "DeploymentsService", "HPAService", "ImageStreamResolver", "ModalsService", "Navigate", "NotificationsService", "Logger", "ProjectsService", "StorageService", "LabelFilter", "labelNameFilter", "gettext", "gettextCatalog", function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s) {
var t = {};
a.projectName = c.project, a.deploymentConfigName = c.deploymentconfig, a.deploymentConfig = null, a.deployments = {}, a.unfilteredDeployments = {}, a.imagesByDockerReference = {}, a.builds = {}, a.labelSuggestions = {}, a.forms = {}, a.alerts = {}, a.breadcrumbs = e.getBreadcrumbs({
name: c.deploymentconfig,
kind: "DeploymentConfig",
namespace: c.project
}), a.emptyMessage = r("Loading..."), a.deploymentConfigsInstantiateVersion = d.getPreferredVersion("deploymentconfigs/instantiate"), a.deploymentConfigsVersion = d.getPreferredVersion("deploymentconfigs"), a.eventsVersion = d.getPreferredVersion("events"), a.horizontalPodAutoscalersVersion = d.getPreferredVersion("horizontalpodautoscalers");
var u = d.getPreferredVersion("builds"), v = d.getPreferredVersion("imagestreams"), w = d.getPreferredVersion("limitranges"), x = d.getPreferredVersion("replicationcontrollers");
a.healthCheckURL = k.healthCheckURL(c.project, "DeploymentConfig", c.deploymentconfig, a.deploymentConfigsVersion.group);
var y = b("mostRecent"), z = b("orderObjectsByDate"), A = [];
n.get(c.project).then(_.spread(function(d, e) {
function k() {
p.getLabelSelector().isEmpty() || !$.isEmptyObject(a.deployments) || $.isEmptyObject(a.unfilteredDeployments) ? delete a.alerts.deployments : a.alerts.deployments = {
type: "warning",
details: "The active filters are hiding all deployments."
};
}
a.project = d, a.projectContext = e;
var l = {}, n = function() {
h.getHPAWarnings(a.deploymentConfig, a.autoscalers, l, d).then(function(b) {
a.hpaWarnings = b;
});
};
f.get(a.deploymentConfigsVersion, c.deploymentconfig, e, {
errorNotification: !1
}).then(function(d) {
a.loaded = !0, a.deploymentConfig = d, a.strategyParams = b("deploymentStrategyParams")(d), n(), A.push(f.watchObject(a.deploymentConfigsVersion, c.deploymentconfig, e, function(b, c) {
"DELETED" === c && (a.alerts.deleted = {
type: "warning",
message: "This deployment configuration has been deleted."
}), a.deploymentConfig = b, a.updatingPausedState = !1, n(), i.fetchReferencedImageStreamImages([ b.spec.template ], a.imagesByDockerReference, t, e);
=======
c = _.get(a, "deployment.spec.paused") ? "This will remove the volume from the deployment." :"This will remove the volume from the deployment and start a new rollout.", b.persistentVolumeClaim ? c += " It will not delete the persistent volume claim." :b.secret ? c += " It will not delete the secret." :b.configMap && (c += " It will not delete the config map.");
var d = h.confirm({
message:"Remove volume " + b.name + "?",
details:c,
okButtonText:"Remove",
okButtonClass:"btn-danger",
cancelButtonText:"Cancel"
}), e = function() {
m.removeVolume(a.deployment, b, l);
};
d.then(e);
}, a.$on("$destroy", function() {
d.unwatchAll(o);
});
}));
} ]), angular.module("openshiftConsole").controller("DeploymentConfigController", [ "$scope", "$filter", "$routeParams", "BreadcrumbsService", "DataService", "DeploymentsService", "HPAService", "ImageStreamResolver", "ModalsService", "Navigate", "NotificationsService", "Logger", "ProjectsService", "StorageService", "LabelFilter", "labelNameFilter", function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
var q = {};
a.projectName = c.project, a.deploymentConfigName = c.deploymentconfig, a.deploymentConfig = null, a.deployments = {}, a.unfilteredDeployments = {}, a.imagesByDockerReference = {}, a.builds = {}, a.labelSuggestions = {}, a.forms = {}, a.alerts = {}, a.breadcrumbs = d.getBreadcrumbs({
name:c.deploymentconfig,
kind:"DeploymentConfig",
namespace:c.project
}), a.emptyMessage = "Loading...", a.healthCheckURL = j.healthCheckURL(c.project, "DeploymentConfig", c.deploymentconfig);
var r = b("mostRecent"), s = b("orderObjectsByDate"), t = [];
m.get(c.project).then(_.spread(function(d, j) {
function k() {
o.getLabelSelector().isEmpty() || !$.isEmptyObject(a.deployments) || $.isEmptyObject(a.unfilteredDeployments) ? delete a.alerts.deployments :a.alerts.deployments = {
type:"warning",
details:"The active filters are hiding all deployments."
};
}
a.project = d, a.projectContext = j;
var m = {}, u = function() {
g.getHPAWarnings(a.deploymentConfig, a.autoscalers, m, d).then(function(b) {
a.hpaWarnings = b;
});
};
e.get("deploymentconfigs", c.deploymentconfig, j, {
errorNotification:!1
}).then(function(d) {
a.loaded = !0, a.deploymentConfig = d, a.strategyParams = b("deploymentStrategyParams")(d), u(), t.push(e.watchObject("deploymentconfigs", c.deploymentconfig, j, function(b, c) {
"DELETED" === c && (a.alerts.deleted = {
type:"warning",
message:"This deployment configuration has been deleted."
}), a.deploymentConfig = b, a.updatingPausedState = !1, u(), h.fetchReferencedImageStreamImages([ b.spec.template ], a.imagesByDockerReference, q, j);
>>>>>>> Create reusable edit-environment-variables component
}));
}, function(c) {
a.loaded = !0, a.alerts.load = {
type: "error",
message: 404 === c.status ? "This deployment configuration can not be found, it may have been deleted." : "The deployment configuration details could not be loaded.",
details: 404 === c.status ? "Any remaining deployment history for this deployment will be shown." : b("getErrorDetails")(c)
};
<<<<<<< f56378c1e748449074be8738ae159f02ed953303
}), A.push(f.watch(x, e, function(d, e, f) {
=======
}), t.push(e.watch("replicationcontrollers", j, function(d, e, g) {
>>>>>>> Create reusable edit-environment-variables component
var h = c.deploymentconfig;
if (a.emptyMessage = r("No deployments to show"), e) {
if (g.deploymentBelongsToConfig(f, c.deploymentconfig)) {
var i = f.metadata.name;
switch (e) {
case "ADDED":
case "MODIFIED":
a.unfilteredDeployments[i] = f, b("deploymentIsInProgress")(f) ? (a.deploymentConfigDeploymentsInProgress[h] = a.deploymentConfigDeploymentsInProgress[h] || {}, a.deploymentConfigDeploymentsInProgress[h][i] = f) : a.deploymentConfigDeploymentsInProgress[h] && delete a.deploymentConfigDeploymentsInProgress[h][i], f.causes = b("deploymentCauses")(f);
break;

case "DELETED":
delete a.unfilteredDeployments[i], a.deploymentConfigDeploymentsInProgress[h] && delete a.deploymentConfigDeploymentsInProgress[h][i];
}
}
} else {
var j = g.associateDeploymentsToDeploymentConfig(d.by("metadata.name"));
a.unfilteredDeployments = j[c.deploymentconfig] || {}, angular.forEach(a.unfilteredDeployments, function(a) {
a.causes = b("deploymentCauses")(a);
}), a.deploymentConfigDeploymentsInProgress = g.associateRunningDeploymentToDeploymentConfig(j);
}
<<<<<<< f56378c1e748449074be8738ae159f02ed953303
a.deployments = p.getLabelSelector().select(a.unfilteredDeployments), a.orderedDeployments = z(a.deployments, !0), a.deploymentInProgress = !!_.size(a.deploymentConfigDeploymentsInProgress[h]), a.mostRecent = y(a.unfilteredDeployments), k(), p.addLabelSuggestionsFromResources(a.unfilteredDeployments, a.labelSuggestions), p.setLabelSuggestions(a.labelSuggestions);
}, {
http: {
params: {
labelSelector: q("deploymentConfig") + "=" + a.deploymentConfigName
}
}
})), f.list(w, e).then(function(a) {
l = a.by("metadata.name"), n();
}), A.push(f.watch(v, e, function(b) {
var c = b.by("metadata.name");
i.buildDockerRefMapForImageStreams(c, t), a.deploymentConfig && i.fetchReferencedImageStreamImages([ a.deploymentConfig.spec.template ], a.imagesByDockerReference, t, e), m.log("imagestreams (subscribe)", a.imageStreams);
})), A.push(f.watch(u, e, function(b) {
a.builds = b.by("metadata.name"), m.log("builds (subscribe)", a.builds);
})), A.push(f.watch(a.horizontalPodAutoscalersVersion, e, function(b) {
a.autoscalers = h.filterHPA(b.by("metadata.name"), "DeploymentConfig", c.deploymentconfig), n();
})), p.onActiveFiltersChanged(function(b) {
a.$apply(function() {
a.deployments = b.select(a.unfilteredDeployments), a.orderedDeployments = z(a.deployments, !0), k();
=======
a.deployments = o.getLabelSelector().select(a.unfilteredDeployments), a.orderedDeployments = s(a.deployments, !0), a.deploymentInProgress = !!_.size(a.deploymentConfigDeploymentsInProgress[h]), a.mostRecent = r(a.unfilteredDeployments), k(), o.addLabelSuggestionsFromResources(a.unfilteredDeployments, a.labelSuggestions), o.setLabelSuggestions(a.labelSuggestions);
}, {
http:{
params:{
labelSelector:p("deploymentConfig") + "=" + a.deploymentConfigName
}
}
})), e.list("limitranges", j).then(function(a) {
m = a.by("metadata.name"), u();
}), t.push(e.watch("imagestreams", j, function(b) {
var c = b.by("metadata.name");
h.buildDockerRefMapForImageStreams(c, q), a.deploymentConfig && h.fetchReferencedImageStreamImages([ a.deploymentConfig.spec.template ], a.imagesByDockerReference, q, j), l.log("imagestreams (subscribe)", a.imageStreams);
})), t.push(e.watch("builds", j, function(b) {
a.builds = b.by("metadata.name"), l.log("builds (subscribe)", a.builds);
})), t.push(e.watch({
group:"autoscaling",
resource:"horizontalpodautoscalers",
version:"v1"
}, j, function(b) {
a.autoscalers = g.filterHPA(b.by("metadata.name"), "DeploymentConfig", c.deploymentconfig), u();
})), o.onActiveFiltersChanged(function(b) {
a.$apply(function() {
a.deployments = b.select(a.unfilteredDeployments), a.orderedDeployments = s(a.deployments, !0), k();
>>>>>>> Create reusable edit-environment-variables component
});
}), a.canDeploy = function() {
return !!a.deploymentConfig && (!a.deploymentConfig.metadata.deletionTimestamp && (!a.deploymentInProgress && !a.deploymentConfig.spec.paused));
}, a.startLatestDeployment = function() {
<<<<<<< f56378c1e748449074be8738ae159f02ed953303
a.canDeploy() && g.startLatestDeployment(a.deploymentConfig, e);
=======
a.canDeploy() && f.startLatestDeployment(a.deploymentConfig, j);
>>>>>>> Create reusable edit-environment-variables component
}, a.scale = function(c) {
var d = function(c) {
a.alerts["scale-error"] = {
type: "error",
message: "An error occurred scaling the deployment config.",
details: b("getErrorDetails")(c)
};
};
g.scale(a.deploymentConfig, c).then(_.noop, d);
}, a.setPaused = function(c) {
<<<<<<< f56378c1e748449074be8738ae159f02ed953303
a.updatingPausedState = !0, g.setPaused(a.deploymentConfig, c, e).then(_.noop, function(d) {
=======
a.updatingPausedState = !0, f.setPaused(a.deploymentConfig, c, j).then(_.noop, function(d) {
>>>>>>> Create reusable edit-environment-variables component
a.updatingPausedState = !1, a.alerts["pause-error"] = {
type: "error",
message: "An error occurred " + (c ? "pausing" : "resuming") + " the deployment config.",
details: b("getErrorDetails")(d)
};
});
};
<<<<<<< f56378c1e748449074be8738ae159f02ed953303
var B = function() {
=======
var v = function() {
>>>>>>> Create reusable edit-environment-variables component
if (_.get(a, "deploymentConfig.spec.paused")) return !1;
var b = _.get(a, "deploymentConfig.spec.triggers", []);
return _.some(b, {
type: "ConfigChange"
});
};
a.removeVolume = function(b) {
var c;
<<<<<<< f56378c1e748449074be8738ae159f02ed953303
c = B() ? s.getString(r("This will remove the volume from the deployment config and trigger a new deployment.")) : s.getString(r("This will remove the volume from the deployment config.")), b.persistentVolumeClaim ? c += " " + s.getString(r("It will not delete the persistent volume claim.")) : b.secret ? c += " " + s.getString(r("It will not delete the secret.")) : b.configMap && (c += " " + s.getString(r("It will not delete the config map.")));
var d = j.confirm({
message: s.getString(r("Remove volume")) + " " + b.name + "?",
details: c,
okButtonText: s.getString(r("Remove")),
okButtonClass: "btn-danger",
cancelButtonText: s.getString(r("Cancel"))
}), f = function() {
o.removeVolume(a.deploymentConfig, b, e);
=======
c = v() ? "This will remove the volume from the deployment config and trigger a new deployment." :"This will remove the volume from the deployment config.", b.persistentVolumeClaim ? c += " It will not delete the persistent volume claim." :b.secret ? c += " It will not delete the secret." :b.configMap && (c += " It will not delete the config map.");
var d = i.confirm({
message:"Remove volume " + b.name + "?",
details:c,
okButtonText:"Remove",
okButtonClass:"btn-danger",
cancelButtonText:"Cancel"
}), e = function() {
n.removeVolume(a.deploymentConfig, b, j);
>>>>>>> Create reusable edit-environment-variables component
};
d.then(f);
}, a.$on("$destroy", function() {
<<<<<<< f56378c1e748449074be8738ae159f02ed953303
f.unwatchAll(A);
=======
e.unwatchAll(t);
>>>>>>> Create reusable edit-environment-variables component
});
}));
} ]), angular.module("openshiftConsole").controller("ReplicaSetController", [ "$scope", "$filter", "$routeParams", "AuthorizationService", "BreadcrumbsService", "DataService", "DeploymentsService", "HPAService", "ImageStreamResolver", "Logger", "MetricsService", "ModalsService", "Navigate", "OwnerReferencesService", "PodsService", "ProjectsService", "StorageService", "keyValueEditorUtils", "kind", function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s) {
var t = !1, u = b("annotation"), v = b("humanizeKind")(s), w = b("hasDeployment");
switch (s) {
case "ReplicaSet":
a.resource = {
<<<<<<< f56378c1e748449074be8738ae159f02ed953303
group: "extensions",
resource: "replicasets"
=======
group:"extensions",
resource:"replicasets"
>>>>>>> Create reusable edit-environment-variables component
}, a.healthCheckURL = m.healthCheckURL(c.project, "ReplicaSet", c.replicaSet, "extensions");
break;

case "ReplicationController":
a.resource = "replicationcontrollers", a.healthCheckURL = m.healthCheckURL(c.project, "ReplicationController", c.replicaSet);
}
var x = {};
a.projectName = c.project, a.kind = s, a.replicaSet = null, a.deploymentConfig = null, a.deploymentConfigMissing = !1, a.imagesByDockerReference = {}, a.builds = {}, a.alerts = {}, a.renderOptions = a.renderOptions || {}, a.renderOptions.hideFilterWidget = !0, a.forms = {}, a.logOptions = {};
var y = [];
k.isAvailable().then(function(b) {
a.metricsAvailable = b;
});
var z = b("deploymentStatus"), A = function(b) {
a.logCanRun = !_.includes([ "New", "Pending" ], z(b));
<<<<<<< f56378c1e748449074be8738ae159f02ed953303
}, B = b("isIE")();
=======
}, B = b("isIE")() || b("isEdge")();
>>>>>>> Create reusable edit-environment-variables component
p.get(c.project).then(_.spread(function(k, p) {
a.project = k, a.projectContext = p;
var r = {}, C = function() {
if (a.hpaForRS = h.filterHPA(r, s, c.replicaSet), a.deploymentConfigName && a.isActive) {
var b = h.filterHPA(r, "DeploymentConfig", a.deploymentConfigName);
a.autoscalers = a.hpaForRS.concat(b);
} else if (a.deployment && a.isActive) {
var d = h.filterHPA(r, "Deployment", a.deployment.metadata.name);
a.autoscalers = a.hpaForRS.concat(d);
} else a.autoscalers = a.hpaForRS;
}, D = function() {
y.push(f.watch(a.resource, p, function(b) {
var c, d = [];
angular.forEach(b.by("metadata.name"), function(b) {
var c = u(b, "deploymentConfig") || "";
c === a.deploymentConfigName && d.push(b);
}), c = g.getActiveDeployment(d), a.isActive = c && c.metadata.uid === a.replicaSet.metadata.uid, C();
}));
}, E = function() {
h.getHPAWarnings(a.replicaSet, a.autoscalers, a.limitRanges, k).then(function(b) {
a.hpaWarnings = b;
});
}, F = function(d) {
var e = u(d, "deploymentConfig");
if (e) {
t = !0, a.deploymentConfigName = e;
var g = u(d, "deploymentVersion");
g && (a.logOptions.version = g), a.healthCheckURL = m.healthCheckURL(c.project, "DeploymentConfig", e), f.get("deploymentconfigs", e, p, {
<<<<<<< f56378c1e748449074be8738ae159f02ed953303
errorNotification: !1
=======
errorNotification:!1
>>>>>>> Create reusable edit-environment-variables component
}).then(function(b) {
a.deploymentConfig = b;
}, function(c) {
return 404 === c.status ? void (a.deploymentConfigMissing = !0) : void (a.alerts.load = {
type: "error",
message: "The deployment configuration details could not be loaded.",
details: b("getErrorDetails")(c)
});
});
}
}, G = function() {
a.isActive = g.isActiveReplicaSet(a.replicaSet, a.deployment);
}, H = function(b) {
return _.some(b, function(b) {
if (_.get(b, "status.replicas") && _.get(b, "metadata.uid") !== _.get(a.replicaSet, "metadata.uid")) {
var c = n.getControllerReferences(b);
return _.some(c, {
uid: a.deployment.metadata.uid
});
}
});
}, I = !1, J = function() {
var b = n.getControllerReferences(a.replicaSet), d = _.find(b, {
<<<<<<< f56378c1e748449074be8738ae159f02ed953303
kind: "Deployment"
=======
kind:"Deployment"
>>>>>>> Create reusable edit-environment-variables component
});
d && f.get({
<<<<<<< 61b7ccebc1be9196354cef218d1e7a812de7a0c6
group: "apps",
resource: "deployments"
}, d.name, p).then(function(b) {
a.deployment = b, a.healthCheckURL = m.healthCheckURL(c.project, "Deployment", b.metadata.name, "apps"), y.push(f.watchObject({
group: "apps",
resource: "deployments"
}, b.metadata.name, p, function(b, d) {
=======
group:"apps",
resource:"deployments"
}, d.name, p).then(function(b) {
a.deployment = b, a.healthCheckURL = m.healthCheckURL(c.project, "Deployment", b.metadata.name, "apps"), y.push(f.watchObject({
group:"apps",
resource:"deployments"
<<<<<<< f56378c1e748449074be8738ae159f02ed953303
}, b.metadata.name, l, function(b, d) {
>>>>>>> Use `apps` API group for deployments
return "DELETED" === d ? (a.alerts["deployment-deleted"] = {
type: "warning",
message: "The deployment controlling this replica set has been deleted."
}, a.healthCheckURL = m.healthCheckURL(c.project, "ReplicaSet", c.replicaSet, "extensions"), a.deploymentMissing = !0, void delete a.deployment) : (a.deployment = b, a.breadcrumbs = e.getBreadcrumbs({
object: a.replicaSet,
displayName: "#" + g.getRevision(a.replicaSet),
parent: {
title: a.deployment.metadata.name,
link: m.resourceURL(a.deployment)
},
humanizedKind: "Deployments"
}), G(), void C());
})), y.push(f.watch({
group: "extensions",
resource: "replicasets"
=======
}, b.metadata.name, p, function(b, d) {
return "DELETED" === d ? (a.alerts["deployment-deleted"] = {
type:"warning",
message:"The deployment controlling this replica set has been deleted."
}, a.healthCheckURL = m.healthCheckURL(c.project, "ReplicaSet", c.replicaSet, "extensions"), a.deploymentMissing = !0, void delete a.deployment) :(a.deployment = b, a.breadcrumbs = e.getBreadcrumbs({
object:a.replicaSet,
displayName:"#" + g.getRevision(a.replicaSet),
parent:{
title:a.deployment.metadata.name,
link:m.resourceURL(a.deployment)
},
humanizedKind:"Deployments"
}), G(), void C());
})), y.push(f.watch({
group:"extensions",
resource:"replicasets"
>>>>>>> Create reusable edit-environment-variables component
}, p, function(a) {
var b = a.by("metadata.name");
I = H(b);
}));
});
}, K = function() {
if (!_.isEmpty(x)) {
var b = _.get(a, "replicaSet.spec.template");
b && i.fetchReferencedImageStreamImages([ b ], a.imagesByDockerReference, x, p);
}
};
f.get(a.resource, c.replicaSet, p, {
<<<<<<< f56378c1e748449074be8738ae159f02ed953303
errorNotification: !1
=======
errorNotification:!1
>>>>>>> Create reusable edit-environment-variables component
}).then(function(b) {
switch (a.loaded = !0, a.replicaSet = b, A(b), s) {
case "ReplicationController":
F(b);
break;

case "ReplicaSet":
J();
}
E(), a.breadcrumbs = e.getBreadcrumbs({
<<<<<<< f56378c1e748449074be8738ae159f02ed953303
object: b
}), y.push(f.watchObject(a.resource, c.replicaSet, p, function(b, c) {
"DELETED" === c && (a.alerts.deleted = {
type: "warning",
message: "This " + v + " has been deleted."
=======
object:b
}), y.push(f.watchObject(a.resource, c.replicaSet, p, function(b, c) {
"DELETED" === c && (a.alerts.deleted = {
type:"warning",
message:"This " + v + " has been deleted."
>>>>>>> Create reusable edit-environment-variables component
}), a.replicaSet = b, A(b), E(), K(), a.deployment && G();
})), a.deploymentConfigName && D(), y.push(f.watch("pods", p, function(b) {
var c = b.by("metadata.name");
a.podsForDeployment = o.filterForOwner(c, a.replicaSet);
}));
}, function(d) {
a.loaded = !0, a.alerts.load = {
<<<<<<< f56378c1e748449074be8738ae159f02ed953303
type: "error",
message: "The " + v + " details could not be loaded.",
details: b("getErrorDetails")(d)
}, a.breadcrumbs = e.getBreadcrumbs({
name: c.replicaSet,
kind: s,
namespace: c.project
=======
type:"error",
message:"The " + v + " details could not be loaded.",
details:b("getErrorDetails")(d)
}, a.breadcrumbs = e.getBreadcrumbs({
name:c.replicaSet,
kind:s,
namespace:c.project
>>>>>>> Create reusable edit-environment-variables component
});
}), y.push(f.watch(a.resource, p, function(c, d, e) {
a.replicaSets = c.by("metadata.name"), "ReplicationController" === s && (a.deploymentsByDeploymentConfig = g.associateDeploymentsToDeploymentConfig(a.replicaSets));
var f, h;
<<<<<<< f56378c1e748449074be8738ae159f02ed953303
e && (f = u(e, "deploymentConfig"), h = e.metadata.name), a.deploymentConfigDeploymentsInProgress = a.deploymentConfigDeploymentsInProgress || {}, d ? "ADDED" === d || "MODIFIED" === d && b("deploymentIsInProgress")(e) ? (a.deploymentConfigDeploymentsInProgress[f] = a.deploymentConfigDeploymentsInProgress[f] || {}, a.deploymentConfigDeploymentsInProgress[f][h] = e) : "MODIFIED" === d && a.deploymentConfigDeploymentsInProgress[f] && delete a.deploymentConfigDeploymentsInProgress[f][h] : a.deploymentConfigDeploymentsInProgress = g.associateRunningDeploymentToDeploymentConfig(a.deploymentsByDeploymentConfig), e ? "DELETED" !== d && (e.causes = b("deploymentCauses")(e)) : angular.forEach(a.replicaSets, function(a) {
=======
e && (f = u(e, "deploymentConfig"), h = e.metadata.name), a.deploymentConfigDeploymentsInProgress = a.deploymentConfigDeploymentsInProgress || {}, d ? "ADDED" === d || "MODIFIED" === d && b("deploymentIsInProgress")(e) ? (a.deploymentConfigDeploymentsInProgress[f] = a.deploymentConfigDeploymentsInProgress[f] || {}, a.deploymentConfigDeploymentsInProgress[f][h] = e) :"MODIFIED" === d && a.deploymentConfigDeploymentsInProgress[f] && delete a.deploymentConfigDeploymentsInProgress[f][h] :a.deploymentConfigDeploymentsInProgress = g.associateRunningDeploymentToDeploymentConfig(a.deploymentsByDeploymentConfig), e ? "DELETED" !== d && (e.causes = b("deploymentCauses")(e)) :angular.forEach(a.replicaSets, function(a) {
>>>>>>> Create reusable edit-environment-variables component
a.causes = b("deploymentCauses")(a);
});
})), y.push(f.watch("imagestreams", p, function(a) {
var b = a.by("metadata.name");
i.buildDockerRefMapForImageStreams(b, x), K(), j.log("imagestreams (subscribe)", b);
})), y.push(f.watch("builds", p, function(b) {
a.builds = b.by("metadata.name"), j.log("builds (subscribe)", a.builds);
})), y.push(f.watch({
<<<<<<< f56378c1e748449074be8738ae159f02ed953303
group: "autoscaling",
resource: "horizontalpodautoscalers",
version: "v1"
}, p, function(a) {
r = a.by("metadata.name"), C(), E();
}, {
poll: B,
pollInterval: 6e4
=======
group:"autoscaling",
resource:"horizontalpodautoscalers",
version:"v1"
}, p, function(a) {
r = a.by("metadata.name"), C(), E();
}, {
poll:B,
pollInterval:6e4
>>>>>>> Create reusable edit-environment-variables component
})), f.list("limitranges", p).then(function(b) {
a.limitRanges = b.by("metadata.name"), E();
});
var L = 6e4;
y.push(f.watch("resourcequotas", p, function(b) {
a.quotas = b.by("metadata.name");
}, {
<<<<<<< f56378c1e748449074be8738ae159f02ed953303
poll: !0,
pollInterval: L
})), y.push(f.watch("appliedclusterresourcequotas", p, function(b) {
a.clusterQuotas = b.by("metadata.name");
}, {
poll: !0,
pollInterval: L
=======
poll:!0,
pollInterval:L
})), y.push(f.watch("appliedclusterresourcequotas", p, function(b) {
a.clusterQuotas = b.by("metadata.name");
}, {
poll:!0,
pollInterval:L
>>>>>>> Create reusable edit-environment-variables component
}));
var M = b("deploymentIsLatest");
a.showRollbackAction = function() {
return "Complete" === z(a.replicaSet) && !M(a.replicaSet, a.deploymentConfig) && !a.replicaSet.metadata.deletionTimestamp && d.canI("deploymentconfigrollbacks", "create");
}, a.retryFailedDeployment = function(b) {
g.retryFailedDeployment(b, p, a);
}, a.rollbackToDeployment = function(b, c, d, e) {
g.rollbackToDeployment(b, c, d, e, p, a);
}, a.cancelRunningDeployment = function(a) {
g.cancelRunningDeployment(a, p);
}, a.scale = function(c) {
var d = function(c) {
a.alerts = a.alerts || {}, a.alerts.scale = {
type: "error",
message: "An error occurred scaling.",
details: b("getErrorDetails")(c)
};
}, e = a.deployment || a.deploymentConfig || a.replicaSet;
g.scale(e, c).then(_.noop, d);
};
var N = b("hasDeploymentConfig");
a.isScalable = function() {
return !!_.isEmpty(a.autoscalers) && (!N(a.replicaSet) && !w(a.replicaSet) || (!(!a.deploymentConfigMissing && !a.deploymentMissing) || !(!a.deploymentConfig && !a.deployment) && (a.isActive && !I)));
}, a.removeVolume = function(c) {
var d = "This will remove the volume from the " + b("humanizeKind")(a.replicaSet.kind) + ".";
<<<<<<< f56378c1e748449074be8738ae159f02ed953303
c.persistentVolumeClaim ? d += " It will not delete the persistent volume claim." : c.secret ? d += " It will not delete the secret." : c.configMap && (d += " It will not delete the config map.");
var e = l.confirm({
message: "Remove volume " + c.name + "?",
details: d,
okButtonText: "Remove",
okButtonClass: "btn-danger",
cancelButtonText: "Cancel"
=======
c.persistentVolumeClaim ? d += " It will not delete the persistent volume claim." :c.secret ? d += " It will not delete the secret." :c.configMap && (d += " It will not delete the config map.");
var e = l.confirm({
message:"Remove volume " + c.name + "?",
details:d,
okButtonText:"Remove",
okButtonClass:"btn-danger",
cancelButtonText:"Cancel"
>>>>>>> Create reusable edit-environment-variables component
}), f = function() {
q.removeVolume(a.replicaSet, c, p);
};
e.then(f);
}, a.$on("$destroy", function() {
f.unwatchAll(y);
});
}));
} ]), angular.module("openshiftConsole").controller("StatefulSetsController", [ "$scope", "$routeParams", "DataService", "ProjectsService", "LabelFilter", "PodsService", function(a, b, c, d, e, f) {
a.projectName = b.project, a.labelSuggestions = {}, a.clearFilter = function() {
e.clear();
};
var g = [];
d.get(b.project).then(_.spread(function(b, d) {
function h() {
a.filterWithZeroResults = !e.getLabelSelector().isEmpty() && _.isEmpty(a.statefulSets) && !_.isEmpty(a.unfilteredStatefulSets);
}
a.project = b, g.push(c.watch({
resource: "statefulsets",
group: "apps",
version: "v1beta1"
}, d, function(b) {
angular.extend(a, {
loaded: !0,
unfilteredStatefulSets: b.by("metadata.name")
}), a.statefulSets = e.getLabelSelector().select(a.unfilteredStatefulSets), e.addLabelSuggestionsFromResources(a.unfilteredStatefulSets, a.labelSuggestions), e.setLabelSuggestions(a.labelSuggestions), h();
})), g.push(c.watch("pods", d, function(b) {
a.pods = b.by("metadata.name"), a.podsByOwnerUID = f.groupByOwnerUID(a.pods);
})), e.onActiveFiltersChanged(function(b) {
a.$evalAsync(function() {
a.statefulSets = b.select(a.unfilteredStatefulSets), h();
});
}), a.$on("$destroy", function() {
c.unwatchAll(g);
});
}));
} ]), angular.module("openshiftConsole").controller("StatefulSetController", [ "$filter", "$scope", "$routeParams", "BreadcrumbsService", "DataService", "MetricsService", "ProjectsService", "PodsService", function(a, b, c, d, e, f, g, h) {
b.projectName = c.project, b.statefulSetName = c.statefulset, b.forms = {}, b.alerts = {}, b.breadcrumbs = d.getBreadcrumbs({
<<<<<<< f56378c1e748449074be8738ae159f02ed953303
name: b.statefulSetName,
kind: "StatefulSet",
namespace: c.project
});
var i, j = [], k = b.resourceGroupVersion = {
resource: "statefulsets",
group: "apps",
version: "v1beta1"
=======
name:b.statefulSetName,
kind:"StatefulSet",
namespace:c.project
});
var i, j = [], k = b.resourceGroupVersion = {
resource:"statefulsets",
group:"apps",
version:"v1beta1"
>>>>>>> Create reusable edit-environment-variables component
};
f.isAvailable().then(function(a) {
b.metricsAvailable = a;
}), g.get(c.project).then(_.spread(function(c, d) {
i = d, e.get(k, b.statefulSetName, d, {
<<<<<<< f56378c1e748449074be8738ae159f02ed953303
errorNotification: !1
}).then(function(a) {
angular.extend(b, {
project: c,
projectContext: d,
statefulSet: a,
loaded: !0,
isScalable: function() {
return !1;
},
scale: function() {}
=======
errorNotification:!1
}).then(function(a) {
angular.extend(b, {
project:c,
projectContext:d,
statefulSet:a,
loaded:!0,
isScalable:function() {
return !1;
},
scale:function() {}
>>>>>>> Create reusable edit-environment-variables component
}), j.push(e.watchObject(k, b.statefulSetName, d, function(a) {
b.statefulSet = a;
})), j.push(e.watch("pods", d, function(c) {
var d = c.by("metadata.name");
b.podsForStatefulSet = h.filterForOwner(d, a);
}));
var f = 6e4;
j.push(e.watch("resourcequotas", d, function(a) {
b.quotas = a.by("metadata.name");
}, {
<<<<<<< f56378c1e748449074be8738ae159f02ed953303
poll: !0,
pollInterval: f
=======
poll:!0,
pollInterval:f
>>>>>>> Create reusable edit-environment-variables component
})), j.push(e.watch("appliedclusterresourcequotas", d, function(a) {
b.clusterQuotas = a.by("metadata.name");
}, {
poll: !0,
pollInterval: f
}));
}, function(c) {
b.loaded = !0, b.alerts.load = {
type: "error",
message: "The stateful set details could not be loaded.",
details: a("getErrorDetails")(c)
};
});
})), b.$on("$destroy", function() {
e.unwatchAll(j);
});
} ]), angular.module("openshiftConsole").controller("ServicesController", [ "$routeParams", "$scope", "DataService", "ProjectsService", "$filter", "LabelFilter", "Logger", function(a, b, c, d, e, f, g) {
b.projectName = a.project, b.services = {}, b.unfilteredServices = {}, b.routesByService = {}, b.routes = {}, b.labelSuggestions = {}, b.clearFilter = function() {
f.clear();
};
var h = [];
d.get(a.project).then(_.spread(function(a, d) {
function e() {
b.filterWithZeroResults = !f.getLabelSelector().isEmpty() && _.isEmpty(b.services) && !_.isEmpty(b.unfilteredServices);
}
b.project = a, h.push(c.watch("services", d, function(a) {
b.servicesLoaded = !0, b.unfilteredServices = a.by("metadata.name"), f.addLabelSuggestionsFromResources(b.unfilteredServices, b.labelSuggestions), f.setLabelSuggestions(b.labelSuggestions), b.services = f.getLabelSelector().select(b.unfilteredServices), e(), g.log("services (subscribe)", b.unfilteredServices);
})), f.onActiveFiltersChanged(function(a) {
b.$evalAsync(function() {
b.services = a.select(b.unfilteredServices), e();
});
}), b.$on("$destroy", function() {
c.unwatchAll(h);
});
}));
} ]), angular.module("openshiftConsole").controller("ServiceController", [ "$scope", "$routeParams", "DataService", "ProjectsService", "$filter", function(a, b, c, d, e) {
a.projectName = b.project, a.service = null, a.services = null, a.alerts = {}, a.renderOptions = a.renderOptions || {}, a.renderOptions.hideFilterWidget = !0, a.breadcrumbs = [ {
title: "Services",
link: "project/" + b.project + "/browse/services"
}, {
title: b.service
} ], a.podFailureReasons = {
Pending: "This pod will not receive traffic until all of its containers have been created."
};
var f = {}, g = [], h = function() {
a.service && (a.portsByRoute = {}, _.each(a.service.spec.ports, function(b) {
var c = !1;
b.nodePort && (a.showNodePorts = !0), _.each(a.routesForService, function(d) {
d.spec.port && d.spec.port.targetPort !== b.name && d.spec.port.targetPort !== b.targetPort || (a.portsByRoute[d.metadata.name] = a.portsByRoute[d.metadata.name] || [], a.portsByRoute[d.metadata.name].push(b), c = !0);
}), c || (a.portsByRoute[""] = a.portsByRoute[""] || [], a.portsByRoute[""].push(b));
}));
}, i = function() {
if (a.podsForService = {}, a.service) {
var b = new LabelSelector(a.service.spec.selector);
a.podsForService = b.select(f);
}
}, j = function(b, c) {
a.loaded = !0, a.service = b, i(), h(), "DELETED" === c && (a.alerts.deleted = {
type: "warning",
message: "This service has been deleted."
});
};
d.get(b.project).then(_.spread(function(d, k) {
a.project = d, a.projectContext = k, c.get("services", b.service, k, {
errorNotification: !1
}).then(function(a) {
j(a), g.push(c.watchObject("services", b.service, k, j));
}, function(b) {
a.loaded = !0, a.alerts.load = {
type: "error",
message: "The service details could not be loaded.",
details: e("getErrorDetails")(b)
};
}), g.push(c.watch("services", k, function(b) {
a.services = b.by("metadata.name");
})), g.push(c.watch("pods", k, function(a) {
f = a.by("metadata.name"), i();
})), g.push(c.watch("endpoints", k, function(c) {
a.podsWithEndpoints = {};
var d = c.by("metadata.name")[b.service];
d && _.each(d.subsets, function(b) {
_.each(b.addresses, function(b) {
"Pod" === _.get(b, "targetRef.kind") && (a.podsWithEndpoints[b.targetRef.name] = !0);
});
});
})), g.push(c.watch("routes", k, function(c) {
a.routesForService = {}, angular.forEach(c.by("metadata.name"), function(c) {
"Service" === c.spec.to.kind && c.spec.to.name === b.service && (a.routesForService[c.metadata.name] = c);
}), h(), Logger.log("routes (subscribe)", a.routesByService);
})), a.$on("$destroy", function() {
c.unwatchAll(g);
});
}));
} ]), angular.module("openshiftConsole").controller("ServiceInstancesController", [ "$scope", "$filter", "$routeParams", "APIService", "BindingService", "Constants", "DataService", "LabelFilter", "Logger", "ProjectsService", function(a, b, c, d, e, f, g, h, i, j) {
a.bindingsByInstanceRef = {}, a.labelSuggestions = {}, a.projectName = c.project, a.serviceClasses = {}, a.serviceInstances = {}, a.unfilteredServiceInstances = {}, a.clearFilter = function() {
h.clear();
};
var k = [], l = function() {
a.serviceInstances = h.getLabelSelector().select(a.unfilteredServiceInstances);
}, m = function() {
a.unfilteredServiceInstances = e.sortServiceInstances(a.unfilteredServiceInstances, a.serviceClasses);
};
a.getServiceClass = function(b) {
var c = _.get(b, "spec.clusterServiceClassRef.name");
return _.get(a, [ "serviceClasses", c ]);
}, j.get(c.project).then(_.spread(function(b, c) {
function e() {
a.filterWithZeroResults = !h.getLabelSelector().isEmpty() && _.isEmpty(a.serviceInstances) && !_.isEmpty(a.unfilteredServiceInstances);
}
a.project = b, a.projectContext = c;
var f = d.getPreferredVersion("servicebindings");
k.push(g.watch(f, c, function(b) {
var c = b.by("metadata.name");
a.bindingsByInstanceRef = _.groupBy(c, "spec.instanceRef.name");
}));
var j = d.getPreferredVersion("serviceinstances");
k.push(g.watch(j, c, function(b) {
a.serviceInstancesLoaded = !0, a.unfilteredServiceInstances = b.by("metadata.name"), m(), l(), e(), h.addLabelSuggestionsFromResources(a.unfilteredServiceInstances, a.labelSuggestions), h.setLabelSuggestions(a.labelSuggestions), i.log("provisioned services (subscribe)", a.unfilteredServiceInstances);
}));
var n = d.getPreferredVersion("clusterserviceclasses");
g.list(n, {}, function(b) {
a.serviceClasses = b.by("metadata.name"), m(), l();
}), h.onActiveFiltersChanged(function(b) {
a.$evalAsync(function() {
a.serviceInstances = b.select(a.unfilteredServiceInstances), e();
});
}), a.$on("$destroy", function() {
g.unwatchAll(k);
});
}));
} ]), angular.module("openshiftConsole").controller("ServiceInstanceController", [ "$scope", "$filter", "$routeParams", "APIService", "BindingService", "AuthorizationService", "Catalog", "DataService", "Logger", "ProjectsService", "SecretsService", "ServiceInstancesService", function(a, b, c, d, e, f, g, h, i, j, k, l) {
a.alerts = {}, a.projectName = c.project, a.serviceInstance = null, a.serviceClass = null, a.serviceClasses = null, a.editDialogShown = !1, a.breadcrumbs = [ {
title: "Provisioned Services",
link: "project/" + c.project + "/browse/service-instances"
} ], a.deprovision = function() {
a.serviceInstance.metadata.deletionTimestamp || l.deprovision(a.serviceInstance, a.bindings);
}, a.showEditDialog = function() {
a.editDialogShown = !0;
}, a.showParameterValues = !1, a.toggleShowParameterValues = function() {
a.showParameterValues = !a.showParameterValues;
}, a.closeEditDialog = function() {
a.editDialogShown = !1;
};
var m, n, o = [], p = [], q = b("serviceInstanceDisplayName"), r = b("isServiceInstanceFailed"), s = d.getPreferredVersion("servicebindings");
a.serviceInstancesVersion = d.getPreferredVersion("serviceinstances");
var t = function() {
a.breadcrumbs.push({
title: a.displayName
});
}, u = function() {
if (a.serviceInstance && a.parameterSchema) {
h.unwatchAll(p), p = [], a.allowParametersReveal = f.canI("secrets", "get", a.projectName), a.parameterData = {}, a.opaqueParameterKeys = [];
var b = a.allowParametersReveal ? "" : "*****";
_.each(_.keys(_.get(a.parameterSchema, "properties")), function(c) {
a.parameterData[c] = b;
});
var c = _.get(a.serviceInstance, "status.externalProperties.parameters", {});
_.each(_.keys(c), function(b) {
"<redacted>" === c[b] ? a.parameterData[b] = "*****" : (a.parameterData[b] = c[b], a.opaqueParameterKeys.push(b));
}), a.allowParametersReveal && _.each(_.get(a.serviceInstance, "spec.parametersFrom"), function(b) {
p.push(h.watchObject("secrets", _.get(b, "secretKeyRef.name"), a.projectContext, function(c) {
try {
var d = JSON.parse(k.decodeSecretData(c.data)[b.secretKeyRef.key]);
_.extend(a.parameterData, d);
} catch (e) {
i.warn("Unable to load parameters from secret " + _.get(b, "secretKeyRef.name"), e);
}
}));
});
}
}, v = function() {
if (a.plan && a.serviceClass && a.serviceInstance) {
var b = _.get(a.plan, "spec.instanceUpdateParameterSchema"), c = _.size(_.get(b, "properties")) > 0 || _.get(a.serviceClass, "spec.planUpdatable") && _.size(a.servicePlans) > 1;
a.editAvailable = c && !r(a.serviceInstance) && !_.get(a.serviceInstance, "status.asyncOpInProgress") && !_.get(a.serviceInstance, "metadata.deletionTimestamp");
}
}, w = function() {
a.parameterFormDefinition = angular.copy(_.get(a.plan, "spec.externalMetadata.schemas.service_instance.update.openshift_form_definition")), a.parameterSchema = _.get(a.plan, "spec.instanceCreateParameterSchema"), u();
}, x = function() {
var b = _.get(a.serviceInstance, "spec.clusterServicePlanRef.name");
a.plan = _.find(a.servicePlans, {
metadata: {
name: b
}
}), w(), v();
}, y = function() {
a.serviceClass && !n && (a.servicePlans ? x() : n = g.getServicePlansForServiceClass(a.serviceClass).then(function(b) {
var c = _.get(a.serviceInstance, "spec.clusterServicePlanRef.name");
a.servicePlans = _.reject(b.by("metadata.name"), function(a) {
return _.get(a, "status.removedFromBrokerCatalog") && a.metadata.name !== c;
}), x(), n = null;
}));
}, z = function() {
a.serviceInstance && !m && (a.serviceClass ? y() : m = l.fetchServiceClassForInstance(a.serviceInstance).then(function(b) {
a.serviceClass = b, a.displayName = q(a.serviceInstance, a.serviceClass), t(), m = null, y();
}));
}, A = function(b, c) {
a.loaded = !0, a.serviceInstance = b, "DELETED" === c && (a.alerts.deleted = {
type: "warning",
message: "This provisioned service has been deleted."
}), z(), u(), v();
};
j.get(c.project).then(_.spread(function(d, f) {
a.project = d, a.projectContext = f, h.get(a.serviceInstancesVersion, c.instance, f, {
errorNotification: !1
}).then(function(b) {
A(b), o.push(h.watchObject(a.serviceInstancesVersion, c.instance, f, A)), o.push(h.watch(s, f, function(c) {
var d = c.by("metadata.name");
a.bindings = e.getBindingsForResource(d, b);
}));
}, function(c) {
a.loaded = !0, a.alerts.load = {
type: "error",
message: "The provisioned service details could not be loaded.",
details: b("getErrorDetails")(c)
};
});
}, function(c) {
a.loaded = !0, a.alerts.load = {
type: "error",
message: "The service details could not be loaded.",
details: b("getErrorDetails")(c)
};
})), a.$on("$destroy", function() {
h.unwatchAll(o), h.unwatchAll(p);
});
} ]), angular.module("openshiftConsole").controller("SecretsController", [ "$routeParams", "$scope", "DataService", "ProjectsService", function(a, b, c, d) {
b.projectName = a.project, b.secretsByType = {};
var e = [];
d.get(a.project).then(_.spread(function(a, d) {
b.project = a, b.context = d, e.push(c.watch("secrets", d, function(a) {
b.secrets = _.sortBy(a.by("metadata.name"), [ "type", "metadata.name" ]), b.secretsLoaded = !0;
})), b.$on("$destroy", function() {
c.unwatchAll(e);
});
}));
} ]), angular.module("openshiftConsole").controller("SecretController", [ "$routeParams", "$filter", "$scope", "DataService", "ProjectsService", "SecretsService", function(a, b, c, d, e, f) {
c.projectName = a.project, c.secretName = a.secret, c.view = {
showSecret: !1
}, c.alerts = c.alerts || {}, c.breadcrumbs = [ {
title: "Secrets",
link: "project/" + a.project + "/browse/secrets"
}, {
title: c.secretName
} ];
var g = [], h = function(a, b) {
return c.secret = a, "DELETED" === b ? void (c.alerts.deleted = {
type: "warning",
message: "This secret has been deleted."
}) : void (c.decodedSecretData = f.decodeSecretData(c.secret.data));
};
c.addToApplicationVisible = !1, c.addToApplication = function() {
c.secret.data && (c.addToApplicationVisible = !0);
}, c.closeAddToApplication = function() {
c.addToApplicationVisible = !1;
}, e.get(a.project).then(_.spread(function(a, e) {
c.project = a, c.context = e, d.get("secrets", c.secretName, e, {
errorNotification: !1
}).then(function(a) {
c.loaded = !0, h(a), g.push(d.watchObject("secrets", c.secretName, e, h));
}, function(a) {
c.loaded = !0, c.alerts.load = {
type: "error",
message: "The secret details could not be loaded.",
details: b("getErrorDetails")(a)
};
}), c.$on("$destroy", function() {
d.unwatchAll(g);
});
}));
} ]), angular.module("openshiftConsole").controller("CreateSecretController", [ "$filter", "$location", "$routeParams", "$scope", "$window", "ApplicationGenerator", "AuthorizationService", "DataService", "Navigate", "ProjectsService", function(a, b, c, d, e, f, g, h, i, j) {
d.alerts = {}, d.projectName = c.project, d.breadcrumbs = [ {
title: "Secrets",
link: "project/" + d.projectName + "/browse/secrets"
}, {
title: "Create Secret"
} ], j.get(c.project).then(_.spread(function(a, f) {
return d.project = a, d.context = f, g.canI("secrets", "create", c.project) ? void (d.navigateBack = function() {
return c.then ? void b.url(c.then) : void e.history.back();
}) : void i.toErrorPage("You do not have authority to create secrets in project " + c.project + ".", "access_denied");
}));
} ]), angular.module("openshiftConsole").controller("ConfigMapsController", [ "$scope", "$routeParams", "APIService", "DataService", "LabelFilter", "ProjectsService", function(a, b, c, d, e, f) {
a.projectName = b.project, a.loaded = !1, a.labelSuggestions = {}, a.configMapsVersion = c.getPreferredVersion("configmaps"), a.clearFilter = function() {
e.clear();
};
var g, h = [], i = function() {
a.filterWithZeroResults = !e.getLabelSelector().isEmpty() && _.isEmpty(a.configMaps) && !_.isEmpty(g);
}, j = function() {
e.addLabelSuggestionsFromResources(g, a.labelSuggestions), e.setLabelSuggestions(a.labelSuggestions);
}, k = function() {
var b = e.getLabelSelector().select(g);
a.configMaps = _.sortBy(b, "metadata.name"), i();
};
f.get(b.project).then(_.spread(function(b, c) {
a.project = b, h.push(d.watch(a.configMapsVersion, c, function(b) {
g = b.by("metadata.name"), j(), k(), a.loaded = !0;
})), e.onActiveFiltersChanged(function() {
a.$evalAsync(k);
}), a.$on("$destroy", function() {
d.unwatchAll(h);
});
}));
} ]), angular.module("openshiftConsole").controller("ConfigMapController", [ "$scope", "$routeParams", "APIService", "BreadcrumbsService", "DataService", "ProjectsService", function(a, b, c, d, e, f) {
a.projectName = b.project, a.alerts = a.alerts || {}, a.loaded = !1, a.labelSuggestions = {}, a.breadcrumbs = d.getBreadcrumbs({
name: b.configMap,
kind: "ConfigMap",
namespace: b.project
}), a.configMapsVersion = c.getPreferredVersion("configmaps");
var g = [], h = function(b, c) {
a.loaded = !0, a.configMap = b, "DELETED" === c && (a.alerts.deleted = {
type: "warning",
message: "This config map has been deleted."
});
};
a.addToApplicationVisible = !1, a.addToApplication = function() {
a.addToApplicationVisible = !0;
}, a.closeAddToApplication = function() {
a.addToApplicationVisible = !1;
}, f.get(b.project).then(_.spread(function(c, d) {
a.project = c, e.get(a.configMapsVersion, b.configMap, d, {
errorNotification: !1
}).then(function(a) {
h(a), g.push(e.watchObject("configmaps", b.configMap, d, h));
}, function(b) {
a.loaded = !0, a.error = b;
}), a.$on("$destroy", function() {
e.unwatchAll(g);
});
}));
} ]), angular.module("openshiftConsole").controller("CreateConfigMapController", [ "$filter", "$routeParams", "$scope", "$window", "APIService", "AuthorizationService", "DataService", "Navigate", "NotificationsService", "ProjectsService", function(a, b, c, d, e, f, g, h, i, j) {
c.projectName = b.project, c.breadcrumbs = [ {
title: "Config Maps",
link: "project/" + c.projectName + "/browse/config-maps"
}, {
title: "Create Config Map"
} ];
var k = function() {
i.hideNotification("create-config-map-error");
};
c.$on("$destroy", k);
var l = function() {
d.history.back();
};
c.cancel = l, j.get(b.project).then(_.spread(function(d, j) {
return c.project = d, f.canI("configmaps", "create", b.project) ? (c.configMap = {
apiVersion: "v1",
kind: "ConfigMap",
metadata: {
namespace: b.project
},
data: {}
}, void (c.createConfigMap = function() {
if (c.createConfigMapForm.$valid) {
k(), c.disableInputs = !0;
var b = e.objectToResourceGroupVersion(c.configMap);
g.create(b, null, c.configMap, j).then(function() {
i.addNotification({
type: "success",
message: "Config map " + c.configMap.metadata.name + " successfully created."
}), l();
}, function(b) {
c.disableInputs = !1, i.addNotification({
id: "create-config-map-error",
type: "error",
message: "An error occurred creating the config map.",
details: a("getErrorDetails")(b)
});
});
}
})) : void h.toErrorPage("You do not have authority to create config maps in project " + b.project + ".", "access_denied");
}));
} ]), angular.module("openshiftConsole").controller("RoutesController", [ "$routeParams", "$scope", "DataService", "$filter", "LabelFilter", "ProjectsService", function(a, b, c, d, e, f) {
b.projectName = a.project, b.unfilteredRoutes = {}, b.routes = {}, b.labelSuggestions = {}, b.clearFilter = function() {
e.clear();
};
var g = [];
f.get(a.project).then(_.spread(function(a, d) {
function f() {
b.filterWithZeroResults = !e.getLabelSelector().isEmpty() && _.isEmpty(b.routes) && !_.isEmpty(b.unfilteredRoutes);
}
b.project = a, g.push(c.watch("routes", d, function(a) {
b.routesLoaded = !0, b.unfilteredRoutes = a.by("metadata.name"), e.addLabelSuggestionsFromResources(b.unfilteredRoutes, b.labelSuggestions), e.setLabelSuggestions(b.labelSuggestions), b.routes = e.getLabelSelector().select(b.unfilteredRoutes), f();
})), g.push(c.watch("services", d, function(a) {
b.services = a.by("metadata.name");
})), e.onActiveFiltersChanged(function(a) {
b.$evalAsync(function() {
b.routes = a.select(b.unfilteredRoutes), f();
});
}), b.$on("$destroy", function() {
c.unwatchAll(g);
});
}));
} ]), angular.module("openshiftConsole").controller("RouteController", [ "$scope", "$filter", "$routeParams", "AlertMessageService", "DataService", "ProjectsService", "RoutesService", function(a, b, c, d, e, f, g) {
a.projectName = c.project, a.route = null, a.alerts = {}, a.renderOptions = a.renderOptions || {}, a.renderOptions.hideFilterWidget = !0, a.breadcrumbs = [ {
title: "Routes",
link: "project/" + c.project + "/browse/routes"
}, {
title: c.route
} ];
var h, i = [], j = function(b, c) {
a.loaded = !0, a.route = b, h = g.isCustomHost(b), "DELETED" === c && (a.alerts.deleted = {
type: "warning",
message: "This route has been deleted."
});
}, k = function(b) {
var c = _.get(a, "route.metadata.uid");
return "router-host-" + c + "-" + b.host + "-" + b.routerCanonicalHostname;
};
a.showRouterHostnameAlert = function(b, c) {
if (!h) return !1;
if (!b || !b.host || !b.routerCanonicalHostname) return !1;
if (!c || "True" !== c.status) return !1;
var e = k(b);
return !d.isAlertPermanentlyHidden(e, a.projectName);
}, f.get(c.project).then(_.spread(function(d, f) {
a.project = d, e.get("routes", c.route, f, {
errorNotification: !1
}).then(function(a) {
j(a), i.push(e.watchObject("routes", c.route, f, j));
}, function(c) {
a.loaded = !0, a.alerts.load = {
type: "error",
message: "The route details could not be loaded.",
details: b("getErrorDetails")(c)
};
}), i.push(e.watch("services", f, function(b) {
a.services = b.by("metadata.name");
})), a.$on("$destroy", function() {
e.unwatchAll(i);
});
}));
} ]), angular.module("openshiftConsole").controller("StorageController", [ "$routeParams", "$scope", "AlertMessageService", "DataService", "ProjectsService", "QuotaService", "$filter", "LabelFilter", "Logger", "gettext", "gettextCatalog", function(a, b, c, d, e, f, g, h, i, j, k) {
b.projectName = a.project, b.pvcs = {}, b.unfilteredPVCs = {}, b.labelSuggestions = {}, b.alerts = b.alerts || {}, b.outOfClaims = !1, b.clearFilter = function() {
h.clear();
};
var l = function() {
var a = c.isAlertPermanentlyHidden("storage-quota-limit-reached", b.projectName);
if (b.outOfClaims = f.isAnyStorageQuotaExceeded(b.quotas, b.clusterQuotas), !a && b.outOfClaims) {
if (b.alerts.quotaExceeded) return;
b.alerts.quotaExceeded = {
type: "warning",
message: k.getString(j("Storage quota limit has been reached. You will not be able to create any new storage.")),
links: [ {
href: "project/" + b.projectName + "/quota",
label: k.getString(j("View Quota"))
}, {
href: "",
label: k.getString(j("Don't Show Me Again")),
onClick: function() {
return c.permanentlyHideAlert("storage-quota-limit-reached", b.projectName), !0;
}
} ]
};
} else delete b.alerts.quotaExceeded;
}, m = [];
e.get(a.project).then(_.spread(function(a, c) {
function e() {
b.filterWithZeroResults = !h.getLabelSelector().isEmpty() && $.isEmptyObject(b.pvcs) && !$.isEmptyObject(b.unfilteredPVCs);
}
b.project = a, m.push(d.watch("persistentvolumeclaims", c, function(a) {
b.pvcsLoaded = !0, b.unfilteredPVCs = a.by("metadata.name"), h.addLabelSuggestionsFromResources(b.unfilteredPVCs, b.labelSuggestions), h.setLabelSuggestions(b.labelSuggestions), b.pvcs = h.getLabelSelector().select(b.unfilteredPVCs), e(), i.log("pvcs (subscribe)", b.unfilteredPVCs);
})), h.onActiveFiltersChanged(function(a) {
b.$evalAsync(function() {
b.pvcs = a.select(b.unfilteredPVCs), e();
});
}), b.$on("$destroy", function() {
d.unwatchAll(m);
}), d.list("resourcequotas", {
namespace: b.projectName
}, function(a) {
b.quotas = a.by("metadata.name"), l();
}), d.list("appliedclusterresourcequotas", {
namespace: b.projectName
}, function(a) {
b.clusterQuotas = a.by("metadata.name"), l();
});
}));
} ]), angular.module("openshiftConsole").controller("OtherResourcesController", [ "$routeParams", "$location", "$scope", "AuthorizationService", "DataService", "ProjectsService", "$filter", "LabelFilter", "Logger", "APIService", function(a, b, c, d, e, f, g, h, i, j) {
function k() {
c.filterWithZeroResults = !h.getLabelSelector().isEmpty() && _.isEmpty(c.resources) && !_.isEmpty(c.unfilteredResources);
}
function l() {
var a = c.kindSelector.selected;
if (a) {
var d = b.search();
d.kind = a.kind, d.group = a.group || "", b.replace().search(d), c.selectedResource = {
resource: j.kindToResource(a.kind),
group: a.group || ""
}, e.list({
group: a.group,
resource: j.kindToResource(a.kind)
}, c.context).then(function(b) {
c.unfilteredResources = b.by("metadata.name"), c.labelSuggestions = {}, h.addLabelSuggestionsFromResources(c.unfilteredResources, c.labelSuggestions), h.setLabelSuggestions(c.labelSuggestions), c.resources = h.getLabelSelector().select(c.unfilteredResources), c.resourceName = j.kindToResource(a.kind, !0), k();
});
}
}
c.projectName = a.project, c.labelSuggestions = {}, c.kindSelector = {
disabled: !0
}, c.kinds = _.filter(j.availableKinds(), function(a) {
switch (a.kind) {
case "AppliedClusterResourceQuota":
case "Build":
case "BuildConfig":
case "ConfigMap":
case "Deployment":
case "DeploymentConfig":
case "Event":
case "ImageStream":
case "ImageStreamImage":
case "ImageStreamImport":
case "ImageStreamMapping":
case "ImageStreamTag":
case "LimitRange":
case "PersistentVolumeClaim":
case "Pod":
case "ReplicaSet":
case "ReplicationController":
case "ResourceQuota":
case "Route":
case "Secret":
case "Service":
case "ServiceInstance":
case "StatefulSet":
return !1;

default:
return !0;
}
}), c.clearFilter = function() {
h.clear();
};
var m = function(a) {
if (a) {
var b = j.kindToResourceGroupVersion(a), c = j.apiInfo(b);
return !c || !c.verbs || _.includes(c.verbs, "list");
}
};
c.getReturnURL = function() {
var b = _.get(c, "kindSelector.selected.kind");
return b ? URI.expand("project/{projectName}/browse/other?kind={kind}&group={group}", {
projectName: a.project,
kind: b,
group: _.get(c, "kindSelector.selected.group", "")
}).toString() : "";
};
var n;
c.isDuplicateKind = function(a) {
return n || (n = _.countBy(c.kinds, "kind")), n[a] > 1;
};
var o = function(a, b) {
return _.some(c.kinds, function(c) {
return c.kind === a && (!c.group && !b || c.group === b);
});
};
f.get(a.project).then(_.spread(function(b, e) {
c.kinds = _.filter(c.kinds, function(a) {
var b = {
resource: j.kindToResource(a.kind),
group: a.group || ""
};
return !!m(a) && (!!d.checkResource(b.resource) && d.canI(b, "list", c.projectName));
}), c.project = b, c.context = e, c.kindSelector.disabled = !1, a.kind && o(a.kind, a.group) && (_.set(c, "kindSelector.selected.kind", a.kind), _.set(c, "kindSelector.selected.group", a.group || ""));
})), c.loadKind = l, c.$watch("kindSelector.selected", function() {
h.clear(), l();
});
var p = g("humanizeKind");
c.matchKind = function(a, b) {
return p(a).toLowerCase().indexOf(b.toLowerCase()) !== -1;
}, h.onActiveFiltersChanged(function(a) {
c.$evalAsync(function() {
c.resources = a.select(c.unfilteredResources), k();
});
});
} ]), angular.module("openshiftConsole").controller("PersistentVolumeClaimController", [ "$scope", "$routeParams", "DataService", "ProjectsService", "$filter", function(a, b, c, d, e) {
a.projectName = b.project, a.pvc = null, a.alerts = {}, a.renderOptions = a.renderOptions || {}, a.renderOptions.hideFilterWidget = !0, a.breadcrumbs = [ {
title: "Persistent Volume Claims",
link: "project/" + b.project + "/browse/storage"
}, {
title: b.pvc
} ];
var f = [], g = function(b, c) {
a.pvc = b, a.loaded = !0, "DELETED" === c && (a.alerts.deleted = {
type: "warning",
message: "This persistent volume claim has been deleted."
});
};
d.get(b.project).then(_.spread(function(d, h) {
a.project = d, a.projectContext = h, c.get("persistentvolumeclaims", b.pvc, h, {
errorNotification: !1
}).then(function(a) {
g(a), f.push(c.watchObject("persistentvolumeclaims", b.pvc, h, g));
}, function(b) {
a.loaded = !0, a.alerts.load = {
type: "error",
message: "The persistent volume claim details could not be loaded.",
details: e("getErrorDetails")(b)
};
}), a.$on("$destroy", function() {
c.unwatchAll(f);
});
}));
} ]), angular.module("openshiftConsole").controller("SetLimitsController", [ "$filter", "$location", "$parse", "$routeParams", "$scope", "APIService", "AuthorizationService", "BreadcrumbsService", "DataService", "LimitRangesService", "Navigate", "NotificationsService", "ProjectsService", function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
if (!d.kind || !d.name) return void k.toErrorPage("Kind or name parameter missing.");
var n = [ "Deployment", "DeploymentConfig", "ReplicaSet", "ReplicationController" ];
if (!_.includes(n, d.kind)) return void k.toErrorPage("Health checks are not supported for kind " + d.kind + ".");
var o = a("humanizeKind"), p = o(d.kind, !0) + " " + d.name;
e.name = d.name, "ReplicationController" !== d.kind && "ReplicaSet" !== d.kind || (e.showPodWarning = !0), e.renderOptions = {
hideFilterWidget: !0
}, e.breadcrumbs = h.getBreadcrumbs({
name: d.name,
kind: d.kind,
namespace: d.project,
subpage: "Edit Resource Limits"
});
var q = a("getErrorDetails"), r = function(a, b) {
l.addNotification({
id: "set-compute-limits-error",
type: "error",
message: a,
details: b
});
}, s = function() {
b.url(e.resourceURL);
}, t = function() {
l.hideNotification("set-compute-limits-error");
};
e.cancel = s, e.$on("$destroy", t), m.get(d.project).then(_.spread(function(a, b) {
var c = {
resource: f.kindToResource(d.kind),
group: d.group
};
if (!g.canI(c, "update", d.project)) return void k.toErrorPage("You do not have authority to update " + o(d.kind) + " " + d.name + ".", "access_denied");
i.get(c, e.name, b).then(function(d) {
var f = e.object = angular.copy(d);
e.breadcrumbs = h.getBreadcrumbs({
object: f,
project: a,
subpage: "Edit Resource Limits"
}), e.resourceURL = k.resourceURL(f), e.containers = _.get(f, "spec.template.spec.containers"), e.save = function() {
e.disableInputs = !0, t(), i.update(c, e.name, f, b).then(function() {
l.addNotification({
type: "success",
message: p + " was updated."
}), s();
}, function(a) {
e.disableInputs = !1, r(p + " could not be updated.", q(a));
});
};
}, function(a) {
r(p + " could not be loaded.", q(a));
});
var m = function() {
e.hideCPU || (e.cpuProblems = j.validatePodLimits(e.limitRanges, "cpu", e.containers, a)), e.memoryProblems = j.validatePodLimits(e.limitRanges, "memory", e.containers, a);
};
i.list("limitranges", b).then(function(a) {
e.limitRanges = a.by("metadata.name"), _.isEmpty(e.limitRanges) || e.$watch("containers", m, !0);
});
}));
} ]), angular.module("openshiftConsole").controller("EditBuildConfigController", [ "$scope", "$filter", "$location", "$routeParams", "$window", "ApplicationGenerator", "AuthorizationService", "DataService", "Navigate", "NotificationsService", "ProjectsService", "SOURCE_URL_PATTERN", "SecretsService", "keyValueEditorUtils", function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
a.projectName = d.project, a.buildConfig = null, a.alerts = {}, a.sourceURLPattern = l, a.options = {}, a.jenkinsfileOptions = {
type: "path"
}, a.selectTypes = {
ImageStreamTag: "Image Stream Tag",
ImageStreamImage: "Image Stream Image",
DockerImage: "Docker Image Repository"
}, a.buildFromTypes = [ "ImageStreamTag", "ImageStreamImage", "DockerImage" ], a.pushToTypes = [ "ImageStreamTag", "DockerImage", "None" ], a.jenkinsfileTypes = [ {
id: "path",
title: "From Source Repository"
}, {
id: "inline",
title: "Inline"
} ], a.view = {
advancedOptions: !1,
hasHooks: !1
}, a.breadcrumbs = [], d.isPipeline ? (a.breadcrumbs.push({
title: "Pipelines",
link: "project/" + d.project + "/browse/pipelines"
}), a.breadcrumbs.push({
title: d.buildconfig,
link: "project/" + d.project + "/browse/pipelines/" + d.buildconfig
})) : (a.breadcrumbs.push({
title: "Builds",
link: "project/" + d.project + "/browse/builds"
}), a.breadcrumbs.push({
title: d.buildconfig,
link: "project/" + d.project + "/browse/builds/" + d.buildconfig
})), a.breadcrumbs.push({
title: d.isPipeline ? "Edit Pipelines" : "Edit Builds"
}), a.imageOptions = {
from: {},
to: {},
fromSource: {}
}, a.sources = {
binary: !1,
dockerfile: !1,
git: !1,
images: !1,
contextDir: !1,
none: !0
}, a.triggers = {
githubWebhooks: [],
gitlabWebhooks: [],
bitbucketWebhooks: [],
genericWebhooks: [],
imageChangeTriggers: [],
builderImageChangeTrigger: {},
configChangeTrigger: {}
}, a.createTriggerSelect = {
selectedType: "",
options: [ {
type: "github",
label: "GitHub"
}, {
type: "gitlab",
label: "GitLab"
}, {
type: "bitbucket",
label: "Bitbucket"
}, {
type: "generic",
label: "Generic"
} ]
}, a.runPolicyTypes = [ "Serial", "Parallel", "SerialLatestOnly" ], a.buildHookTypes = [ {
id: "command",
label: "Command"
}, {
id: "script",
label: "Shell Script"
}, {
id: "args",
label: "Arguments to default image entry point"
}, {
id: "commandArgs",
label: "Command with arguments"
}, {
id: "scriptArgs",
label: "Shell script with arguments"
} ], a.buildHookSelection = {
type: {}
}, a.getArgumentsDescription = function() {
var b = _.get(a, "buildHookSelection.type.id", "");
switch (b) {
case "args":
return "Enter the arguments that will be appended to the default image entry point.";

case "commandArgs":
return "Enter the arguments that will be appended to the command.";

case "scriptArgs":
return "Enter the arguments that will be appended to the script.";
}
return null;
};
var o = function() {
var b = !_.isEmpty(_.get(a, "buildConfig.spec.postCommit.args")), c = !_.isEmpty(_.get(a, "buildConfig.spec.postCommit.command")), d = !!_.get(a, "buildConfig.spec.postCommit.script");
a.view.hasHooks = b || c || d;
var e;
e = b && c ? "commandArgs" : b && d ? "scriptArgs" : b ? "args" : d ? "script" : "command", a.buildHookSelection.type = _.find(a.buildHookTypes, {
id: e
});
}, p = function() {
if (a.view.hasHooks) switch (a.buildHookSelection.type.id) {
case "script":
delete a.updatedBuildConfig.spec.postCommit.command, delete a.updatedBuildConfig.spec.postCommit.args;
break;

case "command":
delete a.updatedBuildConfig.spec.postCommit.script, delete a.updatedBuildConfig.spec.postCommit.args;
break;

case "args":
delete a.updatedBuildConfig.spec.postCommit.script, delete a.updatedBuildConfig.spec.postCommit.command;
break;

case "scriptArgs":
delete a.updatedBuildConfig.spec.postCommit.command;
break;

case "commandArgs":
delete a.updatedBuildConfig.spec.postCommit.script;
} else delete a.updatedBuildConfig.spec.postCommit.command, delete a.updatedBuildConfig.spec.postCommit.args, delete a.updatedBuildConfig.spec.postCommit.script;
};
a.secrets = {};
var q = [], r = b("buildStrategy"), s = function() {
var b;
a.buildConfig ? (b = i.resourceURL(a.buildConfig), c.path(b)) : e.history.back();
};
a.cancel = s;
var t = function() {
j.hideNotification("edit-build-config-error"), j.hideNotification("edit-build-config-conflict"), j.hideNotification("edit-build-config-deleted");
};
a.$on("$destroy", t), k.get(d.project).then(_.spread(function(c, e) {
return a.project = c, a.context = e, g.canI("buildconfigs", "update", d.project) ? void h.get("buildconfigs", d.buildconfig, e, {
errorNotification: !1
}).then(function(b) {
a.buildConfig = b, o(), a.updatedBuildConfig = angular.copy(a.buildConfig), a.buildStrategy = r(a.updatedBuildConfig), a.strategyType = a.buildConfig.spec.strategy.type, a.envVars = a.buildStrategy.env || [], a.triggers = u(a.triggers, a.buildConfig.spec.triggers), a.sources = B(a.sources, a.buildConfig.spec.source), _.has(b, "spec.strategy.jenkinsPipelineStrategy.jenkinsfile") && (a.jenkinsfileOptions.type = "inline"), h.list("secrets", e).then(function(b) {
var c = m.groupSecretsByType(b), d = _.mapValues(c, function(a) {
return _.map(a, "metadata.name");
});
a.secrets.secretsByType = _.each(d, function(a) {
a.unshift("");
}), y();
});
var c = function(a, c) {
a.type = c && c.kind ? c.kind : "None";
var d = {}, e = "", f = "";
d = "ImageStreamTag" === a.type ? {
namespace: c.namespace || b.metadata.namespace,
imageStream: c.name.split(":")[0],
tagObject: {
tag: c.name.split(":")[1]
}
} : {
namespace: "",
imageStream: "",
tagObject: {
tag: ""
}
}, e = "ImageStreamImage" === a.type ? (c.namespace || b.metadata.namespace) + "/" + c.name : "", f = "DockerImage" === a.type ? c.name : "", a.imageStreamTag = d, a.imageStreamImage = e, a.dockerImage = f;
};
c(a.imageOptions.from, a.buildStrategy.from), c(a.imageOptions.to, a.updatedBuildConfig.spec.output.to), a.sources.images && (a.sourceImages = a.buildConfig.spec.source.images, 1 === _.size(a.sourceImages) ? (a.imageSourceTypes = angular.copy(a.buildFromTypes), c(a.imageOptions.fromSource, a.sourceImages[0].from), a.imageSourcePaths = _.map(a.sourceImages[0].paths, function(a) {
return {
name: a.sourcePath,
value: a.destinationDir
};
})) : (a.imageSourceFromObjects = [], a.sourceImages.forEach(function(b) {
a.imageSourceFromObjects.push(b.from);
}))), a.options.forcePull = !!a.buildStrategy.forcePull, "Docker" === a.strategyType && (a.options.noCache = !!a.buildConfig.spec.strategy.dockerStrategy.noCache, a.buildFromTypes.push("None")), q.push(h.watchObject("buildconfigs", d.buildconfig, e, function(b, c) {
"MODIFIED" === c && j.addNotification({
id: "edit-build-config-conflict",
type: "warning",
message: "This build configuration has changed since you started editing it. You'll need to copy any changes you've made and edit again."
}), "DELETED" === c && (j.addNotification({
id: "edit-build-config-deleted",
type: "warning",
message: "This build configuration has been deleted."
}), a.disableInputs = !0), a.buildConfig = b;
})), a.loaded = !0;
}, function(c) {
a.loaded = !0, a.alerts.load = {
type: "error",
message: "The build configuration details could not be loaded.",
details: "Reason: " + b("getErrorDetails")(c)
};
}) : void i.toErrorPage("You do not have authority to update build config " + d.buildconfig + ".", "access_denied");
}));
var u = function(c, d) {
function e(c, d) {
var e = b("imageObjectRef")(c, a.projectName), f = b("imageObjectRef")(d, a.projectName);
return e === f;
}
var f = r(a.buildConfig).from;
return d.forEach(function(a) {
switch (a.type) {
case "Generic":
c.genericWebhooks.push({
disabled: !1,
data: a
});
break;

case "GitHub":
c.githubWebhooks.push({
disabled: !1,
data: a
});
break;

case "GitLab":
c.gitlabWebhooks.push({
disabled: !1,
data: a
});
break;

case "Bitbucket":
c.bitbucketWebhooks.push({
disabled: !1,
data: a
});
break;

case "ImageChange":
var b = a.imageChange.from;
b || (b = f);
var d = {
present: !0,
data: a
};
e(b, f) ? c.builderImageChangeTrigger = d : c.imageChangeTriggers.push(d);
break;

case "ConfigChange":
c.configChangeTrigger = {
present: !0,
data: a
};
}
}), _.isEmpty(c.builderImageChangeTrigger) && (c.builderImageChangeTrigger = {
present: !1,
data: {
imageChange: {},
type: "ImageChange"
}
}), _.isEmpty(c.configChangeTrigger) && (c.configChangeTrigger = {
present: !1,
data: {
type: "ConfigChange"
}
}), c;
};
a.aceLoaded = function(a) {
var b = a.getSession();
b.setOption("tabSize", 2), b.setOption("useSoftTabs", !0), a.$blockScrolling = 1 / 0;
};
var v = function(a) {
return _.map(n.compactEntries(a), function(a) {
return {
sourcePath: a.name,
destinationDir: a.value
};
});
}, w = function(b) {
var c = {};
switch (b.type) {
case "ImageStreamTag":
c = {
kind: b.type,
name: b.imageStreamTag.imageStream + ":" + b.imageStreamTag.tagObject.tag
}, b.imageStreamTag.namespace !== a.buildConfig.metadata.namespace && (c.namespace = b.imageStreamTag.namespace);
break;

case "DockerImage":
c = {
kind: b.type,
name: b.dockerImage
};
break;

case "ImageStreamImage":
var d = b.imageStreamImage.split("/");
c = {
kind: b.type,
name: _.last(d)
}, c.namespace = 1 !== _.size(d) ? _.head(d) : a.buildConfig.metadata.namespace;
}
return c;
}, x = function() {
var b = [].concat(a.triggers.githubWebhooks, a.triggers.gitlabWebhooks, a.triggers.bitbucketWebhooks, a.triggers.genericWebhooks, a.triggers.imageChangeTriggers, a.triggers.builderImageChangeTrigger, a.triggers.configChangeTrigger);
return b = _.filter(b, function(a) {
return _.has(a, "disabled") && !a.disabled || a.present;
}), b = _.map(b, "data");
}, y = function() {
switch (a.secrets.picked = {
gitSecret: a.buildConfig.spec.source.sourceSecret ? [ a.buildConfig.spec.source.sourceSecret ] : [ {
name: ""
} ],
pullSecret: r(a.buildConfig).pullSecret ? [ r(a.buildConfig).pullSecret ] : [ {
name: ""
} ],
pushSecret: a.buildConfig.spec.output.pushSecret ? [ a.buildConfig.spec.output.pushSecret ] : [ {
name: ""
} ]
}, a.strategyType) {
case "Source":
case "Docker":
a.secrets.picked.sourceSecrets = a.buildConfig.spec.source.secrets || [ {
secret: {
name: ""
},
destinationDir: ""
} ];
break;

case "Custom":
a.secrets.picked.sourceSecrets = r(a.buildConfig).secrets || [ {
secretSource: {
name: ""
},
mountPath: ""
} ];
}
}, z = function(a, b, c) {
b.name ? a[c] = b : delete a[c];
}, A = function(b, c) {
var d = "Custom" === a.strategyType ? "secretSource" : "secret", e = _.filter(c, function(a) {
return a[d].name;
});
_.isEmpty(e) ? delete b.secrets : b.secrets = e;
}, B = function(a, b) {
return "None" === b.type ? a : (a.none = !1, angular.forEach(b, function(b, c) {
a[c] = !0;
}), a);
};
a.addWebhookTrigger = function(b) {
if (b) {
var c = {
disabled: !1,
data: {
type: b
}
}, d = _.find(a.createTriggerSelect.options, function(a) {
return a.label === b;
}).type;
c.data[d] = {
secret: f._generateSecret()
}, a.triggers[d + "Webhooks"].push(c);
}
}, a.save = function() {
switch (a.disableInputs = !0, p(), r(a.updatedBuildConfig).forcePull = a.options.forcePull, a.strategyType) {
case "Docker":
r(a.updatedBuildConfig).noCache = a.options.noCache;
break;

case "JenkinsPipeline":
"path" === a.jenkinsfileOptions.type ? delete a.updatedBuildConfig.spec.strategy.jenkinsPipelineStrategy.jenkinsfile : delete a.updatedBuildConfig.spec.strategy.jenkinsPipelineStrategy.jenkinsfilePath;
}
switch (a.sources.images && !_.isEmpty(a.sourceImages) && (a.updatedBuildConfig.spec.source.images[0].paths = v(a.imageSourcePaths), a.updatedBuildConfig.spec.source.images[0].from = w(a.imageOptions.fromSource)), "None" === a.imageOptions.from.type ? delete r(a.updatedBuildConfig).from : r(a.updatedBuildConfig).from = w(a.imageOptions.from), "None" === a.imageOptions.to.type ? delete a.updatedBuildConfig.spec.output.to : a.updatedBuildConfig.spec.output.to = w(a.imageOptions.to), r(a.updatedBuildConfig).env = n.compactEntries(a.envVars), z(a.updatedBuildConfig.spec.source, _.head(a.secrets.picked.gitSecret), "sourceSecret"), z(r(a.updatedBuildConfig), _.head(a.secrets.picked.pullSecret), "pullSecret"), z(a.updatedBuildConfig.spec.output, _.head(a.secrets.picked.pushSecret), "pushSecret"), a.strategyType) {
case "Source":
case "Docker":
A(a.updatedBuildConfig.spec.source, a.secrets.picked.sourceSecrets);
break;

case "Custom":
A(r(a.updatedBuildConfig), a.secrets.picked.sourceSecrets);
}
a.updatedBuildConfig.spec.triggers = x(), t(), h.update("buildconfigs", a.updatedBuildConfig.metadata.name, a.updatedBuildConfig, a.context).then(function() {
j.addNotification({
type: "success",
message: "Build config " + a.updatedBuildConfig.metadata.name + " was successfully updated."
}), s();
}, function(c) {
a.disableInputs = !1, j.addNotification({
id: "edit-build-config-error",
type: "error",
message: "An error occurred updating build config " + a.updatedBuildConfig.metadata.name + ".",
details: b("getErrorDetails")(c)
});
});
}, a.$on("$destroy", function() {
h.unwatchAll(q);
});
} ]), angular.module("openshiftConsole").controller("EditConfigMapController", [ "$filter", "$routeParams", "$scope", "$window", "DataService", "BreadcrumbsService", "Navigate", "NotificationsService", "ProjectsService", "gettext", "gettextCatalog", function(a, b, c, d, e, f, g, h, i, j, k) {
var l = [];
c.forms = {}, c.projectName = b.project, c.breadcrumbs = f.getBreadcrumbs({
name: b.configMap,
kind: "ConfigMap",
namespace: b.project,
subpage: "Edit Config Map"
});
var m = function(a) {
return _.get(a, "metadata.resourceVersion");
}, n = function() {
h.hideNotification("edit-config-map-error");
}, o = function() {
d.history.back();
};
c.cancel = o, i.get(b.project).then(_.spread(function(d, i) {
e.get("configmaps", b.configMap, i, {
errorNotification: !1
}).then(function(a) {
c.loaded = !0, c.breadcrumbs = f.getBreadcrumbs({
name: b.configMap,
object: a,
project: d,
subpage: k.getString(j("Edit Config Map"))
}), c.configMap = a, l.push(e.watchObject("configmaps", b.configMap, i, function(a, b) {
c.resourceChanged = m(a) !== m(c.configMap), c.resourceDeleted = "DELETED" === b;
}));
}, function(c) {
g.toErrorPage("Could not load config map " + b.configMap + ". " + a("getErrorDetails")(c));
}), c.updateConfigMap = function() {
c.forms.editConfigMapForm.$valid && (n(), c.disableInputs = !0, e.update("configmaps", c.configMap.metadata.name, c.configMap, i).then(function() {
h.addNotification({
type: "success",
message: "Config map " + c.configMap.metadata.name + " successfully updated."
}), o();
}, function(b) {
c.disableInputs = !1, h.addNotification({
id: "edit-config-map-error",
type: "error",
message: "An error occurred updating the config map.",
details: a("getErrorDetails")(b)
});
}));
}, c.$on("$destroy", function() {
e.unwatchAll(l), n();
});
}));
} ]), angular.module("openshiftConsole").controller("EditDeploymentConfigController", [ "$scope", "$filter", "$location", "$routeParams", "$uibModal", "$window", "AuthorizationService", "BreadcrumbsService", "DataService", "EnvironmentService", "Navigate", "NotificationsService", "ProjectsService", "SecretsService", "keyValueEditorUtils", function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
a.projectName = d.project, a.deploymentConfig = null, a.alerts = {}, a.view = {
advancedStrategyOptions: !1,
advancedImageOptions: !1
}, a.triggers = {}, a.breadcrumbs = h.getBreadcrumbs({
name: d.name,
kind: d.kind,
namespace: d.project,
subpage: "Edit Deployment Config"
}), a.deploymentConfigStrategyTypes = [ "Recreate", "Rolling", "Custom" ];
var p = b("orderByDisplayName"), q = b("getErrorDetails"), r = function(b, c) {
a.alerts["from-value-objects"] = {
type: "error",
message: b,
details: c
};
}, s = [], t = [], u = [];
a.valueFromObjects = [];
var v = function(a) {
switch (a) {
case "Recreate":
return "recreateParams";

case "Rolling":
return "rollingParams";

case "Custom":
return "customParams";

default:
return void Logger.error("Unknown deployment strategy type: " + a);
}
};
m.get(d.project).then(_.spread(function(c, e) {
return a.project = c, a.context = e, g.canI("deploymentconfigs", "update", d.project) ? void i.get("deploymentconfigs", d.deploymentconfig, e, {
errorNotification: !1
}).then(function(b) {
a.deploymentConfig = b, a.breadcrumbs = h.getBreadcrumbs({
object: b,
project: c,
subpage: "Edit"
});
var f = function(b, c) {
var d = {}, e = _.filter(c, {
type: "ImageChange"
});
return _.each(b, function(b) {
var c = _.find(e, function(a) {
return _.includes(a.imageChangeParams.containerNames, b.name);
}), f = {};
if (b.env = b.env || [], d[b.name] = {
env: b.env,
image: b.image,
hasDeploymentTrigger: !_.isEmpty(c)
}, c) {
var g = c.imageChangeParams.from, h = g.name.split(":");
f = {
data: c,
istag: {
namespace: g.namespace || a.projectName,
imageStream: h[0],
tagObject: {
tag: h[1]
}
},
automatic: _.get(c, "imageChangeParams.automatic", !1)
};
} else f = {
istag: {
namespace: "",
imageStream: ""
},
automatic: !0
};
_.set(d, [ b.name, "triggerData" ], f);
}), d;
};
a.updatedDeploymentConfig = angular.copy(a.deploymentConfig), a.containerNames = _.map(a.deploymentConfig.spec.template.spec.containers, "name"), a.containerConfigByName = f(a.updatedDeploymentConfig.spec.template.spec.containers, a.updatedDeploymentConfig.spec.triggers), a.secrets = {
pullSecrets: angular.copy(a.deploymentConfig.spec.template.spec.imagePullSecrets) || [ {
name: ""
} ]
}, a.volumeNames = _.map(a.deploymentConfig.spec.template.spec.volumes, "name"), a.strategyData = angular.copy(a.deploymentConfig.spec.strategy), a.originalStrategy = a.strategyData.type, a.strategyParamsPropertyName = v(a.strategyData.type), a.triggers.hasConfigTrigger = _.some(a.updatedDeploymentConfig.spec.triggers, {
type: "ConfigChange"
}), "Custom" !== a.strategyData.type || _.has(a.strategyData, "customParams.environment") || (a.strategyData.customParams.environment = []), i.list("configmaps", e, null, {
errorNotification: !1
}).then(function(b) {
t = p(b.by("metadata.name")), a.availableConfigMaps = t, a.valueFromObjects = t.concat(u);
}, function(a) {
403 !== a.status && r("Could not load config maps", q(a));
}), i.list("secrets", e, null, {
errorNotification: !1
}).then(function(b) {
u = p(b.by("metadata.name")), a.availableSecrets = u, a.valueFromObjects = t.concat(u);
var c = n.groupSecretsByType(b), d = _.mapValues(c, function(a) {
return _.map(a, "metadata.name");
});
a.secretsByType = _.each(d, function(a) {
a.unshift("");
});
}, function(a) {
403 !== a.status && r("Could not load secrets", q(a));
}), s.push(i.watchObject("deploymentconfigs", d.deploymentconfig, e, function(b, c) {
"MODIFIED" === c && (a.alerts["updated/deleted"] = {
type: "warning",
message: "This deployment configuration has changed since you started editing it. You'll need to copy any changes you've made and edit again."
}), "DELETED" === c && (a.alerts["updated/deleted"] = {
type: "warning",
message: "This deployment configuration has been deleted."
}, a.disableInputs = !0), a.deploymentConfig = b;
})), a.loaded = !0;
}, function(c) {
a.loaded = !0, a.alerts.load = {
type: "error",
message: "The deployment configuration details could not be loaded.",
details: b("getErrorDetails")(c)
};
}) : void k.toErrorPage("You do not have authority to update deployment config " + d.deploymentconfig + ".", "access_denied");
}));
var w = function() {
return "Custom" !== a.strategyData.type && "Custom" !== a.originalStrategy && a.strategyData.type !== a.originalStrategy;
}, x = function(b) {
if (!_.has(a.strategyData, b)) {
var c = e.open({
animation: !0,
templateUrl: "views/modals/confirm.html",
controller: "ConfirmModalController",
resolve: {
modalConfig: function() {
return {
alerts: a.alerts,
message: "Some of your existing " + a.originalStrategy.toLowerCase() + " strategy parameters can be used for the " + a.strategyData.type.toLowerCase() + " strategy. Keep parameters?",
details: "The timeout parameter and any pre or post lifecycle hooks will be copied from " + a.originalStrategy.toLowerCase() + " strategy to " + a.strategyData.type.toLowerCase() + " strategy. After saving the changes, " + a.originalStrategy.toLowerCase() + " strategy parameters will be removed.",
okButtonText: "Yes",
okButtonClass: "btn-primary",
cancelButtonText: "No"
};
}
}
});
c.result.then(function() {
a.strategyData[b] = angular.copy(a.strategyData[v(a.originalStrategy)]);
}, function() {
a.strategyData[b] = {};
});
}
};
a.strategyChanged = function() {
var b = v(a.strategyData.type);
w() ? x(b) : _.has(a.strategyData, b) || ("Custom" !== a.strategyData.type ? a.strategyData[b] = {} : a.strategyData[b] = {
image: "",
command: [],
environment: []
}), a.strategyParamsPropertyName = b;
};
var y = function(a, b, c, d) {
var e = {
kind: "ImageStreamTag",
namespace: b.namespace,
name: b.imageStream + ":" + b.tagObject.tag
};
return c ? (c.imageChangeParams.from = e, c.imageChangeParams.automatic = d) : c = {
type: "ImageChange",
imageChangeParams: {
automatic: d,
containerNames: [ a ],
from: e
}
}, c;
}, z = function() {
var b = _.reject(a.updatedDeploymentConfig.spec.triggers, function(a) {
return "ImageChange" === a.type || "ConfigChange" === a.type;
});
return _.each(a.containerConfigByName, function(c, d) {
if (c.hasDeploymentTrigger) b.push(y(d, c.triggerData.istag, c.triggerData.data, c.triggerData.automatic)); else {
var e = _.find(a.updatedDeploymentConfig.spec.template.spec.containers, {
name: d
});
e.image = c.image;
}
}), a.triggers.hasConfigTrigger && b.push({
type: "ConfigChange"
}), b;
}, A = function() {
l.hideNotification("edit-deployment-config-error");
};
a.save = function() {
if (a.disableInputs = !0, _.each(a.containerConfigByName, function(b, c) {
var d = _.find(a.updatedDeploymentConfig.spec.template.spec.containers, {
name: c
});
d.env = o.compactEntries(b.env);
}), w() && delete a.strategyData[v(a.originalStrategy)], "Rolling" === a.strategyData.type) {
var d = a.strategyData[a.strategyParamsPropertyName].maxSurge, e = Number(d);
"" === d ? a.strategyData[a.strategyParamsPropertyName].maxSurge = null : _.isFinite(e) && (a.strategyData[a.strategyParamsPropertyName].maxSurge = e);
var f = a.strategyData[a.strategyParamsPropertyName].maxUnavailable, g = Number(f);
"" === f ? a.strategyData[a.strategyParamsPropertyName].maxUnavailable = null : _.isFinite(g) && (a.strategyData[a.strategyParamsPropertyName].maxUnavailable = g);
}
"Custom" !== a.strategyData.type && _.each([ "pre", "mid", "post" ], function(b) {
_.has(a.strategyData, [ a.strategyParamsPropertyName, b, "execNewPod", "env" ]) && (a.strategyData[a.strategyParamsPropertyName][b].execNewPod.env = o.compactEntries(a.strategyData[a.strategyParamsPropertyName][b].execNewPod.env));
}), _.has(a, "strategyData.customParams.environment") && (a.strategyData.customParams.environment = o.compactEntries(a.strategyData.customParams.environment)), a.updatedDeploymentConfig.spec.template.spec.imagePullSecrets = _.filter(a.secrets.pullSecrets, "name"), a.updatedDeploymentConfig.spec.strategy = a.strategyData, a.updatedDeploymentConfig.spec.triggers = z(), A(), i.update("deploymentconfigs", a.updatedDeploymentConfig.metadata.name, a.updatedDeploymentConfig, a.context).then(function() {
l.addNotification({
type: "success",
message: "Deployment config " + a.updatedDeploymentConfig.metadata.name + " was successfully updated."
});
var b = k.resourceURL(a.updatedDeploymentConfig);
c.url(b);
}, function(c) {
a.disableInputs = !1, l.addNotification({
id: "edit-deployment-config-error",
type: "error",
message: "An error occurred updating deployment config " + a.updatedDeploymentConfig.metadata.name + ".",
details: b("getErrorDetails")(c)
});
});
}, a.cancel = function() {
f.history.back();
}, a.$on("$destroy", function() {
i.unwatchAll(s), A();
});
} ]), angular.module("openshiftConsole").controller("EditAutoscalerController", [ "$scope", "$filter", "$routeParams", "$window", "APIService", "AuthorizationService", "BreadcrumbsService", "DataService", "HPAService", "MetricsService", "Navigate", "NotificationsService", "ProjectsService", "keyValueEditorUtils", function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
if (!c.kind || !c.name) return void k.toErrorPage("Kind or name parameter missing.");
var o = [ "Deployment", "DeploymentConfig", "HorizontalPodAutoscaler", "ReplicaSet", "ReplicationController" ];
if (!_.includes(o, c.kind)) return void k.toErrorPage("Autoscaling not supported for kind " + c.kind + ".");
a.kind = c.kind, a.name = c.name, "HorizontalPodAutoscaler" === c.kind ? a.disableInputs = !0 : (a.targetKind = c.kind, a.targetName = c.name), a.autoscaling = {
name: a.name
}, a.labels = [], j.isAvailable().then(function(b) {
a.metricsWarning = !b;
});
var p = b("getErrorDetails"), q = function() {
d.history.back();
};
a.cancel = q;
var r = function() {
l.hideNotification("edit-hpa-error");
};
a.$on("$destroy", r), m.get(c.project).then(_.spread(function(b, d) {
a.project = b;
var j = "HorizontalPodAutoscaler" === c.kind ? "update" : "create";
if (!f.canI({
resource: "horizontalpodautoscalers",
group: "autoscaling"
}, j, c.project)) return void k.toErrorPage("You do not have authority to " + j + " horizontal pod autoscalers in project " + c.project + ".", "access_denied");
var m = function() {
a.disableInputs = !0, r();
var b = {
apiVersion: "autoscaling/v1",
kind: "HorizontalPodAutoscaler",
metadata: {
name: a.autoscaling.name,
labels: n.mapEntries(n.compactEntries(a.labels))
},
spec: {
scaleTargetRef: {
kind: c.kind,
name: c.name,
apiVersion: "extensions/v1beta1",
subresource: "scale"
},
minReplicas: a.autoscaling.minReplicas,
maxReplicas: a.autoscaling.maxReplicas,
targetCPUUtilizationPercentage: a.autoscaling.targetCPU || a.autoscaling.defaultTargetCPU || null
}
};
h.create({
resource: "horizontalpodautoscalers",
group: "autoscaling"
}, null, b, d).then(function(a) {
l.addNotification({
type: "success",
message: "Horizontal pod autoscaler " + a.metadata.name + " successfully created."
}), q();
}, function(b) {
a.disableInputs = !1, l.addNotification({
id: "edit-hpa-error",
type: "error",
message: "An error occurred creating the horizontal pod autoscaler.",
details: p(b)
});
});
}, o = function(b) {
a.disableInputs = !0, b = angular.copy(b), b.metadata.labels = n.mapEntries(n.compactEntries(a.labels)), b.spec.minReplicas = a.autoscaling.minReplicas, b.spec.maxReplicas = a.autoscaling.maxReplicas, b.spec.targetCPUUtilizationPercentage = a.autoscaling.targetCPU || a.autoscaling.defaultTargetCPU || null, h.update({
resource: "horizontalpodautoscalers",
group: "autoscaling"
}, b.metadata.name, b, d).then(function(a) {
l.addNotification({
type: "success",
message: "Horizontal pod autoscaler " + a.metadata.name + " successfully updated."
}), q();
}, function(b) {
a.disableInputs = !1, l.addNotification({
id: "edit-hpa-error",
type: "error",
message: "An error occurred creating the horizontal pod autoscaler.",
details: p(b)
});
});
}, s = {};
s = "HorizontalPodAutoscaler" === c.kind ? {
resource: "horizontalpodautoscalers",
group: "autoscaling",
version: "v1"
} : {
resource: e.kindToResource(c.kind),
group: c.group
}, h.get(s, c.name, d).then(function(e) {
if (a.labels = _.map(_.get(e, "metadata.labels", {}), function(a, b) {
return {
name: b,
value: a
};
}), "HorizontalPodAutoscaler" === c.kind) a.targetKind = _.get(e, "spec.scaleTargetRef.kind"), a.targetName = _.get(e, "spec.scaleTargetRef.name"), _.assign(a.autoscaling, {
minReplicas: _.get(e, "spec.minReplicas"),
maxReplicas: _.get(e, "spec.maxReplicas"),
targetCPU: _.get(e, "spec.targetCPUUtilizationPercentage")
}), a.disableInputs = !1, a.save = function() {
o(e);
}, a.breadcrumbs = g.getBreadcrumbs({
name: a.targetName,
kind: a.targetKind,
namespace: c.project,
project: b,
subpage: "Autoscale"
}); else {
a.breadcrumbs = g.getBreadcrumbs({
object: e,
project: b,
subpage: "Autoscale"
}), a.save = m;
var f = {}, j = function() {
var c = _.get(e, "spec.template.spec.containers", []);
a.showCPURequestWarning = !i.hasCPURequest(c, f, b);
};
h.list("limitranges", d).then(function(a) {
f = a.by("metadata.name"), j();
});
}
});
}));
} ]), angular.module("openshiftConsole").controller("EditHealthChecksController", [ "$filter", "$location", "$routeParams", "$scope", "AuthorizationService", "BreadcrumbsService", "APIService", "DataService", "Navigate", "NotificationsService", "ProjectsService", function(a, b, c, d, e, f, g, h, i, j, k) {
if (!c.kind || !c.name) return void i.toErrorPage("Kind or name parameter missing.");
var l = [ "Deployment", "DeploymentConfig", "ReplicaSet", "ReplicationController" ];
if (!_.includes(l, c.kind)) return void i.toErrorPage("Health checks are not supported for kind " + c.kind + ".");
d.name = c.name, d.resourceURL = i.resourceURL(d.name, c.kind, c.project), d.breadcrumbs = f.getBreadcrumbs({
name: c.name,
kind: c.kind,
namespace: c.project,
subpage: "Edit Health Checks"
}), d.previousProbes = {};
var m = a("getErrorDetails"), n = a("upperFirst"), o = function(a, b) {
j.addNotification({
id: "add-health-check-error",
type: "error",
message: a,
details: b
});
}, p = function() {
b.url(d.resourceURL);
};
d.cancel = p;
var q = function() {
j.hideNotification("add-health-check-error");
};
d.$on("$destroy", q), k.get(c.project).then(_.spread(function(b, k) {
var l = a("humanizeKind")(c.kind) + ' "' + d.name + '"', r = {
resource: g.kindToResource(c.kind),
group: c.group
};
return e.canI(r, "update", c.project) ? void h.get(r, d.name, k).then(function(a) {
var e = d.object = angular.copy(a);
d.breadcrumbs = f.getBreadcrumbs({
object: e,
project: b,
subpage: "Edit Health Checks"
}), d.containers = _.get(e, "spec.template.spec.containers"), d.addProbe = function(a, b) {
a[b] = _.get(d.previousProbes, [ a.name, b ], {}), d.form.$setDirty();
}, d.removeProbe = function(a, b) {
_.set(d.previousProbes, [ a.name, b ], a[b]), delete a[b], d.form.$setDirty();
}, d.save = function() {
d.disableInputs = !0, q(), h.update(g.kindToResource(c.kind), d.name, e, k).then(function() {
j.addNotification({
type: "success",
message: n(l) + " was updated."
}), p();
}, function(a) {
d.disableInputs = !1, o(n(l) + " could not be updated.", m(a));
});
};
}, function(a) {
o(n(l) + " could not be loaded.", m(a));
}) : void i.toErrorPage("You do not have authority to update " + l + ".", "access_denied");
}));
} ]), angular.module("openshiftConsole").controller("EditRouteController", [ "$filter", "$location", "$routeParams", "$scope", "AuthorizationService", "DataService", "Navigate", "NotificationsService", "ProjectsService", "RoutesService", function(a, b, c, d, e, f, g, h, i, j) {
d.renderOptions = {
hideFilterWidget: !0
}, d.projectName = c.project, d.routeName = c.route, d.loading = !0, d.routeURL = g.resourceURL(d.routeName, "Route", d.projectName), d.breadcrumbs = [ {
title: "Routes",
link: "project/" + d.projectName + "/browse/routes"
}, {
title: d.routeName,
link: d.routeURL
}, {
title: "Edit"
} ];
var k = function() {
h.hideNotification("edit-route-error");
};
d.$on("$destroy", k);
var l = function() {
b.path(d.routeURL);
};
d.cancel = l, i.get(c.project).then(_.spread(function(b, i) {
if (d.project = b, !e.canI("routes", "update", c.project)) return void g.toErrorPage("You do not have authority to update route " + c.routeName + ".", "access_denied");
var m, n = a("orderByDisplayName"), o = function() {
g.toErrorPage('Editing routes with non-service targets is unsupported. You can edit the route with the "Edit YAML" action instead.');
};
f.get("routes", d.routeName, i).then(function(a) {
if ("Service" !== a.spec.to.kind) return void o();
m = angular.copy(a);
var b = _.get(m, "spec.host"), c = "Subdomain" === _.get(m, "spec.wildcardPolicy");
c && (b = "*." + j.getSubdomain(m)), d.routing = {
host: b,
wildcardPolicy: _.get(m, "spec.wildcardPolicy"),
path: _.get(m, "spec.path"),
targetPort: _.get(m, "spec.port.targetPort"),
tls: angular.copy(_.get(m, "spec.tls"))
}, f.list("services", i).then(function(a) {
d.loading = !1;
var b = a.by("metadata.name");
d.routing.to = m.spec.to, d.routing.alternateServices = [], _.each(_.get(m, "spec.alternateBackends"), function(a) {
return "Service" !== a.kind ? (o(), !1) : void d.routing.alternateServices.push(a);
}), d.services = n(b);
});
}, function() {
g.toErrorPage("Could not load route " + d.routeName + ".");
});
var p = function() {
var a = angular.copy(m), b = _.get(d, "routing.to.name");
_.set(a, "spec.to.name", b);
var c = _.get(d, "routing.to.weight");
isNaN(c) || _.set(a, "spec.to.weight", c), a.spec.path = d.routing.path;
var e = d.routing.targetPort;
e ? _.set(a, "spec.port.targetPort", e) : delete a.spec.port, _.get(d, "routing.tls.termination") ? (a.spec.tls = d.routing.tls, "passthrough" === a.spec.tls.termination && (delete a.spec.path, delete a.spec.tls.certificate, delete a.spec.tls.key, delete a.spec.tls.caCertificate), "reencrypt" !== a.spec.tls.termination && delete a.spec.tls.destinationCACertificate) : delete a.spec.tls;
var f = _.get(d, "routing.alternateServices", []);
return _.isEmpty(f) ? delete a.spec.alternateBackends : a.spec.alternateBackends = _.map(f, function(a) {
return {
kind: "Service",
name: a.name,
weight: a.weight
};
}), a;
};
d.updateRoute = function() {
if (d.form.$valid) {
k(), d.disableInputs = !0;
var b = p();
f.update("routes", d.routeName, b, i).then(function() {
h.addNotification({
type: "success",
message: "Route " + d.routeName + " was successfully updated."
}), l();
}, function(b) {
d.disableInputs = !1, h.addNotification({
type: "error",
id: "edit-route-error",
message: "An error occurred updating route " + d.routeName + ".",
details: a("getErrorDetails")(b)
});
});
}
};
}));
} ]), angular.module("openshiftConsole").controller("EditYAMLController", [ "$scope", "$filter", "$location", "$routeParams", "$window", "APIService", "AuthorizationService", "BreadcrumbsService", "DataService", "Navigate", "NotificationsService", "ProjectsService", function(a, b, c, d, e, f, g, h, i, j, k, l) {
if (!d.kind || !d.name) return void j.toErrorPage("Kind or name parameter missing.");
var m = b("humanizeKind");
a.alerts = {}, a.name = d.name, a.resourceURL = j.resourceURL(a.name, d.kind, d.project), a.breadcrumbs = [ {
title: d.name,
link: d.returnURL
}, {
title: "Edit YAML"
} ];
var n = function() {
return a.modified = !1, d.returnURL ? void c.url(d.returnURL) : void e.history.back();
}, o = [];
l.get(d.project).then(_.spread(function(c, e) {
var h = {
resource: f.kindToResource(d.kind),
group: d.group
};
return g.canI(h, "update", d.project) ? (i.get(h, a.name, e, {
errorNotification: !1
}).then(function(c) {
var g = c;
_.set(a, "updated.resource", angular.copy(c)), a.$watch("updated.resource", function(b, c) {
b !== c && (a.modified = !0);
});
var j = function(a) {
return _.get(a, "metadata.resourceVersion");
};
a.save = function() {
var c = a.updated.resource;
if (a.modified = !1, c.kind !== g.kind) return void (a.error = {
message: "Cannot change resource kind (original: " + g.kind + ", modified: " + (c.kind || "<unspecified>") + ")."
});
var e = f.objectToResourceGroupVersion(g), h = f.objectToResourceGroupVersion(c);
return h ? h.group !== e.group ? void (a.error = {
message: "Cannot change resource group (original: " + (e.group || "<none>") + ", modified: " + (h.group || "<none>") + ")."
}) : f.apiInfo(h) ? (a.updatingNow = !0, void i.update(e, g.metadata.name, c, {
namespace: g.metadata.namespace
}).then(function(b) {
var e = _.get(c, "metadata.resourceVersion"), f = _.get(b, "metadata.resourceVersion");
return f === e ? (a.alerts["no-changes-applied"] = {
type: "warning",
message: "No changes were applied to " + m(d.kind) + " " + d.name + ".",
details: "Make sure any new fields you may have added are supported API fields."
}, void (a.updatingNow = !1)) : (k.addNotification({
type: "success",
message: m(d.kind, !0) + " " + d.name + " was successfully updated."
}), void n());
}, function(c) {
a.updatingNow = !1, a.error = {
message: b("getErrorDetails")(c)
};
})) : void (a.error = {
message: f.unsupportedObjectKindOrVersion(c)
}) : void (a.error = {
message: f.invalidObjectKindOrVersion(c)
});
}, a.cancel = function() {
n();
}, o.push(i.watchObject(h, a.name, e, function(b, c) {
a.resourceChanged = j(b) !== j(g), a.resourceDeleted = "DELETED" === c;
}, {
errorNotification: !1
}));
}, function(a) {
j.toErrorPage("Could not load " + m(d.kind) + " '" + d.name + "'. " + b("getErrorDetails")(a));
}), void a.$on("$destroy", function() {
i.unwatchAll(o);
})) : void j.toErrorPage("You do not have authority to update " + m(d.kind) + " " + d.name + ".", "access_denied");
}));
} ]), angular.module("openshiftConsole").controller("BrowseCategoryController", [ "$scope", "$filter", "$location", "$q", "$routeParams", "$uibModal", "Constants", "DataService", "LabelFilter", "Navigate", "ProjectsService", "gettext", function(a, b, c, d, e, f, g, h, i, j, k, l) {
a.projectName = e.project;
var m = function(b, c) {
var d;
return _.some(b, function(b) {
if (d = _.find(b.items, {
id: c
})) {
a.category = d;
var e = _.get(d, "subcategories", []);
return a.subcategories = [ {
id: "",
label: ""
} ].concat(e), !0;
}
return !1;
}), d;
}, n = g.CATALOG_CATEGORIES, o = "none" === e.category ? "" : e.category;
if (a.category = m(n, o), !a.category) return void j.toErrorPage("Catalog category " + e.category + " not found.");
var p, q;
return e.subcategory && (p = a.category, o = "none" === e.subcategory ? "" : e.subcategory, q = _.get(a.category, "subcategories", []), a.category = m(q, o), !a.category) ? void j.toErrorPage("Catalog category " + e.category + "/" + e.subcategory + " not found.") : (a.alerts = a.alerts || {}, void k.get(e.project).then(_.spread(function(b, c) {
a.project = b, a.context = c, h.list("imagestreams", {
namespace: "openshift"
}).then(function(b) {
a.openshiftImageStreams = b.by("metadata.name");
}), h.list("templates", {
namespace: "openshift"
}, null, {
partialObjectMetadataList: !0
}).then(function(b) {
a.openshiftTemplates = b.by("metadata.name");
}), "openshift" === e.project ? (a.projectImageStreams = [], a.projectTemplates = []) : (h.list("imagestreams", c).then(function(b) {
a.projectImageStreams = b.by("metadata.name");
}), h.list("templates", c, null, {
partialObjectMetadataList: !0
}).then(function(b) {
a.projectTemplates = b.by("metadata.name");
}));
})));
} ]), angular.module("openshiftConsole").controller("CreateFromImageController", [ "$scope", "$filter", "$parse", "$q", "$routeParams", "$uibModal", "APIService", "ApplicationGenerator", "DataService", "HPAService", "ImagesService", "LimitRangesService", "Logger", "MetricsService", "Navigate", "NotificationsService", "ProjectsService", "QuotaService", "SOURCE_URL_PATTERN", "SecretsService", "TaskList", "failureObjectNameFilter", "keyValueEditorUtils", "gettext", "gettextCatalog", function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y) {
var z = b("displayName"), A = b("humanize");
a.projectName = e.project, a.sourceURLPattern = s;
var B = e.imageStream;
if (!B) return void o.toErrorPage("Cannot create from source: a base image was not specified");
if (!e.imageTag) return void o.toErrorPage("Cannot create from source: a base image tag was not specified");
a.displayName = e.displayName, a.advancedOptions = "true" === e.advanced;
var C = {
name: "app",
value: ""
}, D = b("orderByDisplayName"), E = b("getErrorDetails"), F = {}, G = function() {
p.hideNotification("create-builder-list-config-maps-error"), p.hideNotification("create-builder-list-secrets-error"), _.each(F, function(a) {
!a.id || "error" !== a.type && "warning" !== a.type || p.hideNotification(a.id);
});
};
a.$on("$destroy", G), q.get(e.project).then(_.spread(function(b, c) {
function g(d) {
d.name = e.name, d.imageName = B, d.imageTag = e.imageTag, d.namespace = e.namespace, d.buildConfig = {
buildOnSourceChange: !0,
buildOnImageChange: !0,
buildOnConfigChange: !0,
secrets: {
gitSecret: [ {
name: ""
} ]
},
sourceUrl: e.sourceURI,
gitRef: e.sourceRef,
contextDir: e.contextDir
}, d.buildConfigEnvVars = [], d.deploymentConfig = {
deployOnNewImage: !0,
deployOnConfigChange: !0
}, d.DCEnvVarsFromImage, d.DCEnvVarsFromUser = [], d.routing = {
include: !0,
portOptions: []
}, d.labelArray = [ C ], d.annotations = {}, d.scaling = {
replicas: 1,
autoscale: !1,
autoscaleOptions: [ {
label: "Manual",
value: !1
}, {
label: "Automatic",
value: !0
} ]
}, d.container = {
resources: {}
}, d.cpuRequestCalculated = l.isRequestCalculated("cpu", b), d.cpuLimitCalculated = l.isLimitCalculated("cpu", b), d.memoryRequestCalculated = l.isRequestCalculated("memory", b), d.fillSampleRepo = function() {
var a;
(d.image || d.image.metadata || d.image.metadata.annotations) && (a = d.image.metadata.annotations, d.buildConfig.sourceUrl = a.sampleRepo || "", d.buildConfig.gitRef = a.sampleRef || "", d.buildConfig.contextDir = a.sampleContextDir || "", (a.sampleRef || a.sampleContextDir) && (d.advancedSourceOptions = !0));
}, d.usingSampleRepo = function() {
return d.buildConfig.sourceUrl === _.get(d, "image.metadata.annotations.sampleRepo");
}, n.isAvailable().then(function(b) {
a.metricsWarning = !b;
});
var f = [], g = [];
a.valueFromObjects = [], i.list("configmaps", c, null, {
errorNotification: !1
}).then(function(b) {
f = D(b.by("metadata.name")), a.valueFromObjects = f.concat(g);
}, function(a) {
403 !== a.code && p.addNotification({
id: "create-builder-list-config-maps-error",
type: "error",
message: "Could not load config maps.",
details: E(a)
});
}), i.list("secrets", c, null, {
errorNotification: !1
}).then(function(b) {
g = D(b.by("metadata.name")), a.valueFromObjects = g.concat(f);
var c = t.groupSecretsByType(b), d = _.mapValues(c, function(a) {
return _.map(a, "metadata.name");
});
a.secretsByType = _.each(d, function(a) {
a.unshift("");
});
}, function(a) {
403 !== a.code && p.addNotification({
id: "create-builder-list-secrets-error",
type: "error",
message: "Could not load secrets.",
details: E(a)
});
}), i.get("imagestreams", d.imageName, {
namespace: d.namespace || e.project
}).then(function(a) {
d.imageStream = a;
var b = d.imageTag;
i.get("imagestreamtags", a.metadata.name + ":" + b, {
namespace: d.namespace
}).then(function(a) {
d.image = a.image, d.DCEnvVarsFromImage = k.getEnvironment(a);
var b = h.parsePorts(a.image);
_.isEmpty(b) ? (d.routing.include = !1, d.routing.portOptions = []) : (d.routing.portOptions = _.map(b, function(a) {
var b = h.getServicePort(a);
return {
port: b.name,
label: b.targetPort + "/" + b.protocol
};
}), d.routing.targetPort = d.routing.portOptions[0].port);
}, function() {
o.toErrorPage("Cannot create from source: the specified image could not be retrieved.");
});
}, function() {
o.toErrorPage("Cannot create from source: the specified image could not be retrieved.");
});
}
a.project = b, e.sourceURI && (a.sourceURIinParams = !0);
var q = function() {
a.hideCPU || (a.cpuProblems = l.validatePodLimits(a.limitRanges, "cpu", [ a.container ], b)), a.memoryProblems = l.validatePodLimits(a.limitRanges, "memory", [ a.container ], b);
};
i.list("limitranges", c).then(function(b) {
a.limitRanges = b.by("metadata.name"), _.isEmpty(a.limitRanges) || a.$watch("container", q, !0);
});
var s, v, H = function() {
return a.scaling.autoscale ? void (a.showCPURequestWarning = !j.hasCPURequest([ a.container ], a.limitRanges, b)) : void (a.showCPURequestWarning = !1);
};
i.list("resourcequotas", c).then(function(a) {
s = a.by("metadata.name"), m.log("quotas", s);
}), i.list("appliedclusterresourcequotas", c).then(function(a) {
v = a.by("metadata.name"), m.log("cluster quotas", v);
}), a.$watch("scaling.autoscale", H), a.$watch("container", H, !0), a.$watch("name", function(a, b) {
C.value && C.value !== b || (C.value = a);
}), g(a);
var I, J = function() {
var b = {
started: y.getString(x("Creating application")) + " " + a.name + " " + y.getString(x("in project")) + " " + a.projectDisplayName(),
success: y.getString(x("Created application")) + " " + a.name + " " + y.getString(x("in project")) + " " + a.projectDisplayName(),
failure: y.getString(x("Failed to create")) + " " + a.name + " " + y.getString(x("in project")) + " " + a.projectDisplayName()
}, f = {};
u.clear(), u.add(b, f, e.project, function() {
var b = d.defer();
return i.batch(I, c).then(function(c) {
var d = [], e = !1;
_.isEmpty(c.failure) ? d.push({
type: "success",
message: "All resources for application " + a.name + " were created successfully."
}) : (e = !0, c.failure.forEach(function(a) {
d.push({
type: "error",
message: "Cannot create " + A(a.object.kind).toLowerCase() + ' "' + a.object.metadata.name + '". ',
details: a.data.message
});
}), c.success.forEach(function(a) {
d.push({
type: "success",
message: "Created " + A(a.kind).toLowerCase() + ' "' + a.metadata.name + '" successfully. '
});
})), b.resolve({
alerts: d,
hasErrors: e
});
}), b.promise;
}), o.toNextSteps(a.name, a.projectName, {
usingSampleRepo: a.usingSampleRepo()
});
}, K = function(a) {
var b = f.open({
animation: !0,
templateUrl: "views/modals/confirm.html",
controller: "ConfirmModalController",
resolve: {
modalConfig: function() {
return {
alerts: a,
message: "Problems were detected while checking your application configuration.",
okButtonText: "Create Anyway",
okButtonClass: "btn-danger",
cancelButtonText: "Cancel"
};
}
}
});
b.result.then(J);
}, L = function(b) {
G(), F = b.quotaAlerts || [], a.nameTaken || _.some(F, {
type: "error"
}) ? (a.disableInputs = !1, _.each(F, function(a) {
a.id = _.uniqueId("create-builder-alert-"), p.addNotification(a);
})) : _.isEmpty(F) ? J() : (K(F), a.disableInputs = !1);
};
a.projectDisplayName = function() {
return z(this.project) || this.projectName;
}, a.createApp = function() {
a.disableInputs = !0, G(), a.buildConfig.envVars = w.compactEntries(a.buildConfigEnvVars), a.deploymentConfig.envVars = w.compactEntries(a.DCEnvVarsFromUser), a.labels = w.mapEntries(w.compactEntries(a.labelArray));
var b = h.generate(a);
I = [], angular.forEach(b, function(a) {
null !== a && (m.debug("Generated resource definition:", a), I.push(a));
});
var d = h.ifResourcesDontExist(I, a.projectName), e = r.getLatestQuotaAlerts(I, c), f = function(b) {
return a.nameTaken = b.nameTaken, e;
};
d.then(f, f).then(L, L);
};
})), a.cancel = function() {
o.toProjectOverview(a.projectName);
};
} ]), angular.module("openshiftConsole").controller("NextStepsController", [ "$scope", "$http", "$routeParams", "DataService", "$q", "$location", "TaskList", "$parse", "Navigate", "Logger", "$filter", "imageObjectRefFilter", "failureObjectNameFilter", "ProjectsService", "gettext", function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
var p = (k("displayName"), []);
a.alerts = [], a.loginBaseUrl = d.openshiftAPIBaseUrl(), a.buildConfigs = {}, a.projectName = c.project, a.fromSampleRepo = c.fromSample, a.name = c.name, n.get(c.project).then(_.spread(function(b, e) {
a.project = b, p.push(d.watch("buildconfigs", e, function(b) {
a.buildConfigs = b.by("metadata.name"), a.createdBuildConfig = a.buildConfigs[c.name], j.log("buildconfigs (subscribe)", a.buildConfigs);
})), a.$on("$destroy", function() {
d.unwatchAll(p);
});
}));
} ]), angular.module("openshiftConsole").controller("NewFromTemplateController", [ "$filter", "$location", "$parse", "$routeParams", "$scope", "CachedTemplateService", "DataService", "Navigate", "NotificationsService", "ProjectsService", function(a, b, c, d, e, f, g, h, i, j) {
function k(a, b) {
var c = _.get(a, "spec.triggers", []), d = _.find(c, function(a) {
if ("ImageChange" !== a.type) return !1;
var c = _.get(a, "imageChangeParams.containerNames", []);
return _.includes(c, b.name);
});
return _.get(d, "imageChangeParams.from.name");
}
function l(a) {
for (var b = [], c = x.exec(a); c; ) b.push(c[1]), c = x.exec(a);
return b;
}
function m() {
var a = p();
e.templateImages = _.map(y, function(b) {
if (_.isEmpty(b.usesParameters)) return b;
var c = _.template(b.name, {
interpolate: x
});
return {
name: c(a),
usesParameters: b.usesParameters
};
});
}
function n(a) {
var b = [], c = s(a);
return c && angular.forEach(c, function(c) {
var d = c.image, e = k(a, c);
e && (d = e), d && b.push(d);
}), b;
}
function o(a) {
y = [];
var b = [], c = {};
angular.forEach(a.objects, function(a) {
if ("BuildConfig" === a.kind) {
var d = v(t(a), r);
d && y.push({
name: d,
usesParameters: l(d)
});
var e = v(u(a), r);
e && (c[e] = !0);
}
"DeploymentConfig" === a.kind && (b = b.concat(n(a)));
}), b.forEach(function(a) {
c[a] || y.push({
name: a,
usesParameters: l(a)
});
}), y = _.uniqBy(y, "name");
}
function p() {
var a = {};
return _.each(e.template.parameters, function(b) {
a[b.name] = b.value;
}), a;
}
var q = d.template, r = d.namespace || "", s = c("spec.template.spec.containers"), t = c("spec.strategy.sourceStrategy.from || spec.strategy.dockerStrategy.from || spec.strategy.customStrategy.from"), u = c("spec.output.to"), v = a("imageObjectRef");
if (!q) return void h.toErrorPage("Cannot create from template: a template name was not specified.");
var w = function() {
try {
return JSON.parse(d.templateParamsMap);
} catch (a) {
i.addNotification({
id: "template-params-invalid-json",
type: "error",
message: "Could not prefill parameter values.",
details: "The `templateParamsMap` URL parameter is not valid JSON. " + a
});
}
};
d.templateParamsMap && (e.prefillParameters = w());
var x = /\${([a-zA-Z0-9\_]+)}/g, y = [];
j.get(d.project).then(_.spread(function(a) {
if (e.project = a, r) g.get("templates", q, {
namespace: r || e.project.metadata.name
}).then(function(a) {
e.template = a, o(a);
var b = function(a) {
return !_.isEmpty(a.usesParameters);
};
_.some(y, b) ? (e.parameterDisplayNames = {}, _.each(a.parameters, function(a) {
e.parameterDisplayNames[a.name] = a.displayName || a.name;
}), e.$watch("template.parameters", _.debounce(function() {
e.$apply(m);
}, 50, {
maxWait: 250
}), !0)) : e.templateImages = y;
}, function() {
h.toErrorPage("Cannot create from template: the specified template could not be retrieved.");
}); else {
if (e.template = f.getTemplate(), _.isEmpty(e.template)) {
var c = URI("error").query({
error: "not_found",
error_description: "Template wasn't found in cache."
}).toString();
b.url(c);
}
f.clearTemplate();
}
}));
} ]), angular.module("openshiftConsole").controller("LabelsController", [ "$scope", function(a) {
a.expanded = !0, a.toggleExpanded = function() {
a.expanded = !a.expanded;
}, a.addLabel = function() {
a.labelKey && a.labelValue && (a.labels[a.labelKey] = a.labelValue, a.labelKey = "", a.labelValue = "", a.form.$setPristine(), a.form.$setUntouched());
}, a.deleteLabel = function(b) {
a.labels[b] && delete a.labels[b];
};
} ]), angular.module("openshiftConsole").controller("TasksController", [ "$scope", "TaskList", function(a, b) {
a.tasks = function() {
return b.taskList();
}, a["delete"] = function(a) {
b.deleteTask(a);
}, a.hasTaskWithError = function() {
var a = b.taskList();
return _.some(a, {
hasErrors: !0
});
};
} ]), angular.module("openshiftConsole").controller("EventsController", [ "$routeParams", "$scope", "ProjectsService", function(a, b, c) {
b.projectName = a.project, b.renderOptions = {
hideFilterWidget: !0
}, b.breadcrumbs = [ {
title: "Monitoring",
link: "project/" + a.project + "/monitoring"
}, {
title: "Events"
} ], c.get(a.project).then(_.spread(function(a, c) {
b.project = a, b.projectContext = c;
}));
} ]), angular.module("openshiftConsole").controller("OAuthController", [ "$scope", "$location", "$q", "RedirectLoginService", "DataService", "AuthService", "Logger", function(a, b, c, d, e, f, g) {
var h = g.get("auth");
a.completeLogin = function() {}, a.cancelLogin = function() {
b.replace(), b.url("./");
}, d.finish().then(function(c) {
var d = c.token, g = c.then, i = c.verified, j = c.ttl, k = {
errorNotification: !1,
http: {
auth: {
token: d,
triggerLogin: !1
}
}
};
h.log("OAuthController, got token, fetching user", k), e.get("users", "~", {}, k).then(function(c) {
if (h.log("OAuthController, got user", c), a.completeLogin = function() {
f.setUser(c, d, j);
var a = g || "./";
URI(a).is("absolute") && (h.log("OAuthController, invalid absolute redirect", a), a = "./"), h.log("OAuthController, redirecting", a), b.replace(), b.url(a);
}, i) a.completeLogin(); else {
a.confirmUser = c;
var e = f.UserStore().getUser();
e && e.metadata.name !== c.metadata.name && (a.overriddenUser = e);
}
})["catch"](function(a) {
var c = URI("error").query({
error: "user_fetch_failed"
}).toString();
h.error("OAuthController, error fetching user", a, "redirecting", c), b.replace(), b.url(c);
});
})["catch"](function(a) {
var c = URI("error").query({
error: a.error || "",
error_description: a.error_description || "",
error_uri: a.error_uri || ""
}).toString();
h.error("OAuthController, error", a, "redirecting", c), b.replace(), b.url(c);
});
} ]), angular.module("openshiftConsole").controller("ErrorController", [ "$scope", "$window", "gettext", "gettextCatalog", function(a, b, c, d) {
var e = URI(window.location.href).query(!0), f = e.error;
switch (f) {
case "access_denied":
a.errorMessage = "Access denied";
break;

case "not_found":
a.errorMessage = "Not found";
break;

case "invalid_request":
a.errorMessage = "Invalid request";
break;

case "API_DISCOVERY":
a.errorLinks = [ {
href: window.location.protocol + "//" + window.OPENSHIFT_CONFIG.api.openshift.hostPort + window.OPENSHIFT_CONFIG.api.openshift.prefix,
label: d.getString(c("Check Server Connection")),
target: "_blank"
} ];
break;

default:
a.errorMessage = d.getString(c("An error has occurred"));
}
e.error_description && (a.errorDetails = e.error_description), a.reloadConsole = function() {
b.location.href = "/";
};
} ]), angular.module("openshiftConsole").controller("LogoutController", [ "$scope", "$log", "AuthService", "AUTH_CFG", "gettext", "gettextCatalog", function(a, b, c, d, e, f) {
b.debug("LogoutController"), c.isLoggedIn() ? (b.debug("LogoutController, logged in, initiating logout"), a.logoutMessage = f.getString(e("Logging out...")), c.startLogout()["finally"](function() {
c.isLoggedIn() ? (b.debug("LogoutController, logout failed, still logged in"), a.logoutMessage = 'You could not be logged out. Return to the <a href="./">console</a>.') : d.logout_uri ? (b.debug("LogoutController, logout completed, redirecting to AUTH_CFG.logout_uri", d.logout_uri), window.location.href = d.logout_uri) : (b.debug("LogoutController, logout completed, reloading the page"), window.location.reload(!1));
})) : d.logout_uri ? (b.debug("LogoutController, logout completed, redirecting to AUTH_CFG.logout_uri", d.logout_uri), a.logoutMessage = f.getString(e("Logging out...")), window.location.href = d.logout_uri) : (b.debug("LogoutController, not logged in, logout complete"), a.logoutMessage = f.getString(e('You are logged out. Return to the <a href="./">console</a>.')));
} ]), angular.module("openshiftConsole").controller("CreateController", [ "$scope", "$filter", "$location", "$q", "$routeParams", "$uibModal", "CatalogService", "Constants", "DataService", "LabelFilter", "Logger", "ProjectsService", function(a, b, c, d, e, f, g, h, i, j, k, l) {
a.projectName = e.project, a.categories = h.CATALOG_CATEGORIES, a.alerts = a.alerts || {}, l.get(e.project).then(_.spread(function(b, c) {
a.project = b, a.context = c, i.list("imagestreams", {
namespace: "openshift"
}).then(function(b) {
a.openshiftImageStreams = b.by("metadata.name");
}), i.list("templates", {
namespace: "openshift"
}, null, {
partialObjectMetadataList: !0
}).then(function(b) {
a.openshiftTemplates = b.by("metadata.name");
}), "openshift" === e.project ? (a.projectImageStreams = [], a.projectTemplates = []) : (i.list("imagestreams", c).then(function(b) {
a.projectImageStreams = b.by("metadata.name");
}), i.list("templates", c, null, {
partialObjectMetadataList: !0
}).then(function(b) {
a.projectTemplates = b.by("metadata.name");
}));
}));
<<<<<<< HEAD
<<<<<<< HEAD
} ]), angular.module("openshiftConsole").controller("CreateFromURLController", [ "$scope", "$routeParams", "$location", "$filter", "AuthService", "DataService", "Navigate", "ProjectsService", function(a, b, c, d, e, f, g, h) {
e.withUser(), a.alerts = {}, a.selected = {};
var i = window.DMOS_OPENSHIFT_PROJECTNAMES.split(","), j = function(b) {
a.alerts.invalidImageStream = {
type:"error",
message:'The requested image stream "' + b + '" could not be loaded.'
};
}, k = function(b) {
a.alerts.invalidImageTag = {
type:"error",
message:'The requested image stream tag "' + b + '" could not be loaded.'
};
}, l = function(b) {
a.alerts.invalidImageStream = {
type:"error",
message:'The app name "' + b + "\" is not valid.  An app name is an alphanumeric (a-z, and 0-9) string with a maximum length of 24 characters, where the first character is a letter (a-z), and the '-' character is allowed anywhere except the first or last character."
};
}, m = function(b) {
a.alerts.invalidNamespace = {
type:"error",
message:'Resources from the namespace "' + b + '" are not permitted.'
};
}, n = function(b) {
a.alerts.invalidTemplate = {
type:"error",
message:'The requested template "' + b + '" could not be loaded.'
};
}, o = function() {
a.alerts.resourceRequired = {
type:"error",
message:"An image stream or template is required."
};
}, p = function() {
a.alerts.invalidResource = {
type:"error",
message:"Image streams and templates cannot be combined."
};
}, q = function() {
try {
return b.templateParamsMap && JSON.parse(b.templateParamsMap) || {};
} catch (c) {
a.alerts.invalidTemplateParams = {
type:"error",
message:"The templateParamsMap is not valid JSON. " + c
};
}
}, r = window.OPENSHIFT_CONSTANTS.CREATE_FROM_URL_WHITELIST, s = [ "namespace", "name", "imageStream", "imageTag", "sourceURI", "sourceRef", "contextDir", "template", "templateParamsMap" ], t = _.pick(b, function(a, b) {
return _.contains(s, b) && _.isString(a);
});
t.namespace = t.namespace || "openshift";
var u = function(a) {
return _.size(a) < 25 && /^[a-z]([-a-z0-9]*[a-z0-9])?$/.test(a);
}, v = function() {
t.imageStream && f.get("imagestreams", t.imageStream, {
namespace:t.namespace
}, {
errorNotification:!1
}).then(function(b) {
a.imageStream = b, f.get("imagestreamtags", b.metadata.name + ":" + t.imageTag, {
namespace:t.namespace
}, {
errorNotification:!1
}).then(function(b) {
a.imageStreamTag = b, a.validationPassed = !0, a.resource = b, t.displayName = d("displayName")(b);
}, function() {
k(t.imageTag);
});
}, function() {
j(t.imageStream);
}), t.template && f.get("templates", t.template, {
namespace:t.namespace
}, {
errorNotification:!1
}).then(function(b) {
a.template = b, q() && (a.validationPassed = !0, a.resource = b);
}, function() {
n(t.template);
});
};
_.includes(r, t.namespace) ? t.imageStream && t.template ? p() :t.imageStream || t.template ? t.name && !u(t.name) ? l(t.name) :v() :o() :m(t.namespace), angular.extend(a, {
createDetails:t,
=======
} ]), angular.module("openshiftConsole").controller("CreateFromURLController", [ "$scope", "$routeParams", "$location", "$filter", "AuthService", "DataService", "Navigate", "ProjectsService", function(e, t, n, a, r, o, i, s) {
r.withUser(), e.alerts = {}, e.selected = {};
var c = function(t) {
e.alerts.invalidImageStream = {
=======
} ]), angular.module("openshiftConsole").controller("CreateFromURLController", [ "$scope", "$routeParams", "$location", "$filter", "AuthService", "DataService", "Navigate", "ProjectsService", function(a, b, c, d, e, f, g, h) {
e.withUser(), a.alerts = {}, a.selected = {};
var i = function(b) {
a.alerts.invalidImageStream = {
>>>>>>> rebase from poc 3.6
type: "error",
message: 'The requested image stream "' + b + '" could not be loaded.'
};
}, j = function(b) {
a.alerts.invalidImageTag = {
type: "error",
message: 'The requested image stream tag "' + b + '" could not be loaded.'
};
}, k = function(b) {
a.alerts.invalidImageStream = {
type: "error",
message: 'The app name "' + b + "\" is not valid.  An app name is an alphanumeric (a-z, and 0-9) string with a maximum length of 24 characters, where the first character is a letter (a-z), and the '-' character is allowed anywhere except the first or last character."
};
}, l = function(b) {
a.alerts.invalidNamespace = {
type: "error",
message: 'Resources from the namespace "' + b + '" are not permitted.'
};
}, m = function(b) {
a.alerts.invalidTemplate = {
type: "error",
message: 'The requested template "' + b + '" could not be loaded.'
};
}, n = function() {
a.alerts.resourceRequired = {
type: "error",
message: "An image stream or template is required."
};
}, o = function() {
a.alerts.invalidResource = {
type: "error",
message: "Image streams and templates cannot be combined."
};
}, p = function() {
try {
return b.templateParamsMap && JSON.parse(b.templateParamsMap) || {};
} catch (c) {
a.alerts.invalidTemplateParams = {
type: "error",
message: "The templateParamsMap is not valid JSON. " + c
};
}
}, q = window.OPENSHIFT_CONSTANTS.CREATE_FROM_URL_WHITELIST, r = [ "namespace", "name", "imageStream", "imageTag", "sourceURI", "sourceRef", "contextDir", "template", "templateParamsMap" ], s = _.pickBy(b, function(a, b) {
return _.includes(r, b) && _.isString(a);
});
s.namespace = s.namespace || "openshift";
var t = function(a) {
return _.size(a) < 25 && /^[a-z]([-a-z0-9]*[a-z0-9])?$/.test(a);
}, u = function() {
s.imageStream && f.get("imagestreams", s.imageStream, {
namespace: s.namespace
}, {
errorNotification: !1
}).then(function(b) {
a.imageStream = b, f.get("imagestreamtags", b.metadata.name + ":" + s.imageTag, {
namespace: s.namespace
}, {
errorNotification: !1
}).then(function(b) {
a.imageStreamTag = b, a.validationPassed = !0, a.resource = b, s.displayName = d("displayName")(b);
}, function() {
j(s.imageTag);
});
}, function() {
i(s.imageStream);
}), s.template && f.get("templates", s.template, {
namespace: s.namespace
}, {
errorNotification: !1
}).then(function(b) {
a.template = b, p() && (a.validationPassed = !0, a.resource = b);
}, function() {
m(s.template);
});
};
<<<<<<< HEAD
<<<<<<< a8a6721a66ecf6e0309b8cb7e496a9db1b4eccf6
_.includes(q, s.namespace) ? s.imageStream && s.template ? o() :s.imageStream || s.template ? s.name && !t(s.name) ? k(s.name) :u() :n() :l(s.namespace), angular.extend(a, {
createDetails:s,
>>>>>>> Bump grunt-contrib-uglify to 3.0.1
createWithProject:function(d) {
d = d || a.selected.project.metadata.name;
var e = b.imageStream ? g.createFromImageURL(a.imageStream, t.imageTag, d, t) :g.createFromTemplateURL(a.template, d, t);
c.url(e);
}
}), a.projects = {}, a.canCreateProject = void 0, f.list("projects", a).then(function(b) {
a.loaded = !0, a.projects = d("orderByDisplayName")(b.by("metadata.name")), a.projects = a.projects.filter(function(a) {
return i.indexOf(a.metadata.name) < 0;
}), a.noProjects = _.isEmpty(a.projects);
=======
_.includes(q, s.namespace) ? s.imageStream && s.template ? o() : s.imageStream || s.template ? s.name && !t(s.name) ? k(s.name) : u() : n() : l(s.namespace), angular.extend(a, {
createDetails: s,
createWithProject: function(d) {
d = d || a.selected.project.metadata.name;
var e = b.imageStream ? g.createFromImageURL(a.imageStream, s.imageTag, d, s) : g.createFromTemplateURL(a.template, d, s);
c.url(e);
}
}), a.projects = {}, a.canCreateProject = void 0, h.list().then(function(b) {
a.loaded = !0, a.projects = d("orderByDisplayName")(b.by("metadata.name")), a.noProjects = _.isEmpty(a.projects);
>>>>>>> rebase from poc 3.6
}), h.canCreate().then(function() {
a.canCreateProject = !0;
}, function() {
a.canCreateProject = !1;
});
} ]), angular.module("openshiftConsole").controller("CreateProjectController", [ "$scope", "$location", "$window", "AuthService", "Constants", function(a, b, c, d, e) {
var f = !e.DISABLE_SERVICE_CATALOG_LANDING_PAGE;
a.onProjectCreated = function(a) {
f ? c.history.back() : b.path("project/" + a + "/create");
}, d.withUser();
} ]), angular.module("openshiftConsole").controller("EditProjectController", [ "$scope", "$routeParams", "$filter", "$location", "DataService", "ProjectsService", "Navigate", "gettext", "gettextCatalog", function(a, b, c, d, e, f, g, h, i) {
a.alerts = {};
var j = c("annotation"), k = c("annotationName");
f.get(b.project).then(_.spread(function(e) {
var l = function(a) {
return {
description: j(a, "description"),
displayName: j(a, "displayName")
};
}, m = function(a, b) {
var c = angular.copy(a);
return c.metadata.annotations[k("description")] = b.description, c.metadata.annotations[k("displayName")] = b.displayName, c;
};
angular.extend(a, {
project: e,
editableFields: l(e),
show: {
editing: !1
},
actions: {
canSubmit: !1
},
canSubmit: function(b) {
a.actions.canSubmit = b;
},
update: function() {
a.disableInputs = !0, f.update(b.project, m(e, a.editableFields)).then(function() {
b.then ? d.path(b.then) : g.toProjectOverview(e.metadata.name);
}, function(b) {
a.disableInputs = !1, a.editableFields = l(e), a.alerts.update = {
type: "error",
message: i.getString(h("An error occurred while updating the project")),
details: c("getErrorDetails")(b)
};
});
}
});
}));
} ]), angular.module("openshiftConsole").controller("CreateRouteController", [ "$filter", "$routeParams", "$scope", "$window", "APIService", "ApplicationGenerator", "AuthorizationService", "DataService", "Navigate", "NotificationsService", "ProjectsService", "keyValueEditorUtils", function(a, b, c, d, e, f, g, h, i, j, k, l) {
c.renderOptions = {
hideFilterWidget: !0
}, c.projectName = b.project, c.serviceName = b.service, c.labels = [], c.routing = {
name: c.serviceName || ""
}, c.breadcrumbs = [ {
title: "Routes",
link: "project/" + c.projectName + "/browse/routes"
}, {
title: "Create Route"
} ];
var m = e.getPreferredVersion("routes"), n = e.getPreferredVersion("services"), o = function() {
j.hideNotification("create-route-error");
};
c.$on("$destroy", o);
var p = function() {
d.history.back();
};
c.cancel = p, k.get(b.project).then(_.spread(function(d, k) {
if (c.project = d, !g.canI(m, "create", b.project)) return void i.toErrorPage("You do not have authority to create routes in project " + b.project + ".", "access_denied");
var q, r = a("orderByDisplayName");
c.routing.to = {
kind: "Service",
name: c.serviceName,
weight: 1
};
var s, t = function() {
var a = s, b = _.get(c, "routing.to.name");
s = _.get(q, [ b, "metadata", "labels" ], {});
var d = l.mapEntries(l.compactEntries(c.labels)), e = _.assign(d, s);
a && (e = _.omitBy(e, function(b, c) {
return a[c] && !s[c];
})), c.labels = _.map(e, function(a, b) {
return {
name: b,
value: a
};
});
};
h.list(n, k).then(function(a) {
q = a.by("metadata.name"), c.services = r(q), c.$watch("routing.to.name", t);
}), c.createRoute = function() {
if (c.createRouteForm.$valid) {
o(), c.disableInputs = !0;
var b = c.routing.to.name, d = l.mapEntries(l.compactEntries(c.labels)), g = f.createRoute(c.routing, b, d), i = _.get(c, "routing.alternateServices", []);
_.isEmpty(i) || (g.spec.to.weight = _.get(c, "routing.to.weight"), g.spec.alternateBackends = _.map(i, function(a) {
return {
kind: "Service",
name: a.name,
weight: a.weight
};
}));
var m = e.objectToResourceGroupVersion(g);
h.create(m, null, g, k).then(function() {
j.addNotification({
type: "success",
message: "Route " + g.metadata.name + " was successfully created."
}), p();
}, function(b) {
c.disableInputs = !1, j.addNotification({
type: "error",
id: "create-route-error",
message: "An error occurred creating the route.",
details: a("getErrorDetails")(b)
});
});
}
};
}));
} ]), angular.module("openshiftConsole").controller("AttachPVCController", [ "$filter", "$routeParams", "$scope", "$window", "APIService", "AuthorizationService", "BreadcrumbsService", "DataService", "QuotaService", "Navigate", "NotificationsService", "ProjectsService", "StorageService", "RELATIVE_PATH_PATTERN", function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
if (!b.kind || !b.name) return void j.toErrorPage("Kind or name parameter missing.");
var o = [ "Deployment", "DeploymentConfig", "ReplicaSet", "ReplicationController" ], p = a("humanizeKind");
if (!_.includes(o, b.kind)) return void j.toErrorPage("Storage is not supported for kind " + p(b.kind) + ".");
var q = {
resource: e.kindToResource(b.kind),
group: b.group
};
c.projectName = b.project, c.kind = b.kind, c.name = b.name, c.RELATIVE_PATH_PATTERN = n, c.outOfClaims = !1, c.attach = {
persistentVolumeClaim: null,
volumeName: null,
mountPath: null,
allContainers: !0,
containers: {}
}, c.breadcrumbs = g.getBreadcrumbs({
name: b.name,
kind: b.kind,
namespace: b.project,
subpage: "Add Storage"
}), c.pvcVersion = e.getPreferredVersion("persistentvolumeclaims");
var r = e.getPreferredVersion("resourcequotas"), s = e.getPreferredVersion("appliedclusterresourcequotas");
l.get(b.project).then(_.spread(function(e, l) {
if (c.project = e, !f.canI(q, "update", b.project)) return void j.toErrorPage("You do not have authority to update " + p(b.kind) + " " + b.name + ".", "access_denied");
var n = a("orderByDisplayName"), o = a("getErrorDetails"), t = a("generateName"), u = function(a, b) {
c.disableInputs = !0, k.addNotification({
id: "attach-pvc-error",
type: "error",
message: a,
details: b
});
}, v = function() {
k.hideNotification("attach-pvc-error");
};
c.$on("$destroy", v);
var w = function() {
d.history.back();
};
c.cancel = w;
var x = function(a) {
return c.attach.allContainers || c.attach.containers[a.name];
}, y = function() {
var a = _.get(c, "attach.resource.spec.template");
c.existingMountPaths = m.getMountPaths(a, x);
};
c.$watchGroup([ "attach.resource", "attach.allContainers" ], y), c.$watch("attach.containers", y, !0);
var z = function() {
h.get(q, b.name, l).then(function(a) {
c.attach.resource = a, c.breadcrumbs = g.getBreadcrumbs({
object: a,
project: e,
subpage: "Add Storage"
});
var b = _.get(a, "spec.template");
c.existingVolumeNames = m.getVolumeNames(b);
}, function(a) {
u(b.name + " could not be loaded.", o(a));
}), h.list(c.pvcVersion, l).then(function(a) {
c.pvcs = n(a.by("metadata.name")), _.isEmpty(c.pvcs) || c.attach.persistentVolumeClaim || (c.attach.persistentVolumeClaim = _.head(c.pvcs));
}), h.list(r, {
namespace: c.projectName
}, function(a) {
c.quotas = a.by("metadata.name"), c.outOfClaims = i.isAnyStorageQuotaExceeded(c.quotas, c.clusterQuotas);
}), h.list(s, {
namespace: c.projectName
}, function(a) {
c.clusterQuotas = a.by("metadata.name"), c.outOfClaims = i.isAnyStorageQuotaExceeded(c.quotas, c.clusterQuotas);
});
};
z(), c.attachPVC = function() {
if (c.disableInputs = !0, v(), c.attachPVCForm.$valid) {
c.attach.volumeName || (c.attach.volumeName = t("volume-"));
var a = c.attach.resource, d = _.get(a, "spec.template"), e = c.attach.persistentVolumeClaim, f = c.attach.volumeName, g = c.attach.mountPath, i = c.attach.subPath, j = c.attach.readOnly;
g && angular.forEach(d.spec.containers, function(a) {
if (x(a)) {
var b = m.createVolumeMount(f, g, i, j);
a.volumeMounts || (a.volumeMounts = []), a.volumeMounts.push(b);
}
});
var n = m.createVolume(f, e);
d.spec.volumes || (d.spec.volumes = []), d.spec.volumes.push(n), h.update(q, a.metadata.name, c.attach.resource, l).then(function() {
var a;
g || (a = "No mount path was provided. The volume reference was added to the configuration, but it will not be mounted into running pods."), k.addNotification({
type: "success",
message: "Persistent volume claim " + e.metadata.name + " added to " + p(b.kind) + " " + b.name + ".",
details: a
}), w();
}, function(a) {
u("An error occurred attaching the persistent volume claim to the " + p(b.kind) + ".", o(a)), c.disableInputs = !1;
});
}
};
}));
} ]), angular.module("openshiftConsole").controller("AddConfigVolumeController", [ "$filter", "$location", "$routeParams", "$scope", "$window", "APIService", "AuthorizationService", "BreadcrumbsService", "DataService", "Navigate", "NotificationsService", "ProjectsService", "StorageService", "RELATIVE_PATH_PATTERN", "gettextCatalog", function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
if (!c.kind || !c.name) return void j.toErrorPage("Kind or name parameter missing.");
var p = [ "Deployment", "DeploymentConfig", "ReplicaSet", "ReplicationController" ];
if (!_.includes(p, c.kind)) return void j.toErrorPage("Volumes are not supported for kind " + c.kind + ".");
var q = {
resource: f.kindToResource(c.kind),
group: c.group
};
d.projectName = c.project, d.kind = c.kind, d.name = c.name, d.attach = {
allContainers: !0,
pickKeys: !1
}, d.forms = {}, d.RELATIVE_PATH_PATTERN = n, d.breadcrumbs = h.getBreadcrumbs({
name: c.name,
kind: c.kind,
namespace: c.project,
subpage: "Add Config Files"
}), d.configMapVersion = f.getPreferredVersion("configmaps"), d.secretVersion = f.getPreferredVersion("secrets");
var r = a("humanizeKind");
d.groupByKind = function(a) {
return o.getString(r(a.kind));
};
var s = function() {
_.set(d, "attach.items", [ {} ]);
};
d.$watch("attach.source", s);
var t = function() {
d.forms.addConfigVolumeForm.$setDirty();
}, u = function() {
e.history.back();
};
d.cancel = u;
var v = function(a, b) {
k.addNotification({
id: "add-config-volume-error",
type: "error",
message: a,
details: b
});
}, w = function() {
k.hideNotification("add-config-volume-error");
};
d.$on("$destroy", w), d.addItem = function() {
d.attach.items.push({}), t();
}, d.removeItem = function(a) {
d.attach.items.splice(a, 1), t();
}, l.get(c.project).then(_.spread(function(b, e) {
if (d.project = b, !g.canI(q, "update", c.project)) return void j.toErrorPage("You do not have authority to update " + r(c.kind) + " " + c.name + ".", "access_denied");
var f = a("orderByDisplayName"), l = a("getErrorDetails"), n = a("generateName");
i.get(q, c.name, e, {
errorNotification: !1
}).then(function(a) {
d.targetObject = a, d.breadcrumbs = h.getBreadcrumbs({
object: a,
project: b,
subpage: "Add Config Files"
});
}, function(a) {
d.error = a;
}), i.list(d.configMapVersion, e, null, {
errorNotification: !1
}).then(function(a) {
d.configMaps = f(a.by("metadata.name"));
}, function(a) {
return 403 === a.status ? void (d.configMaps = []) : void v("Could not load config maps", l(a));
}), i.list(d.secretVersion, e, null, {
errorNotification: !1
}).then(function(a) {
d.secrets = f(a.by("metadata.name"));
}, function(a) {
return 403 === a.status ? void (d.secrets = []) : void v("Could not load secrets", l(a));
});
var o = function(a) {
return d.attach.allContainers || d.attach.containers[a.name];
}, p = function() {
var a = _.get(d, "targetObject.spec.template");
d.existingMountPaths = m.getMountPaths(a, o);
};
d.$watchGroup([ "targetObject", "attach.allContainers" ], p), d.$watch("attach.containers", p, !0);
var s = function() {
var a = _.map(d.attach.items, "path");
d.itemPaths = _.compact(a);
};
d.$watch("attach.items", s, !0), d.addVolume = function() {
if (!d.forms.addConfigVolumeForm.$invalid) {
var b = d.targetObject, f = _.get(d, "attach.source"), g = _.get(b, "spec.template"), h = n("volume-"), j = _.get(d, "attach.mountPath"), m = {
name: h,
mountPath: j
};
"Secret" === f.kind && (m.readOnly = !0), _.each(g.spec.containers, function(a) {
o(a) && (a.volumeMounts = a.volumeMounts || [], a.volumeMounts.push(m));
});
var p, r = {
name: h
};
switch (d.attach.pickKeys && (p = d.attach.items), f.kind) {
case "ConfigMap":
r.configMap = {
name: f.metadata.name,
items: p
};
break;

case "Secret":
r.secret = {
secretName: f.metadata.name,
items: p
};
}
g.spec.volumes = g.spec.volumes || [], g.spec.volumes.push(r), d.disableInputs = !0, w();
var s = a("humanizeKind"), t = s(f.kind), x = s(c.kind);
i.update(q, b.metadata.name, d.targetObject, e).then(function() {
k.addNotification({
type: "success",
message: "Successfully added " + t + " " + f.metadata.name + " to " + x + " " + c.name + "."
}), u();
}, function(a) {
d.disableInputs = !1, v("An error occurred attaching the " + t + " to the " + x + ".", l(a));
});
}
};
}));
} ]), angular.module("openshiftConsole").controller("CreateSecretModalController", [ "$scope", "$uibModalInstance", function(a, b) {
a.onCreate = function(a) {
b.close(a);
}, a.onCancel = function() {
b.dismiss("cancel");
};
} ]), angular.module("openshiftConsole").controller("ConfirmModalController", [ "$scope", "$uibModalInstance", "modalConfig", function(a, b, c) {
_.extend(a, c), a.confirm = function() {
b.close("confirm");
}, a.cancel = function() {
b.dismiss("cancel");
};
} ]), angular.module("openshiftConsole").controller("ConfirmScaleController", [ "$scope", "$uibModalInstance", "resource", "type", function(a, b, c, d) {
a.resource = c, a.type = d, a.confirmScale = function() {
b.close("confirmScale");
}, a.cancel = function() {
b.dismiss("cancel");
};
} ]), angular.module("openshiftConsole").controller("ConfirmSaveLogController", [ "$scope", "$uibModalInstance", "object", "CLIHelp", function(a, b, c, d) {
a.object = c, a.command = d.getLogsCommand(c), a.save = function() {
b.close("save");
}, a.cancel = function() {
b.dismiss("cancel");
};
} ]), angular.module("openshiftConsole").controller("DeleteModalController", [ "$scope", "$uibModalInstance", function(a, b) {
a["delete"] = function() {
b.close("delete");
}, a.cancel = function() {
b.dismiss("cancel");
};
} ]), angular.module("openshiftConsole").controller("DebugTerminalModalController", [ "$scope", "$filter", "$uibModalInstance", "container", "image", function(a, b, c, d, e) {
a.container = d, a.image = e, a.$watch("debugPod.status.containerStatuses", function() {
a.containerState = _.get(a, "debugPod.status.containerStatuses[0].state");
}), a.close = function() {
c.close("close");
};
} ]), angular.module("openshiftConsole").controller("ConfirmReplaceModalController", [ "$scope", "$uibModalInstance", function(a, b) {
a.replace = function() {
b.close("replace");
}, a.cancel = function() {
b.dismiss("cancel");
};
} ]), angular.module("openshiftConsole").controller("ProcessOrSaveTemplateModalController", [ "$scope", "$uibModalInstance", function(a, b) {
a["continue"] = function() {
b.close("create");
}, a.cancel = function() {
b.dismiss("cancel");
};
} ]), angular.module("openshiftConsole").controller("LinkServiceModalController", [ "$scope", "$uibModalInstance", "ServicesService", function(a, b, c) {
a.$watch("services", function(b) {
var d = c.getDependentServices(a.service);
a.options = _.filter(b, function(b) {
return b !== a.service && !_.includes(d, b.metadata.name);
}), 1 === _.size(a.options) && _.set(a, "link.selectedService", _.head(a.options));
}), a.link = function() {
b.close(_.get(a, "link.selectedService"));
}, a.cancel = function() {
b.dismiss();
};
} ]), angular.module("openshiftConsole").controller("JenkinsfileExamplesModalController", [ "$scope", "$uibModalInstance", function(a, b) {
a.ok = function() {
b.close("ok");
};
} ]), angular.module("openshiftConsole").controller("AboutComputeUnitsModalController", [ "$scope", "$uibModalInstance", function(a, b) {
a.ok = function() {
b.close("ok");
};
} ]), angular.module("openshiftConsole").controller("AboutController", [ "$scope", "AuthService", "Constants", function(a, b, c) {
b.withUser(), a.version = {
master: {
openshift: c.VERSION.openshift,
kubernetes: c.VERSION.kubernetes
}
};
} ]), angular.module("openshiftConsole").controller("CommandLineController", [ "$scope", "DataService", "AuthService", "Constants", function(a, b, c, d) {
c.withUser(), a.cliDownloadURL = d.CLI, a.cliDownloadURLPresent = a.cliDownloadURL && !_.isEmpty(a.cliDownloadURL), a.loginBaseURL = b.openshiftAPIBaseUrl(), d.DISABLE_COPY_LOGIN_COMMAND || (a.sessionToken = c.UserStore().getToken());
} ]), angular.module("openshiftConsole").controller("CreatePersistentVolumeClaimController", [ "$filter", "$routeParams", "$scope", "$window", "APIService", "ApplicationGenerator", "AuthorizationService", "DataService", "Navigate", "NotificationsService", "ProjectsService", "keyValueEditorUtils", function(a, b, c, d, e, f, g, h, i, j, k, l) {
c.projectName = b.project, c.accessModes = "ReadWriteOnce", c.claim = {}, c.breadcrumbs = [ {
title: "Storage",
link: "project/" + c.projectName + "/browse/storage"
}, {
title: "Create Storage"
} ];
var m = {
kind: "PersistentVolumeClaim",
apiVersion: "v1",
metadata: {
name: void 0,
labels: {},
annotations: {}
},
spec: {
resources: {
requests: {}
}
}
}, n = e.objectToResourceGroupVersion(m), o = function() {
j.hideNotification("create-pvc-error");
};
c.$on("$destroy", o);
var p = function() {
d.history.back();
};
c.cancel = p, k.get(b.project).then(_.spread(function(d, e) {
function f() {
var a = angular.copy(m);
a.metadata.name = c.claim.name, a.spec.accessModes = [ c.claim.accessModes || "ReadWriteOnce" ];
var b = c.claim.unit || "Mi";
if (a.spec.resources.requests.storage = c.claim.amount + b, c.claim.selectedLabels) {
var d = l.mapEntries(l.compactEntries(c.claim.selectedLabels));
_.isEmpty(d) || _.set(a, "spec.selector.matchLabels", d);
}
return c.claim.storageClass && "No Storage Class" !== c.claim.storageClass.metadata.name && (a.metadata.annotations["volume.beta.kubernetes.io/storage-class"] = c.claim.storageClass.metadata.name), a;
}
return c.project = d, g.canI(n, "create", b.project) ? void (c.createPersistentVolumeClaim = function() {
if (o(), c.createPersistentVolumeClaimForm.$valid) {
c.disableInputs = !0;
var b = f();
h.create(n, null, b, e).then(function(a) {
j.addNotification({
type: "success",
message: "Persistent volume claim " + a.metadata.name + " successfully created."
}), p();
}, function(b) {
c.disableInputs = !1, j.addNotification({
id: "create-pvc-error",
type: "error",
message: "An error occurred requesting storage.",
details: a("getErrorDetails")(b)
});
});
}
}) : void i.toErrorPage("You do not have authority to create persistent volume claims in project " + b.project + ".", "access_denied");
}));
} ]), angular.module("openshiftConsole").directive("buildClose", [ "$window", function(a) {
var b = function(a) {
return "hide/build/" + a.metadata.uid;
}, c = function(a) {
var c = b(a);
return "true" === sessionStorage.getItem(c);
};
return {
restrict: "AE",
scope: {
build: "=",
hideBuild: "="
},
controller: [ "$scope", function(a) {
a.onHideBuild = function() {
var c = b(a.build);
a.hideBuild = !0, sessionStorage.setItem(c, "true");
};
} ],
link: function(a, b, d, e) {
a.hideBuild = !1, a.$watch("build", function(b) {
a.hideBuild = c(b);
});
},
templateUrl: "views/directives/_build-close.html"
};
} ]), angular.module("openshiftConsole").directive("createSecret", [ "$filter", "AuthorizationService", "DataService", "NotificationsService", "DNS1123_SUBDOMAIN_VALIDATION", "gettext", "gettextCatalog", function(a, b, c, d, e, f, g) {
return {
restrict: "E",
scope: {
type: "=",
serviceAccountToLink: "=?",
namespace: "=",
onCreate: "&",
onCancel: "&"
},
templateUrl: "views/directives/create-secret.html",
link: function(h) {
h.nameValidation = e, h.secretAuthTypeMap = {
image: {
label: g.getString(f("Image Secret")),
authTypes: [ {
id: "kubernetes.io/dockercfg",
label: g.getString(f("Image Registry Credentials"))
}, {
id: "kubernetes.io/dockerconfigjson",
label: g.getString(f("Configuration File"))
} ]
},
source: {
label: g.getString(f("Source Secret")),
authTypes: [ {
id: "kubernetes.io/basic-auth",
label: g.getString(f("Basic Authentication"))
}, {
id: "kubernetes.io/ssh-auth",
label: g.getString(f("SSH Key"))
} ]
}
}, h.secretTypes = _.keys(h.secretAuthTypeMap), h.type ? h.newSecret = {
type: h.type,
authType: h.secretAuthTypeMap[h.type].authTypes[0].id,
data: {},
linkSecret: !_.isEmpty(h.serviceAccountToLink),
pickedServiceAccountToLink: h.serviceAccountToLink || ""
} : h.newSecret = {
type: "source",
authType: "kubernetes.io/basic-auth",
data: {},
linkSecret: !1,
pickedServiceAccountToLink: ""
}, h.add = {
gitconfig: !1,
cacert: !1
}, b.canI("serviceaccounts", "list") && b.canI("serviceaccounts", "update") && c.list("serviceaccounts", h, function(a) {
h.serviceAccounts = a.by("metadata.name"), h.serviceAccountsNames = _.keys(h.serviceAccounts);
});
var i = function(a, b) {
var c = {
apiVersion: "v1",
kind: "Secret",
metadata: {
name: h.newSecret.data.secretName
},
type: b,
data: {}
};
switch (b) {
case "kubernetes.io/basic-auth":
a.passwordToken ? c.data = {
password: window.btoa(a.passwordToken)
} : c.type = "Opaque", a.username && (c.data.username = window.btoa(a.username)), a.gitconfig && (c.data[".gitconfig"] = window.btoa(a.gitconfig)), a.cacert && (c.data["ca.crt"] = window.btoa(a.cacert));
break;

case "kubernetes.io/ssh-auth":
c.data = {
"ssh-privatekey": window.btoa(a.privateKey)
}, a.gitconfig && (c.data[".gitconfig"] = window.btoa(a.gitconfig));
break;

case "kubernetes.io/dockerconfigjson":
var d = window.btoa(a.dockerConfig);
JSON.parse(a.dockerConfig).auths ? c.data[".dockerconfigjson"] = d : (c.type = "kubernetes.io/dockercfg", c.data[".dockercfg"] = d);
break;

case "kubernetes.io/dockercfg":
var e = window.btoa(a.dockerUsername + ":" + a.dockerPassword), f = {};
f[a.dockerServer] = {
username: a.dockerUsername,
password: a.dockerPassword,
email: a.dockerMail,
auth: e
}, c.data[".dockercfg"] = window.btoa(JSON.stringify(f));
}
return c;
}, j = function() {
d.hideNotification("create-secret-error");
}, k = function(b) {
var e = angular.copy(h.serviceAccounts[h.newSecret.pickedServiceAccountToLink]);
switch (h.newSecret.type) {
case "source":
e.secrets.push({
name: b.metadata.name
});
break;

case "image":
e.imagePullSecrets.push({
name: b.metadata.name
});
}
c.update("serviceaccounts", h.newSecret.pickedServiceAccountToLink, e, h).then(function(a) {
d.addNotification({
type: "success",
message: "Secret " + b.metadata.name + " was created and linked with service account " + a.metadata.name + "."
}), h.onCreate({
newSecret: b
});
}, function(c) {
d.addNotification({
type: "success",
message: "Secret " + b.metadata.name + " was created."
}), h.serviceAccountToLink || d.addNotification({
id: "secret-sa-link-error",
type: "error",
message: "An error occurred while linking the secret with service account " + h.newSecret.pickedServiceAccountToLink + ".",
details: a("getErrorDetails")(c)
}), h.onCreate({
newSecret: b
});
});
}, l = _.debounce(function() {
try {
JSON.parse(h.newSecret.data.dockerConfig), h.invalidConfigFormat = !1;
} catch (a) {
h.invalidConfigFormat = !0;
}
}, 300, {
leading: !0
});
h.aceChanged = l, h.nameChanged = function() {
h.nameTaken = !1;
}, h.create = function() {
j();
var e = i(h.newSecret.data, h.newSecret.authType);
c.create("secrets", null, e, h).then(function(a) {
h.newSecret.linkSecret && h.serviceAccountsNames.contains(h.newSecret.pickedServiceAccountToLink) && b.canI("serviceaccounts", "update") ? k(a) : (d.addNotification({
type: "success",
message: "Secret " + e.metadata.name + " was created."
}), h.onCreate({
newSecret: a
}));
}, function(b) {
var c = b.data || {};
return "AlreadyExists" === c.reason ? void (h.nameTaken = !0) : void d.addNotification({
id: "create-secret-error",
type: "error",
message: "An error occurred while creating the secret.",
details: a("getErrorDetails")(b)
});
});
}, h.cancel = function() {
j(), h.onCancel();
};
}
};
} ]), angular.module("openshiftConsole").directive("timeOnlyDurationUntilNow", function() {
return {
restrict: "E",
scope: {
timestamp: "=",
omitSingle: "=?",
precision: "=?"
},
template: '<span data-timestamp="{{timestamp}}" data-time-only="true" class="duration">{{timestamp | timeOnlyDurationFromTimestamps : null}}</span>'
};
}).directive("durationUntilNow", function() {
return {
restrict: "E",
scope: {
timestamp: "=",
omitSingle: "=?",
precision: "=?"
},
template: '<span data-timestamp="{{timestamp}}" data-omit-single="{{omitSingle}}" data-precision="{{precision}}" class="duration">{{timestamp | duration : null : omitSingle : precision}}</span>'
};
}), angular.module("openshiftConsole").directive("deleteLink", [ "$uibModal", "$location", "$filter", "$q", "hashSizeFilter", "APIService", "DataService", "Navigate", "NotificationsService", "Logger", function(a, b, c, d, e, f, g, h, i, j) {
return {
restrict: "E",
scope: {
kind: "@",
group: "@?",
typeDisplayName: "@?",
resourceName: "@",
projectName: "@",
alerts: "=",
displayName: "@",
disableDelete: "=?",
typeNameToConfirm: "=?",
label: "@?",
buttonOnly: "@",
stayOnCurrentPage: "=?",
hpaList: "=?",
success: "=?",
redirectUrl: "@?"
},
templateUrl: function(a, b) {
return angular.isDefined(b.buttonOnly) ? "views/directives/delete-button.html" : "views/directives/delete-link.html";
},
replace: !0,
link: function(d, e, k) {
"Project" === k.kind && (d.isProject = !0), d.options = {
deleteHPAs: !0,
deleteImmediately: !1
};
var l = function(a) {
d.stayOnCurrentPage && d.alerts ? d.alerts[a.name] = a.data : i.addNotification(a.data);
}, m = function(a) {
return g["delete"]({
resource: "horizontalpodautoscalers",
group: "autoscaling"
}, a.metadata.name, {
namespace: d.projectName
}).then(function() {
i.addNotification({
type: "success",
message: "Horizontal pod autoscaler " + a.metadata.name + " was marked for deletion."
});
})["catch"](function(b) {
l({
name: a.metadata.name,
data: {
type: "error",
message: "Horizontal pod autoscaler " + a.metadata.name + " could not be deleted."
}
}), j.error("HPA " + a.metadata.name + " could not be deleted.", b);
});
}, n = function() {
if (!d.stayOnCurrentPage) {
if (d.redirectUrl) return void b.url(d.redirectUrl);
if ("Project" !== d.kind) return void h.toResourceList(f.kindToResource(d.kind), d.projectName);
if ("/" === b.path()) return void d.$emit("deleteProject");
var a = URI("/");
b.url(a);
}
};
d.openDeleteModal = function() {
if (!d.disableDelete) {
var b = a.open({
animation: !0,
templateUrl: "views/modals/delete-resource.html",
controller: "DeleteModalController",
scope: d
});
b.result.then(function() {
var a = d.kind, b = d.resourceName, e = d.typeDisplayName || c("humanizeKind")(a), h = _.capitalize(e) + " '" + (d.displayName ? d.displayName : b) + "'", k = "Project" === d.kind ? {} : {
namespace: d.projectName
}, o = {};
d.options.deleteImmediately && (o.gracePeriodSeconds = 0, o.propagationPolicy = null), "servicecatalog.k8s.io" === d.group && (o.propagationPolicy = null), g["delete"]({
resource: f.kindToResource(a),
group: d.group
}, b, k, o).then(function() {
i.addNotification({
type: "success",
message: h + " was marked for deletion."
}), d.success && d.success(), d.options.deleteHPAs && _.each(d.hpaList, m), n();
})["catch"](function(a) {
l({
name: b,
data: {
type: "error",
message: _.capitalize(h) + "' could not be deleted.",
details: c("getErrorDetails")(a)
}
}), j.error(h + " could not be deleted.", a);
});
});
}
};
}
};
} ]), angular.module("openshiftConsole").directive("editWebhookTriggers", function() {
return {
restrict: "E",
scope: {
type: "@",
typeInfo: "@",
triggers: "=",
bcName: "=",
projectName: "=",
form: "="
},
templateUrl: "views/directives/edit-webhook-triggers.html"
};
}), angular.module("openshiftConsole").directive("editConfigMap", [ "DNS1123_SUBDOMAIN_VALIDATION", function(a) {
return {
require: "^form",
restrict: "E",
scope: {
configMap: "=model",
showNameInput: "="
},
templateUrl: "views/directives/edit-config-map.html",
link: function(b, c, d, e) {
b.form = e, b.nameValidation = a, b.addItem = function() {
b.data.push({
key: "",
value: ""
}), b.form.$setDirty();
}, b.removeItem = function(a) {
b.data.splice(a, 1), b.form.$setDirty();
}, b.getKeys = function() {
return _.map(b.data, "key");
};
var f = b.$watch("configMap.data", function(a) {
a && (b.data = _.map(a, function(a, b) {
return {
key: b,
value: a
};
}), _.sortBy(b.data, "key"), _.isEmpty(b.data) && b.addItem(), f(), b.$watch("data", function(a) {
var c = {};
_.each(a, function(a) {
c[a.key] = a.value;
}), _.set(b, "configMap.data", c);
}, !0));
});
}
};
} ]), function() {
function a(a, b, c, d) {
var e = this, f = b("canI"), g = b("humanizeKind"), h = _.uniqueId();
e.setFocusClass = "edit-environment-from-set-focus-" + h, e.viewOverlayPanel = function(a) {
e.decodedData = a.data, e.overlayPaneEntryDetails = a, "Secret" === a.kind && (e.decodedData = d.decodeSecretData(a.data)), e.overlayPanelVisible = !0;
}, e.closeOverlayPanel = function() {
e.showSecret = !1, e.overlayPanelVisible = !1;
};
var i = function(a, b) {
a && a.push(b || {});
};
e.onAddRow = function() {
i(e.envFromEntries), c.setFocusOn("." + e.setFocusClass);
}, e.deleteEntry = function(a, b) {
e.envFromEntries && !e.envFromEntries.length || (e.envFromEntries.splice(a, b), e.envFromEntries.length || i(e.envFromEntries), e.updateEntries(e.envFromEntries), e.editEnvironmentFromForm.$setDirty());
}, e.hasOptions = function() {
return !_.isEmpty(e.envFromSelectorOptions);
}, e.hasEntries = function() {
return _.some(e.entries, function(a) {
return _.get(a, "configMapRef.name") || _.get(a, "secretRef.name");
});
}, e.isEnvFromReadonly = function(a) {
return e.isReadonly === !0 || a && a.isReadonly === !0;
}, e.groupByKind = function(a) {
return g(a.kind);
}, e.dragControlListeners = {
accept: function(a, b) {
return a.itemScope.sortableScope.$id === b.$id;
},
orderChanged: function() {
e.editEnvironmentFromForm.$setDirty();
}
}, e.envFromObjectSelected = function(a, b, c) {
var d = {};
switch (c.kind) {
case "Secret":
d.secretRef = {
name: c.metadata.name
}, delete e.envFromEntries[a].configMapRef;
break;

case "ConfigMap":
d.configMapRef = {
name: c.metadata.name
}, delete e.envFromEntries[a].secretRef;
}
b.prefix && (d.prefix = b.prefix), _.assign(e.envFromEntries[a], d), e.updateEntries(e.envFromEntries);
}, e.updateEntries = function(a) {
e.entries = _.filter(a, function(a) {
return a.secretRef || a.configMapRef;
});
};
var j = function() {
var a = {}, b = {};
e.envFromEntries = e.entries || [], e.envFromEntries.length || i(e.envFromEntries), _.each(e.envFromSelectorOptions, function(c) {
switch (c.kind) {
case "ConfigMap":
a[c.metadata.name] = c;
break;

case "Secret":
b[c.metadata.name] = c;
}
}), _.each(e.envFromEntries, function(c) {
var d, e;
if (c.configMapRef && (d = "configMapRef", e = "configmaps"), c.secretRef && (d = "secretRef", e = "secrets"), d && e) {
var g = c[d].name;
c.configMapRef && g in a && (c.selectedEnvFrom = a[g]), c.secretRef && g in b && (c.selectedEnvFrom = b[g]), f(e, "get") || (c.isReadonly = !0);
}
});
};
e.$onInit = function() {
j(), "cannotDelete" in a && (e.cannotDeleteAny = !0), "cannotSort" in a && (e.cannotSort = !0), "showHeader" in a && (e.showHeader = !0), e.envFromEntries && !e.envFromEntries.length && i(e.envFromEntries);
}, e.$onChanges = function(a) {
(a.entries || a.envFromSelectorOptions) && j();
};
}
angular.module("openshiftConsole").component("editEnvironmentFrom", {
controller: [ "$attrs", "$filter", "keyValueEditorUtils", "SecretsService", a ],
bindings: {
entries: "=",
envFromSelectorOptions: "<",
isReadonly: "<?"
},
templateUrl: "views/directives/edit-environment-from.html"
});
}(), angular.module("openshiftConsole").directive("events", [ "$routeParams", "$filter", "DataService", "KeywordService", "ProjectsService", "Logger", "gettext", "gettextCatalog", function(a, b, c, d, e, f, g, h) {
return {
restrict: "E",
scope: {
apiObjects: "=?",
projectContext: "="
},
templateUrl: "views/directives/events.html",
controller: [ "$scope", function(a) {
var b, e = {}, i = [];
a.filter = {
text: ""
};
var j = function(a) {
return _.isEmpty(e) ? a : _.filter(a, function(a) {
return e[a.involvedObject.uid];
});
}, k = [], l = _.get(a, "sortConfig.currentField.id"), m = {
lastTimestamp: !0
}, n = function() {
var b = _.get(a, "sortConfig.currentField.id", "lastTimestamp");
l !== b && (l = b, a.sortConfig.isAscending = !m[l]);
var c = a.sortConfig.isAscending ? "asc" : "desc";
k = _.orderBy(a.events, [ b, "metadata.resourceVersion" ], [ c, c ]);
}, o = [], p = function() {
a.filterExpressions = o = d.generateKeywords(_.get(a, "filter.text"));
}, q = [ "reason", "message", "type" ];
a.resourceKind && a.resourceName || q.splice(0, 0, "involvedObject.name", "involvedObject.kind");
var r = function() {
a.filteredEvents = d.filterForKeywords(k, q, o);
};
a.$watch("filter.text", _.debounce(function() {
p(), a.$evalAsync(r);
}, 50, {
maxWait: 250
}));
var s = function() {
n(), r();
}, t = _.debounce(function() {
b && a.$evalAsync(function() {
a.events = j(b), s();
});
}, 250, {
leading: !0,
trailing: !0,
maxWait: 1e3
});
a.$watch("apiObjects", function(c) {
e = {}, _.each(c, function(a) {
var b = _.get(a, "metadata.uid");
b && (e[a.metadata.uid] = !0);
}), a.showKindAndName = 1 !== _.size(e), b && t();
}), a.$watch("showKindAndName", function(b) {
a.sortConfig = {
fields: [ {
id: "lastTimestamp",
title: h.getString(g("Time")),
sortType: "alpha"
}, {
id: "type",
title: h.getString(g("Severity")),
sortType: "alpha"
}, {
id: "reason",
title: h.getString(g("Reason")),
sortType: "alpha"
}, {
id: "message",
title: h.getString(g("Message")),
sortType: "alpha"
}, {
id: "count",
title: h.getString(g("Count")),
sortType: "numeric"
} ],
isAscending: !0,
onSortChange: s
}, b && a.sortConfig.fields.splice(1, 0, {
id: "involvedObject.name",
title: h.getString(g("Name")),
sortType: "alpha"
}, {
id: "involvedObject.kind",
title: h.getString(g("Kind")),
sortType: "alpha"
});
}), i.push(c.watch("events", a.projectContext, function(c) {
b = c.by("metadata.name"), t(), f.log("events (subscribe)", a.filteredEvents);
}, {
skipDigest: !0
})), a.$on("$destroy", function() {
c.unwatchAll(i);
});
} ]
};
} ]), angular.module("openshiftConsole").directive("eventsSidebar", [ "DataService", "Logger", "$rootScope", function(a, b, c) {
return {
restrict: "E",
scope: {
projectContext: "=",
collapsed: "="
},
templateUrl: "views/directives/events-sidebar.html",
controller: [ "$scope", function(d) {
var e = [];
e.push(a.watch("events", d.projectContext, function(a) {
var c = a.by("metadata.name");
d.events = _.orderBy(c, [ "lastTimestamp" ], [ "desc" ]), d.warningCount = _.size(_.filter(c, {
type: "Warning"
})), b.log("events (subscribe)", d.events);
})), d.highlightedEvents = {}, d.collapseSidebar = function() {
d.collapsed = !0;
};
var f = [];
f.push(c.$on("event.resource.highlight", function(a, b) {
var c = _.get(b, "kind"), e = _.get(b, "metadata.name");
c && e && _.each(d.events, function(a) {
a.involvedObject.kind === c && a.involvedObject.name === e && (d.highlightedEvents[c + "/" + e] = !0);
});
})), f.push(c.$on("event.resource.clear-highlight", function(a, b) {
var c = _.get(b, "kind"), e = _.get(b, "metadata.name");
c && e && _.each(d.events, function(a) {
a.involvedObject.kind === c && a.involvedObject.name === e && (d.highlightedEvents[c + "/" + e] = !1);
});
})), d.$on("$destroy", function() {
a.unwatchAll(e), _.each(f, function(a) {
a();
}), f = null;
});
} ]
};
} ]), angular.module("openshiftConsole").directive("eventsBadge", [ "$filter", "DataService", "Logger", function(a, b, c) {
return {
restrict: "E",
scope: {
projectContext: "=",
sidebarCollapsed: "="
},
templateUrl: "views/directives/events-badge.html",
controller: [ "$scope", function(d) {
var e = [], f = a("orderObjectsByDate");
e.push(b.watch("events", d.projectContext, function(a) {
var b = a.by("metadata.name");
d.events = f(b, !0), d.warningCount = _.size(_.filter(b, {
type: "Warning"
})), d.normalCount = _.size(_.filter(b, {
type: "Normal"
})), c.log("events (subscribe)", d.events);
})), d.expandSidebar = function() {
d.sidebarCollapsed = !1;
}, d.$on("$destroy", function() {
b.unwatchAll(e);
});
} ]
};
} ]), angular.module("openshiftConsole").directive("fromFile", [ "$filter", "$location", "$q", "$uibModal", "APIService", "CachedTemplateService", "DataService", "Navigate", "NotificationsService", "QuotaService", "SecurityCheckService", "TaskList", "ProjectsService", "gettext", "gettextCatalog", function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
return {
restrict: "E",
scope: {
project: "=",
isDialog: "="
},
templateUrl: "views/directives/from-file.html",
controller: [ "$scope", function(p) {
function q(a) {
return !!a.kind || (p.error = {
message: "Resource is missing kind field."
}, !1);
}
function r(a) {
return !!p.isList || (a.metadata ? a.metadata.name ? !a.metadata.namespace || a.metadata.namespace === p.input.selectedProject.metadata.name || (p.error = {
message: a.kind + " " + a.metadata.name + " can't be created in project " + a.metadata.namespace + ". Can't create resource in different projects."
}, !1) : (p.error = {
message: "Resource name is missing in metadata field."
}, !1) : (p.error = {
message: "Resource is missing metadata field."
}, !1));
}
function s() {
var a = d.open({
animation: !0,
templateUrl: "views/modals/process-or-save-template.html",
controller: "ProcessOrSaveTemplateModalController",
scope: p
});
a.result.then(function() {
p.templateOptions.add ? u() : (f.setTemplate(p.resourceList[0]), v());
});
}
function t() {
var a = d.open({
animation: !0,
templateUrl: "views/modals/confirm-replace.html",
controller: "ConfirmReplaceModalController",
scope: p
});
a.result.then(function() {
j.getLatestQuotaAlerts(p.createResources, {
namespace: p.input.selectedProject.metadata.name
}).then(G);
});
}
function u() {
var a = p.createResources.length, b = p.updateResources.length;
if (p.resourceKind.endsWith("List")) {
var d = [];
b > 0 && d.push(z()), a > 0 && d.push(y()), c.all(d).then(v);
} else x();
}
function v() {
var a, c;
F(), "Template" === p.resourceKind && p.templateOptions.process && !p.errorOccurred ? p.isDialog ? p.$emit("fileImportedFromYAMLOrJSON", {
project: p.input.selectedProject,
template: p.resource
}) : (c = p.templateOptions.add || p.updateResources.length > 0 ? p.input.selectedProject.metadata.name : "", a = h.createFromTemplateURL(p.resource, p.input.selectedProject.metadata.name, {
namespace: c
}), b.url(a)) : p.isDialog ? p.$emit("fileImportedFromYAMLOrJSON", {
project: p.input.selectedProject,
resource: p.resource,
isList: p.isList
}) : (a = h.projectOverviewURL(p.input.selectedProject.metadata.name), b.url(a));
}
function w(a) {
var b = e.objectToResourceGroupVersion(a);
return b ? e.apiInfo(b) ? g.get(b, a.metadata.name, {
namespace: p.input.selectedProject.metadata.name
}, {
errorNotification: !1
}).then(function(b) {
var c = angular.copy(a), d = angular.copy(b.metadata);
d.annotations = a.metadata.annotations, d.labels = a.metadata.labels, c.metadata = d, p.updateResources.push(c);
}, function() {
p.createResources.push(a);
}) : (p.errorOccurred = !0, void (p.error = {
message: e.unsupportedObjectKindOrVersion(a)
})) : (p.errorOccurred = !0, void (p.error = {
message: e.invalidObjectKindOrVersion(a)
}));
}
function x() {
var b;
_.isEmpty(p.createResources) ? (b = _.head(p.updateResources), g.update(e.kindToResource(b.kind), b.metadata.name, b, {
namespace: p.input.selectedProject.metadata.name
}).then(function() {
if (!p.isDialog) {
var a = B(b.kind);
i.addNotification({
type: "success",
message: _.capitalize(a) + " " + b.metadata.name + " was successfully updated."
});
}
v();
}, function(c) {
i.addNotification({
id: "from-file-error",
type: "error",
message: "Unable to update the " + B(b.kind) + " '" + b.metadata.name + "'.",
details: a("getErrorDetails")(c)
});
})) : (b = _.head(p.createResources), g.create(e.kindToResource(b.kind), null, b, {
namespace: p.input.selectedProject.metadata.name
}).then(function() {
if (!p.isDialog) {
var a = B(b.kind);
i.addNotification({
type: "success",
message: _.capitalize(a) + " " + b.metadata.name + " was successfully created."
});
}
v();
}, function(c) {
i.addNotification({
id: "from-file-error",
type: "error",
message: "Unable to create the " + B(b.kind) + " '" + b.metadata.name + "'.",
details: a("getErrorDetails")(c)
});
}));
}
function y() {
var a = {
started: o.getString(n("Creating resources in project ")) + I(p.input.selectedProject),
success: o.getString(n("Creating resources in project ")) + I(p.input.selectedProject),
failure: o.getString(n("Failed to create some resources in project ")) + I(p.input.selectedProject)
}, b = {};
l.add(a, b, p.input.selectedProject.metadata.name, function() {
var a = c.defer();
return g.batch(p.createResources, {
namespace: p.input.selectedProject.metadata.name
}, "create").then(function(b) {
var c = [], d = !1;
if (b.failure.length > 0) d = !0, p.errorOccurred = !0, b.failure.forEach(function(a) {
c.push({
type: "error",
message: "Cannot create " + B(a.object.kind) + ' "' + a.object.metadata.name + '". ',
details: a.data.message
});
}), b.success.forEach(function(a) {
c.push({
type: "success",
message: "Created " + B(a.kind) + ' "' + a.metadata.name + '" successfully. '
});
}); else {
var e;
e = p.isList ? "All items in list were created successfully." : B(p.resourceKind) + " " + p.resourceName + " was successfully created.", c.push({
type: "success",
message: e
});
}
a.resolve({
alerts: c,
hasErrors: d
});
}), a.promise;
});
}
function z() {
var a = {
started: o.getString(n("Updating resources in project ")) + I(p.input.selectedProject),
success: o.getString(n("Updated resources in project ")) + I(p.input.selectedProject),
failure: o.getString(n("Failed to update some resources in project ")) + I(p.input.selectedProject)
}, b = {};
l.add(a, b, p.input.selectedProject.metadata.name, function() {
var a = c.defer();
return g.batch(p.updateResources, {
namespace: p.input.selectedProject.metadata.name
}, "update").then(function(b) {
var c = [], d = !1;
if (b.failure.length > 0) d = !0, p.errorOccurred = !0, b.failure.forEach(function(a) {
c.push({
type: "error",
message: "Cannot update " + B(a.object.kind) + ' "' + a.object.metadata.name + '". ',
details: a.data.message
});
}), b.success.forEach(function(a) {
c.push({
type: "success",
message: "Updated " + B(a.kind) + ' "' + a.metadata.name + '" successfully. '
});
}); else {
var e;
e = p.isList ? "All items in list were updated successfully." : B(p.resourceKind) + " " + p.resourceName + " was successfully updated.", c.push({
type: "success",
message: e
});
}
a.resolve({
alerts: c,
hasErrors: d
});
}, function(b) {
var c = [];
c.push({
type: "error",
message: "An error occurred updating the resources.",
details: "Status: " + b.status + ". " + b.data
}), a.resolve({
alerts: c
});
}), a.promise;
});
}
var A;
p.noProjectsCantCreate = !1;
var B = a("humanizeKind"), C = a("getErrorDetails");
l.clear(), p.$on("no-projects-cannot-create", function() {
p.noProjectsCantCreate = !0;
}), p.input = {
selectedProject: p.project
}, p.$watch("input.selectedProject.metadata.name", function() {
p.projectNameTaken = !1;
}), p.aceLoaded = function(a) {
A = a.getSession(), A.setOption("tabSize", 2), A.setOption("useSoftTabs", !0), a.setDragDelay = 0, a.$blockScrolling = 1 / 0;
};
var D = function(a) {
var b = d.open({
animation: !0,
templateUrl: "views/modals/confirm.html",
controller: "ConfirmModalController",
resolve: {
modalConfig: function() {
return {
alerts: a,
message: o.getString(n("We checked your application for potential problems. Please confirm you still want to create this application.")),
okButtonText: o.getString(n("Create Anyway")),
okButtonClass: "btn-danger",
cancelButtonText: o.getString(n("Cancel"))
};
}
}
});
b.result.then(u);
}, E = {}, F = function() {
i.hideNotification("from-file-error"), _.each(E, function(a) {
!a.id || "error" !== a.type && "warning" !== a.type || i.hideNotification(a.id);
});
}, G = function(a) {
F(), E = k.getSecurityAlerts(p.createResources, p.input.selectedProject.metadata.name);
var b = a.quotaAlerts || [];
E = E.concat(b);
var c = _.filter(E, {
type: "error"
});
c.length ? (_.each(E, function(a) {
a.id = _.uniqueId("from-file-alert-"), i.addNotification(a);
}), p.disableInputs = !1) : E.length ? (D(E), p.disableInputs = !1) : u();
}, H = function() {
if (_.has(p.input.selectedProject, "metadata.uid")) return c.when(p.input.selectedProject);
var b = p.input.selectedProject.metadata.name, d = p.input.selectedProject.metadata.annotations["new-display-name"], e = a("description")(p.input.selectedProject);
return m.create(b, d, e);
};
p.create = function() {
if (delete p.error, q(p.resource) && (p.resourceKind = p.resource.kind, p.resourceKind.endsWith("List") ? p.isList = !0 : p.isList = !1, r(p.resource))) {
p.isList ? (p.resourceList = p.resource.items, p.resourceName = "") : (p.resourceList = [ p.resource ], p.resourceName = p.resource.metadata.name, "Template" === p.resourceKind && (p.templateOptions = {
process: !0,
add: !1
})), p.updateResources = [], p.createResources = [];
var a = [];
p.errorOccurred = !1, _.forEach(p.resourceList, function(b) {
return r(b) ? void a.push(w(b)) : (p.errorOccurred = !0, !1);
}), H().then(function(b) {
p.input.selectedProject = b, c.all(a).then(function() {
p.errorOccurred || (1 === p.createResources.length && "Template" === p.resourceList[0].kind ? s() : _.isEmpty(p.updateResources) ? j.getLatestQuotaAlerts(p.createResources, {
namespace: p.input.selectedProject.metadata.name
}).then(G) : (p.updateTemplate = 1 === p.updateResources.length && "Template" === p.updateResources[0].kind, p.updateTemplate ? s() : t()));
});
}, function(a) {
"AlreadyExists" === a.data.reason ? p.projectNameTaken = !0 : i.addNotification({
id: "import-create-project-error",
type: "error",
message: "An error occurred creating project.",
details: C(a)
});
});
}
}, p.cancel = function() {
F(), h.toProjectOverview(p.input.selectedProject.metadata.name);
};
var I = a("displayName");
p.$on("importFileFromYAMLOrJSON", p.create), p.$on("$destroy", F);
} ]
};
} ]), angular.module("openshiftConsole").directive("oscFileInput", [ "Logger", function(a) {
return {
restrict: "E",
scope: {
model: "=",
required: "=",
disabled: "=ngDisabled",
readonly: "=ngReadonly",
showTextArea: "=",
hideClear: "=?",
helpText: "@?",
dropZoneId: "@?"
},
templateUrl: "views/directives/osc-file-input.html",
link: function(b, c) {
function d() {
var a = c.find(".drag-and-drop-zone");
a.on("dragover", function() {
b.disabled || (a.addClass("highlight-drag-and-drop-zone"), i = !0);
}), c.find(".drag-and-drop-zone p").on("dragover", function() {
b.disabled || (i = !0);
}), a.on("dragleave", function() {
b.disabled || (i = !1, _.delay(function() {
i || a.removeClass("highlight-drag-and-drop-zone");
}, 200));
}), a.on("drop", function(a) {
if (!b.disabled) {
var c = _.get(a, "originalEvent.dataTransfer.files", []);
return c.length > 0 && (b.file = _.head(c), e(b.file)), f(), $(".drag-and-drop-zone").trigger("putDropZoneFront", !1), $(".drag-and-drop-zone").trigger("reset"), !1;
}
});
var d = function(a, b) {
var c = b.offset(), d = b.outerWidth(), e = b.outerHeight();
a.css({
height: e + 6,
width: d + 6,
top: c.top,
left: c.left,
position: "fixed",
"z-index": 100
});
};
a.on("putDropZoneFront", function(a, e) {
if (!b.disabled) {
var f, g = c.find(".drag-and-drop-zone");
return e ? (f = b.dropZoneId ? $("#" + b.dropZoneId) : c, d(g, f)) : g.css("z-index", "-1"), !1;
}
}), a.on("reset", function() {
if (!b.disabled) return j = !1, !1;
});
}
function e(c) {
var d = new FileReader();
d.onloadend = function() {
b.$apply(function() {
b.fileName = c.name, b.model = d.result;
});
}, d.onerror = function(c) {
b.supportsFileUpload = !1, b.uploadError = !0, a.error("Could not read file", c);
}, d.readAsText(c);
}
function f() {
c.find(".drag-and-drop-zone").removeClass("show-drag-and-drop-zone highlight-drag-and-drop-zone");
}
var g = _.uniqueId("osc-file-input-");
b.dropMessageID = g + "-drop-message", b.helpID = g + "-help", b.supportsFileUpload = window.File && window.FileReader && window.FileList && window.Blob, b.uploadError = !1;
var h = "#" + b.dropMessageID, i = !1, j = !1, k = c.find("input[type=file]");
setTimeout(d), $(document).on("drop." + g, function() {
return f(), c.find(".drag-and-drop-zone").trigger("putDropZoneFront", !1), !1;
}), $(document).on("dragenter." + g, function() {
if (!b.disabled) return j = !0, c.find(".drag-and-drop-zone").addClass("show-drag-and-drop-zone"), c.find(".drag-and-drop-zone").trigger("putDropZoneFront", !0), !1;
}), $(document).on("dragover." + g, function() {
if (!b.disabled) return j = !0, c.find(".drag-and-drop-zone").addClass("show-drag-and-drop-zone"), !1;
}), $(document).on("dragleave." + g, function() {
return j = !1, _.delay(function() {
j || c.find(".drag-and-drop-zone").removeClass("show-drag-and-drop-zone");
}, 200), !1;
}), b.cleanInputValues = function() {
b.model = "", b.fileName = "", k[0].value = "";
}, k.change(function() {
e(k[0].files[0]);
}), b.$on("$destroy", function() {
$(h).off(), $(document).off("drop." + g).off("dragenter." + g).off("dragover." + g).off("dragleave." + g);
});
}
};
} ]), angular.module("openshiftConsole").directive("oscFormSection", function() {
return {
restrict: "E",
transclude: !0,
scope: {
header: "@",
about: "@",
aboutTitle: "@",
editText: "@",
expand: "=?",
canToggle: "=?"
},
templateUrl: "views/directives/osc-form-section.html",
link: function(a, b, c) {
c.editText || (c.editText = "Edit"), angular.isDefined(c.canToggle) || (a.canToggle = !0), a.toggle = function() {
a.expand = !a.expand;
};
}
};
}), angular.module("openshiftConsole").directive("oscGitLink", [ "$filter", function(a) {
return {
restrict: "E",
scope: {
uri: "=",
ref: "=",
contextDir: "="
},
transclude: !0,
link: function(b) {
var c = a("isAbsoluteURL"), d = a("githubLink");
b.$watchGroup([ "uri", "ref", "contextDir" ], function() {
b.gitLink = d(b.uri, b.ref, b.contextDir), b.isLink = c(b.gitLink);
});
},
template: '<a ng-if="isLink" ng-href="{{gitLink}}" ng-transclude target="_blank"></a><span ng-if="!isLink" ng-transclude></span>'
};
} ]), angular.module("openshiftConsole").directive("oscImageSummary", function() {
return {
restrict: "E",
scope: {
resource: "=",
name: "=",
tag: "="
},
templateUrl: "views/directives/osc-image-summary.html"
};
}), angular.module("openshiftConsole").directive("oscRouting", [ "$filter", "Constants", "gettextCatalog", "gettext", "DNS1123_SUBDOMAIN_VALIDATION", function(a, b, c, d, e) {
return {
require: "^form",
restrict: "E",
scope: {
route: "=model",
services: "=",
showNameInput: "=",
routingDisabled: "=",
existingRoute: "="
},
templateUrl: "views/directives/osc-routing.html",
link: function(f, g, h, i) {
f.form = i, f.controls = {}, f.options = {
secureRoute: !1,
alternateServices: !1
};
var j = {
group: "route.openshift.io",
resource: "routes/custom-host"
};
f.canICreateCustomHosts = a("canI")(j, "create"), f.canIUpdateCustomHosts = a("canI")(j, "update");
var k = function() {
return f.existingRoute ? f.canIUpdateCustomHosts : f.canICreateCustomHosts;
};
f.isHostnameReadOnly = function() {
return !k();
}, f.disableWildcards = b.DISABLE_WILDCARD_ROUTES, f.areCertificateInputsReadOnly = function() {
return !k();
}, f.areCertificateInputsDisabled = function() {
var a = _.get(f, "route.tls.termination");
return !a || "passthrough" === a;
}, f.isDestinationCACertInputDisabled = function() {
return "reencrypt" !== _.get(f, "route.tls.termination");
}, f.insecureTrafficOptions = [ {
value: "",
label: c.getString(d("None"))
}, {
value: "Allow",
label: c.getString(d("Allow"))
}, {
value: "Redirect",
label: c.getString(d("Redirect"))
} ], _.has(f, "route.tls.insecureEdgeTerminationPolicy") || _.set(f, "route.tls.insecureEdgeTerminationPolicy", "");
var l = function() {
var a = "passthrough" !== _.get(f, "route.tls.termination") || "Allow" !== _.get(f, "route.tls.insecureEdgeTerminationPolicy");
f.routeForm.insecureTraffic.$setValidity("passthrough", a);
};
f.$watchGroup([ "route.tls.termination", "route.tls.insecureEdgeTerminationPolicy" ], l), f.nameValidation = e, f.disableWildcards ? f.hostnamePattern = e.pattern : f.hostnamePattern = /^(\*(\.[a-z0-9]([-a-z0-9]*[a-z0-9]))+|[a-z0-9]([-a-z0-9]*[a-z0-9])?(\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*)$/, f.hostnameMaxLength = e.maxlength;
var m = function(a) {
if (a) {
var b = _.get(a, "spec.ports", []);
f.unnamedServicePort = 1 === b.length && !b[0].name, b.length && !f.unnamedServicePort ? f.route.portOptions = _.map(b, function(a) {
return {
port: a.name,
label: a.port + " → " + a.targetPort + " (" + a.protocol + ")"
};
}) : f.route.portOptions = [];
}
};
f.services && !f.route.service && (f.route.service = _.find(f.services)), f.servicesByName, f.services ? f.servicesByName = _.keyBy(f.services, "metadata.name") : f.servicesByName = {}, f.$watch("route.to.name", function(a, b) {
m(f.servicesByName[a]), a === b && f.route.targetPort || (f.route.targetPort = _.get(f, "route.portOptions[0].port")), f.services && (f.alternateServiceOptions = _.reject(f.services, function(b) {
return a === b.metadata.name;
}));
}), f.$watch("route.alternateServices", function(a) {
f.duplicateServices = _(a).map("name").filter(function(a, b, c) {
return _.includes(c, a, b + 1);
}).value(), i.$setValidity("duplicateServices", !f.duplicateServices.length), f.options.alternateServices = !_.isEmpty(a);
}, !0);
var n = function() {
return !!f.route.tls && ((!f.route.tls.termination || "passthrough" === f.route.tls.termination) && (f.route.tls.certificate || f.route.tls.key || f.route.tls.caCertificate || f.route.tls.destinationCACertificate));
};
f.$watch("route.tls.termination", function() {
f.options.secureRoute = !!_.get(f, "route.tls.termination"), f.showCertificatesNotUsedWarning = n();
});
var o;
f.$watch("options.secureRoute", function(a, b) {
if (a !== b) {
var c = _.get(f, "route.tls.termination");
!f.securetRoute && c && (o = c, delete f.route.tls.termination), f.options.secureRoute && !c && _.set(f, "route.tls.termination", o || "edge");
}
}), f.$watch("options.alternateServices", function(a, b) {
a !== b && (a || (f.route.alternateServices = []), a && _.isEmpty(f.route.alternateServices) && f.addAlternateService());
}), f.addAlternateService = function() {
f.route.alternateServices = f.route.alternateServices || [];
var a = _.find(f.services, function(a) {
return a.metadata.name !== f.route.to.service && !_.some(f.route.alternateServices, {
service: a.metadata.name
});
});
_.has(f, "route.to.weight") || _.set(f, "route.to.weight", 1), f.route.alternateServices.push({
service: a.metadata.name,
weight: 1
});
}, f.weightAsPercentage = function(a, b) {
a = a || 0;
var c = _.get(f, "route.to.weight", 0);
if (_.each(f.route.alternateServices, function(a) {
c += _.get(a, "weight", 0);
}), !c) return "";
var d = a / c * 100;
return b ? d3.round(d, 1) + "%" : d;
};
var p = !1;
f.$watch("route.alternateServices.length", function(a) {
if (0 === a && _.has(f, "route.to.weight") && delete f.route.to.weight, 1 === a) {
if (0 === f.route.to.weight && 0 === f.route.alternateServices[0].weight) return void (f.controls.hideSlider = !0);
p = !0, f.controls.rangeSlider = f.weightAsPercentage(f.route.to.weight);
}
}), f.$watch("controls.rangeSlider", function(a, b) {
return p ? void (p = !1) : void (a !== b && (a = parseInt(a, 10), _.set(f, "route.to.weight", a), _.set(f, "route.alternateServices[0].weight", 100 - a)));
});
}
};
} ]).directive("oscRoutingService", function() {
return {
restrict: "E",
scope: {
model: "=",
serviceOptions: "=",
allServices: "=",
isAlternate: "=?",
showWeight: "=?",
warnUnnamedPort: "=?"
},
templateUrl: "views/directives/osc-routing-service.html",
link: function(a, b, c, d) {
a.form = d, a.id = _.uniqueId("osc-routing-service-"), a.$watchGroup([ "model.name", "serviceOptions" ], function() {
if (_.isEmpty(a.serviceOptions)) return void (a.optionsNames = []);
var b = _.get(a, "model.name");
a.optionNames = [], a.selectedExists = !1, a.optionNames = _.map(a.serviceOptions, "metadata.name"), b && !a.allServices[b] && a.optionNames.push(b), b || _.set(a, "model.name", _.head(a.optionNames));
});
}
};
}), angular.module("openshiftConsole").directive("oscPersistentVolumeClaim", [ "$filter", "DataService", "LimitRangesService", "QuotaService", "ModalsService", "gettextCatalog", "gettext", "DNS1123_SUBDOMAIN_VALIDATION", function(a, b, c, d, e, f, g, h) {
return {
restrict: "E",
scope: {
claim: "=model",
projectName: "="
},
templateUrl: "views/directives/osc-persistent-volume-claim.html",
link: function(i) {
var j = a("amountAndUnit"), k = a("usageValue");
i.nameValidation = h, i.storageClasses = [], i.defaultStorageClass = "", i.claim.unit = "Gi", i.units = [ {
value: "Mi",
label: "MiB"
}, {
value: "Gi",
label: "GiB"
}, {
value: "Ti",
label: "TiB"
} ], i.claim.selectedLabels = [];
var l = [];
i.$watch("useLabels", function(a, b) {
a !== b && (a ? i.claim.selectedLabels = l : (l = i.claim.selectedLabels, i.claim.selectedLabels = []));
}), i.groupUnits = function(a) {
switch (a.value) {
case "Mi":
case "Gi":
case "Ti":
return f.getString(g("Binary Units"));

case "M":
case "G":
case "T":
return f.getString(g("Decimal Units"));
}
return "";
}, i.showComputeUnitsHelp = function() {
e.showComputeUnitsHelp();
};
var m = function() {
var a = i.claim.amount && k(i.claim.amount + i.claim.unit), b = _.has(i, "limits.min") && k(i.limits.min), c = _.has(i, "limits.max") && k(i.limits.max), d = !0, e = !0;
a && b && (d = a >= b), a && c && (e = a <= c), i.persistentVolumeClaimForm.capacity.$setValidity("limitRangeMin", d), i.persistentVolumeClaimForm.capacity.$setValidity("limitRangeMax", e);
}, n = function() {
var a = d.isAnyStorageQuotaExceeded(i.quotas, i.clusterQuotas), b = d.willRequestExceedQuota(i.quotas, i.clusterQuotas, "requests.storage", i.claim.amount + i.claim.unit);
i.persistentVolumeClaimForm.capacity.$setValidity("willExceedStorage", !b), i.persistentVolumeClaimForm.capacity.$setValidity("outOfClaims", !a);
};
b.list({
group: "storage.k8s.io",
resource: "storageclasses"
}, {}, function(b) {
var c = b.by("metadata.name");
if (!_.isEmpty(c)) {
i.storageClasses = _.sortBy(c, "metadata.name");
var d = a("annotation");
if (i.defaultStorageClass = _.find(i.storageClasses, function(a) {
return "true" === d(a, "storageclass.beta.kubernetes.io/is-default-class");
}), i.defaultStorageClass) i.claim.storageClass = i.defaultStorageClass; else {
var e = {
metadata: {
name: "No Storage Class",
labels: {},
annotations: {
description: "No storage class will be assigned"
}
}
};
i.storageClasses.unshift(e);
}
}
}, {
errorNotification: !1
}), b.list("limitranges", {
namespace: i.projectName
}, function(a) {
var b = a.by("metadata.name");
if (!_.isEmpty(b)) {
i.limits = c.getEffectiveLimitRange(b, "storage", "PersistentVolumeClaim");
var d;
if (i.limits.min && i.limits.max) {
var e = k(i.limits.min), f = k(i.limits.max);
e === f && (d = j(i.limits.max), i.claim.amount = Number(d[0]), i.claim.unit = d[1], i.capacityReadOnly = !0);
}
i.$watchGroup([ "claim.amount", "claim.unit" ], m);
}
}), b.list("resourcequotas", {
namespace: i.projectName
}, function(a) {
i.quotas = a.by("metadata.name"), i.$watchGroup([ "claim.amount", "claim.unit" ], n);
}), b.list("appliedclusterresourcequotas", {
namespace: i.projectName
}, function(a) {
i.clusterQuotas = a.by("metadata.name");
});
}
};
} ]), angular.module("openshiftConsole").directive("oscAutoscaling", [ "HPAService", "LimitRangesService", "DNS1123_SUBDOMAIN_VALIDATION", function(a, b, c) {
return {
restrict: "E",
scope: {
autoscaling: "=model",
project: "=",
showNameInput: "=?",
nameReadOnly: "=?"
},
templateUrl: "views/directives/osc-autoscaling.html",
link: function(d) {
d.nameValidation = c, d.$watch("project", function() {
if (d.project) {
d.isRequestCalculated = b.isRequestCalculated("cpu", d.project);
var c = window.OPENSHIFT_CONSTANTS.DEFAULT_HPA_CPU_TARGET_PERCENT;
d.isRequestCalculated && (c = a.convertLimitPercentToRequest(c, d.project)), _.set(d, "autoscaling.defaultTargetCPU", c), d.defaultTargetCPUDisplayValue = window.OPENSHIFT_CONSTANTS.DEFAULT_HPA_CPU_TARGET_PERCENT;
var e = !1, f = function(b) {
return e ? void (e = !1) : (b && d.isRequestCalculated && (b = a.convertRequestPercentToLimit(b, d.project)), void _.set(d, "targetCPUInput.percent", b));
};
d.$watch("autoscaling.targetCPU", f);
var g = function(b) {
b && d.isRequestCalculated && (b = a.convertLimitPercentToRequest(b, d.project)), e = !0, _.set(d, "autoscaling.targetCPU", b);
};
d.$watch("targetCPUInput.percent", function(a, b) {
a !== b && g(a);
});
}
});
}
};
} ]), angular.module("openshiftConsole").directive("oscSecrets", [ "$uibModal", "$filter", "DataService", "SecretsService", function(a, b, c, d) {
return {
restrict: "E",
scope: {
pickedSecrets: "=model",
secretsByType: "=",
namespace: "=",
displayType: "@",
type: "@",
alerts: "=",
disableInput: "=",
serviceAccountToLink: "@?",
allowMultipleSecrets: "=?"
},
templateUrl: "views/directives/osc-secrets.html",
link: function(b) {
b.canAddSourceSecret = function() {
if (!b.allowMultipleSecrets) return !1;
var a = _.last(b.pickedSecrets);
return !!a && a.name;
}, b.setLastSecretsName = function(a) {
var c = _.last(b.pickedSecrets);
c.name = a;
}, b.addSourceSecret = function() {
b.pickedSecrets.push({
name: ""
});
}, b.removeSecret = function(a) {
1 === b.pickedSecrets.length ? b.pickedSecrets = [ {
name: ""
} ] : b.pickedSecrets.splice(a, 1), b.secretsForm.$setDirty();
}, b.openCreateSecretModal = function() {
b.newSecret = {};
var e = a.open({
animation: !0,
backdrop: "static",
templateUrl: "views/modals/create-secret.html",
controller: "CreateSecretModalController",
scope: b
});
e.result.then(function(a) {
c.list("secrets", {
namespace: b.namespace
}, function(c) {
var e = d.groupSecretsByType(c), f = _.mapValues(e, function(a) {
return _.map(a, "metadata.name");
});
b.secretsByType = _.each(f, function(a) {
a.unshift("");
}), b.setLastSecretsName(a.metadata.name), b.secretsForm.$setDirty();
});
});
};
}
};
} ]), angular.module("openshiftConsole").directive("oscSourceSecrets", [ "$uibModal", "$filter", "DataService", "SecretsService", function(a, b, c, d) {
return {
restrict: "E",
scope: {
pickedSecrets: "=model",
secretsByType: "=",
strategyType: "=",
type: "@",
displayType: "@",
namespace: "=",
alerts: "=",
serviceAccountToLink: "@?"
},
templateUrl: "views/directives/osc-source-secrets.html",
link: function(b) {
b.canAddSourceSecret = function() {
var a = _.last(b.pickedSecrets);
switch (b.strategyType) {
case "Custom":
return _.get(a, "secretSource.name");

default:
return _.get(a, "secret.name");
}
}, b.setLastSecretsName = function(a) {
var c = _.last(b.pickedSecrets);
switch (b.strategyType) {
case "Custom":
return void (c.secretSource.name = a);

default:
return void (c.secret.name = a);
}
}, b.addSourceSecret = function() {
switch (b.strategyType) {
case "Custom":
return void b.pickedSecrets.push({
secretSource: {
name: ""
},
mountPath: ""
});

default:
return void b.pickedSecrets.push({
secret: {
name: ""
},
destinationDir: ""
});
}
}, b.removeSecret = function(a) {
if (1 === b.pickedSecrets.length) switch (b.strategyType) {
case "Custom":
b.pickedSecrets = [ {
secretSource: {
name: ""
},
mountPath: ""
} ];
break;

default:
b.pickedSecrets = [ {
secret: {
name: ""
},
destinationDir: ""
} ];
} else b.pickedSecrets.splice(a, 1);
b.secretsForm.$setDirty();
}, b.openCreateSecretModal = function() {
var e = a.open({
animation: !0,
templateUrl: "views/modals/create-secret.html",
controller: "CreateSecretModalController",
scope: b
});
e.result.then(function(a) {
c.list("secrets", {
namespace: b.namespace
}, function(c) {
var e = d.groupSecretsByType(c), f = _.mapValues(e, function(a) {
return _.map(a, "metadata.name");
});
b.secretsByType = _.each(f, function(a) {
a.unshift("");
}), b.setLastSecretsName(a.metadata.name);
});
});
};
}
};
} ]), angular.module("openshiftConsole").directive("replicas", function() {
return {
restrict: "E",
scope: {
status: "=?",
spec: "=",
disableScaling: "=?",
scaleFn: "&?",
deployment: "="
},
templateUrl: "views/directives/replicas.html",
link: function(a) {
a.model = {
editing: !1
}, a.scale = function() {
a.form.scaling.$valid && (a.scaleFn({
replicas: a.model.desired
}), a.model.editing = !1);
}, a.cancel = function() {
a.model.editing = !1;
};
}
};
}), angular.module("openshiftConsole").directive("containerStatuses", [ "$filter", function(a) {
return {
restrict: "E",
scope: {
pod: "=",
onDebugTerminal: "=?",
detailed: "=?"
},
templateUrl: "views/_container-statuses.html",
link: function(b) {
b.hasDebugTerminal = angular.isFunction(b.onDebugTerminal);
var c = a("isContainerTerminatedSuccessfully"), d = function(a) {
return _.every(a, c);
};
b.$watch("pod", function(a) {
b.initContainersTerminated = d(a.status.initContainerStatuses), b.expandInitContainers !== !1 && (b.expandInitContainers = !b.initContainersTerminated);
}), b.toggleInitContainer = function() {
b.expandInitContainers = !b.expandInitContainers;
}, b.showDebugAction = function(c) {
if ("Completed" === _.get(b.pod, "status.phase")) return !1;
if (a("annotation")(b.pod, "openshift.io/build.name")) return !1;
if (a("isDebugPod")(b.pod)) return !1;
var d = _.get(c, "state.waiting.reason");
return "ImagePullBackOff" !== d && "ErrImagePull" !== d && (!_.get(c, "state.running") || !c.ready);
}, b.debugTerminal = function(a) {
if (b.hasDebugTerminal) return b.onDebugTerminal.call(this, a);
};
}
};
} ]).directive("podTemplate", function() {
return {
restrict: "E",
scope: {
podTemplate: "=",
imagesByDockerReference: "=",
builds: "=",
detailed: "=?",
addHealthCheckUrl: "@?"
},
templateUrl: "views/_pod-template.html"
};
}).directive("podTemplateContainer", function() {
return {
restrict: "E",
scope: {
container: "=podTemplateContainer",
imagesByDockerReference: "=",
builds: "=",
detailed: "=?",
labelPrefix: "@?"
},
templateUrl: "views/_pod-template-container.html"
};
}).directive("annotations", function() {
return {
restrict: "E",
scope: {
annotations: "="
},
templateUrl: "views/directives/annotations.html",
link: function(a) {
a.expandAnnotations = !1, a.toggleAnnotations = function() {
a.expandAnnotations = !a.expandAnnotations;
};
}
};
}).directive("registryAnnotations", function() {
return {
restrict: "E",
priority: 1,
terminal: !0,
scope: {
annotations: "="
},
templateUrl: "views/directives/annotations.html",
link: function(a) {
a.expandAnnotations = !1, a.toggleAnnotations = function() {
a.expandAnnotations = !a.expandAnnotations;
};
}
};
}).directive("volumes", function() {
return {
restrict: "E",
scope: {
volumes: "=",
namespace: "=",
canRemove: "=?",
removeFn: "&?"
},
templateUrl: "views/_volumes.html"
};
}).directive("volumeClaimTemplates", function() {
return {
restrict: "E",
scope: {
templates: "="
},
templateUrl: "views/_volume-claim-templates.html"
};
}).directive("hpa", function() {
return {
restrict: "E",
scope: {
hpa: "=",
project: "=",
showScaleTarget: "=?",
alerts: "="
},
templateUrl: "views/directives/hpa.html"
};
}).directive("probe", function() {
return {
restrict: "E",
scope: {
probe: "="
},
templateUrl: "views/directives/_probe.html"
};
}).directive("podsTable", [ "$filter", function(a) {
return {
restrict: "E",
scope: {
pods: "=",
activePods: "=?",
emptyMessage: "=?",
customNameHeader: "=?",
podFailureReasons: "=?"
},
templateUrl: "views/directives/pods-table.html",
link: function(b) {
var c = a("orderObjectsByDate"), d = _.debounce(function(a) {
b.$evalAsync(function() {
b.sortedPods = c(a, !0);
});
}, 150, {
maxWait: 500
});
b.$watch("pods", d);
}
};
} ]).directive("trafficTable", function() {
return {
restrict: "E",
scope: {
routes: "=",
services: "=",
portsByRoute: "=",
showNodePorts: "=?",
customNameHeader: "=?"
},
templateUrl: "views/directives/traffic-table.html"
};
}), angular.module("openshiftConsole").component("resourceServiceBindings", {
controller: [ "$filter", "APIService", "BindingService", "CatalogService", "DataService", ResourceServiceBindings ],
controllerAs: "$ctrl",
bindings: {
project: "<",
projectContext: "<",
apiObject: "<",
createBinding: "&"
},
templateUrl: "views/directives/resource-service-bindings.html"
}), angular.module("openshiftConsole").component("serviceInstanceBindings", {
controller: [ "$filter", "APIService", "BindingService", ServiceInstanceBindings ],
controllerAs: "$ctrl",
bindings: {
isOverview: "<?",
showHeader: "<?",
project: "<",
bindings: "<",
serviceInstance: "<",
serviceClass: "<",
servicePlan: "<"
},
templateUrl: "views/directives/service-instance-bindings.html"
}), angular.module("openshiftConsole").directive("sidebar", [ "$location", "$filter", "$timeout", "$rootScope", "$routeParams", "AuthorizationService", "Constants", "HTMLService", function(a, b, c, d, e, f, g, h) {
var i = function(a, b) {
return a.href === b || _.some(a.prefixes, function(a) {
return _.startsWith(b, a);
});
};
return {
restrict: "E",
templateUrl: "views/_sidebar.html",
controller: [ "$scope", function(j) {
var k, l = 200, m = l + 100;
j.navItems = g.PROJECT_NAVIGATION, j.sidebar = {};
var n = function() {
j.projectName = e.project, _.set(j, "sidebar.secondaryOpen", !1), _.set(d, "nav.showMobileNav", !1), j.activeSecondary = null, j.activePrimary = _.find(j.navItems, function(b) {
return k = a.path().replace("/project/" + j.projectName, ""), i(b, k) ? (j.activeSecondary = null, !0) : _.some(b.secondaryNavSections, function(a) {
var b = _.find(a.items, function(a) {
return i(a, k);
});
return !!b && (j.activeSecondary = b, !0);
});
});
};
n(), j.$on("$routeChangeSuccess", n);
var o = function() {
_.each(j.navItems, function(a) {
a.isHover = !1;
});
};
j.navURL = function(a) {
return a ? b("isAbsoluteURL")(a) ? a : "project/" + j.projectName + a : "";
}, j.show = function(a) {
var b = !a.isValid || a.isValid();
return !!b && (!a.canI || f.canI({
resource: a.canI.resource,
group: a.canI.group
}, a.canI.verb, j.projectName));
}, j.itemClicked = function(a) {
return o(), a.href ? (j.nav.showMobileNav = !1, void (j.sidebar.secondaryOpen = !1)) : (a.isHover = !0, a.mobileSecondary = j.isMobile, j.sidebar.showMobileSecondary = j.isMobile, void (j.sidebar.secondaryOpen = !0));
}, j.onMouseEnter = function(a) {
a.mouseLeaveTimeout && (c.cancel(a.mouseLeaveTimeout), a.mouseLeaveTimeout = null), a.mouseEnterTimeout = c(function() {
a.isHover = !0, a.mouseEnterTimeout = null, j.sidebar.secondaryOpen = !_.isEmpty(a.secondaryNavSections);
}, l);
}, j.onMouseLeave = function(a) {
a.mouseEnterTimeout && (c.cancel(a.mouseEnterTimeout), a.mouseEnterTimeout = null), a.mouseLeaveTimeout = c(function() {
a.isHover = !1, a.mouseLeaveTimeout = null, j.sidebar.secondaryOpen = _.some(j.navItems, function(a) {
return a.isHover && !_.isEmpty(a.secondaryNavSections);
});
}, m);
}, j.closeNav = function() {
o(), j.nav.showMobileNav = !1, j.sidebar.secondaryOpen = !1;
}, j.collapseMobileSecondary = function(a, b) {
a.mobileSecondary = !1, b.stopPropagation();
};
var p = function() {
return h.isWindowBelowBreakpoint(h.WINDOW_SIZE_SM);
};
j.isMobile = p();
var q = _.throttle(function() {
var a = p();
a !== j.isMobile && j.$evalAsync(function() {
j.isMobile = a, a || (_.set(d, "nav.showMobileNav", !1), _.each(j.navItems, function(a) {
a.mobileSecondary = !1;
}));
});
}, 50);
$(window).on("resize.verticalnav", q), j.$on("$destroy", function() {
$(window).off(".verticalnav");
});
} ]
};
<<<<<<< HEAD
<<<<<<< ff3f303f420f4b91730a7540d983ad838c1066d8
<<<<<<< 5479afb30c5f67d0d51d56d622dc9a98171c3daa
<<<<<<< f031155cabf95008dd80f3c7d1371f4e0a0705dd
<<<<<<< a8a6721a66ecf6e0309b8cb7e496a9db1b4eccf6
} ]).directive("projectHeader", [ "$timeout", "$location", "$filter", "DataService", "projectOverviewURLFilter", "Constants", "gettextCatalog", "gettext", function(a, b, c, d, e, f, g, h) {
var i = {}, j = [];
return {
restrict:"EA",
templateUrl:"views/directives/header/project-header.html",
link:function(a, k) {
a.closeOrderingPanel = function() {
_.set(a, "ordering.panelName", "");
}, a.showOrderingPanel = function(b) {
_.set(a, "ordering.panelName", b);
}, a.catalogLandingPageEnabled = _.get(f, "ENABLE_TECH_PREVIEW_FEATURE.service_catalog_landing_page");
var l = k.find(".selectpicker"), m = [], n = window.DMOS_OPENSHIFT_PROJECTNAMES.split(","), o = function() {
var b = a.project || {};
a.context = {
namespace:a.projectName
};
var d = a.projectName, e = b.metadata && b.metadata.name;
(d || e) && (d || (d = b.metadata.name), e || (b = {
metadata:{
name:d
}
}), i[d] || (i[d] = b), j = c("orderByDisplayName")(i), m = _.map(j, function(a) {
return $("<option>").attr("value", a.metadata.name).attr("selected", a.metadata.name === d).text(c("uniqueDisplayName")(a, j));
}), l.empty(), l.append(m), l.append($('<option data-divider="true"></option>')), l.append($('<option value="">' + g.getString(h("View all projects")) + "</option>")), l.selectpicker("refresh"));
};
d.list("projects", a, function(a) {
var b = {};
i = a.by("metadata.name"), Object.keys(i).forEach(function(a) {
n.indexOf(a) < 0 && (b[a] = i[a]);
}), i = b, o();
}), o(), l.selectpicker({
iconBase:"fa",
tickIcon:"fa-check"
=======
} ]).directive("projectHeader", [ "$timeout", "$location", "$filter", "DataService", "projectOverviewURLFilter", "Constants", function(e, t, n, a, r, o) {
var i = {}, s = [];
=======
} ]).directive("projectHeader", [ "$timeout", "$location", "$filter", "ProjectsService", "projectOverviewURLFilter", "Constants", function(e, t, n, a, r, o) {
var i = {}, s = [], c = n("displayName"), l = n("uniqueDisplayName");
>>>>>>> Bug 1481127 - More robust handling of large project lists
=======
=======
<<<<<<< HEAD
>>>>>>> Init translation.
} ]).directive("oscHeader", [ "$filter", "$location", "$rootScope", "$routeParams", "$timeout", "AuthorizationService", "Constants", "ProjectsService", "projectOverviewURLFilter", function(e, t, n, a, r, o, i, s, c) {
<<<<<<< 49088bdb5c54dcbace691e73393f5206d1d7139b
<<<<<<< 18ca7187f00d137970eaa51b6781868cb6603239
var l = {}, u = [], d = e("displayName"), m = e("uniqueDisplayName");
>>>>>>> Patternfly vertical navigation and project bar
=======
var l = {}, u = [], d = e("displayName"), p = e("uniqueDisplayName");
>>>>>>> Updates for Service Instance & Bindings
=======
var l = {}, u = [], d = e("displayName"), m = e("uniqueDisplayName");
>>>>>>> Support EnvFrom in the Env Editors
=======
} ]).directive("oscHeader", [ "$filter", "$location", "$rootScope", "$routeParams", "$timeout", "AuthorizationService", "Constants", "ProjectsService", "projectOverviewURLFilter", "gettext", "gettextCatalog", function(a, b, c, d, e, f, g, h, i, j, k) {
var l = {}, m = [], n = a("displayName"), o = a("uniqueDisplayName");
>>>>>>> rebase from poc 3.6
return {
restrict: "EA",
templateUrl: "views/directives/header/header.html",
link: function(e, p) {
var q = 100, r = "openshift/vertical-nav-collapsed";
e.currentProject = l[d.project];
var s = function(a, b) {
var d;
_.set(c, "nav.collapsed", a), b && (d = a ? "true" : "false", localStorage.setItem(r, d));
}, t = function() {
var a = "true" === localStorage.getItem(r);
s(a);
};
t();
var u = function() {
return _.get(c, "nav.collapsed", !1);
}, v = function(a) {
_.set(c, "nav.showMobileNav", a);
};
e.toggleNav = function() {
var a = u();
s(!a, !0);
}, e.toggleMobileNav = function() {
var a = _.get(c, "nav.showMobileNav");
v(!a);
}, e.closeMobileNav = function() {
v(!1);
}, e.closeOrderingPanel = function() {
_.set(e, "ordering.panelName", "");
}, e.showOrderingPanel = function(a) {
_.set(e, "ordering.panelName", a);
}, e.catalogLandingPageEnabled = !g.DISABLE_SERVICE_CATALOG_LANDING_PAGE;
var w = p.find(".selectpicker"), x = [], y = function() {
var b = e.currentProjectName;
if (b) {
var c = function(a, c) {
var d = $("<option>").attr("value", a.metadata.name).attr("selected", a.metadata.name === b);
return c ? d.text(n(a)) : d.text(o(a, m)), d;
};
_.size(l) <= q ? (m = a("orderByDisplayName")(l), x = _.map(m, function(a) {
return c(a, !1);
})) : x = [ c(l[b], !0) ], w.empty(), w.append(x), w.append($('<option data-divider="true"></option>')), w.append($('<option value="">' + k.getString(j("View All Projects")) + "</option>")), w.selectpicker("refresh");
}
}, z = function() {
return h.list().then(function(a) {
l = a.by("metadata.name");
});
}, A = function() {
var a = d.project;
e.currentProjectName !== a && (e.currentProjectName = a, e.chromeless = "chromeless" === d.view, a && !e.chromeless ? (_.set(c, "view.hasProject", !0), e.canIAddToProject = !1, f.getProjectRules(a).then(function() {
e.currentProjectName === a && (e.canIAddToProject = f.canIAddToProject(a));
}), z().then(function() {
e.currentProjectName && l && (l[e.currentProjectName] || (l[e.currentProjectName] = {
metadata: {
name: e.currentProjectName
}
}), e.currentProject = l[e.currentProjectName], y());
})) : _.set(c, "view.hasProject", !1));
};
A(), e.$on("$routeChangeSuccess", A), w.selectpicker({
iconBase: "fa",
tickIcon: "fa-check"
}).change(function() {
var a = $(this).val(), c = "" === a ? "projects" : i(a);
e.$apply(function() {
b.url(c);
});
<<<<<<< HEAD
<<<<<<< ff3f303f420f4b91730a7540d983ad838c1066d8
<<<<<<< 5479afb30c5f67d0d51d56d622dc9a98171c3daa
<<<<<<< a8a6721a66ecf6e0309b8cb7e496a9db1b4eccf6
}), a.$on("project.settings.update", function(a, b) {
i[b.metadata.name] = b, o();
=======
>>>>>>> rebase from poc 3.6
});
}
};
} ]).directive("projectFilter", [ "LabelFilter", "gettext", "gettextCatalog", function(a, b, c) {
return {
restrict: "E",
templateUrl: "views/directives/_project-filter.html",
link: function(d, e) {
a.setupFilterWidget(e.find(".navbar-filter-widget"), e.find(".active-filters"), {
addButtonText: c.getString(b("Add"))
}), a.toggleFilterWidget(!d.renderOptions || !d.renderOptions.hideFilterWidget), d.$watch("renderOptions", function(b) {
a.toggleFilterWidget(!b || !b.hideFilterWidget);
});
}
};
} ]).directive("navbarUtility", function() {
return {
restrict: "E",
transclude: !0,
templateUrl: "views/directives/header/_navbar-utility.html",
controller: [ "$scope", "Constants", function(a, b) {
a.launcherApps = b.APP_LAUNCHER_NAVIGATION;
} ]
};
}).directive("navbarUtilityMobile", [ "$timeout", function(a) {
return {
restrict: "E",
transclude: !0,
templateUrl: "views/directives/header/_navbar-utility-mobile.html",
link: function(b, c) {
a(function() {
var a = c.find("li");
a.addClass("list-group-item");
var d = {};
a.each(function(a, b) {
var c = $(b).find("a");
c.each(function(a, c) {
c.href && (d[c.href] = b);
}), c.contents().filter(function() {
return 3 === this.nodeType && $.trim(this.nodeValue).length;
}).wrap('<span class="list-group-item-value"/>');
});
var e = function() {
a.removeClass("active");
var b = d[window.location.href];
b && $(b).addClass("active");
};
e(), b.$on("$routeChangeSuccess", e);
});
}
};
} ]).directive("navPfVerticalAlt", function() {
return {
restrict: "EAC",
link: function() {
$.fn.navigation();
}
};
}).directive("breadcrumbs", function() {
return {
restrict: "E",
scope: {
breadcrumbs: "="
},
templateUrl: "views/directives/breadcrumbs.html"
};
}).directive("back", [ "$window", function(a) {
return {
restrict: "A",
link: function(b, c) {
c.bind("click", function() {
a.history.back();
});
}
};
} ]), angular.module("openshiftConsole").directive("alerts", function() {
return {
restrict: "E",
scope: {
alerts: "=",
filter: "=?",
animateSlide: "=?",
hideCloseButton: "=?",
toast: "=?"
},
templateUrl: "views/_alerts.html",
link: function(a) {
a.close = function(a) {
a.hidden = !0, _.isFunction(a.onClose) && a.onClose();
}, a.onClick = function(a, b) {
if (_.isFunction(b.onClick)) {
var c = b.onClick();
c && (a.hidden = !0);
}
};
}
};
}), angular.module("openshiftConsole").directive("parseError", function() {
return {
restrict: "E",
scope: {
error: "="
},
templateUrl: "views/_parse-error.html",
link: function(a) {
a.$watch("error", function() {
a.hidden = !1;
});
}
};
}), angular.module("openshiftConsole").directive("podWarnings", [ "podWarningsFilter", function(a) {
return {
restrict: "E",
scope: {
pod: "="
},
link: function(b) {
var c, d = "", e = a(b.pod);
for (c = 0; c < _.size(e); c++) d && (d += "<br>"), "error" === e[c].severity && (b.hasError = !0), d += e[c].message;
b.content = d;
},
templateUrl: "views/directives/_warnings-popover.html"
};
} ]).directive("routeWarnings", [ "RoutesService", function(a) {
return {
restrict: "E",
scope: {
route: "=",
services: "="
},
link: function(b) {
var c = function() {
var c = a.getRouteWarnings(b.route, b.services);
b.content = _.map(c, _.escape).join("<br>");
};
b.$watchGroup([ "route", "services" ], c);
},
templateUrl: "views/directives/_warnings-popover.html"
};
} ]), angular.module("openshiftConsole").directive("takeFocus", [ "$timeout", function(a) {
return {
restrict: "A",
link: function(b, c) {
a(function() {
$(c).focus();
}, 300);
}
};
} ]).directive("selectOnFocus", function() {
return {
restrict: "A",
link: function(a, b) {
$(b).focus(function() {
$(this).select();
});
}
};
}).directive("focusWhen", [ "$timeout", function(a) {
return {
restrict: "A",
scope: {
trigger: "@focusWhen"
},
link: function(b, c) {
b.$watch("trigger", function(b) {
b && a(function() {
$(c).focus();
});
});
}
};
} ]).directive("clickToReveal", function() {
return {
restrict: "A",
transclude: !0,
scope: {
linkText: "@"
},
templateUrl: "views/directives/_click-to-reveal.html",
link: function(a, b) {
$(".reveal-contents-link", b).click(function() {
$(this).hide(), $(".reveal-contents", b).show();
});
}
};
}).directive("copyToClipboard", function() {
return {
restrict: "E",
scope: {
clipboardText: "=",
isDisabled: "=?",
displayWide: "=?",
inputText: "=?",
multiline: "=?"
},
templateUrl: "views/directives/_copy-to-clipboard.html",
controller: [ "$scope", function(a) {
a.id = _.uniqueId("clipboardJs");
} ],
link: function(a, b) {
var c = $("a", b), d = c.get(0);
a.inputText && (d = c.get(1));
var e = new Clipboard(d);
e.on("success", function(a) {
$(a.trigger).attr("title", "Copied!").tooltip("fixTitle").tooltip("show").attr("title", "Copy to Clipboard").tooltip("fixTitle"), a.clearSelection();
}), e.on("error", function(a) {
var b = /Mac/i.test(navigator.userAgent) ? "Press ⌘C to copy" : "Press Ctrl-C to copy";
$(a.trigger).attr("title", b).tooltip("fixTitle").tooltip("show").attr("title", "Copy to Clipboard").tooltip("fixTitle");
}), b.on("$destroy", function() {
e.destroy();
});
}
};
}).directive("copyLoginToClipboard", [ "NotificationsService", function(a) {
return {
restrict: "E",
replace: !0,
scope: {
clipboardText: "@"
},
template: '<a href="" data-clipboard-text="">Copy Login Command</a>',
link: function(b, c) {
var d = new Clipboard(c.get(0));
d.on("success", function() {
a.addNotification({
id: "copy-login-command-success",
type: "success",
message: "Login command copied."
});
var b = "openshift/token-warning";
a.addNotification({
id: b,
type: "warning",
message: "A token is a form of a password. Do not share your API token.",
links: [ {
href: "",
label: "Don't Show Me Again",
onClick: function() {
return a.permanentlyHideNotification(b), !0;
}
} ]
});
}), d.on("error", function() {
a.addNotification({
id: "copy-login-command-error",
type: "error",
message: "Unable to copy the login command."
});
}), c.on("$destroy", function() {
d.destroy();
});
}
};
} ]).directive("shortId", function() {
return {
restrict: "E",
scope: {
id: "@"
},
template: '<code class="short-id" title="{{id}}">{{id.substring(0, 6)}}</code>'
};
}).directive("customIcon", [ "$filter", function(a) {
return {
restrict: "E",
scope: {
resource: "=",
kind: "@",
tag: "=?"
},
controller: [ "$scope", function(b) {
b.$watchGroup([ "resource", "tag" ], function() {
b.tag ? b.icon = a("imageStreamTagAnnotation")(b.resource, "icon", b.tag) : b.icon = a("annotation")(b.resource, "icon");
var c = b.icon && 0 === b.icon.indexOf("data:");
c ? b.image = b.icon : (b.tag ? b.icon = a("imageStreamTagIconClass")(b.resource, b.tag) : b.icon = a("iconClass")(b.resource, b.kind), b.image = a("imageForIconClass")(b.icon));
});
} ],
templateUrl: "views/directives/_custom-icon.html"
};
} ]).directive("bottomOfWindow", function() {
return {
restrict: "A",
link: function(a, b) {
function c() {
var a = $(window).height() - b[0].getBoundingClientRect().top;
b.css("height", a - 10 + "px");
}
$(window).on("resize", c), c(), b.on("$destroy", function() {
$(window).off("resize", c);
});
}
};
}).directive("onEnter", function() {
return function(a, b, c) {
b.bind("keydown keypress", function(b) {
13 === b.which && (a.$apply(function() {
a.$eval(c.onEnter);
}), b.preventDefault());
});
};
}).directive("onEsc", function() {
return function(a, b, c) {
b.bind("keydown keypress", function(b) {
27 === b.which && (a.$apply(function() {
a.$eval(c.onEsc);
}), b.preventDefault());
});
};
}).directive("persistTabState", [ "$routeParams", "$location", function(a, b) {
return {
restrict: "A",
scope: !1,
link: function(c) {
c.selectedTab = c.selectedTab || {}, c.$watch(function() {
return a.tab;
}, function(a) {
a && (c.selectedTab[a] = !0);
}), c.$watch("selectedTab", function() {
var a = _.keys(_.pickBy(c.selectedTab, function(a) {
return a;
}));
if (1 === a.length) {
var d = b.search();
d.tab = a[0], b.replace().search(d);
}
}, !0);
}
};
} ]), angular.module("openshiftConsole").directive("labels", [ "$location", "$timeout", "LabelFilter", function(a, b, c) {
return {
restrict: "E",
scope: {
labels: "=",
clickable: "@?",
kind: "@?",
projectName: "@?",
limit: "=?",
titleKind: "@?",
navigateUrl: "@?",
filterCurrentPage: "=?"
},
templateUrl: "views/directives/labels.html",
link: function(d) {
d.filterAndNavigate = function(e, f) {
d.kind && d.projectName && (d.filterCurrentPage || a.url(d.navigateUrl || "/project/" + d.projectName + "/browse/" + d.kind), b(function() {
var a = {};
a[e] = f, c.setLabelSelector(new LabelSelector(a, (!0)));
}, 1));
};
}
};
} ]).directive("labelEditor", function() {
function a(a) {
return !(a.length > f) && e.test(a);
}
function b(a) {
return !(a.length > d) && c.test(a);
}
var c = /^(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?$/, d = 63, e = /^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$/, f = 253;
return {
restrict: "E",
scope: {
labels: "=",
expand: "=?",
canToggle: "=?",
helpText: "@?"
},
templateUrl: "views/directives/label-editor.html",
link: function(a, b, c) {
angular.isDefined(c.canToggle) || (a.canToggle = !0);
},
controller: [ "$scope", function(c) {
var d = {
test: function(c) {
var d = c.split("/");
switch (d.length) {
case 1:
return b(d[0]);

case 2:
return a(d[0]) && b(d[1]);
}
return !1;
}
};
angular.extend(c, {
validator: {
key: d,
value: d
}
});
} ]
};
}), angular.module("openshiftConsole").directive("editLifecycleHook", function() {
return {
restrict: "E",
scope: {
type: "@",
hookParams: "=model",
availableVolumes: "=",
availableContainers: "=",
availableSecrets: "=",
availableConfigMaps: "=",
namespace: "="
},
templateUrl: "views/directives/edit-lifecycle-hook.html",
controller: [ "$scope", function(a) {
a.view = {
isDisabled: !1
}, a.lifecycleHookFailurePolicyTypes = [ "Abort", "Retry", "Ignore" ], a.istagHook = {}, a.removedHookParams = {}, a.action = {
type: _.has(a.hookParams, "tagImages") ? "tagImages" : "execNewPod"
};
var b = {
command: [],
env: [],
volumes: [],
containerName: a.availableContainers[0] || ""
}, c = {
to: {},
containerName: a.availableContainers[0] || ""
}, d = function(b) {
var c = {};
if (_.isEmpty(b)) c = {
namespace: a.namespace,
imageStream: "",
tagObject: null
}; else {
var d = b.name.split(":");
c = {
namespace: b.namespace || a.namespace,
imageStream: d[0],
tagObject: {
tag: d[1]
}
};
}
return c;
}, e = function() {
"execNewPod" === a.action.type ? (_.has(a.removedHookParams, "execNewPod") ? a.hookParams.execNewPod = a.removedHookParams.execNewPod : a.hookParams.execNewPod = _.get(a, "hookParams.execNewPod", {}), a.hookParams.execNewPod = _.merge(angular.copy(b), a.hookParams.execNewPod)) : (_.has(a.removedHookParams, "tagImages") ? a.hookParams.tagImages = a.removedHookParams.tagImages : a.hookParams.tagImages = _.get(a, "hookParams.tagImages", [ {} ]), a.hookParams.tagImages = [ _.merge(angular.copy(c), a.hookParams.tagImages[0]) ], a.istagHook = d(_.head(a.hookParams.tagImages).to)), a.hookParams.failurePolicy = _.get(a.hookParams, "failurePolicy", "Abort");
};
a.addHook = function() {
return _.isEmpty(a.removedHookParams) ? (a.hookParams = {}, void e()) : void (a.hookParams = a.removedHookParams);
}, a.removeHook = function() {
a.removedHookParams = a.hookParams, delete a.hookParams, a.editForm.$setDirty();
};
var f = function() {
a.hookParams && ("execNewPod" === a.action.type ? (a.hookParams.tagImages && (a.removedHookParams.tagImages = a.hookParams.tagImages, delete a.hookParams.tagImages), e()) : "tagImages" === a.action.type && (a.hookParams.execNewPod && (a.removedHookParams.execNewPod = a.hookParams.execNewPod, delete a.hookParams.execNewPod), e()));
};
a.$watchGroup([ "hookParams", "action.type" ], f), a.valueFromObjects = [], a.$watchGroup([ "availableSecrets", "availableConfigMaps" ], function() {
var b = a.availableConfigMaps || [], c = a.availableSecrets || [];
a.valueFromObjects = b.concat(c);
}), a.$watch("istagHook.tagObject.tag", function() {
_.has(a.istagHook, [ "tagObject", "tag" ]) && (_.set(a.hookParams, "tagImages[0].to.kind", "ImageStreamTag"), _.set(a.hookParams, "tagImages[0].to.namespace", a.istagHook.namespace), _.set(a.hookParams, "tagImages[0].to.name", a.istagHook.imageStream + ":" + a.istagHook.tagObject.tag));
});
} ]
};
}).directive("lifecycleHook", [ "$filter", function(a) {
return {
restrict: "E",
scope: {
deploymentConfig: "=",
type: "@"
},
templateUrl: "views/directives/lifecycle-hook.html",
link: function(b) {
b.$watch("deploymentConfig", function(c) {
b.strategyParams = a("deploymentStrategyParams")(c);
});
}
};
} ]), angular.module("openshiftConsole").directive("actionChip", function() {
return {
restrict: "E",
scope: {
key: "=?",
value: "=?",
keyHelp: "=?",
valueHelp: "=",
action: "&?",
actionIcon: "=?",
actionTitle: "@",
showAction: "=?"
},
templateUrl: "views/directives/action-chip.html"
};
}), function() {
function a(a, b, c, d, e, f, g, h) {
var i = this, j = a("humanizeKind"), k = function(a) {
var b = i.apiObject.metadata.name;
return "ConfigMap" === i.apiObject.kind ? _.some(a.envFrom, {
configMapRef: {
name: b
}
}) : _.some(a.envFrom, {
secretRef: {
name: b
}
});
};
i.checkApplicationContainersRefs = function(a) {
var b = _.get(a, "spec.template.spec.containers");
i.canAddRefToApplication = !_.every(b, k);
};
var l = function() {
var a = {
namespace: i.project.metadata.name
};
d.getApplications(a).then(function(a) {
i.applications = a, i.updating = !1;
});
};
i.$onInit = function() {
i.addType = "env", i.disableInputs = !1, l(), i.canAddRefToApplication = !0;
var a = new RegExp("^[A-Za-z_][A-Za-z0-9_]*$");
i.hasInvalidEnvVars = _.some(i.apiObject.data, function(b, c) {
return !a.test(c);
});
};
var m = function(a) {
return i.attachAllContainers || i.attachContainers[a.name];
};
i.$postLink = function() {
b.$watch(function() {
return i.application;
}, function() {
var a = _.get(i.application, "spec.template");
i.existingMountPaths = h.getMountPaths(a), i.attachAllContainers = !0;
});
}, i.groupByKind = function(a) {
return j(a.kind);
}, i.addToApplication = function() {
var b = angular.copy(i.application), d = _.get(b, "spec.template");
if (i.disableInputs = !0, "env" === i.addType) {
var h = {};
switch (i.apiObject.kind) {
case "Secret":
h.secretRef = {
name: i.apiObject.metadata.name
};
break;

case "ConfigMap":
h.configMapRef = {
name: i.apiObject.metadata.name
};
}
_.each(d.spec.containers, function(a) {
m(a) && !k(a) && (a.envFrom = a.envFrom || [], a.envFrom.push(h));
});
} else {
var j = a("generateName"), l = j(i.apiObject.metadata.name + "-"), n = {
name: l,
mountPath: i.mountVolume,
readOnly: !0
};
_.each(d.spec.containers, function(a) {
m(a) && (a.volumeMounts = a.volumeMounts || [], a.volumeMounts.push(n));
});
var o = {
name: l
};
switch (i.apiObject.kind) {
case "Secret":
o.secret = {
secretName: i.apiObject.metadata.name
};
break;

case "ConfigMap":
o.configMap = {
name: i.apiObject.metadata.name
};
}
d.spec.volumes = d.spec.volumes || [], d.spec.volumes.push(o);
}
var p = a("humanizeKind"), q = p(i.apiObject.kind), r = p(b.kind), s = {
namespace: i.project.metadata.name
};
e.update(c.kindToResource(b.kind), b.metadata.name, b, s).then(function() {
g.addNotification({
type: "success",
message: "Successfully added " + q + " " + i.apiObject.metadata.name + " to " + r + " " + b.metadata.name + ".",
links: [ {
href: f.resourceURL(b),
label: "View " + p(b.kind, !0)
} ]
}), angular.isFunction(i.onComplete) && i.onComplete();
}, function(c) {
var d = a("getErrorDetails");
g.addNotification({
type: "error",
message: "An error occurred  adding " + q + " " + i.apiObject.metadata.name + " to " + r + " " + b.metadata.name + ". " + d(c)
});
})["finally"](function() {
i.disableInputs = !1;
});
};
}
angular.module("openshiftConsole").component("addConfigToApplication", {
controller: [ "$filter", "$scope", "APIService", "ApplicationsService", "DataService", "Navigate", "NotificationsService", "StorageService", a ],
controllerAs: "ctrl",
bindings: {
project: "<",
apiObject: "<",
onComplete: "<",
onCancel: "<"
},
templateUrl: "views/directives/add-config-to-application.html"
});
}(), angular.module("openshiftConsole").directive("templateOptions", [ "gettext", function(a) {
return {
restrict: "E",
templateUrl: "views/_templateopt.html",
transclude: !0,
scope: {
parameters: "=",
expand: "=?",
canToggle: "=?",
isDialog: "=?"
},
link: function(b, c, d) {
angular.isDefined(d.canToggle) || (b.canToggle = !0), b.isOnlyWhitespace = function(a) {
return /^\s+$/.test(a);
}, b.focus = function(a) {
angular.element("#" + a).focus();
}, b.singleText = a("Collapse to a single line input This may strip any new lines you have entered."), b.multiText = a("Expand to enter multiple lines of content. This is required if you need to include newline characters.");
}
};
} ]), angular.module("openshiftConsole").directive("catalog", [ "CatalogService", "Constants", "KeywordService", "Logger", function(a, b, c, d) {
return {
restrict: "E",
scope: {
projectImageStreams: "=",
openshiftImageStreams: "=",
projectTemplates: "=",
openshiftTemplates: "=",
projectName: "=",
parentCategory: "=category"
},
templateUrl: "views/catalog/catalog.html",
link: function(e) {
function f() {
var b = e.keywords = c.generateKeywords(e.filter.keyword);
return _.isEmpty(b) ? (e.filterActive = !1, e.filteredBuildersByCategory = e.buildersByCategory, void (e.filteredTemplatesByCategory = e.templatesByCategory)) : (e.filterActive = !0, e.filteredBuildersByCategory = {}, _.each(e.buildersByCategory, function(c, d) {
var f = a.getCategoryItem(d), g = function(a) {
return a.test(f.label);
}, h = _.reject(b, g);
e.filteredBuildersByCategory[d] = a.filterImageStreams(c, h);
}), e.filteredBuildersNoSubcategory = a.filterImageStreams(e.buildersNoSubcategory, b), e.filteredTemplatesByCategory = {}, _.each(e.templatesByCategory, function(c, d) {
var f = a.getCategoryItem(d), g = function(a) {
return a.test(f.label);
}, h = _.reject(b, g);
e.filteredTemplatesByCategory[d] = a.filterTemplates(c, h);
}), void (e.filteredTemplatesNoSubcategory = a.filterTemplates(e.templatesNoSubcategory, b)));
}
function g(a) {
var b = _.get(e, "parentCategory.subcategories", []);
if (_.isEmpty(b)) return [];
var c = {};
_.each(b, function(b) {
_.each(b.items, function(b) {
_.each(a[b.id], function(a) {
var b = _.get(a, "metadata.uid");
c[b] = !0;
});
});
});
var d = function(a) {
var b = _.get(a, "metadata.uid");
return !!c[b];
}, f = e.parentCategory.id;
return _.reject(a[f], d);
}
function h() {
if (e.projectImageStreams && e.openshiftImageStreams) {
var b = _.toArray(e.projectImageStreams).concat(_.toArray(e.openshiftImageStreams));
e.buildersByCategory = a.categorizeImageStreams(b), e.buildersNoSubcategory = g(e.buildersByCategory), e.emptyCatalog = e.emptyCatalog && _.every(e.buildersByCategory, _.isEmpty) && _.isEmpty(e.buildersNoSubcategory), l();
}
}
function i() {
if (e.projectTemplates && e.openshiftTemplates) {
var b = _.toArray(e.projectTemplates).concat(_.toArray(e.openshiftTemplates));
e.templatesByCategory = a.categorizeTemplates(b), e.templatesNoSubcategory = g(e.templatesByCategory), e.emptyCatalog = e.emptyCatalog && _.every(e.templatesByCategory, _.isEmpty) && _.isEmpty(e.templatesNoSubcategory), l();
}
}
function j() {
e.noFilterMatches = !0, m = [];
var a = {};
_.each(e.filteredBuildersByCategory, function(b, c) {
a[c] = _.size(b);
}), _.each(e.filteredTemplatesByCategory, function(b, c) {
a[c] = (a[c] || 0) + _.size(b);
}), e.allContentHidden = !0, _.each(e.categories, function(b) {
var c = !1;
_.each(b.items, function(b) {
a[b.id] && (m.push(b), c = !0);
}), _.set(e, [ "hasContent", b.id ], c), c && (e.allContentHidden = !1);
}), e.countByCategory = a, e.hasItemsNoSubcategory = !_.isEmpty(e.buildersNoSubcategory) || !_.isEmpty(e.templatesNoSubcategory), e.countFilteredNoSubcategory = _.size(e.filteredBuildersNoSubcategory) + _.size(e.filteredTemplatesNoSubcategory), e.countFilteredNoSubcategory && (e.allContentHidden = !1);
}
function k() {
return !!e.parentCategory && (1 === m.length && !e.hasItemsNoSubcategory);
}
function l() {
e.loaded = e.projectTemplates && e.openshiftTemplates && e.projectImageStreams && e.openshiftImageStreams, f(), j(), e.loaded && (k() && (e.singleCategory = _.head(m)), d.log("templates by category", e.templatesByCategory), d.log("builder images", e.buildersByCategory));
}
e.categories = _.get(e, "parentCategory.subcategories", b.CATALOG_CATEGORIES), e.loaded = !1, e.emptyCatalog = !0, e.filter = {
keyword: ""
}, e.$watch("filter.keyword", _.debounce(function() {
e.$apply(function() {
f(), j();
});
}, 200, {
maxWait: 1e3,
trailing: !0
}));
var m;
e.$watchGroup([ "openshiftImageStreams", "projectImageStreams" ], h), e.$watchGroup([ "openshiftTemplates", "projectTemplates" ], i);
}
};
} ]), angular.module("openshiftConsole").directive("categoryContent", [ "CatalogService", "Constants", "KeywordService", "Logger", function(a, b, c, d) {
return {
restrict: "E",
scope: {
projectImageStreams: "=",
openshiftImageStreams: "=",
projectTemplates: "=",
openshiftTemplates: "=",
projectName: "=",
category: "="
},
templateUrl: "views/catalog/category-content.html",
link: function(b) {
function e() {
var d = b.keywords = c.generateKeywords(b.filter.keyword);
b.filteredBuilderImages = a.filterImageStreams(k, d), b.filteredTemplates = a.filterTemplates(l, d);
}
function f() {
return b.projectImageStreams && b.openshiftImageStreams ? _.toArray(b.projectImageStreams).concat(_.toArray(b.openshiftImageStreams)) : [];
}
function g() {
var c = a.categorizeImageStreams(f());
k = _.get(c, [ b.category.id ], []), j();
}
function h() {
return b.projectTemplates && b.openshiftTemplates ? _.toArray(b.projectTemplates).concat(_.toArray(b.openshiftTemplates)) : [];
}
function i() {
var c = a.categorizeTemplates(h());
l = _.get(c, [ b.category.id ], []), j();
}
function j() {
b.loaded = b.projectTemplates && b.openshiftTemplates && b.projectImageStreams && b.openshiftImageStreams, e(), b.emptyCategory = _.isEmpty(k) && _.isEmpty(l), b.loaded && (d.log("templates", l), d.log("builder images", k));
}
var k = [], l = [];
b.filteredTemplates = [], b.filteredBuilderImages = [], b.loaded = !1, b.filter = {
keyword: ""
}, b.$watch("filter.keyword", e), b.$watchGroup([ "openshiftImageStreams", "projectImageStreams" ], g), b.$watchGroup([ "openshiftTemplates", "projectTemplates" ], i);
}
};
} ]), angular.module("openshiftConsole").directive("catalogImage", [ "$filter", "CatalogService", function(a, b) {
return {
restrict: "E",
replace: !0,
scope: {
image: "=",
imageStream: "=",
project: "@",
isBuilder: "=?",
keywords: "="
},
templateUrl: "views/catalog/_image.html",
link: function(c) {
var d = a("imageStreamTagTags"), e = {};
c.referencedBy = {};
var f = _.get(c, "imageStream.spec.tags", []), g = {};
_.each(f, function(a) {
g[a.name] = d(c.imageStream, a.name), b.referencesSameImageStream(a) && (e[a.name] = !0, c.referencedBy[a.from.name] = c.referencedBy[a.from.name] || [], c.referencedBy[a.from.name].push(a.name));
});
var h = function(a) {
var b = _.get(g, [ a ], []);
return _.includes(b, "builder") && !_.includes(b, "hidden");
};
c.$watch("imageStream.status.tags", function(a) {
c.tags = _.filter(a, function(a) {
return h(a.tag) && !e[a.tag];
});
var b = _.get(c, "is.tag.tag");
b && _.some(c.tags, {
tag: b
}) || _.set(c, "is.tag", _.head(c.tags));
});
}
};
} ]), angular.module("openshiftConsole").directive("catalogTemplate", function() {
return {
restrict: "E",
replace: !0,
scope: {
template: "=",
project: "@",
keywords: "="
},
templateUrl: "views/catalog/_template.html"
};
}), angular.module("openshiftConsole").directive("podMetrics", [ "$filter", "$interval", "$parse", "$timeout", "$q", "$rootScope", "ChartsService", "ConversionService", "MetricsCharts", "MetricsService", "ModalsService", "usageValueFilter", "gettext", function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
return {
restrict: "E",
scope: {
pod: "=",
includedMetrics: "=?",
stackDonut: "=?",
alerts: "=?"
},
templateUrl: "views/directives/pod-metrics.html",
link: function(n) {
function o(a) {
if (!n.pod) return null;
var b = n.options.selectedContainer;
switch (a) {
case "memory/usage":
var c = F(b);
if (c) return h.bytesToMiB(l(c));
break;

case "cpu/usage_rate":
var d = G(b);
if (d) return l(d);
}
return null;
}
function p(a) {
var b = _.head(a.datasets);
if (b.total) {
var c, e = {
type: "donut",
columns: [ [ "Used", b.used ], [ "Available", Math.max(b.available, 0) ] ],
colors: {
Used: b.available > 0 ? "#0088ce" : "#ec7a08",
Available: "#d1d1d1"
}
};
D[b.id] ? D[b.id].load(e) : (c = K(a), c.data = e, d(function() {
I || (D[b.id] = c3.generate(c));
}));
}
}
function q(a) {
var b = _.some(a.datasets, function(a) {
return !a.data;
});
if (!b) {
var c = {};
_.each(a.datasets, function(a) {
c[a.id] = a.data;
});
var e, f = i.getSparklineData(c), g = a.chartPrefix + "sparkline";
E[g] ? E[g].load(f) : (e = L(a), e.data = f, a.chartDataColors && (e.color = {
pattern: a.chartDataColors
}), d(function() {
I || (E[g] = c3.generate(e));
}));
}
}
function r() {
return "-" + n.options.timeRange.value + "mn";
}
function s() {
return 60 * n.options.timeRange.value * 1e3;
}
function t() {
return Math.floor(s() / H) + "ms";
}
function u(a, b, c) {
var d, e = {
metric: b.id,
type: b.type,
bucketDuration: t()
};
return b.data && b.data.length ? (d = _.last(b.data), e.start = d.end) : e.start = c, n.pod ? _.assign(e, {
namespace: n.pod.metadata.namespace,
pod: n.pod,
containerName: a.containerMetric ? n.options.selectedContainer.name : "pod"
}) : null;
}
function v() {
I || (M = 0, _.each(n.metrics, function(a) {
q(a), p(a);
}));
}
function w(a) {
if (!I) {
if (M++, n.noData) return void (n.metricsError = {
status: _.get(a, "status", 0),
details: _.get(a, "data.errorMsg") || _.get(a, "statusText") || "Status code " + _.get(a, "status", 0)
});
if (!(M < 2)) {
var b = "metrics-failed-" + n.uniqueID;
n.alerts[b] = {
type: "error",
message: "An error occurred updating metrics for pod " + _.get(n, "pod.metadata.name", "<unknown>") + ".",
links: [ {
href: "",
label: "Retry",
onClick: function() {
delete n.alerts[b], M = 1, B();
}
} ]
};
}
}
}
function x() {
return window.OPENSHIFT_CONSTANTS.DISABLE_CUSTOM_METRICS ? e.when({}) : j.getCustomMetrics(n.pod).then(function(a) {
angular.forEach(a, function(a) {
var b = a.description || a.name, c = a.unit || "", d = "custom/" + a.id.replace(/.*\/custom\//, "");
n.metrics.push({
label: b,
units: c,
chartPrefix: "custom-" + _.uniqueId("custom-metric-"),
chartType: "spline",
datasets: [ {
id: d,
label: b,
type: a.type,
data: []
} ]
});
});
});
}
function y() {
return !(n.metricsError || M > 1) && (n.pod && _.get(n, "options.selectedContainer"));
}
function z(a, b, c) {
b.total = o(b.id), b.total && (n.hasLimits = !0);
var d = _.get(c, "usage.value");
isNaN(d) && (d = 0), a.convert && (d = a.convert(d)), b.used = d3.round(d, a.usagePrecision), b.total && (b.available = d3.round(b.total - d, a.usagePrecision)), a.totalUsed += b.used;
}
function A(a, b) {
n.noData = !1;
var c = _.initial(b.data);
return a.data ? void (a.data = _.chain(a.data).takeRight(H).concat(c).value()) : void (a.data = c);
}
function B() {
if (y()) {
var a = r(), b = [];
angular.forEach(n.metrics, function(c) {
var d = [];
c.totalUsed = 0, angular.forEach(c.datasets, function(e) {
var f = u(c, e, a);
if (f) {
var g = j.get(f);
d.push(g);
var h = o(e.id);
h && b.push(j.getCurrentUsage(f).then(function(a) {
z(c, e, a);
}));
}
}), b = b.concat(d), e.all(d).then(function(a) {
I || angular.forEach(a, function(a) {
if (a) {
var b = _.find(c.datasets, {
id: a.metricID
});
A(b, a);
}
});
});
}), e.all(b).then(v, w)["finally"](function() {
n.loaded = !0;
});
}
}
n.includedMetrics = n.includedMetrics || [ "cpu", "memory", "network" ];
var C, D = {}, E = {}, F = c("resources.limits.memory"), G = c("resources.limits.cpu"), H = 30, I = !1;
n.uniqueID = i.uniqueID(), n.metrics = [], _.includes(n.includedMetrics, "memory") && n.metrics.push({
label: "Memory",
units: "MiB",
chartPrefix: "memory-",
convert: h.bytesToMiB,
containerMetric: !0,
datasets: [ {
id: "memory/usage",
label: m("Memory"),
data: []
} ]
}), _.includes(n.includedMetrics, "cpu") && n.metrics.push({
label: "CPU",
units: "cores",
chartPrefix: "cpu-",
convert: h.millicoresToCores,
usagePrecision: 3,
containerMetric: !0,
datasets: [ {
id: "cpu/usage_rate",
label: m("CPU"),
data: []
} ]
}), _.includes(n.includedMetrics, "network") && n.metrics.push({
label: m("Network"),
units: "KiB/s",
chartPrefix: "network-",
chartType: "spline",
convert: h.bytesToKiB,
datasets: [ {
id: "network/tx_rate",
label: m("Sent"),
data: []
}, {
id: "network/rx_rate",
label: m("Received"),
data: []
} ]
}), n.loaded = !1, n.noData = !0, n.showComputeUnitsHelp = function() {
k.showComputeUnitsHelp();
}, j.getMetricsURL().then(function(a) {
n.metricsURL = a;
}), n.options = {
rangeOptions: i.getTimeRangeOptions()
}, n.options.timeRange = _.head(n.options.rangeOptions);
var J = a("upperFirst"), K = function(a) {
var b = "#" + a.chartPrefix + n.uniqueID + "-donut";
return {
bindto: b,
onrendered: function() {
g.updateDonutCenterText(b, a.datasets[0].used, J(a.units) + " Used");
},
donut: {
label: {
show: !1
},
width: 10
},
legend: {
show: !1
},
size: {
height: 175,
widht: 175
}
};
}, L = function(a) {
var b = a.chartPrefix + n.uniqueID + "-sparkline", c = i.getDefaultSparklineConfig(b, a.units);
return 1 === a.datasets.length && _.set(c, "legend.show", !1), c;
}, M = 0;
x()["finally"](function() {
n.$watch("options", function() {
_.each(n.metrics, function(a) {
_.each(a.datasets, function(a) {
delete a.data;
});
}), delete n.metricsError, B();
}, !0), C = b(B, i.getDefaultUpdateInterval(), !1);
});
var N = f.$on("metrics.charts.resize", function() {
i.redraw(D), i.redraw(E);
});
n.$on("$destroy", function() {
C && (b.cancel(C), C = null), N && (N(), N = null), angular.forEach(D, function(a) {
a.destroy();
}), D = null, angular.forEach(E, function(a) {
a.destroy();
}), E = null, I = !0;
});
}
};
} ]), angular.module("openshiftConsole").directive("deploymentMetrics", [ "$interval", "$parse", "$timeout", "$q", "$rootScope", "ChartsService", "ConversionService", "MetricsCharts", "MetricsService", "ModalsService", function(a, b, c, d, e, f, g, h, i, j) {
return {
restrict: "E",
scope: {
pods: "=",
containers: "=",
profile: "@",
alerts: "=?"
},
templateUrl: function(a, b) {
return "compact" === b.profile ? "views/directives/metrics-compact.html" : "views/directives/deployment-metrics.html";
},
link: function(b) {
function c(a) {
return null === a.value || void 0 === a.value;
}
function d(a) {
var b;
b = w ? a.compactDatasetLabel || a.label : "Average Usage";
var d = {}, e = [ "Date" ], f = [ b ], g = [ e, f ], h = function(a) {
var b = "" + a.start;
return d[b] || (d[b] = {
total: 0,
count: 0
}), d[b];
};
return _.each(A[a.descriptor], function(a) {
_.each(a, function(a) {
var b = h(a);
(!y || y < a.end) && (y = a.end), c(a) || (b.total += a.value, b.count = b.count + 1);
});
}), _.each(d, function(b, c) {
var d;
d = b.count ? b.total / b.count : null, e.push(Number(c)), f.push(a.convert ? a.convert(d) : d);
}), f.length > 1 && (a.lastValue = _.last(f) || 0), g;
}
function f(a, e) {
var f = [], g = {
type: "spline"
};
return b.showAverage ? (_.each(a[e.descriptor], function(a, b) {
r(e.descriptor, b, a);
}), g.type = "area-spline", w && e.compactType && (g.type = e.compactType), g.x = "Date", g.columns = d(e), g) : (_.each(a[e.descriptor], function(a, b) {
r(e.descriptor, b, a);
var d = b + "-dates";
_.set(g, [ "xs", b ], d);
var h = [ d ], i = [ b ];
f.push(h), f.push(i), _.each(A[e.descriptor][b], function(a) {
if (h.push(a.start), (!y || y < a.end) && (y = a.end), c(a)) i.push(a.value); else {
var b = e.convert ? e.convert(a.value) : a.value;
i.push(b);
}
});
}), g.columns = _.sortBy(f, function(a) {
return a[0];
}), g);
}
function k(a) {
x || (E = 0, b.showAverage = _.size(b.pods) > 5 || w, _.each(b.metrics, function(c) {
var d, e = f(a, c), g = c.descriptor;
w && c.compactCombineWith && (g = c.compactCombineWith, c.lastValue && (D[g].lastValue = (D[g].lastValue || 0) + c.lastValue)), u[g] ? (u[g].load(e), b.showAverage ? u[g].legend.hide() : u[g].legend.show()) : (d = F(c), d.data = e, u[g] = c3.generate(d));
}));
}
function l() {
return w ? "-15mn" : "-" + b.options.timeRange.value + "mn";
}
function m() {
return 60 * b.options.timeRange.value * 1e3;
}
function n() {
return w ? "1mn" : Math.floor(m() / v) + "ms";
}
function o() {
var a = _.find(b.pods, "metadata.namespace");
if (a) {
var c = {
pods: b.pods,
namespace: a.metadata.namespace,
bucketDuration: n()
};
return w || (c.containerName = b.options.selectedContainer.name), y ? c.start = y : c.start = l(), c;
}
}
function p(a) {
if (!x) {
if (E++, b.noData) return void (b.metricsError = {
status: _.get(a, "status", 0),
details: _.get(a, "data.errorMsg") || _.get(a, "statusText") || "Status code " + _.get(a, "status", 0)
});
if (!(E < 2) && b.alerts) {
var c = "metrics-failed-" + b.uniqueID;
b.alerts[c] = {
type: "error",
message: "An error occurred updating metrics.",
links: [ {
href: "",
label: "Retry",
onClick: function() {
delete b.alerts[c], E = 1, s();
}
} ]
};
}
}
}
function q() {
var a = _.isEmpty(b.pods);
return a ? (b.loaded = !0, !1) : !b.metricsError && E < 2;
}
function r(a, c, d) {
b.noData = !1;
var e = _.initial(d), f = _.get(A, [ a, c ]);
if (!f) return void _.set(A, [ a, c ], e);
var g = _.takeRight(f.concat(e), v);
_.set(A, [ a, c ], g);
}
function s() {
if (!B && q()) {
z = Date.now();
var a = o();
i.getPodMetrics(a).then(k, p)["finally"](function() {
b.loaded = !0;
});
}
}
var t, u = {}, v = 30, w = "compact" === b.profile, x = !1;
b.uniqueID = h.uniqueID();
var y, z, A = {}, B = w, C = function(a) {
return a >= 1024;
};
b.metrics = [ {
label: "Memory",
units: "MiB",
convert: g.bytesToMiB,
formatUsage: function(a) {
return C(a) && (a /= 1024), h.formatUsage(a);
},
usageUnits: function(a) {
return C(a) ? "GiB" : "MiB";
},
descriptor: "memory/usage",
type: "pod_container",
chartID: "memory-" + b.uniqueID
}, {
label: "CPU",
units: "cores",
convert: g.millicoresToCores,
formatUsage: h.formatUsage,
usageUnits: function() {
return "cores";
},
descriptor: "cpu/usage_rate",
type: "pod_container",
chartID: "cpu-" + b.uniqueID
}, {
label: "Network (Sent)",
units: "KiB/s",
convert: g.bytesToKiB,
formatUsage: h.formatUsage,
usageUnits: function() {
return "KiB/s";
},
descriptor: "network/tx_rate",
type: "pod",
compactLabel: "Network",
compactDatasetLabel: "Sent",
compactType: "spline",
chartID: "network-tx-" + b.uniqueID
}, {
label: "Network (Received)",
units: "KiB/s",
convert: g.bytesToKiB,
formatUsage: h.formatUsage,
usageUnits: function() {
return "KiB/s";
},
descriptor: "network/rx_rate",
type: "pod",
compactCombineWith: "network/tx_rate",
compactDatasetLabel: "Received",
compactType: "spline",
chartID: "network-rx-" + b.uniqueID
} ];
var D = _.keyBy(b.metrics, "descriptor");
b.loaded = !1, b.noData = !0, b.showComputeUnitsHelp = function() {
j.showComputeUnitsHelp();
};
var E = 0;
i.getMetricsURL().then(function(a) {
b.metricsURL = a;
}), b.options = {
rangeOptions: h.getTimeRangeOptions()
}, b.options.timeRange = _.head(b.options.rangeOptions), b.options.selectedContainer = _.head(b.containers);
var F = function(a) {
var c = h.getDefaultSparklineConfig(a.chartID, a.units, w);
return _.set(c, "legend.show", !w && !b.showAverage), c;
};
b.$watch("options", function() {
A = {}, y = null, delete b.metricsError, s();
}, !0), t = a(s, h.getDefaultUpdateInterval(), !1), b.updateInView = function(a) {
B = !a, a && (!z || Date.now() > z + h.getDefaultUpdateInterval()) && s();
};
var G = e.$on("metrics.charts.resize", function() {
h.redraw(u);
});
b.$on("$destroy", function() {
t && (a.cancel(t), t = null), G && (G(), G = null), angular.forEach(u, function(a) {
a.destroy();
}), u = null, x = !0;
});
}
};
} ]), angular.module("openshiftConsole").directive("logViewer", [ "$sce", "$timeout", "$window", "$filter", "$q", "AuthService", "APIService", "APIDiscovery", "DataService", "HTMLService", "ModalsService", "logLinks", "gettext", "gettextCatalog", function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
var o = $(window), p = $('<tr class="log-line"><td class="log-line-number"></td><td class="log-line-text"></td></tr>').get(0), q = function(a, b) {
var c = p.cloneNode(!0);
c.firstChild.setAttribute("data-line-number", a);
var d = ansi_up.escape_for_html(b), e = ansi_up.ansi_to_html(d), f = j.linkify(e, "_blank", !0);
return c.lastChild.innerHTML = f, c;
};
return {
restrict: "AE",
transclude: !0,
templateUrl: "views/directives/logs/_log-viewer.html",
scope: {
followAffixTop: "=?",
object: "=",
fullLogUrl: "=?",
name: "=",
context: "=",
options: "=?",
fixedHeight: "=?",
chromeless: "=?",
empty: "=?",
run: "=?"
},
controller: [ "$scope", function(b) {
var j, k, p, r = document.documentElement;
b.logViewerID = _.uniqueId("log-viewer"), b.empty = !0;
var s, t;
"ReplicationController" === b.object.kind ? (s = "deploymentconfigs/log", t = d("annotation")(b.object, "deploymentConfig")) : (s = g.kindToResource(b.object.kind) + "/log", t = b.object.metadata.name);
var u, v = function() {
b.$apply(function() {
var a = j.getBoundingClientRect();
b.fixedHeight ? b.showScrollLinks = a && a.height > b.fixedHeight : b.showScrollLinks = a && (a.top < 0 || a.bottom > r.clientHeight);
});
}, w = !1, x = function() {
w ? w = !1 : b.$evalAsync(function() {
b.autoScrollActive = !1;
});
}, y = function() {
k ? $(k).on("scroll", x) : o.on("scroll", x);
}, z = function() {
b.fixedHeight || p.affix({
target: window,
offset: {
top: b.followAffixTop || 0
}
});
}, A = function() {
return $("#" + b.logViewerID + " .log-view-output");
}, B = function(a) {
var c = A(), d = c.offset().top;
if (!(d < 0)) {
var e = $(".ellipsis-pulser").outerHeight(!0), f = b.fixedHeight ? b.fixedHeight : Math.floor($(window).height() - d - e);
b.chromeless || b.fixedHeight || (f -= 40), a ? c.animate({
"min-height": f + "px"
}, "fast") : c.css("min-height", f + "px"), b.fixedHeight && c.css("max-height", f);
}
}, C = function() {
if (!u) {
var a = function() {
clearInterval(u), u = null, b.$evalAsync(function() {
b.sized = !0;
});
}, c = 0;
u = setInterval(function() {
if (c > 10) return void a();
c++;
var b = A();
b.is(":visible") && (B(), a());
}, 100);
}
}, D = _.debounce(function() {
B(!0), v(), x();
}, 100);
o.on("resize", D);
var E, F = function() {
w = !0, l.scrollBottom(k);
}, G = function() {
b.autoScrollActive = !b.autoScrollActive, b.autoScrollActive && F();
}, H = document.createDocumentFragment(), I = _.debounce(function() {
j.appendChild(H), H = document.createDocumentFragment(), b.autoScrollActive && F(), b.showScrollLinks || v();
}, 100, {
maxWait: 300
}), J = function(a) {
var b = e.defer();
return E ? (E.onClose(function() {
b.resolve();
}), E.stop()) : b.resolve(), a || (I.cancel(), j && (j.innerHTML = ""), H = document.createDocumentFragment()), b.promise;
}, K = function() {
J().then(function() {
b.$evalAsync(function() {
if (b.run) {
angular.extend(b, {
loading: !0,
autoScrollActive: !0,
largeLog: !1,
limitReached: !1,
showScrollLinks: !1,
state: ""
});
var a = angular.extend({
follow: !0,
tailLines: 5e3,
limitBytes: 10485760
}, b.options);
E = i.createStream(s, t, b.context, a);
var c = 0, d = function(a) {
c++, H.appendChild(q(c, a)), I();
};
E.onMessage(function(e, f, g) {
b.$evalAsync(function() {
b.empty = !1, "logs" !== b.state && (b.state = "logs", C());
}), e && (a.limitBytes && g >= a.limitBytes && (b.$evalAsync(function() {
b.limitReached = !0, b.loading = !1;
}), J(!0)), d(e), !b.largeLog && c >= a.tailLines && b.$evalAsync(function() {
b.largeLog = !0;
}));
}), E.onClose(function() {
E = null, b.$evalAsync(function() {
b.loading = !1, b.autoScrollActive = !1, 0 !== c || b.emptyStateMessage || (b.state = "empty", b.emptyStateMessage = n.getString(m("The logs are no longer available or could not be loaded.")));
});
}), E.onError(function() {
E = null, b.$evalAsync(function() {
angular.extend(b, {
loading: !1,
autoScrollActive: !1
}), 0 === c ? (b.state = "empty", b.emptyStateMessage = n.getString(m("The logs are no longer available or could not be loaded."))) : b.errorWhileRunning = !0;
});
}), E.start();
}
});
});
};
return h.getLoggingURL(b.context.project).then(function(d) {
var e = _.get(b.context, "project.metadata.name"), g = _.get(b.options, "container");
e && g && t && d && (angular.extend(b, {
kibanaAuthUrl: a.trustAsResourceUrl(URI(d).segment("auth").segment("token").normalizePathname().toString()),
access_token: f.UserStore().getToken()
}), b.$watchGroup([ "context.project.metadata.name", "options.container", "name" ], function() {
angular.extend(b, {
kibanaArchiveUrl: a.trustAsResourceUrl(l.archiveUri({
namespace: b.context.project.metadata.name,
namespaceUid: b.context.project.metadata.uid,
podname: t,
containername: b.options.container,
backlink: URI.encode(c.location.href)
}))
});
}));
}), this.cacheScrollableNode = function(a) {
k = a;
}, this.cacheLogNode = function(a) {
j = a;
}, this.cacheAffixable = function(a) {
p = $(a);
}, this.start = function() {
y(), z();
}, angular.extend(b, {
ready: !0,
loading: !0,
autoScrollActive: !0,
state: !1,
onScrollBottom: function() {
l.scrollBottom(k);
},
onScrollTop: function() {
b.autoScrollActive = !1, l.scrollTop(k), $("#" + b.logViewerID + "-affixedFollow").affix("checkPosition");
},
toggleAutoScroll: G,
goChromeless: l.chromelessLink,
restartLogs: K
}), b.$on("$destroy", function() {
J(), o.off("resize", D), o.off("scroll", x), k && $(k).off("scroll", x);
}), "deploymentconfigs/logs" !== s || t ? void b.$watchGroup([ "name", "options.container", "run" ], K) : (b.state = "empty", void (b.emptyStateMessage = "Logs are not available for this replication controller because it was not generated from a deployment configuration."));
} ],
require: "logViewer",
link: function(a, c, d, e) {
b(function() {
a.fixedHeight && e.cacheScrollableNode(document.getElementById(a.logViewerID + "-fixed-scrollable")), e.cacheLogNode(document.getElementById(a.logViewerID + "-logContent")), e.cacheAffixable(document.getElementById(a.logViewerID + "-affixedFollow")), e.start();
}, 0);
var f = function() {
var b = $(c).find(".log-line-text").text(), d = _.get(a, "object.metadata.name", "openshift") + ".log", e = new Blob([ b ], {
type: "text/plain;charset=utf-8"
});
saveAs(e, d);
};
a.canSave = !!new Blob(), a.saveLog = function() {
return a.largeLog ? void k.confirmSaveLog(a.object).then(f) : void f();
};
}
};
} ]), angular.module("openshiftConsole").directive("statusIcon", function() {
return {
restrict: "E",
templateUrl: "views/directives/_status-icon.html",
scope: {
status: "=",
disableAnimation: "@"
},
link: function(a, b, c) {
a.spinning = !angular.isDefined(c.disableAnimation);
}
};
}), angular.module("openshiftConsole").directive("ellipsisPulser", [ function() {
return {
restrict: "E",
scope: {
color: "@",
display: "@",
size: "@",
msg: "@"
},
templateUrl: "views/directives/_ellipsis-pulser.html"
};
} ]), angular.module("openshiftConsole").directive("podDonut", [ "$timeout", "isPullingImageFilter", "isTerminatingFilter", "podWarningsFilter", "numContainersReadyFilter", "Logger", "ChartsService", "gettext", "gettextCatalog", function(a, b, c, d, e, f, g, h, i) {
return {
restrict: "E",
scope: {
pods: "=",
desired: "=?",
idled: "=?",
mini: "=?"
},
templateUrl: "views/directives/pod-donut.html",
link: function(a, f) {
function j() {
var b = _.reject(a.pods, {
status: {
phase: "Failed"
}
}), c = _.size(b);
if (a.mini) return void a.$evalAsync(function() {
a.total = c;
});
var d;
d = angular.isNumber(a.desired) && a.desired !== c ? i.getString(h("scaling to")) + " " + a.desired + "..." : 1 === c ? "pod" : "pods", a.idled ? g.updateDonutCenterText(f[0], "Idle") : g.updateDonutCenterText(f[0], c, d);
}
function k(b) {
var c = {
columns: []
};
angular.forEach(q, function(a) {
<<<<<<< HEAD
c.columns.push([ i.getString(a), b[a] || 0 ]);
}), _.isEmpty(b) ? c.columns.push([ "Empty", 1 ]) :c.unload = "Empty", o ? o.load(c) :(p.data.columns = c.columns, o = c3.generate(p)), a.podStatusData = c.columns;
=======
c.columns.push([ a, b[a] || 0 ]);
}), _.isEmpty(b) ? c.columns.push([ "Empty", 1 ]) : c.unload = "Empty", o ? o.load(c) : (p.data.columns = c.columns, o = c3.generate(p)), a.podStatusData = c.columns;
>>>>>>> rebase from poc 3.6
}
function l(a) {
var b = e(a), c = _.size(a.spec.containers);
return b === c;
}
function m(a) {
if (c(a)) return i.getString(h("Terminating"));
var e = d(a);
return _.some(e, {
<<<<<<< HEAD
severity:"error"
}) ? i.getString(h("Error")) :_.isEmpty(e) ? b(a) ? i.getString(h("Pulling")) :"Running" !== a.status.phase || l(a) ? _.get(a, "status.phase", i.getString(h("Unknown"))) :i.getString(h("Not Ready")) :i.getString(h("Warning"));
=======
severity: "error"
}) ? "Error" : _.isEmpty(e) ? b(a) ? "Pulling" : "Running" !== a.status.phase || l(a) ? _.get(a, "status.phase", "Unknown") : "Not Ready" : "Warning";
>>>>>>> rebase from poc 3.6
}
function n() {
var b = {};
return angular.forEach(a.pods, function(a) {
var c = m(a);
b[c] = (b[c] || 0) + 1;
}), b;
}
var o, p, q = [ "Running", "Not Ready", "Warning", "Error", "Pulling", "Pending", "Succeeded", "Terminating", "Unknown" ];
a.chartId = _.uniqueId("pods-donut-chart-"), p = {
<<<<<<< HEAD
type:"donut",
bindto:"#" + a.chartId,
donut:{
expand:!1,
label:{
show:!1
},
width:a.mini ? 5 :10
},
size:{
height:a.mini ? 45 :150,
width:a.mini ? 45 :150
},
legend:{
show:!1
},
onrendered:j,
tooltip:{
format:{
value:function(a, b, c) {
if (a && "Empty" !== c) return a;
}
}
},
transition:{
duration:350
},
data:{
type:"donut",
groups:[ q ],
order:null,
colors:{},
selection:{
enabled:!1
}
}
}, p.data.colors[i.getString(h("Empty"))] = "#ffffff", p.data.colors[i.getString(h("Running"))] = "#00b9e4", p.data.colors[i.getString(h("Not Ready"))] = "#beedf9", p.data.colors[i.getString(h("Warning"))] = "#f39d3c", p.data.colors[i.getString(h("Error"))] = "#d9534f", p.data.colors[i.getString(h("Pulling"))] = "#d1d1d1", p.data.colors[i.getString(h("Pending"))] = "#ededed", p.data.colors[i.getString(h("Succeeded"))] = "#00659c", p.data.colors[i.getString(h("Terminating"))] = "#3f9c35", p.data.colors[i.getString(h("Unknown"))] = "#f9d67a", a.mini && (p.padding = {
top:0,
right:0,
bottom:0,
left:0
});
var r = _.debounce(k, 350, {
maxWait:500
});
a.$watch(n, r, !0), a.$watchGroup([ "desired", "idled" ], j), a.$on("destroy", function() {
o && (o = o.destroy());
=======
} ]), angular.module("openshiftConsole").directive("podDonut", [ "$timeout", "isPullingImageFilter", "isTerminatingFilter", "podWarningsFilter", "numContainersReadyFilter", "Logger", "ChartsService", function(e, t, n, a, r, o, i) {
return {
restrict: "E",
scope: {
pods: "=",
desired: "=?",
idled: "=?",
mini: "=?"
},
templateUrl: "views/directives/pod-donut.html",
link: function(e, o) {
function s() {
var t = _.reject(e.pods, {
status: {
phase: "Failed"
}
}), n = _.size(t);
if (e.mini) e.$evalAsync(function() {
e.total = n;
}); else {
var a;
a = angular.isNumber(e.desired) && e.desired !== n ? "scaling to " + e.desired + "..." : 1 === n ? "pod" : "pods", e.idled ? i.updateDonutCenterText(o[0], "Idle") : i.updateDonutCenterText(o[0], n, a);
}
}
function c(e) {
return r(e) === _.size(e.spec.containers);
}
function l(e) {
if (n(e)) return "Terminating";
var r = a(e);
return _.some(r, {
severity: "error"
}) ? "Error" : _.isEmpty(r) ? t(e) ? "Pulling" : "Running" !== e.status.phase || c(e) ? _.get(e, "status.phase", "Unknown") : "Not Ready" : "Warning";
}
var u, d, m = [ "Running", "Not Ready", "Warning", "Error", "Pulling", "Pending", "Succeeded", "Terminating", "Unknown" ];
e.chartId = _.uniqueId("pods-donut-chart-"), d = {
=======
>>>>>>> rebase from poc 3.6
type: "donut",
bindto: "#" + a.chartId,
donut: {
expand: !1,
label: {
show: !1
},
width: a.mini ? 5 : 10
},
size: {
height: a.mini ? 45 : 150,
width: a.mini ? 45 : 150
},
legend: {
show: !1
},
onrendered: j,
tooltip: {
format: {
value: function(a, b, c) {
if (a && "Empty" !== c) return a;
}
}
},
transition: {
duration: 350
},
data: {
type: "donut",
groups: [ q ],
order: null,
colors: {
Empty: "#ffffff",
Running: "#00b9e4",
"Not Ready": "#beedf9",
Warning: "#f39d3c",
Error: "#d9534f",
Pulling: "#d1d1d1",
Pending: "#ededed",
Succeeded: "#3f9c35",
Terminating: "#00659c",
Unknown: "#f9d67a"
},
selection: {
enabled: !1
}
}
}, a.mini && (p.padding = {
top: 0,
right: 0,
bottom: 0,
left: 0
});
var r = _.debounce(k, 350, {
maxWait: 500
});
a.$watch(n, r, !0), a.$watchGroup([ "desired", "idled" ], j), a.$on("destroy", function() {
o && (o = o.destroy());
});
}
};
} ]), angular.module("openshiftConsole").directive("routeServicePie", function() {
return {
restrict: "E",
scope: {
route: "="
},
template: '<div ng-show="totalWeight" ng-attr-id="{{chartId}}"></div>',
link: function(a) {
function b() {
var b = {
columns: [],
names: {}
};
a.route && (b.columns.push(g(a.route.spec.to)), b.names[a.route.spec.to.name] = _.truncate(a.route.spec.to.name, {
length: 30
}), a.totalWeight = a.route.spec.to.weight, _.each(a.route.spec.alternateBackends, function(c) {
b.columns.push(g(c)), b.names[c.name] = _.truncate(c.name, {
length: 30
}), a.totalWeight += c.weight;
})), a.totalWeight && (c ? (i(b), c.load(b)) : (d.data.columns = b.columns, c = c3.generate(d)), f = b);
}
var c, d, e = window.matchMedia("(max-width: 400px)").matches;
a.chartId = _.uniqueId("route-service-chart-"), d = {
bindto: "#" + a.chartId,
color: {
pattern: [ $.pfPaletteColors.blue, $.pfPaletteColors.orange, $.pfPaletteColors.green, $.pfPaletteColors.red ]
},
legend: {
show: !0,
position: e ? "bottom" : "right"
},
pie: {
label: {
show: !1
}
},
size: {
height: e ? 150 : 115
},
tooltip: {
format: {
name: function(a, b, c) {
return c;
}
}
},
data: {
type: "pie",
order: null,
selection: {
enabled: !1
}
}
};
var f, g = function(a) {
return [ a.name, a.weight ];
}, h = function(a) {
return _.head(a);
}, i = function(a) {
var b = {};
_.each(a.columns, function(a) {
var c = h(a);
b[c] = !0;
});
var c = _.get(f, "columns", []);
a.unload = _.chain(c).reject(function(a) {
var c = h(a);
return _.has(b, [ c ]);
}).map(h).value();
};
a.$watch("route", b), a.$on("destroy", function() {
c && (c = c.destroy());
});
}
};
}), angular.module("openshiftConsole").directive("deploymentDonut", [ "$filter", "$location", "$timeout", "$uibModal", "DeploymentsService", "HPAService", "QuotaService", "LabelFilter", "Navigate", "NotificationsService", "hashSizeFilter", "hasDeploymentConfigFilter", function(a, b, c, d, e, f, g, h, i, j, k, l) {
return {
restrict: "E",
scope: {
rc: "=",
deploymentConfig: "=",
deployment: "=",
scalable: "=",
hpa: "=?",
limitRanges: "=",
quotas: "=",
clusterQuotas: "=",
project: "=",
pods: "="
},
templateUrl: "views/directives/deployment-donut.html",
controller: [ "$scope", "$filter", "$q", function(a, b, c) {
var h = !1, k = b("humanizeKind");
a.$watch("rc.spec.replicas", function() {
h || (a.desiredReplicas = null);
});
var m = function() {
f.getHPAWarnings(a.rc, a.hpa, a.limitRanges, a.project).then(function(b) {
a.hpaWarnings = _.map(b, function(a) {
return _.escape(a.message);
}).join("<br>");
});
};
a.$watchGroup([ "limitRanges", "hpa", "project" ], m), a.$watch("rc.spec.template.spec.containers", m, !0);
var n = function() {
if (_.get(a.rc, "spec.replicas", 1) > _.get(a.rc, "status.replicas", 0)) {
var b = g.filterQuotasForResource(a.rc, a.quotas), c = g.filterQuotasForResource(a.rc, a.clusterQuotas), d = function(b) {
return !_.isEmpty(g.getResourceLimitAlerts(a.rc, b));
};
a.showQuotaWarning = _.some(b, d) || _.some(c, d);
} else a.showQuotaWarning = !1;
};
a.$watchGroup([ "rc.spec.replicas", "rc.status.replicas", "quotas", "clusterQuotas" ], n);
var o = function() {
return a.deploymentConfig || a.deployment || a.rc;
}, p = function() {
if (h = !1, angular.isNumber(a.desiredReplicas)) {
var d = o();
return e.scale(d, a.desiredReplicas).then(_.noop, function(a) {
var e = k(d.kind);
return j.addNotification({
id: "deployment-scale-error",
type: "error",
message: "An error occurred scaling " + e + " " + d.metadata.name + ".",
details: b("getErrorDetails")(a)
}), c.reject(a);
});
}
}, q = _.debounce(p, 650);
a.viewPodsForDeployment = function(b) {
_.isEmpty(a.pods) || i.toPodsForDeployment(b, a.pods);
}, a.scaleUp = function() {
a.scalable && (a.desiredReplicas = a.getDesiredReplicas(), a.desiredReplicas++, q(), h = !0);
}, a.scaleDown = function() {
if (a.scalable && (a.desiredReplicas = a.getDesiredReplicas(), 0 !== a.desiredReplicas)) {
if (1 === a.desiredReplicas) {
var b = d.open({
animation: !0,
templateUrl: "views/modals/confirmScale.html",
controller: "ConfirmScaleController",
resolve: {
resource: function() {
return a.rc;
},
type: function() {
return l(a.rc) ? "deployment" : "replication controller";
}
}
});
return void b.result.then(function() {
a.desiredReplicas = a.getDesiredReplicas() - 1, q(), h = !0;
});
}
a.desiredReplicas--, q();
}
}, a.getDesiredReplicas = function() {
return angular.isDefined(a.desiredReplicas) && null !== a.desiredReplicas ? a.desiredReplicas : a.rc && a.rc.spec && angular.isDefined(a.rc.spec.replicas) ? a.rc.spec.replicas : 1;
}, a.$watch(function() {
return !_.get(a.rc, "spec.replicas") && !!(a.deploymentConfig ? b("annotation")(a.deploymentConfig, "idledAt") : b("annotation")(a.rc, "idledAt"));
}, function(b) {
a.isIdled = !!b;
}), a.unIdle = function() {
a.desiredReplicas = b("unidleTargetReplicas")(a.deploymentConfig || a.rc, a.hpa), p().then(function() {
a.isIdled = !1;
});
};
} ]
};
} ]), angular.module("openshiftConsole").directive("quotaUsageChart", [ "$filter", "ChartsService", "gettext", "gettextCatalog", function(a, b, c, d) {
return {
restrict: "E",
scope: {
used: "=",
crossProjectUsed: "=?",
total: "=",
type: "@",
height: "=?",
width: "=?"
},
replace: !0,
templateUrl: "views/_quota-usage-chart.html",
link: function(e, f) {
function g() {
var a = _.spread(function(a, c) {
b.updateDonutCenterText(f[0], a, c);
});
a(j(e.total, e.type, !0));
}
var h = a("usageValue"), i = a("usageWithUnits"), j = a("amountAndUnit");
e.height = e.height || 200, e.width = e.width || 175;
var k = function(a) {
return a ? (100 * Number(a)).toFixed(1) + "%" : "0%";
};
e.chartID = _.uniqueId("quota-usage-chart-");
var l, m = {
type: "donut",
bindto: "#" + e.chartID,
donut: {
label: {
show: !1
},
width: 10
},
size: {
height: e.height,
width: e.width
},
legend: {
show: !0,
position: e.legendPosition || "bottom",
item: {
onclick: _.noop
}
},
onrendered: g,
tooltip: {
position: function() {
return {
top: 0,
left: 0
};
},
contents: function(a, b, f, g) {
var j = $('<table class="c3-tooltip"></table>').css({
width: e.width + "px"
}), l = $("<tr/>").appendTo(j), m = $('<td class="name nowrap"></td>').appendTo(l);
$("<span/>").css({
"background-color": g(a[0].id)
}).appendTo(m), $("<span/>").text(a[0].name).appendTo(m);
var n;
n = e.total ? k(a[0].value / h(e.total)) + " " + d.getString(c("of")) + " " + i(e.total, e.type) : i(e.used, e.type);
var o = $("<tr/>").appendTo(j);
return $('<td class="value" style="text-align: left;"></td>').text(n).appendTo(o), j.get(0).outerHTML;
}
},
data: {
type: "donut",
order: null
}
}, n = function() {
var a = void 0 !== e.crossProjectUsed, b = h(e.used) || 0, f = Math.max((h(e.crossProjectUsed) || 0) - b, 0), g = Math.max(h(e.total) - (f + b), 0), i = {
columns: [ [ "used", b ], [ "available", g ] ],
colors: {
used: g ? "#0088ce" : "#ec7a08",
other: g ? "#7dc3e8" : "#f7bd7f",
available: "#d1d1d1"
},
names: {
used: a ? d.getString(c("Used - This Project")) : d.getString(c("Used")),
other: d.getString(c("Used - Other Projects")),
available: d.getString(c("Available"))
}
};
a && i.columns.splice(1, 0, [ "other", f ]), l ? l.load(i) : (_.assign(m.data, i), l = c3.generate(m));
};
e.$watchGroup([ "used", "total", "crossProjectUsed" ], _.debounce(n, 300));
}
};
} ]), angular.module("openshiftConsole").directive("buildTrendsChart", [ "$filter", "$location", "$rootScope", "$timeout", "BuildsService", function(a, b, c, d, e) {
return {
restrict: "E",
scope: {
builds: "="
},
templateUrl: "views/_build-trends-chart.html",
link: function(f) {
var g, h = [ "Complete", "Failed", "Cancelled", "Error" ];
f.minBuilds = _.constant(4);
var i = function(a) {
var b = [], c = moment.duration(a), d = Math.floor(c.asHours()), e = c.minutes(), f = c.seconds();
return d || e || f ? (d && b.push(d + "h"), e && b.push(e + "m"), d || b.push(f + "s"), b.join(" ")) : "";
};
f.chartID = _.uniqueId("build-trends-chart-");
var j, k, l = _.constant(350), m = {
bindto: "#" + f.chartID,
padding: {
right: 30,
left: 80
},
axis: {
x: {
fit: !0,
label: {
text: "Build Number",
position: "outer-right"
},
tick: {
culling: !0,
format: function(a) {
return "#" + g.json[a].buildNumber;
},
width: 30
},
type: "category"
},
y: {
label: {
text: "Duration",
position: "outer-top"
},
min: 0,
padding: {
bottom: 0
},
tick: {
format: i
}
}
},
bar: {
width: {
max: 50
}
},
legend: {
item: {
onclick: _.noop
}
},
size: {
height: 250
},
tooltip: {
format: {
title: function(a) {
var b = g.json[a], c = e.getStartTimestsamp(b.build);
return "#" + b.buildNumber + " (" + moment(c).fromNow() + ")";
}
}
},
transition: {
duration: l()
},
data: {
colors: {
Cancelled: "#d1d1d1",
Complete: "#00b9e4",
Error: "#393f44",
Failed: "#cc0000"
},
empty: {
label: {
text: "No Completed Builds"
}
},
onclick: function(d) {
var e = g.json[d.x].build, f = a("navigateResourceURL")(e);
f && c.$apply(function() {
b.path(f);
});
},
selection: {
enabled: !0
},
type: "bar"
}
}, n = function() {
f.completeBuilds = [];
var b = a("isIncompleteBuild");
angular.forEach(f.builds, function(a) {
b(a) || f.completeBuilds.push(a);
});
}, o = function() {
return n(), f.completeBuilds.length;
}, p = !1, q = function() {
k && p ? j.ygrids([ {
value: k,
"class": "build-trends-avg-line"
} ]) : j.ygrids.remove();
};
f.toggleAvgLine = function() {
p = !p, q();
};
var r = function() {
g = {
json: [],
keys: {
x: "buildNumber"
}
};
var a = 0, b = 0;
angular.forEach(f.completeBuilds, function(c) {
var d = e.getBuildNumber(c);
if (d) {
var f = e.getDuration(c);
a += f, b++;
var h = {
buildNumber: d,
phase: c.status.phase,
build: c
};
h[c.status.phase] = f, g.json.push(h);
}
}), g.json.sort(function(a, b) {
return a.buildNumber - b.buildNumber;
}), g.json.length > 50 && (g.json = g.json.slice(g.json.length - 50));
var c = {};
angular.forEach(g.json, function(a) {
c[a.phase] = !0;
}), b ? (k = a / b, f.averageDurationText = i(k)) : (k = null, f.averageDurationText = null);
var n = [], o = [];
angular.forEach(h, function(a) {
c[a] ? n.push(a) : o.push(a);
}), g.keys.value = n, g.groups = [ n ], j ? (g.unload = o, g.done = function() {
setTimeout(function() {
j.flush();
}, l() + 25);
}, j.load(g), q()) : (m.data = angular.extend(g, m.data), d(function() {
j = c3.generate(m), q();
}));
};
f.$watch(o, r), f.$on("destroy", function() {
j && (j = j.destroy());
});
}
};
} ]), angular.module("openshiftConsole").directive("computeResource", [ "$filter", "gettext", "gettextCatalog", function(a, b, c) {
return {
restrict: "E",
require: "ngModel",
scope: {
label: "@",
type: "@",
description: "@",
defaultValue: "=",
limitRangeMin: "=",
limitRangeMax: "=",
maxLimitRequestRatio: "=",
request: "="
},
templateUrl: "views/_compute-resource.html",
link: function(d, e, f, g) {
var h = a("usageValue"), i = a("amountAndUnit"), j = a("humanizeUnit");
d.id = _.uniqueId("compute-resource-"), d.input = {};
var k = function(a) {
_.some(d.units, {
value: a
}) || d.units.push({
value: a,
label: c.getString(j(a, d.type))
});
};
switch (d.$watch("defaultValue", function(a) {
var b = _.spread(function(a, b) {
d.placeholder = a, k(b), d.input.amount || (d.input.unit = b);
});
a && b(i(a, d.type));
}), d.type) {
case "cpu":
d.input.unit = "m", d.units = [ {
value: "m",
label: c.getString(b("millicores"))
}, {
value: "",
label: c.getString(b("cores"))
} ];
break;

case "memory":
d.input.unit = "Mi", d.units = [ {
value: "Mi",
label: "MiB"
}, {
value: "Gi",
label: "GiB"
} ];
}
d.groupUnits = function(a) {
switch (a.value) {
case "Mi":
case "Gi":
return c.getString(b("Binary Units"));

case "M":
case "G":
return c.getString(b("Decimal Units"));
}
return "";
};
var l = function() {
var a = d.input.amount && h(d.input.amount + d.input.unit), b = d.limitRangeMin && h(d.limitRangeMin), c = d.limitRangeMax && h(d.limitRangeMax), e = !0, f = !0;
a && b && (e = a >= b), a && c && (f = a <= c), d.form.amount.$setValidity("limitRangeMin", e), d.form.amount.$setValidity("limitRangeMax", f);
}, m = function() {
var a, b = d.request && h(d.request), c = !0, e = !0;
d.input.amount ? a = h(d.input.amount + d.input.unit) : d.defaultValue && (a = h(d.defaultValue)), b && a && (c = a >= b, d.maxLimitRequestRatio && (e = a / b <= d.maxLimitRequestRatio)), b && !a && d.maxLimitRequestRatio && (e = !1), d.form.amount.$setValidity("limitLargerThanRequest", c), d.form.amount.$setValidity("limitWithinRatio", e);
};
g.$render = function() {
var a = _.spread(function(a, b) {
a ? (d.input.amount = Number(a), d.input.unit = b, k(b)) : d.input.amount = null;
});
a(i(g.$viewValue, d.type));
}, d.$watchGroup([ "input.amount", "input.unit" ], function() {
l(), m(), d.input.amount ? g.$setViewValue(d.input.amount + d.input.unit) : g.$setViewValue(void 0);
}), d.$watchGroup([ "limitRangeMin", "limitRangeMax" ], l), d.$watch("request", m);
}
};
} ]).directive("editRequestLimit", [ "$filter", "LimitRangesService", "ModalsService", function(a, b, c) {
return {
restrict: "E",
scope: {
resources: "=",
type: "@",
limitRanges: "=",
project: "="
},
templateUrl: "views/_edit-request-limit.html",
link: function(a) {
a.showComputeUnitsHelp = function() {
c.showComputeUnitsHelp();
}, a.$watch("limitRanges", function() {
a.limits = b.getEffectiveLimitRange(a.limitRanges, a.type, "Container", a.project), a.requestCalculated = b.isRequestCalculated(a.type, a.project), a.limitCalculated = b.isLimitCalculated(a.type, a.project);
}, !0);
}
};
} ]), angular.module("openshiftConsole").directive("editProbe", function() {
return {
restrict: "E",
scope: {
probe: "=",
exposedPorts: "="
},
templateUrl: "views/directives/_edit-probe.html",
link: function(a) {
a.id = _.uniqueId("edit-probe-"), a.probe = a.probe || {}, a.types = [ {
id: "httpGet",
label: "HTTP GET"
}, {
id: "exec",
label: "Container Command"
}, {
id: "tcpSocket",
label: "TCP Socket"
} ], a.previousProbes = {}, a.tcpPorts = _.filter(a.exposedPorts, {
protocol: "TCP"
});
var b = _.get(a, "probe.httpGet.port") || _.get(a, "probe.exec.port");
b && !_.some(a.tcpPorts, {
containerPort: b
}) && (a.tcpPorts = [ {
containerPort: b,
protocol: "TCP"
} ].concat(a.tcpPorts)), a.portOptions = a.tcpPorts;
var c, d = function(b, c) {
if (a.probe = a.probe || {}, a.previousProbes[c] = a.probe[c], delete a.probe[c], a.probe[b] = a.previousProbes[b], !a.probe[b]) switch (b) {
case "httpGet":
case "tcpSocket":
var d = _.head(a.tcpPorts);
a.probe[b] = {
port: d ? d.containerPort : ""
};
break;

case "exec":
a.probe = {
exec: {
command: []
}
};
}
};
a.probe.httpGet ? c = "httpGet" : a.probe.exec ? c = "exec" : a.probe.tcpSocket ? c = "tcpSocket" : (c = "httpGet", d("httpGet")), _.set(a, "selected.type", c), a.$watch("selected.type", function(a, b) {
a !== b && d(a, b);
}), a.refreshPorts = function(b) {
if (/^\d+$/.test(b)) {
var c = a.tcpPorts;
b = parseInt(b, 10), b && !_.some(c, {
containerPort: b
}) && (c = [ {
containerPort: b,
protocol: "TCP"
} ].concat(c)), a.portOptions = _.uniq(c);
}
};
}
};
}), angular.module("openshiftConsole").directive("editCommand", [ "$filter", function(a) {
return {
restrict: "E",
scope: {
args: "=",
type: "@",
placeholder: "@",
description: "=",
isRequired: "="
},
templateUrl: "views/directives/_edit-command.html",
link: function(b) {
b.id = _.uniqueId("edit-command-"), b.input = {};
var c, d, e = a("isMultiline");
b.$watch("args", function() {
return d ? void (d = !1) : void (_.isEmpty(b.args) || (b.input.args = _.map(b.args, function(a) {
return {
value: a,
multiline: e(a)
};
}), c = !0));
}, !0), b.$watch("input.args", function(a, e) {
return c ? void (c = !1) : void (a !== e && (d = !0, b.args = _.map(b.input.args, function(a) {
return a.value;
}), b.form.command.$setDirty()));
}, !0), b.addArg = function() {
b.nextArg && (b.input.args = b.input.args || [], b.input.args.push({
value: b.nextArg,
multiline: e(b.nextArg)
}), b.nextArg = "");
}, b.removeArg = function(a) {
b.input.args.splice(a, 1), _.isEmpty(b.input.args) && (b.input.args = null);
}, b.clear = function() {
b.input.args = null;
};
}
};
} ]), angular.module("openshiftConsole").directive("buildPipeline", [ "$filter", "Logger", function(a, b) {
return {
restrict: "E",
scope: {
build: "=",
expandOnlyRunning: "=?",
collapsePending: "=?",
buildConfigNameOnExpanded: "=?"
},
replace: !0,
templateUrl: "views/directives/build-pipeline.html",
link: function(c) {
var d = a("annotation");
c.$watch(function() {
return d(c.build, "jenkinsStatus");
}, function(a) {
if (a) try {
c.jenkinsStatus = JSON.parse(a);
} catch (d) {
b.error("Could not parse Jenkins status as JSON", a);
}
});
var e = a("buildConfigForBuild");
c.$watch(function() {
return e(c.build);
}, function(a) {
c.buildConfigName = a;
});
}
};
} ]).directive("pipelineStatus", function() {
return {
restrict: "E",
scope: {
status: "="
},
templateUrl: "views/directives/pipeline-status.html"
};
}), angular.module("openshiftConsole").directive("buildStatus", function() {
return {
restrict: "E",
scope: {
build: "="
},
templateUrl: "views/directives/build-status.html"
};
}), function() {
function a() {
var a = this, b = function(b, c) {
return b.name === a.highlightService ? -1 : c.name === a.highlightService ? 1 : c.weight === b.weight ? b.name.localeCompare(c.name) : c.weight - b.weight;
}, c = function(b) {
a.total += b.weight, a.max = Math.max(b.weight, a.max || 0), a.backends.push({
name: b.name,
weight: b.weight
});
};
a.$onChanges = function() {
if (a.backends = [], a.total = 0, a.route) {
c(a.route.spec.to);
var d = _.get(a, "route.spec.alternateBackends", []);
_.each(d, c), a.backends.sort(b);
}
}, a.getPercentage = function(b) {
var c = a.total || 100, d = b.weight / c * 100;
return _.round(d) + "%";
}, a.barWidth = function(b) {
var c = a.max || 100;
return b.weight / c * 100 + "%";
};
}
angular.module("openshiftConsole").component("routeServiceBarChart", {
controller: a,
controllerAs: "routeServices",
bindings: {
route: "<",
highlightService: "<"
},
templateUrl: "views/directives/route-service-bar-chart.html"
});
}(), function() {
function a(a, b, c, d, e, f, g) {
var h, i, j, k, l, m, n = this, o = b("statusCondition"), p = b("enableTechPreviewFeature"), q = function() {
var a, b;
_.each(n.serviceInstances, function(c) {
var d = "True" === _.get(o(c, "Ready"), "status");
d && (!a || c.metadata.creationTimestamp > a.metadata.creationTimestamp) && (a = c), d || b && !(c.metadata.creationTimestamp > b.metadata.creationTimestamp) || (b = c);
}), n.serviceToBind = a || b;
}, r = function() {
n.serviceClasses && n.serviceInstances && (n.serviceInstances = e.filterBindableServiceInstances(n.serviceInstances, n.serviceClasses, n.servicePlans), n.orderedServiceInstances = e.sortServiceInstances(n.serviceInstances, n.serviceClasses), n.serviceToBind || q());
}, s = function() {
n.nextTitle = i.hidden ? "Bind" : "Next >", n.podPresets && !k && (k = a.$watch("ctrl.selectionForm.$valid", function(a) {
h.valid = a;
}));
}, t = function() {
n.nextTitle = "Bind", l || (l = a.$watch("ctrl.parametersForm.$valid", function(a) {
i.valid = a;
}));
}, u = function() {
k && (k(), k = void 0), l && (l(), l = void 0), n.nextTitle = "Close", n.wizardComplete = !0, n.bindService();
}, v = function() {
var a = {
<<<<<<< 61b7ccebc1be9196354cef218d1e7a812de7a0c6
namespace: _.get(n.target, "metadata.namespace")
};
d.getApplications(a).then(function(a) {
n.applications = a, n.bindType = n.applications.length ? "application" : "secret-only";
=======
namespace:_.get(l.target, "metadata.namespace")
};
c.list("deploymentconfigs", a).then(function(a) {
g = _.toArray(a.by("metadata.name")), p();
}), c.list("replicationcontrollers", a).then(function(a) {
i = _.reject(a.by("metadata.name"), b("hasDeploymentConfig")), p();
}), c.list({
group:"apps",
resource:"deployments"
}, a).then(function(a) {
h = _.toArray(a.by("metadata.name")), p();
}), c.list({
group:"extensions",
resource:"replicasets"
}, a).then(function(a) {
j = _.reject(a.by("metadata.name"), b("hasDeployment")), p();
}), c.list({
group:"apps",
resource:"statefulsets"
}, a).then(function(a) {
k = _.toArray(a.by("metadata.name")), p();
>>>>>>> Use `apps` API group for deployments
});
}, w = function() {
var a = {
namespace: _.get(n.target, "metadata.namespace")
}, b = c.getPreferredVersion("serviceinstances");
f.list(b, a).then(function(a) {
n.serviceInstances = a.by("metadata.name"), r();
});
};
h = {
id: "bindForm",
label: "Binding",
view: "views/directives/bind-service/bind-service-form.html",
valid: !0,
allowClickNav: !0,
onShow: s
}, i = {
id: "bindParameters",
label: "Parameters",
view: "views/directives/bind-service/bind-parameters.html",
hidden: !0,
allowClickNav: !0,
onShow: t
}, j = {
id: "results",
label: "Results",
view: "views/directives/bind-service/results.html",
valid: !0,
allowClickNav: !1,
onShow: u
};
var x = function() {
if (n.serviceClasses && n.servicePlans) {
var a = "ServiceInstance" === n.target.kind ? n.target : n.serviceToBind;
if (a) {
var b = g.getServiceClassNameForInstance(a);
n.serviceClass = n.serviceClasses[b];
var c = g.getServicePlanNameForInstance(a);
n.plan = n.servicePlans[c], n.parameterSchema = _.get(n.plan, "spec.serviceBindingCreateParameterSchema"), n.parameterFormDefinition = _.get(n.plan, "spec.externalMetadata.schemas.service_binding.create.openshift_form_definition"), i.hidden = !_.has(n.parameterSchema, "properties"), n.nextTitle = i.hidden ? "Bind" : "Next >", n.hideBack = i.hidden;
}
}
};
a.$watch("ctrl.serviceToBind", x), n.$onInit = function() {
n.serviceSelection = {}, n.projectDisplayName = b("displayName")(n.project), n.podPresets = p("pod_presets"), n.parameterData = {}, n.steps = [ h, i, j ], n.hideBack = i.hidden;
var a = c.getPreferredVersion("clusterserviceclasses");
f.list(a, {}).then(function(a) {
n.serviceClasses = a.by("metadata.name"), x(), r();
});
var d = c.getPreferredVersion("clusterserviceplans");
f.list(d, {}).then(function(a) {
n.servicePlans = a.by("metadata.name"), x();
}), "ServiceInstance" === n.target.kind ? (n.bindType = "secret-only", n.appToBind = null, n.serviceToBind = n.target, n.podPresets && v()) : (n.bindType = "application", n.appToBind = n.target, w());
}, n.$onChanges = function(a) {
a.project && !a.project.isFirstChange() && (n.projectDisplayName = b("displayName")(n.project));
}, n.$onDestroy = function() {
k && (k(), k = void 0), l && (l(), l = void 0), m && f.unwatch(m);
}, n.bindService = function() {
var a = "ServiceInstance" === n.target.kind ? n.target : n.serviceToBind, b = "application" === n.bindType ? n.appToBind : void 0, c = {
namespace: _.get(a, "metadata.namespace")
}, d = e.getServiceClassForInstance(a, n.serviceClasses);
e.bindService(a, b, d, n.parameterData).then(function(a) {
n.binding = a, n.error = null, m = f.watchObject(e.bindingResource, _.get(n.binding, "metadata.name"), c, function(a) {
n.binding = a;
});
}, function(a) {
n.error = a;
});
}, n.closeWizard = function() {
_.isFunction(n.onClose) && n.onClose();
};
}
angular.module("openshiftConsole").component("bindService", {
controller: [ "$scope", "$filter", "APIService", "ApplicationsService", "BindingService", "DataService", "ServiceInstancesService", a ],
controllerAs: "ctrl",
bindings: {
target: "<",
project: "<",
onClose: "<"
},
templateUrl: "views/directives/bind-service.html"
});
}(), function() {
function a(a, b, c, d) {
var e, f, g = this, h = b("enableTechPreviewFeature"), i = b("serviceInstanceDisplayName"), j = c.getPreferredVersion("servicebindings"), k = function() {
var a = g.selectedBinding.metadata.name;
g.unboundApps = g.appsForBinding(a), d["delete"](j, a, f, {
propagationPolicy: null
}).then(_.noop, function(a) {
g.error = a;
});
}, l = function() {
var b = _.head(g.steps);
b.valid = !1, e = a.$watch("ctrl.selectedBinding", function(a) {
b.valid = !!a;
});
}, m = function() {
e && (e(), e = void 0);
}, n = function() {
g.nextTitle = "Delete", l();
}, o = function() {
g.nextTitle = "Close", g.wizardComplete = !0, k(), m();
};
g.$onInit = function() {
var a;
a = "ServiceInstance" === g.target.kind ? h("pod_presets") ? "Applications" : "Bindings" : "Services", g.displayName = i(g.target, g.serviceClass), g.steps = [ {
id: "deleteForm",
label: a,
view: "views/directives/bind-service/delete-binding-select-form.html",
onShow: n
}, {
id: "results",
label: "Results",
view: "views/directives/bind-service/delete-binding-result.html",
onShow: o
} ], f = {
namespace: _.get(g.target, "metadata.namespace")
};
}, g.appsForBinding = function(a) {
return _.get(g.applicationsByBinding, a);
}, g.closeWizard = function() {
_.isFunction(g.onClose) && g.onClose();
}, g.$onDestroy = function() {
m();
};
}
angular.module("openshiftConsole").component("unbindService", {
controller: [ "$scope", "$filter", "APIService", "DataService", a ],
controllerAs: "ctrl",
bindings: {
target: "<",
bindings: "<",
applicationsByBinding: "<",
onClose: "<",
serviceClass: "<"
},
templateUrl: "views/directives/unbind-service.html"
});
}(), function() {
function a(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
function p(a) {
var b = /^helplink\.(.*)\.title$/, c = /^helplink\.(.*)\.url$/, d = {};
for (var e in a.annotations) {
var f, g = e.match(b);
g ? (f = d[g[1]] || {}, f.title = a.annotations[e], d[g[1]] = f) : (g = e.match(c), g && (f = d[g[1]] || {}, f.url = a.annotations[e], d[g[1]] = f));
}
return d;
}
function q() {
s.prefillParameters && _.each(s.template.parameters, function(a) {
s.prefillParameters[a.name] && (a.value = s.prefillParameters[a.name]);
}), s.labels = _.map(s.template.labels, function(a, b) {
return {
name: b,
value: a
};
}), C() && s.labels.push({
name: "app",
value: s.template.metadata.name
});
}
var r, s = this, t = a("displayName"), u = a("humanize");
s.noProjectsCantCreate = !1, s.$onInit = function() {
s.labels = [], s.template = angular.copy(s.template), s.templateDisplayName = t(s.template), s.selectedProject = s.project, c.$watch("$ctrl.selectedProject.metadata.name", function() {
s.projectNameTaken = !1;
}), c.$on("no-projects-cannot-create", function() {
s.noProjectsCantCreate = !0;
}), q();
};
var v, w = function() {
var a = {
started: o.getString(n("Creating")) + " " + s.templateDisplayName + " " + o.getString(n("in project ")) + " " + t(s.selectedProject),
success: o.getString(n("Created")) + " " + s.templateDisplayName + " " + o.getString(n("in project")) + " " + t(s.selectedProject),
failure: o.getString(n("Failed to create")) + " " + s.templateDisplayName + " " + o.getString(n("in project")) + " " + t(s.selectedProject)
}, d = p(s.template);
l.clear(), l.add(a, d, s.selectedProject.metadata.name, function() {
var a = b.defer();
return e.batch(v, r).then(function(b) {
var c = [], d = !1;
b.failure.length > 0 ? (d = !0, b.failure.forEach(function(a) {
c.push({
type: "error",
message: "Cannot create " + u(a.object.kind).toLowerCase() + ' "' + a.object.metadata.name + '". ',
details: a.data.message
});
}), b.success.forEach(function(a) {
c.push({
type: "success",
message: "Created " + u(a.kind).toLowerCase() + ' "' + a.metadata.name + '" successfully. '
});
})) : c.push({
type: "success",
message: o.getString(n("All items in template {{templateDisplayName}} were created successfully."), {
templateDisplayName: s.templateDisplayName
})
}), a.resolve({
alerts: c,
hasErrors: d
});
}), a.promise;
}), s.isDialog ? c.$emit("templateInstantiated", {
project: s.selectedProject,
template: s.template
}) : f.toNextSteps(s.templateDisplayName, s.selectedProject.metadata.name);
}, x = function(a) {
var b = d.open({
animation: !0,
templateUrl: "views/modals/confirm.html",
controller: "ConfirmModalController",
resolve: {
modalConfig: function() {
return {
alerts: a,
message: o.getString(n("We checked your application for potential problems. Please confirm you still want to create this application.")),
okButtonText: o.getString(n("Create Anyway")),
okButtonClass: "btn-danger",
cancelButtonText: o.getString(n("Cancel"))
};
}
}
});
b.result.then(w);
}, y = {}, z = function() {
g.hideNotification("process-template-error"), _.each(y, function(a) {
!a.id || "error" !== a.type && "warning" !== a.type || g.hideNotification(a.id);
});
}, A = function(a) {
z(), y = k.getSecurityAlerts(v, s.selectedProject.metadata.name);
var b = a.quotaAlerts || [];
y = y.concat(b);
var c = _.filter(y, {
type: "error"
});
c.length ? (s.disableInputs = !1, _.each(y, function(a) {
a.id = _.uniqueId("process-template-alert-"), g.addNotification(a);
})) : y.length ? (x(y), s.disableInputs = !1) : w();
}, B = function() {
if (_.has(s.selectedProject, "metadata.uid")) return b.when(s.selectedProject);
var c = s.selectedProject.metadata.name, d = s.selectedProject.metadata.annotations["new-display-name"], e = a("description")(s.selectedProject);
return i.create(c, d, e);
};
s.createFromTemplate = function() {
s.disableInputs = !0, B().then(function(a) {
s.selectedProject = a, r = {
namespace: s.selectedProject.metadata.name
}, s.template.labels = m.mapEntries(m.compactEntries(s.labels)), e.create("processedtemplates", null, s.template, r).then(function(a) {
h.setTemplateData(a.parameters, s.template.parameters, a.message), v = a.objects, j.getLatestQuotaAlerts(v, r).then(A);
}, function(a) {
s.disableInputs = !1;
var b;
a.data && a.data.message && (b = a.data.message), g.addNotification({
id: "process-template-error",
type: "error",
message: "An error occurred processing the template.",
details: b
});
});
}, function(a) {
if (s.disableInputs = !1, "AlreadyExists" === a.data.reason) s.projectNameTaken = !0; else {
var b;
a.data && a.data.message && (b = a.data.message), g.addNotification({
id: "process-template-error",
type: "error",
message: "An error occurred creating the project.",
details: b
});
}
});
}, s.cancel = function() {
z(), f.toProjectOverview(s.project.metadata.name);
}, c.$on("instantiateTemplate", s.createFromTemplate), c.$on("$destroy", z);
var C = function() {
return !_.get(s.template, "labels.app") && !_.some(s.template.objects, "metadata.labels.app");
};
}
angular.module("openshiftConsole").component("processTemplate", {
controller: [ "$filter", "$q", "$scope", "$uibModal", "DataService", "Navigate", "NotificationsService", "ProcessedTemplateService", "ProjectsService", "QuotaService", "SecurityCheckService", "TaskList", "keyValueEditorUtils", "gettext", "gettextCatalog", a ],
controllerAs: "$ctrl",
bindings: {
template: "<",
project: "<",
onProjectSelected: "<",
availableProjects: "<",
prefillParameters: "<",
isDialog: "<"
},
templateUrl: "views/directives/process-template.html"
});
}(), function() {
function a(a, b, c, d, e, f, g, h, i) {
function j() {
var a = _.get(x, "template.metadata.annotations.iconClass", "fa fa-clone");
return a.indexOf("icon-") !== -1 ? "font-icon " + a : a;
}
function k() {
var a = _.get(x, "template.metadata.annotations.iconClass", "fa fa-clone");
return y(a);
}
function l() {
x.steps || (x.steps = [ x.selectStep, x.infoStep, x.configStep, x.resultsStep ]);
}
function m() {
w && (w(), w = void 0);
}
function n() {
x.infoStep.selected = !0, x.selectStep.selected = !1, x.configStep.selected = !1, x.resultsStep.selected = !1, x.nextTitle = "Next >", m();
}
function o() {
x.infoStep.selected = !1, x.selectStep.selected = !0, x.configStep.selected = !1, x.resultsStep.selected = !1, x.nextTitle = "Next >", m(), v();
}
function p() {
x.infoStep.selected = !1, x.selectStep.selected = !1, x.configStep.selected = !0, x.resultsStep.selected = !1, x.nextTitle = "Create", x.resultsStep.allowed = x.configStep.valid, w = a.$watch("$ctrl.form.$valid", function(a) {
x.configStep.valid = a && !x.noProjectsCantCreate && x.selectedProject, x.resultsStep.allowed = a;
});
}
function q() {
x.infoStep.selected = !1, x.selectStep.selected = !1, x.configStep.selected = !1, x.resultsStep.selected = !0, x.nextTitle = "Close", m(), x.wizardDone = !0;
}
function r() {
a.$broadcast("instantiateTemplate");
}
function s(a, b) {
return f.filterForKeywords(b, [ "name", "tags" ], f.generateKeywords(a));
}
function t(a) {
x.filterConfig.appliedFilters = a, u();
}
function u() {
x.filteredItems = x.catalogItems, x.filterConfig.appliedFilters && x.filterConfig.appliedFilters.length > 0 && _.each(x.filterConfig.appliedFilters, function(a) {
x.filteredItems = s(a.value, x.filteredItems);
}), x.filterConfig.resultsCount = x.filteredItems.length, _.includes(x.filteredItems, x.selectedTemplate) || x.templateSelected();
}
function v() {
x.unfilteredProjects || h.list().then(function(a) {
x.unfilteredProjects = _.toArray(a.by("metadata.name"));
}, function() {
x.unfilteredProjects = [];
})["finally"](function() {
A();
});
}
var w, x = this, y = b("imageForIconClass"), z = b("annotation");
x.selectStep = {
id: "projectTemplates",
label: "Selection",
view: "views/directives/process-template-dialog/process-template-select.html",
hidden: x.useProjectTemplate !== !0,
allowed: !0,
valid: !1,
allowClickNav: !0,
onShow: o
}, x.infoStep = {
id: "info",
label: "Information",
view: "views/directives/process-template-dialog/process-template-info.html",
allowed: !0,
valid: !0,
allowClickNav: !0,
onShow: n
}, x.configStep = {
id: "configuration",
label: "Configuration",
view: "views/directives/process-template-dialog/process-template-config.html",
valid: !1,
allowed: !0,
allowClickNav: !0,
onShow: p
}, x.resultsStep = {
id: "results",
label: "Results",
view: "views/directives/process-template-dialog/process-template-results.html",
valid: !0,
allowed: !1,
prevEnabled: !1,
allowClickNav: !1,
onShow: q
}, x.$onInit = function() {
x.loginBaseUrl = e.openshiftAPIBaseUrl(), x.preSelectedProject = x.selectedProject = x.project, x.useProjectTemplate && (x.project && (x.templateProject = x.project, x.templateProjectChange()), v()), x.noProjectsCantCreate = !1, a.$on("no-projects-cannot-create", function() {
x.noProjectsCantCreate = !0;
}), x.noProjectsEmptyState = {
title: "No Available Projects",
info: "There are no projects available from which to load templates."
}, x.projectEmptyState = {
title: "No Project Selected",
info: "Please select a project from the dropdown to load templates from that project."
}, x.templatesEmptyState = {
title: "No Templates",
info: "The selected project has no templates available to import."
}, x.filterConfig = {
fields: [ {
id: "keyword",
title: "Keyword",
placeholder: "Filter by Keyword",
filterType: "text"
} ],
inlineResults: !0,
showTotalCountResults: !0,
itemsLabel: "Item",
itemsLabelPlural: "Items",
resultsCount: 0,
appliedFilters: [],
onFilterChange: t
}, c.project || (x.showProjectName = !0);
}, x.$onChanges = function(a) {
a.template && x.template && (l(), x.iconClass = j(), x.image = k(), x.docUrl = z(x.template, "openshift.io/documentation-url"), x.supportUrl = z(x.template, "openshift.io/support-url"), x.vendor = z(x.template, "openshift.io/provider-display-name")), a.useProjectTemplate && l();
}, a.$on("templateInstantiated", function(a, b) {
x.selectedProject = b.project, x.currentStep = x.resultsStep.label;
}), x.$onDestroy = function() {
m();
}, x.next = function(a) {
return a.stepId === x.configStep.id ? (r(), !1) : a.stepId !== x.resultsStep.id || (x.close(), !1);
}, x.close = function() {
var a = x.onDialogClosed();
_.isFunction(a) && a();
}, x.onProjectSelected = function(b) {
x.selectedProject = b, x.configStep.valid = a.$ctrl.form.$valid && x.selectedProject;
}, x.templateSelected = function(a) {
x.selectedTemplate = a, x.template = _.get(a, "resource"), x.selectStep.valid = !!a, x.iconClass = j(), x.image = k(), x.docUrl = z(x.template, "openshift.io/documentation-url"), x.supportUrl = z(x.template, "openshift.io/support-url"), x.vendor = z(x.template, "openshift.io/provider-display-name");
}, x.templateProjectChange = function() {
x.templateProjectName = _.get(x.templateProject, "metadata.name"), x.catalogItems = {}, x.templateSelected(), d.getProjectCatalogItems(x.templateProjectName, !1, !0).then(_.spread(function(a, b) {
x.catalogItems = a, x.totalCount = x.catalogItems.length, t(), b && g.addNotification({
type: "error",
message: b
});
}));
}, x.groupChoicesBy = function(a) {
return i.isRecentlyViewed(a.metadata.uid) ? "Recently Viewed" : "Other Projects";
};
var A = function() {
var a = _.reject(x.unfilteredProjects, "metadata.deletionTimestamp"), c = _.sortBy(a, b("displayName"));
x.searchEnabled = !_.isEmpty(a), x.templateProjects = i.orderByMostRecentlyViewed(c), x.numTemplateProjects = _.size(x.templateProjects), 1 === x.numTemplateProjects && (x.templateProject = _.head(x.templateProjects), x.templateProjectChange());
};
}
angular.module("openshiftConsole").component("processTemplateDialog", {
controller: [ "$scope", "$filter", "$routeParams", "Catalog", "DataService", "KeywordService", "NotificationsService", "ProjectsService", "RecentlyViewedProjectsService", a ],
controllerAs: "$ctrl",
bindings: {
template: "<",
project: "<",
useProjectTemplate: "<",
onDialogClosed: "&"
},
templateUrl: "views/directives/process-template-dialog.html"
});
}(), function() {
function a(a, b, c) {
var d = this;
d.$onInit = function() {
d.loginBaseUrl = c.openshiftAPIBaseUrl(), d.currentStep = "Image", b.project || (d.showProjectName = !0), a.$on("no-projects-cannot-create", function() {
d.deployForm.$setValidity("required", !1), d.deployImageNewAppCreated = !1;
});
}, d.deployImage = function() {
a.$broadcast("newAppFromDeployImage");
}, a.$on("deployImageNewAppCreated", function(a, b) {
d.selectedProject = b.project, d.appName = b.appName, d.deployImageNewAppCreated = !0, d.currentStep = "Results";
}), d.close = function() {
var a = d.onDialogClosed();
return _.isFunction(a) && a(), d.wizardDone = !1, !0;
}, d.stepChanged = function(a) {
"results" === a.stepId ? (d.nextButtonTitle = "Close", d.wizardDone = !0) : d.nextButtonTitle = "Deploy";
}, d.nextCallback = function(a) {
return "image" === a.stepId ? (d.deployImage(), !1) : "results" !== a.stepId || (d.close(), !1);
};
}
angular.module("openshiftConsole").component("deployImageDialog", {
controller: [ "$scope", "$routeParams", "DataService", a ],
controllerAs: "$ctrl",
bindings: {
project: "<",
context: "<",
onDialogClosed: "&"
},
templateUrl: "views/directives/deploy-image-dialog.html"
});
}(), function() {
function a(a, b, c, d, e) {
function f() {
var a = _.get(h, "template.metadata.annotations.iconClass", "fa fa-clone");
return a.indexOf("icon-") !== -1 ? "font-icon " + a : a;
}
function g() {
var a = _.get(h, "template.metadata.annotations.iconClass", "fa fa-clone");
return j(a);
}
var h = this, i = d("annotation"), j = d("imageForIconClass");
h.$onInit = function() {
h.alerts = {}, h.loginBaseUrl = e.openshiftAPIBaseUrl(), c.project || (h.showProjectName = !0), a.$on("no-projects-cannot-create", function() {
h.importForm.$setValidity("required", !1);
});
}, h.importFile = function() {
a.$broadcast("importFileFromYAMLOrJSON");
}, h.instantiateTemplate = function() {
a.$broadcast("instantiateTemplate");
}, a.$on("fileImportedFromYAMLOrJSON", function(a, c) {
h.selectedProject = c.project, h.template = c.template, h.iconClass = f(), h.image = g(), h.vendor = i(c.template, "openshift.io/provider-display-name"), h.docUrl = i(h.template, "openshift.io/documentation-url"), h.supportUrl = i(h.template, "openshift.io/support-url"), h.actionLabel = "imported", c.isList ? (h.kind = null, h.name = "YAML / JSON") : c.resource && (h.kind = c.resource.kind, h.name = c.resource.metadata.name), b(function() {
h.currentStep = h.template ? "Template Configuration" : "Results";
}, 0);
}), a.$on("templateInstantiated", function(a, b) {
h.selectedProject = b.project, h.name = d("displayName")(h.template), h.actionLabel = null, h.kind = null, h.currentStep = "Results";
}), h.close = function() {
h.template = null;
var a = h.onDialogClosed();
return _.isFunction(a) && a(), h.wizardDone = !1, !0;
}, h.stepChanged = function(a) {
"results" === a.stepId ? (h.nextButtonTitle = "Close", h.wizardDone = !0) : h.nextButtonTitle = "Create";
}, h.currentStep = "YAML / JSON", h.nextCallback = function(a) {
return "file" === a.stepId ? (h.importFile(), !1) : "template" === a.stepId ? (h.instantiateTemplate(), !1) : "results" !== a.stepId || (h.close(), !1);
};
}
angular.module("openshiftConsole").component("fromFileDialog", {
controller: [ "$scope", "$timeout", "$routeParams", "$filter", "DataService", a ],
controllerAs: "$ctrl",
bindings: {
project: "<",
context: "<",
onDialogClosed: "&"
},
templateUrl: "views/directives/from-file-dialog.html"
});
}(), function() {
function a(a, b) {
function c(a) {
var b = [];
return angular.forEach(a, function(a) {
"completed" !== a.status && b.push(a);
}), b;
}
function d(a) {
var b = [];
return angular.forEach(a, function(a) {
a.hasErrors && b.push(a);
}), b;
}
var e = this;
e.showParamsTable = !1, e.actionLabel = e.actionLabel || "created";
var f = a.getTemplateData();
e.parameters = f.params, e.templateMessage = f.message, a.clearTemplateData();
var g = function(a) {
var b = _.get(e, "createdBuildConfig.spec.triggers", []);
return _.some(b, {
type: a
});
};
e.createdBuildConfigWithGitHubTrigger = function() {
return g("GitHub");
}, e.createdBuildConfigWithConfigChangeTrigger = function() {
return g("ConfigChange");
}, e.allTasksSuccessful = function(a) {
return !c(a).length && !d(a).length;
}, e.erroredTasks = d, e.pendingTasks = c, e.goToOverview = function() {
_.isFunction(e.onContinue) && e.onContinue(), b.toProjectOverview(e.projectName);
}, e.toggleParamsTable = function() {
e.showParamsTable = !e.showParamsTable;
};
}
angular.module("openshiftConsole").component("nextSteps", {
controller: [ "ProcessedTemplateService", "Navigate", a ],
bindings: {
project: "<",
projectName: "<",
loginBaseUrl: "<",
fromSampleRepo: "<",
createdBuildConfig: "<",
onContinue: "<",
showProjectName: "<",
kind: "<?",
name: "<",
actionLabel: "<?"
},
templateUrl: "views/directives/next-steps.html"
});
}(), angular.module("openshiftConsole").directive("imageNames", [ "$filter", "PodsService", function(a, b) {
return {
restrict: "E",
scope: {
podTemplate: "=",
pods: "="
},
templateUrl: "views/_image-names.html",
link: function(c) {
var d = a("imageSHA"), e = function() {
var a = _.get(c, "podTemplate.spec.containers[0]");
if (a) {
var e = d(a.image);
return e ? void (c.imageIDs = [ e ]) : void (c.imageIDs = b.getImageIDs(c.pods, a.name));
}
};
c.$watchGroup([ "podTemplate", "pods" ], e);
}
};
} ]), function() {
function a(a, b, c, d, e, f) {
var g = this;
g.serviceBindingsVersion = a.getPreferredVersion("servicebindings"), g.showParameterValues = !1;
var h = {
namespace: g.namespace
}, i = function() {
g.allowParametersReveal = b.canI("secrets", "get", g.namespace), g.parameterData = {}, g.opaqueParameterKeys = [];
var a = g.allowParametersReveal ? "" : "*****";
_.each(_.keys(_.get(g.bindParameterSchema, "properties")), function(b) {
g.parameterData[b] = a;
});
var f = _.get(g.binding, "status.externalProperties.parameters", {});
_.each(_.keys(f), function(a) {
"<redacted>" === f[a] ? g.parameterData[a] = "*****" : (g.parameterData[a] = f[a], g.opaqueParameterKeys.push(a));
}), g.allowParametersReveal && _.each(_.get(g.binding, "spec.parametersFrom"), function(a) {
c.get("secrets", _.get(a, "secretKeyRef.name"), h).then(function(b) {
try {
var c = JSON.parse(e.decodeSecretData(b.data)[a.secretKeyRef.key]);
_.extend(g.parameterData, c);
} catch (f) {
d.warn("Unable to load parameters from secret " + _.get(a, "secretKeyRef.name"), f);
}
});
});
}, j = function() {
var b = a.getPreferredVersion("clusterserviceplans");
c.get(b, _.get(g.serviceInstance, "spec.clusterServicePlanRef.name"), h).then(function(a) {
g.bindParameterFormDefinition = angular.copy(_.get(a, "spec.externalMetadata.schemas.service_binding.create.openshift_form_definition")), g.bindParameterSchema = _.get(a, "spec.serviceBindingCreateParameterSchema"), i();
});
}, k = function() {
if ("ServiceInstance" !== _.get(g.refApiObject, "kind")) {
var a = _.get(g.binding, "spec.instanceRef.name");
g.serviceInstance = _.get(g.serviceInstances, [ a ]);
} else g.serviceInstance = g.refApiObject;
var b = f.getServiceClassNameForInstance(g.serviceInstance);
g.serviceClass = _.get(g.serviceClasses, [ b ]);
};
this.$onChanges = function(a) {
(a.binding || a.serviceInstances || a.serviceClasses) && (k(), j());
}, g.toggleShowParameterValues = function() {
g.showParameterValues = !g.showParameterValues;
};
}
angular.module("openshiftConsole").component("serviceBinding", {
controller: [ "APIService", "AuthorizationService", "DataService", "Logger", "SecretsService", "ServiceInstancesService", a ],
controllerAs: "$ctrl",
bindings: {
namespace: "<",
binding: "<",
refApiObject: "<?",
serviceClasses: "<",
serviceInstances: "<",
isOverview: "<?"
},
templateUrl: "views/directives/_service-binding.html"
});
}(), function() {
function a(a, b) {
var c = this;
c.interestingPhases = [ "Pending", "Running", "Failed", "Error" ];
var d = function(a) {
var b = _.get(a, "status.phase");
return _.includes(c.interestingPhases, b);
};
c.$onChanges = _.debounce(function() {
a.$apply(function() {
var a = _.groupBy(c.builds, "status.phase");
if (c.countByPhase = _.mapValues(a, _.size), c.show = _.some(c.builds, d), !c.showRunningStage || 1 !== c.countByPhase.Running) return void (c.currentStage = null);
var e = _.head(a.Running);
c.currentStage = b.getCurrentStage(e);
});
}, 200);
}
angular.module("openshiftConsole").component("buildCounts", {
controller: [ "$scope", "BuildsService", a ],
controllerAs: "buildCounts",
bindings: {
builds: "<",
showRunningStage: "<",
label: "@"
},
templateUrl: "views/overview/_build-counts.html"
});
}(), function() {
function a(a, b, c, d) {
var e, f = this, g = !0, h = function(a) {
return a >= 1024;
};
f.metrics = [ {
label: "Memory",
convert: b.bytesToMiB,
formatUsage: function(a) {
return h(a) && (a /= 1024), c.formatUsage(a);
},
usageUnits: function(a) {
return h(a) ? "GiB" : "MiB";
},
datasets: [ "memory/usage" ],
type: "pod_container"
}, {
label: "CPU",
convert: b.millicoresToCores,
usageUnits: function() {
return "cores";
},
formatUsage: function(a) {
return a < .01 ? "< 0.01" : c.formatUsage(a);
},
datasets: [ "cpu/usage_rate" ],
type: "pod_container"
}, {
label: "Network",
units: "KiB/s",
convert: b.bytesToKiB,
formatUsage: function(a) {
return a < .01 ? "< 0.01" : c.formatUsage(a);
},
usageUnits: function() {
return "KiB/s";
},
datasets: [ "network/tx_rate", "network/rx_rate" ],
type: "pod"
} ];
var i = function() {
var a = _.find(f.pods, "metadata.namespace");
if (!a) return null;
var b = {
pods: f.pods,
namespace: a.metadata.namespace,
start: "-1mn",
bucketDuration: "1mn"
};
return b;
}, j = function(a) {
return null === a.value || void 0 === a.value;
}, k = function(a, b) {
var c = null, d = {};
_.each(a.datasets, function(e) {
_.each(b[e], function(b, e) {
var f = _.last(b);
if (!j(f)) {
d[e] = !0;
var g = a.convert(f.value);
c = (c || 0) + g;
}
});
}), null === c ? delete a.currentUsage : a.currentUsage = c / _.size(d);
}, l = function(a) {
_.each(f.metrics, function(b) {
k(b, a);
});
}, m = function() {
f.error = !0;
}, n = function() {
if (!f.error && !g) {
var a = i();
a && (e = Date.now(), d.getPodMetrics(a).then(l, m));
}
};
f.updateInView = function(a) {
g = !a, a && (!e || Date.now() > e + c.getDefaultUpdateInterval()) && n();
};
var o;
f.$onInit = function() {
o = a(n, c.getDefaultUpdateInterval(), !1), n();
}, f.$onDestroy = function() {
o && (a.cancel(o), o = null);
};
}
angular.module("openshiftConsole").component("metricsSummary", {
controller: [ "$interval", "ConversionService", "MetricsCharts", "MetricsService", a ],
controllerAs: "metricsSummary",
bindings: {
pods: "<",
containers: "<"
},
templateUrl: "views/overview/_metrics-summary.html"
});
}(), function() {
function a(a, b, c, d, e) {
var f, g, h, i = this, j = b("annotation"), k = i.numLines || 7, l = [];
i.lines = [];
var m = _.throttle(function() {
a.$evalAsync(function() {
i.lines = _.clone(l);
});
}, 200), n = 0, o = function(a) {
if (a) {
var b = ansi_up.escape_for_html(a), c = ansi_up.ansi_to_html(b), d = e.linkify(c, "_blank", !0);
n++, l.push({
markup: d,
id: n
}), l.length > k && (l = _.takeRight(l, k)), m();
}
}, p = function() {
h && (h.stop(), h = null);
}, q = function() {
var a = {
follow: !0,
tailLines: k
};
h = d.createStream(g, f, i.context, a), h.start(), h.onMessage(o), h.onClose(function() {
h = null;
});
};
i.$onInit = function() {
"ReplicationController" === i.apiObject.kind ? (g = "deploymentconfigs/log", f = j(i.apiObject, "deploymentConfig")) : (g = c.kindToResource(i.apiObject.kind) + "/log", f = i.apiObject.metadata.name), q();
}, i.$onDestroy = function() {
p();
};
}
angular.module("openshiftConsole").component("miniLog", {
controllerAs: "miniLog",
controller: [ "$scope", "$filter", "APIService", "DataService", "HTMLService", a ],
bindings: {
apiObject: "<",
numLines: "<",
context: "<"
},
templateUrl: "views/overview/_mini-log.html"
});
}(), function() {
function a(a) {
var b = this;
b.$onChanges = _.debounce(function() {
a.$apply(function() {
var a = _.groupBy(b.alerts, "type");
b.countByType = _.mapValues(a, _.size), b.byType = _.mapValues(a, function(a) {
return _.map(a, function(a) {
return _.escape(a.message);
}).join("<br>");
});
});
}, 200);
}
angular.module("openshiftConsole").component("notificationIcon", {
controller: [ "$scope", a ],
controllerAs: "notification",
bindings: {
alerts: "<"
},
templateUrl: "views/overview/_notification-icon.html"
});
}(), function() {
function a(a) {
var b, c = a("canI");
this.$onInit = function() {
b = c("builds/log", "get");
}, this.showLogs = function(a) {
if (this.hideLog) return !1;
if (!b) return !1;
if (!_.get(a, "status.startTimestamp")) return !1;
if ("Complete" !== _.get(a, "status.phase")) return !0;
var c = _.get(a, "status.completionTimestamp");
if (!c) return !1;
var d = moment().subtract(3, "m");
return moment(c).isAfter(d);
};
}
angular.module("openshiftConsole").component("overviewBuilds", {
controller: [ "$filter", a ],
controllerAs: "overviewBuilds",
bindings: {
buildConfigs: "<",
recentBuildsByBuildConfig: "<",
context: "<",
hideLog: "<"
},
templateUrl: "views/overview/_builds.html"
});
}(), function() {
function a(a, b, c, d, e, f, g, h, i, j, k) {
var l = this;
_.extend(l, g.ui);
var m = a("canI"), n = a("deploymentIsInProgress"), o = a("isBinaryBuild"), p = a("enableTechPreviewFeature");
l.serviceBindingsVersion = c.getPreferredVersion("servicebindings");
var q = function(a) {
var b = _.get(a, "spec.triggers");
_.isEmpty(b) || (l.imageChangeTriggers = _.filter(b, function(a) {
return "ImageChange" === a.type && _.get(a, "imageChangeParams.automatic");
}));
}, r = function(a) {
a && !l.current && "DeploymentConfig" !== a.kind && "Deployment" !== a.kind && (l.current = a);
}, s = function(a) {
l.rgv = c.objectToResourceGroupVersion(a), r(a), q(a);
};
l.$onChanges = function(a) {
a.apiObject && s(a.apiObject.currentValue);
};
var t = [], u = function(a) {
if (!l.state.hpaByResource) return null;
var b = _.get(a, "kind"), c = _.get(a, "metadata.name");
return _.get(l.state.hpaByResource, [ b, c ], t);
};
l.showBindings = e.SERVICE_CATALOG_ENABLED && p("pod_presets"), l.$doCheck = function() {
l.notifications = g.getNotifications(l.apiObject, l.state), l.hpa = u(l.apiObject), l.current && _.isEmpty(l.hpa) && (l.hpa = u(l.current));
var a = _.get(l, "apiObject.metadata.uid");
a && (l.services = _.get(l, [ "state", "servicesByObjectUID", a ]), l.buildConfigs = _.get(l, [ "state", "buildConfigsByObjectUID", a ]), l.bindings = _.get(l, [ "state", "bindingsByApplicationUID", a ]));
var b, c = _.get(l, "apiObject.kind");
"DeploymentConfig" === c && (b = _.get(l, "apiObject.metadata.name"), l.pipelines = _.get(l, [ "state", "pipelinesByDeploymentConfig", b ]), l.recentBuilds = _.get(l, [ "state", "recentBuildsByDeploymentConfig", b ]), l.recentPipelines = _.get(l, [ "state", "recentPipelinesByDeploymentConfig", b ]));
}, l.getPods = function(a) {
var b = _.get(a, "metadata.uid");
return _.get(l, [ "state", "podsByOwnerUID", b ]);
}, l.firstPod = function(a) {
var b = l.getPods(a);
return _.find(b);
}, l.isScalable = function() {
return !!_.isEmpty(l.hpa) && !l.isDeploymentInProgress();
}, l.isDeploymentInProgress = function() {
return !(!l.current || !l.previous) || n(l.current);
}, l.canIDoAny = function() {
var a = _.get(l, "apiObject.kind"), b = _.get(l, "apiObject.metadata.uid"), c = _.get(l.state.deleteableBindingsByApplicationUID, b);
switch (a) {
case "DeploymentConfig":
return !!m("deploymentconfigs/instantiate", "create") || (!!m("deploymentconfigs", "update") || (!(!l.current || !m("deploymentconfigs/log", "get")) || (!(!p("pod_presets") || _.isEmpty(l.state.bindableServiceInstances) || !m(l.serviceBindingsVersion, "create")) || (!(!p("pod_presets") || _.isEmpty(c) || !m(l.serviceBindingsVersion, "delete")) || (l.showStartPipelineAction() || l.showStartBuildAction())))));

case "Pod":
return !!m("pods/log", "get") || !!m("pods", "update");

default:
return !(!l.firstPod(l.current) || !m("pods/log", "get")) || (!!m(l.rgv, "update") || (!(!p("pod_presets") || _.isEmpty(l.state.bindableServiceInstances) || !m(l.serviceBindingsVersion, "create")) || !(!p("pod_presets") || _.isEmpty(c) || !m(l.serviceBindingsVersion, "delete"))));
}
}, l.showStartBuildAction = function() {
if (!_.isEmpty(l.pipelines)) return !1;
if (!m("buildconfigs/instantiate", "create")) return !1;
if (1 !== _.size(l.buildConfigs)) return !1;
var a = _.head(l.buildConfigs);
return !o(a);
}, l.showStartPipelineAction = function() {
return m("buildconfigs/instantiate", "create") && 1 === _.size(l.pipelines);
}, l.startBuild = d.startBuild, l.canDeploy = function() {
return !!l.apiObject && (!l.apiObject.metadata.deletionTimestamp && (!l.deploymentInProgress && !l.apiObject.spec.paused));
}, l.isPaused = function() {
return l.apiObject.spec.paused;
}, l.startDeployment = function() {
f.startLatestDeployment(l.apiObject, {
namespace: l.apiObject.metadata.namespace
});
}, l.cancelDeployment = function() {
var a = l.current;
if (a) {
var c, d = a.metadata.name, e = _.get(l, "apiObject.status.latestVersion");
c = 1 === e ? k.getString(j("This will attempt to stop the in-progress deployment. It may take some time to complete.")) : k.getString(j("This will attempt to stop the in-progress deployment and rollback to the last successful deployment. It may take some time to complete."));
var g = b.open({
animation: !0,
templateUrl: "views/modals/confirm.html",
controller: "ConfirmModalController",
resolve: {
modalConfig: function() {
return {
message: k.getString(j("Cancel deployment {{rcName}}?"), {
rcName: d
}),
details: c,
okButtonText: k.getString(j("Yes, cancel")),
okButtonClass: "btn-danger",
cancelButtonText: k.getString(j("No, don't cancel"))
};
}
}
});
g.result.then(function() {
return a.metadata.uid !== l.current.metadata.uid ? void i.addNotification({
type: "error",
message: "Deployment #" + e + " is no longer the latest."
}) : (a = l.current, n(a) ? void f.cancelRunningDeployment(a, {
namespace: a.metadata.namespace
}) : void i.addNotification({
type: "error",
message: "Deployment " + d + " is no longer in progress."
}));
});
}
}, l.urlForImageChangeTrigger = function(b) {
var c = a("stripTag")(_.get(b, "imageChangeParams.from.name")), d = _.get(l, "apiObject.metadata.namespace"), e = _.get(b, "imageChangeParams.from.namespace", d);
return h.resourceURL(c, "ImageStream", e);
}, l.navigateToPods = function() {
var a = l.getPods(l.current);
_.isEmpty(a) || h.toPodsForDeployment(l.current, a);
}, l.closeOverlayPanel = function() {
_.set(l, "overlay.panelVisible", !1);
}, l.showOverlayPanel = function(a, b) {
_.set(l, "overlay.panelVisible", !0), _.set(l, "overlay.panelName", a), _.set(l, "overlay.state", b);
};
}
angular.module("openshiftConsole").component("overviewListRow", {
controller: [ "$filter", "$uibModal", "APIService", "BuildsService", "CatalogService", "DeploymentsService", "ListRowUtils", "Navigate", "NotificationsService", "gettext", "gettextCatalog", a ],
controllerAs: "row",
bindings: {
apiObject: "<",
current: "<",
previous: "<",
state: "<",
hidePipelines: "<"
},
templateUrl: "views/overview/_list-row.html"
});
}(), function() {
function a(a, b, c, d, e, f) {
var g = this, h = a("isBindingFailed"), i = a("isBindingReady"), j = a("serviceInstanceFailedMessage"), k = a("truncate");
_.extend(g, e.ui);
var l = a("serviceInstanceDisplayName");
g.serviceBindingsVersion = b.getPreferredVersion("servicebindings"), g.serviceInstancesVersion = b.getPreferredVersion("serviceinstances");
var m = function() {
var a = f.getServiceClassNameForInstance(g.apiObject);
return _.get(g, [ "state", "serviceClasses", a ]);
}, n = function() {
var a = f.getServicePlanNameForInstance(g.apiObject);
return _.get(g, [ "state", "servicePlans", a ]);
}, o = function() {
_.get(g.apiObject, "metadata.deletionTimestamp") ? g.instanceStatus = "deleted" : h(g.apiObject) ? g.instanceStatus = "failed" : i(g.apiObject) ? g.instanceStatus = "ready" : g.instanceStatus = "pending";
};
g.$doCheck = function() {
o(), g.notifications = e.getNotifications(g.apiObject, g.state), g.serviceClass = m(), g.servicePlan = n(), g.displayName = l(g.apiObject, g.serviceClass), g.isBindable = d.isServiceBindable(g.apiObject, g.serviceClass, g.servicePlan);
}, g.$onChanges = function(a) {
a.bindings && (g.deleteableBindings = _.reject(g.bindings, "metadata.deletionTimestamp"));
}, g.getSecretForBinding = function(a) {
return a && _.get(g, [ "state", "secrets", a.spec.secretName ]);
}, g.actionsDropdownVisible = function() {
return !_.get(g.apiObject, "metadata.deletionTimestamp") && (!(!g.isBindable || !c.canI(g.serviceBindingsVersion, "create")) || (!(_.isEmpty(g.deleteableBindings) || !c.canI(g.serviceBindingsVersion, "delete")) || !!c.canI(g.serviceInstancesVersion, "delete")));
}, g.closeOverlayPanel = function() {
_.set(g, "overlay.panelVisible", !1);
}, g.showOverlayPanel = function(a, b) {
_.set(g, "overlay.panelVisible", !0), _.set(g, "overlay.panelName", a), _.set(g, "overlay.state", b);
}, g.getFailedTooltipText = function() {
var a = j(g.apiObject);
if (!a) return "";
var b = k(a, 128);
return a.length !== b.length && (b += "..."), b;
}, g.deprovision = function() {
f.deprovision(g.apiObject, g.deleteableBindings);
};
}
angular.module("openshiftConsole").component("serviceInstanceRow", {
controller: [ "$filter", "APIService", "AuthorizationService", "BindingService", "ListRowUtils", "ServiceInstancesService", a ],
controllerAs: "row",
bindings: {
apiObject: "<",
state: "<",
bindings: "<"
},
templateUrl: "views/overview/_service-instance-row.html"
});
}(), angular.module("openshiftConsole").component("overviewNetworking", {
controllerAs: "networking",
bindings: {
rowServices: "<",
allServices: "<",
routesByService: "<"
},
templateUrl: "views/overview/_networking.html"
}), angular.module("openshiftConsole").component("overviewPipelines", {
controllerAs: "overviewPipelines",
bindings: {
recentPipelines: "<"
},
templateUrl: "views/overview/_pipelines.html"
}), angular.module("openshiftConsole").component("overviewServiceBindings", {
controllerAs: "$ctrl",
bindings: {
sectionTitle: "@",
namespace: "<",
refApiObject: "<",
bindings: "<",
bindableServiceInstances: "<",
serviceClasses: "<",
serviceInstances: "<",
createBinding: "&"
},
templateUrl: "views/overview/_service-bindings.html"
}), angular.module("openshiftConsole").directive("istagSelect", [ "DataService", "ProjectsService", function(a, b) {
return {
<<<<<<< HEAD
require:"^form",
restrict:"E",
scope:{
istag:"=model",
selectDisabled:"=",
selectRequired:"=",
includeSharedNamespace:"=",
allowCustomTag:"="
},
templateUrl:"views/directives/istag-select.html",
controller:[ "$scope", function(b) {
b.isByNamespace = {}, b.isNamesByNamespace = {};
var c = window.DMOS_OPENSHIFT_PROJECTNAMES.split(","), d = _.get(b, "istag.namespace") && _.get(b, "istag.imageStream") && _.get(b, "istag.tagObject.tag"), e = function(a) {
_.each(a, function(a) {
_.get(a, "status.tags") || _.set(a, "status.tags", []);
});
}, f = function(c) {
return b.isByNamespace[c] = {}, b.isNamesByNamespace[c] = [], _.contains(b.namespaces, c) ? void a.list("imagestreams", {
namespace:c
}, function(a) {
var d = angular.copy(a.by("metadata.name"));
e(d), b.isByNamespace[c] = d, b.isNamesByNamespace[c] = _.keys(d).sort(), _.contains(b.isNamesByNamespace[c], b.istag.imageStream) || (b.isNamesByNamespace[c] = b.isNamesByNamespace[c].concat(b.istag.imageStream), b.isByNamespace[c][b.istag.imageStream] = {
status:{
tags:{}
}
}), _.find(b.isByNamespace[c][b.istag.imageStream].status.tags, {
tag:b.istag.tagObject.tag
}) || b.isByNamespace[c][b.istag.imageStream].status.tags.push({
tag:b.istag.tagObject.tag
=======
require: "^form",
restrict: "E",
scope: {
istag: "=model",
selectDisabled: "=",
selectRequired: "=",
includeSharedNamespace: "=",
allowCustomTag: "="
},
templateUrl: "views/directives/istag-select.html",
<<<<<<< HEAD
controller: [ "$scope", function(n) {
n.isByNamespace = {}, n.isNamesByNamespace = {};
var a = _.get(n, "istag.namespace") && _.get(n, "istag.imageStream") && _.get(n, "istag.tagObject.tag"), r = function(e) {
_.each(e, function(e) {
_.get(e, "status.tags") || _.set(e, "status.tags", []);
>>>>>>> Bump grunt-contrib-uglify to 3.0.1
});
}, o = function(t) {
if (n.isByNamespace[t] = {}, n.isNamesByNamespace[t] = [], !_.includes(n.namespaces, t)) return n.namespaces.push(t), n.isNamesByNamespace[t] = n.isNamesByNamespace[t].concat(n.istag.imageStream), void (n.isByNamespace[t][n.istag.imageStream] = {
=======
controller: [ "$scope", function(c) {
c.isByNamespace = {}, c.isNamesByNamespace = {};
var d = _.get(c, "istag.namespace") && _.get(c, "istag.imageStream") && _.get(c, "istag.tagObject.tag"), e = function(a) {
_.each(a, function(a) {
_.get(a, "status.tags") || _.set(a, "status.tags", []);
});
}, f = function(b) {
return c.isByNamespace[b] = {}, c.isNamesByNamespace[b] = [], _.includes(c.namespaces, b) ? void a.list("imagestreams", {
namespace: b
}, function(a) {
var d = angular.copy(a.by("metadata.name"));
e(d), c.isByNamespace[b] = d, c.isNamesByNamespace[b] = _.keys(d).sort(), _.includes(c.isNamesByNamespace[b], c.istag.imageStream) || (c.isNamesByNamespace[b] = c.isNamesByNamespace[b].concat(c.istag.imageStream), c.isByNamespace[b][c.istag.imageStream] = {
>>>>>>> rebase from poc 3.6
status: {
tags: {}
}
<<<<<<< HEAD
<<<<<<< HEAD
}));
};
a.list("projects", {}, function(g) {
b.namespaces = _.keys(g.by("metadata.name")), b.includeSharedNamespace && (b.namespaces = _.uniq([ "openshift" ].concat(b.namespaces))), b.namespaces = b.namespaces.filter(function(a) {
return c.indexOf(a) < 0;
}), b.namespaces = b.namespaces.sort(), b.$watch("istag.namespace", function(c) {
if (c && !b.isByNamespace[c]) return d ? (f(c), void (d = !1)) :void a.list("imagestreams", {
namespace:c
}, function(a) {
var d = angular.copy(a.by("metadata.name"));
e(d), b.isByNamespace[c] = d, b.isNamesByNamespace[c] = _.keys(d).sort();
=======
>>>>>>> Bump grunt-contrib-uglify to 3.0.1
=======
}), _.find(c.isByNamespace[b][c.istag.imageStream].status.tags, {
tag: c.istag.tagObject.tag
}) || c.isByNamespace[b][c.istag.imageStream].status.tags.push({
tag: c.istag.tagObject.tag
>>>>>>> rebase from poc 3.6
});
}) : (c.namespaces.push(b), c.isNamesByNamespace[b] = c.isNamesByNamespace[b].concat(c.istag.imageStream), void (c.isByNamespace[b][c.istag.imageStream] = {
status: {
tags: [ {
tag: c.istag.tagObject.tag
} ]
}
}));
};
b.list().then(function(b) {
c.namespaces = _.keys(b.by("metadata.name")), c.includeSharedNamespace && (c.namespaces = _.uniq([ "openshift" ].concat(c.namespaces))), c.namespaces = c.namespaces.sort(), c.$watch("istag.namespace", function(b) {
if (b && !c.isByNamespace[b]) return d ? (f(b), void (d = !1)) : void a.list("imagestreams", {
namespace: b
}, function(a) {
var d = angular.copy(a.by("metadata.name"));
e(d), c.isByNamespace[b] = d, c.isNamesByNamespace[b] = _.keys(d).sort();
});
});
}), c.getTags = function(a) {
c.allowCustomTag && a && !_.find(c.isByNamespace[c.istag.namespace][c.istag.imageStream].status.tags, {
tag: a
}) && (_.remove(c.isByNamespace[c.istag.namespace][c.istag.imageStream].status.tags, function(a) {
return !a.items;
}), c.isByNamespace[c.istag.namespace][c.istag.imageStream].status.tags.unshift({
tag: a
}));
}, c.groupTags = function(a) {
return c.allowCustomTag ? a.items ? "Current Tags" : "New Tag" : "";
};
} ]
};
} ]), angular.module("openshiftConsole").directive("deployImage", [ "$filter", "$q", "$window", "$uibModal", "ApplicationGenerator", "DataService", "ImagesService", "Navigate", "NotificationsService", "ProjectsService", "QuotaService", "TaskList", "SecretsService", "keyValueEditorUtils", "gettext", "gettextCatalog", function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
return {
restrict: "E",
scope: {
project: "=",
isDialog: "="
},
templateUrl: "views/directives/deploy-image.html",
controller: [ "$scope", function(a) {
a.forms = {}, a.noProjectsCantCreate = !1, a.input = {
selectedProject: a.project
}, a.$watch("input.selectedProject.metadata.name", function() {
a.projectNameTaken = !1;
});
} ],
link: function(c) {
function m() {
var a = n.mapEntries(n.compactEntries(c.labels));
return g.getResources({
name: c.app.name,
image: c["import"].name,
namespace: c["import"].namespace,
tag: c["import"].tag || "latest",
ports: c.ports,
volumes: c.volumes,
env: n.compactEntries(c.env),
labels: a
});
}
c.mode = "istag", c.istag = {}, c.app = {}, c.env = [], c.labels = [ {
name: "app",
value: ""
} ], c.$on("no-projects-cannot-create", function() {
c.noProjectsCantCreate = !0;
});
var q = a("orderByDisplayName"), r = a("getErrorDetails"), s = {}, t = function() {
i.hideNotification("deploy-image-list-config-maps-error"), i.hideNotification("deploy-image-list-secrets-error"), _.each(s, function(a) {
!a.id || "error" !== a.type && "warning" !== a.type || i.hideNotification(a.id);
});
};
c.valueFromNamespace = {};
var u = function() {
if (_.has(c.input.selectedProject, "metadata.uid")) return b.when(c.input.selectedProject);
var d = c.input.selectedProject.metadata.name, e = c.input.selectedProject.metadata.annotations["new-display-name"], f = a("description")(c.input.selectedProject);
return j.create(d, e, f);
}, v = a("stripTag"), w = a("stripSHA"), x = a("humanizeKind"), y = function(a) {
return a.length > 24 ? a.substring(0, 24) : a;
}, z = function() {
var a = _.last(c["import"].name.split("/"));
return a = w(a), a = v(a), a = y(a);
};
c.findImage = function() {
c.loading = !0, g.findImage(c.imageName, {
namespace: c.input.selectedProject.metadata.name
}).then(function(a) {
if (c["import"] = a, c.loading = !1, "Success" !== _.get(a, "result.status")) return void (c["import"].error = _.get(a, "result.message", "An error occurred finding the image."));
c.forms.imageSelection.imageName.$setValidity("imageLoaded", !0);
var b = c["import"].image;
b && (c.app.name = z(), c.runsAsRoot = g.runsAsRoot(b), c.ports = e.parsePorts(b), c.volumes = g.getVolumes(b), c.createImageStream = !0);
}, function(b) {
c["import"].error = a("getErrorDetails")(b) || "An error occurred finding the image.", c.loading = !1;
});
}, c.$watch("app.name", function(a, b) {
c.nameTaken = !1;
var d = _.find(c.labels, {
name: "app"
});
!d || d.value && d.value !== b || (d.value = a);
}), c.$watch("mode", function(a, b) {
a !== b && (delete c["import"], c.istag = {}, "dockerImage" === a ? c.forms.imageSelection.imageName.$setValidity("imageLoaded", !1) : c.forms.imageSelection.imageName.$setValidity("imageLoaded", !0));
}), c.$watch("imageName", function() {
"dockerImage" === c.mode && c.forms.imageSelection.imageName.$setValidity("imageLoaded", !1);
}), c.$watch("istag", function(b, d) {
if (b !== d) {
if (!b.namespace || !b.imageStream || !b.tagObject) return void delete c["import"];
var h, i = _.get(b, "tagObject.items[0].image");
c.app.name = y(b.imageStream), c["import"] = {
name: b.imageStream,
tag: b.tagObject.tag,
namespace: b.namespace
}, i && (h = b.imageStream + "@" + i, c.loading = !0, f.get("imagestreamimages", h, {
namespace: b.namespace
}).then(function(a) {
c.loading = !1, c["import"].image = a.image, c.ports = e.parsePorts(a.image), c.volumes = g.getVolumes(a.image), c.runsAsRoot = !1;
}, function(b) {
c["import"].error = a("getErrorDetails")(b) || "An error occurred.", c.loading = !1;
}));
}
<<<<<<< HEAD
}, !0);
var C, D = a("displayName"), E = function() {
var a = {
started:p.getString(o("Deploying image {{name}} to project {{project}}"), {
name:c.app.name,
project:D(c.project)
}),
success:p.getString(o("Deployed image {{name}} to project {{project}}"), {
name:c.app.name,
project:D(c.project)
}),
failure:p.getString(o("Failed to deploy image {{name}} to project {{project}}"), {
name:c.app.name,
project:D(c.project)
})
};
l.clear(), l.add(a, {}, c.project.metadata.name, function() {
var a = b.defer();
return f.batch(C, c.context).then(function(b) {
var d, e = !_.isEmpty(b.failure);
e ? (d = _.map(b.failure, function(a) {
return {
type:"error",
message:p.getString(o('Cannot create {{kind}} "{{name}}".') + " ", {
kind:z(a.object.kind).toLowerCase(),
name:a.object.metadata.name
}),
details:a.data.message
=======
}), t.getTags = function(e) {
t.allowCustomTag && e && !_.find(t.isByNamespace[t.istag.namespace][t.istag.imageStream].status.tags, {
=======
var a = angular.copy(e.by("metadata.name"));
r(a), n.isByNamespace[t] = a, n.isNamesByNamespace[t] = _.keys(a).sort();
});
});
}), n.getTags = function(e) {
n.allowCustomTag && e && !_.find(n.isByNamespace[n.istag.namespace][n.istag.imageStream].status.tags, {
>>>>>>> Bug 1481127 - More robust handling of large project lists
tag: e
}) && (_.remove(n.isByNamespace[n.istag.namespace][n.istag.imageStream].status.tags, function(e) {
return !e.items;
}), n.isByNamespace[n.istag.namespace][n.istag.imageStream].status.tags.unshift({
tag: e
}));
}, n.groupTags = function(e) {
return n.allowCustomTag ? e.items ? "Current Tags" : "New Tag" : "";
};
} ]
>>>>>>> Bump grunt-contrib-uglify to 3.0.1
};
} ]), angular.module("openshiftConsole").directive("deployImage", [ "$filter", "$q", "$window", "$uibModal", "ApplicationGenerator", "DataService", "ImagesService", "Navigate", "NotificationsService", "ProjectsService", "QuotaService", "TaskList", "SecretsService", "keyValueEditorUtils", function(e, t, n, a, r, o, i, s, c, l, u, d, m, p) {
return {
<<<<<<< a8a6721a66ecf6e0309b8cb7e496a9db1b4eccf6
type:"success",
message:p.getString(o('Created {{kind}} "{{name}}" successfully.') + " ", {
kind:z(a.kind).toLowerCase(),
name:a.metadata.name
})
};
}))) :d = [ {
type:"success",
message:p.getString(o("All resources for image {{name}} were created successfully."), {
name:c.app.name
})
} ], a.resolve({
alerts:d,
hasErrors:e
});
}), a.promise;
}), c.isDialog ? c.$emit("deployImageNewAppCreated", {
project:c.project,
appName:c.app.name
}) :h.toNextSteps(c.app.name, c.project.metadata.name);
}, F = function(a) {
var b = d.open({
animation:!0,
templateUrl:"views/modals/confirm.html",
controller:"ConfirmModalController",
resolve:{
modalConfig:function() {
=======
restrict: "E",
scope: {
project: "=",
isDialog: "="
},
templateUrl: "views/directives/deploy-image.html",
controller: [ "$scope", function(e) {
e.forms = {}, e.noProjectsCantCreate = !1, e.input = {
selectedProject: e.project
}, e.$watch("input.selectedProject.metadata.name", function() {
e.projectNameTaken = !1;
});
} ],
link: function(n) {
function m() {
var e = p.mapEntries(p.compactEntries(n.labels));
return i.getResources({
name: n.app.name,
image: n.import.name,
namespace: n.import.namespace,
tag: n.import.tag || "latest",
ports: n.ports,
volumes: n.volumes,
env: p.compactEntries(n.env),
labels: e
});
}
n.mode = "istag", n.istag = {}, n.app = {}, n.env = [], n.labels = [ {
name: "app",
value: ""
} ], n.$on("no-projects-cannot-create", function() {
n.noProjectsCantCreate = !0;
});
var f = e("orderByDisplayName"), g = e("getErrorDetails"), v = {}, h = function() {
c.hideNotification("deploy-image-list-config-maps-error"), c.hideNotification("deploy-image-list-secrets-error"), _.each(v, function(e) {
!e.id || "error" !== e.type && "warning" !== e.type || c.hideNotification(e.id);
});
};
n.valueFromNamespace = {};
var y = function() {
if (_.has(n.input.selectedProject, "metadata.uid")) return t.when(n.input.selectedProject);
var a = n.input.selectedProject.metadata.name, r = n.input.selectedProject.metadata.annotations["new-display-name"], o = e("description")(n.input.selectedProject);
return l.create(a, r, o);
}, b = e("stripTag"), S = e("stripSHA"), C = e("humanizeKind"), w = function(e) {
return e.length > 24 ? e.substring(0, 24) : e;
}, k = function() {
var e = _.last(n.import.name.split("/"));
return e = S(e), e = b(e), e = w(e);
};
n.findImage = function() {
n.loading = !0, i.findImage(n.imageName, {
namespace: n.input.selectedProject.metadata.name
}).then(function(e) {
if (n.import = e, n.loading = !1, "Success" === _.get(e, "result.status")) {
n.forms.imageSelection.imageName.$setValidity("imageLoaded", !0);
var t = n.import.image;
t && (n.app.name = k(), n.runsAsRoot = i.runsAsRoot(t), n.ports = r.parsePorts(t), n.volumes = i.getVolumes(t), n.createImageStream = !0);
} else n.import.error = _.get(e, "result.message", "An error occurred finding the image.");
}, function(t) {
n.import.error = e("getErrorDetails")(t) || "An error occurred finding the image.", n.loading = !1;
});
}, n.$watch("app.name", function(e, t) {
n.nameTaken = !1;
var a = _.find(n.labels, {
name: "app"
});
!a || a.value && a.value !== t || (a.value = e);
}), n.$watch("mode", function(e, t) {
e !== t && (delete n.import, n.istag = {}, "dockerImage" === e ? n.forms.imageSelection.imageName.$setValidity("imageLoaded", !1) : n.forms.imageSelection.imageName.$setValidity("imageLoaded", !0));
}), n.$watch("imageName", function() {
"dockerImage" === n.mode && n.forms.imageSelection.imageName.$setValidity("imageLoaded", !1);
}), n.$watch("istag", function(t, a) {
if (t !== a) if (t.namespace && t.imageStream && t.tagObject) {
var s, c = _.get(t, "tagObject.items[0].image");
n.app.name = w(t.imageStream), n.import = {
name: t.imageStream,
tag: t.tagObject.tag,
namespace: t.namespace
}, c && (s = t.imageStream + "@" + c, n.loading = !0, o.get("imagestreamimages", s, {
namespace: t.namespace
}).then(function(e) {
n.loading = !1, n.import.image = e.image, n.ports = r.parsePorts(e.image), n.volumes = i.getVolumes(e.image), n.runsAsRoot = !1;
}, function(t) {
n.import.error = e("getErrorDetails")(t) || "An error occurred.", n.loading = !1;
}));
} else delete n.import;
}, !0), n.$watch("input.selectedProject", function(e) {
if (n.env = _.reject(n.env, "valueFrom"), _.get(e, "metadata.uid")) {
if (!n.valueFromNamespace[e.metadata.name]) {
var t = [], a = [];
o.list("configmaps", {
namespace: n.input.selectedProject.metadata.name
=======
}, !0), c.$watch("input.selectedProject", function(a) {
if (c.env = _.reject(c.env, "valueFrom"), !_.get(a, "metadata.uid")) return void (c.mode = "istag");
if (!c.valueFromNamespace[a.metadata.name]) {
var b = [], d = [];
f.list("configmaps", {
namespace: c.input.selectedProject.metadata.name
>>>>>>> rebase from poc 3.6
}, null, {
errorNotification: !1
}).then(function(e) {
b = q(e.by("metadata.name")), c.valueFromNamespace[a.metadata.name] = b.concat(d);
}, function(a) {
403 !== a.status && i.addNotification({
id: "deploy-image-list-config-maps-error",
type: "error",
message: "Could not load config maps.",
details: r(a)
});
}), f.list("secrets", {
namespace: c.input.selectedProject.metadata.name
}, null, {
errorNotification: !1
}).then(function(e) {
d = q(e.by("metadata.name")), c.valueFromNamespace[a.metadata.name] = d.concat(b);
}, function(a) {
403 !== a.status && i.addNotification({
id: "deploy-image-list-secrets-error",
type: "error",
message: "Could not load secrets.",
details: r(a)
});
});
}
});
var A, B = a("displayName"), C = function() {
var a = {
started: p.getString(o("Deploying image " + c.app.name + " to project " + B(c.input.selectedProject))),
success: p.getString(o("Deployed image " + c.app.name + " to project " + B(c.input.selectedProject))),
failure: p.getString(o("Failed to deploy image " + c.app.name + " to project " + B(c.input.selectedProject)))
};
l.clear(), l.add(a, {}, c.input.selectedProject.metadata.name, function() {
var a = b.defer();
return f.batch(A, {
namespace: c.input.selectedProject.metadata.name
}).then(function(b) {
var d, e = !_.isEmpty(b.failure);
e ? (d = _.map(b.failure, function(a) {
return {
type: "error",
message: "Cannot create " + x(a.object.kind).toLowerCase() + ' "' + a.object.metadata.name + '". ',
details: a.data.message
};
}), d = d.concat(_.map(b.success, function(a) {
return {
type: "success",
message: "Created " + x(a.kind).toLowerCase() + ' "' + a.metadata.name + '" successfully. '
};
}))) : d = [ {
type: "success",
message: "All resources for image " + c.app.name + " were created successfully."
} ], a.resolve({
alerts: d,
hasErrors: e
});
}), a.promise;
}), c.isDialog ? c.$emit("deployImageNewAppCreated", {
project: c.input.selectedProject,
appName: c.app.name
}) : h.toNextSteps(c.app.name, c.input.selectedProject.metadata.name);
}, D = function(a) {
var b = d.open({
animation: !0,
templateUrl: "views/modals/confirm.html",
controller: "ConfirmModalController",
resolve: {
modalConfig: function() {
return {
alerts: a,
message: "Problems were detected while checking your application configuration.",
okButtonText: "Create Anyway",
okButtonClass: "btn-danger",
cancelButtonText: "Cancel"
};
}
}
});
b.result.then(C);
}, E = function(a) {
s = a.quotaAlerts || [];
var b = _.filter(s, {
type: "error"
});
c.nameTaken || b.length ? (c.disableInputs = !1, _.each(s, function(a) {
a.id = _.uniqueId("deploy-image-alert-"), i.addNotification(a);
})) : s.length ? (D(s), c.disableInputs = !1) : C();
};
c.create = function() {
c.disableInputs = !0, t(), u().then(function(a) {
c.input.selectedProject = a, A = m();
var b = e.ifResourcesDontExist(A, c.input.selectedProject.metadata.name), d = k.getLatestQuotaAlerts(A, {
namespace: c.input.selectedProject.metadata.name
}), f = function(a) {
return c.nameTaken = a.nameTaken, d;
};
b.then(f, f).then(E, E);
}, function(a) {
c.disableInputs = !1, "AlreadyExists" === a.data.reason ? c.projectNameTaken = !0 : i.addNotification({
id: "deploy-image-create-project-error",
type: "error",
message: "An error occurred creating project.",
details: r(a)
});
});
}, c.$on("newAppFromDeployImage", c.create), c.$on("$destroy", t);
}
};
} ]), angular.module("openshiftConsole").directive("selector", function() {
return {
restrict: "E",
scope: {
selector: "="
},
templateUrl: "views/directives/selector.html"
};
}), angular.module("openshiftConsole").directive("selectContainers", function() {
return {
restrict: "E",
scope: {
containers: "=ngModel",
template: "=podTemplate",
required: "=ngRequired",
helpText: "@?"
},
templateUrl: "views/directives/select-containers.html",
controller: [ "$scope", function(a) {
a.containers = a.containers || {}, a.$watch("containers", function(b) {
a.containerSelected = _.some(b, function(a) {
return a;
});
}, !0);
} ]
};
}), angular.module("openshiftConsole").directive("buildHooks", function() {
return {
restrict: "E",
templateUrl: "views/directives/build-hooks.html",
scope: {
build: "="
}
};
}), angular.module("openshiftConsole").directive("pauseRolloutsCheckbox", [ "APIService", function(a) {
return {
restrict: "E",
scope: {
deployment: "=",
disabled: "=ngDisabled",
alwaysVisible: "="
},
templateUrl: "views/directives/pause-rollouts-checkbox.html",
link: function(b) {
var c = function() {
if (!b.deployment) return !1;
var c = a.objectToResourceGroupVersion(b.deployment);
return "deploymentconfigs" === c.resource && !c.group;
};
b.$watch("deployment.spec.triggers", function(a) {
b.missingConfigChangeTrigger = c() && !_.some(a, {
type: "ConfigChange"
});
}, !0);
}
};
} ]), function() {
angular.module("openshiftConsole").directive("keyValueEditor", [ "$routeParams", "$timeout", "$filter", "gettextCatalog", "keyValueEditorConfig", "keyValueEditorUtils", function(a, b, c, d, e, f) {
var g = c("humanizeKind"), h = c("canI"), i = 1e3;
return {
restrict: "AE",
scope: {
keyMinlength: "@",
keyMaxlength: "@",
valueMinlength: "@",
valueMaxlength: "@",
entries: "=",
keyPlaceholder: "@",
valuePlaceholder: "@",
keyValidator: "@",
keyValidatorRegex: "=",
valueValidator: "@",
valueValidatorRegex: "=",
keyValidatorError: "@",
keyValidatorErrorTooltip: "@",
keyValidatorErrorTooltipIcon: "@",
valueValidatorError: "@",
valueValidatorErrorTooltip: "@",
valueValidatorErrorTooltipIcon: "@",
valueIconTooltip: "@",
valueFromSelectorOptions: "=",
cannotAdd: "=?",
cannotSort: "=?",
cannotDelete: "=?",
isReadonly: "=?",
isReadonlyValue: "=?",
isReadonlyKeys: "=?",
addRowLink: "@",
addRowWithSelectorsLink: "@",
showHeader: "=?",
allowEmptyKeys: "=?",
keyRequiredError: "@"
},
templateUrl: "views/directives/key-value-editor.html",
link: function(a, c, f) {
var h;
a.validation = {
key: a.keyValidator,
val: a.valueValidator
}, f.keyValidatorRegex && (a.validation.key = a.keyValidatorRegex), f.valueValidatorRegex && (a.validation.val = a.valueValidatorRegex), "grabFocus" in f && (a.grabFocus = !0, b(function() {
a.grabFocus = void 0;
})), "cannotAdd" in f && (a.cannotAdd = !0), "cannotDelete" in f && (a.cannotDeleteAny = !0), "isReadonly" in f && (a.isReadonlyAny = !0), "isReadonlyKeys" in f && (h = a.$watch("entries", function(b) {
b && (_.each(a.entries, function(a) {
a.isReadonlyKey = !0;
}), h());
})), "cannotSort" in f && (a.cannotSort = !0), "showHeader" in f && (a.showHeader = !0), "allowEmptyKeys" in f && (a.allowEmptyKeys = !0), a.groupByKind = function(a) {
return d.getString(g(a.kind));
}, a.valueFromObjectSelected = function(a, b) {
"ConfigMap" === b.kind ? (a.valueFrom.configMapKeyRef = {
name: b.metadata.name
}, delete a.valueFrom.secretKeyRef) : "Secret" === b.kind && (a.valueFrom.secretKeyRef = {
name: b.metadata.name
}, delete a.valueFrom.configMapKeyRef), delete a.valueFrom.key;
}, a.valueFromKeySelected = function(a, b) {
return a.valueFrom.configMapKeyRef ? void (a.valueFrom.configMapKeyRef.key = b) : a.valueFrom.secretKeyRef ? void (a.valueFrom.secretKeyRef.key = b) : void 0;
}, angular.extend(a, {
keyMinlength: e.keyMinlength || f.keyMinlength,
keyMaxlength: e.keyMaxlength || f.keyMaxlength,
valueMinlength: e.valueMinlength || f.valueMinlength,
valueMaxlength: e.valueMaxlength || f.valueMaxlength,
keyValidator: e.keyValidator || f.keyValidator,
valueValidator: e.valueValidator || f.valueValidator,
keyValidatorError: e.keyValidatorError || f.keyValidatorError,
valueValidatorError: e.valueValidatorError || f.valueValidatorError,
keyRequiredError: e.keyRequiredError || f.keyRequiredError,
keyValidatorErrorTooltip: e.keyValidatorErrorTooltip || f.keyValidatorErrorTooltip,
keyValidatorErrorTooltipIcon: e.keyValidatorErrorTooltipIcon || f.keyValidatorErrorTooltipIcon,
valueValidatorErrorTooltip: e.valueValidatorErrorTooltip || f.valueValidatorErrorTooltip,
valueValidatorErrorTooltipIcon: e.valueValidatorErrorTooltipIcon || f.valueValidatorErrorTooltipIcon,
keyPlaceholder: e.keyPlaceholder || f.keyPlaceholder,
valuePlaceholder: e.valuePlaceholder || f.valuePlaceholder
});
},
controller: [ "$scope", function(b) {
var c = [], d = [], e = i++, g = h("secrets", "get"), j = h("configmaps", "get");
angular.extend(b, {
namespace: a.project,
unique: e,
forms: {},
placeholder: f.newEntry(),
setFocusKeyClass: "key-value-editor-set-focus-key-" + e,
setFocusValClass: "key-value-editor-set-focus-value-" + e,
uniqueForKey: f.uniqueForKey,
uniqueForValue: f.uniqueForValue,
dragControlListeners: {
accept: function(a, b) {
return a.itemScope.sortableScope.$id === b.$id;
},
orderChanged: function() {
b.forms.keyValueEditor.$setDirty();
}
},
deleteEntry: function(a, c) {
b.entries.splice(a, c), !b.entries.length && b.addRowLink && f.addEntry(b.entries), b.forms.keyValueEditor.$setDirty();
},
isReadonlySome: function(a) {
return _.includes(c, a);
},
cannotDeleteSome: function(a) {
return _.includes(d, a);
},
onAddRow: function() {
f.addEntry(b.entries), f.setFocusOn("." + b.setFocusKeyClass);
},
onAddRowWithSelectors: function() {
f.addEntryWithSelectors(b.entries), f.setFocusOn("." + b.setFocusKeyClass);
},
isValueFromReadonly: function(a) {
return b.isReadonlyAny || a.isReadonlyValue || a.refType && !a.selectedValueFrom || _.isEmpty(b.valueFromSelectorOptions);
}
}), b.$watch("cannotDelete", function(a) {
angular.isArray(a) && (b.cannotDeleteAny = !1, d = a);
}), b.$watch("isReadonly", function(a) {
angular.isArray(a) && (b.isReadonlyAny = !1, c = a);
}), b.$watch("addRowLink", function(a) {
b.addRowLink = a || "Add row", b.entries && !b.entries.length && f.addEntry(b.entries);
}), b.$watch("entries", function(a) {
a && !a.length && f.addEntry(b.entries), _.each(b.entries, function(a) {
f.altTextForValueFrom(a, b.namespace), f.setEntryPerms(a, g, j);
}), f.findReferenceValueForEntries(a, b.valueFromSelectorOptions);
}), b.$watch("valueFromSelectorOptions", function() {
f.findReferenceValueForEntries(b.entries, b.valueFromSelectorOptions);
});
} ]
};
} ]);
}(), angular.module("openshiftConsole").directive("confirmOnExit", [ "Logger", "gettext", "gettextCatalog", function(a, b, c) {
return {
scope: {
dirty: "=",
message: "="
},
link: function(d) {
if (!_.get(window, "OPENSHIFT_CONSTANTS.DISABLE_CONFIRM_ON_EXIT") && !_.get(window, "OPENSHIFT_CONSTANTS.CONFIRM_DIALOG_BLOCKED")) {
var e = function() {
return d.message || c.getString(b("You have unsaved changes. Leave this page anyway?"));
}, f = function() {
if (d.dirty) return e();
};
$(window).on("beforeunload", f);
var g = d.$on("$routeChangeStart", function(b) {
if (d.dirty) {
var c = new Date().getTime(), f = confirm(e());
if (!f) {
var g = new Date().getTime();
g - c < 50 ? (_.set(window, "OPENSHIFT_CONSTANTS.CONFIRM_DIALOG_BLOCKED", !0), a.warn("Confirm on exit prompt appears to have been blocked by the browser.")) : b.preventDefault();
}
}
});
d.$on("$destroy", function() {
$(window).off("beforeunload", f), g && g();
});
}
}
};
} ]), function() {
function a(a) {
var b, c = this, d = function(a) {
return jsyaml.safeLoad(c.model, {
json: !a
});
}, e = function() {
b.getSession().clearAnnotations(), a.$evalAsync(function() {
c.annotations = {};
});
}, f = function(d, e) {
var f = b.getSession(), g = f.getLength(), h = _.get(d, "mark.line", 0), i = _.get(d, "mark.column", 0), j = d.message || "Could not parse content.";
h >= g && (h = g - 1);
var k = {
row: h,
column: i,
text: j,
type: e
};
f.setAnnotations([ k ]), a.$evalAsync(function() {
c.annotations = {}, c.annotations[e] = [ k ];
});
}, g = function(b) {
a.$evalAsync(function() {
c.form.$setValidity("yamlValid", b);
});
}, h = function(a, b) {
var h;
try {
h = d(!1), g(!0), a !== b && (c.resource = h);
try {
d(!0), e();
} catch (i) {
f(i, "warning");
}
} catch (i) {
f(i, "error"), g(!1);
}
};
a.$watch(function() {
return c.fileUpload;
}, function(a, b) {
a !== b && (c.model = a);
}), c.$onInit = function() {
c.resource && (c.model = jsyaml.safeDump(c.resource, {
sortKeys: !0
}));
}, c.aceLoaded = function(a) {
b = a;
var c = a.getSession();
c.setOption("tabSize", 2), c.setOption("useSoftTabs", !0), a.setDragDelay = 0;
}, a.$watch(function() {
return c.model;
}, h), c.gotoLine = function(a) {
b.gotoLine(a);
};
}
angular.module("openshiftConsole").component("uiAceYaml", {
controller: [ "$scope", a ],
controllerAs: "$ctrl",
bindings: {
resource: "=",
ngRequired: "<?",
showFileInput: "<?"
},
templateUrl: "views/directives/ui-ace-yaml.html"
});
}(), angular.module("openshiftConsole").directive("affix", [ "$window", function(a) {
return {
restrict: "AE",
scope: {
offsetTop: "@",
offsetBottom: "@"
},
link: function(a, b, c, d) {
b.affix({
offset: {
top: c.offsetTop,
bottom: c.offsetBottom
}
});
}
};
} ]), function() {
function a(a, b, c, d, e) {
var f, g, h, i, j = this, k = !1, l = [], m = [], n = !1, o = a("canI"), p = a("getErrorDetails"), q = a("humanizeKind"), r = a("orderByDisplayName"), s = function(a, b) {
if (!k) {
if (!j.form || j.form.$pristine || !j.updatedObject) return void (j.updatedObject = d.copyAndNormalize(a));
if (d.isEnvironmentEqual(a, b)) return void (j.updatedObject = d.mergeEdits(j.updatedObject, a));
k = !0, e.addNotification({
type: "warning",
message: "The environment variables for the " + f + " have been updated in the background.",
details: "Saving your changes may create a conflict or cause loss of data."
});
}
}, t = function() {
c.list("configmaps", {
namespace: j.apiObject.metadata.namespace
}).then(function(a) {
l = r(a.by("metadata.name")), j.valueFromObjects = l.concat(m);
});
}, u = function() {
o("secrets", "list") && c.list("secrets", {
namespace: j.apiObject.metadata.namespace
}).then(function(a) {
m = r(a.by("metadata.name")), j.valueFromObjects = l.concat(m);
});
}, v = function() {
n || (n = !0, t(), u());
}, w = function(a, c) {
f = q(a.kind), g = a.metadata.name, h = b.objectToResourceGroupVersion(a), j.canIUpdate = o(h, "update"), i ? i["finally"](function() {
s(a, c);
}) : s(a, c), j.containers = d.getContainers(j.updatedObject), j.disableValueFrom || j.ngReadonly || !j.canIUpdate || v();
};
j.$onChanges = function(a) {
a.apiObject && a.apiObject.currentValue && w(a.apiObject.currentValue, a.apiObject.previousValue);
}, j.save = function() {
var a = "save-env-error-" + g;
e.hideNotification(a), d.compact(j.updatedObject), i = c.update(h, g, j.updatedObject, {
namespace: j.updatedObject.metadata.namespace
}), i.then(function() {
e.addNotification({
type: "success",
message: "Environment variables for " + f + " " + g + " were successfully updated."
}), j.form.$setPristine();
}, function(b) {
e.addNotification({
id: a,
type: "error",
message: "An error occurred updating environment variables for " + f + " " + g + ".",
details: p(b)
});
})["finally"](function() {
i = null;
});
}, j.clearChanges = function() {
j.updatedObject = d.copyAndNormalize(j.apiObject), j.containers = d.getContainers(j.updatedObject), j.form.$setPristine(), k = !1;
};
}
angular.module("openshiftConsole").component("editEnvironmentVariables", {
controller: [ "$filter", "APIService", "DataService", "EnvironmentService", "NotificationsService", a ],
controllerAs: "$ctrl",
bindings: {
apiObject: "<",
ngReadonly: "<",
disableValueFrom: "<"
},
templateUrl: "views/directives/edit-environment-variables.html"
});
}(), angular.module("openshiftConsole").component("initContainersSummary", {
bindings: {
apiObject: "<"
},
templateUrl: "views/_init-containers-summary.html",
controller: [ "$filter", function(a) {
var b = this;
b.$onChanges = function(c) {
var d = _.get(c.apiObject, "currentValue");
if (d) switch (b.podTemplate = a("podTemplate")(d), d.kind) {
case "DeploymentConfig":
case "Deployment":
b.tab = "configuration";
break;

default:
b.tab = "details";
}
};
} ]
}), function() {
function a(a, b, c, d) {
var e = this, f = _.get(d, "DISABLE_GLOBAL_EVENT_WATCH"), g = a("isIE")();
e.hide = !0;
var h = [], i = [], j = function(a, b) {
a && i.push(c.$on("NotificationDrawerWrapper.onUnreadNotifications", b));
}, k = function() {
_.each(i, function(a) {
a && a();
}), i = [];
}, l = function() {
_.each(h, function(a) {
a();
}), h = [];
}, m = function(a) {
a ? e.hide = !1 : e.hide = !0;
};
e.onClick = function() {
c.$emit("NotificationDrawerWrapper.toggle");
};
var n = function(a, b) {
b ? e.showUnreadNotificationsIndicator = !0 : e.showUnreadNotificationsIndicator = !1;
}, o = function(a, b) {
return _.get(a, "params.project") !== _.get(b, "params.project");
}, p = function() {
j(b.project, n), m(b.project);
}, q = function() {
p(), h.push(c.$on("$routeChangeSuccess", function(a, b, c) {
o(b, c) && p();
})), h.push(c.$on("NotificationDrawerWrapper.onMarkAllRead", function() {
e.showUnreadNotificationsIndicator = !1;
}));
};
e.$onInit = function() {
return f || g ? void (e.hide = !0) : void q();
}, e.$onDestroy = function() {
k(), l();
};
}
angular.module("openshiftConsole").component("notificationCounter", {
templateUrl: "views/directives/notifications/notification-counter.html",
bindings: {},
controller: [ "$filter", "$routeParams", "$rootScope", "Constants", a ]
});
}(), function() {
function a(a, b, c, d, e, f, g, h, i) {
var j, k, l = _.get(g, "DISABLE_GLOBAL_EVENT_WATCH"), m = a("isIE")(), n = this, o = [], p = {}, q = {}, r = {}, s = function(a) {
a || (n.drawerHidden = !0);
}, t = function(a, b) {
return _.get(a, "params.project") !== _.get(b, "params.project");
}, u = function(a) {
return h.get("projects", a, {}, {
errorNotification: !1
}).then(function(a) {
return r[a.metadata.name] = a, a;
});
}, v = function(b, c) {
return {
heading: a("displayName")(r[b]),
project: r[b],
notifications: c
};
}, w = function(a) {
return _.filter(a, "unread");
}, x = function() {
_.each(n.notificationGroups, function(a) {
a.totalUnread = w(a.notifications).length, a.hasUnread = !!a.totalUnread, f.$emit("NotificationDrawerWrapper.onUnreadNotifications", a.totalUnread);
});
}, y = function(a) {
_.each(n.notificationGroups, function(b) {
_.remove(b.notifications, {
uid: a.uid,
namespace: a.namespace
});
});
}, z = function(a) {
q[e.project] && delete q[e.project][a.uid], p[e.project] && delete p[e.project][a.uid], y(a);
}, A = function() {
p[e.project] = {}, q[e.project] = {};
}, B = function(a) {
return _.reduce(a, function(a, b) {
return a[b.metadata.uid] = {
actions: null,
uid: b.metadata.uid,
trackByID: b.metadata.uid,
unread: !i.isRead(b.metadata.uid),
type: b.type,
lastTimestamp: b.lastTimestamp,
firstTimestamp: b.firstTimestamp,
event: b
}, a;
}, {});
}, C = function(a) {
return _.reduce(a, function(a, b) {
return i.isImportantAPIEvent(b) && !i.isCleared(b.metadata.uid) && (a[b.metadata.uid] = b), a;
}, {});
}, D = function(a, b) {
var c = e.project;
return _.assign({}, a[c], b[c]);
}, E = function(a) {
return _.orderBy(a, [ "event.lastTimestamp", "event.metadata.resourceVersion" ], [ "desc", "desc" ]);
}, F = function() {
f.$evalAsync(function() {
n.notificationGroups = [ v(e.project, E(D(p, q))) ], x();
});
}, G = function() {
_.each(o, function(a) {
a();
}), o = [];
}, H = function() {
k && (h.unwatch(k), k = null);
}, I = function() {
j && j(), j = null;
}, J = function(a) {
p[e.project] = B(C(a.by("metadata.name"))), F();
}, K = function(a, b) {
var c = b.namespace || e.project, d = b.id ? c + "/" + b.id : _.uniqueId("notification_") + Date.now();
b.showInDrawer && !i.isCleared(d) && (q[c] = q[c] || {}, q[c][d] = {
actions: b.actions,
unread: !i.isRead(d),
trackByID: b.trackByID,
uid: d,
type: b.type,
lastTimestamp: b.timestamp,
message: b.message,
isHTML: b.isHTML,
details: b.details,
namespace: c,
links: b.links
}, F());
}, L = function(a, b) {
H(), a && (k = h.watch("events", {
namespace: a
}, _.debounce(b, 400), {
skipDigest: !0
}));
}, M = _.once(function(a, b) {
I(), j = f.$on("NotificationsService.onNotificationAdded", b);
}), N = function() {
u(e.project).then(function() {
L(e.project, J), M(e.project, K), s(e.project), F();
});
};
angular.extend(n, {
drawerHidden: !0,
allowExpand: !0,
drawerExpanded: !1,
drawerTitle: "Notifications",
hasUnread: !1,
showClearAll: !0,
showMarkAllRead: !0,
onClose: function() {
n.drawerHidden = !0;
},
onMarkAllRead: function(a) {
_.each(a.notifications, function(a) {
a.unread = !1, i.markRead(a.uid);
}), F(), f.$emit("NotificationDrawerWrapper.onMarkAllRead");
},
onClearAll: function(a) {
_.each(a.notifications, function(a) {
a.unread = !1, i.markRead(a.uid), i.markCleared(a.uid);
}), A(), F(), f.$emit("NotificationDrawerWrapper.onMarkAllRead");
},
notificationGroups: [],
headingInclude: "views/directives/notifications/header.html",
notificationBodyInclude: "views/directives/notifications/notification-body.html",
customScope: {
clear: function(a, b, c) {
i.markRead(a.uid), i.markCleared(a.uid), c.notifications.splice(b, 1), z(a), F();
},
markRead: function(a) {
a.unread = !1, i.markRead(a.uid), F();
},
close: function() {
n.drawerHidden = !0;
},
onLinkClick: function(a) {
a.onClick(), n.drawerHidden = !0;
},
countUnreadNotifications: x
}
});
var O = function() {
e.project && N(), o.push(f.$on("$routeChangeSuccess", function(a, b, c) {
t(b, c) && (n.customScope.projectName = e.project, N());
})), o.push(f.$on("NotificationDrawerWrapper.toggle", function() {
n.drawerHidden = !n.drawerHidden;
})), o.push(f.$on("NotificationDrawerWrapper.hide", function() {
n.drawerHidden = !0;
})), o.push(f.$on("NotificationDrawerWrapper.clear", function(a, b) {
i.markCleared(b.uid), z(b), n.countUnreadNotifications();
}));
};
n.$onInit = function() {
l || m || O();
}, n.$onDestroy = function() {
I(), H(), G();
};
}
angular.module("openshiftConsole").component("notificationDrawerWrapper", {
templateUrl: "views/directives/notifications/notification-drawer-wrapper.html",
controller: [ "$filter", "$interval", "$location", "$timeout", "$routeParams", "$rootScope", "Constants", "DataService", "EventsService", "NotificationsService", a ]
});
}(), angular.module("openshiftConsole").filter("duration", [ "gettext", "gettextCatalog", function(a, b) {
return function(c, d, e, f) {
function g(a, b, c) {
if (0 !== a) return 1 === a ? void (e ? j.push(b) : j.push("1 " + b)) : void j.push(a + " " + c);
}
if (!c) return c;
f = f || 2, d = d || new Date();
var h = moment(d).diff(c);
h < 0 && (h = 0);
var i = moment.duration(h), j = [], k = i.years(), l = i.months(), m = i.days(), n = i.hours(), o = i.minutes(), p = i.seconds();
return g(k, b.getString(a("year")), b.getString(a("years"))), g(l, b.getString(a("month")), b.getString(a("months"))), g(m, b.getString(a("day")), b.getString(a("days"))), g(n, b.getString(a("hour")), b.getString(a("hours"))), g(o, b.getString(a("minute")), b.getString(a("minutes"))), g(p, b.getString(a("second")), b.getString(a("seconds"))), 1 === j.length && p && 1 === f ? e ? "minute" : "1 minute" : (0 === j.length && j.push("0 seconds"), j.length > f && (j.length = f), j.join(", "));
};
} ]).filter("ageLessThan", function() {
return function(a, b, c) {
return moment().subtract(b, c).diff(moment(a)) < 0;
};
}).filter("humanizeDurationValue", function() {
return function(a, b) {
return moment.duration(a, b).humanize();
};
}).filter("timeOnlyDurationFromTimestamps", [ "timeOnlyDurationFilter", function(a) {
return function(b, c) {
return b ? (c = c || new Date(), a(moment(c).diff(b))) : b;
};
} ]).filter("timeOnlyDuration", function() {
return function(a) {
var b = [], c = moment.duration(a), d = Math.floor(c.asHours()), e = c.minutes(), f = c.seconds();
return (d < 0 || e < 0 || f < 0) && (d = e = f = 0), d && b.push(d + "h"), e && b.push(e + "m"), d || b.push(f + "s"), b.join(" ");
};
}), angular.module("openshiftConsole").filter("storageClass", [ "annotationFilter", function(a) {
return function(b) {
return a(b, "volume.beta.kubernetes.io/storage-class");
};
} ]).filter("tags", [ "annotationFilter", function(a) {
return function(b, c) {
c = c || "tags";
var d = a(b, c);
return d ? d.split(/\s*,\s*/) : [];
};
} ]).filter("imageStreamLastUpdated", function() {
return function(a) {
var b = a.metadata.creationTimestamp, c = moment(b);
return angular.forEach(a.status.tags, function(a) {
if (!_.isEmpty(a.items)) {
var d = moment(_.head(a.items).created);
d.isAfter(c) && (c = d, b = _.head(a.items).created);
}
}), b;
};
}).filter("buildConfigForBuild", [ "annotationFilter", "labelNameFilter", "labelFilter", function(a, b, c) {
var d = b("buildConfig");
return function(b) {
return a(b, "buildConfig") || c(b, d);
};
} ]).filter("icon", [ "annotationFilter", function(a) {
return function(b) {
var c = a(b, "icon");
return c ? c : "";
};
} ]).filter("iconClass", [ "annotationFilter", function(a) {
return function(b, c) {
var d = a(b, "iconClass");
return d ? d : "template" === c ? "fa fa-clone" : "";
};
} ]).filter("imageName", function() {
return function(a) {
return a ? a.contains(":") ? a.split(":")[1] : a : "";
};
}).filter("imageStreamName", function() {
return function(a) {
if (!a) return "";
var b, c = a.split("@")[0], d = c.split("/");
return 3 === d.length ? (b = d[2].split(":"), d[1] + "/" + b[0]) : 2 === d.length ? c : 1 === d.length ? (b = c.split(":"), b[0]) : void 0;
};
}).filter("stripTag", function() {
return function(a) {
return a ? a.split(":")[0] : a;
};
}).filter("stripSHA", function() {
return function(a) {
return a ? a.split("@")[0] : a;
};
}).filter("imageSHA", function() {
return function(a) {
if (!a) return a;
var b = a.split("@");
return b.length > 1 ? b[1] : "";
};
}).filter("imageEnv", function() {
return function(a, b) {
for (var c = a.dockerImageMetadata.Config.Env, d = 0; d < _.size(c); d++) {
var e = c[d].split("=");
if (e[0] === b) return e[1];
}
return null;
};
}).filter("destinationSourcePair", function() {
return function(a) {
var b = {};
return angular.forEach(a, function(a) {
b[a.sourcePath] = a.destinationDir;
}), b;
};
}).filter("buildForImage", function() {
return function(a, b) {
for (var c = _.get(a, "dockerImageMetadata.Config.Env", []), d = 0; d < c.length; d++) {
var e = c[d].split("=");
if ("OPENSHIFT_BUILD_NAME" === e[0]) return b[e[1]];
}
return null;
};
}).filter("webhookURL", [ "DataService", function(a) {
return function(b, c, d, e) {
return a.url({
resource: "buildconfigs/webhooks/" + d + "/" + c.toLowerCase(),
name: b,
namespace: e
});
};
} ]).filter("isWebRoute", [ "routeHostFilter", function(a) {
return function(b) {
return !!a(b, !0) && "Subdomain" !== _.get(b, "spec.wildcardPolicy");
};
} ]).filter("routeWebURL", [ "routeHostFilter", function(a) {
return function(b, c, d) {
var e = b.spec.tls && "" !== b.spec.tls.tlsTerminationType ? "https" : "http", f = e + "://" + (c || a(b));
return b.spec.path && !d && (f += b.spec.path), f;
};
} ]).filter("routeLabel", [ "RoutesService", "routeHostFilter", "routeWebURLFilter", "isWebRouteFilter", function(a, b, c, d) {
return function(e, f, g) {
if (d(e)) return c(e, f, g);
var h = f || b(e);
return h ? ("Subdomain" === _.get(e, "spec.wildcardPolicy") && (h = "*." + a.getSubdomain(e)), g ? h : (e.spec.path && (h += e.spec.path), h)) : "<unknown host>";
};
} ]).filter("parameterPlaceholder", [ "gettext", "gettextCatalog", function(a, b) {
return function(c) {
return c.generate ? b.getString(a("(generated if empty)")) : "";
};
} ]).filter("parameterValue", function() {
return function(a) {
return !a.value && a.generate ? "(generated)" : a.value;
};
}).filter("imageObjectRef", function() {
return function(a, b, c) {
if (!a) return "";
var d = a.namespace || b || "";
_.isEmpty(d) || (d += "/");
var e = a.kind;
if ("ImageStreamTag" === e || "ImageStreamImage" === e) return d + a.name;
if ("DockerImage" === e) {
var f = a.name;
return c && (f = f.substring(f.lastIndexOf("/") + 1)), f;
}
var g = d + a.name;
return g;
};
}).filter("orderByDisplayName", [ "displayNameFilter", "toArrayFilter", function(a, b) {
return function(c) {
var d = b(c);
return d.sort(function(b, c) {
var d = a(b) || "", e = a(c) || "";
return d === e && (d = _.get(b, "metadata.name", ""), e = _.get(c, "metadata.name", "")), d.localeCompare(e);
}), d;
};
} ]).filter("isPodStuck", function() {
return function(a) {
if ("Pending" !== a.status.phase) return !1;
var b = moment().subtract(5, "m"), c = moment(a.metadata.creationTimestamp);
return c.isBefore(b);
};
}).filter("isContainerLooping", function() {
return function(a) {
return a.state.waiting && "CrashLoopBackOff" === a.state.waiting.reason;
};
}).filter("isContainerFailed", function() {
return function(a) {
return a.state.terminated && 0 !== a.state.terminated.exitCode;
};
}).filter("isContainerTerminatedSuccessfully", function() {
return function(a) {
return a.state.terminated && 0 === a.state.terminated.exitCode;
};
}).filter("isContainerUnprepared", function() {
return function(a) {
if (!a.state.running || a.ready !== !1 || !a.state.running.startedAt) return !1;
var b = moment().subtract(5, "m"), c = moment(a.state.running.startedAt);
return c.isBefore(b);
};
}).filter("isTroubledPod", [ "isPodStuckFilter", "isContainerLoopingFilter", "isContainerFailedFilter", "isContainerUnpreparedFilter", function(a, b, c, d) {
return function(e) {
if ("Unknown" === e.status.phase) return !0;
if (a(e)) return !0;
if ("Running" === e.status.phase && e.status.containerStatuses) {
var f;
for (f = 0; f < _.size(e.status.containerStatuses); ++f) {
var g = e.status.containerStatuses[f];
if (g.state) {
if (c(g)) return !0;
if (b(g)) return !0;
if (d(g)) return !0;
}
}
}
return !1;
};
} ]).filter("podWarnings", [ "isPodStuckFilter", "isContainerLoopingFilter", "isContainerFailedFilter", "isContainerUnpreparedFilter", "isTerminatingFilter", "gettext", "gettextCatalog", function(a, b, c, d, e, f, g) {
return function(h) {
var i = [];
return "Unknown" === h.status.phase && i.push({
reason: "Unknown",
pod: h.metadata.name,
message: "The state of the pod could not be obtained. This is typically due to an error communicating with the host of the pod."
}), a(h) && i.push({
reason: "Stuck",
pod: h.metadata.name,
message: "The pod has been stuck in the pending state for more than five minutes."
}), "Running" === h.status.phase && h.status.containerStatuses && _.each(h.status.containerStatuses, function(a) {
return !!a.state && (c(a) && (e(h) ? i.push({
severity: "error",
reason: "NonZeroExitTerminatingPod",
pod: h.metadata.name,
container: a.name,
message: g.getString("The container {{name}} did not stop cleanly when terminated (exit code {{exitCode}}).", {
name: a.name,
exitCode: a.state.terminated.exitCode
})
}) : i.push({
severity: "warning",
reason: "NonZeroExit",
pod: h.metadata.name,
container: a.name,
message: g.getString("The container {{name}} failed (exit code {{exitCode}}).", {
name: a.name,
exitCode: a.state.terminated.exitCode
})
})), b(a) && i.push({
severity: "error",
reason: "Looping",
pod: h.metadata.name,
container: a.name,
message: g.getString(f("The container {{name}} is crashing frequently. It must wait before it will be restarted again."), {
name: a.name
})
}), void (d(a) && i.push({
severity: "warning",
reason: "Unprepared",
pod: h.metadata.name,
container: a.name,
message: g.getString(f("The container {{name}} has been running for more than five minutes and has not passed its readiness check."), {
name: a.name
})
})));
}), i.length > 0 ? i : null;
};
} ]).filter("groupedPodWarnings", [ "podWarningsFilter", function(a) {
return function(b, c) {
var d = c || {};
return _.each(b, function(b) {
var c = a(b);
_.each(c, function(a) {
var b = a.reason + (a.container || "");
d[b] = d[b] || [], d[b].push(a);
});
}), d;
};
} ]).filter("troubledPods", [ "isTroubledPodFilter", function(a) {
return function(b) {
var c = [];
return angular.forEach(b, function(b) {
a(b) && c.push(b);
}), c;
};
} ]).filter("notTroubledPods", [ "isTroubledPodFilter", function(a) {
return function(b) {
var c = [];
return angular.forEach(b, function(b) {
a(b) || c.push(b);
}), c;
};
} ]).filter("projectOverviewURL", [ "Navigate", function(a) {
return function(b) {
return angular.isString(b) ? a.projectOverviewURL(b) : angular.isObject(b) ? a.projectOverviewURL(b.metadata && b.metadata.name) : a.projectOverviewURL("");
};
} ]).filter("createFromSourceURL", function() {
return function(a, b) {
var c = URI.expand("project/{project}/catalog/images{?q*}", {
project: a,
q: {
builderfor: b
}
});
return c.toString();
};
}).filter("createFromImageURL", [ "Navigate", function(a) {
return function(b, c, d, e) {
return a.createFromImageURL(b, c, d, e);
};
} ]).filter("createFromTemplateURL", [ "Navigate", function(a) {
return function(b, c, d) {
return a.createFromTemplateURL(b, c, d);
};
} ]).filter("failureObjectName", function() {
return function(a) {
if (!a.data || !a.data.details) return null;
var b = a.data.details;
return b.kind ? b.id ? b.kind + " " + b.id : b.kind : b.id;
};
}).filter("isIncompleteBuild", [ "ageLessThanFilter", function(a) {
return function(a) {
if (!a || !a.status || !a.status.phase) return !1;
switch (a.status.phase) {
case "New":
case "Pending":
case "Running":
return !0;

default:
return !1;
}
};
} ]).filter("isRecentBuild", [ "ageLessThanFilter", "isIncompleteBuildFilter", function(a, b) {
return function(c) {
if (!(c && c.status && c.status.phase && c.metadata)) return !1;
if (b(c)) return !0;
var d = c.status.completionTimestamp || c.metadata.creationTimestamp;
return a(d, 5, "minutes");
};
} ]).filter("deploymentCauses", [ "annotationFilter", function(a) {
return function(b) {
if (!b) return [];
var c = a(b, "encodedDeploymentConfig");
if (!c) return [];
try {
var d = $.parseJSON(c);
if (!d) return [];
switch (d.apiVersion) {
case "v1beta1":
return d.details.causes;

case "v1beta3":
case "v1":
return d.status.details ? d.status.details.causes : [];

default:
return Logger.error('Unknown API version "' + d.apiVersion + '" in encoded deployment config for deployment ' + b.metadata.name), d.status && d.status.details && d.status.details.causes ? d.status.details.causes : [];
}
} catch (e) {
return Logger.error("Failed to parse encoded deployment config", e), [];
}
};
} ]).filter("desiredReplicas", function() {
return function(a) {
return a && a.spec ? void 0 === a.spec.replicas ? 1 : a.spec.replicas : 0;
};
}).filter("serviceImplicitDNSName", function() {
return function(a) {
return a && a.metadata && a.metadata.name && a.metadata.namespace ? a.metadata.name + "." + a.metadata.namespace + ".svc" : "";
};
}).filter("podsForPhase", function() {
return function(a, b) {
var c = [];
return angular.forEach(a, function(a) {
a.status.phase === b && c.push(a);
}), c;
};
}).filter("numContainersReady", function() {
return function(a) {
var b = 0;
return angular.forEach(a.status.containerStatuses, function(a) {
a.ready && b++;
}), b;
};
}).filter("numContainerRestarts", function() {
return function(a) {
var b = 0;
return angular.forEach(a.status.containerStatuses, function(a) {
b += a.restartCount;
}), b;
};
}).filter("isTerminating", function() {
return function(a) {
return _.has(a, "metadata.deletionTimestamp");
};
}).filter("isPullingImage", function() {
return function(a) {
if (!a) return !1;
var b = _.get(a, "status.phase");
if ("Pending" !== b) return !1;
var c = _.get(a, "status.containerStatuses");
if (!c) return !1;
var d = function(a) {
return "ContainerCreating" === _.get(a, "state.waiting.reason");
};
return _.some(c, d);
};
}).filter("newestResource", function() {
return function(a) {
var b = null;
return angular.forEach(a, function(a) {
if (b) moment(b.metadata.creationTimestamp).isBefore(a.metadata.creationTimestamp) && (b = a); else {
if (!a.metadata.creationTimestamp) return;
b = a;
}
}), b;
};
}).filter("deploymentIsLatest", [ "annotationFilter", function(a) {
return function(b, c) {
if (!c || !b) return !1;
var d = parseInt(a(b, "deploymentVersion")), e = c.status.latestVersion;
return d === e;
};
} ]).filter("deploymentStatus", [ "annotationFilter", "hasDeploymentConfigFilter", function(a, b) {
return function(c) {
if (a(c, "deploymentCancelled")) return "Cancelled";
var d = a(c, "deploymentStatus");
return !b(c) || "Complete" === d && c.spec.replicas > 0 ? "Active" : d;
};
} ]).filter("deploymentIsInProgress", [ "deploymentStatusFilter", function(a) {
return function(b) {
return [ "New", "Pending", "Running" ].indexOf(a(b)) > -1;
};
} ]).filter("anyDeploymentIsInProgress", [ "deploymentIsInProgressFilter", function(a) {
return function(b) {
return _.some(b, a);
};
} ]).filter("getActiveDeployment", [ "DeploymentsService", function(a) {
return function(b) {
return a.getActiveDeployment(b);
};
} ]).filter("isRecentDeployment", [ "deploymentIsLatestFilter", "deploymentIsInProgressFilter", function(a, b) {
return function(c, d) {
return !!a(c, d) || !!b(c);
};
} ]).filter("buildStrategy", function() {
return function(a) {
if (!a || !a.spec || !a.spec.strategy) return null;
switch (a.spec.strategy.type) {
case "Source":
return a.spec.strategy.sourceStrategy;

case "Docker":
return a.spec.strategy.dockerStrategy;

case "Custom":
return a.spec.strategy.customStrategy;

case "JenkinsPipeline":
return a.spec.strategy.jenkinsPipelineStrategy;

default:
return null;
}
};
}).filter("isBinaryBuild", function() {
return function(a) {
return _.has(a, "spec.source.binary");
};
}).filter("isJenkinsPipelineStrategy", function() {
return function(a) {
return "JenkinsPipeline" === _.get(a, "spec.strategy.type");
};
}).filter("jenkinsLogURL", [ "annotationFilter", function(a) {
return function(b, c) {
var d = a(b, "jenkinsLogURL");
return !d || c ? d : d.replace(/\/consoleText$/, "/console");
};
} ]).filter("jenkinsBuildURL", [ "annotationFilter", "jenkinsLogURLFilter", function(a, b) {
return function(b) {
return a(b, "jenkinsBuildURL");
};
} ]).filter("jenkinsInputURL", [ "jenkinsBuildURLFilter", function(a) {
return function(b) {
var c = a(b);
return c ? new URI(c).segment("/input/").toString() : null;
};
} ]).filter("buildLogURL", [ "isJenkinsPipelineStrategyFilter", "jenkinsLogURLFilter", "navigateResourceURLFilter", function(a, b, c) {
return function(d) {
if (a(d)) return b(d);
var e = c(d);
return e ? new URI(e).addSearch("tab", "logs").toString() : null;
};
} ]).filter("jenkinsfileLink", [ "isJenkinsPipelineStrategyFilter", "githubLinkFilter", function(a, b) {
return function(c) {
if (!a(c) || _.has(c, "spec.strategy.jenkinsPipelineStrategy.jenkinsfile")) return "";
var d = _.get(c, "spec.source.git.uri");
if (!d) return "";
var e = _.get(c, "spec.source.git.ref"), f = _.get(c, "spec.strategy.jenkinsPipelineStrategy.jenkinsfilePath", "Jenkinsfile"), g = _.get(c, "spec.source.contextDir");
g && (f = URI.joinPaths(g, f).path());
var h = b(d, e, f);
return URI(h).is("url") ? h : "";
};
} ]).filter("pipelineStageComplete", function() {
return function(a) {
return !!a && _.indexOf([ "ABORTED", "FAILED", "SUCCESS" ], a.status) !== -1;
};
}).filter("pipelineStagePendingInput", function() {
return function(a) {
return !!a && "PAUSED_PENDING_INPUT" === a.status;
};
}).filter("deploymentStrategyParams", function() {
return function(a) {
var b = _.get(a, "spec.strategy.type");
switch (b) {
case "Recreate":
return _.get(a, "spec.strategy.recreateParams", {});

case "Rolling":
return _.get(a, "spec.strategy.rollingParams", {});

case "Custom":
return _.get(a, "spec.strategy.customParams", {});

default:
return null;
}
};
}).filter("humanizeTLSTermination", function() {
return function(a) {
switch (a) {
case "edge":
return "Edge";

case "passthrough":
return "Passthrough";

case "reencrypt":
return "Re-encrypt";

default:
return a;
}
};
}).filter("kindToResource", [ "APIService", function(a) {
return a.kindToResource;
} ]).filter("abbreviateResource", [ "APIService", function(a) {
var b = {
buildconfigs: "bc",
deploymentconfigs: "dc",
horizontalpodautoscalers: "hpa",
imagestreams: "is",
imagestreamtags: "istag",
replicasets: "rs",
replicationcontrollers: "rc",
services: "svc"
};
return function(a) {
return b[a] || a;
};
} ]).filter("humanizeQuotaResource", function() {
return function(a, b) {
if (!a) return a;
var c = {
configmaps: "Config Maps",
cpu: "CPU (Request)",
"limits.cpu": "CPU (Limit)",
"limits.memory": "Memory (Limit)",
memory: "Memory (Request)",
"openshift.io/imagesize": "Image Size",
"openshift.io/imagestreamsize": "Image Stream Size",
"openshift.io/projectimagessize": "Project Image Size",
persistentvolumeclaims: "Persistent Volume Claims",
"requests.storage": "Storage (Request)",
pods: "Pods",
replicationcontrollers: "Replication Controllers",
"requests.cpu": "CPU (Request)",
"requests.memory": "Memory (Request)",
resourcequotas: "Resource Quotas",
secrets: "Secrets",
services: "Services",
"services.loadbalancers": "Service Load Balancers",
"services.nodeports": "Service Node Ports"
}, d = {
configmaps: "config maps",
cpu: "CPU (request)",
"limits.cpu": "CPU (limit)",
"limits.memory": "memory (limit)",
memory: "memory (request)",
"openshift.io/imagesize": "image size",
"openshift.io/imagestreamsize": "image stream size",
"openshift.io/projectimagessize": "project image size",
persistentvolumeclaims: "persistent volume claims",
"requests.storage": "storage (request)",
replicationcontrollers: "replication controllers",
"requests.cpu": "CPU (request)",
"requests.memory": "memory (request)",
resourcequotas: "resource quotas",
"services.loadbalancers": "service load balancers",
"services.nodeports": "service node ports"
};
return b ? c[a] || a : d[a] || a;
};
}).filter("routeTargetPortMapping", [ "RoutesService", function(a) {
var b = function(a, b, c) {
a = a || "<unknown>", b = b || "<unknown>";
var d = "Service Port " + a + " → Container Port " + b;
return c && (d += " (" + c + ")"), d;
};
return function(c, d) {
if (!c.spec.port || !c.spec.port.targetPort || !d) return "";
var e = c.spec.port.targetPort, f = a.getServicePortForRoute(e, d);
return f ? b(f.port, f.targetPort, f.protocol) : angular.isString(e) ? b(e, null) : b(null, e);
};
} ]).filter("podStatus", function() {
return function(a) {
if (!a || !a.metadata.deletionTimestamp && !a.status) return "";
if (a.metadata.deletionTimestamp) return "Terminating";
var b = a.status.reason || a.status.phase;
return angular.forEach(a.status.containerStatuses, function(a) {
var c, d, e = _.get(a, "state.waiting.reason") || _.get(a, "state.terminated.reason");
return e ? void (b = e) : (c = _.get(a, "state.terminated.signal")) ? void (b = "Signal: " + c) : (d = _.get(a, "state.terminated.exitCode"), void (d && (b = "Exit Code: " + d)));
}), b;
};
}).filter("podStartTime", function() {
return function(a) {
var b = null;
return _.each(_.get(a, "status.containerStatuses"), function(a) {
var c = _.get(a, "state.running") || _.get(a, "state.terminated");
c && (b && !moment(c.startedAt).isBefore(b) || (b = c.startedAt));
}), b;
};
}).filter("podCompletionTime", function() {
return function(a) {
var b = null;
return _.each(_.get(a, "status.containerStatuses"), function(a) {
var c = _.get(a, "state.terminated");
c && (b && !moment(c.finishedAt).isAfter(b) || (b = c.finishedAt));
}), b;
};
}).filter("routeIngressCondition", function() {
return function(a, b) {
return a ? _.find(a.conditions, {
type: b
}) : null;
};
}).filter("routeHost", function() {
return function(a, b) {
if (!_.get(a, "status.ingress")) return _.get(a, "spec.host");
if (!a.status.ingress) return a.spec.host;
var c = null;
return angular.forEach(a.status.ingress, function(a) {
_.some(a.conditions, {
type: "Admitted",
status: "True"
}) && (!c || c.lastTransitionTime > a.lastTransitionTime) && (c = a);
}), c ? c.host : b ? null : a.spec.host;
};
}).filter("isRequestCalculated", [ "LimitRangesService", function(a) {
return function(b, c) {
return a.isRequestCalculated(b, c);
};
} ]).filter("isLimitCalculated", [ "LimitRangesService", function(a) {
return function(b, c) {
return a.isLimitCalculated(b, c);
};
} ]).filter("hpaCPUPercent", [ "HPAService", "LimitRangesService", function(a, b) {
return function(c, d) {
return c && b.isRequestCalculated("cpu", d) ? a.convertRequestPercentToLimit(c, d) : c;
};
} ]).filter("podTemplate", function() {
return function(a) {
return a ? "Pod" === a.kind ? a : _.get(a, "spec.template") : null;
};
}).filter("hasHealthChecks", function() {
return function(a) {
var b = _.get(a, "spec.containers", []);
return _.every(b, function(a) {
return a.readinessProbe || a.livenessProbe;
});
};
}).filter("scopeDetails", [ "sentenceCaseFilter", "gettext", "gettextCatalog", function(a, b, c) {
var d = {
Terminating: c.getString(b("Affects pods that have an active deadline. These pods usually include builds, deployers, and jobs.")),
NotTerminating: c.getString(b("Affects pods that do not have an active deadline. These pods usually include your applications.")),
BestEffort: c.getString(b("Affects pods that do not have resource limits set. These pods have a best effort quality of service.")),
NotBestEffort: c.getString(b("Affects pods that have at least one resource limit set. These pods do not have a best effort quality of service."))
};
return function(b) {
return d[b] || a(b);
};
} ]).filter("isDebugPod", [ "annotationFilter", function(a) {
return function(b) {
return !!a(b, "debug.openshift.io/source-resource");
};
} ]).filter("debugPodSourceName", [ "annotationFilter", function(a) {
return function(b) {
var c = a(b, "debug.openshift.io/source-resource");
if (!c) return "";
var d = c.split("/");
return 2 !== d.length ? (Logger.warn('Invalid debug.openshift.io/source-resource annotation value "' + c + '"'), "") : d[1];
};
} ]).filter("entrypoint", function() {
var a = function(a) {
return _.isArray(a) ? a.join(" ") : a;
};
return function(b, c) {
if (!b) return null;
var d, e = a(b.command), f = a(b.args);
if (e && f) return e + " " + f;
if (e) return e;
if (c) {
if (d = a(_.get(c, "dockerImageMetadata.Config.Entrypoint") || [ "/bin/sh", "-c" ]), f) return d + " " + f;
if (e = a(_.get(c, "dockerImageMetadata.Config.Cmd"))) return d + " " + e;
}
return f ? "<image-entrypoint> " + f : null;
};
}).filter("unidleTargetReplicas", [ "annotationFilter", function(a) {
return function(b, c) {
var d;
if (b) try {
d = parseInt(a(b, "idledPreviousScale"));
} catch (e) {
Logger.error("Unable to parse previous scale annotation as a number.");
}
return d || _.get(_.head(c), "spec.minReplicas") || 1;
};
} ]).filter("lastDeploymentRevision", [ "annotationFilter", function(a) {
return function(b) {
if (!b) return "";
var c = a(b, "deployment.kubernetes.io/revision");
return c ? "#" + c : "Unknown";
};
} ]).filter("hasPostCommitHook", function() {
return function(a) {
return _.has(a, "spec.postCommit.command") || _.has(a, "spec.postCommit.script") || _.has(a, "spec.postCommit.args");
};
}).filter("volumeMountMode", [ "gettext", "gettextCatalog", function(a, b) {
var c = function(a) {
return _.has(a, "configMap") || _.has(a, "secret");
};
return function(d, e) {
if (!d) return "";
var f = _.find(e, {
name: d.name
});
return c(f) ? "read-only" : _.get(f, "persistentVolumeClaim.readOnly") ? "read-only" : b.getString(a(d.readOnly ? "read-only" : "read-write"));
};
} ]).filter("managesRollouts", [ "APIService", function(a) {
return function(b) {
if (!b) return !1;
var c = a.objectToResourceGroupVersion(b);
return "deploymentconfigs" === c.resource && !c.group || "deployments" === c.resource && ("apps" === c.group || "extensions" === c.group);
};
} ]).filter("hasAlternateBackends", function() {
return function(a) {
var b = _.get(a, "spec.alternateBackends", []);
return !_.isEmpty(b);
};
}).filter("readyConditionMessage", [ "statusConditionFilter", function(a) {
return function(b) {
return _.get(a(b, "Ready"), "message");
};
<<<<<<< 61b7ccebc1be9196354cef218d1e7a812de7a0c6
} ]).filter("failedConditionMessage", [ "statusConditionFilter", function(a) {
return function(b) {
return _.get(a(b, "Failed"), "message");
};
} ]).filter("serviceInstanceConditionMessage", [ "serviceInstanceStatusFilter", "statusConditionFilter", function(a, b) {
return function(c) {
var d = a(c), e = null;
switch (d) {
case "Failed":
case "Ready":
e = _.get(b(c, d), "message");
}
return e;
};
} ]).filter("humanizeReason", function() {
return function(a) {
var b = _.startCase(a);
return b.replace("Back Off", "Back-off").replace("O Auth", "OAuth");
};
}).filter("humanizePodStatus", [ "humanizeReasonFilter", function(a) {
return a;
} ]), angular.module("openshiftConsole").filter("canIDoAny", [ "APIService", "canIFilter", function(a, b) {
var c = {
buildConfigs: [ {
group: "",
resource: "buildconfigs",
verbs: [ "delete", "update" ]
}, {
group: "",
resource: "buildconfigs/instantiate",
verbs: [ "create" ]
=======
}), angular.module("openshiftConsole").filter("canIDoAny", [ "canIFilter", function(a) {
var b = {
buildConfigs:[ {
group:"",
resource:"buildconfigs",
verbs:[ "delete", "update" ]
}, {
group:"",
resource:"buildconfigs/instantiate",
verbs:[ "create" ]
} ],
builds:[ {
group:"",
resource:"builds/clone",
verbs:[ "create" ]
}, {
group:"",
resource:"builds",
verbs:[ "delete", "update" ]
} ],
configmaps:[ {
group:"",
resource:"configmaps",
verbs:[ "update", "delete" ]
} ],
deployments:[ {
group:"autoscaling",
resource:"horizontalpodautoscalers",
verbs:[ "create", "update" ]
}, {
group:"apps",
resource:"deployments",
verbs:[ "update", "delete" ]
} ],
deploymentConfigs:[ {
group:"autoscaling",
resource:"horizontalpodautoscalers",
verbs:[ "create", "update" ]
}, {
group:"",
resource:"deploymentconfigs",
verbs:[ "create", "update" ]
>>>>>>> Use `apps` API group for deployments
} ],
builds: [ _.assign({}, a.getPreferredVersion("builds/clone"), {
verbs: [ "create" ]
}), _.assign({}, a.getPreferredVersion("builds"), {
verbs: [ "delete", "update" ]
}) ],
configmaps: [ {
group: "",
resource: "configmaps",
verbs: [ "update", "delete" ]
} ],
deployments: [ _.assign({}, a.getPreferredVersion("horizontalpodautoscalers"), {
verbs: [ "create", "update" ]
}), _.assign({}, a.getPreferredVersion("deployments"), {
verbs: [ "update", "delete" ]
}) ],
deploymentConfigs: [ _.assign({}, a.getPreferredVersion("horizontalpodautoscalers"), {
verbs: [ "create", "update" ]
}), _.assign({}, a.getPreferredVersion("deploymentconfigs"), {
verbs: [ "create", "update" ]
}) ],
horizontalPodAutoscalers: [ {
group: "autoscaling",
resource: "horizontalpodautoscalers",
verbs: [ "update", "delete" ]
} ],
imageStreams: [ _.assign({}, a.getPreferredVersion("imagestreams"), {
verbs: [ "update", "delete" ]
}) ],
serviceInstances: [ _.assign({}, a.getPreferredVersion("serviceinstances"), {
verbs: [ "update", "delete" ]
}) ],
persistentVolumeClaims: [ {
group: "",
resource: "persistentvolumeclaims",
verbs: [ "update", "delete" ]
} ],
pods: [ {
group: "",
resource: "pods",
verbs: [ "update", "delete" ]
}, {
group: "",
resource: "deploymentconfigs",
verbs: [ "update" ]
} ],
replicaSets: [ {
group: "autoscaling",
resource: "horizontalpodautoscalers",
verbs: [ "create", "update" ]
}, {
group: "extensions",
resource: "replicasets",
verbs: [ "update", "delete" ]
} ],
replicationControllers: [ {
group: "",
resource: "replicationcontrollers",
verbs: [ "update", "delete" ]
} ],
routes: [ {
group: "",
resource: "routes",
verbs: [ "update", "delete" ]
} ],
services: [ {
group: "",
resource: "services",
verbs: [ "update", "create", "delete" ]
} ],
secrets: [ {
group: "",
resource: "secrets",
verbs: [ "update", "delete" ]
} ],
projects: [ {
group: "",
resource: "projects",
verbs: [ "delete", "update" ]
} ],
statefulsets: [ {
group: "apps",
resource: "statefulsets",
verbs: [ "update", "delete" ]
} ]
};
return function(a) {
return _.some(c[a], function(a) {
return _.some(a.verbs, function(c) {
return b({
resource: a.resource,
group: a.group
}, c);
});
});
};
} ]).filter("canIScale", [ "canIFilter", "hasDeploymentConfigFilter", "DeploymentsService", function(a, b, c) {
return function(b) {
var d = c.getScaleResource(b);
return a(d, "update");
};
} ]), angular.module("openshiftConsole").filter("underscore", function() {
return function(a) {
return a.replace(/\./g, "_");
};
}).filter("defaultIfBlank", function() {
return function(a, b) {
return null === a ? b : ("string" != typeof a && (a = String(a)), 0 === a.trim().length ? b : a);
};
}).filter("keys", function() {
return _.keys;
}).filter("usageValue", function() {
return function(a) {
if (!a) return a;
var b = /(-?[0-9\.]+)\s*(.*)/.exec(a);
if (!b) return a;
var c = b[1];
c = c.indexOf(".") >= 0 ? parseFloat(c) : parseInt(b[1]);
var d = b[2], e = 1;
switch (d) {
case "E":
e = Math.pow(1e3, 6);
break;

case "P":
e = Math.pow(1e3, 5);
break;

case "T":
e = Math.pow(1e3, 4);
break;

case "G":
e = Math.pow(1e3, 3);
break;

case "M":
e = Math.pow(1e3, 2);
break;

case "K":
case "k":
e = 1e3;
break;

case "m":
e = .001;
break;

case "Ei":
e = Math.pow(1024, 6);
break;

case "Pi":
e = Math.pow(1024, 5);
break;

case "Ti":
e = Math.pow(1024, 4);
break;

case "Gi":
e = Math.pow(1024, 3);
break;

case "Mi":
e = Math.pow(1024, 2);
break;

case "Ki":
e = 1024;
}
return c * e;
};
}).filter("humanizeUnit", function() {
return function(a, b, c) {
switch (b) {
case "memory":
case "limits.memory":
case "requests.memory":
case "storage":
return a ? a + "B" : a;

case "cpu":
case "limits.cpu":
case "requests.cpu":
"m" === a && (a = "milli");
var d = c ? "core" : "cores";
return (a || "") + d;

default:
return a;
}
};
}).filter("amountAndUnit", [ "humanizeUnitFilter", function(a) {
return function(b, c, d) {
if (!b) return [ b, null ];
var e = /(-?[0-9\.]+)\s*(.*)/.exec(b);
if (!e) return [ b, null ];
var f = e[1], g = e[2];
return d && (g = a(g, c, "1" === f)), [ f, g ];
};
} ]).filter("usageWithUnits", [ "amountAndUnitFilter", function(a) {
return function(b, c) {
var d = _.spread(function(a, b) {
return b ? a + " " + b : a;
});
return d(a(b, c, !0));
};
} ]).filter("humanizeSize", function() {
return function(a) {
if (null === a || void 0 === a || "" === a) return a;
if (a = Number(a), a < 1024) return a + " bytes";
var b = a / 1024;
if (b < 1024) return b.toFixed(1) + " KiB";
var c = b / 1024;
if (c < 1024) return c.toFixed(1) + " MiB";
var d = c / 1024;
return d.toFixed(1) + " GiB";
};
}).filter("computeResourceLabel", [ "gettext", "gettextCatalog", function(a, b) {
return function(c, d) {
switch (c) {
case "cpu":
return "CPU";

case "memory":
return d ? b.getString(a("Memory")) : b.getString(a("memory"));

default:
return c;
}
};
} ]).filter("helpLink", [ "Constants", function(a) {
return function(b) {
var c = a.HELP[b] || a.HELP["default"];
return URI(c).is("absolute") || (c = a.HELP_BASE_URL + c), c;
};
} ]).filter("taskTitle", function() {
return function(a) {
return "completed" !== a.status ? a.titles.started : a.hasErrors ? a.titles.failure : a.titles.success;
};
}).filter("httpHttps", function() {
return function(a) {
return a ? "https://" : "http://";
};
}).filter("isGithubLink", function() {
var a = /^(?:https?:\/\/|git:\/\/|git\+ssh:\/\/|git\+https:\/\/)?(?:[^@]+@)?github\.com[:\/]([^\/]+\/[^\/]+?)(\/|(?:\.git(#.*)?))?$/;
return function(b) {
return b ? a.test(b) : b;
};
}).filter("githubLink", function() {
return function(a, b, c) {
var d = a.match(/^(?:https?:\/\/|git:\/\/|git\+ssh:\/\/|git\+https:\/\/)?(?:[^@]+@)?github\.com[:\/]([^\/]+\/[^\/]+?)(\/|(?:\.git(#.*)?))?$/);
return d && (a = "https://github.com/" + d[1], c && "/" === c.charAt(0) && (c = c.substring(1)), c ? (c = encodeURIComponent(c), c = c.replace("%2F", "/"), a += "/tree/" + encodeURIComponent(b || "master") + "/" + c) : b && "master" !== b && (a += "/tree/" + encodeURIComponent(b))), a;
};
}).filter("yesNo", function() {
return function(a) {
return a ? "Yes" : "No";
};
}).filter("valuesIn", function() {
return function(a, b) {
if (!b) return {};
var c = b.split(","), d = {};
return angular.forEach(a, function(a, b) {
c.indexOf(b) !== -1 && (d[b] = a);
}), d;
};
}).filter("valuesNotIn", function() {
return function(a, b) {
if (!b) return a;
var c = b.split(","), d = {};
return angular.forEach(a, function(a, b) {
c.indexOf(b) === -1 && (d[b] = a);
}), d;
};
}).filter("stripSHAPrefix", function() {
return function(a) {
return a ? a.replace(/^sha256:/, "") : a;
};
}).filter("limitToOrAll", [ "limitToFilter", function(a) {
return function(b, c) {
return isNaN(c) ? b : a(b, c);
};
} ]).filter("getErrorDetails", [ "gettext", "gettextCatalog", function(a, b) {
return function(c) {
var d = c.data || {};
if (d.message) return b.getString(a("Reason:")) + " " + d.message;
var e = c.status || d.status;
return e ? b.getString(a("Status:")) + " " + e : "";
};
} ]).filter("humanize", function() {
return function(a) {
return a.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/\b([A-Z]+)([A-Z])([a-z])/, "$1 $2$3").replace(/^./, function(a) {
return a.toUpperCase();
});
};
}).filter("navigateResourceURL", [ "Navigate", function(a) {
return function(b, c, d, e) {
return a.resourceURL(b, c, d, null, {
apiVersion: e
});
};
} ]).filter("navigateEventInvolvedObjectURL", [ "Navigate", function(a) {
return function(b) {
return a.resourceURL(b.involvedObject.name, b.involvedObject.kind, b.involvedObject.namespace, null, {
apiVersion: b.involvedObject.apiVersion
});
};
} ]).filter("navigateToTabURL", [ "Navigate", function(a) {
return function(b, c) {
return a.resourceURL(b, null, null, null, {
tab: c
});
};
} ]).filter("configURLForResource", [ "Navigate", function(a) {
return function(b, c) {
return a.configURLForResource(b, c);
};
} ]).filter("editResourceURL", [ "Navigate", function(a) {
return function(b, c, d) {
var e = a.resourceURL(b, c, d, "edit");
return e;
};
} ]).filter("editYamlURL", [ "Navigate", function(a) {
return function(b, c) {
return a.yamlURL(b, c);
};
} ]).filter("join", function() {
return function(a, b) {
return b || (b = ","), a.join(b);
};
}).filter("accessModes", function() {
return function(a, b) {
if (!a) return a;
var c = [];
return angular.forEach(a, function(a) {
var d, e = "long" === b;
switch (a) {
case "ReadWriteOnce":
d = e ? "RWO (Read-Write-Once)" : "Read-Write-Once";
break;

case "ReadOnlyMany":
d = e ? "ROX (Read-Only-Many)" : "Read-Only-Many";
break;

case "ReadWriteMany":
d = e ? "RWX (Read-Write-Many)" : "Read-Write-Many";
break;

default:
d = a;
}
c.push(d);
}), _.uniq(c);
};
}).filter("middleEllipses", function() {
return function(a, b, c) {
if (b < 3) return a;
if (a.length <= b) return a;
c || (c = "...");
var d = Math.floor((b - 1) / 2), e = a.slice(0, d), f = a.slice(a.length - d);
return e + c + f;
};
}).filter("isNil", function() {
return function(a) {
return null === a || void 0 === a;
};
}).filter("percent", function() {
return function(a, b) {
return null === a || void 0 === a ? a : _.round(100 * Number(a), b) + "%";
};
}).filter("filterCollection", function() {
return function(a, b) {
return a && b ? _.filter(a, b) : a;
};
}).filter("isIE", function() {
var a = navigator.userAgent, b = /msie|trident/i.test(a);
return function() {
return b;
};
}).filter("isEdge", function() {
var a = navigator.userAgent, b = /chrome.+? edge/i.test(a);
return function() {
return b;
};
}).filter("abs", function() {
return function(a) {
return Math.abs(a);
};
}).filter("encodeURIComponent", function() {
return window.encodeURIComponent;
}).filter("enableTechPreviewFeature", [ "Constants", function(a) {
return function(b) {
return _.get(a, [ "ENABLE_TECH_PREVIEW_FEATURE", b ], !1);
};
<<<<<<< f56378c1e748449074be8738ae159f02ed953303
} ]), angular.module("openshiftConsole").factory("logLinks", [ "$anchorScroll", "$document", "$location", "$window", function(a, b, c, d) {
=======
} ]), angular.module("openshiftConsole").directive("affix", [ "$window", function(a) {
return {
restrict:"AE",
scope:{
offsetTop:"@",
offsetBottom:"@"
},
link:function(a, b, c, d) {
b.affix({
offset:{
top:c.offsetTop,
bottom:c.offsetBottom
}
});
}
};
} ]), function() {
function a(a, b, c, d, e) {
var f, g, h, i, j = this, k = !1, l = [], m = [], n = !1, o = a("canI"), p = a("getErrorDetails"), q = a("humanizeKind"), r = a("orderByDisplayName"), s = function(a, b) {
if (!k) {
if (!j.form || j.form.$pristine || !j.updatedObject) return void (j.updatedObject = d.copyAndNormalize(a));
if (d.isEnvironmentEqual(a, b)) return void (j.updatedObject = d.mergeEdits(a, b));
k = !0, e.addNotification({
type:"warning",
message:"The environment variables for the " + f + " have been updated in the background.",
details:"Saving your changes may create a conflict or cause loss of data."
});
}
}, t = function() {
c.list("configmaps", {
namespace:j.apiObject.metadata.namespace
}).then(function(a) {
l = r(a.by("metadata.name")), j.valueFromObjects = l.concat(m);
});
}, u = function() {
o("secrets", "list") && c.list("secrets", {
namespace:j.apiObject.metadata.namespace
}).then(function(a) {
m = r(a.by("metadata.name")), j.valueFromObjects = l.concat(m);
});
}, v = function() {
n || (n = !0, t(), u());
}, w = function(a, c) {
f = q(a.kind), g = a.metadata.name, h = b.objectToResourceGroupVersion(a), j.canIUpdate = o(h, "update"), i ? i["finally"](function() {
s(a, c);
}) :s(a, c), j.containers = d.getContainers(j.updatedObject), j.disableValueFrom || j.ngReadonly || !j.canIUpdate || v();
};
j.$onChanges = function(a) {
a.apiObject && a.apiObject.currentValue && w(a.apiObject.currentValue, a.apiObject.previousValue);
}, j.save = function() {
var a = "save-env-error-" + g;
e.hideNotification(a), d.compact(j.updatedObject), i = c.update(h, g, j.updatedObject, {
namespace:j.updatedObject.metadata.namespace
}), i.then(function() {
e.addNotification({
type:"success",
message:"Environment variables for " + f + " " + g + " were successfully updated."
}), j.form.$setPristine();
}, function(b) {
e.addNotification({
id:a,
type:"error",
message:"An error occurred updating environment variables for " + f + " " + g + ".",
details:p(b)
});
})["finally"](function() {
i = null;
});
}, j.clearChanges = function() {
j.updatedObject = d.copyAndNormalize(j.apiObject), j.form.$setPristine(), k = !1;
};
}
angular.module("openshiftConsole").component("editEnvironmentVariables", {
controller:[ "$filter", "APIService", "DataService", "EnvironmentService", "NotificationsService", a ],
controllerAs:"$ctrl",
bindings:{
apiObject:"<",
ngReadonly:"<",
disableValueFrom:"<"
},
templateUrl:"views/directives/edit-environment-variables.html"
});
}(), angular.module("openshiftConsole").factory("logLinks", [ "$anchorScroll", "$document", "$location", "$window", function(a, b, c, d) {
>>>>>>> Create reusable edit-environment-variables component
var e = function(a) {
a ? a.scrollTop = 0 : window.scrollTo(null, 0);
}, f = function(a) {
a ? a.scrollTop = a.scrollHeight : window.scrollTo(0, document.documentElement.scrollHeight - document.documentElement.clientHeight);
}, g = function(a, b) {
if (b) return void d.open(b, "_blank");
var c = {
view: "chromeless"
};
a && a.container && (c.container = a.container), c = _.flatten([ c ]);
var e = new URI();
_.each(c, function(a) {
e.addSearch(a);
}), d.open(e.toString(), "_blank");
}, h = _.template([ "/#/discover?", "_g=(", "time:(", "from:now-1w,", "mode:relative,", "to:now", ")", ")", "&_a=(", "columns:!(kubernetes.container_name,message),", "index:'project.<%= namespace %>.<%= namespaceUid %>.*',", "query:(", "query_string:(", "analyze_wildcard:!t,", 'query:\'kubernetes.pod_name:"<%= podname %>" AND kubernetes.namespace_name:"<%= namespace %>"\'', ")", "),", "sort:!('@timestamp',desc)", ")", "#console_container_name=<%= containername %>", "&console_back_url=<%= backlink %>" ].join("")), i = function(a) {
return h(a);
};
return {
scrollTop: e,
scrollBottom: f,
chromelessLink: g,
archiveUri: i
};
} ]), function() {
var a = "javaLinkExtension";
angular.module(a, [ "openshiftConsole" ]).run([ "AuthService", "BaseHref", "DataService", "extensionRegistry", function(a, b, c, d) {
var e = [ "<div row ", 'ng-show="item.url" ', 'class="icon-row" ', 'title="Connect to container">', '<div class="icon-wrap">', '<i class="fa fa-share" aria-hidden="true"></i>', "</div>", "<div flex>", '<a ng-click="item.onClick($event)" ', 'ng-href="item.url">', "Open Java Console", "</a>", "</div>", "</div>" ].join(""), f = function(a, b, d) {
return new URI(c.url({
resource: "pods/proxy",
name: [ "https", b, d || "" ].join(":"),
namespace: a
})).segment("jolokia/");
};
d.add("container-links", _.spread(function(c, d) {
var g = _.find(c.ports || [], function(a) {
return a.name && "jolokia" === a.name.toLowerCase();
});
if (g && "Running" === _.get(d, "status.phase")) {
var h = d.status.containerStatuses, i = _.find(h, function(a) {
return a.name === c.name;
});
if (i && i.ready) {
var j = d.metadata.name, k = d.metadata.namespace, l = f(k, j, g.containerPort).toString(), m = function(d) {
d.preventDefault(), d.stopPropagation();
var e = window.location.href, f = c.name || "Untitled Container", g = a.UserStore().getToken() || "", h = new URI().path(b).segment("java").segment("").hash(g).query({
jolokiaUrl: l,
title: f,
returnTo: e
});
window.location.href = h.toString();
};
return {
type: "dom",
node: e,
onClick: m,
url: l
};
}
}
}));
} ]), hawtioPluginLoader.addModule(a);
}(), angular.module("openshiftConsole").run([ "extensionRegistry", function(a) {
a.add("nav-help-dropdown", function() {
var a = [];
if (a.push({
type: "dom",
node: '<li><a target="_blank" href="{{\'default\' | helpLink}}">Documentation</a></li>'
}), !_.get(window, "OPENSHIFT_CONSTANTS.DISABLE_SERVICE_CATALOG_LANDING_PAGE")) {
var b = _.get(window, "OPENSHIFT_CONSTANTS.GUIDED_TOURS.landing_page_tour");
b && b.enabled && b.steps && a.push({
type: "dom",
node: '<li><a href="./?startTour=true">Tour Home Page</a></li>'
});
}
return a.push({
type: "dom",
node: '<li><a href="command-line">Command Line Tools</a></li>'
}), a.push({
type: "dom",
node: '<li><a href="about">About</a></li>'
}), a;
});
} ]), angular.module("openshiftConsole").run([ "extensionRegistry", "$rootScope", "DataService", "AuthService", "gettext", "gettextCatalog", function(a, b, c, d, e, f) {
a.add("nav-user-dropdown", function() {
var a = [];
_.get(window, "OPENSHIFT_CONSTANTS.DISABLE_COPY_LOGIN_COMMAND") || a.push({
type: "dom",
node: '<li><copy-login-to-clipboard clipboard-text="oc login ' + _.escape(c.openshiftAPIBaseUrl()) + " --token=" + _.escape(d.UserStore().getToken()) + '"></copy-login-to-clipboard></li>'
});
var g = f.getString(e("Log Out"));
return b.user.fullName && b.user.fullName !== b.user.metadata.name && (g += " (" + b.user.metadata.name + ")"), a.push({
type: "dom",
node: '<li><a href="logout">' + _.escape(g) + "</a></li>"
}), a;
});
} ]), angular.module("openshiftConsole").run([ "extensionRegistry", "Constants", function(a, b) {
a.add("nav-dropdown-mobile", _.spread(function(a) {
var c = [], d = b.APP_LAUNCHER_NAVIGATION;
return _.each(d, function(a) {
var b = {
type: "dom",
node: [ '<li class="list-group-item">', '<a href="' + _.escape(a.href) + '">', '<span class="' + _.escape(a.iconClass) + ' fa-fw" aria-hidden="true"></span> ', '<span class="list-group-item-value">' + _.escape(a.title) + "</span>", "</a>", "</li>" ].join("")
};
c.push(b);
}), c = c.concat([ {
type: "dom",
node: [ '<li class="list-group-item">', "<a href=\"{{'default' | helpLink}}\">", '<span class="fa fa-book fa-fw" aria-hidden="true"></span> <span class="list-group-item-value">Documentation</span>', "</a>", "</li>" ].join("")
}, {
type: "dom",
node: [ '<li class="list-group-item">', '<a href="command-line">', '<span class="fa fa-terminal" aria-hidden="true"></span> <span class="list-group-item-value">Command Line Tools</span>', "</a>", "</li>" ].join("")
}, {
type: "dom",
node: [ '<li class="list-group-item">', '<a href="about">', '<span class="pficon pficon-info fa-fw" aria-hidden="true"></span> <span class="list-group-item-value">About</span>', "</a>", "</li>" ].join("")
}, {
type: "dom",
node: _.template([ '<li class="list-group-item">', '<a href="logout">', '<span class="pficon pficon-user fa-fw" aria-hidden="true"></span>', '<span class="list-group-item-value">Log out <span class="username"><%= userName %></span></span>', "</a>", "</li>" ].join(""))({
userName: a ? a.fullName || a.metadata.name : ""
})
} ]);
}));
} ]);