"use strict";

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
});
}
});
}, 300, {
maxWait:1500
}), ca = function() {
B.filteredDeploymentConfigsByApp = Z(B.filteredDeploymentConfigs), B.filteredReplicationControllersByApp = Z(B.filteredReplicationControllers), B.filteredDeploymentsByApp = Z(B.filteredDeployments), B.filteredReplicaSetsByApp = Z(B.filteredReplicaSets), B.filteredStatefulSetsByApp = Z(B.filteredStatefulSets), B.filteredMonopodsByApp = Z(B.filteredMonopods), B.apps = _.union(_.keys(B.filteredDeploymentConfigsByApp), _.keys(B.filteredReplicationControllersByApp), _.keys(B.filteredDeploymentsByApp), _.keys(B.filteredReplicaSetsByApp), _.keys(B.filteredStatefulSetsByApp), _.keys(B.filteredMonopodsByApp)), f.sortAppNames(B.apps), ba();
}, da = function() {
var a = _.filter(B.deploymentConfigs, function(a) {
var b = U(a);
return _.isEmpty(S.pipelinesByDeploymentConfig[b]);
});
B.deploymentConfigsNoPipeline = _.sortBy(a, "metadata.name"), B.pipelineViewHasOtherResources = !(_.isEmpty(B.deploymentConfigsNoPipeline) && _.isEmpty(B.vanillaReplicationControllers) && _.isEmpty(B.deployments) && _.isEmpty(B.vanillaReplicaSets) && _.isEmpty(B.statefulSets) && _.isEmpty(B.monopods));
}, ea = function() {
B.disableFilter = "pipeline" === B.viewBy && _.isEmpty(B.pipelineBuildConfigs);
}, fa = function(a) {
return o.getLabelSelector().select(a);
}, ga = [ "metadata.name", "spec.serviceClassName" ], ha = function(a) {
return n.filterForKeywords(a, ga, S.filterKeywords);
}, ia = function(a) {
switch (B.filterBy) {
case "label":
return fa(a);

case "name":
return ha(a);
}
return a;
}, ja = function() {
switch (B.filterBy) {
case "label":
return !o.getLabelSelector().isEmpty();

case "name":
return !_.isEmpty(S.filterKeywords);
}
}, ka = function() {
B.filteredDeploymentConfigs = ia(B.deploymentConfigs), B.filteredReplicationControllers = ia(B.vanillaReplicationControllers), B.filteredDeployments = ia(B.deployments), B.filteredReplicaSets = ia(B.vanillaReplicaSets), B.filteredStatefulSets = ia(B.statefulSets), B.filteredMonopods = ia(B.monopods), B.filteredPipelineBuildConfigs = ia(B.pipelineBuildConfigs), B.filteredServiceInstances = ia(S.orderedServiceInstances), B.filterActive = ja(), ca(), Y();
}, la = c.project + "/overview/view-by";
B.viewBy = localStorage.getItem(la) || "app", a.$watch(function() {
return B.viewBy;
}, function(a) {
localStorage.setItem(la, a), ea(), ga = "app" === B.viewBy ? [ "metadata.name", "metadata.labels.app" ] :[ "metadata.name" ], ka(), "pipeline" === B.viewBy ? o.setLabelSuggestions(Q) :o.setLabelSuggestions(P);
}), h.DISABLE_OVERVIEW_METRICS || (q.isAvailable(!0).then(function(a) {
S.showMetrics = a;
}), a.$on("metrics-connection-failed", function(a, b) {
var c = d.isAlertPermanentlyHidden("metrics-connection-failed");
c || S.alerts["metrics-connection-failed"] || (S.alerts["metrics-connection-failed"] = {
type:"warning",
message:A.getString(z("An error occurred getting metrics.")),
links:[ {
href:b.url,
label:A.getString(z("Open Metrics URL")),
target:"_blank"
}, {
href:"",
label:A.getString(z("Don't Show Me Again")),
onClick:function() {
return d.permanentlyHideAlert("metrics-connection-failed"), !0;
}
} ]
});
}));
var ma = function(a) {
return a && "Pod" === a.kind;
}, na = function(a) {
var b = V(a);
return b ? ma(a) ? [ a ] :_.get(B, [ "state", "podsByOwnerUID", b ], []) :[];
}, oa = function(a, b) {
var c = V(a);
S.notificationsByObjectUID[c] = b || {};
}, pa = function(a) {
var b = V(a);
return b ? _.get(S, [ "notificationsByObjectUID", b ], {}) :{};
}, qa = function(a) {
var b = V(a);
if (b) {
var d = na(a), e = x.getPodAlerts(d, c.project);
oa(a, e);
}
}, ra = function(a) {
_.each(a, qa);
}, sa = function(a) {
var b = U(a);
return b ? R[b] :null;
}, ta = function(a) {
var b = U(a);
return b ? _.get(B, [ "replicationControllersByDeploymentConfig", b ]) :[];
};
B.getPreviousReplicationController = function(a) {
var b = ta(a);
return _.size(b) < 2 ? null :b[1];
};
var ua = function(a) {
var b = {}, c = sa(a);
_.assign(b, x.getDeploymentStatusAlerts(a, c), x.getPausedDeploymentAlerts(a));
var d = ta(a);
_.each(d, function(a) {
var c = pa(a);
_.assign(b, c);
}), oa(a, b);
}, va = function() {
_.each(B.deploymentConfigs, ua);
}, wa = function(a) {
var b = V(a);
return b ? _.get(B, [ "replicaSetsByDeploymentUID", b ]) :{};
}, xa = function(a) {
var b = x.getPausedDeploymentAlerts(a), c = wa(a);
_.each(c, function(a) {
var c = pa(a);
_.assign(b, c);
}), oa(a, b);
}, ya = function() {
_.each(B.deployments, xa);
}, za = function() {
ra(B.replicationControllers), ra(B.replicaSets), ra(B.statefulSets), ra(B.monopods);
}, Aa = _.debounce(function() {
a.$evalAsync(function() {
za(), va(), ya();
});
}, 500), Ba = function(a) {
_.isEmpty(a) || (o.addLabelSuggestionsFromResources(a, P), "pipeline" !== B.viewBy && o.setLabelSuggestions(P));
}, Ca = function(a) {
_.isEmpty(a) || (o.addLabelSuggestionsFromResources(a, Q), "pipeline" === B.viewBy && o.setLabelSuggestions(Q));
}, Da = function(a) {
return "Succeeded" !== a.status.phase && "Failed" !== a.status.phase && (!N(a, "openshift.io/deployer-pod-for.name") && (!H(a, "openshift.io/build.name") && "slave" !== N(a, "jenkins")));
}, Ea = function() {
S.podsByOwnerUID = u.groupByOwnerUID(B.pods), B.monopods = _.filter(S.podsByOwnerUID[""], Da);
}, Fa = function(a) {
if (_.get(a, "status.replicas")) return !0;
var b = H(a, "deploymentConfig");
return !b || J(a);
}, Ga = function(a) {
return H(a, "deploymentConfig");
}, Ha = function() {
if (B.deploymentConfigs && B.replicationControllers) {
var a = [];
B.replicationControllersByDeploymentConfig = {}, B.currentByDeploymentConfig = {}, R = {};
var b = {}, c = {};
_.each(B.replicationControllers, function(d) {
var e = Ga(d) || "";
(!e || !B.deploymentConfigs[e] && _.get(d, "status.replicas")) && a.push(d);
var f = R[e];
f && !M(d, f) || (R[e] = d);
var g;
"Complete" === H(d, "deploymentStatus") && (g = b[e], g && !M(d, g) || (b[e] = d)), Fa(d) && _.set(c, [ e, d.metadata.name ], d);
}), _.each(b, function(a, b) {
_.set(c, [ b, a.metadata.name ], a);
}), _.each(c, function(a, b) {
var c = j.sortByDeploymentVersion(a, !0);
B.replicationControllersByDeploymentConfig[b] = c, B.currentByDeploymentConfig[b] = _.head(c);
}), B.vanillaReplicationControllers = _.sortBy(a, "metadata.name"), va();
}
}, Ia = function(a, b) {
if (_.get(a, "status.replicas")) return !0;
var c = j.getRevision(a);
return !c || !!b && j.getRevision(b) === c;
}, Ja = function() {
B.replicaSets && F && (B.replicaSetsByDeploymentUID = t.groupByControllerUID(B.replicaSets), B.currentByDeploymentUID = {}, _.each(B.replicaSetsByDeploymentUID, function(a, b) {
if (b) {
var c = F[b], d = _.filter(a, function(a) {
return Ia(a, c);
}), e = j.sortByRevision(d);
B.replicaSetsByDeploymentUID[b] = e, B.currentByDeploymentUID[b] = _.head(e);
}
}), B.vanillaReplicaSets = _.sortBy(B.replicaSetsByDeploymentUID[""], "metadata.name"), ya());
}, Ka = {}, La = function(a) {
a && S.allServices && _.each(a, function(a) {
var b = [], c = V(a), d = O(a);
_.each(Ka, function(a, c) {
a.matches(d) && b.push(S.allServices[c]);
}), S.servicesByObjectUID[c] = _.sortBy(b, "metadata.name");
});
}, Ma = function() {
if (S.allServices) {
Ka = _.mapValues(S.allServices, function(a) {
return new LabelSelector(a.spec.selector);
});
var a = [ B.deploymentConfigs, B.vanillaReplicationControllers, B.deployments, B.vanillaReplicaSets, B.statefulSets, B.monopods ];
_.each(a, La), ba();
}
}, Na = function() {
var a = y.groupByService(B.routes, !0);
S.routesByService = _.mapValues(a, y.sortRoutesByScore), ba();
}, Oa = function() {
S.hpaByResource = k.groupHPAs(B.horizontalPodAutoscalers);
}, Pa = function(a) {
var b = I(a), c = B.buildConfigs[b];
if (c) {
B.recentPipelinesByBuildConfig[b] = B.recentPipelinesByBuildConfig[b] || [], B.recentPipelinesByBuildConfig[b].push(a);
var d = g.usesDeploymentConfigs(c);
_.each(d, function(b) {
S.recentPipelinesByDeploymentConfig[b] = S.recentPipelinesByDeploymentConfig[b] || [], S.recentPipelinesByDeploymentConfig[b].push(a);
}), da();
}
}, Qa = {}, Ra = function() {
Qa = g.groupBuildConfigsByOutputImage(B.buildConfigs);
}, Sa = function(a) {
var b = V(a);
if (b) return _.get(S, [ "buildConfigsByObjectUID", b ], []);
}, Ta = function(a) {
var b = [], c = Sa(a);
_.each(c, function(a) {
var c = _.get(S, [ "recentBuildsByBuildConfig", a.metadata.name ], []);
b = b.concat(c);
});
var d = U(a);
_.set(S, [ "recentBuildsByDeploymentConfig", d ], b);
}, Ua = function(a, b) {
var c = V(b);
c && _.set(S, [ "buildConfigsByObjectUID", c ], a);
}, Va = function() {
var a = [];
B.deploymentConfigsByPipeline = {}, S.pipelinesByDeploymentConfig = {}, _.each(B.buildConfigs, function(b) {
if (L(b)) {
a.push(b);
var c = g.usesDeploymentConfigs(b), d = U(b);
_.set(B, [ "deploymentConfigsByPipeline", d ], c), _.each(c, function(a) {
S.pipelinesByDeploymentConfig[a] = S.pipelinesByDeploymentConfig[a] || [], S.pipelinesByDeploymentConfig[a].push(b);
});
}
}), B.pipelineBuildConfigs = _.sortBy(a, "metadata.name"), da(), Ca(B.pipelineBuildConfigs), ea();
}, Wa = function() {
S.buildConfigsByObjectUID = {}, _.each(B.deploymentConfigs, function(a) {
var b = [], c = _.get(a, "spec.triggers");
_.each(c, function(c) {
var d = _.get(c, "imageChangeParams.from");
if (d) {
var e = K(d, a.metadata.namespace), f = Qa[e];
_.isEmpty(f) || (b = b.concat(f));
}
}), b = _.sortBy(b, "metadata.name"), Ua(b, a), Ta(a);
});
}, Xa = function() {
Va(), Wa();
}, Ya = function() {
_.each(B.deploymentConfigs, Ta);
}, Za = function() {
if (S.builds && B.buildConfigs) {
B.recentPipelinesByBuildConfig = {}, S.recentBuildsByBuildConfig = {}, S.recentPipelinesByDeploymentConfig = {};
var a = {};
_.each(g.interestingBuilds(S.builds), function(b) {
var c = I(b);
L(b) ? Pa(b) :(a[c] = a[c] || [], a[c].push(b));
}), B.recentPipelinesByBuildConfig = _.mapValues(B.recentPipelinesByBuildConfig, function(a) {
return g.sortBuilds(a, !0);
}), S.recentPipelinesByDeploymentConfig = _.mapValues(S.recentPipelinesByDeploymentConfig, function(a) {
return g.sortBuilds(a, !0);
}), S.recentBuildsByBuildConfig = _.mapValues(a, function(a) {
return g.sortBuilds(a, !0);
}), Ya();
}
}, $a = function() {
x.setGenericQuotaWarning(S.quotas, S.clusterQuotas, c.project, S.alerts);
};
B.clearFilter = function() {
o.clear(), B.filterText = "";
}, a.$watch(function() {
return B.filterText;
}, _.debounce(function(b, c) {
b !== c && (S.filterKeywords = n.generateKeywords(b), a.$evalAsync(ka));
}, 50, {
maxWait:250
})), a.$watch(function() {
return B.filterBy;
}, function(a, b) {
a !== b && (B.clearFilter(), ka());
}), o.onActiveFiltersChanged(function() {
a.$evalAsync(ka);
}), B.startBuild = g.startBuild;
var _a = _.debounce(function(a) {
i.list("secrets", a, null, {
errorNotification:!1
}).then(function(a) {
S.secrets = a.by("metadata.name");
});
}, 300), ab = function() {
if (S.bindingsByApplicationUID = {}, S.applicationsByBinding = {}, S.deleteableBindingsByApplicationUID = {}, !_.isEmpty(S.bindings)) {
var a = [ B.deployments, B.deploymentConfigs, B.vanillaReplicationControllers, B.vanillaReplicaSets, B.statefulSets ];
if (!_.some(a, function(a) {
return !a;
})) {
var b = {};
_.each(S.bindings, function(a) {
var c = _.get(a, "spec.alphaPodPresetTemplate.selector");
c && (b[a.metadata.name] = new LabelSelector(c));
}), _.each(a, function(a) {
_.each(a, function(a) {
var c = V(a), d = new LabelSelector(_.get(a, "spec.selector"));
S.bindingsByApplicationUID[c] = [], S.deleteableBindingsByApplicationUID[c] = [], _.each(b, function(b, e) {
b.covers(d) && (S.bindingsByApplicationUID[c].push(S.bindings[e]), _.get(S.bindings[e], "metadata.deletionTimestamp") || S.deleteableBindingsByApplicationUID[c].push(S.bindings[e]), S.applicationsByBinding[e] = S.applicationsByBinding[e] || [], S.applicationsByBinding[e].push(a));
});
});
}), B.bindingsByInstanceRef = _.reduce(B.bindingsByInstanceRef, function(a, b, c) {
return a[c] = _.sortBy(b, function(a) {
var b = _.get(S.applicationsByBinding, [ a.metadata.name ]), c = _.get(_.first(b), [ "metadata", "name" ]);
return c || a.metadata.name;
}), a;
}, {});
}
}
}, bb = function() {
return S.serviceInstances || S.serviceClasses ? (S.bindableServiceInstances = _.filter(S.serviceInstances, function(a) {
return w.isServiceBindable(a, S.serviceClasses);
}), void (S.orderedServiceInstances = _.sortByAll(S.serviceInstances, function(a) {
return _.get(S.serviceClasses, [ a.spec.serviceClassName, "externalMetadata", "displayName" ]) || a.spec.serviceClassName;
}, function(a) {
return _.get(a, "metadata.name", "");
}))) :void (S.bindableServiceInstances = null);
}, cb = [];
v.get(c.project).then(_.spread(function(c, d) {
S.project = a.project = c, S.context = d;
var e = function() {
B.pods && m.fetchReferencedImageStreamImages(B.pods, S.imagesByDockerReference, S.imageStreamImageRefByDockerReference, d);
};
cb.push(i.watch("pods", d, function(a) {
B.pods = a.by("metadata.name"), Ea(), e(), Aa(), La(B.monopods), ra(B.monopods), Ba(B.monopods), ka(), p.log("pods (subscribe)", B.pods);
})), cb.push(i.watch("replicationcontrollers", d, function(a) {
B.replicationControllers = a.by("metadata.name"), Ha(), La(B.vanillaReplicationControllers), La(B.monopods), ra(B.vanillaReplicationControllers), Ba(B.vanillaReplicationControllers), ab(), ka(), p.log("replicationcontrollers (subscribe)", B.replicationControllers);
})), cb.push(i.watch("deploymentconfigs", d, function(a) {
B.deploymentConfigs = a.by("metadata.name"), Ha(), La(B.deploymentConfigs), La(B.vanillaReplicationControllers), Ba(B.deploymentConfigs), ya(), Xa(), Ya(), ab(), ka(), p.log("deploymentconfigs (subscribe)", B.deploymentConfigs);
})), cb.push(i.watch({
group:"extensions",
resource:"replicasets"
}, d, function(a) {
B.replicaSets = a.by("metadata.name"), Ja(), La(B.vanillaReplicaSets), La(B.monopods), ra(B.vanillaReplicaSets), Ba(B.vanillaReplicaSets), ab(), ka(), p.log("replicasets (subscribe)", B.replicaSets);
})), cb.push(i.watch({
group:"extensions",
resource:"deployments"
}, d, function(a) {
F = a.by("metadata.uid"), B.deployments = _.sortBy(F, "metadata.name"), Ja(), La(B.deployments), La(B.vanillaReplicaSets), Ba(B.deployments), ab(), ka(), p.log("deployments (subscribe)", B.deploymentsByUID);
})), cb.push(i.watch("builds", d, function(a) {
S.builds = a.by("metadata.name"), Za(), p.log("builds (subscribe)", S.builds);
})), cb.push(i.watch({
group:"apps",
resource:"statefulsets"
}, d, function(a) {
B.statefulSets = a.by("metadata.name"), La(B.statefulSets), La(B.monopods), ra(B.statefulSets), Ba(B.statefulSets), ab(), ka(), p.log("statefulsets (subscribe)", B.statefulSets);
}, {
poll:C,
pollInterval:D
})), cb.push(i.watch("services", d, function(a) {
S.allServices = a.by("metadata.name"), Ma(), p.log("services (subscribe)", S.allServices);
}, {
poll:C,
pollInterval:D
})), cb.push(i.watch("routes", d, function(a) {
B.routes = a.by("metadata.name"), Na(), p.log("routes (subscribe)", B.routes);
}, {
poll:C,
pollInterval:D
})), cb.push(i.watch("buildConfigs", d, function(a) {
B.buildConfigs = a.by("metadata.name"), Ra(), Xa(), Za(), ka(), p.log("buildconfigs (subscribe)", B.buildConfigs);
}, {
poll:C,
pollInterval:D
})), cb.push(i.watch({
group:"autoscaling",
resource:"horizontalpodautoscalers",
version:"v1"
}, d, function(a) {
B.horizontalPodAutoscalers = a.by("metadata.name"), Oa(), p.log("autoscalers (subscribe)", B.horizontalPodAutoscalers);
}, {
poll:C,
pollInterval:D
})), cb.push(i.watch("imagestreams", d, function(a) {
G = a.by("metadata.name"), m.buildDockerRefMapForImageStreams(G, S.imageStreamImageRefByDockerReference), e(), p.log("imagestreams (subscribe)", G);
}, {
poll:C,
pollInterval:D
})), cb.push(i.watch("resourcequotas", d, function(a) {
S.quotas = a.by("metadata.name"), $a();
}, {
poll:!0,
pollInterval:D
})), cb.push(i.watch("appliedclusterresourcequotas", d, function(a) {
S.clusterQuotas = a.by("metadata.name"), $a();
}, {
poll:!0,
pollInterval:D
}));
var f = b("canI");
E && f({
resource:"instances",
group:"servicecatalog.k8s.io"
}, "watch") && cb.push(i.watch({
group:"servicecatalog.k8s.io",
resource:"instances"
}, d, function(a) {
S.serviceInstances = a.by("metadata.name"), _.each(S.serviceInstances, function(a) {
var b = x.getServiceInstanceAlerts(a);
oa(a, b);
}), bb(), Ba(S.serviceInstances), ka();
}, {
poll:C,
pollInterval:D
})), E && f({
resource:"bindings",
group:"servicecatalog.k8s.io"
}, "watch") && cb.push(i.watch({
group:"servicecatalog.k8s.io",
resource:"bindings"
}, d, function(a) {
S.bindings = a.by("metadata.name"), B.bindingsByInstanceRef = _.groupBy(S.bindings, "spec.instanceRef.name"), ab(), _a(d);
}, {
poll:C,
pollInterval:D
})), i.list("limitranges", d, function(a) {
S.limitRanges = a.by("metadata.name");
}), E && f({
resource:"instances",
group:"servicecatalog.k8s.io"
}, "watch") && i.list({
group:"servicecatalog.k8s.io",
resource:"serviceclasses"
}, d, function(a) {
S.serviceClasses = a.by("metadata.name"), bb(), ka();
});
var g = h.SAMPLE_PIPELINE_TEMPLATE;
g && i.get("templates", g.name, {
namespace:g.namespace
}, {
errorNotification:!1
}).then(function(b) {
B.samplePipelineURL = r.createFromTemplateURL(b, a.projectName);
}), a.$on("$destroy", function() {
i.unwatchAll(cb), $(window).off("resize.overview", T);
});
}));
}

var gettext = function(a) {
return a;
};

Noop(), angular.isUndefined(window.OPENSHIFT_CONSTANTS) && (window.OPENSHIFT_CONSTANTS = {}), angular.extend(window.OPENSHIFT_CONSTANTS, {
HELP_BASE_URL:"https://docs.openshift.org/latest/",
HELP:{
cli:"cli_reference/index.html",
get_started_cli:"cli_reference/get_started_cli.html",
basic_cli_operations:"cli_reference/basic_cli_operations.html",
"build-triggers":"dev_guide/builds/triggering_builds.html",
webhooks:"dev_guide/builds/triggering_builds.html#webhook-triggers",
new_app:"dev_guide/application_lifecycle/new_app.html",
"start-build":"dev_guide/builds/basic_build_operations.html#starting-a-build",
"deployment-operations":"cli_reference/basic_cli_operations.html#build-and-deployment-cli-operations",
"route-types":"architecture/core_concepts/routes.html#route-types",
persistent_volumes:"dev_guide/persistent_volumes.html",
compute_resources:"dev_guide/compute_resources.html",
pod_autoscaling:"dev_guide/pod_autoscaling.html",
application_health:"dev_guide/application_health.html",
source_secrets:"dev_guide/builds/build_inputs.html#using-secrets-during-build",
git_secret:"dev_guide/builds/build_inputs.html#source-clone-secrets",
pull_secret:"dev_guide/managing_images.html#using-image-pull-secrets",
managing_secrets:"dev_guide/service_accounts.html#managing-allowed-secrets",
creating_secrets:"dev_guide/secrets.html#creating-secrets",
storage_classes:"install_config/persistent_storage/dynamically_provisioning_pvs.html",
selector_label:"install_config/persistent_storage/selector_label_binding.html",
rolling_strategy:"dev_guide/deployments/deployment_strategies.html#rolling-strategy",
recreate_strategy:"dev_guide/deployments/deployment_strategies.html#recreate-strategy",
custom_strategy:"dev_guide/deployments/deployment_strategies.html#custom-strategy",
lifecycle_hooks:"dev_guide/deployments/deployment_strategies.html#lifecycle-hooks",
new_pod_exec:"dev_guide/deployments/deployment_strategies.html#pod-based-lifecycle-hook",
authorization:"architecture/additional_concepts/authorization.html",
roles:"architecture/additional_concepts/authorization.html#roles",
service_accounts:"dev_guide/service_accounts.html",
users_and_groups:"architecture/additional_concepts/authentication.html#users-and-groups",
"pipeline-builds":"architecture/core_concepts/builds_and_image_streams.html#pipeline-build",
"pipeline-plugin":"using_images/other_images/jenkins.html#openshift-origin-pipeline-plug-in",
quota:"dev_guide/compute_resources.html",
"config-maps":"dev_guide/configmaps.html",
secrets:"dev_guide/secrets.html",
deployments:"dev_guide/deployments/how_deployments_work.html",
pods:"architecture/core_concepts/pods_and_services.html#pods",
services:"architecture/core_concepts/pods_and_services.html#services",
routes:"architecture/core_concepts/routes.html",
builds:"architecture/core_concepts/builds_and_image_streams.html#builds",
"image-streams":"architecture/core_concepts/builds_and_image_streams.html#image-streams",
storage:"architecture/additional_concepts/storage.html",
"build-hooks":"dev_guide/builds/build_hooks.html",
"default":"welcome/index.html"
},
CLI:{
"Latest Release":"https://github.com/openshift/origin/releases/latest"
},
DEFAULT_HPA_CPU_TARGET_PERCENT:80,
DISABLE_OVERVIEW_METRICS:!1,
DISABLE_CUSTOM_METRICS:!1,
DISABLE_WILDCARD_ROUTES:!0,
DISABLE_CONFIRM_ON_EXIT:!1,
AVAILABLE_KINDS_BLACKLIST:[],
ENABLE_TECH_PREVIEW_FEATURE:{
service_catalog_landing_page:!1,
template_service_broker:!1,
pod_presets:!1
},
SAMPLE_PIPELINE_TEMPLATE:{
name:"jenkins-pipeline-example",
namespace:"openshift"
},
CREATE_FROM_URL_WHITELIST:[ "openshift" ],
SECURITY_CHECK_WHITELIST:[ {
resource:"buildconfigs",
group:""
}, {
resource:"buildconfigs",
group:"build.openshift.io"
}, {
resource:"builds",
group:""
}, {
resource:"builds",
group:"build.openshift.io"
}, {
resource:"configmaps",
group:""
}, {
resource:"daemonsets",
group:"extensions"
}, {
resource:"deployments",
group:"apps"
}, {
resource:"deployments",
group:"extensions"
}, {
resource:"deploymentconfigs",
group:""
}, {
resource:"deploymentconfigs",
group:"apps.openshift.io"
}, {
resource:"endpoints",
group:""
}, {
resource:"events",
group:""
}, {
resource:"horizontalpodautoscalers",
group:"autoscaling"
}, {
resource:"horizontalpodautoscalers",
group:"extensions"
}, {
resource:"imagestreamimages",
group:""
}, {
resource:"imagestreamimages",
group:"image.openshift.io"
}, {
resource:"imagestreams",
group:""
}, {
resource:"imagestreams",
group:"image.openshift.io"
}, {
resource:"imagestreamtags",
group:""
}, {
resource:"imagestreamtags",
group:"image.openshift.io"
}, {
resource:"ingresses",
group:"extensions"
}, {
resource:"jobs",
group:"batch"
}, {
resource:"persistentvolumeclaims",
group:""
}, {
resource:"pods",
group:""
}, {
resource:"podtemplates",
group:""
}, {
resource:"replicasets",
group:"extensions"
}, {
resource:"replicationcontrollers",
group:""
}, {
resource:"routes",
group:""
}, {
resource:"routes",
group:"route.openshift.io"
}, {
resource:"secrets",
group:""
}, {
resource:"serviceaccounts",
group:""
}, {
resource:"services",
group:""
}, {
resource:"statefulsets",
group:"apps"
} ],
PROJECT_NAVIGATION:[ {
label:gettext("Overview"),
iconClass:"fa fa-dashboard",
href:"/overview"
}, {
label:gettext("Applications"),
iconClass:"fa fa-cubes",
secondaryNavSections:[ {
items:[ {
label:gettext("Deployments"),
href:"/browse/deployments",
prefixes:[ "/browse/deployment/", "/browse/dc/", "/browse/rs/", "/browse/rc/" ]
}, {
label:gettext("Stateful Sets"),
href:"/browse/stateful-sets",
prefixes:[ "/browse/stateful-sets/" ]
}, {
label:gettext("Pods"),
href:"/browse/pods",
prefixes:[ "/browse/pods/" ]
}, {
label:gettext("Services"),
href:"/browse/services",
prefixes:[ "/browse/services/" ]
}, {
label:gettext("Routes"),
href:"/browse/routes",
prefixes:[ "/browse/routes/" ]
} ]
} ]
}, {
label:gettext("Builds"),
iconClass:"pficon pficon-build",
secondaryNavSections:[ {
items:[ {
label:gettext("Builds"),
href:"/browse/builds",
prefixes:[ "/browse/builds/", "/browse/builds-noconfig/" ]
}, {
label:gettext("Pipelines"),
href:"/browse/pipelines",
prefixes:[ "/browse/pipelines/" ]
}, {
label:gettext("Images"),
href:"/browse/images",
prefixes:[ "/browse/images/" ]
} ]
} ]
}, {
label:gettext("Resources"),
iconClass:"fa fa-files-o",
secondaryNavSections:[ {
items:[ {
label:gettext("Quota"),
href:"/quota"
}, {
label:gettext("Membership"),
href:"/membership",
canI:{
resource:"rolebindings",
verb:"list"
}
}, {
label:gettext("Config Maps"),
href:"/browse/config-maps",
prefixes:[ "/browse/config-maps/" ]
}, {
label:gettext("Secrets"),
href:"/browse/secrets",
prefixes:[ "/browse/secrets/" ],
canI:{
resource:"secrets",
verb:"list"
}
}, {
label:gettext("Other Resources"),
href:"/browse/other"
} ]
} ]
}, {
label:gettext("Storage"),
iconClass:"pficon pficon-container-node",
href:"/browse/storage",
prefixes:[ "/browse/storage/" ]
}, {
label:gettext("Monitoring"),
iconClass:"pficon pficon-screen",
href:"/monitoring",
prefixes:[ "/browse/events" ]
} ],
CATALOG_CATEGORIES:[ {
id:"eams",
label:"数人云微服务治理",
items:[ {
id:"octopus",
categoryAliases:[ "octopus" ],
label:"Octopus",
iconClass:"font-icon icon-octopus-m",
description:gettext("")
}, {
id:"squid",
categoryAliases:[ "squid" ],
label:"Squid",
iconClass:"font-icon icon-squid-m",
description:gettext("")
}, {
id:"hawk",
categoryAliases:[ "hawk" ],
label:"Hawk",
iconClass:"font-icon icon-hawk-m",
description:gettext("")
} ]
}, {
id:"dmos",
label:"数人云基础服务",
items:[ {
id:"monitor",
categoryAliases:[ "monitor" ],
label:"Monitor",
iconClass:"font-icon icon-monitor-m",
description:gettext("")
} ]
}, {
id:"languages",
label:gettext("Languages"),
iconClassDefault:"fa fa-code",
items:[ {
id:"java",
label:gettext("Java"),
iconClass:"font-icon icon-openjdk",
subcategories:[ {
id:"java-subcategories",
items:[ {
id:"amq",
label:gettext("Red Hat JBoss A-MQ")
}, {
id:"processserver",
label:gettext("Red Hat JBoss BPM Suite")
}, {
id:"decisionserver",
label:gettext("Red Hat JBoss BRMS")
}, {
id:"datagrid",
label:gettext("Red Hat JBoss Data Grid")
}, {
id:"eap",
label:gettext("Red Hat JBoss EAP")
}, {
id:"jboss-fuse",
label:gettext("Red Hat JBoss Fuse")
}, {
id:"tomcat",
label:gettext("Red Hat JBoss Web Server (Tomcat)")
}, {
id:"sso",
label:gettext("Red Hat Single Sign-On")
}, {
id:"wildfly",
label:gettext("WildFly")
} ]
} ]
}, {
id:"javascript",
categoryAliases:[ "nodejs", "js" ],
label:gettext("JavaScript"),
iconClass:"font-icon icon-js"
}, {
id:"dotnet",
label:gettext(".NET"),
iconClass:"font-icon icon-dotnet"
}, {
id:"perl",
label:gettext("Perl"),
iconClass:"font-icon icon-perl"
}, {
id:"php",
label:gettext("PHP"),
iconClass:"font-icon icon-php"
}, {
id:"python",
label:gettext("Python"),
iconClass:"font-icon icon-python"
}, {
id:"ruby",
label:gettext("Ruby"),
iconClass:"font-icon icon-ruby"
}, {
id:"Golang",
categoryAliases:[ "go" ],
label:gettext("Go"),
iconClass:"font-icon icon-go-gopher"
} ]
}, {
id:"technologies",
label:gettext("Technologies"),
items:[ {
id:"business-process-services",
categoryAliases:[ "decisionserver", "processserver" ],
label:gettext("Business Process Services"),
description:gettext("Model, automate, and orchestrate business processes across applications, services, and data.")
}, {
id:"ci-cd",
categoryAliases:[ "jenkins" ],
label:gettext("Continuous Integration & Deployment"),
description:gettext("Automate the build, test, and deployment of your application with each new code revision.")
}, {
id:"datastore",
categoryAliases:[ "database", "datagrid" ],
label:gettext("Data Stores"),
description:gettext("Store and manage collections of data.")
}, {
id:"messaging",
label:gettext("Messaging"),
description:gettext("Facilitate communication between applications and distributed processes with a messaging server.")
}, {
id:"integration",
label:gettext("Integration"),
description:gettext("Connect with other applications and data to enhance functionality without duplication.")
}, {
id:"single-sign-on",
categoryAliases:[ "sso" ],
label:gettext("Single Sign-On"),
description:gettext("A centralized authentication server for users to log in, log out, register, and manage user accounts for applications and RESTful web services.")
}, {
id:"",
label:gettext("Uncategorized"),
description:""
} ]
} ],
SAAS_OFFERINGS:[]
}), angular.module("i18n", [ "gettext", "angularMoment" ]).run([ "$window", "gettextCatalog", "amMoment", function(a, b, c) {
function d() {
if (4 === g.readyState) if (200 === g.status) {
var a = JSON.parse(g.response);
for (var c in a) b.setStrings(c, a[c]);
} else console.error("Problem retrieving language data");
}
function e(a) {
null !== g ? (g.onreadystatechange = d, g.open("GET", a, !1), g.send(null)) :console.error("Your browser does not support XMLHttpRequest.");
}
b.debug = !1;
var f = a.OPENSHIFT_LANG, g = new XMLHttpRequest();
"en" !== f && (e("languages/" + f + ".json"), b.setCurrentLanguage(f), c.changeLocale(f.toLowerCase()));
} ]), angular.module("openshiftConsole", [ "ngAnimate", "ngCookies", "ngResource", "ngRoute", "ngSanitize", "kubernetesUI", "registryUI.images", "ui.bootstrap", "patternfly.charts", "patternfly.navigation", "patternfly.sort", "openshiftConsoleTemplates", "ui.ace", "extension-registry", "as.sortable", "ui.select", "angular-inview", "angularMoment", "ab-base64", "gettext", "i18n", "openshiftCommonServices", "openshiftCommonUI", "webCatalog" ]).config([ "$routeProvider", function(a) {
var b, c = {
templateUrl:"views/projects.html",
controller:"ProjectsController"
};
_.get(window, "OPENSHIFT_CONSTANTS.ENABLE_TECH_PREVIEW_FEATURE.service_catalog_landing_page") ? (b = {
templateUrl:"views/landing-page.html",
controller:"LandingPageController",
reloadOnSearch:!1
}, a.when("/projects", c)) :(b = c, a.when("/projects", {
redirectTo:"/"
})), a.when("/", b).when("/create-project", {
templateUrl:"views/create-project.html",
controller:"CreateProjectController"
}).when("/project/:project", {
redirectTo:function(a) {
return "/project/" + encodeURIComponent(a.project) + "/overview";
}
}).when("/project/:project/overview", {
templateUrl:"views/overview.html",
controller:"OverviewController",
controllerAs:"overview",
reloadOnSearch:!1
}).when("/project/:project/quota", {
templateUrl:"views/quota.html",
controller:"QuotaController"
}).when("/project/:project/monitoring", {
templateUrl:"views/monitoring.html",
controller:"MonitoringController",
reloadOnSearch:!1
}).when("/project/:project/membership", {
templateUrl:"views/membership.html",
controller:"MembershipController",
reloadOnSearch:!1
}).when("/project/:project/browse", {
redirectTo:function(a) {
return "/project/" + encodeURIComponent(a.project) + "/browse/pods";
}
}).when("/project/:project/browse/builds", {
templateUrl:"views/builds.html",
controller:"BuildsController",
reloadOnSearch:!1
}).when("/project/:project/browse/pipelines", {
templateUrl:"views/pipelines.html",
controller:"PipelinesController"
}).when("/project/:project/browse/builds/:buildconfig", {
templateUrl:"views/browse/build-config.html",
controller:"BuildConfigController",
reloadOnSearch:!1
}).when("/project/:project/browse/pipelines/:buildconfig", {
templateUrl:"views/browse/build-config.html",
controller:"BuildConfigController",
resolve:{
isPipeline:[ "$route", function(a) {
a.current.params.isPipeline = !0;
} ]
}
}).when("/project/:project/edit/yaml", {
templateUrl:"views/edit/yaml.html",
controller:"EditYAMLController"
}).when("/project/:project/edit/builds/:buildconfig", {
templateUrl:"views/edit/build-config.html",
controller:"EditBuildConfigController"
}).when("/project/:project/edit/pipelines/:buildconfig", {
templateUrl:"views/edit/build-config.html",
controller:"EditBuildConfigController",
resolve:{
isPipeline:[ "$route", function(a) {
a.current.params.isPipeline = !0;
} ]
},
reloadOnSearch:!1
}).when("/project/:project/browse/builds/:buildconfig/:build", {
templateUrl:function(a) {
return "chromeless" === a.view ? "views/logs/chromeless-build-log.html" :"views/browse/build.html";
},
controller:"BuildController",
reloadOnSearch:!1
}).when("/project/:project/browse/pipelines/:buildconfig/:build", {
templateUrl:"views/browse/build.html",
controller:"BuildController",
resolve:{
isPipeline:[ "$route", function(a) {
a.current.params.isPipeline = !0;
} ]
},
reloadOnSearch:!1
}).when("/project/:project/browse/builds-noconfig/:build", {
templateUrl:"views/browse/build.html",
controller:"BuildController",
reloadOnSearch:!1
}).when("/project/:project/browse/pipelines-noconfig/:build", {
templateUrl:"views/browse/build.html",
controller:"BuildController",
resolve:{
isPipeline:[ "$route", function(a) {
a.current.params.isPipeline = !0;
} ]
},
reloadOnSearch:!1
}).when("/project/:project/browse/deployments", {
templateUrl:"views/deployments.html",
controller:"DeploymentsController",
reloadOnSearch:!1
}).when("/project/:project/browse/deployment/:deployment", {
templateUrl:"views/browse/deployment.html",
controller:"DeploymentController",
reloadOnSearch:!1
}).when("/project/:project/browse/dc/:deploymentconfig", {
templateUrl:"views/browse/deployment-config.html",
controller:"DeploymentConfigController",
reloadOnSearch:!1
}).when("/project/:project/edit/dc/:deploymentconfig", {
templateUrl:"views/edit/deployment-config.html",
controller:"EditDeploymentConfigController"
}).when("/project/:project/browse/stateful-sets/", {
templateUrl:"views/browse/stateful-sets.html",
controller:"StatefulSetsController",
reloadOnSearch:!1
}).when("/project/:project/browse/stateful-sets/:statefulset", {
templateUrl:"views/browse/stateful-set.html",
controller:"StatefulSetController",
reloadOnSearch:!1
}).when("/project/:project/browse/rs/:replicaSet", {
templateUrl:"views/browse/replica-set.html",
resolve:{
kind:function() {
return "ReplicaSet";
}
},
controller:"ReplicaSetController",
reloadOnSearch:!1
}).when("/project/:project/browse/rc/:replicaSet", {
templateUrl:function(a) {
return "chromeless" === a.view ? "views/logs/chromeless-deployment-log.html" :"views/browse/replica-set.html";
},
resolve:{
kind:function() {
return "ReplicationController";
}
},
controller:"ReplicaSetController",
reloadOnSearch:!1
}).when("/project/:project/browse/events", {
templateUrl:"views/events.html",
controller:"EventsController"
}).when("/project/:project/browse/images", {
templateUrl:"views/images.html",
controller:"ImagesController",
reloadOnSearch:!1
}).when("/project/:project/browse/images/:imagestream", {
templateUrl:"views/browse/imagestream.html",
controller:"ImageStreamController"
}).when("/project/:project/browse/images/:imagestream/:tag", {
templateUrl:"views/browse/image.html",
controller:"ImageController",
reloadOnSearch:!1
}).when("/project/:project/browse/pods", {
templateUrl:"views/pods.html",
controller:"PodsController",
reloadOnSearch:!1
}).when("/project/:project/browse/pods/:pod", {
templateUrl:function(a) {
return "chromeless" === a.view ? "views/logs/chromeless-pod-log.html" :"views/browse/pod.html";
},
controller:"PodController",
reloadOnSearch:!1
}).when("/project/:project/browse/services", {
templateUrl:"views/services.html",
controller:"ServicesController",
reloadOnSearch:!1
}).when("/project/:project/browse/services/:service", {
templateUrl:"views/browse/service.html",
controller:"ServiceController",
reloadOnSearch:!1
}).when("/project/:project/browse/storage", {
templateUrl:"views/storage.html",
controller:"StorageController",
reloadOnSearch:!1
}).when("/project/:project/browse/secrets/:secret", {
templateUrl:"views/browse/secret.html",
controller:"SecretController",
reloadOnSearch:!1
}).when("/project/:project/browse/secrets", {
templateUrl:"views/secrets.html",
controller:"SecretsController",
reloadOnSearch:!1
}).when("/project/:project/create-secret", {
templateUrl:"views/create-secret.html",
controller:"CreateSecretController"
}).when("/project/:project/browse/config-maps", {
templateUrl:"views/browse/config-maps.html",
controller:"ConfigMapsController",
reloadOnSearch:!1
}).when("/project/:project/browse/config-maps/:configMap", {
templateUrl:"views/browse/config-map.html",
controller:"ConfigMapController"
}).when("/project/:project/create-config-map", {
templateUrl:"views/create-config-map.html",
controller:"CreateConfigMapController"
}).when("/project/:project/edit/config-maps/:configMap", {
templateUrl:"views/edit/config-map.html",
controller:"EditConfigMapController"
}).when("/project/:project/browse/other", {
templateUrl:"views/other-resources.html",
controller:"OtherResourcesController",
reloadOnSearch:!1
}).when("/project/:project/browse/persistentvolumeclaims/:pvc", {
templateUrl:"views/browse/persistent-volume-claim.html",
controller:"PersistentVolumeClaimController"
}).when("/project/:project/browse/routes", {
templateUrl:"views/browse/routes.html",
controller:"RoutesController",
reloadOnSearch:!1
}).when("/project/:project/edit/routes/:route", {
templateUrl:"views/edit/route.html",
controller:"EditRouteController"
}).when("/project/:project/browse/routes/:route", {
templateUrl:"views/browse/route.html",
controller:"RouteController"
}).when("/project/:project/create-route", {
templateUrl:"views/create-route.html",
controller:"CreateRouteController"
}).when("/project/:project/edit", {
templateUrl:"views/edit/project.html",
controller:"EditProjectController"
}).when("/project/:project/create-pvc", {
templateUrl:"views/create-persistent-volume-claim.html",
controller:"CreatePersistentVolumeClaimController"
}).when("/project/:project/attach-pvc", {
templateUrl:"views/attach-pvc.html",
controller:"AttachPVCController"
}).when("/project/:project/add-config-volume", {
templateUrl:"views/add-config-volume.html",
controller:"AddConfigVolumeController"
}).when("/project/:project/create", {
templateUrl:"views/create.html",
controller:"CreateController",
reloadOnSearch:!1
}).when("/project/:project/create/category/:category", {
templateUrl:"views/create/category.html",
controller:"BrowseCategoryController"
}).when("/project/:project/create/category/:category/:subcategory", {
templateUrl:"views/create/category.html",
controller:"BrowseCategoryController"
}).when("/project/:project/create/fromtemplate", {
templateUrl:"views/newfromtemplate.html",
controller:"NewFromTemplateController"
}).when("/project/:project/create/fromimage", {
templateUrl:"views/create/fromimage.html",
controller:"CreateFromImageController"
}).when("/project/:project/create/next", {
templateUrl:"views/create/next-steps.html",
controller:"NextStepsController"
}).when("/project/:project/set-limits", {
templateUrl:"views/set-limits.html",
controller:"SetLimitsController"
}).when("/project/:project/edit/autoscaler", {
templateUrl:"views/edit/autoscaler.html",
controller:"EditAutoscalerController"
}).when("/project/:project/edit/health-checks", {
templateUrl:"views/edit/health-checks.html",
controller:"EditHealthChecksController"
}).when("/about", {
templateUrl:"views/about.html",
controller:"AboutController"
}).when("/command-line", {
templateUrl:"views/command-line.html",
controller:"CommandLineController"
}).when("/oauth", {
templateUrl:"views/util/oauth.html",
controller:"OAuthController"
}).when("/error", {
templateUrl:"views/util/error.html",
controller:"ErrorController"
}).when("/logout", {
templateUrl:"views/util/logout.html",
controller:"LogoutController"
}).when("/create", {
templateUrl:"views/create-from-url.html",
controller:"CreateFromURLController"
}).when("/createProject", {
redirectTo:"/create-project"
}).when("/project/:project/createRoute", {
redirectTo:"/project/:project/create-route"
}).when("/project/:project/attachPVC", {
redirectTo:"/project/:project/attach-pvc"
}).when("/project/:project/browse/deployments/:deploymentconfig", {
redirectTo:"/project/:project/browse/dc/:deploymentconfig"
}).when("/project/:project/browse/deployments/:deploymentconfig/:rc", {
redirectTo:"/project/:project/browse/rc/:rc"
}).when("/project/:project/browse/deployments-replicationcontrollers/:rc", {
redirectTo:"/project/:project/browse/rc/:rc"
}).otherwise({
redirectTo:"/"
});
} ]).constant("LOGGING_URL", _.get(window.OPENSHIFT_CONFIG, "loggingURL")).constant("METRICS_URL", _.get(window.OPENSHIFT_CONFIG, "metricsURL")).constant("LIMIT_REQUEST_OVERRIDES", _.get(window.OPENSHIFT_CONFIG, "limitRequestOverrides")).constant("SOURCE_URL_PATTERN", /^[a-z][a-z0-9+.-@]*:(\/\/)?[0-9a-z_-]+/i).constant("RELATIVE_PATH_PATTERN", /^(?!\/)(?!\.\.(\/|$))(?!.*\/\.\.(\/|$)).*$/).constant("IS_SAFARI", /Version\/[\d\.]+.*Safari/.test(navigator.userAgent)).constant("amTimeAgoConfig", {
titleFormat:"LLL"
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
return h ? b(e, null) || d :a(e, null, f, g) || d;
});
}, 1e3);
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
return {
getLoggingURL:function() {
return c.when(a);
},
getMetricsURL:function() {
return c.when(b);
}
};
} ]), angular.module("openshiftConsole").service("ApplicationGenerator", [ "DataService", "APIService", "Logger", "$parse", "$q", function(a, b, c, d, e) {
var f = {}, g = function(a) {
return _.isArray(a) ? a :_.map(a, function(a, b) {
return {
name:b,
value:a
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
isNaN(h) ? c.warn("Container port " + g[0] + " is not a number for image " + d("metadata.name")(a)) :e.push({
containerPort:h,
protocol:g[1].toUpperCase()
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
name:a.name,
tag:"latest",
kind:"ImageStreamTag",
toString:function() {
return this.name + ":" + this.tag;
}
});
var d = {
imageStream:f._generateImageStream(a),
buildConfig:f._generateBuildConfig(a, c, a.labels),
deploymentConfig:f._generateDeploymentConfig(a, c, b, a.labels)
};
a.scaling.autoscale && (d.hpa = f._generateHPA(a, d.deploymentConfig));
var e = f._generateService(a, a.name, b);
return e && (d.service = e, d.route = f._generateRoute(a, a.name, d.service.metadata.name)), d;
}, f.createRoute = function(a, b, c) {
return f._generateRoute({
labels:c || {},
routing:angular.extend({
include:!0
}, a)
}, a.name, b);
}, f._generateRoute = function(a, b, c) {
if (!a.routing.include) return null;
var d = {
kind:"Route",
apiVersion:"v1",
metadata:{
name:b,
labels:a.labels,
annotations:a.annotations
},
spec:{
to:{
kind:"Service",
name:c
},
wildcardPolicy:"None"
}
}, e = a.routing.host;
e && (e.startsWith("*.") ? (d.spec.wildcardPolicy = "Subdomain", d.spec.host = "wildcard" + e.substring(1)) :d.spec.host = e), a.routing.path && (d.spec.path = a.routing.path), a.routing.targetPort && (d.spec.port = {
targetPort:a.routing.targetPort
});
var f = a.routing.tls;
return f && f.termination && (d.spec.tls = {
termination:f.termination
}, f.insecureEdgeTerminationPolicy && (d.spec.tls.insecureEdgeTerminationPolicy = f.insecureEdgeTerminationPolicy), "passthrough" !== f.termination && (f.certificate && (d.spec.tls.certificate = f.certificate), f.key && (d.spec.tls.key = f.key), f.caCertificate && (d.spec.tls.caCertificate = f.caCertificate), f.destinationCACertificate && "reencrypt" === f.termination && (d.spec.tls.destinationCACertificate = f.destinationCACertificate))), d;
}, f._generateDeploymentConfig = function(a, b, c) {
var d = g(a.deploymentConfig.envVars), e = angular.copy(a.labels);
e.deploymentconfig = a.name;
var f, h = {
image:b.toString(),
name:a.name,
ports:c,
env:d,
resources:_.get(a, "container.resources")
};
f = a.scaling.autoscaling ? a.scaling.minReplicas || 1 :a.scaling.replicas;
var i = {
apiVersion:"v1",
kind:"DeploymentConfig",
metadata:{
name:a.name,
labels:a.labels,
annotations:a.annotations
},
spec:{
replicas:f,
selector:{
deploymentconfig:a.name
},
triggers:[],
template:{
metadata:{
labels:e
},
spec:{
containers:[ h ]
}
}
}
};
return i.spec.triggers.push({
type:"ImageChange",
imageChangeParams:{
automatic:!!a.deploymentConfig.deployOnNewImage,
containerNames:[ a.name ],
from:{
kind:b.kind,
name:b.toString()
}
}
}), a.deploymentConfig.deployOnConfigChange && i.spec.triggers.push({
type:"ConfigChange"
}), i;
}, f._generateHPA = function(a, b) {
var c = {
apiVersion:"autoscaling/v1",
kind:"HorizontalPodAutoscaler",
metadata:{
name:a.name,
labels:a.labels,
annotations:a.annotations
},
spec:{
scaleTargetRef:{
kind:"DeploymentConfig",
name:b.metadata.name,
apiVersion:"extensions/v1beta1",
subresource:"scale"
},
minReplicas:a.scaling.minReplicas,
maxReplicas:a.scaling.maxReplicas,
targetCPUUtilizationPercentage:a.scaling.targetCPU || a.scaling.defaultTargetCPU || null
}
};
return c;
}, f._generateBuildConfig = function(a, b) {
var c = g(a.buildConfig.envVars), d = [ {
generic:{
secret:f._generateSecret()
},
type:"Generic"
} ];
a.buildConfig.buildOnSourceChange && d.push({
github:{
secret:f._generateSecret()
},
type:"GitHub"
}), a.buildConfig.buildOnImageChange && d.push({
imageChange:{},
type:"ImageChange"
}), a.buildConfig.buildOnConfigChange && d.push({
type:"ConfigChange"
});
var e = new URI(a.buildConfig.sourceUrl), h = e.fragment();
h || (h = "master"), e.fragment("");
var i = e.href(), j = {
apiVersion:"v1",
kind:"BuildConfig",
metadata:{
name:a.name,
labels:a.labels,
annotations:a.annotations
},
spec:{
output:{
to:{
name:b.toString(),
kind:b.kind
}
},
source:{
git:{
ref:a.buildConfig.gitRef || h,
uri:i
},
type:"Git"
},
strategy:{
type:"Source",
sourceStrategy:{
from:{
kind:"ImageStreamTag",
name:a.imageName + ":" + a.imageTag,
namespace:a.namespace
},
env:c
}
},
triggers:d
}
};
return _.get(a, "buildConfig.secrets.gitSecret[0].name") && (j.spec.source.sourceSecret = _.first(a.buildConfig.secrets.gitSecret)), a.buildConfig.contextDir && (j.spec.source.contextDir = a.buildConfig.contextDir), j;
}, f._generateImageStream = function(a) {
return {
apiVersion:"v1",
kind:"ImageStream",
metadata:{
name:a.name,
labels:a.labels,
annotations:a.annotations
}
};
}, f.getServicePort = function(a) {
return {
port:a.containerPort,
targetPort:a.containerPort,
protocol:a.protocol,
name:(a.containerPort + "-" + a.protocol).toLowerCase()
};
}, f._generateService = function(a, b, c) {
if (!c || !c.length) return null;
var d = {
kind:"Service",
apiVersion:"v1",
metadata:{
name:b,
labels:a.labels,
annotations:a.annotations
},
spec:{
selector:{
deploymentconfig:a.name
},
ports:_.map(c, f.getServicePort)
}
};
return d;
}, f.ifResourcesDontExist = function(c, d) {
function f() {
0 === j && (h.length > 0 ? g.reject({
nameTaken:!0
}) :g.resolve({
nameTaken:!1
}));
}
var g = e.defer(), h = [], i = [], j = c.length;
return c.forEach(function(c) {
var e = b.objectToResourceGroupVersion(c);
return e ? b.apiInfo(e) ? void a.get(e, c.metadata.name, {
namespace:d
}, {
errorNotification:!1
}).then(function(a) {
h.push(a), j--, f();
}, function(a) {
i.push(a), j--, f();
}) :(i.push({
data:{
message:b.unsupportedObjectKindOrVersion(c)
}
}), j--, void f()) :(i.push({
data:{
message:b.invalidObjectKindOrVersion(c)
}
}), j--, void f());
}), g.promise;
}, f;
} ]), angular.module("openshiftConsole").service("Navigate", [ "$location", "$window", "$timeout", "annotationFilter", "LabelFilter", "$filter", "APIService", function(a, b, c, d, e, f, g) {
var h = f("annotation"), i = f("buildConfigForBuild"), j = f("isJenkinsPipelineStrategy"), k = f("displayName"), l = function(a, b) {
return _.get(b, "isPipeline") ? "pipelines" :_.isObject(a) && j(a) ? "pipelines" :"builds";
};
return {
toErrorPage:function(c, d, e) {
var f = URI("error").query({
error_description:c,
error:d
}).toString();
e ? b.location.href = f :a.url(f).replace();
},
toProjectOverview:function(b) {
a.path(this.projectOverviewURL(b));
},
projectOverviewURL:function(a) {
return "project/" + encodeURIComponent(a) + "/overview";
},
toProjectList:function() {
a.path("projects");
},
membershipURL:function(a) {
return "project/" + encodeURIComponent(a) + "/membership";
},
toProjectMembership:function(b) {
a.path(this.membershipURL(b));
},
quotaURL:function(a) {
return "project/" + encodeURIComponent(a) + "/quota";
},
createFromImageURL:function(a, b, c, d) {
var e = URI.expand("project/{project}/create/fromimage{?q*}", {
project:c,
q:angular.extend({
imageStream:a.metadata.name,
imageTag:b,
namespace:a.metadata.namespace,
displayName:k(a)
}, d || {})
});
return e.toString();
},
createFromTemplateURL:function(a, b, c) {
var d = URI.expand("project/{project}/create/fromtemplate{?q*}", {
project:b,
q:angular.extend({
template:a.metadata.name,
namespace:a.metadata.namespace
}, c || {})
});
return d.toString();
},
toNextSteps:function(b, c, d) {
var e = {
name:b
};
_.isObject(d) && _.extend(e, d), a.path("project/" + encodeURIComponent(c) + "/create/next").search(e);
},
toPodsForDeployment:function(b, d) {
return 1 === _.size(d) ? void this.toResourceURL(_.sample(d)) :(a.url("/project/" + b.metadata.namespace + "/browse/pods"), void c(function() {
e.setLabelSelector(new LabelSelector(b.spec.selector, (!0)));
}, 1));
},
resourceURL:function(a, b, c, d, e) {
if (d = d || "browse", !(a && (a.metadata || b && c))) return null;
b || (b = a.kind), c || (c = a.metadata.namespace);
var h = a;
a.metadata && (h = a.metadata.name);
var i = URI("").segment("project").segmentCoded(c).segment(d);
switch (b) {
case "Build":
var j = f("buildConfigForBuild")(a), k = l(a, e);
j ? i.segment(k).segmentCoded(j).segmentCoded(h) :i.segment(k + "-noconfig").segmentCoded(h);
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
kind:b,
group:n.group
});
}
return i.toString();
},
toResourceURL:function(b) {
a.url(this.resourceURL(b));
},
configURLForResource:function(a, b) {
var c, d, e = _.get(a, "kind"), f = _.get(a, "metadata.namespace");
if (!e || !f) return null;
switch (e) {
case "Build":
return c = i(a), c ? this.resourceURL(c, "BuildConfig", f, b, {
isPipeline:j(a)
}) :null;

case "ReplicationController":
return d = h(a, "deploymentConfig"), d ? this.resourceURL(d, "DeploymentConfig", f, b) :null;
}
return null;
},
resourceListURL:function(a, b) {
var c = {
builds:"builds",
buildconfigs:"builds",
configmaps:"config-maps",
deployments:"deployments",
deploymentconfigs:"deployments",
imagestreams:"images",
pods:"pods",
replicasets:"deployments",
replicationcontrollers:"deployments",
routes:"routes",
secrets:"secrets",
services:"services",
persistentvolumeclaims:"storage",
statefulsets:"stateful-sets"
};
return URI.expand("project/{projectName}/browse/{browsePath}", {
projectName:b,
browsePath:c[a]
}).toString();
},
toResourceList:function(b, c) {
a.url(this.resourceListURL(b, c));
},
yamlURL:function(a, b) {
if (!a) return "";
var c = g.parseGroupVersion(a.apiVersion);
return URI.expand("project/{projectName}/edit/yaml?kind={kind}&name={name}&group={group}&returnURL={returnURL}", {
projectName:a.metadata.namespace,
kind:a.kind,
name:a.metadata.name,
group:c.group || "",
returnURL:b || ""
}).toString();
},
healthCheckURL:function(a, b, c, d) {
return URI.expand("project/{projectName}/edit/health-checks?kind={kind}&name={name}&group={group}", {
projectName:a,
kind:b,
name:c,
group:d || ""
}).toString();
}
};
} ]), angular.module("openshiftConsole").service("NameGenerator", function() {
return {
suggestFromSourceUrl:function(a) {
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
status:"started",
titles:b,
helpLinks:e,
namespace:f
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
return 0 === c.indexOf("/") && (e = "http:" === window.location.protocol ? "ws://" :"wss://", c = e + a.openshift.hostPort + c), b({
url:c,
method:"WATCH",
protocols:d,
auth:{}
});
};
} ]), angular.module("openshiftConsole").factory("BaseHref", [ "$document", function(a) {
return a.find("base").attr("href") || "/";
} ]), angular.module("openshiftConsole").factory("BuildsService", [ "$filter", "$q", "DataService", "Navigate", "NotificationsService", function(a, b, c, d, e) {
var f = a("annotation"), g = a("buildConfigForBuild"), h = a("getErrorDetails"), i = a("isIncompleteBuild"), j = a("isJenkinsPipelineStrategy"), k = a("isNewerResource"), l = function(a) {
var b = f(a, "buildNumber") || parseInt(a.metadata.name.match(/(\d+)$/), 10);
return isNaN(b) ? null :b;
}, m = function(a, b) {
var c = l(a);
return b && c ? b + " #" + c :a.metadata.name;
}, n = function(a) {
var f = j(a) ? "pipeline" :"build", g = {
kind:"BuildRequest",
apiVersion:"v1",
metadata:{
name:a.metadata.name
}
}, i = {
namespace:a.metadata.namespace
};
return c.create("buildconfigs/instantiate", a.metadata.name, g, i).then(function(b) {
var c, g, h = m(b, a.metadata.name), i = _.get(a, "spec.runPolicy");
"Serial" === i || "SerialLatestOnly" === i ? (c = _.capitalize(f) + " " + h + " successfully queued.", g = "Builds for " + a.metadata.name + " are configured to run one at a time.") :c = _.capitalize(f) + " " + h + " successfully created.", e.addNotification({
type:"success",
message:c,
details:g,
links:[ {
href:d.resourceURL(b),
label:"View Build"
} ]
});
}, function(a) {
return e.addNotification({
type:"error",
message:"An error occurred while starting the " + f + ".",
details:h(a)
}), b.reject(a);
});
}, o = function(a, d) {
var f = j(a) ? "pipeline" :"build", g = m(a, d), i = {
namespace:a.metadata.namespace
}, k = angular.copy(a);
return k.status.cancelled = !0, c.update("builds", k.metadata.name, k, i).then(function() {
e.addNotification({
type:"success",
message:_.capitalize(f) + " " + g + " successfully cancelled."
});
}), function(a) {
return e.addNotification({
type:"error",
message:"An error occurred cancelling " + f + " " + g + ".",
details:h(a)
}), b.reject(a);
};
}, p = function(a, f) {
var g = j(a) ? "pipeline" :"build", i = m(a, f), k = {
kind:"BuildRequest",
apiVersion:"v1",
metadata:{
name:a.metadata.name
}
}, l = {
namespace:a.metadata.namespace
};
return c.create("builds/clone", a.metadata.name, k, l).then(function(a) {
var b = m(a, f);
e.addNotification({
type:"success",
message:_.capitalize(g) + " " + i + " is being rebuilt as " + b + ".",
links:[ {
href:d.resourceURL(a),
label:"View Build"
} ]
});
}, function(a) {
return e.addNotification({
type:"error",
message:"An error occurred while rerunning " + g + " " + i + ".",
details:h(a)
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
return _.pick(b, function(b) {
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
return c && d ? moment(d).diff(moment(c)) :0;
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
return f || g ? f ? g ? b ? g - f :f - g :b ? -1 :1 :b ? 1 :-1 :(d = _.get(a, "metadata.name", ""), e = _.get(c, "metadata.name", ""), b ? e.localeCompare(d) :d.localeCompare(e));
}, d = function(a, d) {
var e = _.get(a, "metadata.creationTimestamp", ""), f = _.get(d, "metadata.creationTimestamp", "");
return e === f ? c(a, d) :b ? f.localeCompare(e) :e.localeCompare(f);
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
startBuild:n,
cancelBuild:o,
cloneBuild:p,
isPaused:q,
canBuild:r,
usesDeploymentConfigs:s,
validatedBuildsForBuildConfig:t,
latestBuildByConfig:u,
getBuildNumber:l,
getBuildDisplayName:m,
getStartTimestsamp:v,
getDuration:x,
incompleteBuilds:y,
completeBuilds:z,
lastCompleteByBuildConfig:A,
interestingBuilds:B,
groupBuildConfigsByOutputImage:D,
sortBuilds:E,
getJenkinsStatus:F,
getCurrentStage:G
};
} ]), angular.module("openshiftConsole").factory("DeploymentsService", [ "APIService", "NotificationsService", "DataService", "$filter", "$q", "LabelFilter", function(a, b, c, d, e, f) {
function g() {}
var h = d("annotation");
g.prototype.startLatestDeployment = function(a, e) {
var f = {
kind:"DeploymentRequest",
apiVersion:"v1",
name:a.metadata.name,
latest:!0,
force:!0
};
c.create("deploymentconfigs/instantiate", a.metadata.name, f, e).then(function(c) {
b.addNotification({
type:"success",
message:"Deployment #" + c.status.latestVersion + " of " + a.metadata.name + " has started."
});
}, function(a) {
b.addNotification({
type:"error",
message:"An error occurred while starting the deployment.",
details:d("getErrorDetails")(a)
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
type:"error",
message:"An error occurred while deleting the deployer pod.",
details:d("getErrorDetails")(a)
};
});
};
angular.forEach(b, e);
});
var k = d("annotationName")("deploymentStatus"), l = d("annotationName")("deploymentStatusReason"), m = d("annotationName")("deploymentCancelled");
g.metadata.annotations[k] = "New", delete g.metadata.annotations[l], delete g.metadata.annotations[m], c.update("replicationcontrollers", i, g, e).then(function() {
b.addNotification({
type:"success",
message:"Retrying deployment " + i + " of " + j + "."
});
}, function(a) {
b.addNotification({
type:"error",
message:"An error occurred while retrying the deployment.",
details:d("getErrorDetails")(a)
});
});
}, g.prototype.rollbackToDeployment = function(e, f, g, i, j) {
var k = e.metadata.name, l = h(e, "deploymentConfig"), m = {
apiVersion:"apps.openshift.io/v1",
kind:"DeploymentConfigRollback",
name:l,
spec:{
from:{
name:k
},
includeTemplate:!0,
includeReplicationMeta:f,
includeStrategy:g,
includeTriggers:i
}
};
c.create({
group:"apps.openshift.io",
resource:"deploymentconfigs/rollback"
}, l, m, j).then(function(e) {
var f = a.objectToResourceGroupVersion(e);
c.update(f, l, e, j).then(function(a) {
b.addNotification({
type:"success",
message:"Deployment #" + a.status.latestVersion + " is rolling back " + l + " to " + k + "."
});
}, function(a) {
b.addNotification({
id:"rollback-deployment-error",
type:"error",
message:"An error occurred while rolling back the deployment.",
details:d("getErrorDetails")(a)
});
});
}, function(a) {
b.addNotification({
id:"rollback-deployment-error",
type:"error",
message:"An error occurred while rolling back the deployment.",
details:d("getErrorDetails")(a)
});
});
}, g.prototype.cancelRunningDeployment = function(a, e) {
var f = a.metadata.name, g = d("annotation")(a, "deploymentConfig"), h = angular.copy(a), i = d("annotationName")("deploymentCancelled"), j = d("annotationName")("deploymentStatusReason");
h.metadata.annotations[i] = "true", h.metadata.annotations[j] = "The deployment was cancelled by the user", c.update("replicationcontrollers", f, h, e).then(function() {
b.addNotification({
type:"success",
message:"Cancelled deployment " + f + " of " + g + "."
});
}, function(a) {
b.addNotification({
id:"cancel-deployment-error",
type:"error",
message:"An error occurred while cancelling the deployment.",
details:d("getErrorDetails")(a)
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
return b(a) ? (e = null, !1) :void ("Complete" === c(a, "deploymentStatus") && (!e || e.metadata.creationTimestamp < a.metadata.creationTimestamp) && (e = a));
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
resource:a.kindToResource(b.kind) + "/scale"
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
data:{
message:"Cannot scale kind " + a.kind + "."
}
});
var f = {
apiVersion:"extensions/v1beta1",
kind:"Scale",
metadata:{
name:a.metadata.name,
namespace:a.metadata.namespace,
creationTimestamp:a.metadata.creationTimestamp
},
spec:{
replicas:b
}
};
return c.update(d, a.metadata.name, f, {
namespace:a.metadata.namespace
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
return _.isFinite(f) || _.isFinite(g) ? f ? g ? b ? g - f :f - g :b ? -1 :1 :b ? 1 :-1 :(d = _.get(a, "metadata.name", ""), e = _.get(c, "metadata.name", ""), b ? e.localeCompare(d) :d.localeCompare(e));
};
return _.toArray(a).sort(c);
}, g.prototype.sortByRevision = function(a) {
var b = this, c = function(a) {
var c = b.getRevision(a);
if (!c) return null;
var d = parseInt(c, 10);
return isNaN(d) ? null :d;
}, d = function(a, b) {
var d = c(a), e = c(b);
return d || e ? d ? e ? e - d :-1 :1 :a.metadata.name.localeCompare(b.metadata.name);
};
return _.toArray(a).sort(d);
}, g.prototype.setPaused = function(b, d, e) {
var f = angular.copy(b), g = a.objectToResourceGroupVersion(b);
return _.set(f, "spec.paused", d), c.update(g, b.metadata.name, f, e);
}, new g();
} ]), angular.module("openshiftConsole").factory("ImageStreamsService", function() {
return {
tagsByName:function(a) {
var b = {};
return angular.forEach(a.spec.tags, function(c) {
b[c.name] = b[c.name] || {}, b[c.name].name = c.name, b[c.name].spec = angular.copy(c);
var d = b[c.name].spec.from;
if (d) {
var e;
if ("ImageStreamImage" === d.kind ? e = "@" :"ImageStreamTag" === d.kind && (e = ":"), e) {
d._nameConnector = e;
var f = d.name.split(e);
1 === f.length ? (d._imageStreamName = a.metadata.name, d._idOrTag = f[0], d._completeName = d._imageStreamName + e + d._idOrTag) :(d._imageStreamName = f.shift(), d._idOrTag = f.join(e), d._completeName = d._imageStreamName + e + d._idOrTag);
}
}
}), angular.forEach(a.status.tags, function(a) {
b[a.tag] = b[a.tag] || {}, b[a.tag].name = a.tag, b[a.tag].status = angular.copy(a);
}), b;
}
};
}), angular.module("openshiftConsole").factory("MembershipService", [ "$filter", "gettext", "gettextCatalog", function(a, b, c) {
var d = a("annotation"), e = function(a, b) {
return 1 === _.filter(b, function(b) {
return _.some(b.subjects, {
name:a
});
}).length;
}, f = function() {
return _.reduce(_.slice(arguments), function(a, b, c) {
return b ? _.isEqual(c, 0) ? b :a + "-" + b :a;
}, "");
}, g = function() {
return {
User:{
kind:"User",
sortOrder:1,
name:"User",
subjects:{}
},
Group:{
kind:"Group",
sortOrder:2,
name:"Group",
subjects:{}
},
ServiceAccount:{
kind:"ServiceAccount",
sortOrder:3,
description:c.getString(b("Service accounts provide a flexible way to control API access without sharing a regular user’s credentials.")),
helpLinkKey:"service_accounts",
name:"ServiceAccount",
subjects:{}
},
SystemUser:{
kind:"SystemUser",
sortOrder:4,
description:c.getString(b("System users are virtual users automatically provisioned by the system.")),
helpLinkKey:"users_and_groups",
name:"SystemUser",
subjects:{}
},
SystemGroup:{
kind:"SystemGroup",
sortOrder:5,
description:c.getString(b("System groups are virtual groups automatically provisioned by the system.")),
helpLinkKey:"users_and_groups",
name:"SystemGroup",
subjects:{}
}
};
}, h = function(a, b) {
var c = _.reduce(a, function(a, c) {
var d = f(c.roleRef.namespace ? "Role" :"ClusterRole", c.roleRef.name);
return _.each(c.subjects, function(c) {
var e = f(c.namespace, c.name);
a[c.kind].subjects[e] || (a[c.kind].subjects[e] = {
name:c.name,
namespace:c.namespace,
roles:{}
}), _.includes(a[c.kind].subjects[e].roles, d) || (a[c.kind].subjects[e].roles[d] = b[d]);
}), a;
}, g());
return _.sortBy(c, "sortOrder");
}, i = function(a) {
return _.sortBy(a, "metadata.name");
}, j = function(a) {
return _.filter(a, function(a) {
return "true" !== d(a, "systemOnly");
});
}, k = function(a) {
return _.reduce(a, function(a, b) {
return a[f(b.kind, b.metadata.name)] = b, a;
}, {});
}, l = function(a, b) {
return _.merge(k(a), k(b));
};
return {
sortRoles:i,
filterRoles:j,
mapRolesForUI:l,
isLastRole:e,
getSubjectKinds:g,
mapRolebindingsForUI:h
};
} ]), angular.module("openshiftConsole").factory("RolesService", [ "$q", "DataService", function(a, b) {
var c = function(c) {
return a.all([ b.list("roles", c, null), b.list("clusterroles", {}, null) ]);
};
return {
listAllRoles:c
};
} ]), angular.module("openshiftConsole").factory("RoleBindingsService", [ "$q", "DataService", function(a, b) {
var c = {}, d = function(a, b) {
var e = b ? a + b :a;
return _.some(c, _.matchesProperty("metadata.name", e)) ? d(a, _.uniqueId()) :e;
}, e = function(a, b) {
var c = _.get(a, "metadata.name"), e = c ? d(c) :null;
return {
kind:"RoleBinding",
apiVersion:"v1",
metadata:{
name:e,
namespace:b
},
roleRef:{
name:_.get(a, "metadata.name"),
namespace:_.get(a, "metadata.namespace")
},
subjects:[]
};
}, f = function(a, b) {
return _.isEqual(a.kind, "ServiceAccount") ? a.namespace = a.namespace || b :(_.isEqual(a.kind, "SystemUser") || _.isEqual(a.kind, "SystemGroup")) && (_.startsWith(a.name, "system:") || (a.name = "system:" + a.name)), a;
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
}, j = function(c, d, f, h) {
var i = _.filter(f, {
roleRef:{
name:d
}
});
return a.all(_.map(i, function(a) {
var d = e();
return a = _.extend(d, a), g(a), a.subjects = _.reject(a.subjects, {
name:c
}), a.subjects.length ? b.update("rolebindings", a.metadata.name, a, h) :b["delete"]("rolebindings", a.metadata.name, h).then(function() {
return a;
});
}));
}, k = function(a, d, e) {
return b.list("rolebindings", a, function(a) {
c = a.by("metadata.name"), d(a);
}, e);
};
return {
list:k,
create:h,
addSubject:i,
removeSubject:j
};
} ]), angular.module("openshiftConsole").factory("MetricsService", [ "$filter", "$http", "$q", "$rootScope", "APIDiscovery", function(a, b, c, d, e) {
function f() {
return angular.isDefined(k) ? c.when(k) :e.getMetricsURL().then(function(a) {
return k = (a || "").replace(/\/$/, "");
});
}
function g(a) {
if (a.length) return _.each(a, function(a) {
a.empty || !_.isNumber(a.avg) ? a.value = null :a.value = a.avg;
}), a;
}
function h(a) {
return a.join("|");
}
function i() {
return f().then(function(a) {
return a ? a + "/m/stats/query" :a;
});
}
function j(a) {
return f().then(function(b) {
var c;
return c = "counter" === a.type ? b + o :b + n, URI.expand(c, {
podUID:a.pod.metadata.uid,
containerName:a.containerName,
metric:a.metric
}).toString();
});
}
var k, l, m, n = "/gauges/{containerName}%2F{podUID}%2F{metric}/data", o = "/counters/{containerName}%2F{podUID}%2F{metric}/data", p = function(a) {
return f().then(function(c) {
return !!c && (!a || (!!l || !m && b.get(c).then(function() {
return l = !0, !0;
}, function(a) {
return m = !0, d.$broadcast("metrics-connection-failed", {
url:c,
response:a
}), !1;
})));
});
}, q = function(a) {
var b = a.split("/");
return {
podUID:b[1],
descriptor:b[2] + "/" + b[3]
};
}, r = function(a, c, d) {
var e = _.indexBy(d.pods, "metadata.uid");
return b.post(a, c, {
auth:{},
headers:{
Accept:"application/json",
"Content-Type":"application/json",
"Hawkular-Tenant":d.namespace
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
bucketDuration:a.bucketDuration,
start:a.start
};
a.end && (d.end = a.end);
var e = [], f = [], g = h(_.map(a.pods, "metadata.uid"));
return a.containerName ? (e.push(_.assign({
tags:t({
uid:g,
containerName:a.containerName
})
}, d)), e.push(_.assign({
tags:s({
uid:g
})
}, d))) :e.push(_.assign({
tags:u({
uid:g
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
tags:"custom_metric:true,pod_id:" + d
};
return b.get(e, {
auth:{},
headers:{
Accept:"application/json",
"Hawkular-Tenant":c
},
params:f
}).then(function(a) {
return _.map(a.data, function(a) {
return {
id:a.id,
name:a.tags.metric_name,
unit:a.tags.units,
description:a.tags.description,
type:a.type
};
});
});
});
};
return {
isAvailable:p,
getMetricsURL:f,
get:function(a) {
return j(a).then(function(c) {
if (!c) return null;
var d = {
bucketDuration:a.bucketDuration,
start:a.start
};
return a.end && (d.end = a.end), b.get(c, {
auth:{},
headers:{
Accept:"application/json",
"Hawkular-Tenant":a.namespace
},
params:d
}).then(function(b) {
return _.assign(b, {
metricID:a.metric,
data:g(b.data)
});
});
});
},
getCurrentUsage:function(a) {
return j(a).then(function(c) {
if (!c) return null;
var d = {
bucketDuration:"1mn",
start:"-1mn"
};
return b.get(c, {
auth:{},
headers:{
Accept:"application/json",
"Hawkular-Tenant":a.namespace
},
params:d
}).then(function(b) {
return _.assign(b, {
metricID:a.metric,
usage:_.head(g(b.data))
});
});
});
},
getPodMetrics:v,
getCustomMetrics:w
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
"memory/usage":d.getString(c("Memory")),
"cpu/usage_rate":"CPU",
"network/tx_rate":d.getString(c("Sent")),
"network/rx_rate":d.getString(c("Received"))
};
return {
uniqueID:function() {
return _.uniqueId("metrics-");
},
getDefaultUpdateInterval:function() {
return 6e4;
},
getTimeRangeOptions:function() {
return [ {
label:c("Last hour"),
value:60
}, {
label:c("Last 4 hours"),
value:240
}, {
label:c("Last 12 hours"),
value:720
}, {
label:c("Last day"),
value:1440
}, {
label:c("Last 3 days"),
value:4320
}, {
label:c("Last week"),
value:10080
} ];
},
getDefaultSparklineConfig:function(a, b, c) {
return {
bindto:"#" + a,
axis:{
x:{
show:!c,
type:"timeseries",
padding:{
left:0,
bottom:0
},
tick:{
type:"timeseries",
format:"%a %H:%M"
}
},
y:{
show:!c,
label:b,
min:0,
padding:{
left:0,
top:20,
bottom:0
}
}
},
point:{
show:!1
},
size:{
height:c ? 35 :175
},
tooltip:{
format:{
value:function(a) {
var c = "cores" === b ? 3 :2;
return d3.round(a, c) + " " + b;
}
}
}
};
},
getSparklineData:function(a) {
var b, c = {
type:"spline",
x:"dates",
names:f
}, d = {};
return _.each(a, function(a, c) {
b = [ "dates" ], d[c] = [ c ], _.each(a, function(a) {
var f = e(a, c);
b.push(a.start), d[c].push(f);
});
}), c.columns = [ b ].concat(_.values(d)), c;
},
formatUsage:function(a) {
return a < .001 ? "0" :a < 1 ? d3.format(".1r")(a) :d3.format(".2r")(a);
},
redraw:function(b) {
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
createVolume:function(a, b) {
return {
name:a,
persistentVolumeClaim:{
claimName:b.metadata.name
}
};
},
createVolumeMount:function(a, b, c, d) {
var e = {
name:a,
mountPath:b,
readOnly:!!d
};
return c && (e.subPath = c), e;
},
getVolumeNames:function(a) {
var b = _.get(a, "spec.volumes", []);
return _.map(b, "name");
},
getMountPaths:function(a, b) {
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
removeVolume:function(a, g, h) {
var i = angular.copy(a), j = _.get(i, "spec.template.spec.volumes");
_.remove(j, {
name:g.name
});
var k = _.get(i, "spec.template.spec.containers");
_.each(k, function(a) {
_.remove(a.volumeMounts, {
name:g.name
});
});
var l = b.objectToResourceGroupVersion(i);
return c.update(l, i.metadata.name, i, h).then(function() {
d.addNotification({
type:"success",
message:"Volume " + g.name + " removed from " + f(a.kind) + " " + a.metadata.name + "."
});
}, function(b) {
d.addNotification({
type:"error",
message:"An error occurred removing volume " + g.name + " from " + f(a.kind) + " " + a.metadata.name + ".",
details:e(b)
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
getEffectiveLimitRange:l,
getRequestToLimitPercent:i,
isRequestCalculated:j,
isLimitCalculated:k,
validatePodLimits:m
};
} ]), angular.module("openshiftConsole").factory("RoutesService", [ "$filter", "gettext", "gettextCatalog", function(a, b, c) {
var d = function(a) {
return angular.isString(a);
}, e = function(a, b) {
return _.find(b.spec.ports, function(b) {
return d(a) ? b.name === a :b.targetPort === a;
});
}, f = function(a, f, g, h) {
if ("Service" === f.kind) {
var i = _.get(g, [ f.name ]);
if (!i) return void h.push('Routes to service "' + f.name + '", but service does not exist.');
var j = a.spec.port ? a.spec.port.targetPort :null;
if (!j) return void (_.size(i.spec.ports) > 1 && h.push('Route has no target port, but service "' + i.metadata.name + '" has multiple ports. The route will round robin traffic across all exposed ports on the service.'));
var k = e(j, i);
k || (d(j) ? h.push(c.getString(b('Route target port is set to "')) + j + c.getString(b('", but service "')) + i.metadata.name + c.getString(b('" has no port with that name.'))) :h.push(c.getString(b('Route target port is set to "')) + j + c.getString(b('", but service "')) + i.metadata.name + c.getString(b('" does not expose that port.'))));
}
}, g = function(a, b) {
a.spec.tls && (a.spec.tls.termination || b.push("Route has a TLS configuration, but no TLS termination type is specified. TLS will not be enabled until a termination type is set."), "passthrough" === a.spec.tls.termination && a.spec.path && b.push('Route path "' + a.spec.path + '" will be ignored since the route uses passthrough termination.'));
}, h = function(a, b) {
var c = _.get(a, "spec.wildcardPolicy");
angular.forEach(a.status.ingress, function(a) {
var d = _.find(a.conditions, {
type:"Admitted",
status:"False"
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
type:"Admitted",
status:"True"
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
return _.sortByOrder(a, [ l ], [ "desc" ]);
}, n = function(a, b) {
var c = l(a), d = l(b);
return d > c ? b :a;
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
return b ? o(a) :_.groupBy(a, "spec.to.name");
}, q = function(a) {
var b = _.get(a, "spec.host", "");
return b.replace(/^[a-z0-9]([-a-z0-9]*[a-z0-9])\./, "");
};
return {
getRouteWarnings:function(a, b) {
var c = [];
return a ? (f(a, a.spec.to, b, c), _.each(a.spec.alternateBackends, function(d) {
f(a, d, b, c);
}), g(a, c), h(a, c), c) :c;
},
getServicePortForRoute:e,
getPreferredDisplayRoute:n,
groupByService:p,
getSubdomain:q,
isCustomHost:k,
sortRoutesByScore:m
};
} ]), angular.module("openshiftConsole").factory("ChartsService", [ "Logger", function(a) {
return {
updateDonutCenterText:function(b, c, d) {
var e = d3.select(b).select("text.c3-chart-arcs-title");
return e ? (e.selectAll("*").remove(), e.insert("tspan").text(c).classed(d ? "donut-title-big-pf" :"donut-title-med-pf", !0).attr("dy", d ? 0 :5).attr("x", 0), void (d && e.insert("tspan").text(d).classed("donut-title-small-pf", !0).attr("dy", 20).attr("x", 0))) :void a.warn("Can't select donut title element");
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
return !a || _.isEmpty(e) ? b.when([]) :d.isAvailable().then(function(b) {
var d = [];
b || d.push({
message:"Metrics might not be configured by your cluster administrator. Metrics are required for autoscaling.",
reason:"MetricsNotAvailable"
});
var j, k, l = _.get(a, "spec.template.spec.containers", []);
q(l, h, i) || (j = s(a.kind), c.isRequestCalculated("cpu", i) ? (k = g.getString(f("This ")) + g.getString(j) + g.getString(f(" does not have any containers with a CPU limit set. ")) + g.getString(f("Autoscaling will not work without a CPU limit.")), c.isLimitCalculated("cpu", i) && (k += g.getString(f(" The CPU limit will be automatically calculated from the container memory limit.")))) :k = g.getString(f("This ")) + g.getString(j) + g.getString(f(" does not have any containers with a CPU request set. ")) + g.getString(f("Autoscaling will not work without a CPU request.")), d.push({
message:k,
reason:"NoCPURequest"
})), _.size(e) > 1 && d.push({
message:g.getString(f("More than one autoscaler is scaling this resource. ")) + g.getString(f("This is not recommended because they might compete with each other. ")) + g.getString(f("Consider removing all but one autoscaler.")),
reason:"MultipleHPA"
});
var m = function() {
return _.some(e, function(a) {
return "ReplicationController" === _.get(a, "spec.scaleTargetRef.kind");
});
};
return "ReplicationController" === a.kind && t(a) && _.some(e, m) && d.push({
message:g.getString(f("This deployment is scaled by both a deployment configuration and an autoscaler. ")) + g.getString(f("This is not recommended because they might compete with each other.")),
reason:"DeploymentHasHPA"
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
convertRequestPercentToLimit:i,
convertLimitPercentToRequest:j,
hasCPURequest:q,
filterHPA:r,
getHPAWarnings:u,
groupHPAs:v
};
} ]), angular.module("openshiftConsole").factory("PodsService", [ "OwnerReferencesService", function(a) {
return {
getImageIDs:function(a, b) {
var c = {}, d = /^.*sha256:/;
return _.each(a, function(a) {
var e, f = _.get(a, "status.containerStatuses", []), g = _.find(f, {
name:b
}), h = _.get(g, "imageID", "");
d.test(h) && (e = h.replace(d, ""), c[e] = !0);
}), _.keys(c);
},
generateDebugPod:function(a, b) {
var c = angular.copy(a), d = _.find(c.spec.containers, {
name:b
});
return d ? (c.metadata = {
name:a.metadata.name + "-debug",
annotations:{
"debug.openshift.io/source-container":b,
"debug.openshift.io/source-resource":"pods/" + a.metadata.name
},
labels:{}
}, c.spec.restartPolicy = "Never", delete c.spec.host, delete c.spec.nodeName, c.status = {}, delete d.readinessProbe, delete d.livenessProbe, d.command = [ "sleep" ], d.args = [ "3600" ], c.spec.containers = [ d ], c) :null;
},
groupByOwnerUID:function(b) {
return a.groupByControllerUID(b);
},
filterForOwner:function(b, c) {
return a.filterForController(b, c);
}
};
} ]), angular.module("openshiftConsole").service("CachedTemplateService", function() {
var a = null;
return {
setTemplate:function(b) {
a = b;
},
getTemplate:function() {
return a;
},
clearTemplate:function() {
a = null;
}
};
}).service("ProcessedTemplateService", function() {
var a = function() {
return {
params:{
all:[],
generated:[]
},
message:null
};
}, b = a();
return {
setTemplateData:function(a, c, d) {
_.each(a, function(a) {
b.params.all.push({
name:a.name,
value:a.value
});
}), _.each(c, function(a) {
a.value || b.params.generated.push(a.name);
}), d && (b.message = d);
},
getTemplateData:function() {
return b;
},
clearTemplateData:function() {
b = a();
}
};
}), angular.module("openshiftConsole").factory("SecretsService", function() {
var a = function(a) {
var b = {
source:[],
image:[],
other:[]
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
}, b = function(a) {
var b = {}, c = JSON.parse(window.atob(a));
return _.each(c, function(a, c) {
b[c] = {
username:a.username,
password:a.password,
email:a.email
};
}), b;
}, c = function(a) {
var b = {}, c = JSON.parse(window.atob(a));
return _.each(c.auths, function(a, c) {
var d = window.atob(a.auth).split(":");
b[c] = {
username:d[0],
password:d[1],
email:a.email
};
}), b;
}, d = function(a) {
var d = {}, e = _.mapValues(a, function(a, e) {
var f, g;
switch (e) {
case ".dockercfg":
return b(a);

case ".dockerconfigjson":
return c(a);

default:
return f = window.atob(a), g = /[\x00-\x09\x0E-\x1F]/.test(f), g ? (d[e] = !0, a) :f;
}
});
return e.$$nonprintable = d, e;
};
return {
groupSecretsByType:a,
decodeSecretData:d
};
}), angular.module("openshiftConsole").factory("ServicesService", [ "$filter", "$q", "DataService", function(a, b, c) {
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
return b.length ? void _.set(a, [ "metadata", "annotations", d ], JSON.stringify(b)) :void (_.has(a, [ "metadata", "annotations", d ]) && delete a.metadata.annotations[d]);
}, j = function(a, b) {
var d = angular.copy(a), e = g(d) || [];
return e.push({
name:b.metadata.name,
namespace:a.metadata.namespace === b.metadata.namespace ? "" :b.metadata.namespace,
kind:b.kind
}), i(d, e), c.update("services", d.metadata.name, d, {
namespace:d.metadata.namespace
});
}, k = function(a, d) {
var e = angular.copy(a), f = g(e) || [], h = _.reject(f, function(b) {
if (b.kind !== d.kind) return !1;
var c = b.namespace || a.metadata.namespace;
return c === d.metadata.namespace && b.name === d.metadata.name;
});
return h.length === f.length ? b.when(!0) :(i(e, h), c.update("services", e.metadata.name, e, {
namespace:e.metadata.namespace
}));
}, l = function(a) {
return "true" === f(a, e);
};
return {
getDependentServices:h,
linkService:j,
removeServiceLink:k,
isInfrastructure:l
};
} ]), angular.module("openshiftConsole").factory("ImagesService", [ "$filter", "ApplicationGenerator", "DataService", function(a, b, c) {
var d = function(a) {
return _.isArray(a) ? a :_.map(a, function(a, b) {
return {
name:b,
value:a
};
});
}, e = function(a, b) {
var d = {
kind:"ImageStreamImport",
apiVersion:"v1",
metadata:{
name:"newapp",
namespace:b.namespace
},
spec:{
"import":!1,
images:[ {
from:{
kind:"DockerImage",
name:a
}
} ]
},
status:{}
};
return c.create("imagestreamimports", null, d, b).then(function(a) {
return {
name:_.get(a, "spec.images[0].from.name"),
image:_.get(a, "status.images[0].image"),
tag:_.get(a, "status.images[0].tag"),
result:_.get(a, "status.images[0].status")
};
});
}, f = function(a) {
var b = _.get(a, "dockerImageMetadata.Config.User");
return !b || "0" === b || "root" === b;
}, g = function(a) {
return _.get(a, "dockerImageMetadata.Config.Volumes");
}, h = function(a) {
var c = [], e = {
"openshift.io/generated-by":"OpenShiftWebConsole"
}, f = d(a.env), g = [], h = [], i = 0;
if (_.forEach(a.volumes, function(b, c) {
i++;
var d = a.name + "-" + i;
g.push({
name:d,
emptyDir:{}
}), h.push({
name:d,
mountPath:c
});
}), !a.namespace) {
var j = {
kind:"ImageStream",
apiVersion:"v1",
metadata:{
name:a.name,
labels:a.labels
},
spec:{
tags:[ {
name:a.tag,
annotations:_.assign({
"openshift.io/imported-from":a.image
}, e),
from:{
kind:"DockerImage",
name:a.image
},
importPolicy:{}
} ]
}
};
c.push(j);
}
var k = {
kind:"DeploymentConfig",
apiVersion:"v1",
metadata:{
name:a.name,
labels:a.labels,
annotations:e
},
spec:{
strategy:{
resources:{}
},
triggers:[ {
type:"ConfigChange"
}, {
type:"ImageChange",
imageChangeParams:{
automatic:!0,
containerNames:[ a.name ],
from:{
kind:"ImageStreamTag",
name:(a.namespace ? a.image :a.name) + ":" + a.tag,
namespace:a.namespace
}
}
} ],
replicas:1,
test:!1,
selector:{
app:a.name,
deploymentconfig:a.name
},
template:{
metadata:{
labels:_.assign({
deploymentconfig:a.name
}, a.labels),
annotations:e
},
spec:{
volumes:g,
containers:[ {
name:a.name,
image:a.image,
ports:a.ports,
env:f,
volumeMounts:h
} ],
resources:{}
}
}
},
status:{}
};
_.first(a.pullSecrets).name && (k.spec.template.spec.imagePullSecrets = a.pullSecrets), c.push(k);
var l;
return _.isEmpty(a.ports) || (l = {
kind:"Service",
apiVersion:"v1",
metadata:{
name:a.name,
labels:a.labels,
annotations:e
},
spec:{
selector:{
deploymentconfig:a.name
},
ports:_.map(a.ports, function(a) {
return b.getServicePort(a);
})
}
}, c.push(l)), c;
}, i = function(a) {
return _.map(_.get(a, "image.dockerImageMetadata.Config.Env"), function(a) {
var b = a.indexOf("="), c = "", d = "";
return b > 0 ? (c = a.substring(0, b), b + 1 < _.size(a) && (d = a.substring(b + 1))) :c = a, {
name:c,
value:d
};
});
};
return {
findImage:e,
getVolumes:g,
runsAsRoot:f,
getResources:h,
getEnvironment:i
};
} ]), angular.module("openshiftConsole").factory("ConversionService", function() {
var a = function(a) {
return a ? a / 1048576 :a;
}, b = function(a) {
return a ? a / 1024 :a;
}, c = function(a) {
return a ? a / 1e3 :a;
};
return {
bytesToMiB:a,
bytesToKiB:b,
millicoresToCores:c
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
return h.includeProject && (i = h.project ? e(h.project) :g, j.push({
title:i,
link:c.projectOverviewURL(g)
})), j.push({
title:k,
link:c.resourceListURL(b.kindToResource(d), g)
}), h.parent && j.push(h.parent), h.subpage ? (j.push({
title:h.displayName || a,
link:c.resourceURL(a, d, g)
}), j.push({
title:h.subpage
})) :j.push({
title:h.displayName || a
}), j;
}, h = function(b, e) {
e = e || {};
var f, h = d(b, "deploymentConfig");
return h && (e.humanizedKind = "Deployments", e.parent = {
title:h,
link:c.configURLForResource(b)
}, f = a("annotation")(b, "deploymentVersion"), f && (e.displayName = "#" + f)), g(b.metadata.name, b.kind, b.metadata.namespace, e);
}, i = function(a, b) {
switch (a.kind) {
case "ReplicationController":
return h(a, b);

default:
return g(a.metadata.name, a.kind, a.metadata.namespace, b);
}
}, j = function(a) {
return a = a || {}, a.object ? i(a.object, a) :a.kind && a.name && a.namespace ? g(a.name, a.kind, a.namespace, a) :[];
};
return {
getBreadcrumbs:j
};
} ]), angular.module("openshiftConsole").factory("QuotaService", [ "APIService", "$filter", "$q", "DataService", "Logger", function(a, b, c, d, e) {
var f = b("isNil"), g = b("usageValue"), h = function(a) {
return _.every(a.spec.containers, function(a) {
var b = _.some(_.get(a, "resources.requests"), function(a) {
return !f(a) && 0 !== g(a);
}), c = _.some(_.get(a, "resources.limits"), function(a) {
return !f(a) && 0 !== g(a);
});
return !b && !c;
});
}, i = function(a) {
return _.has(a, "spec.activeDeadlineSeconds");
}, j = function(a, b) {
var c = h(a), d = i(a);
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
}, e = a.spec.quota ? a.spec.quota.scopes :a.spec.scopes;
return _.every(e, b);
});
}, k = function(a, b) {
return a ? "Pod" === a.kind ? j(a, b) :_.has(a, "spec.template") ? j(a.spec.template, b) :b :b;
}, l = b("humanizeQuotaResource"), m = b("humanizeKind"), n = function(a, b, c) {
var d = a.status.total || a.status;
if (g(d.hard[c]) <= g(d.used[c])) {
var e, f;
return e = "Pod" === b.kind ? "You will not be able to create the " + m(b.kind) + " '" + b.metadata.name + "'." :"You can still create " + m(b.kind) + " '" + b.metadata.name + "' but no pods will be created until resources are freed.", f = "pods" === c ? "You are at your quota for pods." :"You are at your quota for " + l(c) + " on pods.", {
type:"Pod" === b.kind ? "error" :"warning",
message:f,
details:e,
links:[ {
href:"project/" + a.metadata.namespace + "/quota",
label:"View Quota",
target:"_blank"
} ]
};
}
return null;
}, o = {
cpu:"resources.requests.cpu",
"requests.cpu":"resources.requests.cpu",
"limits.cpu":"resources.limits.cpu",
memory:"resources.requests.memory",
"requests.memory":"resources.requests.memory",
"limits.memory":"resources.limits.memory",
persistentvolumeclaims:"resources.limits.persistentvolumeclaims",
"requests.storage":"resources.request.storage"
}, p = function(a, b, c, d) {
var e = a.status.total || a.status, f = o[d], h = 0;
if (_.each(c.spec.containers, function(a) {
var b = _.get(a, f);
b && (h += g(b));
}), g(e.hard[d]) < g(e.used[d]) + h) {
var i;
return i = "Pod" === b.kind ? "You may not be able to create the " + m(b.kind) + " '" + b.metadata.name + "'." :"You can still create " + m(b.kind) + " '" + b.metadata.name + "' but you may not have pods created until resources are freed.", {
type:"warning",
message:"You are close to your quota for " + l(d) + " on pods.",
details:i,
links:[ {
href:"project/" + a.metadata.namespace + "/quota",
label:"View Quota",
target:"_blank"
} ]
};
}
}, q = function(a, b) {
var c = [], d = "Pod" === a.kind ? a :_.get(a, "spec.template");
return d ? (_.each([ "cpu", "memory", "requests.cpu", "requests.memory", "limits.cpu", "limits.memory", "pods" ], function(e) {
var g = b.status.total || b.status;
if (("Pod" !== a.kind || "pods" !== e) && !f(g.hard[e])) {
var h = n(b, a, e);
if (h) c.push(h); else if ("pods" !== e) {
var i = p(b, a, d, e);
i && c.push(i);
}
}
}), c) :c;
}, r = function(b, c, d) {
var e = [];
return b && c ? (_.each(b, function(b) {
var h = k(b, c), i = k(b, d), j = a.objectToResourceGroupVersion(b);
if (j) {
var l = a.kindToResource(b.kind, !0), n = m(b.kind), o = "";
j.group && (o = j.group + "/"), o += j.resource;
var p = function(a) {
var c = a.status.total || a.status;
!f(c.hard[o]) && g(c.hard[o]) <= g(c.used[o]) && e.push({
type:"error",
message:"You are at your quota of " + c.hard[o] + " " + ("1" === c.hard[o] ? n :l) + " in this project.",
details:"You will not be able to create the " + n + " '" + b.metadata.name + "'.",
links:[ {
href:"project/" + a.metadata.namespace + "/quota",
label:"View Quota",
target:"_blank"
} ]
}), e = e.concat(q(b, a));
};
_.each(h, p), _.each(i, p);
}
}), e) :e;
}, s = function(a, b) {
var f, g, h = [];
return h.push(d.list("resourcequotas", b).then(function(a) {
f = a.by("metadata.name"), e.log("quotas", f);
})), h.push(d.list("appliedclusterresourcequotas", b).then(function(a) {
g = a.by("metadata.name"), e.log("cluster quotas", g);
})), c.all(h).then(function() {
var b = r(a, f, g);
return {
quotaAlerts:b
};
});
}, t = function(a, b, c) {
var d = function(a) {
var b = a.status.total || a.status;
return _.some(b.hard, function(a, d) {
if ("resourcequotas" === d) return !1;
if (!c || _.includes(c, d)) {
if (a = g(a), !a) return !1;
var e = g(_.get(b, [ "used", d ]));
return !!e && a <= e;
}
});
};
return _.some(a, d) || _.some(b, d);
}, u = function(a, b) {
return t(a, b, [ "requests.storage", "persistentvolumeclaims" ]);
}, v = function(a, b, c, d) {
var e = function(a) {
var b = a.status.total || a.status, e = g(d);
if (!c) return !1;
var f = _.get(b.hard, c);
if (f = g(f), !f) return !1;
var h = g(_.get(b, [ "used", c ]));
return h ? f < h + e :f < e;
};
return _.some(a, e) || _.some(b, e);
};
return {
filterQuotasForResource:k,
isBestEffortPod:h,
isTerminatingPod:i,
getResourceLimitAlerts:q,
getQuotaAlerts:r,
getLatestQuotaAlerts:s,
isAnyQuotaExceeded:t,
isAnyStorageQuotaExceeded:u,
willRequestExceedQuota:v
};
} ]), angular.module("openshiftConsole").factory("SecurityCheckService", [ "APIService", "$filter", "Constants", function(a, b, c) {
var d = b("humanizeKind"), e = function(b, e) {
var f = [], g = [], h = [], i = [], j = [], k = [];
if (_.each(b, function(b) {
if (_.get(b, "kind")) {
var d = a.objectToResourceGroupVersion(b), e = a.apiInfo(d);
if (!e) return void g.push(b);
if (e.namespaced) if ("rolebindings" !== d.resource || "" !== d.group && "rbac.authorization.k8s.io" !== d.group) "roles" !== d.resource || "" !== d.group && "rbac.authorization.k8s.io" !== d.group ? _.find(c.SECURITY_CHECK_WHITELIST, {
resource:d.resource,
group:d.group
}) || k.push(b) :j.push(b); else {
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
type:"warning",
message:"Some resources will not be created.",
details:"The following resource versions are not supported by the server: " + l.join(", ")
});
}
if (h.length) {
var m = _.uniq(_.map(h, function(a) {
return d(a.kind);
}));
f.push({
type:"warning",
message:"This will create resources outside of the project, which might impact all users of the cluster.",
details:"Typically only cluster administrators can create these resources. The cluster-level resources being created are: " + m.join(", ")
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
type:"warning",
message:"This will grant permissions to your project.",
details:"Permissions are being granted to: " + n.join(", ")
});
}
if (j.length && f.push({
type:"info",
message:"This will create additional membership roles within the project.",
details:"Admins will be able to grant these custom roles to users, groups, and service accounts."
}), k.length) {
var o = _.uniq(_.map(k, function(a) {
return d(a.kind);
}));
f.push({
type:"warning",
message:"This will create resources that may have security or project behavior implications.",
details:"Make sure you understand what they do before creating them. The resources being created are: " + o.join(", ")
});
}
return f;
};
return {
getSecurityAlerts:e
};
} ]), angular.module("openshiftConsole").factory("LabelsService", function() {
var a = function(a) {
return _.get(a, "spec.template", {
metadata:{
labels:{}
}
});
};
return {
groupBySelector:function(b, c, d) {
var e = {}, f = {};
return d = d || {}, _.each(c, function(a) {
f[a.metadata.uid] = new LabelSelector(a.spec.selector);
}), _.each(b, function(b) {
if (!d.include || d.include(b)) {
var g = _.filter(c, function(c) {
var e = f[c.metadata.uid];
return d.matchTemplate ? e.matches(a(b)) :d.matchSelector ? e.covers(new LabelSelector(b.spec.selector)) :e.matches(b);
});
g.length || _.set(e, [ "", b.metadata.name ], b), _.each(g, function(a) {
var c = _.get(a, d.key || "metadata.name", "");
_.set(e, [ c, b.metadata.name ], b);
});
}
}), e;
}
};
}), angular.module("openshiftConsole").factory("CatalogService", [ "$filter", "Constants", "KeywordService", function(a, b, c) {
var d = a("tags"), e = {};
_.each(b.CATALOG_CATEGORIES, function(a) {
_.each(a.items, function(a) {
e[a.id] = a;
var b = _.get(a, "subcategories", []);
_.each(b, function(a) {
_.each(a.items, function(a) {
e[a.id] = a;
});
});
});
});
var f = function(a) {
return e[a];
}, g = function(a, b) {
a = a.toLowerCase();
var c;
for (c = 0; c < b.length; c++) {
var d = b[c].toLowerCase();
if (a === d) return !0;
}
return !1;
}, h = function(a, b) {
var c = _.get(a, "categoryAliases", []), d = [ a.id ].concat(c);
return _.some(d, function(a) {
return g(a, b);
});
}, i = function(a) {
var b = {};
return _.each(a, function(a) {
if (a.status) {
var c = {};
a.spec && a.spec.tags && _.each(a.spec.tags, function(a) {
var b = _.get(a, "annotations.tags");
b && (c[a.name] = b.split(/\s*,\s*/));
});
var d = !1;
_.each(e, function(e) {
var f = function(a) {
return _.some(a.status.tags, function(a) {
var b = c[a.tag] || [];
return h(e, b) && g("builder", b) && !g("hidden", b);
});
};
f(a) && (b[e.id] = b[e.id] || [], b[e.id].push(a), d = !0);
});
var f;
d || (f = _.some(a.status.tags, function(a) {
var b = c[a.tag] || [];
return g("builder", b) && !g("hidden", b);
}), f && (b[""] = b[""] || [], b[""].push(a)));
}
}), b;
}, j = function(a) {
var b = {};
return _.each(a, function(a) {
var c = d(a), f = !1;
_.each(e, function(d) {
h(d, c) && (b[d.id] = b[d.id] || [], b[d.id].push(a), f = !0);
}), f || (b[""] = b[""] || [], b[""].push(a));
}), b;
}, k = function(a) {
return a.from && "ImageStreamTag" === a.from.kind && a.from.name.indexOf(":") === -1 && !a.from.namespace;
}, l = a("displayName"), m = function(a, b) {
if (!b.length) return a;
var c = [];
return _.each(a, function(a) {
var d = _.get(a, "metadata.name", ""), e = l(a, !0), f = [], g = {}, h = {};
_.each(a.spec.tags, function(a) {
return k(a) ? (g[a.name] = a.from.name, h[a.from.name] = h[a.from.name] || [], void h[a.from.name].push(a.name)) :void f.push(a);
});
var i = _.indexBy(f, "name");
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
return b ? i[b] :i[a.tag];
}), c.push(j));
}), c;
}, n = [ "metadata.name", 'metadata.annotations["openshift.io/display-name"]', "metadata.annotations.description" ], o = function(a, b) {
return c.filterForKeywords(a, n, b);
};
return {
getCategoryItem:f,
categorizeImageStreams:i,
categorizeTemplates:j,
referencesSameImageStream:k,
filterImageStreams:m,
filterTemplates:o
};
} ]), angular.module("openshiftConsole").factory("ModalsService", [ "$uibModal", function(a) {
return {
confirm:function(b) {
var c = a.open({
animation:!0,
templateUrl:"views/modals/confirm.html",
controller:"ConfirmModalController",
resolve:{
modalConfig:b
}
});
return c.result;
},
confirmSaveLog:function(b) {
var c = a.open({
animation:!0,
templateUrl:"views/modals/confirm-save-log.html",
controller:"ConfirmSaveLogController",
resolve:{
object:b
}
});
return c.result;
},
showJenkinsfileExamples:function() {
a.open({
animation:!0,
templateUrl:"views/modals/jenkinsfile-examples-modal.html",
controller:"JenkinsfileExamplesModalController",
size:"lg"
});
},
showComputeUnitsHelp:function() {
a.open({
animation:!0,
templateUrl:"views/modals/about-compute-units-modal.html",
controller:"AboutComputeUnitsModalController"
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
e = b(a, "deploymentConfig"), f = b(a, "deploymentVersion"), d = e && f ? "oc logs --version " + f + " dc/" + e :"oc logs rc/" + a.metadata.name;
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
getLogsCommand:c
};
} ]), angular.module("openshiftConsole").factory("EnvironmentService", [ "$filter", "keyValueEditorUtils", function(a, b) {
var c = function(a) {
return _.get(a, "spec.template.spec.containers", []);
};
return {
normalize:function(a) {
var b = c(a);
_.each(b, function(a) {
a.env = a.env || [];
});
},
compact:function(a) {
var d = c(a);
_.each(d, function(a) {
a.env = b.compactEntries(a.env);
});
},
copyAndNormalize:function(a) {
var b = angular.copy(a);
return this.normalize(b), b;
},
isEnvironmentEqual:function(a, b) {
var d = c(a), e = c(b);
if (d.length !== e.length) return !1;
var f, g, h;
for (f = 0; f < d.length; f++) {
if (d[f].name !== e[f].name) return !1;
if (g = d[f].env || [], h = e[f].env || [], !_.isEqual(g, h)) return !1;
}
return !0;
},
mergeEdits:function(a, b) {
var d, e = angular.copy(b), f = c(a), g = c(e);
for (d = 0; d < g.length; d++) g[d].env = _.get(f, [ d, "env" ], []);
return e;
}
};
} ]), function() {
angular.module("openshiftConsole").provider("keyValueEditorConfig", [ function() {
var a = {
keyMinlength:"",
keyMaxlength:"",
valueMinlength:"",
valueMaxlength:"",
keyValidator:"[a-zA-Z0-9-_]+",
valueValidator:"",
keyValidatorError:"Validation error",
keyValidatorErrorTooltip:void 0,
keyValidatorErrorTooltipIcon:"pficon pficon-help",
valueValidatorError:"Validation error",
valueValidatorErrorTooltip:void 0,
valueValidatorErrorTooltipIcon:"pficon pficon-help",
keyPlaceholder:"",
valuePlaceholder:"",
keyRequiredError:"Key is required"
};
this.set = function(b, c) {
angular.isObject(b) ? angular.extend(a, b) :a[b] = c;
}, this.$get = [ function() {
return a;
} ];
} ]);
}(), function() {
angular.module("openshiftConsole").factory("keyValueEditorUtils", [ "$timeout", "$window", function(a, b) {
var c = function() {
return {
name:"",
value:""
};
}, d = function(a, b) {
a && a.push(b || c());
}, e = function(a) {
a && a.push({
name:"",
selectedValueFrom:null,
selectedValueFromKey:null,
valueFrom:{}
});
}, f = function(a, b) {
if (!a.value && a.valueFrom) {
a.valueIcon = "pficon pficon-help", a.valueIconTooltip = "This is a referenced value that will be generated when a container is created.  On running pods you can check the resolved values by going to the Terminal tab and echoing the environment variable.";
var c = {
config:"configMapKeyRef",
secret:"secretKeyRef",
field:"fieldRef"
};
a.valueFrom[c.config] ? (a.apiObj = {
kind:"ConfigMap",
metadata:{
name:a.valueFrom[c.config].name,
namespace:b
}
}, a.refType = c.config) :a.valueFrom[c.secret] ? (a.apiObj = {
kind:"Secret",
metadata:{
name:a.valueFrom[c.secret].name,
namespace:b
}
}, a.refType = c.secret, a.valueIcon = "fa fa-user-secret") :a.valueFrom[c.field] ? (a.isReadonlyValue = !0, a.refType = c.field, a.valueAlt = "Set to the field " + a.valueFrom.fieldRef.fieldPath + " in current object") :(a.isReadonlyValue = !0, a.valueAlt = "Set to a reference on a " + _.first(_.keys(a.valueFrom)));
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
return a = i(a), a.name || a.value || a.valueFrom ? a :void 0;
}));
}, l = function(a) {
return Logger.log("DEPRECATED: mapEntries() drops valueFrom from the entry."), _.reduce(k(a), function(a, b) {
return a[b.name] = b.value, a;
}, {});
}, m = function(c, d) {
a(function() {
var a = _.first(b.document.querySelectorAll(c));
a && (a.focus(), d && (a.value = "", a.value = d));
}, 25);
}, n = function(a, b) {
return "key-value-editor-key-" + a + "-" + b;
}, o = function(a, b) {
return "key-value-editor-value-" + a + "-" + b;
}, p = function(a, b) {
return {
object:_.find(b, function(b) {
return "ConfigMap" === b.kind && b.metadata.name === a.valueFrom.configMapKeyRef.name;
}),
key:a.valueFrom.configMapKeyRef.key
};
}, q = function(a, b) {
return {
object:_.find(b, function(b) {
return "Secret" === b.kind && b.metadata.name === a.valueFrom.secretKeyRef.name;
}),
key:a.valueFrom.secretKeyRef.key
};
}, r = function(a, b) {
var c = null;
return a.valueFrom.configMapKeyRef ? c = p(a, b) :a.valueFrom.secretKeyRef && (c = q(a, b)), c;
}, s = function(a, b) {
_.each(a, function(a) {
var c;
a.valueFrom && (c = r(a, b), c && (_.set(a, "selectedValueFrom", c.object), _.set(a, "selectedValueFromKey", c.key)));
});
};
return {
newEntry:c,
addEntry:d,
addEntryWithSelectors:e,
altTextForValueFrom:f,
setEntryPerms:g,
cleanEntry:i,
cleanEntries:j,
compactEntries:k,
mapEntries:l,
setFocusOn:m,
uniqueForKey:n,
uniqueForValue:o,
findReferenceValue:r,
findReferenceValueForEntries:s
};
} ]);
}(), angular.module("openshiftConsole").factory("FullscreenService", [ "IS_SAFARI", function(a) {
var b = document.documentElement.requestFullScreen || document.documentElement.webkitRequestFullScreen || document.documentElement.mozRequestFullScreen || document.documentElement.msRequestFullscreen, c = function(a) {
if (!a || !_.isString(a)) return a;
var b = $(a);
return b.length ? b[0] :null;
};
return {
hasFullscreen:function(c) {
return (!c || !a) && !!b;
},
requestFullscreen:function(a) {
b && (a = c(a), a && b.call(a));
},
exitFullscreen:function() {
document.exitFullscreen ? document.exitFullscreen() :document.mozCancelFullScreen ? document.mozCancelFullScreen() :document.webkitExitFullscreen ? document.webkitExitFullscreen() :document.msExitFullscreen && document.msExitFullscreen();
}
};
} ]), angular.module("openshiftConsole").factory("AppsService", function() {
var a = function(a) {
return _.get(a, "metadata.labels.app", "");
}, b = function(a, b) {
return a || b ? a ? b ? a.toLowerCase().localeCompare(b.toLowerCase()) :-1 :1 :0;
};
return {
groupByApp:function(b, c) {
var d = _.groupBy(b, a);
return c && _.mapValues(d, function(a) {
return _.sortBy(a, c);
}), d;
},
sortAppNames:function(a) {
a.sort(b);
}
};
}), angular.module("openshiftConsole").factory("ResourceAlertsService", [ "$filter", "AlertMessageService", "DeploymentsService", "Navigate", "QuotaService", "gettext", "gettextCatalog", function(a, b, c, d, e, f, g) {
var h = a("annotation"), i = a("humanizeKind"), j = a("deploymentStatus"), k = a("groupedPodWarnings"), l = function(a, c) {
if (_.isEmpty(a)) return {};
var e = {}, h = k(a);
return _.each(h, function(a, h) {
var i = _.head(a);
if (i) {
var j = "pod_warning" + h, k = {
type:i.severity || "warning",
message:i.message
};
switch (i.reason) {
case "Looping":
case "NonZeroExit":
var l = d.resourceURL(i.pod, "Pod", c), m = URI(l).addSearch({
tab:"logs",
container:i.container
}).toString();
k.links = [ {
href:m,
label:g.getString(f("View Log"))
} ];
break;

case "NonZeroExitTerminatingPod":
if (b.isAlertPermanentlyHidden(j, c)) return;
k.links = [ {
href:"",
label:g.getString(f("Don't Show Me Again")),
onClick:function() {
return b.permanentlyHideAlert(j, c), !0;
}
} ];
}
e[j] = k;
}
}), e;
}, m = function(a, c, h, i) {
var j = b.isAlertPermanentlyHidden("overview-quota-limit-reached", h);
if (!j && e.isAnyQuotaExceeded(a, c)) {
if (i.quotaExceeded) return;
i.quotaExceeded = {
type:"warning",
message:g.getString(f("Quota limit has been reached.")),
links:[ {
href:d.quotaURL(h),
label:g.getString(f("View Quota"))
}, {
href:"",
label:g.getString(f("Don't Show Me Again")),
onClick:function() {
return b.permanentlyHideAlert("overview-quota-limit-reached", h), !0;
}
} ]
};
} else delete i.quotaExceeded;
}, n = function(b) {
var d = {};
return _.get(b, "spec.paused") && (d[b.metadata.uid + "-paused"] = {
type:"info",
message:b.metadata.name + " is paused.",
details:"This will stop any new rollouts or triggers from running until resumed.",
links:[ {
href:"",
label:"Resume Rollouts",
onClick:function() {
c.setPaused(b, !1, {
namespace:b.metadata.namespace
}).then(_.noop, function(c) {
d[b.metadata.uid + "-pause-error"] = {
type:"error",
message:"An error occurred resuming the " + i(b.kind) + ".",
details:a("getErrorDetails")(c)
};
});
}
} ]
}), d;
}, o = function(a, b) {
if (!a || !b) return {};
var c, e = {}, i = _.get(a, "metadata.name"), k = j(b), l = h(b, "deploymentVersion"), m = l ? i + " #" + l :b.metadata.name, n = d.resourceURL(b);
switch (k) {
case "Cancelled":
e[b.metadata.uid + "-cancelled"] = {
type:"info",
message:g.getString(f("Deployment")) + " " + m + " " + g.getString(f("was cancelled.")),
links:[ {
href:n,
label:g.getString(f("View Deployment"))
} ]
};
break;

case "Failed":
c = URI(n).addSearch({
tab:"logs"
}).toString(), e[b.metadata.uid + "-failed"] = {
type:"error",
message:g.getString(f("Deployment")) + " " + m + " " + g.getString(f("failed.")),
reason:h(b, "openshift.io/deployment.status-reason"),
links:[ {
href:c,
label:g.getString(f("View Log"))
}, {
href:"project/" + b.metadata.namespace + "/browse/events",
label:g.getString(f("View Events"))
} ]
};
}
return e;
}, p = function(a, b, c, d) {
a[b + "-" + c.reason] = {
type:d,
message:c.message
};
}, q = function(a) {
var b = {};
if (!a) return b;
var c = a.metadata.uid, d = _.find(a.status.conditions, {
reason:"ErrorFindingNamespaceForInstance"
}), e = _.find(a.status.conditions, {
reason:"ProvisionFailed"
}), f = _.find(a.status.conditions, {
reason:"DeprovisioningFailed"
});
return d && p(b, c, d, "warning"), e && p(b, c, e, "error"), f && p(b, c, f, "error"), b;
};
return {
getPodAlerts:l,
setGenericQuotaWarning:m,
getDeploymentStatusAlerts:o,
getPausedDeploymentAlerts:n,
getServiceInstanceAlerts:q
};
} ]), angular.module("openshiftConsole").factory("ListRowUtils", function() {
var a = function(a) {
var b = _.get(a, "metadata.uid");
return b ? "overview/expand/" + b :null;
}, b = function(b) {
var c = a(b.apiObject);
if (!c) return void (b.expanded = !1);
var d = sessionStorage.getItem(c);
return !d && b.state.expandAll ? void (b.expanded = !0) :void (b.expanded = "true" === d);
};
return {
getNotifications:function(a, b) {
var c = _.get(a, "metadata.uid");
return c ? _.get(b, [ "notificationsByObjectUID", c ]) :null;
},
ui:{
toggleExpand:function(b, c) {
if (c || !($(b.target).closest("a").length > 0)) {
var d = a(this.apiObject);
d && (this.expanded = !this.expanded, sessionStorage.setItem(d, this.expanded ? "true" :"false"));
}
},
$onInit:function() {
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
getOwnerReferences:a,
getControllerReferences:b,
groupByControllerUID:function(b) {
var c = {};
return _.each(b, function(b) {
var d = !1;
_.each(a(b), function(a) {
a.controller && (d = !0, c[a.uid] = c[a.uid] || [], c[a.uid].push(b));
}), d || (c[""] = c[""] || [], c[""].push(b));
}), c;
},
filterForController:function(b, c) {
var d = _.get(c, "metadata.uid");
return _.filter(b, function(b) {
return _.some(a(b), {
uid:d,
controller:!0
});
});
}
};
}), angular.module("openshiftConsole").controller("LandingPageController", [ "$scope", "$rootScope", "AuthService", "Catalog", "Constants", "Navigate", "NotificationsService", "RecentlyViewedServiceItems", "GuidedTourService", "HTMLService", "$timeout", "$routeParams", "$location", function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
function n() {
if (p) if (l.startTour) k(function() {
m.replace(), m.search("startTour", null), a.startGuidedTour();
}, 500); else if (_.get(o, "auto_launch")) {
var c = "openshift/viewedHomePage/" + b.user.metadata.name;
"true" !== localStorage.getItem(c) && k(function() {
a.startGuidedTour() && localStorage.setItem(c, "true");
}, 500);
}
}
var o = _.get(e, "GUIDED_TOURS.landing_page_tour"), p = o && o.enabled && o.steps;
a.saasOfferings = e.SAAS_OFFERINGS, a.viewMembership = function(a) {
f.toProjectMembership(a.metadata.name);
}, p && (a.startGuidedTour = function() {
return !j.isWindowBelowBreakpoint(j.WINDOW_SIZE_SM) && (i.startTour(o.steps), !0);
}), g.clearNotifications();
var q = function() {
var b = _.get(a, "template.metadata.uid");
b && h.addItem(b);
};
a.templateSelected = function(b) {
a.template = b;
}, a.templateDialogClosed = function() {
q(), a.template = null;
}, c.withUser().then(function() {
var b = !_.get(e, "ENABLE_TECH_PREVIEW_FEATURE.template_service_broker");
d.getCatalogItems(b).then(_.spread(function(b, c) {
if (c) {
var d = {
type:"error",
message:c
};
g.addNotification(d);
}
a.catalogItems = b, n();
}));
}), a.$on("$destroy", function() {
q();
}), p && a.$on("$locationChangeStart", function(b) {
m.search().startTour && (a.startGuidedTour(), b.preventDefault());
});
} ]), angular.module("openshiftConsole").controller("ProjectsController", [ "$scope", "$filter", "$location", "$route", "$timeout", "AuthService", "DataService", "KeywordService", "Logger", "ProjectsService", "gettext", "gettextCatalog", function(a, b, c, d, e, f, g, h, i, j, k, l) {
var m, n, o = [], p = [];
a.alerts = a.alerts || {}, a.loading = !0, a.showGetStarted = !1, a.canCreate = void 0, a.search = {
text:""
};
var q, r = window.DMOS_OPENSHIFT_PROJECTNAMES.split(","), s = [ "metadata.name", 'metadata.annotations["openshift.io/display-name"]', 'metadata.annotations["openshift.io/description"]', 'metadata.annotations["openshift.io/requester"]' ], t = function() {
a.projects = h.filterForKeywords(n, s, p);
}, u = b("displayName"), v = function() {
var b = _.get(a, "sortConfig.currentField.id");
q !== b && (a.sortConfig.isAscending = "metadata.creationTimestamp" !== b);
var c = function(a) {
return u(a).toLowerCase();
}, d = a.sortConfig.isAscending ? "asc" :"desc";
switch (b) {
case 'metadata.annotations["openshift.io/display-name"]':
n = _.sortByOrder(m, [ c, "metadata.name" ], [ d ]);
break;

case 'metadata.annotations["openshift.io/requester"]':
n = _.sortByOrder(m, [ b, c ], [ d, "asc" ]);
break;

default:
n = _.sortByOrder(m, [ b ], [ d ]);
}
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
});
}));
} ]), angular.module("openshiftConsole").controller("PodController", [ "$scope", "$filter", "$routeParams", "$timeout", "$uibModal", "Logger", "DataService", "EnvironmentService", "FullscreenService", "ImageStreamResolver", "MetricsService", "OwnerReferencesService", "PodsService", "ProjectsService", function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
a.projectName = c.project, a.pod = null, a.imageStreams = {}, a.imagesByDockerReference = {}, a.imageStreamImageRefByDockerReference = {}, a.builds = {}, a.alerts = {}, a.terminalDisconnectAlert = {}, a.renderOptions = a.renderOptions || {}, a.renderOptions.hideFilterWidget = !0, a.logOptions = {}, a.terminalTabWasSelected = !1, a.breadcrumbs = [ {
title:"Pods",
link:"project/" + c.project + "/browse/pods"
}, {
title:c.pod
} ], a.terminalDisconnectAlert.disconnect = {
type:"warning",
message:"This terminal has been disconnected. If you reconnect, your terminal history will be lost."
}, a.noContainersYet = !0, a.selectedTab = {};
var o = [], p = null;
k.isAvailable().then(function(b) {
a.metricsAvailable = b;
});
var q = function() {
if (a.pod) {
var b = _.find(a.pod.status.containerStatuses, {
name:a.logOptions.container
}), c = _.get(b, "state"), d = _.head(_.keys(c)), e = _.includes([ "running", "waiting", "terminated" ], d) ? d :"", f = _.get(b, "lastState"), g = _.head(_.keys(f)), h = _.get(b, "state.waiting");
angular.extend(a, {
containerStatusKey:e,
containerStateReason:_.get(c, [ d, "reason" ])
}), h ? angular.extend(a, {
lasStatusKey:g,
containerStartTime:_.get(f, [ g, "startedAt" ]),
containerEndTime:_.get(f, [ g, "finishedAt" ])
}) :angular.extend(a, {
containerStartTime:_.get(c, [ d, "startedAt" ]),
containerEndTime:_.get(c, [ d, "finishedAt" ])
});
}
}, r = function() {
var a = $("<span>").css({
position:"absolute",
top:"-100px"
}).addClass("terminal-font").text(_.repeat("x", 10)).appendTo("body"), b = {
width:a.width() / 10,
height:a.height()
};
return a.remove(), b;
}, s = r(), t = $(window), u = function(b) {
b || (b = 0), s.height && s.width && a.selectedTab.terminal && !(b > 10) && a.$apply(function() {
var c = $(".container-terminal-wrapper").get(0);
if (!c) return void d(function() {
u(b + 1);
}, 50);
var e = c.getBoundingClientRect();
if (0 === e.left && 0 === e.top && 0 === e.width && 0 === e.height) return void d(function() {
u(b + 1);
}, 50);
var f = t.width(), g = t.height(), h = f - e.left - 40, i = g - e.top - 50;
a.terminalCols = Math.max(_.floor(h / s.width), 80), a.terminalRows = Math.max(_.floor(i / s.height), 24);
});
};
a.$watch("selectedTab.terminal", function(a) {
a ? (s.height && s.width ? $(window).on("resize.terminalsize", _.debounce(u, 100)) :f.warn("Unable to calculate the bounding box for a character.  Terminal will not be able to resize."), d(u, 0)) :$(window).off("resize.terminalsize");
}), a.onTerminalSelectChange = function(b) {
_.each(a.containerTerminals, function(a) {
a.isVisible = !1;
}), b.isVisible = !0, b.isUsed = !0, a.selectedTerminalContainer = b;
};
var v = function(a) {
var b = _.get(a, "state", {});
return _.head(_.keys(b));
}, w = function() {
var b = [];
_.each(a.pod.spec.containers, function(c) {
var d = _.find(a.pod.status.containerStatuses, {
name:c.name
}), e = v(d);
b.push({
containerName:c.name,
isVisible:!1,
isUsed:!1,
containerState:e
});
});
var c = _.head(b);
return c.isVisible = !0, c.isUsed = !0, a.selectedTerminalContainer = c, b;
}, x = function(b) {
a.noContainersYet && (a.noContainersYet = 0 === a.containersRunning(b.status.containerStatuses));
}, y = function(b) {
_.each(b, function(b) {
var c = _.find(a.pod.status.containerStatuses, {
name:b.containerName
}), d = v(c);
b.containerState = d;
});
}, z = function() {
var b = angular.copy(_.get(a, "pod.spec.containers", []));
_.each(b, function(a) {
a.env = a.env || [];
}), a.containersEnv = b;
}, A = b("annotation"), B = function(b, c) {
if (a.loaded = !0, a.pod = b, a.dcName = A(b, "deploymentConfig"), a.rcName = A(b, "deployment"), a.deploymentVersion = A(b, "deploymentVersion"), a.logCanRun = !_.includes([ "New", "Pending", "Unknown" ], b.status.phase), q(), z(), delete a.controllerRef, !a.dcName) {
var d = l.getControllerReferences(b);
a.controllerRef = _.find(d, function(a) {
return "ReplicationController" === a.kind || "ReplicaSet" === a.kind || "Build" === a.kind;
});
}
"DELETED" === c && (a.alerts.deleted = {
type:"warning",
message:"This pod has been deleted."
});
};
n.get(c.project).then(_.spread(function(d, h) {
p = h, a.project = d, a.projectContext = h, g.get("pods", c.pod, h, {
errorNotification:!1
}).then(function(b) {
B(b);
var d = {};
d[b.metadata.name] = b, a.logOptions.container = c.container || b.spec.containers[0].name, a.containerTerminals = w(), x(b), j.fetchReferencedImageStreamImages(d, a.imagesByDockerReference, a.imageStreamImageRefByDockerReference, p), o.push(g.watchObject("pods", c.pod, h, function(b, c) {
B(b, c), y(a.containerTerminals), x(b);
}));
}, function(c) {
a.loaded = !0, a.alerts.load = {
type:"error",
message:"The pod details could not be loaded.",
details:b("getErrorDetails")(c)
};
}), a.$watch("logOptions.container", q), o.push(g.watch("imagestreams", h, function(b) {
a.imageStreams = b.by("metadata.name"), j.buildDockerRefMapForImageStreams(a.imageStreams, a.imageStreamImageRefByDockerReference), j.fetchReferencedImageStreamImages(a.pods, a.imagesByDockerReference, a.imageStreamImageRefByDockerReference, h), f.log("imagestreams (subscribe)", a.imageStreams);
})), o.push(g.watch("builds", h, function(b) {
a.builds = b.by("metadata.name"), f.log("builds (subscribe)", a.builds);
}));
var k, l = function() {
var c = a.debugPod;
k && (g.unwatch(k), k = null), $(window).off("beforeunload.debugPod"), c && (g["delete"]("pods", c.metadata.name, h, {
gracePeriodSeconds:0
}).then(_.noop, function(d) {
a.alerts["debug-container-error"] = {
type:"error",
message:"Could not delete pod " + c.metadata.name,
details:b("getErrorDetails")(d)
};
}), a.debugPod = null);
}, n = function() {
$(".terminal:visible").focus();
};
a.hasFullscreen = i.hasFullscreen(!0), a.fullscreenTerminal = function() {
i.requestFullscreen("#container-terminal-wrapper"), setTimeout(n);
}, a.exitFullscreen = function() {
i.exitFullscreen();
}, a.debugTerminal = function(c) {
var d = m.generateDebugPod(a.pod, c);
return d ? void g.create("pods", null, d, h).then(function(b) {
var f = _.find(a.pod.spec.containers, {
name:c
});
a.debugPod = b, $(window).on("beforeunload.debugPod", function() {
return "Are you sure you want to leave with the debug terminal open? The debug pod will not be deleted unless you close the dialog.";
}), k = g.watchObject("pods", d.metadata.name, h, function(b) {
a.debugPod = b;
});
var i = e.open({
animation:!0,
templateUrl:"views/modals/debug-terminal.html",
controller:"DebugTerminalModalController",
scope:a,
resolve:{
container:function() {
return f;
},
image:function() {
return _.get(a, [ "imagesByDockerReference", f.image ]);
}
},
backdrop:"static"
});
i.result.then(l);
}, function(d) {
a.alerts["debug-container-error"] = {
type:"error",
message:"Could not debug container " + c,
details:b("getErrorDetails")(d)
};
}) :void (a.alerts["debug-container-error"] = {
type:"error",
message:"Could not debug container " + c
});
}, a.containersRunning = function(a) {
var b = 0;
return a && a.forEach(function(a) {
a.state && a.state.running && b++;
}), b;
}, a.$on("$destroy", function() {
g.unwatchAll(o), l(), $(window).off("resize.terminalsize");
});
}));
} ]), angular.module("openshiftConsole").controller("OverviewController", [ "$scope", "$filter", "$routeParams", "AlertMessageService", "APIService", "AppsService", "BuildsService", "Constants", "DataService", "DeploymentsService", "HPAService", "HTMLService", "ImageStreamResolver", "KeywordService", "LabelFilter", "Logger", "MetricsService", "Navigate", "NotificationsService", "OwnerReferencesService", "PodsService", "ProjectsService", "BindingService", "ResourceAlertsService", "RoutesService", "gettext", "gettextCatalog", OverviewController ]), angular.module("openshiftConsole").controller("QuotaController", [ "$filter", "$routeParams", "$scope", "DataService", "ProjectsService", "Logger", "gettext", "gettextCatalog", function(a, b, c, d, e, f, g, h) {
c.projectName = b.project, c.limitRanges = {}, c.limitsByType = {}, c.labelSuggestions = {}, c.alerts = c.alerts || {}, c.quotaHelp = h.getString(g("Limits resource usage within this project.")), c.emptyMessageLimitRanges = g("Loading..."), c.limitRangeHelp = h.getString(g("Defines minimum and maximum constraints for runtime resources such as memory and CPU.")), c.renderOptions = c.renderOptions || {}, c.renderOptions.hideFilterWidget = !0;
var i = [], j = a("usageValue");
c.isAtLimit = function(a, b) {
var c = a.status.total || a.status, d = j(_.get(c, [ "hard", b ]));
if (!d) return !1;
var e = j(_.get(c, [ "used", b ]));
return !!e && e >= d;
};
var k = a("humanizeQuotaResource"), l = function(a, b) {
return "cpu" === a || "requests.cpu" === a ? "cpu" === b || "requests.cpu" === b ? 0 :-1 :"cpu" === b || "requests.cpu" === b ? 1 :"memory" === a || "requests.memory" === a ? "memory" === b || "requests.memory" === b ? 0 :-1 :"memory" === b || "requests.memory" === b ? 1 :"limits.cpu" === a ? "limits.cpu" === b ? 0 :-1 :"limits.cpu" === b ? 1 :"limits.memory" === a ? "limits.memory" === b ? 0 :-1 :"limits.memory" === b ? 1 :(a = k(a), b = k(b), a.localeCompare(b));
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
namespace:b.project
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
var p = [];
c.kinds = [ {
kind:o("All")
}, {
kind:"Pods"
}, {
label:"Deployments",
kind:"ReplicationControllers"
}, {
kind:"Builds"
}, {
kind:"StatefulSets"
} ], c.kindSelector = {
selected:_.find(c.kinds, {
kind:a.kind
}) || _.head(c.kinds)
}, c.logOptions = {
pods:{},
replicationControllers:{},
builds:{},
statefulSets:{}
}, c.logCanRun = {
pods:{},
replicationControllers:{},
builds:{},
statefulSets:{}
}, c.logEmpty = {
pods:{},
replicationControllers:{},
builds:{},
statefulSets:{}
}, c.expanded = {
pods:{},
replicationControllers:{},
replicaSets:{},
builds:{},
statefulSets:{}
};
var q = d("isNil");
c.filters = {
hideOlderResources:q(a.hideOlderResources) || "true" === a.hideOlderResources,
text:""
};
var r, s, t, u;
j.isAvailable().then(function(a) {
c.metricsAvailable = a;
});
var v = d("orderObjectsByDate"), w = [ "metadata.name" ], x = [], y = function() {
c.filteredPods = h.filterForKeywords(u, w, x), c.filteredReplicationControllers = h.filterForKeywords(s, w, x), c.filteredReplicaSets = h.filterForKeywords(t, w, x), c.filteredBuilds = h.filterForKeywords(r, w, x), c.filteredStatefulSets = h.filterForKeywords(_.values(c.statefulSets), w, x);
}, z = function(a) {
c.logOptions.pods[a.metadata.name] = {
container:a.spec.containers[0].name
}, c.logCanRun.pods[a.metadata.name] = !_.includes([ "New", "Pending", "Unknown" ], a.status.phase);
}, A = function(a) {
c.logOptions.replicationControllers[a.metadata.name] = {};
var b = d("annotation")(a, "deploymentVersion");
b && (c.logOptions.replicationControllers[a.metadata.name].version = b), c.logCanRun.replicationControllers[a.metadata.name] = !_.includes([ "New", "Pending" ], d("deploymentStatus")(a));
}, B = function(a) {
c.logOptions.builds[a.metadata.name] = {}, c.logCanRun.builds[a.metadata.name] = !_.includes([ "New", "Pending", "Error" ], a.status.phase);
}, C = function() {
c.filteredStatefulSets = h.filterForKeywords(_.values(c.statefulSets), w, x);
}, D = function() {
u = _.filter(c.pods, function(a) {
return !c.filters.hideOlderResources || "Succeeded" !== a.status.phase && "Failed" !== a.status.phase;
}), c.filteredPods = h.filterForKeywords(u, w, x);
}, E = d("isIncompleteBuild"), F = d("buildConfigForBuild"), G = d("isRecentBuild"), H = function() {
moment().subtract(5, "m");
r = _.filter(c.builds, function(a) {
if (!c.filters.hideOlderResources) return !0;
if (E(a)) return !0;
var b = F(a);
return b ? c.latestBuildByConfig[b].metadata.name === a.metadata.name :G(a);
}), c.filteredBuilds = h.filterForKeywords(r, w, x);
}, I = d("deploymentStatus"), J = d("deploymentIsInProgress"), K = function() {
s = _.filter(c.replicationControllers, function(a) {
return !c.filters.hideOlderResources || (J(a) || "Active" === I(a));
}), c.filteredReplicationControllers = h.filterForKeywords(s, w, x);
}, L = function() {
t = _.filter(c.replicaSets, function(a) {
return !c.filters.hideOlderResources || _.get(a, "status.replicas");
}), c.filteredReplicaSets = h.filterForKeywords(t, w, x);
};
c.toggleItem = function(a, b, e) {
var f = $(a.target);
if (!f || !f.closest("a", b).length) {
var g, h;
switch (e.kind) {
case "Build":
g = !c.expanded.builds[e.metadata.name], c.expanded.builds[e.metadata.name] = g, h = g ? "event.resource.highlight" :"event.resource.clear-highlight", n.$emit(h, e);
var i = _.get(c.podsByName, d("annotation")(e, "buildPod"));
i && n.$emit(h, i);
break;

case "ReplicationController":
g = !c.expanded.replicationControllers[e.metadata.name], c.expanded.replicationControllers[e.metadata.name] = g, h = g ? "event.resource.highlight" :"event.resource.clear-highlight", n.$emit(h, e);
var j = d("annotation")(e, "deployerPod");
j && n.$emit(h, {
kind:"Pod",
metadata:{
name:j
}
}), _.each(c.podsByOwnerUID[e.metadata.uid], function(a) {
n.$emit(h, a);
});
break;

case "ReplicaSet":
g = !c.expanded.replicaSets[e.metadata.name], c.expanded.replicaSets[e.metadata.name] = g, h = g ? "event.resource.highlight" :"event.resource.clear-highlight", n.$emit(h, e), _.each(c.podsByOwnerUID[e.metadata.uid], function(a) {
n.$emit(h, a);
});
break;

case "Pod":
g = !c.expanded.pods[e.metadata.name], c.expanded.pods[e.metadata.name] = g, h = g ? "event.resource.highlight" :"event.resource.clear-highlight", n.$emit(h, e);
break;

case "StatefulSet":
g = !c.expanded.statefulSets[e.metadata.name], c.expanded.statefulSets[e.metadata.name] = g, h = g ? "event.resource.highlight" :"event.resource.clear-highlight", n.$emit(h, e);
}
}
}, c.viewPodsForSet = function(a) {
var b = _.get(c, [ "podsByOwnerUID", a.metadata.uid ], []);
_.isEmpty(b) || k.toPodsForDeployment(a, b);
}, m.get(a.project).then(_.spread(function(a, d) {
c.project = a, c.projectContext = d, f.watch("pods", d, function(a) {
c.podsByName = a.by("metadata.name"), c.pods = v(c.podsByName, !0), c.podsByOwnerUID = l.groupByOwnerUID(c.pods), c.podsLoaded = !0, _.each(c.pods, z), D(), i.log("pods", c.pods);
}), f.watch({
resource:"statefulsets",
group:"apps",
version:"v1beta1"
}, d, function(a) {
c.statefulSets = a.by("metadata.name"), c.statefulSetsLoaded = !0, C(), i.log("statefulSets", c.statefulSets);
}), f.watch("replicationcontrollers", d, function(a) {
c.replicationControllers = v(a.by("metadata.name"), !0), c.replicationControllersLoaded = !0, _.each(c.replicationControllers, A), K(), i.log("replicationcontrollers", c.replicationControllers);
}), f.watch("builds", d, function(a) {
c.builds = v(a.by("metadata.name"), !0), c.latestBuildByConfig = e.latestBuildByConfig(c.builds), c.buildsLoaded = !0, _.each(c.builds, B), H(), i.log("builds", c.builds);
}), f.watch({
group:"extensions",
resource:"replicasets"
}, d, function(a) {
c.replicaSets = v(a.by("metadata.name"), !0), c.replicaSetsLoaded = !0, L(), i.log("replicasets", c.replicaSets);
}), c.$on("$destroy", function() {
f.unwatchAll(p);
}), c.$watch("filters.hideOlderResources", function() {
D(), H(), K(), L(), C();
var a = b.search();
a.hideOlderResources = c.filters.hideOlderResources ? "true" :"false", b.replace().search(a);
}), c.$watch("kindSelector.selected.kind", function() {
var a = b.search();
a.kind = c.kindSelector.selected.kind, b.replace().search(a);
}), c.$watch("filters.text", _.debounce(function() {
c.filterKeywords = x = h.generateKeywords(c.filters.text), c.$apply(y);
}, 50, {
maxWait:250
})), c.$watch("renderOptions.collapseEventsSidebar", function(a, b) {
a !== b && (localStorage.setItem("monitoring.eventsidebar.collapsed", c.renderOptions.collapseEventsSidebar ? "true" :"false"), n.$emit("metrics.charts.resize"));
});
}));
} ]), angular.module("openshiftConsole").controller("MembershipController", [ "$filter", "$location", "$routeParams", "$scope", "$timeout", "$uibModal", "AuthService", "AuthorizationService", "DataService", "ProjectsService", "MembershipService", "NotificationsService", "RoleBindingsService", "RolesService", "gettext", "gettextCatalog", function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
var q, r = c.project, s = a("humanizeKind"), t = a("annotation"), u = a("canI"), v = [], w = {
notice:{
yourLastRole:_.template(p.getString(o('Removing the role "<%= roleName %>" may completely remove your ability to see this project.')))
},
warning:{
serviceAccount:_.template(p.getString(o("Removing a system role granted to a service account may cause unexpected behavior.")))
},
remove:{
areYouSure:{
html:{
subject:_.template(p.getString(o("Are you sure you want to remove <strong><%- roleName %></strong> from the <%- kindName %> <strong><%- subjectName %></strong>?"))),
self:_.template(p.getString(o("Are you sure you want to remove <strong><%- roleName %></strong> from <strong><%- subjectName %></strong> (you)?")))
}
},
success:_.template('The role "<%= roleName %>" was removed from "<%= subjectName %>".'),
error:_.template('The role "<%= roleName %>" was not removed from "<%= subjectName %>".')
},
update:{
subject:{
success:_.template('The role "<%= roleName %>" was granted to "<%= subjectName %>".'),
error:_.template('The role "<%= roleName %>" could not be granted to "<%= subjectName %>".'),
exists:_.template('The role "<%= roleName %>" has already been granted to "<%= subjectName %>".')
}
},
errorReason:_.template('Reason: "<%= httpErr %>"')
}, x = function(a, b, c) {
l.addNotification({
type:a,
message:b,
details:c
});
}, y = function() {
d.disableAddForm = !1, d.newBinding.name = "", d.newBinding.namespace = r, d.newBinding.newRole = null;
}, z = function(a) {
i.list("serviceaccounts", a).then(function(a) {
var b = _.keys(a.by("metadata.name")).sort();
angular.extend(d, {
serviceAccounts:b,
refreshServiceAccounts:function(a) {
a && !_.includes(d.serviceAccounts, a) ? d.serviceAccounts = [ a ].concat(b) :d.serviceAccounts = b;
}
});
});
}, A = function(a) {
i.list("rolebindings", q, null, {
errorNotification:!1
}).then(function(a) {
angular.extend(d, {
canShowRoles:!0,
roleBindings:a.by("metadata.name"),
subjectKindsForUI:k.mapRolebindingsForUI(a.by("metadata.name"), v)
}), y();
}, function() {
a && (d.roleBindings[a.metadata.name] = a, d.subjectKindsForUI = k.mapRolebindingsForUI(d.roleBindings, v)), y();
});
}, B = function(b, c) {
d.disableAddForm = !0, m.create(b, c, r, q).then(function() {
A(), x("success", w.update.subject.success({
roleName:b.metadata.name,
subjectName:c.name
}));
}, function(d) {
y(), A(), x("error", w.update.subject.error({
roleName:b.metadata.name,
subjectName:c.name
}), w.errorReason({
httpErr:a("getErrorDetails")(d)
}));
});
}, C = function(b, c, e) {
d.disableAddForm = !0, m.addSubject(b, c, e, q).then(function() {
A(), x("success", w.update.subject.success({
roleName:b.roleRef.name,
subjectName:c.name
}));
}, function(d) {
y(), A(), x("error", w.update.subject.error({
roleName:b.roleRef.name,
subjectName:c.name
}), w.errorReason({
httpErr:a("getErrorDetails")(d)
}));
});
}, D = {};
c.tab && (D[c.tab] = !0);
var E = k.getSubjectKinds();
angular.extend(d, {
selectedTab:D,
projectName:r,
forms:{},
subjectKinds:E,
newBinding:{
role:"",
kind:c.tab || "User",
name:""
},
toggleEditMode:function() {
y(), d.mode.edit = !d.mode.edit;
},
mode:{
edit:!1
},
selectTab:function(a) {
d.newBinding.kind = a, d.newBinding.name = "";
}
}), angular.extend(d, {
excludeExistingRoles:function(a) {
return function(b) {
return !_.some(a, {
kind:b.kind,
metadata:{
name:b.metadata.name
}
});
};
},
roleHelp:function(a) {
if (a) {
var b = "", c = _.get(a, "metadata.namespace"), d = _.get(a, "metadata.name"), e = c ? c + " / " + d + ": " :"";
return a ? e + (t(a, "description") || b) :b;
}
}
});
var F = function(a, b, c, e) {
var f = {
alerts:{},
detailsMarkup:w.remove.areYouSure.html.subject({
roleName:c,
kindName:p.getString(s(b)),
subjectName:a
}),
okButtonText:p.getString(o("Remove")),
okButtonClass:"btn-danger",
cancelButtonText:p.getString(o("Cancel"))
};
return _.isEqual(a, e) && (f.detailsMarkup = w.remove.areYouSure.html.self({
roleName:c,
subjectName:a
}), k.isLastRole(d.user.metadata.name, d.roleBindings) && (f.alerts.currentUserLabelRole = {
type:"error",
message:w.notice.yourLastRole({
roleName:c
})
})), _.isEqual(b, "ServiceAccount") && _.startsWith(c, "system:") && (f.alerts.editingServiceAccountRole = {
type:"error",
message:w.warning.serviceAccount()
}), f;
};
g.withUser().then(function(a) {
d.user = a;
}), i.list("projects", {}).then(function(a) {
var b = _.keys(a.by("metadata.name")).sort();
angular.extend(d, {
projects:b,
selectProject:function(a) {
d.newBinding.name = "", z({
namespace:a
});
},
refreshProjects:function(a) {
a && !_.includes(d.projects, a) ? d.projects = [ a ].concat(b) :d.projects = b;
}
});
}), j.get(c.project).then(_.spread(function(c, e) {
q = e, A(), z(q), angular.extend(d, {
project:c,
subjectKinds:E,
canUpdateRolebindings:u("rolebindings", "update", r),
confirmRemove:function(c, e, g) {
var i = null, j = F(c, e, g, d.user.metadata.name);
_.isEqual(c, d.user.metadata.name) && k.isLastRole(d.user.metadata.name, d.roleBindings) && (i = !0), f.open({
animation:!0,
templateUrl:"views/modals/confirm.html",
controller:"ConfirmModalController",
resolve:{
modalConfig:function() {
return j;
}
}
}).result.then(function() {
m.removeSubject(c, g, d.roleBindings, q).then(function(a) {
i ? b.url("./") :(h.getProjectRules(r, !0).then(function() {
A(a[0]);
var b = u("rolebindings", "update", r);
angular.extend(d, {
canUpdateRolebindings:b,
mode:{
edit:!!d.mode.edit && b
}
});
}), x("success", w.remove.success({
roleName:g,
subjectName:c
})));
}, function(b) {
x("error", w.remove.error({
roleName:g,
subjectName:c
}), w.errorReason({
httpErr:a("getErrorDetails")(b)
}));
});
});
},
addRoleTo:function(a, b, c, e) {
var f = {
name:a,
kind:b
};
"ServiceAccount" === b && (f.namespace = e);
var g = _.find(d.roleBindings, {
roleRef:{
name:c.metadata.name
}
});
g && _.some(g.subjects, f) ? x("error", w.update.subject.exists({
roleName:c.metadata.name,
subjectName:a
})) :g ? C(g, f, e) :B(c, f, e);
}
}), n.listAllRoles(q, {
errorNotification:!1
}).then(function(a) {
v = k.mapRolesForUI(_.first(a).by("metadata.name"), _.last(a).by("metadata.name"));
var b = k.sortRoles(v), c = k.filterRoles(v), e = function(a, b) {
return _.some(b, {
metadata:{
name:a
}
});
};
A(), angular.extend(d, {
toggle:{
roles:!1
},
filteredRoles:c,
showAllRoles:function() {
d.toggle.roles = !d.toggle.roles, d.toggle.roles ? d.filteredRoles = b :(d.filteredRoles = c, e(d.newBinding.role, c) || (d.newBinding.role = null));
}
});
});
}));
} ]), angular.module("openshiftConsole").controller("BuildsController", [ "$routeParams", "$scope", "DataService", "$filter", "LabelFilter", "Logger", "$location", "BuildsService", "ProjectsService", "gettext", function(a, b, c, d, e, f, g, h, i, j) {
b.projectName = a.project, b.builds = {}, b.unfilteredBuildConfigs = {}, b.buildConfigs = void 0, b.labelSuggestions = {}, b.alerts = b.alerts || {}, b.emptyMessage = j("Loading..."), b.latestByConfig = {};
var k = d("buildConfigForBuild"), l = [];
i.get(a.project).then(_.spread(function(a, g) {
function i(a) {
var c = e.getLabelSelector();
if (c.isEmpty()) return !0;
var d = k(a) || "";
return d && b.unfilteredBuildConfigs[d] ? !!b.buildConfigs[d] :c.matches(a);
}
function m() {
b.latestByConfig = h.latestBuildByConfig(b.builds, i), angular.forEach(b.buildConfigs, function(a, c) {
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
l.push(c.watch("builds", g, function(a) {
b.builds = _.omit(a.by("metadata.name"), o), b.emptyMessage = j("No builds to show"), m(), e.addLabelSuggestionsFromResources(b.builds, b.labelSuggestions), f.log("builds (subscribe)", b.builds);
})), l.push(c.watch("buildconfigs", g, function(a) {
b.unfilteredBuildConfigs = _.omit(a.by("metadata.name"), o), e.addLabelSuggestionsFromResources(b.unfilteredBuildConfigs, b.labelSuggestions), e.setLabelSuggestions(b.labelSuggestions), b.buildConfigs = e.getLabelSelector().select(b.unfilteredBuildConfigs), m(), n(), f.log("buildconfigs (subscribe)", b.buildConfigs);
})), e.onActiveFiltersChanged(function(a) {
b.$apply(function() {
b.buildConfigs = a.select(b.unfilteredBuildConfigs), m(), n();
});
}), b.$on("$destroy", function() {
c.unwatchAll(l);
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
count:0,
totalDuration:0
});
var d = c.statsByConfig[a];
d.count++, d.totalDuration += f.getDuration(b), d.avgDuration = _.round(d.totalDuration / d.count);
}
}, p = function() {
var a = {}, b = {};
c.statsByConfig = {}, _.each(i, function(d) {
if (m(d)) {
var e = k(d) || "";
c.buildConfigs[e] || (c.buildConfigs[e] = null), l(d) ? _.set(a, [ e, d.metadata.name ], d) :n(d, b[e]) && (b[e] = d), o(e, d);
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
if (c.buildConfigsLoaded = !0, c.buildConfigs = _.pick(a.by("metadata.name"), m), _.isEmpty(c.buildConfigs) && !q && (q = !0, d.SAMPLE_PIPELINE_TEMPLATE)) {
var b = d.SAMPLE_PIPELINE_TEMPLATE.name, f = d.SAMPLE_PIPELINE_TEMPLATE.namespace;
g.get("templates", b, {
namespace:f
}, {
errorNotification:!1
}).then(function(a) {
c.createSampleURL = e.createFromTemplateURL(a, c.projectName);
});
}
p();
})), c.startBuild = f.startBuild, c.$on("$destroy", function() {
g.unwatchAll(j);
});
}));
} ]), angular.module("openshiftConsole").controller("BuildConfigController", [ "$scope", "$filter", "$routeParams", "APIService", "BuildsService", "ImagesService", "DataService", "LabelFilter", "ModalsService", "ProjectsService", "keyValueEditorUtils", "gettext", "gettextCatalog", function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
a.projectName = c.project, a.buildConfigName = c.buildconfig, a.buildConfig = null, a.labelSuggestions = {}, a.alerts = {}, a.breadcrumbs = [], a.forms = {}, a.expand = {
imageEnv:!1
}, c.isPipeline ? a.breadcrumbs.push({
title:"Pipelines",
link:"project/" + c.project + "/browse/pipelines"
}) :a.breadcrumbs.push({
title:"Builds",
link:"project/" + c.project + "/browse/builds"
}), a.breadcrumbs.push({
title:c.buildconfig
}), a.emptyMessage = m.getString(l("Loading...")), a.aceLoaded = function(a) {
var b = a.getSession();
b.setOption("tabSize", 2), b.setOption("useSoftTabs", !0), a.$blockScrolling = 1 / 0;
};
var n, o = b("buildConfigForBuild"), p = b("buildStrategy"), q = [], r = function(b) {
a.updatedBuildConfig = angular.copy(b), a.envVars = p(a.updatedBuildConfig).env || [];
};
a.compareTriggers = function(a, b) {
return _.isNumber(a.value) ? -1 :"ConfigChange" === a.value ? -1 :"ConfigChange" === b.value ? 1 :"ImageChange" === a.value ? -1 :"ImageChange" === b.value ? 1 :a.value.localeCompare(b.value);
}, a.saveEnvVars = function() {
a.envVars = _.filter(a.envVars, "name"), p(a.updatedBuildConfig).env = k.compactEntries(angular.copy(a.envVars)), g.update("buildconfigs", c.buildconfig, a.updatedBuildConfig, n).then(function() {
a.alerts.saveBCEnvVarsSuccess = {
type:"success",
message:a.buildConfigName + " was updated."
}, a.forms.bcEnvVars.$setPristine();
}, function(c) {
a.alerts.saveBCEnvVarsError = {
type:"error",
message:a.buildConfigName + " was not updated.",
details:b("getErrorDetails")(c)
};
});
}, a.clearEnvVarUpdates = function() {
r(a.buildConfig), a.forms.bcEnvVars.$setPristine();
};
var s, t = function(c, h) {
a.loaded = !0, a.buildConfig = c, a.buildConfigPaused = e.isPaused(a.buildConfig), a.buildConfig.spec.source.images && (a.imageSources = a.buildConfig.spec.source.images, a.imageSourcesPaths = [], a.imageSources.forEach(function(c) {
a.imageSourcesPaths.push(b("destinationSourcePair")(c.paths));
}));
var i = _.get(p(c), "from", {}), j = i.kind + "/" + i.name + "/" + (i.namespace || a.projectName);
s !== j && (_.includes([ "ImageStreamTag", "ImageStreamImage" ], i.kind) ? (s = j, g.get(d.kindToResource(i.kind), i.name, {
namespace:i.namespace || a.projectName
}, {
errorNotification:!1
}).then(function(b) {
a.BCEnvVarsFromImage = f.getEnvironment(b);
}, function() {
a.BCEnvVarsFromImage = [];
})) :a.BCEnvVarsFromImage = []), r(c), "DELETED" === h && (a.alerts.deleted = {
type:"warning",
message:"This build configuration has been deleted."
}, a.buildConfigDeleted = !0), !a.forms.bcEnvVars || a.forms.bcEnvVars.$pristine ? r(c) :a.alerts.background_update = {
type:"warning",
message:"This build configuration has been updated in the background. Saving your changes may create a conflict or cause loss of data.",
links:[ {
label:"Reload Environment Variables",
onClick:function() {
return a.clearEnvVarUpdates(), !0;
}
} ]
}, a.paused = e.isPaused(a.buildConfig);
};
j.get(c.project).then(_.spread(function(d, f) {
function j() {
h.getLabelSelector().isEmpty() || !$.isEmptyObject(a.builds) || $.isEmptyObject(a.unfilteredBuilds) ? delete a.alerts.builds :a.alerts.builds = {
type:"warning",
details:"The active filters are hiding all builds."
};
}
a.project = d, n = f, g.get("buildconfigs", c.buildconfig, f, {
errorNotification:!1
}).then(function(a) {
t(a), q.push(g.watchObject("buildconfigs", c.buildconfig, f, t));
}, function(c) {
a.loaded = !0, a.alerts.load = {
type:"error",
message:404 === c.status ? "This build configuration can not be found, it may have been deleted." :"The build configuration details could not be loaded.",
details:404 === c.status ? "Any remaining build history for this build will be shown." :b("getErrorDetails")(c)
};
}), q.push(g.watch("builds", f, function(b, d, f) {
if (a.emptyMessage = l("No builds to show"), d) {
var g = o(f);
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
a.builds = h.getLabelSelector().select(a.unfilteredBuilds), j(), h.addLabelSuggestionsFromResources(a.unfilteredBuilds, a.labelSuggestions), h.setLabelSuggestions(a.labelSuggestions), a.orderedBuilds = e.sortBuilds(a.builds, !0), a.latestBuild = _.first(a.orderedBuilds);
}, {
http:{
params:{
labelSelector:b("labelName")("buildConfig") + "=" + _.trunc(a.buildConfigName, {
length:63,
omission:""
})
}
}
})), h.onActiveFiltersChanged(function(b) {
a.$apply(function() {
a.builds = b.select(a.unfilteredBuilds), a.orderedBuilds = e.sortBuilds(a.builds, !0), a.latestBuild = _.first(a.orderedBuilds), j();
});
}), a.startBuild = function() {
e.startBuild(a.buildConfig);
}, a.showJenkinsfileExamples = function() {
i.showJenkinsfileExamples();
}, a.$on("$destroy", function() {
g.unwatchAll(q);
});
}));
} ]), angular.module("openshiftConsole").controller("BuildController", [ "$scope", "$filter", "$routeParams", "BuildsService", "DataService", "ModalsService", "Navigate", "ProjectsService", function(a, b, c, d, e, f, g, h) {
a.projectName = c.project, a.build = null, a.buildConfig = null, a.buildConfigName = c.buildconfig, a.builds = {}, a.alerts = {}, a.showSecret = !1, a.renderOptions = {
hideFilterWidget:!0
}, a.breadcrumbs = [], c.isPipeline ? (a.breadcrumbs.push({
title:"Pipelines",
link:"project/" + c.project + "/browse/pipelines"
}), c.buildconfig && a.breadcrumbs.push({
title:c.buildconfig,
link:"project/" + c.project + "/browse/pipelines/" + c.buildconfig
})) :(a.breadcrumbs.push({
title:"Builds",
link:"project/" + c.project + "/browse/builds"
}), c.buildconfig && a.breadcrumbs.push({
title:c.buildconfig,
link:"project/" + c.project + "/browse/builds/" + c.buildconfig
})), a.breadcrumbs.push({
title:c.build
});
var i, j = b("annotation"), k = [], l = function(b) {
a.logCanRun = !_.includes([ "New", "Pending", "Error" ], b.status.phase);
}, m = function() {
a.buildConfig ? a.canBuild = d.canBuild(a.buildConfig) :a.canBuild = !1;
};
h.get(c.project).then(_.spread(function(g, h) {
a.project = g, a.projectContext = h, a.logOptions = {};
var n = function() {
i ? a.eventObjects = [ a.build, i ] :a.eventObjects = [ a.build ];
}, o = function(b, c) {
a.loaded = !0, a.build = b, l(b), n();
var d = j(b, "buildNumber");
d && (a.breadcrumbs[2].title = "#" + d), "DELETED" === c && (a.alerts.deleted = {
type:"warning",
message:"This build has been deleted."
});
var f;
i || (f = j(b, "buildPod"), f && e.get("pods", f, h, {
errorNotification:!1
}).then(function(a) {
i = a, n();
}));
}, p = function(c) {
a.loaded = !0, a.alerts.load = {
type:"error",
message:"The build details could not be loaded.",
details:b("getErrorDetails")(c)
};
}, q = function(b, c) {
"DELETED" === c && (a.alerts.deleted = {
type:"warning",
message:"Build configuration " + a.buildConfigName + " has been deleted."
}, a.buildConfigDeleted = !0), a.buildConfig = b, a.buildConfigPaused = d.isPaused(a.buildConfig), m();
};
e.get("builds", c.build, h, {
errorNotification:!1
}).then(function(a) {
o(a), k.push(e.watchObject("builds", c.build, h, o)), k.push(e.watchObject("buildconfigs", c.buildconfig, h, q));
}, p), a.toggleSecret = function() {
a.showSecret = !0;
}, a.cancelBuild = function() {
d.cancelBuild(a.build, a.buildConfigName);
}, a.cloneBuild = function() {
a.build && a.canBuild && d.cloneBuild(a.build, a.buildConfigName);
}, a.showJenkinsfileExamples = function() {
f.showJenkinsfileExamples();
}, a.$on("$destroy", function() {
e.unwatchAll(k);
});
}));
} ]), angular.module("openshiftConsole").controller("ImageController", [ "$scope", "$routeParams", "DataService", "ProjectsService", "$filter", "ImageStreamsService", "imageLayers", function(a, b, c, d, e, f, g) {
function h(c, d) {
var e = f.tagsByName(c);
a.imageStream = c, a.tagsByName = e, a.tagName = b.tag;
var g = e[b.tag];
return g ? (delete a.alerts.load, void j(g, d)) :void (a.alerts.load = {
type:"error",
message:"The image tag was not found in the stream."
});
}
a.projectName = b.project, a.imageStream = null, a.image = null, a.layers = null, a.tagsByName = {}, a.alerts = {}, a.renderOptions = a.renderOptions || {}, a.renderOptions.hideFilterWidget = !0, a.breadcrumbs = [ {
title:"Image Streams",
link:"project/" + b.project + "/browse/images"
}, {
title:b.imagestream,
link:"project/" + b.project + "/browse/images/" + b.imagestream
}, {
title:":" + b.tag
} ];
var i = [], j = _.debounce(function(d, f) {
var h = b.imagestream + ":" + b.tag;
c.get("imagestreamtags", h, f).then(function(b) {
a.loaded = !0, a.image = b.image, a.layers = g(a.image);
}, function(b) {
a.loaded = !0, a.alerts.load = {
type:"error",
message:"The image details could not be loaded.",
details:e("getErrorDetails")(b)
};
});
}, 200), k = function(b, c, d) {
h(b, c), "DELETED" === d && (a.alerts.deleted = {
type:"warning",
message:"This image stream has been deleted."
});
};
d.get(b.project).then(_.spread(function(d, f) {
a.project = d, c.get("imagestreams", b.imagestream, f, {
errorNotification:!1
}).then(function(a) {
k(a, f), i.push(c.watchObject("imagestreams", b.imagestream, f, function(a, b) {
k(a, f, b);
}));
}, function(b) {
a.loaded = !0, a.alerts.load = {
type:"error",
message:"The image stream details could not be loaded.",
details:e("getErrorDetails")(b)
};
}), a.$on("$destroy", function() {
c.unwatchAll(i);
});
}));
} ]), angular.module("openshiftConsole").controller("ImagesController", [ "$routeParams", "$scope", "DataService", "ProjectsService", "$filter", "LabelFilter", "Logger", "gettext", function(a, b, c, d, e, f, g, h) {
b.projectName = a.project, b.imageStreams = {}, b.unfilteredImageStreams = {}, b.missingStatusTagsByImageStream = {}, b.builds = {}, b.labelSuggestions = {}, b.alerts = b.alerts || {}, b.emptyMessage = h("Loading...");
var i = [];
d.get(a.project).then(_.spread(function(a, d) {
function e() {
angular.forEach(b.unfilteredImageStreams, function(a, c) {
var d = b.missingStatusTagsByImageStream[c] = {};
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
function j() {
f.getLabelSelector().isEmpty() || !$.isEmptyObject(b.imageStreams) || $.isEmptyObject(b.unfilteredImageStreams) ? delete b.alerts.imageStreams :b.alerts.imageStreams = {
type:"warning",
details:"The active filters are hiding all image streams."
};
}
b.project = a, i.push(c.watch("imagestreams", d, function(a) {
b.unfilteredImageStreams = a.by("metadata.name"), f.addLabelSuggestionsFromResources(b.unfilteredImageStreams, b.labelSuggestions), f.setLabelSuggestions(b.labelSuggestions), b.imageStreams = f.getLabelSelector().select(b.unfilteredImageStreams), b.emptyMessage = h("No image streams to show"), e(), j(), g.log("image streams (subscribe)", b.imageStreams);
})), f.onActiveFiltersChanged(function(a) {
b.$apply(function() {
b.imageStreams = a.select(b.unfilteredImageStreams), j();
});
}), b.$on("$destroy", function() {
c.unwatchAll(i);
});
}));
} ]), angular.module("openshiftConsole").controller("ImageStreamController", [ "$scope", "$routeParams", "DataService", "ProjectsService", "$filter", "ImageStreamsService", "Navigate", "gettext", function(a, b, c, d, e, f, g, h) {
a.projectName = b.project, a.imageStream = null, a.tags = [], a.tagShowOlder = {}, a.alerts = {}, a.renderOptions = a.renderOptions || {}, a.renderOptions.hideFilterWidget = !0, a.breadcrumbs = [ {
title:"Image Streams",
link:"project/" + b.project + "/browse/images"
}, {
title:b.imagestream
} ], a.emptyMessage = h("Loading...");
var i = [];
d.get(b.project).then(_.spread(function(d, g) {
a.project = d, c.get("imagestreams", b.imagestream, g, {
errorNotification:!1
}).then(function(d) {
a.loaded = !0, a.imageStream = d, a.emptyMessage = h("No tags to show"), i.push(c.watchObject("imagestreams", b.imagestream, g, function(b, c) {
"DELETED" === c && (a.alerts.deleted = {
type:"warning",
message:"This image stream has been deleted."
}), a.imageStream = b, a.tags = _.toArray(f.tagsByName(a.imageStream));
}));
}, function(b) {
a.loaded = !0, a.alerts.load = {
type:"error",
message:"The image stream details could not be loaded.",
details:e("getErrorDetails")(b)
};
}), a.$on("$destroy", function() {
c.unwatchAll(i);
});
})), a.imagestreamPath = function(a, b) {
if (!b.status) return "";
var c = g.resourceURL(a.metadata.name, "ImageStream", a.metadata.namespace);
return b && (c += "/" + b.name), c;
};
} ]), angular.module("openshiftConsole").controller("DeploymentsController", [ "$scope", "$filter", "$routeParams", "DataService", "DeploymentsService", "LabelFilter", "Logger", "OwnerReferencesService", "ProjectsService", "gettext", function(a, b, c, d, e, f, g, h, i, j) {
a.projectName = c.project, a.replicationControllers = {}, a.unfilteredDeploymentConfigs = {}, a.unfilteredDeployments = {}, a.replicationControllersByDC = {}, a.labelSuggestions = {}, a.alerts = a.alerts || {}, a.emptyMessage = j("Loading..."), a.expandedDeploymentConfigRow = {}, a.unfilteredReplicaSets = {}, a.unfilteredReplicationControllers = {};
var k, l, m = b("annotation"), n = function() {
k && l && (a.replicaSetsByDeploymentUID = h.groupByControllerUID(k), a.unfilteredReplicaSets = _.get(a, [ "replicaSetsByDeploymentUID", "" ], {}), f.addLabelSuggestionsFromResources(a.unfilteredReplicaSets, a.labelSuggestions), f.setLabelSuggestions(a.labelSuggestions), a.replicaSets = f.getLabelSelector().select(a.unfilteredReplicaSets), a.latestReplicaSetByDeploymentUID = {}, _.each(a.replicaSetsByDeploymentUID, function(b, c) {
c && (a.latestReplicaSetByDeploymentUID[c] = e.getActiveReplicaSet(b, l[c]));
}));
}, o = [];
i.get(c.project).then(_.spread(function(c, h) {
function i() {
var b = !f.getLabelSelector().isEmpty();
if (!b) return void delete a.alerts.deployments;
var c = _.isEmpty(a.unfilteredDeploymentConfigs) && _.isEmpty(a.unfilteredReplicationControllers) && _.isEmpty(a.unfilteredDeployments) && _.isEmpty(a.unfilteredReplicaSets);
if (c) return void delete a.alerts.deployments;
var d = _.isEmpty(a.deploymentConfigs) && _.isEmpty(a.replicationControllersByDC[""]) && _.isEmpty(a.deployments) && _.isEmpty(a.replicaSets);
return d ? void (a.alerts.deployments = {
type:"warning",
details:"The active filters are hiding all deployments."
}) :void delete a.alerts.deployments;
}
a.project = c, o.push(d.watch("replicationcontrollers", h, function(c, d, h) {
a.replicationControllers = c.by("metadata.name");
var j, k;
if (h && (j = m(h, "deploymentConfig"), k = h.metadata.name), a.replicationControllersByDC = e.associateDeploymentsToDeploymentConfig(a.replicationControllers, a.deploymentConfigs, !0), a.replicationControllersByDC[""] && (a.unfilteredReplicationControllers = a.replicationControllersByDC[""], f.addLabelSuggestionsFromResources(a.unfilteredReplicationControllers, a.labelSuggestions), f.setLabelSuggestions(a.labelSuggestions), a.replicationControllersByDC[""] = f.getLabelSelector().select(a.replicationControllersByDC[""])), i(), d) {
if ("ADDED" === d || "MODIFIED" === d && [ "New", "Pending", "Running" ].indexOf(b("deploymentStatus")(h)) > -1) a.deploymentConfigDeploymentsInProgress[j] = a.deploymentConfigDeploymentsInProgress[j] || {}, a.deploymentConfigDeploymentsInProgress[j][k] = h; else if ("MODIFIED" === d) {
var l = b("deploymentStatus")(h);
"Complete" !== l && "Failed" !== l || delete a.deploymentConfigDeploymentsInProgress[j][k];
}
} else a.deploymentConfigDeploymentsInProgress = e.associateRunningDeploymentToDeploymentConfig(a.replicationControllersByDC);
h ? "DELETED" !== d && (h.causes = b("deploymentCauses")(h)) :angular.forEach(a.replicationControllers, function(a) {
a.causes = b("deploymentCauses")(a);
}), g.log("replicationControllers (subscribe)", a.replicationControllers);
})), o.push(d.watch({
group:"extensions",
resource:"replicasets"
}, h, function(b) {
k = b.by("metadata.name"), n(), g.log("replicasets (subscribe)", a.replicaSets);
})), o.push(d.watch("deploymentconfigs", h, function(b) {
a.unfilteredDeploymentConfigs = b.by("metadata.name"), f.addLabelSuggestionsFromResources(a.unfilteredDeploymentConfigs, a.labelSuggestions), f.setLabelSuggestions(a.labelSuggestions), a.deploymentConfigs = f.getLabelSelector().select(a.unfilteredDeploymentConfigs), a.emptyMessage = j("No deployment configurations to show"), a.replicationControllersByDC = e.associateDeploymentsToDeploymentConfig(a.replicationControllers, a.deploymentConfigs, !0), a.replicationControllersByDC[""] && (a.unfilteredReplicationControllers = a.replicationControllersByDC[""], a.replicationControllersByDC[""] = f.getLabelSelector().select(a.replicationControllersByDC[""])), i(), g.log("deploymentconfigs (subscribe)", a.deploymentConfigs);
})), o.push(d.watch({
group:"extensions",
resource:"deployments"
}, h, function(b) {
l = a.unfilteredDeployments = b.by("metadata.uid"), f.addLabelSuggestionsFromResources(a.unfilteredDeployments, a.labelSuggestions), f.setLabelSuggestions(a.labelSuggestions), a.deployments = f.getLabelSelector().select(a.unfilteredDeployments), n(), g.log("deployments (subscribe)", a.unfilteredDeployments);
})), a.showEmptyMessage = function() {
return 0 === b("hashSize")(a.replicationControllersByDC) || !(1 !== b("hashSize")(a.replicationControllersByDC) || !a.replicationControllersByDC[""]);
}, f.onActiveFiltersChanged(function(b) {
a.$apply(function() {
a.deploymentConfigs = b.select(a.unfilteredDeploymentConfigs), a.replicationControllersByDC = e.associateDeploymentsToDeploymentConfig(a.replicationControllers, a.deploymentConfigs, !0), a.replicationControllersByDC[""] && (a.unfilteredReplicationControllers = a.replicationControllersByDC[""], a.replicationControllersByDC[""] = f.getLabelSelector().select(a.replicationControllersByDC[""])), a.deployments = b.select(a.unfilteredDeployments), a.replicaSets = b.select(a.unfilteredReplicaSets), i();
});
}), a.$on("$destroy", function() {
d.unwatchAll(o);
});
}));
} ]), angular.module("openshiftConsole").controller("DeploymentController", [ "$scope", "$filter", "$routeParams", "DataService", "DeploymentsService", "EnvironmentService", "HPAService", "ImageStreamResolver", "ModalsService", "Navigate", "OwnerReferencesService", "Logger", "ProjectsService", "StorageService", "gettext", "gettextCatalog", function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
var q = {};
a.projectName = c.project, a.name = c.deployment, a.forms = {}, a.alerts = {}, a.imagesByDockerReference = {}, a.breadcrumbs = [ {
title:o("Deployments"),
link:"project/" + c.project + "/browse/deployments"
}, {
title:c.deployment
} ], a.healthCheckURL = j.healthCheckURL(c.project, "Deployment", c.deployment, "extensions");
var r = !1, s = function(b, c) {
if (!r) {
if (!a.forms.deploymentEnvVars || a.forms.deploymentEnvVars.$pristine) return void (a.updatedDeployment = f.copyAndNormalize(b));
if (f.isEnvironmentEqual(b, c)) return void (a.updatedDeployment = f.mergeEdits(a.updatedDeployment, b));
r = !0, a.alerts["env-conflict"] = {
type:"warning",
message:o("The environment variables for the deployment have been updated in the background. Saving your changes may create a conflict or cause loss of data."),
links:[ {
label:p.getString(o("Reload Environment Variables")),
onClick:function() {
return a.clearEnvVarUpdates(), !0;
}
} ]
};
}
}, t = b("orderByDisplayName"), u = b("getErrorDetails"), v = function(b, c) {
a.alerts["from-value-objects"] = {
type:"error",
message:b,
details:c
};
}, w = [];
m.get(c.project).then(_.spread(function(j, m) {
a.project = j, a.projectContext = m;
var x, y = {}, z = function() {
g.getHPAWarnings(a.deployment, a.autoscalers, y, j).then(function(b) {
a.hpaWarnings = b;
});
};
d.get({
group:"extensions",
resource:"deployments"
}, c.deployment, m, {
errorNotification:!1
}).then(function(g) {
a.loaded = !0, a.deployment = g, z(), a.saveEnvVars = function() {
f.compact(a.updatedDeployment), x = d.update({
group:"extensions",
resource:"deployments"
}, c.deployment, a.updatedDeployment, m), x.then(function() {
a.alerts.saveEnvSuccess = {
type:"success",
message:c.deployment + " was updated."
}, a.forms.deploymentEnvVars.$setPristine();
}, function(d) {
a.alerts.saveEnvError = {
type:"error",
message:c.deployment + " was not updated.",
details:b("getErrorDetails")(d)
};
})["finally"](function() {
x = null;
});
}, a.clearEnvVarUpdates = function() {
a.updatedDeployment = f.copyAndNormalize(a.deployment), a.forms.deploymentEnvVars.$setPristine(), r = !1;
}, w.push(d.watchObject({
group:"extensions",
resource:"deployments"
}, c.deployment, m, function(b, c) {
"DELETED" === c && (a.alerts.deleted = {
type:"warning",
message:"This deployment has been deleted."
});
var d = a.deployment;
a.deployment = b, a.updatingPausedState = !1, z(), s(b, d), x ? x["finally"](function() {
s(b, d);
}) :s(b, d), h.fetchReferencedImageStreamImages([ b.spec.template ], a.imagesByDockerReference, q, m);
})), w.push(d.watch({
group:"extensions",
resource:"replicasets"
}, m, function(b) {
var c = b.by("metadata.name");
c = k.filterForController(c, g), a.inProgressDeployment = _.chain(c).filter("status.replicas").size() > 1, a.replicaSetsForDeployment = e.sortByRevision(c);
}));
}, function(c) {
a.loaded = !0, a.alerts.load = {
type:"error",
message:404 === c.status ? "This deployment can not be found, it may have been deleted." :"The deployment details could not be loaded.",
details:b("getErrorDetails")(c)
};
}), d.list("limitranges", m).then(function(a) {
y = a.by("metadata.name"), z();
});
var A = [], B = [];
a.valueFromObjects = [], d.list("configmaps", m, null, {
errorNotification:!1
}).then(function(b) {
A = t(b.by("metadata.name")), a.valueFromObjects = A.concat(B);
}, function(a) {
403 !== a.code && v("Could not load config maps", u(a));
}), d.list("secrets", m, null, {
errorNotification:!1
}).then(function(b) {
B = t(b.by("metadata.name")), a.valueFromObjects = B.concat(A);
}, function(a) {
403 !== a.code && v("Could not load secrets", u(a));
}), w.push(d.watch("imagestreams", m, function(b) {
var c = b.by("metadata.name");
h.buildDockerRefMapForImageStreams(c, q), a.deployment && h.fetchReferencedImageStreamImages([ a.deployment.spec.template ], a.imagesByDockerReference, q, m), l.log("imagestreams (subscribe)", a.imageStreams);
})), w.push(d.watch({
group:"autoscaling",
resource:"horizontalpodautoscalers",
version:"v1"
}, m, function(b) {
a.autoscalers = g.filterHPA(b.by("metadata.name"), "Deployment", c.deployment), z();
})), w.push(d.watch("builds", m, function(b) {
a.builds = b.by("metadata.name"), l.log("builds (subscribe)", a.builds);
})), a.scale = function(c) {
var d = function(c) {
a.alerts = a.alerts || {}, a.alerts.scale = {
type:"error",
message:"An error occurred scaling the deployment.",
details:b("getErrorDetails")(c)
};
};
e.scale(a.deployment, c).then(_.noop, d);
}, a.setPaused = function(c) {
a.updatingPausedState = !0, e.setPaused(a.deployment, c, m).then(_.noop, function(d) {
a.updatingPausedState = !1, a.alerts = a.alerts || {}, a.alerts.scale = {
type:"error",
message:p.getString(o("An error occurred")) + " " + (c ? p.getString(o("pausing")) :p.getString(o("resuming"))) + " " + p.getString(o("the deployment.")),
details:b("getErrorDetails")(d)
};
});
}, a.removeVolume = function(b) {
var c;
c = _.get(a, "deployment.spec.paused") ? p.getString(o("This will remove the volume from the deployment.")) :p.getString(o("This will remove the volume from the deployment and start a new rollout.")), b.persistentVolumeClaim ? c += " " + p.getString(o("It will not delete the persistent volume claim.")) :b.secret ? c += " " + p.getString(o("It will not delete the secret.")) :b.configMap && (c += " " + p.getString(o("It will not delete the config map.")));
var d = i.confirm({
message:p.getString(o("Remove volume")) + " " + b.name + "?",
details:c,
okButtonText:p.getString(o("Remove")),
okButtonClass:"btn-danger",
cancelButtonText:p.getString(o("Cancel"))
}), e = function() {
n.removeVolume(a.deployment, b, m);
};
d.then(e);
}, a.$on("$destroy", function() {
d.unwatchAll(w);
});
}));
} ]), angular.module("openshiftConsole").controller("DeploymentConfigController", [ "$scope", "$filter", "$routeParams", "BreadcrumbsService", "DataService", "DeploymentsService", "EnvironmentService", "HPAService", "ImageStreamResolver", "ModalsService", "Navigate", "NotificationsService", "Logger", "ProjectsService", "StorageService", "LabelFilter", "labelNameFilter", "gettext", "gettextCatalog", function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s) {
var t = {};
a.projectName = c.project, a.deploymentConfigName = c.deploymentconfig, a.deploymentConfig = null, a.deployments = {}, a.unfilteredDeployments = {}, a.imagesByDockerReference = {}, a.builds = {}, a.labelSuggestions = {}, a.forms = {}, a.alerts = {}, a.breadcrumbs = d.getBreadcrumbs({
name:c.deploymentconfig,
kind:"DeploymentConfig",
namespace:c.project
}), a.emptyMessage = r("Loading..."), a.healthCheckURL = k.healthCheckURL(c.project, "DeploymentConfig", c.deploymentconfig);
var u = b("orderObjectsByDate"), v = b("mostRecent"), w = !1, x = function(b, c) {
if (!w) {
if (!a.forms.dcEnvVars || a.forms.dcEnvVars.$pristine) return void (a.updatedDeploymentConfig = g.copyAndNormalize(b));
if (g.isEnvironmentEqual(b, c)) return void (a.updatedDeploymentConfig = g.mergeEdits(a.updatedDeploymentConfig, b));
w = !0, a.alerts["env-conflict"] = {
type:"warning",
message:"The environment variables for the deployment configuration have been updated in the background. Saving your changes may create a conflict or cause loss of data.",
links:[ {
label:"Reload Environment Variables",
onClick:function() {
return a.clearEnvVarUpdates(), !0;
}
} ]
};
}
}, y = b("orderByDisplayName"), z = b("getErrorDetails"), A = function(b, c) {
a.alerts["from-value-objects"] = {
type:"error",
message:b,
details:c
};
}, B = [], C = [], D = [];
a.valueFromObjects = [], n.get(c.project).then(_.spread(function(d, k) {
function n() {
p.getLabelSelector().isEmpty() || !$.isEmptyObject(a.deployments) || $.isEmptyObject(a.unfilteredDeployments) ? delete a.alerts.deployments :a.alerts.deployments = {
type:"warning",
details:"The active filters are hiding all deployments."
};
}
a.project = d, a.projectContext = k;
var E, F = {}, G = function() {
h.getHPAWarnings(a.deploymentConfig, a.autoscalers, F, d).then(function(b) {
a.hpaWarnings = b;
});
};
e.get("deploymentconfigs", c.deploymentconfig, k, {
errorNotification:!1
}).then(function(d) {
a.loaded = !0, a.deploymentConfig = d, a.strategyParams = b("deploymentStrategyParams")(d), G(), a.updatedDeploymentConfig = g.copyAndNormalize(a.deploymentConfig), a.saveEnvVars = function() {
l.hideNotification("save-dc-env-error"), g.compact(a.updatedDeploymentConfig), E = e.update("deploymentconfigs", c.deploymentconfig, a.updatedDeploymentConfig, k), E.then(function() {
l.addNotification({
type:"success",
message:"Environment variables for deployment config " + a.deploymentConfigName + " were successfully updated."
}), a.forms.dcEnvVars.$setPristine();
}, function(c) {
l.addNotification({
id:"save-dc-env-error",
type:"error",
message:"An error occurred updating environment variables for deployment config " + a.deploymentConfigName + ".",
details:b("getErrorDetails")(c)
});
})["finally"](function() {
E = null;
});
}, a.clearEnvVarUpdates = function() {
a.updatedDeploymentConfig = g.copyAndNormalize(a.deploymentConfig), a.forms.dcEnvVars.$setPristine(), w = !1;
}, B.push(e.watchObject("deploymentconfigs", c.deploymentconfig, k, function(b, c) {
"DELETED" === c && (a.alerts.deleted = {
type:"warning",
message:"This deployment configuration has been deleted."
});
var d = a.deploymentConfig;
a.deploymentConfig = b, a.updatingPausedState = !1, G(), E ? E["finally"](function() {
x(b, d);
}) :x(b, d), i.fetchReferencedImageStreamImages([ b.spec.template ], a.imagesByDockerReference, t, k);
}));
}, function(c) {
a.loaded = !0, a.alerts.load = {
type:"error",
message:404 === c.status ? "This deployment configuration can not be found, it may have been deleted." :"The deployment configuration details could not be loaded.",
details:404 === c.status ? "Any remaining deployment history for this deployment will be shown." :b("getErrorDetails")(c)
};
}), B.push(e.watch("replicationcontrollers", k, function(d, e, g) {
var h = c.deploymentconfig;
if (a.emptyMessage = r("No deployments to show"), e) {
if (f.deploymentBelongsToConfig(g, c.deploymentconfig)) {
var i = g.metadata.name;
switch (e) {
case "ADDED":
case "MODIFIED":
a.unfilteredDeployments[i] = g, b("deploymentIsInProgress")(g) ? (a.deploymentConfigDeploymentsInProgress[h] = a.deploymentConfigDeploymentsInProgress[h] || {}, a.deploymentConfigDeploymentsInProgress[h][i] = g) :a.deploymentConfigDeploymentsInProgress[h] && delete a.deploymentConfigDeploymentsInProgress[h][i], g.causes = b("deploymentCauses")(g);
break;

case "DELETED":
delete a.unfilteredDeployments[i], a.deploymentConfigDeploymentsInProgress[h] && delete a.deploymentConfigDeploymentsInProgress[h][i];
}
}
} else {
var j = f.associateDeploymentsToDeploymentConfig(d.by("metadata.name"));
a.unfilteredDeployments = j[c.deploymentconfig] || {}, angular.forEach(a.unfilteredDeployments, function(a) {
a.causes = b("deploymentCauses")(a);
}), a.deploymentConfigDeploymentsInProgress = f.associateRunningDeploymentToDeploymentConfig(j);
}
a.deployments = p.getLabelSelector().select(a.unfilteredDeployments), a.orderedDeployments = u(a.deployments, !0), a.deploymentInProgress = !!_.size(a.deploymentConfigDeploymentsInProgress[h]), a.mostRecent = v(a.unfilteredDeployments), n(), p.addLabelSuggestionsFromResources(a.unfilteredDeployments, a.labelSuggestions), p.setLabelSuggestions(a.labelSuggestions);
}, {
http:{
params:{
labelSelector:q("deploymentConfig") + "=" + a.deploymentConfigName
}
}
})), e.list("limitranges", k).then(function(a) {
F = a.by("metadata.name"), G();
}), e.list("configmaps", k, null, {
errorNotification:!1
}).then(function(b) {
C = y(b.by("metadata.name")), a.valueFromObjects = C.concat(D);
}, function(a) {
403 !== a.code && A("Could not load config maps", z(a));
}), e.list("secrets", k, null, {
errorNotification:!1
}).then(function(b) {
D = y(b.by("metadata.name")), a.valueFromObjects = D.concat(C);
}, function(a) {
403 !== a.code && A("Could not load secrets", z(a));
}), B.push(e.watch("imagestreams", k, function(b) {
var c = b.by("metadata.name");
i.buildDockerRefMapForImageStreams(c, t), a.deploymentConfig && i.fetchReferencedImageStreamImages([ a.deploymentConfig.spec.template ], a.imagesByDockerReference, t, k), m.log("imagestreams (subscribe)", a.imageStreams);
})), B.push(e.watch("builds", k, function(b) {
a.builds = b.by("metadata.name"), m.log("builds (subscribe)", a.builds);
})), B.push(e.watch({
group:"autoscaling",
resource:"horizontalpodautoscalers",
version:"v1"
}, k, function(b) {
a.autoscalers = h.filterHPA(b.by("metadata.name"), "DeploymentConfig", c.deploymentconfig), G();
})), p.onActiveFiltersChanged(function(b) {
a.$apply(function() {
a.deployments = b.select(a.unfilteredDeployments), a.orderedDeployments = u(a.deployments, !0), n();
});
}), a.canDeploy = function() {
return !!a.deploymentConfig && (!a.deploymentConfig.metadata.deletionTimestamp && (!a.deploymentInProgress && !a.deploymentConfig.spec.paused));
}, a.startLatestDeployment = function() {
a.canDeploy() && f.startLatestDeployment(a.deploymentConfig, k);
}, a.scale = function(c) {
var d = function(c) {
a.alerts["scale-error"] = {
type:"error",
message:"An error occurred scaling the deployment config.",
details:b("getErrorDetails")(c)
};
};
f.scale(a.deploymentConfig, c).then(_.noop, d);
}, a.setPaused = function(c) {
a.updatingPausedState = !0, f.setPaused(a.deploymentConfig, c, k).then(_.noop, function(d) {
a.updatingPausedState = !1, a.alerts["pause-error"] = {
type:"error",
message:"An error occurred " + (c ? "pausing" :"resuming") + " the deployment config.",
details:b("getErrorDetails")(d)
};
});
};
var H = function() {
if (_.get(a, "deploymentConfig.spec.paused")) return !1;
var b = _.get(a, "deploymentConfig.spec.triggers", []);
return _.some(b, {
type:"ConfigChange"
});
};
a.removeVolume = function(b) {
var c;
c = H() ? s.getString(r("This will remove the volume from the deployment config and trigger a new deployment.")) :s.getString(r("This will remove the volume from the deployment config.")), b.persistentVolumeClaim ? c += " " + s.getString(r("It will not delete the persistent volume claim.")) :b.secret ? c += " " + s.getString(r("It will not delete the secret.")) :b.configMap && (c += " " + s.getString(r("It will not delete the config map.")));
var d = j.confirm({
message:s.getString(r("Remove volume")) + " " + b.name + "?",
details:c,
okButtonText:s.getString(r("Remove")),
okButtonClass:"btn-danger",
cancelButtonText:s.getString(r("Cancel"))
}), e = function() {
o.removeVolume(a.deploymentConfig, b, k);
};
d.then(e);
}, a.$on("$destroy", function() {
e.unwatchAll(B);
});
}));
} ]), angular.module("openshiftConsole").controller("ReplicaSetController", [ "$scope", "$filter", "$routeParams", "AuthorizationService", "BreadcrumbsService", "DataService", "DeploymentsService", "EnvironmentService", "HPAService", "ImageStreamResolver", "Logger", "MetricsService", "ModalsService", "Navigate", "OwnerReferencesService", "PodsService", "ProjectsService", "StorageService", "keyValueEditorUtils", "kind", function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t) {
var u = !1, v = b("annotation"), w = b("humanizeKind")(t), x = b("hasDeployment");
switch (t) {
case "ReplicaSet":
a.resource = {
group:"extensions",
resource:"replicasets"
}, a.healthCheckURL = n.healthCheckURL(c.project, "ReplicaSet", c.replicaSet, "extensions");
break;

case "ReplicationController":
a.resource = "replicationcontrollers", a.healthCheckURL = n.healthCheckURL(c.project, "ReplicationController", c.replicaSet);
}
var y = {};
a.projectName = c.project, a.kind = t, a.replicaSet = null, a.deploymentConfig = null, a.deploymentConfigMissing = !1, a.imagesByDockerReference = {}, a.builds = {}, a.alerts = {}, a.renderOptions = a.renderOptions || {}, a.renderOptions.hideFilterWidget = !0, a.forms = {}, a.logOptions = {};
var z = [];
l.isAvailable().then(function(b) {
a.metricsAvailable = b;
});
var A, B = b("deploymentStatus"), C = function(b) {
a.logCanRun = !_.includes([ "New", "Pending" ], B(b));
}, D = !1, E = function(c, d) {
if (!D) {
if (!a.forms.envForm || a.forms.envForm.$pristine) return void (a.updatedReplicaSet = h.copyAndNormalize(c));
if (h.isEnvironmentEqual(c, d)) return void (a.updatedReplicaSet = h.mergeEdits(a.updatedReplicaSet, c));
D = !0, a.alerts["env-conflict"] = {
type:"warning",
message:"The environment variables for the " + b("humanizeKind")(a.replicaSet.kind) + " have been updated in the background. Saving your changes may create a conflict or cause loss of data.",
links:[ {
label:"Reload Environment Variables",
onClick:function() {
return a.clearEnvVarUpdates(), !0;
}
} ]
};
}
};
a.saveEnvVars = function() {
h.compact(a.updatedReplicaSet), A = f.update(a.resource, c.replicaSet, a.updatedReplicaSet, a.projectContext), A.then(function() {
a.alerts.saveEnvSuccess = {
type:"success",
message:a.replicaSet.metadata.name + " was updated."
}, a.forms.envForm.$setPristine();
}, function(c) {
a.alerts.saveEnvError = {
type:"error",
message:a.replicaSet.metadata.name + " was not updated.",
details:b("getErrorDetails")(c)
};
});
}, a.clearEnvVarUpdates = function() {
a.updatedReplicaSet = h.copyAndNormalize(a.replicaSet), a.forms.envForm.$setPristine(), D = !1;
};
var F = b("isIE")() || b("isEdge")(), G = b("orderByDisplayName"), H = b("getErrorDetails"), I = function(b, c) {
a.alerts["from-value-objects"] = {
type:"error",
message:b,
details:c
};
}, J = [], K = [];
a.valueFromObjects = [], q.get(c.project).then(_.spread(function(h, l) {
a.project = h, a.projectContext = l, f.list("configmaps", l, null, {
errorNotification:!1
}).then(function(b) {
J = G(b.by("metadata.name")), a.valueFromObjects = J.concat(K);
}, function(a) {
403 !== a.code && I("Could not load config maps", H(a));
}), f.list("secrets", l, null, {
errorNotification:!1
}).then(function(b) {
K = G(b.by("metadata.name")), a.valueFromObjects = K.concat(J);
}, function(a) {
403 !== a.code && I("Could not load secrets", H(a));
});
var q = {}, s = function() {
if (a.hpaForRS = i.filterHPA(q, t, c.replicaSet), a.deploymentConfigName && a.isActive) {
var b = i.filterHPA(q, "DeploymentConfig", a.deploymentConfigName);
a.autoscalers = a.hpaForRS.concat(b);
} else if (a.deployment && a.isActive) {
var d = i.filterHPA(q, "Deployment", a.deployment.metadata.name);
a.autoscalers = a.hpaForRS.concat(d);
} else a.autoscalers = a.hpaForRS;
}, D = function() {
z.push(f.watch(a.resource, l, function(b) {
var c, d = [];
angular.forEach(b.by("metadata.name"), function(b) {
var c = v(b, "deploymentConfig") || "";
c === a.deploymentConfigName && d.push(b);
}), c = g.getActiveDeployment(d), a.isActive = c && c.metadata.uid === a.replicaSet.metadata.uid, s();
}));
}, L = function() {
i.getHPAWarnings(a.replicaSet, a.autoscalers, a.limitRanges, h).then(function(b) {
a.hpaWarnings = b;
});
}, M = function(d) {
var e = v(d, "deploymentConfig");
if (e) {
u = !0, a.deploymentConfigName = e;
var g = v(d, "deploymentVersion");
g && (a.logOptions.version = g), a.healthCheckURL = n.healthCheckURL(c.project, "DeploymentConfig", e), f.get("deploymentconfigs", e, l, {
errorNotification:!1
}).then(function(b) {
a.deploymentConfig = b;
}, function(c) {
return 404 === c.status ? void (a.deploymentConfigMissing = !0) :void (a.alerts.load = {
type:"error",
message:"The deployment configuration details could not be loaded.",
details:b("getErrorDetails")(c)
});
});
}
}, N = function() {
a.isActive = g.isActiveReplicaSet(a.replicaSet, a.deployment);
}, O = function(b) {
return _.some(b, function(b) {
if (_.get(b, "status.replicas") && _.get(b, "metadata.uid") !== _.get(a.replicaSet, "metadata.uid")) {
var c = o.getControllerReferences(b);
return _.some(c, {
uid:a.deployment.metadata.uid
});
}
});
}, P = !1, Q = function() {
var b = o.getControllerReferences(a.replicaSet), d = _.find(b, {
kind:"Deployment"
});
d && f.get({
group:"extensions",
resource:"deployments"
}, d.name, l).then(function(b) {
a.deployment = b, a.healthCheckURL = n.healthCheckURL(c.project, "Deployment", b.metadata.name, "extensions"), z.push(f.watchObject({
group:"extensions",
resource:"deployments"
}, b.metadata.name, l, function(b, d) {
return "DELETED" === d ? (a.alerts["deployment-deleted"] = {
type:"warning",
message:"The deployment controlling this replica set has been deleted."
}, a.healthCheckURL = n.healthCheckURL(c.project, "ReplicaSet", c.replicaSet, "extensions"), a.deploymentMissing = !0, void delete a.deployment) :(a.deployment = b, a.breadcrumbs = e.getBreadcrumbs({
object:a.replicaSet,
displayName:"#" + g.getRevision(a.replicaSet),
parent:{
title:a.deployment.metadata.name,
link:n.resourceURL(a.deployment)
},
humanizedKind:"Deployments"
}), N(), void s());
})), z.push(f.watch({
group:"extensions",
resource:"replicasets"
}, l, function(a) {
var b = a.by("metadata.name");
P = O(b);
}));
});
}, R = function() {
if (!_.isEmpty(y)) {
var b = _.get(a, "replicaSet.spec.template");
b && j.fetchReferencedImageStreamImages([ b ], a.imagesByDockerReference, y, l);
}
};
f.get(a.resource, c.replicaSet, l, {
errorNotification:!1
}).then(function(b) {
switch (a.loaded = !0, a.replicaSet = b, C(b), t) {
case "ReplicationController":
M(b);
break;

case "ReplicaSet":
Q();
}
L(), a.breadcrumbs = e.getBreadcrumbs({
object:b
}), z.push(f.watchObject(a.resource, c.replicaSet, l, function(b, c) {
"DELETED" === c && (a.alerts.deleted = {
type:"warning",
message:"This " + w + " has been deleted."
});
var d = a.replicaSet;
a.replicaSet = b, A ? A["finally"](function() {
E(b, d);
}) :E(b, d), C(b), L(), R(), a.deployment && N();
})), a.deploymentConfigName && D(), z.push(f.watch("pods", l, function(b) {
var c = b.by("metadata.name");
a.podsForDeployment = p.filterForOwner(c, a.replicaSet);
}));
}, function(d) {
a.loaded = !0, a.alerts.load = {
type:"error",
message:"The " + w + " details could not be loaded.",
details:b("getErrorDetails")(d)
}, a.breadcrumbs = e.getBreadcrumbs({
name:c.replicaSet,
kind:t,
namespace:c.project
});
}), z.push(f.watch(a.resource, l, function(c, d, e) {
a.replicaSets = c.by("metadata.name"), "ReplicationController" === t && (a.deploymentsByDeploymentConfig = g.associateDeploymentsToDeploymentConfig(a.replicaSets));
var f, h;
e && (f = v(e, "deploymentConfig"), h = e.metadata.name), a.deploymentConfigDeploymentsInProgress = a.deploymentConfigDeploymentsInProgress || {}, d ? "ADDED" === d || "MODIFIED" === d && b("deploymentIsInProgress")(e) ? (a.deploymentConfigDeploymentsInProgress[f] = a.deploymentConfigDeploymentsInProgress[f] || {}, a.deploymentConfigDeploymentsInProgress[f][h] = e) :"MODIFIED" === d && a.deploymentConfigDeploymentsInProgress[f] && delete a.deploymentConfigDeploymentsInProgress[f][h] :a.deploymentConfigDeploymentsInProgress = g.associateRunningDeploymentToDeploymentConfig(a.deploymentsByDeploymentConfig), e ? "DELETED" !== d && (e.causes = b("deploymentCauses")(e)) :angular.forEach(a.replicaSets, function(a) {
a.causes = b("deploymentCauses")(a);
});
})), z.push(f.watch("imagestreams", l, function(a) {
var b = a.by("metadata.name");
j.buildDockerRefMapForImageStreams(b, y), R(), k.log("imagestreams (subscribe)", b);
})), z.push(f.watch("builds", l, function(b) {
a.builds = b.by("metadata.name"), k.log("builds (subscribe)", a.builds);
})), z.push(f.watch({
group:"autoscaling",
resource:"horizontalpodautoscalers",
version:"v1"
}, l, function(a) {
q = a.by("metadata.name"), s(), L();
}, {
poll:F,
pollInterval:6e4
})), f.list("limitranges", l).then(function(b) {
a.limitRanges = b.by("metadata.name"), L();
});
var S = 6e4;
z.push(f.watch("resourcequotas", l, function(b) {
a.quotas = b.by("metadata.name");
}, {
poll:!0,
pollInterval:S
})), z.push(f.watch("appliedclusterresourcequotas", l, function(b) {
a.clusterQuotas = b.by("metadata.name");
}, {
poll:!0,
pollInterval:S
}));
var T = b("deploymentIsLatest");
a.showRollbackAction = function() {
return "Complete" === B(a.replicaSet) && !T(a.replicaSet, a.deploymentConfig) && !a.replicaSet.metadata.deletionTimestamp && d.canI("deploymentconfigrollbacks", "create");
}, a.retryFailedDeployment = function(b) {
g.retryFailedDeployment(b, l, a);
}, a.rollbackToDeployment = function(b, c, d, e) {
g.rollbackToDeployment(b, c, d, e, l, a);
}, a.cancelRunningDeployment = function(a) {
g.cancelRunningDeployment(a, l);
}, a.scale = function(c) {
var d = function(c) {
a.alerts = a.alerts || {}, a.alerts.scale = {
type:"error",
message:"An error occurred scaling.",
details:b("getErrorDetails")(c)
};
}, e = a.deployment || a.deploymentConfig || a.replicaSet;
g.scale(e, c).then(_.noop, d);
};
var U = b("hasDeploymentConfig");
a.isScalable = function() {
return !!_.isEmpty(a.autoscalers) && (!U(a.replicaSet) && !x(a.replicaSet) || (!(!a.deploymentConfigMissing && !a.deploymentMissing) || !(!a.deploymentConfig && !a.deployment) && (a.isActive && !P)));
}, a.removeVolume = function(c) {
var d = "This will remove the volume from the " + b("humanizeKind")(a.replicaSet.kind) + ".";
c.persistentVolumeClaim ? d += " It will not delete the persistent volume claim." :c.secret ? d += " It will not delete the secret." :c.configMap && (d += " It will not delete the config map.");
var e = m.confirm({
message:"Remove volume " + c.name + "?",
details:d,
okButtonText:"Remove",
okButtonClass:"btn-danger",
cancelButtonText:"Cancel"
}), f = function() {
r.removeVolume(a.replicaSet, c, l);
};
e.then(f);
}, a.$on("$destroy", function() {
f.unwatchAll(z);
});
}));
} ]), angular.module("openshiftConsole").controller("StatefulSetsController", [ "$scope", "$routeParams", "DataService", "ProjectsService", "LabelFilter", "PodsService", function(a, b, c, d, e, f) {
a.projectName = b.project, a.alerts = a.alerts || {}, a.labelSuggestions = {};
var g = [];
d.get(b.project).then(_.spread(function(b, d) {
function h() {
e.getLabelSelector().isEmpty() || !$.isEmptyObject(a.statefulSets) || $.isEmptyObject(a.unfilteredStatefulSets) ? delete a.alerts.statefulsets :a.alerts.statefulsets = {
type:"warning",
details:"The active filters are hiding all stateful sets."
};
}
a.project = b, g.push(c.watch({
resource:"statefulsets",
group:"apps",
version:"v1beta1"
}, d, function(b) {
angular.extend(a, {
loaded:!0,
unfilteredStatefulSets:b.by("metadata.name")
}), a.statefulSets = e.getLabelSelector().select(a.unfilteredStatefulSets), e.addLabelSuggestionsFromResources(a.unfilteredStatefulSets, a.labelSuggestions), e.setLabelSuggestions(a.labelSuggestions), h();
})), g.push(c.watch("pods", d, function(b) {
a.pods = b.by("metadata.name"), a.podsByOwnerUID = f.groupByOwnerUID(a.pods);
})), e.onActiveFiltersChanged(function(b) {
a.$apply(function() {
a.statefulSets = b.select(a.unfilteredStatefulSets), h();
});
}), a.$on("$destroy", function() {
c.unwatchAll(g);
});
}));
} ]), angular.module("openshiftConsole").controller("StatefulSetController", [ "$filter", "$scope", "$routeParams", "BreadcrumbsService", "DataService", "EnvironmentService", "MetricsService", "ProjectsService", "PodsService", function(a, b, c, d, e, f, g, h, i) {
b.projectName = c.project, b.statefulSetName = c.statefulset, b.forms = {}, b.alerts = {}, b.breadcrumbs = d.getBreadcrumbs({
name:b.statefulSetName,
kind:"StatefulSet",
namespace:c.project
});
var j, k = function(a) {
return f.copyAndNormalize(a);
}, l = [], m = {
resource:"statefulsets",
group:"apps",
version:"v1beta1"
};
g.isAvailable().then(function(a) {
b.metricsAvailable = a;
}), h.get(c.project).then(_.spread(function(c, d) {
j = d, e.get(m, b.statefulSetName, d, {
errorNotification:!1
}).then(function(a) {
angular.extend(b, {
statefulSet:k(a),
project:c,
projectContext:d,
loaded:!0,
isScalable:function() {
return !1;
},
scale:function() {}
}), l.push(e.watchObject(m, b.statefulSetName, d, function(a) {
angular.extend(b, {
resourceGroupVersion:m,
statefulSet:k(a)
});
})), l.push(e.watch("pods", d, function(c) {
var d = c.by("metadata.name");
b.podsForStatefulSet = i.filterForOwner(d, a);
}));
var f = 6e4;
l.push(e.watch("resourcequotas", d, function(a) {
b.quotas = a.by("metadata.name");
}, {
poll:!0,
pollInterval:f
})), l.push(e.watch("appliedclusterresourcequotas", d, function(a) {
b.clusterQuotas = a.by("metadata.name");
}, {
poll:!0,
pollInterval:f
}));
}, function(c) {
b.loaded = !0, b.alerts.load = {
type:"error",
message:"The stateful set details could not be loaded.",
details:a("getErrorDetails")(c)
};
});
})), b.$on("$destroy", function() {
e.unwatchAll(l);
});
} ]), angular.module("openshiftConsole").controller("ServicesController", [ "$routeParams", "$scope", "DataService", "ProjectsService", "$filter", "LabelFilter", "Logger", "gettext", function(a, b, c, d, e, f, g, h) {
b.projectName = a.project, b.services = {}, b.unfilteredServices = {}, b.routesByService = {}, b.routes = {}, b.labelSuggestions = {}, b.alerts = b.alerts || {}, b.emptyMessage = h("Loading..."), b.emptyMessageRoutes = h("Loading...");
var i = [];
d.get(a.project).then(_.spread(function(a, d) {
function e() {
f.getLabelSelector().isEmpty() || !$.isEmptyObject(b.services) || $.isEmptyObject(b.unfilteredServices) ? delete b.alerts.services :b.alerts.services = {
type:"warning",
details:"The active filters are hiding all services."
};
}
b.project = a, i.push(c.watch("services", d, function(a) {
b.unfilteredServices = a.by("metadata.name"), f.addLabelSuggestionsFromResources(b.unfilteredServices, b.labelSuggestions), f.setLabelSuggestions(b.labelSuggestions), b.services = f.getLabelSelector().select(b.unfilteredServices), b.emptyMessage = h("No services to show"), e(), g.log("services (subscribe)", b.unfilteredServices);
})), f.onActiveFiltersChanged(function(a) {
b.$apply(function() {
b.services = a.select(b.unfilteredServices), e();
});
}), b.$on("$destroy", function() {
c.unwatchAll(i);
});
}));
} ]), angular.module("openshiftConsole").controller("ServiceController", [ "$scope", "$routeParams", "DataService", "ProjectsService", "$filter", function(a, b, c, d, e) {
a.projectName = b.project, a.service = null, a.services = null, a.alerts = {}, a.renderOptions = a.renderOptions || {}, a.renderOptions.hideFilterWidget = !0, a.breadcrumbs = [ {
title:"Services",
link:"project/" + b.project + "/browse/services"
}, {
title:b.service
} ], a.podFailureReasons = {
Pending:"This pod will not receive traffic until all of its containers have been created."
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
type:"warning",
message:"This service has been deleted."
});
};
d.get(b.project).then(_.spread(function(d, k) {
a.project = d, a.projectContext = k, c.get("services", b.service, k, {
errorNotification:!1
}).then(function(a) {
j(a), g.push(c.watchObject("services", b.service, k, j));
}, function(b) {
a.loaded = !0, a.alerts.load = {
type:"error",
message:"The service details could not be loaded.",
details:e("getErrorDetails")(b)
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
} ]), angular.module("openshiftConsole").controller("SecretsController", [ "$routeParams", "$scope", "DataService", "ProjectsService", function(a, b, c, d) {
b.projectName = a.project, b.secretsByType = {}, b.alerts = b.alerts || {}, d.get(a.project).then(_.spread(function(a, d) {
b.project = a, b.context = d, c.list("secrets", d).then(function(a) {
b.secrets = _.sortByAll(a.by("metadata.name"), [ "type", "metadata.name" ]), b.loaded = !0;
});
}));
} ]), angular.module("openshiftConsole").controller("SecretController", [ "$routeParams", "$filter", "$scope", "DataService", "ProjectsService", "SecretsService", function(a, b, c, d, e, f) {
c.projectName = a.project, c.secretName = a.secret, c.view = {
showSecret:!1
}, c.alerts = c.alerts || {}, c.breadcrumbs = [ {
title:"Secrets",
link:"project/" + a.project + "/browse/secrets"
}, {
title:c.secretName
} ], e.get(a.project).then(_.spread(function(a, b) {
c.project = a, c.context = b, d.get("secrets", c.secretName, b, {
errorNotification:!1
}).then(function(a) {
c.secret = a, c.decodedSecretData = f.decodeSecretData(c.secret.data), c.loaded = !0;
}, function(a) {
c.loaded = !0, c.error = a;
});
}));
} ]), angular.module("openshiftConsole").controller("CreateSecretController", [ "$filter", "$location", "$routeParams", "$scope", "$window", "ApplicationGenerator", "AuthorizationService", "DataService", "Navigate", "ProjectsService", function(a, b, c, d, e, f, g, h, i, j) {
d.alerts = {}, d.projectName = c.project, d.breadcrumbs = [ {
title:d.projectName,
link:"project/" + d.projectName
}, {
title:"Secrets",
link:"project/" + d.projectName + "/browse/secrets"
}, {
title:"Create Secret"
} ], j.get(c.project).then(_.spread(function(f, h) {
return d.project = f, d.context = h, d.breadcrumbs[0].title = a("displayName")(f), g.canI("secrets", "create", c.project) ? void (d.navigateBack = function() {
return c.then ? void b.url(c.then) :void e.history.back();
}) :void i.toErrorPage("You do not have authority to create secrets in project " + c.project + ".", "access_denied");
}));
} ]), angular.module("openshiftConsole").controller("ConfigMapsController", [ "$scope", "$routeParams", "DataService", "LabelFilter", "ProjectsService", function(a, b, c, d, e) {
a.projectName = b.project, a.alerts = a.alerts || {}, a.loaded = !1, a.labelSuggestions = {};
var f, g = [], h = function() {
d.getLabelSelector().isEmpty() || !_.isEmpty(a.configMaps) || _.isEmpty(f) ? delete a.alerts["config-maps"] :a.alerts["config-maps"] = {
type:"warning",
details:"The active filters are hiding all config maps."
};
}, i = function() {
d.addLabelSuggestionsFromResources(f, a.labelSuggestions), d.setLabelSuggestions(a.labelSuggestions);
}, j = function() {
var b = d.getLabelSelector().select(f);
a.configMaps = _.sortBy(b, "metadata.name"), h();
};
e.get(b.project).then(_.spread(function(b, e) {
a.project = b, g.push(c.watch("configmaps", e, function(b) {
f = b.by("metadata.name"), i(), j(), a.loaded = !0;
})), d.onActiveFiltersChanged(function() {
a.$apply(j);
}), a.$on("$destroy", function() {
c.unwatchAll(g);
});
}));
} ]), angular.module("openshiftConsole").controller("ConfigMapController", [ "$scope", "$routeParams", "BreadcrumbsService", "DataService", "ProjectsService", function(a, b, c, d, e) {
a.projectName = b.project, a.alerts = a.alerts || {}, a.loaded = !1, a.labelSuggestions = {}, a.breadcrumbs = c.getBreadcrumbs({
name:b.configMap,
kind:"ConfigMap",
namespace:b.project
});
var f = [], g = function(b, c) {
a.loaded = !0, a.configMap = b, "DELETED" === c && (a.alerts.deleted = {
type:"warning",
message:"This config map has been deleted."
});
};
e.get(b.project).then(_.spread(function(c, e) {
d.get("configmaps", b.configMap, e, {
errorNotification:!1
}).then(function(a) {
g(a), f.push(d.watchObject("configmaps", b.configMap, e, g));
}, function(b) {
a.loaded = !0, a.error = b;
}), a.$on("$destroy", function() {
d.unwatchAll(f);
});
}));
} ]), angular.module("openshiftConsole").controller("CreateConfigMapController", [ "$filter", "$routeParams", "$scope", "$window", "AuthorizationService", "DataService", "Navigate", "NotificationsService", "ProjectsService", function(a, b, c, d, e, f, g, h, i) {
c.projectName = b.project, c.breadcrumbs = [ {
title:c.projectName,
link:"project/" + c.projectName
}, {
title:"Config Maps",
link:"project/" + c.projectName + "/browse/config-maps"
}, {
title:"Create Config Map"
} ];
var j = function() {
h.hideNotification("create-config-map-error");
};
c.$on("$destroy", j);
var k = function() {
d.history.back();
};
c.cancel = k, i.get(b.project).then(_.spread(function(d, i) {
return c.project = d, c.breadcrumbs[0].title = a("displayName")(d), e.canI("configmaps", "create", b.project) ? (c.configMap = {
apiVersion:"v1",
kind:"ConfigMap",
metadata:{
namespace:b.project
},
data:{}
}, void (c.createConfigMap = function() {
c.createConfigMapForm.$valid && (j(), c.disableInputs = !0, f.create("configmaps", null, c.configMap, i).then(function() {
h.addNotification({
type:"success",
message:"Config map " + c.configMap.metadata.name + " successfully created."
}), k();
}, function(b) {
c.disableInputs = !1, h.addNotification({
id:"create-config-map-error",
type:"error",
message:"An error occurred creating the config map.",
details:a("getErrorDetails")(b)
});
}));
})) :void g.toErrorPage("You do not have authority to create config maps in project " + b.project + ".", "access_denied");
}));
} ]), angular.module("openshiftConsole").controller("RoutesController", [ "$routeParams", "$scope", "DataService", "$filter", "LabelFilter", "ProjectsService", "gettext", function(a, b, c, d, e, f, g) {
b.projectName = a.project, b.unfilteredRoutes = {}, b.routes = {}, b.labelSuggestions = {}, b.alerts = b.alerts || {}, b.emptyMessage = g("Loading...");
var h = [];
f.get(a.project).then(_.spread(function(a, d) {
function f() {
e.getLabelSelector().isEmpty() || !$.isEmptyObject(b.routes) || $.isEmptyObject(b.unfilteredRoutes) ? delete b.alerts.routes :b.alerts.routes = {
type:"warning",
details:"The active filters are hiding all routes."
};
}
b.project = a, h.push(c.watch("routes", d, function(a) {
b.unfilteredRoutes = a.by("metadata.name"), e.addLabelSuggestionsFromResources(b.unfilteredRoutes, b.labelSuggestions), e.setLabelSuggestions(b.labelSuggestions), b.routes = e.getLabelSelector().select(b.unfilteredRoutes), b.emptyMessage = g("No routes to show"), f();
})), h.push(c.watch("services", d, function(a) {
b.services = a.by("metadata.name");
})), e.onActiveFiltersChanged(function(a) {
b.$apply(function() {
b.routes = a.select(b.unfilteredRoutes), f();
});
}), b.$on("$destroy", function() {
c.unwatchAll(h);
});
}));
} ]), angular.module("openshiftConsole").controller("RouteController", [ "$scope", "$filter", "$routeParams", "AlertMessageService", "DataService", "ProjectsService", "RoutesService", function(a, b, c, d, e, f, g) {
a.projectName = c.project, a.route = null, a.alerts = {}, a.renderOptions = a.renderOptions || {}, a.renderOptions.hideFilterWidget = !0, a.breadcrumbs = [ {
title:"Routes",
link:"project/" + c.project + "/browse/routes"
}, {
title:c.route
} ];
var h, i = [], j = function(b, c) {
a.loaded = !0, a.route = b, h = g.isCustomHost(b), "DELETED" === c && (a.alerts.deleted = {
type:"warning",
message:"This route has been deleted."
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
}, a.hideRouterHostnameAlert = function(b) {
var c = k(b);
d.permanentlyHideAlert(c, a.projectName);
}, f.get(c.project).then(_.spread(function(d, f) {
a.project = d, e.get("routes", c.route, f, {
errorNotification:!1
}).then(function(a) {
j(a), i.push(e.watchObject("routes", c.route, f, j));
}, function(c) {
a.loaded = !0, a.alerts.load = {
type:"error",
message:"The route details could not be loaded.",
details:b("getErrorDetails")(c)
};
}), i.push(e.watch("services", f, function(b) {
a.services = b.by("metadata.name");
})), a.$on("$destroy", function() {
e.unwatchAll(i);
});
}));
} ]), angular.module("openshiftConsole").controller("StorageController", [ "$routeParams", "$scope", "AlertMessageService", "DataService", "ProjectsService", "QuotaService", "$filter", "LabelFilter", "Logger", "gettext", "gettextCatalog", function(a, b, c, d, e, f, g, h, i, j, k) {
b.projectName = a.project, b.pvcs = {}, b.unfilteredPVCs = {}, b.labelSuggestions = {}, b.alerts = b.alerts || {}, b.outOfClaims = !1, b.emptyMessage = j("Loading...");
var l = function() {
var a = c.isAlertPermanentlyHidden("storage-quota-limit-reached", b.projectName);
if (b.outOfClaims = f.isAnyStorageQuotaExceeded(b.quotas, b.clusterQuotas), !a && b.outOfClaims) {
if (b.alerts.quotaExceeded) return;
b.alerts.quotaExceeded = {
type:"warning",
message:k.getString(j("Storage quota limit has been reached. You will not be able to create any new storage.")),
links:[ {
href:"project/" + b.projectName + "/quota",
label:k.getString(j("View Quota"))
}, {
href:"",
label:k.getString(j("Don't Show Me Again")),
onClick:function() {
return c.permanentlyHideAlert("storage-quota-limit-reached", b.projectName), !0;
}
} ]
};
} else delete b.alerts.quotaExceeded;
}, m = [];
e.get(a.project).then(_.spread(function(a, c) {
function e() {
h.getLabelSelector().isEmpty() || !$.isEmptyObject(b.pvcs) || $.isEmptyObject(b.unfilteredPVCs) ? delete b.alerts.storage :b.alerts.storage = {
type:"warning",
details:k(j("The active filters are hiding all persistent volume claims."))
};
}
b.project = a, m.push(d.watch("persistentvolumeclaims", c, function(a) {
b.unfilteredPVCs = a.by("metadata.name"), h.addLabelSuggestionsFromResources(b.unfilteredPVCs, b.labelSuggestions), h.setLabelSuggestions(b.labelSuggestions), b.pvcs = h.getLabelSelector().select(b.unfilteredPVCs), b.emptyMessage = j("No persistent volume claims to show"), e(), i.log("pvcs (subscribe)", b.unfilteredPVCs);
})), h.onActiveFiltersChanged(function(a) {
b.$apply(function() {
b.pvcs = a.select(b.unfilteredPVCs), e();
});
}), b.$on("$destroy", function() {
d.unwatchAll(m);
}), d.list("resourcequotas", {
namespace:b.projectName
}, function(a) {
b.quotas = a.by("metadata.name"), l();
}), d.list("appliedclusterresourcequotas", {
namespace:b.projectName
}, function(a) {
b.clusterQuotas = a.by("metadata.name"), l();
});
}));
} ]), angular.module("openshiftConsole").controller("OtherResourcesController", [ "$routeParams", "$location", "$scope", "AuthorizationService", "DataService", "ProjectsService", "$filter", "LabelFilter", "Logger", "APIService", "gettext", "gettextCatalog", function(a, b, c, d, e, f, g, h, i, j, k, l) {
function m() {
h.getLabelSelector().isEmpty() || !$.isEmptyObject(c.resources) || $.isEmptyObject(c.unfilteredResources) ? delete c.alerts.resources :c.alerts.resources = {
type:"warning",
details:"The active filters are hiding all " + j.kindToResource(c.kindSelector.selected.kind, !0) + "."
};
}
function n() {
var a = c.kindSelector.selected;
if (a) {
var d = b.search();
d.kind = a.kind, d.group = a.group || "", b.replace().search(d), c.selectedResource = {
resource:j.kindToResource(a.kind),
group:a.group || ""
}, e.list({
group:a.group,
resource:j.kindToResource(a.kind)
}, c.context).then(function(b) {
c.unfilteredResources = b.by("metadata.name"), c.labelSuggestions = {}, h.addLabelSuggestionsFromResources(c.unfilteredResources, c.labelSuggestions), h.setLabelSuggestions(c.labelSuggestions), c.resources = h.getLabelSelector().select(c.unfilteredResources), c.emptyMessage = l.getString(k("No")) + " " + l.getString(j.kindToResource(a.kind, !0)) + " " + l.getString(k("to show")), m();
});
}
}
c.projectName = a.project, c.labelSuggestions = {}, c.alerts = c.alerts || {}, c.emptyMessage = k("Select a resource from the list above ..."), c.kindSelector = {
disabled:!0
}, c.kinds = _.filter(j.availableKinds(), function(a) {
switch (a.kind) {
case "ReplicationController":
case "Deployment":
case "DeploymentConfig":
case "BuildConfig":
case "Build":
case "ConfigMap":
case "Pod":
case "PersistentVolumeClaim":
case "Event":
case "Secret":
case "Service":
case "Route":
case "ImageStream":
case "ImageStreamTag":
case "ImageStreamImage":
case "ImageStreamImport":
case "ImageStreamMapping":
case "LimitRange":
case "ReplicaSet":
case "ResourceQuota":
case "AppliedClusterResourceQuota":
case "StatefulSet":
return !1;

default:
return !0;
}
});
var o = function(a) {
if (a) {
var b = j.kindToResourceGroupVersion(a), c = j.apiInfo(b);
return !c || !c.verbs || _.contains(c.verbs, "list");
}
};
c.getReturnURL = function() {
var b = _.get(c, "kindSelector.selected.kind");
return b ? URI.expand("project/{projectName}/browse/other?kind={kind}&group={group}", {
projectName:a.project,
kind:b,
group:_.get(c, "kindSelector.selected.group", "")
}).toString() :"";
};
var p;
c.isDuplicateKind = function(a) {
return p || (p = _.countBy(c.kinds, "kind")), p[a] > 1;
};
var q = function(a, b) {
return _.some(c.kinds, function(c) {
return c.kind === a && (!c.group && !b || c.group === b);
});
};
f.get(a.project).then(_.spread(function(b, e) {
c.kinds = _.filter(c.kinds, function(a) {
var b = {
resource:j.kindToResource(a.kind),
group:a.group || ""
};
return !!o(a) && (!!d.checkResource(b.resource) && d.canI(b, "list", c.projectName));
}), c.project = b, c.context = e, c.kindSelector.disabled = !1, a.kind && q(a.kind, a.group) && (_.set(c, "kindSelector.selected.kind", a.kind), _.set(c, "kindSelector.selected.group", a.group || ""));
})), c.loadKind = n, c.$watch("kindSelector.selected", function() {
c.alerts = {}, n();
});
var r = g("humanizeKind");
c.matchKind = function(a, b) {
return r(a).toLowerCase().indexOf(b.toLowerCase()) !== -1;
}, h.onActiveFiltersChanged(function(a) {
c.$apply(function() {
c.resources = a.select(c.unfilteredResources), m();
});
});
} ]), angular.module("openshiftConsole").controller("PersistentVolumeClaimController", [ "$scope", "$routeParams", "DataService", "ProjectsService", "$filter", function(a, b, c, d, e) {
a.projectName = b.project, a.pvc = null, a.alerts = {}, a.renderOptions = a.renderOptions || {}, a.renderOptions.hideFilterWidget = !0, a.breadcrumbs = [ {
title:"Persistent Volume Claims",
link:"project/" + b.project + "/browse/storage"
}, {
title:b.pvc
} ];
var f = [], g = function(b, c) {
a.pvc = b, a.loaded = !0, "DELETED" === c && (a.alerts.deleted = {
type:"warning",
message:"This persistent volume claim has been deleted."
});
};
d.get(b.project).then(_.spread(function(d, h) {
a.project = d, a.projectContext = h, c.get("persistentvolumeclaims", b.pvc, h, {
errorNotification:!1
}).then(function(a) {
g(a), f.push(c.watchObject("persistentvolumeclaims", b.pvc, h, g));
}, function(b) {
a.loaded = !0, a.alerts.load = {
type:"error",
message:"The persistent volume claim details could not be loaded.",
details:e("getErrorDetails")(b)
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
hideFilterWidget:!0
}, e.breadcrumbs = h.getBreadcrumbs({
name:d.name,
kind:d.kind,
namespace:d.project,
subpage:"Edit Resource Limits",
includeProject:!0
});
var q = a("getErrorDetails"), r = function(a, b) {
l.addNotification({
id:"set-compute-limits-error",
type:"error",
message:a,
details:b
});
}, s = function() {
b.url(e.resourceURL);
}, t = function() {
l.hideNotification("set-compute-limits-error");
};
e.cancel = s, e.$on("$destroy", t), m.get(d.project).then(_.spread(function(b, c) {
e.breadcrumbs[0].title = a("displayName")(b);
var m = {
resource:f.kindToResource(d.kind),
group:d.group
};
if (!g.canI(m, "update", d.project)) return void k.toErrorPage("You do not have authority to update " + o(d.kind) + " " + d.name + ".", "access_denied");
i.get(m, e.name, c).then(function(a) {
var d = e.object = angular.copy(a);
e.breadcrumbs = h.getBreadcrumbs({
object:d,
project:b,
subpage:"Edit Resource Limits",
includeProject:!0
}), e.resourceURL = k.resourceURL(d), e.containers = _.get(d, "spec.template.spec.containers"), e.save = function() {
e.disableInputs = !0, t(), i.update(m, e.name, d, c).then(function() {
l.addNotification({
type:"success",
message:p + " was updated."
}), s();
}, function(a) {
e.disableInputs = !1, r(p + " could not be updated.", q(a));
});
};
}, function(a) {
r(p + " could not be loaded.", q(a));
});
var n = function() {
e.hideCPU || (e.cpuProblems = j.validatePodLimits(e.limitRanges, "cpu", e.containers, b)), e.memoryProblems = j.validatePodLimits(e.limitRanges, "memory", e.containers, b);
};
i.list("limitranges", c).then(function(a) {
e.limitRanges = a.by("metadata.name"), _.isEmpty(e.limitRanges) || e.$watch("containers", n, !0);
});
}));
} ]), angular.module("openshiftConsole").controller("EditBuildConfigController", [ "$scope", "$filter", "$location", "$routeParams", "$window", "ApplicationGenerator", "AuthorizationService", "DataService", "Navigate", "NotificationsService", "ProjectsService", "SOURCE_URL_PATTERN", "SecretsService", "keyValueEditorUtils", function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
a.projectName = d.project, a.buildConfig = null, a.alerts = {}, a.sourceURLPattern = l, a.options = {}, a.jenkinsfileOptions = {
type:"path"
}, a.selectTypes = {
ImageStreamTag:"Image Stream Tag",
ImageStreamImage:"Image Stream Image",
DockerImage:"Docker Image Repository"
}, a.buildFromTypes = [ "ImageStreamTag", "ImageStreamImage", "DockerImage" ], a.pushToTypes = [ "ImageStreamTag", "DockerImage", "None" ], a.jenkinsfileTypes = [ {
id:"path",
title:"From Source Repository"
}, {
id:"inline",
title:"Inline"
} ], a.view = {
advancedOptions:!1,
hasHooks:!1
}, a.breadcrumbs = [ {
title:d.project,
link:"project/" + d.project
} ], d.isPipeline ? (a.breadcrumbs.push({
title:"Pipelines",
link:"project/" + d.project + "/browse/pipelines"
}), a.breadcrumbs.push({
title:d.buildconfig,
link:"project/" + d.project + "/browse/pipelines/" + d.buildconfig
})) :(a.breadcrumbs.push({
title:"Builds",
link:"project/" + d.project + "/browse/builds"
}), a.breadcrumbs.push({
title:d.buildconfig,
link:"project/" + d.project + "/browse/builds/" + d.buildconfig
})), a.breadcrumbs.push({
title:d.isPipeline ? "Edit Pipelines" :"Edit Builds"
}), a.imageOptions = {
from:{},
to:{},
fromSource:{}
}, a.sources = {
binary:!1,
dockerfile:!1,
git:!1,
images:!1,
contextDir:!1,
none:!0
}, a.triggers = {
githubWebhooks:[],
gitlabWebhooks:[],
bitbucketWebhooks:[],
genericWebhooks:[],
imageChangeTriggers:[],
builderImageChangeTrigger:{},
configChangeTrigger:{}
}, a.createTriggerSelect = {
selectedType:"",
options:[ {
type:"github",
label:"GitHub"
}, {
type:"gitlab",
label:"GitLab"
}, {
type:"bitbucket",
label:"Bitbucket"
}, {
type:"generic",
label:"Generic"
} ]
}, a.runPolicyTypes = [ "Serial", "Parallel", "SerialLatestOnly" ], a.buildHookTypes = [ {
id:"command",
label:"Command"
}, {
id:"script",
label:"Shell Script"
}, {
id:"args",
label:"Arguments to default image entry point"
}, {
id:"commandArgs",
label:"Command with arguments"
}, {
id:"scriptArgs",
label:"Shell script with arguments"
} ], a.buildHookSelection = {
type:{}
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
e = b && c ? "commandArgs" :b && d ? "scriptArgs" :b ? "args" :d ? "script" :"command", a.buildHookSelection.type = _.find(a.buildHookTypes, {
id:e
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
a.buildConfig ? (b = i.resourceURL(a.buildConfig), c.path(b)) :e.history.back();
};
a.cancel = s;
var t = function() {
j.hideNotification("edit-build-config-error"), j.hideNotification("edit-build-config-conflict"), j.hideNotification("edit-build-config-deleted");
};
a.$on("$destroy", t), k.get(d.project).then(_.spread(function(c, e) {
return a.project = c, a.context = e, a.breadcrumbs[0].title = b("displayName")(c), g.canI("buildconfigs", "update", d.project) ? void h.get("buildconfigs", d.buildconfig, e, {
errorNotification:!1
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
a.type = c && c.kind ? c.kind :"None";
var d = {}, e = "", f = "";
d = "ImageStreamTag" === a.type ? {
namespace:c.namespace || b.metadata.namespace,
imageStream:c.name.split(":")[0],
tagObject:{
tag:c.name.split(":")[1]
}
} :{
namespace:"",
imageStream:"",
tagObject:{
tag:""
}
}, e = "ImageStreamImage" === a.type ? (c.namespace || b.metadata.namespace) + "/" + c.name :"", f = "DockerImage" === a.type ? c.name :"", a.imageStreamTag = d, a.imageStreamImage = e, a.dockerImage = f;
};
c(a.imageOptions.from, a.buildStrategy.from), c(a.imageOptions.to, a.updatedBuildConfig.spec.output.to), a.sources.images && (a.sourceImages = a.buildConfig.spec.source.images, 1 === _.size(a.sourceImages) ? (a.imageSourceTypes = angular.copy(a.buildFromTypes), c(a.imageOptions.fromSource, a.sourceImages[0].from), a.imageSourcePaths = _.map(a.sourceImages[0].paths, function(a) {
return {
name:a.sourcePath,
value:a.destinationDir
};
})) :(a.imageSourceFromObjects = [], a.sourceImages.forEach(function(b) {
a.imageSourceFromObjects.push(b.from);
}))), a.options.forcePull = !!a.buildStrategy.forcePull, "Docker" === a.strategyType && (a.options.noCache = !!a.buildConfig.spec.strategy.dockerStrategy.noCache, a.buildFromTypes.push("None")), q.push(h.watchObject("buildconfigs", d.buildconfig, e, function(b, c) {
"MODIFIED" === c && j.addNotification({
id:"edit-build-config-conflict",
type:"warning",
message:"This build configuration has changed since you started editing it. You'll need to copy any changes you've made and edit again."
}), "DELETED" === c && (j.addNotification({
id:"edit-build-config-deleted",
type:"warning",
message:"This build configuration has been deleted."
}), a.disableInputs = !0), a.buildConfig = b;
})), a.loaded = !0;
}, function(c) {
a.loaded = !0, a.alerts.load = {
type:"error",
message:"The build configuration details could not be loaded.",
details:"Reason: " + b("getErrorDetails")(c)
};
}) :void i.toErrorPage("You do not have authority to update build config " + d.buildconfig + ".", "access_denied");
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
disabled:!1,
data:a
});
break;

case "GitHub":
c.githubWebhooks.push({
disabled:!1,
data:a
});
break;

case "GitLab":
c.gitlabWebhooks.push({
disabled:!1,
data:a
});
break;

case "Bitbucket":
c.bitbucketWebhooks.push({
disabled:!1,
data:a
});
break;

case "ImageChange":
var b = a.imageChange.from;
b || (b = f);
var d = {
present:!0,
data:a
};
e(b, f) ? c.builderImageChangeTrigger = d :c.imageChangeTriggers.push(d);
break;

case "ConfigChange":
c.configChangeTrigger = {
present:!0,
data:a
};
}
}), _.isEmpty(c.builderImageChangeTrigger) && (c.builderImageChangeTrigger = {
present:!1,
data:{
imageChange:{},
type:"ImageChange"
}
}), _.isEmpty(c.configChangeTrigger) && (c.configChangeTrigger = {
present:!1,
data:{
type:"ConfigChange"
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
sourcePath:a.name,
destinationDir:a.value
};
});
}, w = function(b) {
var c = {};
switch (b.type) {
case "ImageStreamTag":
c = {
kind:b.type,
name:b.imageStreamTag.imageStream + ":" + b.imageStreamTag.tagObject.tag
}, b.imageStreamTag.namespace !== a.buildConfig.metadata.namespace && (c.namespace = b.imageStreamTag.namespace);
break;

case "DockerImage":
c = {
kind:b.type,
name:b.dockerImage
};
break;

case "ImageStreamImage":
var d = b.imageStreamImage.split("/");
c = {
kind:b.type,
name:_.last(d)
}, c.namespace = 1 !== _.size(d) ? _.first(d) :a.buildConfig.metadata.namespace;
}
return c;
}, x = function() {
var b = [].concat(a.triggers.githubWebhooks, a.triggers.gitlabWebhooks, a.triggers.bitbucketWebhooks, a.triggers.genericWebhooks, a.triggers.imageChangeTriggers, a.triggers.builderImageChangeTrigger, a.triggers.configChangeTrigger);
return b = _.filter(b, function(a) {
return _.has(a, "disabled") && !a.disabled || a.present;
}), b = _.map(b, "data");
}, y = function() {
switch (a.secrets.picked = {
gitSecret:a.buildConfig.spec.source.sourceSecret ? [ a.buildConfig.spec.source.sourceSecret ] :[ {
name:""
} ],
pullSecret:r(a.buildConfig).pullSecret ? [ r(a.buildConfig).pullSecret ] :[ {
name:""
} ],
pushSecret:a.buildConfig.spec.output.pushSecret ? [ a.buildConfig.spec.output.pushSecret ] :[ {
name:""
} ]
}, a.strategyType) {
case "Source":
case "Docker":
a.secrets.picked.sourceSecrets = a.buildConfig.spec.source.secrets || [ {
secret:{
name:""
},
destinationDir:""
} ];
break;

case "Custom":
a.secrets.picked.sourceSecrets = r(a.buildConfig).secrets || [ {
secretSource:{
name:""
},
mountPath:""
} ];
}
}, z = function(a, b, c) {
b.name ? a[c] = b :delete a[c];
}, A = function(b, c) {
var d = "Custom" === a.strategyType ? "secretSource" :"secret", e = _.filter(c, function(a) {
return a[d].name;
});
_.isEmpty(e) ? delete b.secrets :b.secrets = e;
}, B = function(a, b) {
return "None" === b.type ? a :(a.none = !1, angular.forEach(b, function(b, c) {
a[c] = !0;
}), a);
};
a.addWebhookTrigger = function(b) {
if (b) {
var c = {
disabled:!1,
data:{
type:b
}
}, d = _.find(a.createTriggerSelect.options, function(a) {
return a.label === b;
}).type;
c.data[d] = {
secret:f._generateSecret()
}, a.triggers[d + "Webhooks"].push(c);
}
}, a.save = function() {
switch (a.disableInputs = !0, p(), r(a.updatedBuildConfig).forcePull = a.options.forcePull, a.strategyType) {
case "Docker":
r(a.updatedBuildConfig).noCache = a.options.noCache;
break;

case "JenkinsPipeline":
"path" === a.jenkinsfileOptions.type ? delete a.updatedBuildConfig.spec.strategy.jenkinsPipelineStrategy.jenkinsfile :delete a.updatedBuildConfig.spec.strategy.jenkinsPipelineStrategy.jenkinsfilePath;
}
switch (a.sources.images && !_.isEmpty(a.sourceImages) && (a.updatedBuildConfig.spec.source.images[0].paths = v(a.imageSourcePaths), a.updatedBuildConfig.spec.source.images[0].from = w(a.imageOptions.fromSource)), "None" === a.imageOptions.from.type ? delete r(a.updatedBuildConfig).from :r(a.updatedBuildConfig).from = w(a.imageOptions.from), "None" === a.imageOptions.to.type ? delete a.updatedBuildConfig.spec.output.to :a.updatedBuildConfig.spec.output.to = w(a.imageOptions.to), r(a.updatedBuildConfig).env = n.compactEntries(a.envVars), z(a.updatedBuildConfig.spec.source, _.head(a.secrets.picked.gitSecret), "sourceSecret"), z(r(a.updatedBuildConfig), _.head(a.secrets.picked.pullSecret), "pullSecret"), z(a.updatedBuildConfig.spec.output, _.head(a.secrets.picked.pushSecret), "pushSecret"), a.strategyType) {
case "Source":
case "Docker":
A(a.updatedBuildConfig.spec.source, a.secrets.picked.sourceSecrets);
break;

case "Custom":
A(r(a.updatedBuildConfig), a.secrets.picked.sourceSecrets);
}
a.updatedBuildConfig.spec.triggers = x(), t(), h.update("buildconfigs", a.updatedBuildConfig.metadata.name, a.updatedBuildConfig, a.context).then(function() {
j.addNotification({
type:"success",
message:"Build config " + a.updatedBuildConfig.metadata.name + " was successfully updated."
}), s();
}, function(c) {
a.disableInputs = !1, j.addNotification({
id:"edit-build-config-error",
type:"error",
message:"An error occurred updating build config " + a.updatedBuildConfig.metadata.name + ".",
details:b("getErrorDetails")(c)
});
});
}, a.$on("$destroy", function() {
h.unwatchAll(q);
});
} ]), angular.module("openshiftConsole").controller("EditConfigMapController", [ "$filter", "$routeParams", "$scope", "$window", "DataService", "BreadcrumbsService", "Navigate", "NotificationsService", "ProjectsService", "gettext", "gettextCatalog", function(a, b, c, d, e, f, g, h, i, j, k) {
var l = [];
c.forms = {}, c.projectName = b.project, c.breadcrumbs = f.getBreadcrumbs({
name:b.configMap,
kind:"ConfigMap",
namespace:b.project,
includeProject:!0,
subpage:k.getString(j("Edit Config Map"))
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
errorNotification:!1
}).then(function(a) {
c.loaded = !0, c.breadcrumbs = f.getBreadcrumbs({
name:b.configMap,
object:a,
includeProject:!0,
project:d,
subpage:k.getString(j("Edit Config Map"))
}), c.configMap = a, l.push(e.watchObject("configmaps", b.configMap, i, function(a, b) {
c.resourceChanged = m(a) !== m(c.configMap), c.resourceDeleted = "DELETED" === b;
}));
}, function(c) {
g.toErrorPage("Could not load config map " + b.configMap + ". " + a("getErrorDetails")(c));
}), c.updateConfigMap = function() {
c.forms.editConfigMapForm.$valid && (n(), c.disableInputs = !0, e.update("configmaps", c.configMap.metadata.name, c.configMap, i).then(function() {
h.addNotification({
type:"success",
message:"Config map " + c.configMap.metadata.name + " successfully updated."
}), o();
}, function(b) {
c.disableInputs = !1, h.addNotification({
id:"edit-config-map-error",
type:"error",
message:"An error occurred updating the config map.",
details:a("getErrorDetails")(b)
});
}));
}, c.$on("$destroy", function() {
e.unwatchAll(l), n();
});
}));
} ]), angular.module("openshiftConsole").controller("EditDeploymentConfigController", [ "$scope", "$filter", "$location", "$routeParams", "$uibModal", "$window", "AuthorizationService", "BreadcrumbsService", "DataService", "EnvironmentService", "Navigate", "NotificationsService", "ProjectsService", "SecretsService", "keyValueEditorUtils", function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
a.projectName = d.project, a.deploymentConfig = null, a.alerts = {}, a.view = {
advancedStrategyOptions:!1,
advancedImageOptions:!1
}, a.triggers = {}, a.breadcrumbs = h.getBreadcrumbs({
name:d.name,
kind:d.kind,
namespace:d.project,
subpage:"Edit Deployment Config",
includeProject:!0
}), a.deploymentConfigStrategyTypes = [ "Recreate", "Rolling", "Custom" ];
var p = b("orderByDisplayName"), q = b("getErrorDetails"), r = function(b, c) {
a.alerts["from-value-objects"] = {
type:"error",
message:b,
details:c
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
errorNotification:!1
}).then(function(b) {
a.deploymentConfig = b, a.breadcrumbs = h.getBreadcrumbs({
object:b,
project:c,
subpage:"Edit",
includeProject:!0
});
var f = function(b, c) {
var d = {}, e = _.filter(c, {
type:"ImageChange"
});
return _.each(b, function(b) {
var c = _.find(e, function(a) {
return _.includes(a.imageChangeParams.containerNames, b.name);
}), f = {};
if (b.env = b.env || [], d[b.name] = {
env:b.env,
image:b.image,
hasDeploymentTrigger:!_.isEmpty(c)
}, c) {
var g = c.imageChangeParams.from, h = g.name.split(":");
f = {
data:c,
istag:{
namespace:g.namespace || a.projectName,
imageStream:h[0],
tagObject:{
tag:h[1]
}
},
automatic:_.get(c, "imageChangeParams.automatic", !1)
};
} else f = {
istag:{
namespace:"",
imageStream:""
},
automatic:!0
};
_.set(d, [ b.name, "triggerData" ], f);
}), d;
};
a.updatedDeploymentConfig = angular.copy(a.deploymentConfig), a.containerNames = _.map(a.deploymentConfig.spec.template.spec.containers, "name"), a.containerConfigByName = f(a.updatedDeploymentConfig.spec.template.spec.containers, a.updatedDeploymentConfig.spec.triggers), a.secrets = {
pullSecrets:angular.copy(a.deploymentConfig.spec.template.spec.imagePullSecrets) || [ {
name:""
} ]
}, a.volumeNames = _.map(a.deploymentConfig.spec.template.spec.volumes, "name"), a.strategyData = angular.copy(a.deploymentConfig.spec.strategy), a.originalStrategy = a.strategyData.type, a.strategyParamsPropertyName = v(a.strategyData.type), a.triggers.hasConfigTrigger = _.some(a.updatedDeploymentConfig.spec.triggers, {
type:"ConfigChange"
}), "Custom" !== a.strategyData.type || _.has(a.strategyData, "customParams.environment") || (a.strategyData.customParams.environment = []), i.list("configmaps", e, null, {
errorNotification:!1
}).then(function(b) {
t = p(b.by("metadata.name")), a.availableConfigMaps = t, a.valueFromObjects = t.concat(u);
}, function(a) {
403 !== a.code && r("Could not load config maps", q(a));
}), i.list("secrets", e, null, {
errorNotification:!1
}).then(function(b) {
u = p(b.by("metadata.name")), a.availableSecrets = u, a.valueFromObjects = u.concat(t);
var c = n.groupSecretsByType(b), d = _.mapValues(c, function(a) {
return _.map(a, "metadata.name");
});
a.secretsByType = _.each(d, function(a) {
a.unshift("");
});
}, function(a) {
403 !== a.code && r("Could not load secrets", q(a));
}), s.push(i.watchObject("deploymentconfigs", d.deploymentconfig, e, function(b, c) {
"MODIFIED" === c && (a.alerts["updated/deleted"] = {
type:"warning",
message:"This deployment configuration has changed since you started editing it. You'll need to copy any changes you've made and edit again."
}), "DELETED" === c && (a.alerts["updated/deleted"] = {
type:"warning",
message:"This deployment configuration has been deleted."
}, a.disableInputs = !0), a.deploymentConfig = b;
})), a.loaded = !0;
}, function(c) {
a.loaded = !0, a.alerts.load = {
type:"error",
message:"The deployment configuration details could not be loaded.",
details:b("getErrorDetails")(c)
};
}) :void k.toErrorPage("You do not have authority to update deployment config " + d.deploymentconfig + ".", "access_denied");
}));
var w = function() {
return "Custom" !== a.strategyData.type && "Custom" !== a.originalStrategy && a.strategyData.type !== a.originalStrategy;
}, x = function(b) {
if (!_.has(a.strategyData, b)) {
var c = e.open({
animation:!0,
templateUrl:"views/modals/confirm.html",
controller:"ConfirmModalController",
resolve:{
modalConfig:function() {
return {
alerts:a.alerts,
message:"Some of your existing " + a.originalStrategy.toLowerCase() + " strategy parameters can be used for the " + a.strategyData.type.toLowerCase() + " strategy. Keep parameters?",
details:"The timeout parameter and any pre or post lifecycle hooks will be copied from " + a.originalStrategy.toLowerCase() + " strategy to " + a.strategyData.type.toLowerCase() + " strategy. After saving the changes, " + a.originalStrategy.toLowerCase() + " strategy parameters will be removed.",
okButtonText:"Yes",
okButtonClass:"btn-primary",
cancelButtonText:"No"
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
w() ? x(b) :_.has(a.strategyData, b) || ("Custom" !== a.strategyData.type ? a.strategyData[b] = {} :a.strategyData[b] = {
image:"",
command:[],
environment:[]
}), a.strategyParamsPropertyName = b;
};
var y = function(a, b, c, d) {
var e = {
kind:"ImageStreamTag",
namespace:b.namespace,
name:b.imageStream + ":" + b.tagObject.tag
};
return c ? (c.imageChangeParams.from = e, c.imageChangeParams.automatic = d) :c = {
type:"ImageChange",
imageChangeParams:{
automatic:d,
containerNames:[ a ],
from:e
}
}, c;
}, z = function() {
var b = _.reject(a.updatedDeploymentConfig.spec.triggers, function(a) {
return "ImageChange" === a.type || "ConfigChange" === a.type;
});
return _.each(a.containerConfigByName, function(c, d) {
if (c.hasDeploymentTrigger) b.push(y(d, c.triggerData.istag, c.triggerData.data, c.triggerData.automatic)); else {
var e = _.find(a.updatedDeploymentConfig.spec.template.spec.containers, {
name:d
});
e.image = c.image;
}
}), a.triggers.hasConfigTrigger && b.push({
type:"ConfigChange"
}), b;
}, A = function() {
l.hideNotification("edit-deployment-config-error");
};
a.save = function() {
if (a.disableInputs = !0, _.each(a.containerConfigByName, function(b, c) {
var d = _.find(a.updatedDeploymentConfig.spec.template.spec.containers, {
name:c
});
d.env = o.compactEntries(b.env);
}), w() && delete a.strategyData[v(a.originalStrategy)], "Rolling" === a.strategyData.type) {
var d = a.strategyData[a.strategyParamsPropertyName].maxSurge, e = Number(d);
"" === d ? a.strategyData[a.strategyParamsPropertyName].maxSurge = null :_.isFinite(e) && (a.strategyData[a.strategyParamsPropertyName].maxSurge = e);
var f = a.strategyData[a.strategyParamsPropertyName].maxUnavailable, g = Number(f);
"" === f ? a.strategyData[a.strategyParamsPropertyName].maxUnavailable = null :_.isFinite(g) && (a.strategyData[a.strategyParamsPropertyName].maxUnavailable = g);
}
"Custom" !== a.strategyData.type && _.each([ "pre", "mid", "post" ], function(b) {
_.has(a.strategyData, [ a.strategyParamsPropertyName, b, "execNewPod", "env" ]) && (a.strategyData[a.strategyParamsPropertyName][b].execNewPod.env = o.compactEntries(a.strategyData[a.strategyParamsPropertyName][b].execNewPod.env));
}), _.has(a, "strategyData.customParams.environment") && (a.strategyData.customParams.environment = o.compactEntries(a.strategyData.customParams.environment)), a.updatedDeploymentConfig.spec.template.spec.imagePullSecrets = _.filter(a.secrets.pullSecrets, "name"), a.updatedDeploymentConfig.spec.strategy = a.strategyData, a.updatedDeploymentConfig.spec.triggers = z(), A(), i.update("deploymentconfigs", a.updatedDeploymentConfig.metadata.name, a.updatedDeploymentConfig, a.context).then(function() {
l.addNotification({
type:"success",
message:"Deployment config " + a.updatedDeploymentConfig.metadata.name + " was successfully updated."
});
var b = k.resourceURL(a.updatedDeploymentConfig);
c.url(b);
}, function(c) {
a.disableInputs = !1, l.addNotification({
id:"edit-deployment-config-error",
type:"error",
message:"An error occurred updating deployment config " + a.updatedDeploymentConfig.metadata.name + ".",
details:b("getErrorDetails")(c)
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
a.kind = c.kind, a.name = c.name, "HorizontalPodAutoscaler" === c.kind ? a.disableInputs = !0 :(a.targetKind = c.kind, a.targetName = c.name), a.autoscaling = {
name:a.name
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
var j = "HorizontalPodAutoscaler" === c.kind ? "update" :"create";
if (!f.canI({
resource:"horizontalpodautoscalers",
group:"autoscaling"
}, j, c.project)) return void k.toErrorPage("You do not have authority to " + j + " horizontal pod autoscalers in project " + c.project + ".", "access_denied");
var m = function() {
a.disableInputs = !0, r();
var b = {
apiVersion:"autoscaling/v1",
kind:"HorizontalPodAutoscaler",
metadata:{
name:a.autoscaling.name,
labels:n.mapEntries(n.compactEntries(a.labels))
},
spec:{
scaleTargetRef:{
kind:c.kind,
name:c.name,
apiVersion:"extensions/v1beta1",
subresource:"scale"
},
minReplicas:a.autoscaling.minReplicas,
maxReplicas:a.autoscaling.maxReplicas,
targetCPUUtilizationPercentage:a.autoscaling.targetCPU || a.autoscaling.defaultTargetCPU || null
}
};
h.create({
resource:"horizontalpodautoscalers",
group:"autoscaling"
}, null, b, d).then(function(a) {
l.addNotification({
type:"success",
message:"Horizontal pod autoscaler " + a.metadata.name + " successfully created."
}), q();
}, function(b) {
a.disableInputs = !1, l.addNotification({
id:"edit-hpa-error",
type:"error",
message:"An error occurred creating the horizontal pod autoscaler.",
details:p(b)
});
});
}, o = function(b) {
a.disableInputs = !0, b = angular.copy(b), b.metadata.labels = n.mapEntries(n.compactEntries(a.labels)), b.spec.minReplicas = a.autoscaling.minReplicas, b.spec.maxReplicas = a.autoscaling.maxReplicas, b.spec.targetCPUUtilizationPercentage = a.autoscaling.targetCPU || a.autoscaling.defaultTargetCPU || null, h.update({
resource:"horizontalpodautoscalers",
group:"autoscaling"
}, b.metadata.name, b, d).then(function(a) {
l.addNotification({
type:"success",
message:"Horizontal pod autoscaler " + a.metadata.name + " successfully updated."
}), q();
}, function(b) {
a.disableInputs = !1, l.addNotification({
id:"edit-hpa-error",
type:"error",
message:"An error occurred creating the horizontal pod autoscaler.",
details:p(b)
});
});
}, s = {};
s = "HorizontalPodAutoscaler" === c.kind ? {
resource:"horizontalpodautoscalers",
group:"autoscaling",
version:"v1"
} :{
resource:e.kindToResource(c.kind),
group:c.group
}, h.get(s, c.name, d).then(function(e) {
if (a.labels = _.map(_.get(e, "metadata.labels", {}), function(a, b) {
return {
name:b,
value:a
};
}), "HorizontalPodAutoscaler" === c.kind) a.targetKind = _.get(e, "spec.scaleTargetRef.kind"), a.targetName = _.get(e, "spec.scaleTargetRef.name"), _.assign(a.autoscaling, {
minReplicas:_.get(e, "spec.minReplicas"),
maxReplicas:_.get(e, "spec.maxReplicas"),
targetCPU:_.get(e, "spec.targetCPUUtilizationPercentage")
}), a.disableInputs = !1, a.save = function() {
o(e);
}, a.breadcrumbs = g.getBreadcrumbs({
name:a.targetName,
kind:a.targetKind,
namespace:c.project,
project:b,
subpage:"Autoscale",
includeProject:!0
}); else {
a.breadcrumbs = g.getBreadcrumbs({
object:e,
project:b,
subpage:"Autoscale",
includeProject:!0
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
name:c.name,
kind:c.kind,
namespace:c.project,
subpage:"Edit Health Checks",
includeProject:!0
}), d.previousProbes = {};
var m = a("getErrorDetails"), n = a("upperFirst"), o = function(a, b) {
j.addNotification({
id:"add-health-check-error",
type:"error",
message:a,
details:b
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
resource:g.kindToResource(c.kind),
group:c.group
};
return e.canI(r, "update", c.project) ? void h.get(r, d.name, k).then(function(a) {
var e = d.object = angular.copy(a);
d.breadcrumbs = f.getBreadcrumbs({
object:e,
project:b,
subpage:"Edit Health Checks",
includeProject:!0
}), d.containers = _.get(e, "spec.template.spec.containers"), d.addProbe = function(a, b) {
a[b] = _.get(d.previousProbes, [ a.name, b ], {}), d.form.$setDirty();
}, d.removeProbe = function(a, b) {
_.set(d.previousProbes, [ a.name, b ], a[b]), delete a[b], d.form.$setDirty();
}, d.save = function() {
d.disableInputs = !0, q(), h.update(g.kindToResource(c.kind), d.name, e, k).then(function() {
j.addNotification({
type:"success",
message:n(l) + " was updated."
}), p();
}, function(a) {
d.disableInputs = !1, o(n(l) + " could not be updated.", m(a));
});
};
}, function(a) {
o(n(l) + " could not be loaded.", m(a));
}) :void i.toErrorPage("You do not have authority to update " + l + ".", "access_denied");
}));
} ]), angular.module("openshiftConsole").controller("EditRouteController", [ "$filter", "$location", "$routeParams", "$scope", "AuthorizationService", "DataService", "Navigate", "NotificationsService", "ProjectsService", "RoutesService", function(a, b, c, d, e, f, g, h, i, j) {
d.renderOptions = {
hideFilterWidget:!0
}, d.projectName = c.project, d.routeName = c.route, d.loading = !0, d.routeURL = g.resourceURL(d.routeName, "Route", d.projectName), d.breadcrumbs = [ {
title:d.projectName,
link:"project/" + d.projectName
}, {
title:"Routes",
link:"project/" + d.projectName + "/browse/routes"
}, {
title:d.routeName,
link:d.routeURL
}, {
title:"Edit"
} ];
var k = function() {
h.hideNotification("edit-route-error");
};
d.$on("$destroy", k);
var l = function() {
b.path(d.routeURL);
};
d.cancel = l, i.get(c.project).then(_.spread(function(b, i) {
if (d.project = b, d.breadcrumbs[0].title = a("displayName")(b), !e.canI("routes", "update", c.project)) return void g.toErrorPage("You do not have authority to update route " + c.routeName + ".", "access_denied");
var m, n = a("orderByDisplayName"), o = function() {
g.toErrorPage('Editing routes with non-service targets is unsupported. You can edit the route with the "Edit YAML" action instead.');
};
f.get("routes", d.routeName, i).then(function(a) {
if ("Service" !== a.spec.to.kind) return void o();
m = angular.copy(a);
var b = _.get(m, "spec.host"), c = "Subdomain" === _.get(m, "spec.wildcardPolicy");
c && (b = "*." + j.getSubdomain(m)), d.routing = {
host:b,
wildcardPolicy:_.get(m, "spec.wildcardPolicy"),
path:_.get(m, "spec.path"),
targetPort:_.get(m, "spec.port.targetPort"),
tls:angular.copy(_.get(m, "spec.tls"))
}, f.list("services", i).then(function(a) {
d.loading = !1;
var b = a.by("metadata.name");
d.routing.to = m.spec.to, d.routing.alternateServices = [], _.each(_.get(m, "spec.alternateBackends"), function(a) {
return "Service" !== a.kind ? (o(), !1) :void d.routing.alternateServices.push(a);
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
e ? _.set(a, "spec.port.targetPort", e) :delete a.spec.port, _.get(d, "routing.tls.termination") ? (a.spec.tls = d.routing.tls, "passthrough" === a.spec.tls.termination && (delete a.spec.path, delete a.spec.tls.certificate, delete a.spec.tls.key, delete a.spec.tls.caCertificate), "reencrypt" !== a.spec.tls.termination && delete a.spec.tls.destinationCACertificate) :delete a.spec.tls;
var f = _.get(d, "routing.alternateServices", []);
return _.isEmpty(f) ? delete a.spec.alternateBackends :a.spec.alternateBackends = _.map(f, function(a) {
return {
kind:"Service",
name:a.name,
weight:a.weight
};
}), a;
};
d.updateRoute = function() {
if (d.form.$valid) {
k(), d.disableInputs = !0;
var b = p();
f.update("routes", d.routeName, b, i).then(function() {
h.addNotification({
type:"success",
message:"Route " + d.routeName + " was successfully updated."
}), l();
}, function(b) {
d.disableInputs = !1, h.addNotification({
type:"error",
id:"edit-route-error",
message:"An error occurred updating route " + d.routeName + ".",
details:a("getErrorDetails")(b)
});
});
}
};
}));
} ]), angular.module("openshiftConsole").controller("EditYAMLController", [ "$scope", "$filter", "$location", "$routeParams", "$window", "APIService", "AuthorizationService", "BreadcrumbsService", "DataService", "Navigate", "NotificationsService", "ProjectsService", function(a, b, c, d, e, f, g, h, i, j, k, l) {
if (!d.kind || !d.name) return void j.toErrorPage("Kind or name parameter missing.");
var m = b("humanizeKind");
a.alerts = {}, a.name = d.name, a.resourceURL = j.resourceURL(a.name, d.kind, d.project), a.breadcrumbs = [ {
title:d.project,
link:"project/" + d.project
}, {
title:d.name,
link:d.returnURL
}, {
title:"Edit YAML"
} ];
var n = function() {
return a.modified = !1, d.returnURL ? void c.url(d.returnURL) :void e.history.back();
}, o = _.throttle(function() {
a.$eval(function() {
a.modified = !0;
});
}, 1e3);
a.aceLoaded = function(a) {
var b = a.getSession();
b.setOption("tabSize", 2), b.setOption("useSoftTabs", !0), setTimeout(function() {
b.on("change", o);
});
};
var p = [];
l.get(d.project).then(_.spread(function(c, e) {
var h = {
resource:f.kindToResource(d.kind),
group:d.group
};
return g.canI(h, "update", d.project) ? (i.get(h, a.name, e, {
errorNotification:!1
}).then(function(c) {
var g = angular.copy(c);
a.resource = g;
var j = function(a) {
return _.get(a, "metadata.resourceVersion");
};
_.set(a, "editor.model", jsyaml.safeDump(g, {
sortKeys:!0
})), a.save = function() {
a.modified = !1;
var c;
try {
c = jsyaml.safeLoad(a.editor.model);
} catch (e) {
return void (a.error = e);
}
if (c.kind !== g.kind) return void (a.error = {
message:"Cannot change resource kind (original: " + g.kind + ", modified: " + (c.kind || "<unspecified>") + ")."
});
var h = f.objectToResourceGroupVersion(g), j = f.objectToResourceGroupVersion(c);
return j ? j.group !== h.group ? void (a.error = {
message:"Cannot change resource group (original: " + (h.group || "<none>") + ", modified: " + (j.group || "<none>") + ")."
}) :f.apiInfo(j) ? (a.updatingNow = !0, void i.update(j, a.resource.metadata.name, c, {
namespace:a.resource.metadata.namespace
}).then(function(b) {
var e = _.get(c, "metadata.resourceVersion"), f = _.get(b, "metadata.resourceVersion");
return f === e ? (a.alerts["no-changes-applied"] = {
type:"warning",
message:"No changes were applied to " + m(d.kind) + " " + d.name + ".",
details:"Make sure any new fields you may have added are supported API fields."
}, void (a.updatingNow = !1)) :(k.addNotification({
type:"success",
message:m(d.kind, !0) + " " + d.name + " was successfully updated."
}), void n());
}, function(c) {
a.updatingNow = !1, a.error = {
message:b("getErrorDetails")(c)
};
})) :void (a.error = {
message:f.unsupportedObjectKindOrVersion(c)
}) :void (a.error = {
message:f.invalidObjectKindOrVersion(c)
});
}, a.cancel = function() {
n();
}, p.push(i.watchObject(h, a.name, e, function(b, c) {
a.resourceChanged = j(b) !== j(g), a.resourceDeleted = "DELETED" === c;
}, {
errorNotification:!1
}));
}, function(a) {
j.toErrorPage("Could not load " + m(d.kind) + " '" + d.name + "'. " + b("getErrorDetails")(a));
}), void a.$on("$destroy", function() {
i.unwatchAll(p);
})) :void j.toErrorPage("You do not have authority to update " + m(d.kind) + " " + d.name + ".", "access_denied");
}));
} ]), angular.module("openshiftConsole").controller("BrowseCategoryController", [ "$scope", "$filter", "$location", "$q", "$routeParams", "$uibModal", "Constants", "DataService", "LabelFilter", "Navigate", "ProjectsService", "gettext", function(a, b, c, d, e, f, g, h, i, j, k, l) {
a.projectName = e.project;
var m = function(b, c) {
var d;
return _.some(b, function(b) {
if (d = _.find(b.items, {
id:c
})) {
a.category = d;
var e = _.get(d, "subcategories", []);
return a.subcategories = [ {
id:"",
label:""
} ].concat(e), !0;
}
return !1;
}), d;
}, n = g.CATALOG_CATEGORIES, o = "none" === e.category ? "" :e.category;
if (a.category = m(n, o), !a.category) return void j.toErrorPage("Catalog category " + e.category + " not found.");
var p, q;
return e.subcategory && (p = a.category, o = "none" === e.subcategory ? "" :e.subcategory, q = _.get(a.category, "subcategories", []), a.category = m(q, o), !a.category) ? void j.toErrorPage("Catalog category " + e.category + "/" + e.subcategory + " not found.") :(a.alerts = a.alerts || {}, a.breadcrumbs = [ {
title:a.projectName,
link:"project/" + a.projectName
}, {
title:l("Add to Project"),
link:"project/" + a.projectName + "/create"
}, {
title:l("Catalog"),
link:"project/" + a.projectName + "/create?tab=fromCatalog"
} ], p && a.breadcrumbs.push({
title:p.label,
link:"project/" + a.projectName + "/create/category/" + p.id
}), a.breadcrumbs.push({
title:a.category.label
}), void k.get(e.project).then(_.spread(function(c, d) {
a.project = c, a.context = d, a.breadcrumbs[0].title = b("displayName")(c), h.list("imagestreams", {
namespace:"openshift"
}).then(function(b) {
a.openshiftImageStreams = b.by("metadata.name");
}), h.list("templates", {
namespace:"openshift"
}).then(function(b) {
a.openshiftTemplates = b.by("metadata.name");
}), "openshift" === e.project ? (a.projectImageStreams = [], a.projectTemplates = []) :(h.list("imagestreams", d).then(function(b) {
a.projectImageStreams = b.by("metadata.name");
}), h.list("templates", d).then(function(b) {
a.projectTemplates = b.by("metadata.name");
}));
})));
} ]), angular.module("openshiftConsole").controller("CreateFromImageController", [ "$scope", "$filter", "$parse", "$q", "$routeParams", "$uibModal", "APIService", "ApplicationGenerator", "DataService", "HPAService", "ImagesService", "LimitRangesService", "Logger", "MetricsService", "Navigate", "NotificationsService", "ProjectsService", "QuotaService", "SOURCE_URL_PATTERN", "SecretsService", "TaskList", "failureObjectNameFilter", "keyValueEditorUtils", "gettext", "gettextCatalog", function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y) {
var z = b("displayName"), A = b("humanize");
a.projectName = e.project, a.sourceURLPattern = s;
var B = e.imageStream;
if (!B) return void o.toErrorPage("Cannot create from source: a base image was not specified");
if (!e.imageTag) return void o.toErrorPage("Cannot create from source: a base image tag was not specified");
var C = e.displayName || B;
a.displayName = e.displayName, a.advancedOptions = "true" === e.advanced, a.breadcrumbs = [ {
title:a.projectName,
link:"project/" + a.projectName
}, {
title:x("Add to Project"),
link:"project/" + a.projectName + "/create"
}, {
title:x("Catalog"),
link:"project/" + a.projectName + "/create?tab=fromCatalog"
}, {
title:C
} ];
var D = {
name:"app",
value:""
}, E = b("orderByDisplayName"), F = b("getErrorDetails"), G = {}, H = function() {
p.hideNotification("create-builder-list-config-maps-error"), p.hideNotification("create-builder-list-secrets-error"), _.each(G, function(a) {
!a.id || "error" !== a.type && "warning" !== a.type || p.hideNotification(a.id);
});
};
a.$on("$destroy", H), q.get(e.project).then(_.spread(function(c, g) {
function q(b) {
b.name = e.name, b.imageName = B, b.imageTag = e.imageTag, b.namespace = e.namespace, b.buildConfig = {
buildOnSourceChange:!0,
buildOnImageChange:!0,
buildOnConfigChange:!0,
secrets:{
gitSecret:[ {
name:""
} ]
},
sourceUrl:e.sourceURI,
gitRef:e.sourceRef,
contextDir:e.contextDir
}, b.buildConfigEnvVars = [], b.deploymentConfig = {
deployOnNewImage:!0,
deployOnConfigChange:!0
}, b.DCEnvVarsFromImage, b.DCEnvVarsFromUser = [], b.routing = {
include:!0,
portOptions:[]
}, b.userDefinedLabels = [], b.systemLabels = [ D ], b.annotations = {}, b.scaling = {
replicas:1,
autoscale:!1,
autoscaleOptions:[ {
label:"Manual",
value:!1
}, {
label:"Automatic",
value:!0
} ]
}, b.container = {
resources:{}
}, b.cpuRequestCalculated = l.isRequestCalculated("cpu", c), b.cpuLimitCalculated = l.isLimitCalculated("cpu", c), b.memoryRequestCalculated = l.isRequestCalculated("memory", c), b.fillSampleRepo = function() {
var a;
(b.image || b.image.metadata || b.image.metadata.annotations) && (a = b.image.metadata.annotations, b.buildConfig.sourceUrl = a.sampleRepo || "", b.buildConfig.gitRef = a.sampleRef || "", b.buildConfig.contextDir = a.sampleContextDir || "", (a.sampleRef || a.sampleContextDir) && (b.advancedSourceOptions = !0));
}, b.usingSampleRepo = function() {
return b.buildConfig.sourceUrl === _.get(b, "image.metadata.annotations.sampleRepo");
}, n.isAvailable().then(function(b) {
a.metricsWarning = !b;
});
var d = [], f = [];
a.valueFromObjects = [], i.list("configmaps", g, null, {
errorNotification:!1
}).then(function(b) {
d = E(b.by("metadata.name")), a.valueFromObjects = d.concat(f);
}, function(a) {
403 !== a.code && p.addNotification({
id:"create-builder-list-config-maps-error",
type:"error",
message:"Could not load config maps.",
details:F(a)
});
}), i.list("secrets", g, null, {
errorNotification:!1
}).then(function(b) {
f = E(b.by("metadata.name")), a.valueFromObjects = f.concat(d);
var c = t.groupSecretsByType(b), e = _.mapValues(c, function(a) {
return _.map(a, "metadata.name");
});
a.secretsByType = _.each(e, function(a) {
a.unshift("");
});
}, function(a) {
403 !== a.code && p.addNotification({
id:"create-builder-list-secrets-error",
type:"error",
message:"Could not load secrets.",
details:F(a)
});
}), i.get("imagestreams", b.imageName, {
namespace:b.namespace || e.project
}).then(function(a) {
b.imageStream = a;
var c = b.imageTag;
i.get("imagestreamtags", a.metadata.name + ":" + c, {
namespace:b.namespace
}).then(function(a) {
b.image = a.image, b.DCEnvVarsFromImage = k.getEnvironment(a);
var c = h.parsePorts(a.image);
_.isEmpty(c) ? (b.routing.include = !1, b.routing.portOptions = []) :(b.routing.portOptions = _.map(c, function(a) {
var b = h.getServicePort(a);
return {
port:b.name,
label:b.targetPort + "/" + b.protocol
};
}), b.routing.targetPort = b.routing.portOptions[0].port);
}, function() {
o.toErrorPage("Cannot create from source: the specified image could not be retrieved.");
});
}, function() {
o.toErrorPage("Cannot create from source: the specified image could not be retrieved.");
});
}
a.project = c, a.breadcrumbs[0].title = b("displayName")(c), e.sourceURI && (a.sourceURIinParams = !0);
var s = function() {
a.hideCPU || (a.cpuProblems = l.validatePodLimits(a.limitRanges, "cpu", [ a.container ], c)), a.memoryProblems = l.validatePodLimits(a.limitRanges, "memory", [ a.container ], c);
};
i.list("limitranges", g).then(function(b) {
a.limitRanges = b.by("metadata.name"), _.isEmpty(a.limitRanges) || a.$watch("container", s, !0);
});
var v, I, J = function() {
return a.scaling.autoscale ? void (a.showCPURequestWarning = !j.hasCPURequest([ a.container ], a.limitRanges, c)) :void (a.showCPURequestWarning = !1);
};
i.list("resourcequotas", g).then(function(a) {
v = a.by("metadata.name"), m.log("quotas", v);
}), i.list("appliedclusterresourcequotas", g).then(function(a) {
I = a.by("metadata.name"), m.log("cluster quotas", I);
}), a.$watch("scaling.autoscale", J), a.$watch("container", J, !0), a.$watch("name", function(a) {
D.value = a;
}), q(a);
var K, L = function() {
var b = {
started:y.getString(x("Creating application")) + " " + a.name + " " + y.getString(x("in project")) + " " + a.projectDisplayName(),
success:y.getString(x("Created application")) + " " + a.name + " " + y.getString(x("in project")) + " " + a.projectDisplayName(),
failure:y.getString(x("Failed to create")) + " " + a.name + " " + y.getString(x("in project")) + " " + a.projectDisplayName()
}, c = {};
u.clear(), u.add(b, c, e.project, function() {
var b = d.defer();
return i.batch(K, g).then(function(c) {
var d = [], e = !1;
_.isEmpty(c.failure) ? d.push({
type:"success",
message:"All resources for application " + a.name + " were created successfully."
}) :(e = !0, c.failure.forEach(function(a) {
d.push({
type:"error",
message:"Cannot create " + A(a.object.kind).toLowerCase() + ' "' + a.object.metadata.name + '". ',
details:a.data.message
});
}), c.success.forEach(function(a) {
d.push({
type:"success",
message:"Created " + A(a.kind).toLowerCase() + ' "' + a.metadata.name + '" successfully. '
});
})), b.resolve({
alerts:d,
hasErrors:e
});
}), b.promise;
}), o.toNextSteps(a.name, a.projectName, {
usingSampleRepo:a.usingSampleRepo(),
breadcrumbTitle:C
});
}, M = function(a) {
var b = f.open({
animation:!0,
templateUrl:"views/modals/confirm.html",
controller:"ConfirmModalController",
resolve:{
modalConfig:function() {
return {
alerts:a,
message:"Problems were detected while checking your application configuration.",
okButtonText:"Create Anyway",
okButtonClass:"btn-danger",
cancelButtonText:"Cancel"
};
}
}
});
b.result.then(L);
}, N = function(b) {
H(), G = b.quotaAlerts || [], a.nameTaken || _.some(G, {
type:"error"
}) ? (a.disableInputs = !1, _.each(G, function(a) {
a.id = _.uniqueId("create-builder-alert-"), p.addNotification(a);
})) :_.isEmpty(G) ? L() :(M(G), a.disableInputs = !1);
};
a.projectDisplayName = function() {
return z(this.project) || this.projectName;
}, a.createApp = function() {
a.disableInputs = !0, H(), a.buildConfig.envVars = w.compactEntries(a.buildConfigEnvVars), a.deploymentConfig.envVars = w.compactEntries(a.DCEnvVarsFromUser);
var b = w.mapEntries(w.compactEntries(a.userDefinedLabels)), c = w.mapEntries(w.compactEntries(a.systemLabels));
a.labels = _.extend(c, b);
var d = h.generate(a);
K = [], angular.forEach(d, function(a) {
null !== a && (m.debug("Generated resource definition:", a), K.push(a));
});
var e = h.ifResourcesDontExist(K, a.projectName), f = r.getLatestQuotaAlerts(K, g), i = function(b) {
return a.nameTaken = b.nameTaken, f;
};
e.then(i, i).then(N, N);
};
})), a.cancel = function() {
o.toProjectOverview(a.projectName);
};
} ]), angular.module("openshiftConsole").controller("NextStepsController", [ "$scope", "$http", "$routeParams", "DataService", "$q", "$location", "TaskList", "$parse", "Navigate", "Logger", "$filter", "imageObjectRefFilter", "failureObjectNameFilter", "ProjectsService", "gettext", function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
var p = (k("displayName"), []);
a.alerts = [], a.loginBaseUrl = d.openshiftAPIBaseUrl(), a.buildConfigs = {}, a.projectName = c.project, a.fromSampleRepo = c.fromSample, a.breadcrumbs = [ {
title:a.projectName,
link:"project/" + a.projectName
}, {
title:o("Add to Project"),
link:"project/" + a.projectName + "/create"
}, {
title:c.breadcrumbTitle || c.name
}, {
title:o("Next Steps")
} ], n.get(c.project).then(_.spread(function(b, e) {
a.project = b, a.breadcrumbs[0].title = k("displayName")(b), p.push(d.watch("buildconfigs", e, function(b) {
a.buildConfigs = b.by("metadata.name"), a.createdBuildConfig = a.buildConfigs[c.name], j.log("buildconfigs (subscribe)", a.buildConfigs);
})), a.$on("$destroy", function() {
d.unwatchAll(p);
});
}));
} ]), angular.module("openshiftConsole").controller("NewFromTemplateController", [ "$filter", "$location", "$parse", "$routeParams", "$scope", "CachedTemplateService", "DataService", "Navigate", "NotificationsService", "ProjectsService", "gettext", function(a, b, c, d, e, f, g, h, i, j, k) {
function l(a, b) {
var c = _.get(a, "spec.triggers", []), d = _.find(c, function(a) {
if ("ImageChange" !== a.type) return !1;
var c = _.get(a, "imageChangeParams.containerNames", []);
return _.includes(c, b.name);
});
return _.get(d, "imageChangeParams.from.name");
}
function m(a) {
for (var b = [], c = z.exec(a); c; ) b.push(c[1]), c = z.exec(a);
return b;
}
function n() {
var a = q();
e.templateImages = _.map(A, function(b) {
if (_.isEmpty(b.usesParameters)) return b;
var c = _.template(b.name, {
interpolate:z
});
return {
name:c(a),
usesParameters:b.usesParameters
};
});
}
function o(a) {
var b = [], c = t(a);
return c && angular.forEach(c, function(c) {
var d = c.image, e = l(a, c);
e && (d = e), d && b.push(d);
}), b;
}
function p(a) {
A = [];
var b = [], c = {};
angular.forEach(a.objects, function(a) {
if ("BuildConfig" === a.kind) {
var d = w(u(a), s);
d && A.push({
name:d,
usesParameters:m(d)
});
var e = w(v(a), s);
e && (c[e] = !0);
}
"DeploymentConfig" === a.kind && (b = b.concat(o(a)));
}), b.forEach(function(a) {
c[a] || A.push({
name:a,
usesParameters:m(a)
});
}), A = _.uniq(A, !1, "name");
}
function q() {
var a = {};
return _.each(e.template.parameters, function(b) {
a[b.name] = b.value;
}), a;
}
var r = d.template, s = d.namespace || "", t = c("spec.template.spec.containers"), u = c("spec.strategy.sourceStrategy.from || spec.strategy.dockerStrategy.from || spec.strategy.customStrategy.from"), v = c("spec.output.to"), w = a("imageObjectRef");
if (!r) return void h.toErrorPage("Cannot create from template: a template name was not specified.");
e.breadcrumbs = [ {
title:d.project,
link:"project/" + d.project
}, {
title:k("Add to Project"),
link:"project/" + d.project + "/create"
}, {
title:k("Catalog"),
link:"project/" + d.project + "/create?tab=fromCatalog"
}, {
title:r
} ];
var x = a("displayName"), y = function() {
try {
return JSON.parse(d.templateParamsMap);
} catch (a) {
i.addNotification({
id:"template-params-invalid-json",
type:"error",
message:"Could not prefill parameter values.",
details:"The `templateParamsMap` URL parameter is not valid JSON. " + a
});
}
};
d.templateParamsMap && (e.prefillParameters = y());
var z = /\${([a-zA-Z0-9\_]+)}/g, A = [];
j.get(d.project).then(_.spread(function(c) {
if (e.project = c, e.breadcrumbs[0].title = x(c), s) g.get("templates", r, {
namespace:s || e.project.metadata.name
}).then(function(b) {
e.template = b, e.breadcrumbs[3].title = a("displayName")(b), p(b);
var c = function(a) {
return !_.isEmpty(a.usesParameters);
};
_.some(A, c) ? (e.parameterDisplayNames = {}, _.each(b.parameters, function(a) {
e.parameterDisplayNames[a.name] = a.displayName || a.name;
}), e.$watch("template.parameters", _.debounce(function() {
e.$apply(n);
}, 50, {
maxWait:250
}), !0)) :e.templateImages = A;
}, function() {
h.toErrorPage("Cannot create from template: the specified template could not be retrieved.");
}); else {
if (e.template = f.getTemplate(), _.isEmpty(e.template)) {
var d = URI("error").query({
error:"not_found",
error_description:"Template wasn't found in cache."
}).toString();
b.url(d);
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
hasErrors:!0
});
};
} ]), angular.module("openshiftConsole").controller("EventsController", [ "$routeParams", "$scope", "ProjectsService", function(a, b, c) {
b.projectName = a.project, b.renderOptions = {
hideFilterWidget:!0
}, b.breadcrumbs = [ {
title:"Monitoring",
link:"project/" + a.project + "/monitoring"
}, {
title:"Events"
} ], c.get(a.project).then(_.spread(function(a, c) {
b.project = a, b.projectContext = c;
}));
} ]), angular.module("openshiftConsole").controller("OAuthController", [ "$scope", "$location", "$q", "RedirectLoginService", "DataService", "AuthService", "Logger", function(a, b, c, d, e, f, g) {
var h = g.get("auth");
a.completeLogin = function() {}, a.cancelLogin = function() {
b.replace(), b.url("./");
}, d.finish().then(function(c) {
var d = c.token, g = c.then, i = c.verified, j = c.ttl, k = {
errorNotification:!1,
http:{
auth:{
token:d,
triggerLogin:!1
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
error:"user_fetch_failed"
}).toString();
h.error("OAuthController, error fetching user", a, "redirecting", c), b.replace(), b.url(c);
});
})["catch"](function(a) {
var c = URI("error").query({
error:a.error || "",
error_description:a.error_description || "",
error_uri:a.error_uri || ""
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
href:window.location.protocol + "//" + window.OPENSHIFT_CONFIG.api.openshift.hostPort + window.OPENSHIFT_CONFIG.api.openshift.prefix,
label:d.getString(c("Check Server Connection")),
target:"_blank"
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
c.isLoggedIn() ? (b.debug("LogoutController, logout failed, still logged in"), a.logoutMessage = 'You could not be logged out. Return to the <a href="./">console</a>.') :d.logout_uri ? (b.debug("LogoutController, logout completed, redirecting to AUTH_CFG.logout_uri", d.logout_uri), window.location.href = d.logout_uri) :(b.debug("LogoutController, logout completed, reloading the page"), window.location.reload(!1));
})) :d.logout_uri ? (b.debug("LogoutController, logout completed, redirecting to AUTH_CFG.logout_uri", d.logout_uri), a.logoutMessage = f.getString(e("Logging out...")), window.location.href = d.logout_uri) :(b.debug("LogoutController, not logged in, logout complete"), a.logoutMessage = f.getString(e('You are logged out. Return to the <a href="./">console</a>.')));
} ]), angular.module("openshiftConsole").controller("CreateController", [ "$scope", "$filter", "$location", "$q", "$routeParams", "$uibModal", "CatalogService", "Constants", "DataService", "LabelFilter", "Logger", "ProjectsService", "gettext", function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
a.projectName = e.project, a.categories = h.CATALOG_CATEGORIES, a.alerts = a.alerts || {}, a.breadcrumbs = [ {
title:a.projectName,
link:"project/" + a.projectName
}, {
title:m("Add to Project")
} ], l.get(e.project).then(_.spread(function(c, d) {
a.project = c, a.context = d, a.breadcrumbs[0].title = b("displayName")(c), i.list("imagestreams", {
namespace:"openshift"
}).then(function(b) {
a.openshiftImageStreams = b.by("metadata.name");
}), i.list("templates", {
namespace:"openshift"
}).then(function(b) {
a.openshiftTemplates = b.by("metadata.name");
}), "openshift" === e.project ? (a.projectImageStreams = [], a.projectTemplates = []) :(i.list("imagestreams", d).then(function(b) {
a.projectImageStreams = b.by("metadata.name");
}), i.list("templates", d).then(function(b) {
a.projectTemplates = b.by("metadata.name");
}));
}));
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
createWithProject:function(d) {
d = d || a.selected.project.metadata.name;
var e = b.imageStream ? g.createFromImageURL(a.imageStream, t.imageTag, d, t) :g.createFromTemplateURL(a.template, d, t);
c.url(e);
}
}), a.projects = {}, a.canCreateProject = void 0, f.list("projects", a).then(function(b) {
a.loaded = !0, a.projects = d("orderByDisplayName")(b.by("metadata.name")), a.projects = a.projects.filter(function(a) {
return i.indexOf(a.metadata.name) < 0;
}), a.noProjects = _.isEmpty(a.projects);
}), h.canCreate().then(function() {
a.canCreateProject = !0;
}, function() {
a.canCreateProject = !1;
});
} ]), angular.module("openshiftConsole").controller("CreateProjectController", [ "$scope", "$location", "$window", "AuthService", "Constants", function(a, b, c, d, e) {
var f = _.get(e, "ENABLE_TECH_PREVIEW_FEATURE.service_catalog_landing_page");
a.onProjectCreated = function(a) {
f ? c.history.back() :b.path("project/" + a + "/create");
}, d.withUser();
} ]), angular.module("openshiftConsole").controller("EditProjectController", [ "$scope", "$routeParams", "$filter", "$location", "DataService", "ProjectsService", "Navigate", "gettext", "gettextCatalog", function(a, b, c, d, e, f, g, h, i) {
a.alerts = {};
var j = c("annotation"), k = c("annotationName");
f.get(b.project).then(_.spread(function(e) {
var l = function(a) {
return {
description:j(a, "description"),
displayName:j(a, "displayName")
};
}, m = function(a, b) {
var c = angular.copy(a);
return c.metadata.annotations[k("description")] = b.description, c.metadata.annotations[k("displayName")] = b.displayName, c;
};
angular.extend(a, {
project:e,
editableFields:l(e),
show:{
editing:!1
},
actions:{
canSubmit:!1
},
canSubmit:function(b) {
a.actions.canSubmit = b;
},
update:function() {
a.disableInputs = !0, f.update(b.project, m(e, a.editableFields)).then(function() {
b.then ? d.path(b.then) :g.toProjectOverview(e.metadata.name);
}, function(b) {
a.disableInputs = !1, a.editableFields = l(e), a.alerts.update = {
type:"error",
message:i.getString(h("An error occurred while updating the project")),
details:c("getErrorDetails")(b)
};
});
}
});
}));
} ]), angular.module("openshiftConsole").controller("CreateRouteController", [ "$filter", "$routeParams", "$scope", "$window", "ApplicationGenerator", "AuthorizationService", "DataService", "Navigate", "NotificationsService", "ProjectsService", "keyValueEditorUtils", function(a, b, c, d, e, f, g, h, i, j, k) {
c.renderOptions = {
hideFilterWidget:!0
}, c.projectName = b.project, c.serviceName = b.service, c.labels = [], c.routing = {
name:c.serviceName || ""
}, c.breadcrumbs = [ {
title:c.projectName,
link:"project/" + c.projectName
}, {
title:"Routes",
link:"project/" + c.projectName + "/browse/routes"
}, {
title:"Create Route"
} ];
var l = function() {
i.hideNotification("create-route-error");
};
c.$on("$destroy", l);
var m = function() {
d.history.back();
};
c.cancel = m, j.get(b.project).then(_.spread(function(d, j) {
if (c.project = d, c.breadcrumbs[0].title = a("displayName")(d), !f.canI("routes", "create", b.project)) return void h.toErrorPage("You do not have authority to create routes in project " + b.project + ".", "access_denied");
var n = a("orderByDisplayName");
c.routing.to = {
kind:"Service",
name:c.serviceName,
weight:1
}, g.list("services", j).then(function(a) {
c.services = n(a.by("metadata.name"));
}), c.copyServiceLabels = function() {
var a = _.get(c, "routing.to.service.metadata.labels", {}), b = k.mapEntries(k.compactEntries(c.labels)), d = _.assign(b, a);
c.labels = _.map(d, function(a, b) {
return {
name:b,
value:a
};
});
}, c.createRoute = function() {
if (c.createRouteForm.$valid) {
l(), c.disableInputs = !0;
var b = c.routing.to.name, d = k.mapEntries(k.compactEntries(c.labels)), f = e.createRoute(c.routing, b, d), h = _.get(c, "routing.alternateServices", []);
_.isEmpty(h) || (f.spec.to.weight = _.get(c, "routing.to.weight"), f.spec.alternateBackends = _.map(h, function(a) {
return {
kind:"Service",
name:a.name,
weight:a.weight
};
})), g.create("routes", null, f, j).then(function() {
i.addNotification({
type:"success",
message:"Route " + f.metadata.name + " was successfully created."
}), m();
}, function(b) {
c.disableInputs = !1, i.addNotification({
type:"error",
id:"create-route-error",
message:"An error occurred creating the route.",
details:a("getErrorDetails")(b)
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
resource:e.kindToResource(b.kind),
group:b.group
};
c.projectName = b.project, c.kind = b.kind, c.name = b.name, c.RELATIVE_PATH_PATTERN = n, c.outOfClaims = !1, c.attach = {
persistentVolumeClaim:null,
volumeName:null,
mountPath:null,
allContainers:!0,
containers:{}
}, c.breadcrumbs = g.getBreadcrumbs({
name:b.name,
kind:b.kind,
namespace:b.project,
subpage:"Add Storage",
includeProject:!0
}), l.get(b.project).then(_.spread(function(e, l) {
if (c.project = e, c.breadcrumbs[0].title = a("displayName")(e), !f.canI(q, "update", b.project)) return void j.toErrorPage("You do not have authority to update " + p(b.kind) + " " + b.name + ".", "access_denied");
var n = a("orderByDisplayName"), o = a("getErrorDetails"), r = a("generateName"), s = function(a, b) {
c.disableInputs = !0, k.addNotification({
id:"attach-pvc-error",
type:"error",
message:a,
details:b
});
}, t = function() {
k.hideNotification("attach-pvc-error");
};
c.$on("$destroy", t);
var u = function() {
d.history.back();
};
c.cancel = u;
var v = function(a) {
return c.attach.allContainers || c.attach.containers[a.name];
}, w = function() {
var a = _.get(c, "attach.resource.spec.template");
c.existingMountPaths = m.getMountPaths(a, v);
};
c.$watchGroup([ "attach.resource", "attach.allContainers" ], w), c.$watch("attach.containers", w, !0);
var x = function() {
h.get(q, b.name, l).then(function(a) {
c.attach.resource = a, c.breadcrumbs = g.getBreadcrumbs({
object:a,
project:e,
subpage:"Add Storage",
includeProject:!0
});
var b = _.get(a, "spec.template");
c.existingVolumeNames = m.getVolumeNames(b);
}, function(a) {
s(b.name + " could not be loaded.", o(a));
}), h.list("persistentvolumeclaims", l).then(function(a) {
c.pvcs = n(a.by("metadata.name")), _.isEmpty(c.pvcs) || c.attach.persistentVolumeClaim || (c.attach.persistentVolumeClaim = _.head(c.pvcs));
}), h.list("resourcequotas", {
namespace:c.projectName
}, function(a) {
c.quotas = a.by("metadata.name"), c.outOfClaims = i.isAnyStorageQuotaExceeded(c.quotas, c.clusterQuotas);
}), h.list("appliedclusterresourcequotas", {
namespace:c.projectName
}, function(a) {
c.clusterQuotas = a.by("metadata.name"), c.outOfClaims = i.isAnyStorageQuotaExceeded(c.quotas, c.clusterQuotas);
});
};
x(), c.attachPVC = function() {
if (c.disableInputs = !0, t(), c.attachPVCForm.$valid) {
c.attach.volumeName || (c.attach.volumeName = r("volume-"));
var a = c.attach.resource, d = _.get(a, "spec.template"), e = c.attach.persistentVolumeClaim, f = c.attach.volumeName, g = c.attach.mountPath, i = c.attach.subPath, j = c.attach.readOnly;
g && angular.forEach(d.spec.containers, function(a) {
if (v(a)) {
var b = m.createVolumeMount(f, g, i, j);
a.volumeMounts || (a.volumeMounts = []), a.volumeMounts.push(b);
}
});
var n = m.createVolume(f, e);
d.spec.volumes || (d.spec.volumes = []), d.spec.volumes.push(n), h.update(q, a.metadata.name, c.attach.resource, l).then(function() {
var a;
g || (a = "No mount path was provided. The volume reference was added to the configuration, but it will not be mounted into running pods."), k.addNotification({
type:"success",
message:"Persistent volume claim " + e.metadata.name + " added to " + p(b.kind) + " " + b.name + ".",
details:a
}), u();
}, function(a) {
s("An error occurred attaching the persistent volume claim to the " + p(b.kind) + ".", o(a)), c.disableInputs = !1;
});
}
};
}));
} ]), angular.module("openshiftConsole").controller("AddConfigVolumeController", [ "$filter", "$location", "$routeParams", "$scope", "$window", "APIService", "AuthorizationService", "BreadcrumbsService", "DataService", "Navigate", "NotificationsService", "ProjectsService", "StorageService", "RELATIVE_PATH_PATTERN", "gettextCatalog", function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
if (!c.kind || !c.name) return void j.toErrorPage("Kind or name parameter missing.");
var p = [ "Deployment", "DeploymentConfig", "ReplicaSet", "ReplicationController" ];
if (!_.includes(p, c.kind)) return void j.toErrorPage("Volumes are not supported for kind " + c.kind + ".");
var q = {
resource:f.kindToResource(c.kind),
group:c.group
};
d.projectName = c.project, d.kind = c.kind, d.name = c.name, d.attach = {
allContainers:!0,
pickKeys:!1
}, d.forms = {}, d.RELATIVE_PATH_PATTERN = n, d.breadcrumbs = h.getBreadcrumbs({
name:c.name,
kind:c.kind,
namespace:c.project,
subpage:"Add Config Files",
includeProject:!0
});
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
id:"add-config-volume-error",
type:"error",
message:a,
details:b
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
errorNotification:!1
}).then(function(a) {
d.targetObject = a, d.breadcrumbs = h.getBreadcrumbs({
object:a,
project:b,
subpage:"Add Config Files",
includeProject:!0
});
}, function(a) {
d.error = a;
}), i.list("configmaps", e, null, {
errorNotification:!1
}).then(function(a) {
d.configMaps = f(a.by("metadata.name"));
}, function(a) {
return 403 === a.code ? void (d.configMaps = []) :void v("Could not load config maps", l(a));
}), i.list("secrets", e, null, {
errorNotification:!1
}).then(function(a) {
d.secrets = f(a.by("metadata.name"));
}, function(a) {
return 403 === a.code ? void (d.secrets = []) :void v("Could not load secrets", l(a));
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
name:h,
mountPath:j
};
"Secret" === f.kind && (m.readOnly = !0), _.each(g.spec.containers, function(a) {
o(a) && (a.volumeMounts = a.volumeMounts || [], a.volumeMounts.push(m));
});
var p, r = {
name:h
};
switch (d.attach.pickKeys && (p = d.attach.items), f.kind) {
case "ConfigMap":
r.configMap = {
name:f.metadata.name,
items:p
};
break;

case "Secret":
r.secret = {
secretName:f.metadata.name,
items:p
};
}
g.spec.volumes = g.spec.volumes || [], g.spec.volumes.push(r), d.disableInputs = !0, w();
var s = a("humanizeKind"), t = s(f.kind), x = s(c.kind);
i.update(q, b.metadata.name, d.targetObject, e).then(function() {
k.addNotification({
type:"success",
message:"Succesfully added " + t + " " + f.metadata.name + " to " + x + " " + c.name + "."
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
master:{
openshift:c.VERSION.openshift,
kubernetes:c.VERSION.kubernetes
}
};
} ]), angular.module("openshiftConsole").controller("CommandLineController", [ "$scope", "DataService", "AuthService", "Constants", function(a, b, c, d) {
c.withUser(), a.cliDownloadURL = d.CLI, a.cliDownloadURLPresent = a.cliDownloadURL && !_.isEmpty(a.cliDownloadURL), a.loginBaseURL = b.openshiftAPIBaseUrl(), a.sessionToken = c.UserStore().getToken(), a.showSessionToken = !1, a.toggleShowSessionToken = function() {
a.showSessionToken = !a.showSessionToken;
};
} ]), angular.module("openshiftConsole").controller("CreatePersistentVolumeClaimController", [ "$filter", "$routeParams", "$scope", "$window", "ApplicationGenerator", "AuthorizationService", "DataService", "Navigate", "NotificationsService", "ProjectsService", "keyValueEditorUtils", function(a, b, c, d, e, f, g, h, i, j, k) {
c.projectName = b.project, c.accessModes = "ReadWriteOnce", c.claim = {}, c.breadcrumbs = [ {
title:c.projectName,
link:"project/" + c.projectName
}, {
title:"Storage",
link:"project/" + c.projectName + "/browse/storage"
}, {
title:"Create Storage"
} ];
var l = function() {
i.hideNotification("create-pvc-error");
};
c.$on("$destroy", l);
var m = function() {
d.history.back();
};
c.cancel = m, j.get(b.project).then(_.spread(function(d, e) {
function j() {
var a = {
kind:"PersistentVolumeClaim",
apiVersion:"v1",
metadata:{
name:c.claim.name,
labels:{},
annotations:{}
},
spec:{
resources:{
requests:{}
}
}
};
a.spec.accessModes = [ c.claim.accessModes || "ReadWriteOnce" ];
var b = c.claim.unit || "Mi";
if (a.spec.resources.requests.storage = c.claim.amount + b, c.claim.selectedLabels) {
var d = k.mapEntries(k.compactEntries(c.claim.selectedLabels));
_.isEmpty(d) || _.set(a, "spec.selector.matchLabels", d);
}
return c.claim.storageClass && "No Storage Class" !== c.claim.storageClass.metadata.name && (a.metadata.annotations["volume.beta.kubernetes.io/storage-class"] = c.claim.storageClass.metadata.name), a;
}
return c.project = d, c.breadcrumbs[0].title = a("displayName")(d), f.canI("persistentvolumeclaims", "create", b.project) ? void (c.createPersistentVolumeClaim = function() {
if (l(), c.createPersistentVolumeClaimForm.$valid) {
c.disableInputs = !0;
var b = j();
g.create("persistentvolumeclaims", null, b, e).then(function(a) {
i.addNotification({
type:"success",
message:"Persistent volume claim " + a.metadata.name + " successfully created."
}), m();
}, function(b) {
c.disableInputs = !1, i.addNotification({
id:"create-pvc-error",
type:"error",
message:"An error occurred requesting storage.",
details:a("getErrorDetails")(b)
});
});
}
}) :void h.toErrorPage("You do not have authority to create persistent volume claims in project " + b.project + ".", "access_denied");
}));
} ]), angular.module("openshiftConsole").directive("buildClose", [ "$window", function(a) {
var b = function(a) {
return "hide/build/" + a.metadata.uid;
}, c = function(a) {
var c = b(a);
return "true" === sessionStorage.getItem(c);
};
return {
restrict:"AE",
scope:{
build:"=",
hideBuild:"="
},
controller:[ "$scope", function(a) {
a.onHideBuild = function() {
var c = b(a.build);
a.hideBuild = !0, sessionStorage.setItem(c, "true");
};
} ],
link:function(a, b, d, e) {
a.hideBuild = !1, a.$watch("build", function(b) {
a.hideBuild = c(b);
});
},
templateUrl:"views/directives/_build-close.html"
};
} ]), angular.module("openshiftConsole").directive("createSecret", [ "$filter", "AuthorizationService", "DataService", "NotificationsService", "DNS1123_SUBDOMAIN_VALIDATION", "gettext", "gettextCatalog", function(a, b, c, d, e, f, g) {
return {
restrict:"E",
scope:{
type:"=",
serviceAccountToLink:"=?",
namespace:"=",
onCreate:"&",
onCancel:"&"
},
templateUrl:"views/directives/create-secret.html",
link:function(h) {
h.nameValidation = e, h.secretAuthTypeMap = {
image:{
label:g.getString(f("Image Secret")),
authTypes:[ {
id:"kubernetes.io/dockercfg",
label:g.getString(f("Image Registry Credentials"))
}, {
id:"kubernetes.io/dockerconfigjson",
label:g.getString(f("Configuration File"))
} ]
},
source:{
label:g.getString(f("Source Secret")),
authTypes:[ {
id:"kubernetes.io/basic-auth",
label:g.getString(f("Basic Authentication"))
}, {
id:"kubernetes.io/ssh-auth",
label:g.getString(f("SSH Key"))
} ]
}
}, h.secretTypes = _.keys(h.secretAuthTypeMap), h.type ? h.newSecret = {
type:h.type,
authType:h.secretAuthTypeMap[h.type].authTypes[0].id,
data:{},
linkSecret:!_.isEmpty(h.serviceAccountToLink),
pickedServiceAccountToLink:h.serviceAccountToLink || ""
} :h.newSecret = {
type:"source",
authType:"kubernetes.io/basic-auth",
data:{},
linkSecret:!1,
pickedServiceAccountToLink:""
}, h.add = {
gitconfig:!1,
cacert:!1
}, b.canI("serviceaccounts", "list") && b.canI("serviceaccounts", "update") && c.list("serviceaccounts", h, function(a) {
h.serviceAccounts = a.by("metadata.name"), h.serviceAccountsNames = _.keys(h.serviceAccounts);
});
var i = function(a, b) {
var c = {
apiVersion:"v1",
kind:"Secret",
metadata:{
name:h.newSecret.data.secretName
},
type:b,
data:{}
};
switch (b) {
case "kubernetes.io/basic-auth":
a.passwordToken ? c.data = {
password:window.btoa(a.passwordToken)
} :c.type = "Opaque", a.username && (c.data.username = window.btoa(a.username)), a.gitconfig && (c.data[".gitconfig"] = window.btoa(a.gitconfig)), a.cacert && (c.data["ca.crt"] = window.btoa(a.cacert));
break;

case "kubernetes.io/ssh-auth":
c.data = {
"ssh-privatekey":window.btoa(a.privateKey)
}, a.gitconfig && (c.data[".gitconfig"] = window.btoa(a.gitconfig));
break;

case "kubernetes.io/dockerconfigjson":
var d = window.btoa(a.dockerConfig);
JSON.parse(a.dockerConfig).auths ? c.data[".dockerconfigjson"] = d :(c.type = "kubernetes.io/dockercfg", c.data[".dockercfg"] = d);
break;

case "kubernetes.io/dockercfg":
var e = window.btoa(a.dockerUsername + ":" + a.dockerPassword), f = {};
f[a.dockerServer] = {
username:a.dockerUsername,
password:a.dockerPassword,
email:a.dockerMail,
auth:e
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
name:b.metadata.name
});
break;

case "image":
e.imagePullSecrets.push({
name:b.metadata.name
});
}
c.update("serviceaccounts", h.newSecret.pickedServiceAccountToLink, e, h).then(function(a) {
d.addNotification({
type:"success",
message:"Secret " + b.metadata.name + " was created and linked with service account " + a.metadata.name + "."
}), h.onCreate({
newSecret:b
});
}, function(c) {
d.addNotification({
type:"success",
message:"Secret " + b.metadata.name + " was created."
}), h.serviceAccountToLink || d.addNotification({
id:"secret-sa-link-error",
type:"error",
message:"An error occurred while linking the secret with service account " + h.newSecret.pickedServiceAccountToLink + ".",
details:a("getErrorDetails")(c)
}), h.onCreate({
newSecret:b
});
});
}, l = _.debounce(function() {
try {
JSON.parse(h.newSecret.data.dockerConfig), h.invalidConfigFormat = !1;
} catch (a) {
h.invalidConfigFormat = !0;
}
}, 300, {
leading:!0
});
h.aceChanged = l, h.nameChanged = function() {
h.nameTaken = !1;
}, h.create = function() {
j();
var e = i(h.newSecret.data, h.newSecret.authType);
c.create("secrets", null, e, h).then(function(a) {
h.newSecret.linkSecret && h.serviceAccountsNames.contains(h.newSecret.pickedServiceAccountToLink) && b.canI("serviceaccounts", "update") ? k(a) :(d.addNotification({
type:"success",
message:"Secret " + e.metadata.name + " was created."
}), h.onCreate({
newSecret:a
}));
}, function(b) {
var c = b.data || {};
return "AlreadyExists" === c.reason ? void (h.nameTaken = !0) :void d.addNotification({
id:"create-secret-error",
type:"error",
message:"An error occurred while creating the secret.",
details:a("getErrorDetails")(b)
});
});
}, h.cancel = function() {
j(), h.onCancel();
};
}
};
} ]), angular.module("openshiftConsole").directive("timeOnlyDurationUntilNow", function() {
return {
restrict:"E",
scope:{
timestamp:"=",
omitSingle:"=?",
precision:"=?"
},
template:'<span data-timestamp="{{timestamp}}" data-time-only="true" class="duration">{{timestamp | timeOnlyDurationFromTimestamps : null}}</span>'
};
}).directive("durationUntilNow", function() {
return {
restrict:"E",
scope:{
timestamp:"=",
omitSingle:"=?",
precision:"=?"
},
template:'<span data-timestamp="{{timestamp}}" data-omit-single="{{omitSingle}}" data-precision="{{precision}}" class="duration">{{timestamp | duration : null : omitSingle : precision}}</span>'
};
}), angular.module("openshiftConsole").directive("deleteLink", [ "$uibModal", "$location", "$filter", "$q", "hashSizeFilter", "APIService", "DataService", "Navigate", "NotificationsService", "Logger", function(a, b, c, d, e, f, g, h, i, j) {
return {
restrict:"E",
scope:{
kind:"@",
group:"@?",
typeDisplayName:"@?",
resourceName:"@",
projectName:"@",
alerts:"=",
displayName:"@",
disableDelete:"=?",
typeNameToConfirm:"=?",
label:"@?",
buttonOnly:"@",
stayOnCurrentPage:"=?",
hpaList:"=?",
success:"=?",
redirectUrl:"@?"
},
templateUrl:function(a, b) {
return angular.isDefined(b.buttonOnly) ? "views/directives/delete-button.html" :"views/directives/delete-link.html";
},
replace:!0,
link:function(d, e, k) {
"Project" === k.kind && (d.isProject = !0), d.options = {
deleteHPAs:!0,
deleteImmediately:!1
};
var l = function(a) {
d.stayOnCurrentPage ? d.alerts[a.name] = a.data :i.addNotification(a.data);
}, m = function(a) {
return g["delete"]({
resource:"horizontalpodautoscalers",
group:"autoscaling"
}, a.metadata.name, {
namespace:d.projectName
}).then(function() {
i.addNotification({
type:"success",
message:"Horizontal pod autoscaler " + a.metadata.name + " was marked for deletion."
});
})["catch"](function(b) {
l({
name:a.metadata.name,
data:{
type:"error",
message:"Horizontal pod autoscaler " + a.metadata.name + " could not be deleted."
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
animation:!0,
templateUrl:"views/modals/delete-resource.html",
controller:"DeleteModalController",
scope:d
});
b.result.then(function() {
var a = d.kind, b = d.resourceName, e = d.typeDisplayName || c("humanizeKind")(a), h = e + " '" + (d.displayName ? d.displayName :b) + "'", k = "Project" === d.kind ? {} :{
namespace:d.projectName
}, l = {};
d.options.deleteImmediately && (l.gracePeriodSeconds = 0, l.propagationPolicy = null), "servicecatalog.k8s.io" === d.group && (l.propagationPolicy = null), g["delete"]({
resource:f.kindToResource(a),
group:d.group
}, b, k, l).then(function() {
i.addNotification({
type:"success",
message:_.capitalize(h) + " was marked for deletion."
}), d.success && d.success(), d.options.deleteHPAs && _.each(d.hpaList, m), n();
})["catch"](function(a) {
d.alerts[b] = {
type:"error",
message:_.capitalize(h) + "' could not be deleted.",
details:c("getErrorDetails")(a)
}, j.error(h + " could not be deleted.", a);
});
});
}
};
}
};
} ]), angular.module("openshiftConsole").directive("editWebhookTriggers", function() {
return {
restrict:"E",
scope:{
type:"@",
typeInfo:"@",
triggers:"=",
bcName:"=",
projectName:"=",
form:"="
},
templateUrl:"views/directives/edit-webhook-triggers.html"
};
}), angular.module("openshiftConsole").directive("editConfigMap", [ "DNS1123_SUBDOMAIN_VALIDATION", function(a) {
return {
require:"^form",
restrict:"E",
scope:{
configMap:"=model",
showNameInput:"="
},
templateUrl:"views/directives/edit-config-map.html",
link:function(b, c, d, e) {
b.form = e, b.nameValidation = a, b.addItem = function() {
b.data.push({
key:"",
value:""
}), b.form.$setDirty();
}, b.removeItem = function(a) {
b.data.splice(a, 1), b.form.$setDirty();
}, b.getKeys = function() {
return _.map(b.data, "key");
};
var f = b.$watch("configMap.data", function(a) {
a && (b.data = _.map(a, function(a, b) {
return {
key:b,
value:a
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
} ]), angular.module("openshiftConsole").directive("events", [ "$routeParams", "$filter", "DataService", "KeywordService", "ProjectsService", "Logger", "gettext", "gettextCatalog", function(a, b, c, d, e, f, g, h) {
return {
restrict:"E",
scope:{
apiObjects:"=?",
projectContext:"="
},
templateUrl:"views/directives/events.html",
controller:[ "$scope", function(a) {
var b, e = {}, i = [];
a.filter = {
text:""
};
var j = function(a) {
return _.isEmpty(e) ? a :_.filter(a, function(a) {
return e[a.involvedObject.uid];
});
}, k = [], l = _.get(a, "sortConfig.currentField.id"), m = {
lastTimestamp:!0
}, n = function() {
var b = _.get(a, "sortConfig.currentField.id", "lastTimestamp");
l !== b && (l = b, a.sortConfig.isAscending = !m[l]);
var c = a.sortConfig.isAscending ? "asc" :"desc";
k = _.sortByOrder(a.events, [ b ], [ c ]);
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
maxWait:250
}));
var s = function() {
n(), r();
}, t = _.debounce(function() {
b && a.$evalAsync(function() {
a.events = j(b), s();
});
}, 250, {
leading:!0,
trailing:!0,
maxWait:1e3
});
a.$watch("apiObjects", function(c) {
e = {}, _.each(c, function(a) {
var b = _.get(a, "metadata.uid");
b && (e[a.metadata.uid] = !0);
}), a.showKindAndName = 1 !== _.size(e), b && t();
}), a.$watch("showKindAndName", function(b) {
a.sortConfig = {
fields:[ {
id:"lastTimestamp",
title:h.getString(g("Time")),
sortType:"alpha"
}, {
id:"type",
title:h.getString(g("Severity")),
sortType:"alpha"
}, {
id:"reason",
title:h.getString(g("Reason")),
sortType:"alpha"
}, {
id:"message",
title:h.getString(g("Message")),
sortType:"alpha"
}, {
id:"count",
title:h.getString(g("Count")),
sortType:"numeric"
} ],
isAscending:!0,
onSortChange:s
}, b && a.sortConfig.fields.splice(1, 0, {
id:"involvedObject.name",
title:h.getString(g("Name")),
sortType:"alpha"
}, {
id:"involvedObject.kind",
title:h.getString(g("Kind")),
sortType:"alpha"
});
}), i.push(c.watch("events", a.projectContext, function(c) {
b = c.by("metadata.name"), t(), f.log("events (subscribe)", a.filteredEvents);
})), a.$on("$destroy", function() {
c.unwatchAll(i);
});
} ]
};
} ]), angular.module("openshiftConsole").directive("eventsSidebar", [ "DataService", "Logger", "$rootScope", function(a, b, c) {
return {
restrict:"E",
scope:{
projectContext:"=",
collapsed:"="
},
templateUrl:"views/directives/events-sidebar.html",
controller:[ "$scope", function(d) {
var e = [];
e.push(a.watch("events", d.projectContext, function(a) {
var c = a.by("metadata.name");
d.events = _.sortByOrder(c, [ "lastTimestamp" ], [ "desc" ]), d.warningCount = _.size(_.filter(c, {
type:"Warning"
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
restrict:"E",
scope:{
projectContext:"=",
sidebarCollapsed:"="
},
templateUrl:"views/directives/events-badge.html",
controller:[ "$scope", function(d) {
var e = [], f = a("orderObjectsByDate");
e.push(b.watch("events", d.projectContext, function(a) {
var b = a.by("metadata.name");
d.events = f(b, !0), d.warningCount = _.size(_.filter(b, {
type:"Warning"
})), d.normalCount = _.size(_.filter(b, {
type:"Normal"
})), c.log("events (subscribe)", d.events);
})), d.expandSidebar = function() {
d.sidebarCollapsed = !1;
}, d.$on("$destroy", function() {
b.unwatchAll(e);
});
} ]
};
} ]), angular.module("openshiftConsole").directive("fromFile", [ "$filter", "$location", "$q", "$uibModal", "APIService", "CachedTemplateService", "DataService", "Navigate", "NotificationsService", "QuotaService", "SecurityCheckService", "TaskList", "gettext", "gettextCatalog", function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
return {
restrict:"E",
scope:{
context:"=",
project:"=",
isDialog:"="
},
templateUrl:"views/directives/from-file.html",
controller:[ "$scope", function(o) {
function p(a) {
return !!a.kind || (o.error = {
message:"Resource is missing kind field."
}, !1);
}
function q(a) {
return !!o.isList || (a.metadata ? a.metadata.name ? !a.metadata.namespace || a.metadata.namespace === o.project.metadata.name || (o.error = {
message:a.kind + " " + a.metadata.name + " can't be created in project " + a.metadata.namespace + ". Can't create resource in different projects."
}, !1) :(o.error = {
message:"Resource name is missing in metadata field."
}, !1) :(o.error = {
message:"Resource is missing metadata field."
}, !1));
}
function r() {
var a = d.open({
animation:!0,
templateUrl:"views/modals/process-or-save-template.html",
controller:"ProcessOrSaveTemplateModalController",
scope:o
});
a.result.then(function() {
o.templateOptions.add ? t() :(f.setTemplate(o.resourceList[0]), u());
});
}
function s() {
var a = d.open({
animation:!0,
templateUrl:"views/modals/confirm-replace.html",
controller:"ConfirmReplaceModalController",
scope:o
});
a.result.then(function() {
j.getLatestQuotaAlerts(o.createResources, o.context).then(H);
});
}
function t() {
var a = o.createResources.length, b = o.updateResources.length;
if (o.resourceKind.endsWith("List")) {
var d = [];
b > 0 && d.push(y()), a > 0 && d.push(x()), c.all(d).then(u);
} else w();
}
function u() {
var a, c;
G(), "Template" === o.resourceKind && o.templateOptions.process && !o.errorOccured ? o.isDialog ? o.$emit("fileImportedFromYAMLOrJSON", {
project:o.project,
template:D
}) :(c = o.templateOptions.add || o.updateResources.length > 0 ? o.project.metadata.name :"", a = h.createFromTemplateURL(D, o.project.metadata.name, {
namespace:c
}), b.url(a)) :o.isDialog ? o.$emit("fileImportedFromYAMLOrJSON", {
project:o.project
}) :(a = h.projectOverviewURL(o.project.metadata.name), b.url(a));
}
function v(a) {
var b = e.objectToResourceGroupVersion(a);
return b ? e.apiInfo(b) ? g.get(b, a.metadata.name, o.context, {
errorNotification:!1
}).then(function(b) {
var c = angular.copy(a), d = angular.copy(b.metadata);
d.annotations = a.metadata.annotations, d.labels = a.metadata.labels, c.metadata = d, o.updateResources.push(c);
}, function() {
o.createResources.push(a);
}) :(o.errorOccured = !0, void (o.error = {
message:e.unsupportedObjectKindOrVersion(a)
})) :(o.errorOccured = !0, void (o.error = {
message:e.invalidObjectKindOrVersion(a)
}));
}
function w() {
var b;
_.isEmpty(o.createResources) ? (b = _.head(o.updateResources), g.update(e.kindToResource(b.kind), b.metadata.name, b, {
namespace:o.project.metadata.name
}).then(function() {
var a = A(b.kind);
i.addNotification({
type:"success",
message:_.capitalize(a) + " " + b.metadata.name + " was successfully updated."
}), u();
}, function(c) {
i.addNotification({
id:"from-file-error",
type:"error",
message:"Unable to update the " + A(b.kind) + " '" + b.metadata.name + "'.",
details:a("getErrorDetails")(c)
});
})) :(b = _.head(o.createResources), g.create(e.kindToResource(b.kind), null, b, {
namespace:o.project.metadata.name
}).then(function() {
var a = A(b.kind);
i.addNotification({
type:"success",
message:_.capitalize(a) + " " + b.metadata.name + " was successfully created."
}), u();
}, function(c) {
i.addNotification({
id:"from-file-error",
type:"error",
message:"Unable to create the " + A(b.kind) + " '" + b.metadata.name + "'.",
details:a("getErrorDetails")(c)
});
}));
}
function x() {
var a = {
started:n.getString(m("Creating resources in project ")) + I(o.project),
success:n.getString(m("Creating resources in project ")) + I(o.project),
failure:n.getString(m("Failed to create some resources in project ")) + I(o.project)
}, b = {};
l.add(a, b, o.project.metadata.name, function() {
var a = c.defer();
return g.batch(o.createResources, o.context, "create").then(function(b) {
var c = [], d = !1;
if (b.failure.length > 0) d = !0, o.errorOccured = !0, b.failure.forEach(function(a) {
c.push({
type:"error",
message:"Cannot create " + A(a.object.kind) + ' "' + a.object.metadata.name + '". ',
details:a.data.message
});
}), b.success.forEach(function(a) {
c.push({
type:"success",
message:"Created " + A(a.kind) + ' "' + a.metadata.name + '" successfully. '
});
}); else {
var e;
e = o.isList ? "All items in list were created successfully." :A(o.resourceKind) + " " + o.resourceName + " was successfully created.", c.push({
type:"success",
message:e
});
}
a.resolve({
alerts:c,
hasErrors:d
});
}), a.promise;
});
}
function y() {
var a = {
started:n.getString(m("Updating resources in project ")) + I(o.project),
success:n.getString(m("Updated resources in project ")) + I(o.project),
failure:n.getString(m("Failed to update some resources in project ")) + I(o.project)
}, b = {};
l.add(a, b, o.project.metadata.name, function() {
var a = c.defer();
return g.batch(o.updateResources, o.context, "update").then(function(b) {
var c = [], d = !1;
if (b.failure.length > 0) d = !0, o.errorOccured = !0, b.failure.forEach(function(a) {
c.push({
type:"error",
message:"Cannot update " + A(a.object.kind) + ' "' + a.object.metadata.name + '". ',
details:a.data.message
});
}), b.success.forEach(function(a) {
c.push({
type:"success",
message:"Updated " + A(a.kind) + ' "' + a.metadata.name + '" successfully. '
});
}); else {
var e;
e = o.isList ? "All items in list were updated successfully." :A(o.resourceKind) + " " + o.resourceName + " was successfully updated.", c.push({
type:"success",
message:e
});
}
a.resolve({
alerts:c,
hasErrors:d
});
}, function(b) {
var c = [];
c.push({
type:"error",
message:"An error occurred updating the resources.",
details:"Status: " + b.status + ". " + b.data
}), a.resolve({
alerts:c
});
}), a.promise;
});
}
var z, A = a("humanizeKind");
l.clear(), o.aceLoaded = function(a) {
z = a.getSession(), z.setOption("tabSize", 2), z.setOption("useSoftTabs", !0), a.setDragDelay = 0, a.$blockScrolling = 1 / 0;
};
var B = function() {
var a = z.getAnnotations();
o.editorErrorAnnotation = _.some(a, {
type:"error"
});
}, C = _.debounce(function() {
try {
JSON.parse(o.editorContent), z.setMode("ace/mode/json");
} catch (a) {
try {
jsyaml.safeLoad(o.editorContent), z.setMode("ace/mode/yaml");
} catch (a) {}
}
o.$apply(B);
}, 300);
o.aceChanged = C;
var D, E = function(a) {
var b = d.open({
animation:!0,
templateUrl:"views/modals/confirm.html",
controller:"ConfirmModalController",
resolve:{
modalConfig:function() {
return {
alerts:a,
message:n.getString(m("We checked your application for potential problems. Please confirm you still want to create this application.")),
okButtonText:n.getString(m("Create Anyway")),
okButtonClass:"btn-danger",
cancelButtonText:n.getString(m("Cancel"))
};
}
}
});
b.result.then(t);
}, F = {}, G = function() {
i.hideNotification("from-file-error"), _.each(F, function(a) {
!a.id || "error" !== a.type && "warning" !== a.type || i.hideNotification(a.id);
});
}, H = function(a) {
G(), F = k.getSecurityAlerts(o.createResources, o.project.metadata.name);
var b = a.quotaAlerts || [];
F = F.concat(b);
var c = _.filter(F, {
type:"error"
});
c.length ? (_.each(F, function(a) {
a.id = _.uniqueId("from-file-alert-"), i.addNotification(a);
}), o.disableInputs = !1) :F.length ? (E(F), o.disableInputs = !1) :t();
};
o.create = function() {
delete o.error;
try {
D = JSON.parse(o.editorContent);
} catch (a) {
try {
D = jsyaml.safeLoad(o.editorContent);
} catch (a) {
return void (o.error = a);
}
}
if (p(D) && (o.resourceKind = D.kind, o.resourceKind.endsWith("List") ? o.isList = !0 :o.isList = !1, q(D))) {
o.isList ? (o.resourceList = D.items, o.resourceName = "") :(o.resourceList = [ D ], o.resourceName = D.metadata.name, "Template" === o.resourceKind && (o.templateOptions = {
process:!0,
add:!1
})), o.updateResources = [], o.createResources = [];
var b = [];
o.errorOccured = !1, _.forEach(o.resourceList, function(a) {
return q(a) ? void b.push(v(a)) :(o.errorOccured = !0, !1);
}), c.all(b).then(function() {
o.errorOccured || (1 === o.createResources.length && "Template" === o.resourceList[0].kind ? r() :_.isEmpty(o.updateResources) ? j.getLatestQuotaAlerts(o.createResources, o.context).then(H) :(o.updateTemplate = 1 === o.updateResources.length && "Template" === o.updateResources[0].kind, o.updateTemplate ? r() :s()));
});
}
}, o.cancel = function() {
G(), h.toProjectOverview(o.project.metadata.name);
};
var I = a("displayName");
o.$on("importFileFromYAMLOrJSON", o.create), o.$on("$destroy", G);
} ]
};
} ]), angular.module("openshiftConsole").directive("oscFileInput", [ "Logger", function(a) {
return {
restrict:"E",
scope:{
model:"=",
required:"=",
disabled:"=ngDisabled",
showTextArea:"=",
helpText:"@?",
dropZoneId:"@?"
},
templateUrl:"views/directives/osc-file-input.html",
link:function(b, c) {
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
height:e + 6,
width:d + 6,
top:c.top,
left:c.left,
position:"fixed",
"z-index":100
});
};
a.on("putDropZoneFront", function(a, e) {
if (!b.disabled) {
var f, g = c.find(".drag-and-drop-zone");
return e ? (f = b.dropZoneId ? $("#" + b.dropZoneId) :c, d(g, f)) :g.css("z-index", "-1"), !1;
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
restrict:"E",
transclude:!0,
scope:{
header:"@",
about:"@",
aboutTitle:"@",
editText:"@",
expand:"=?",
canToggle:"=?"
},
templateUrl:"views/directives/osc-form-section.html",
link:function(a, b, c) {
c.editText || (c.editText = "Edit"), angular.isDefined(c.canToggle) || (a.canToggle = !0), a.toggle = function() {
a.expand = !a.expand;
};
}
};
}), angular.module("openshiftConsole").directive("oscGitLink", [ "$filter", function(a) {
return {
restrict:"E",
scope:{
uri:"=",
ref:"=",
contextDir:"="
},
transclude:!0,
link:function(b) {
var c = a("isAbsoluteURL"), d = a("githubLink");
b.$watchGroup([ "uri", "ref", "contextDir" ], function() {
b.gitLink = d(b.uri, b.ref, b.contextDir), b.isLink = c(b.gitLink);
});
},
template:'<a ng-if="isLink" ng-href="{{gitLink}}" ng-transclude target="_blank"></a><span ng-if="!isLink" ng-transclude></span>'
};
} ]), angular.module("openshiftConsole").directive("oscImageSummary", function() {
return {
restrict:"E",
scope:{
resource:"=",
name:"=",
tag:"="
},
templateUrl:"views/directives/osc-image-summary.html"
};
}), angular.module("openshiftConsole").directive("oscRouting", [ "Constants", "DNS1123_SUBDOMAIN_VALIDATION", "gettext", "gettextCatalog", function(a, b, c, d) {
return {
require:"^form",
restrict:"E",
scope:{
route:"=model",
services:"=",
showNameInput:"=",
routingDisabled:"=",
hostReadOnly:"="
},
templateUrl:"views/directives/osc-routing.html",
link:function(e, f, g, h) {
e.form = h, e.controls = {}, e.options = {
secureRoute:!1,
alternateServices:!1
}, e.disableWildcards = a.DISABLE_WILDCARD_ROUTES, e.disableCertificateInputs = function() {
var a = _.get(e, "route.tls.termination");
return !a || "passthrough" === a;
}, e.insecureTrafficOptions = [ {
value:"",
label:d.getString(c("None"))
}, {
value:"Allow",
label:d.getString(c("Allow"))
}, {
value:"Redirect",
label:d.getString(c("Redirect"))
} ], _.has(e, "route.tls.insecureEdgeTerminationPolicy") || _.set(e, "route.tls.insecureEdgeTerminationPolicy", "");
var i = function() {
var a = "passthrough" !== _.get(e, "route.tls.termination") || "Allow" !== _.get(e, "route.tls.insecureEdgeTerminationPolicy");
e.routeForm.insecureTraffic.$setValidity("passthrough", a);
};
e.$watchGroup([ "route.tls.termination", "route.tls.insecureEdgeTerminationPolicy" ], i), e.nameValidation = b, e.disableWildcards ? e.hostnamePattern = b.pattern :e.hostnamePattern = /^(\*(\.[a-z0-9]([-a-z0-9]*[a-z0-9]))+|[a-z0-9]([-a-z0-9]*[a-z0-9])?(\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*)$/, e.hostnameMaxLength = b.maxlength;
var j = function(a) {
if (a) {
var b = _.get(a, "spec.ports", []);
e.unnamedServicePort = 1 === b.length && !b[0].name, b.length && !e.unnamedServicePort ? e.route.portOptions = _.map(b, function(a) {
return {
port:a.name,
label:a.port + " → " + a.targetPort + " (" + a.protocol + ")"
};
}) :e.route.portOptions = [];
}
};
e.services && !e.route.service && (e.route.service = _.find(e.services)), e.servicesByName, e.services ? e.servicesByName = _.indexBy(e.services, "metadata.name") :e.servicesByName = {}, e.$watch("route.to.name", function(a, b) {
j(e.servicesByName[a]), a === b && e.route.targetPort || (e.route.targetPort = _.get(e, "route.portOptions[0].port")), e.services && (e.alternateServiceOptions = _.reject(e.services, function(b) {
return a === b.metadata.name;
}));
}), e.$watch("route.alternateServices", function(a) {
e.duplicateServices = _(a).map("name").filter(function(a, b, c) {
return _.includes(c, a, b + 1);
}).value(), h.$setValidity("duplicateServices", !e.duplicateServices.length), e.options.alternateServices = !_.isEmpty(a);
}, !0);
var k = function() {
return !!e.route.tls && ((!e.route.tls.termination || "passthrough" === e.route.tls.termination) && (e.route.tls.certificate || e.route.tls.key || e.route.tls.caCertificate || e.route.tls.destinationCACertificate));
};
e.$watch("route.tls.termination", function() {
e.options.secureRoute = !!_.get(e, "route.tls.termination"), e.showCertificatesNotUsedWarning = k();
});
var l;
e.$watch("options.secureRoute", function(a, b) {
if (a !== b) {
var c = _.get(e, "route.tls.termination");
!e.securetRoute && c && (l = c, delete e.route.tls.termination), e.options.secureRoute && !c && _.set(e, "route.tls.termination", l || "edge");
}
}), e.$watch("options.alternateServices", function(a, b) {
a !== b && (a || (e.route.alternateServices = []), a && _.isEmpty(e.route.alternateServices) && e.addAlternateService());
}), e.addAlternateService = function() {
e.route.alternateServices = e.route.alternateServices || [];
var a = _.find(e.services, function(a) {
return a.metadata.name !== e.route.to.service && !_.some(e.route.alternateServices, {
service:a.metadata.name
});
});
_.has(e, "route.to.weight") || _.set(e, "route.to.weight", 1), e.route.alternateServices.push({
service:a.metadata.name,
weight:1
});
}, e.weightAsPercentage = function(a, b) {
a = a || 0;
var c = _.get(e, "route.to.weight", 0);
if (_.each(e.route.alternateServices, function(a) {
c += _.get(a, "weight", 0);
}), !c) return "";
var d = a / c * 100;
return b ? d3.round(d, 1) + "%" :d;
};
var m = !1;
e.$watch("route.alternateServices.length", function(a) {
if (0 === a && _.has(e, "route.to.weight") && delete e.route.to.weight, 1 === a) {
if (0 === e.route.to.weight && 0 === e.route.alternateServices[0].weight) return void (e.controls.hideSlider = !0);
m = !0, e.controls.rangeSlider = e.weightAsPercentage(e.route.to.weight);
}
}), e.$watch("controls.rangeSlider", function(a, b) {
return m ? void (m = !1) :void (a !== b && (a = parseInt(a, 10), _.set(e, "route.to.weight", a), _.set(e, "route.alternateServices[0].weight", 100 - a)));
});
}
};
} ]).directive("oscRoutingService", function() {
return {
restrict:"E",
scope:{
model:"=",
serviceOptions:"=",
allServices:"=",
isAlternate:"=?",
showWeight:"=?",
warnUnnamedPort:"=?"
},
templateUrl:"views/directives/osc-routing-service.html",
link:function(a, b, c, d) {
a.form = d, a.id = _.uniqueId("osc-routing-service-"), a.$watchGroup([ "model.name", "serviceOptions" ], function() {
if (_.isEmpty(a.serviceOptions)) return void (a.optionsNames = []);
var b = _.get(a, "model.name");
a.optionNames = [], a.selectedExists = !1, a.optionNames = _.map(a.serviceOptions, "metadata.name"), b && !a.allServices[b] && a.optionNames.push(b), b || _.set(a, "model.name", _.first(a.optionNames));
});
}
};
}), angular.module("openshiftConsole").directive("oscPersistentVolumeClaim", [ "$filter", "DataService", "LimitRangesService", "QuotaService", "ModalsService", "gettextCatalog", "gettext", "DNS1123_SUBDOMAIN_VALIDATION", function(a, b, c, d, e, f, g, h) {
return {
restrict:"E",
scope:{
claim:"=model",
projectName:"="
},
templateUrl:"views/directives/osc-persistent-volume-claim.html",
link:function(i) {
var j = a("amountAndUnit"), k = a("usageValue");
i.nameValidation = h, i.storageClasses = [], i.defaultStorageClass = "", i.claim.unit = "Gi", i.units = [ {
value:"Mi",
label:"MiB"
}, {
value:"Gi",
label:"GiB"
}, {
value:"Ti",
label:"TiB"
} ], i.claim.selectedLabels = [], i.groupUnits = function(a) {
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
var l = function() {
var a = i.claim.amount && k(i.claim.amount + i.claim.unit), b = _.has(i, "limits.min") && k(i.limits.min), c = _.has(i, "limits.max") && k(i.limits.max), d = !0, e = !0;
a && b && (d = a >= b), a && c && (e = a <= c), i.persistentVolumeClaimForm.capacity.$setValidity("limitRangeMin", d), i.persistentVolumeClaimForm.capacity.$setValidity("limitRangeMax", e);
}, m = function() {
var a = d.isAnyStorageQuotaExceeded(i.quotas, i.clusterQuotas), b = d.willRequestExceedQuota(i.quotas, i.clusterQuotas, "requests.storage", i.claim.amount + i.claim.unit);
i.persistentVolumeClaimForm.capacity.$setValidity("willExceedStorage", !b), i.persistentVolumeClaimForm.capacity.$setValidity("outOfClaims", !a);
};
b.list({
group:"storage.k8s.io",
resource:"storageclasses"
}, {}, function(b) {
var c = b.by("metadata.name");
if (!_.isEmpty(c)) {
i.storageClasses = _.sortBy(c, "metadata.name");
var d = a("annotation");
if (i.defaultStorageClass = _.find(i.storageClasses, function(a) {
return "true" === d(a, "storageclass.beta.kubernetes.io/is-default-class");
}), i.defaultStorageClass) i.claim.storageClass = i.defaultStorageClass; else {
var e = {
metadata:{
name:"No Storage Class",
labels:{},
annotations:{
description:"No storage class will be assigned"
}
}
};
i.storageClasses.unshift(e);
}
}
}, {
errorNotification:!1
}), b.list("limitranges", {
namespace:i.projectName
}, function(a) {
var b = a.by("metadata.name");
if (!_.isEmpty(b)) {
i.limits = c.getEffectiveLimitRange(b, "storage", "PersistentVolumeClaim");
var d;
if (i.limits.min && i.limits.max) {
var e = k(i.limits.min), f = k(i.limits.max);
e === f && (d = j(i.limits.max), i.claim.amount = Number(d[0]), i.claim.unit = d[1], i.capacityReadOnly = !0);
}
i.$watchGroup([ "claim.amount", "claim.unit" ], l);
}
}), b.list("resourcequotas", {
namespace:i.projectName
}, function(a) {
i.quotas = a.by("metadata.name"), i.$watchGroup([ "claim.amount", "claim.unit" ], m);
}), b.list("appliedclusterresourcequotas", {
namespace:i.projectName
}, function(a) {
i.clusterQuotas = a.by("metadata.name");
});
}
};
} ]), angular.module("openshiftConsole").directive("oscAutoscaling", [ "HPAService", "LimitRangesService", "DNS1123_SUBDOMAIN_VALIDATION", function(a, b, c) {
return {
restrict:"E",
scope:{
autoscaling:"=model",
project:"=",
showNameInput:"=?",
nameReadOnly:"=?"
},
templateUrl:"views/directives/osc-autoscaling.html",
link:function(d) {
d.nameValidation = c, d.$watch("project", function() {
if (d.project) {
d.isRequestCalculated = b.isRequestCalculated("cpu", d.project);
var c = window.OPENSHIFT_CONSTANTS.DEFAULT_HPA_CPU_TARGET_PERCENT;
d.isRequestCalculated && (c = a.convertLimitPercentToRequest(c, d.project)), _.set(d, "autoscaling.defaultTargetCPU", c), d.defaultTargetCPUDisplayValue = window.OPENSHIFT_CONSTANTS.DEFAULT_HPA_CPU_TARGET_PERCENT;
var e = !1, f = function(b) {
return e ? void (e = !1) :(b && d.isRequestCalculated && (b = a.convertRequestPercentToLimit(b, d.project)), void _.set(d, "targetCPUInput.percent", b));
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
restrict:"E",
scope:{
pickedSecrets:"=model",
secretsByType:"=",
namespace:"=",
displayType:"@",
type:"@",
alerts:"=",
disableInput:"=",
serviceAccountToLink:"@?",
allowMultipleSecrets:"=?"
},
templateUrl:"views/directives/osc-secrets.html",
link:function(b) {
b.canAddSourceSecret = function() {
if (!b.allowMultipleSecrets) return !1;
var a = _.last(b.pickedSecrets);
return !!a && a.name;
}, b.setLastSecretsName = function(a) {
var c = _.last(b.pickedSecrets);
c.name = a;
}, b.addSourceSecret = function() {
b.pickedSecrets.push({
name:""
});
}, b.removeSecret = function(a) {
1 === b.pickedSecrets.length ? b.pickedSecrets = [ {
name:""
} ] :b.pickedSecrets.splice(a, 1), b.secretsForm.$setDirty();
}, b.openCreateSecretModal = function() {
b.newSecret = {};
var e = a.open({
animation:!0,
backdrop:"static",
templateUrl:"views/modals/create-secret.html",
controller:"CreateSecretModalController",
scope:b
});
e.result.then(function(a) {
c.list("secrets", {
namespace:b.namespace
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
restrict:"E",
scope:{
pickedSecrets:"=model",
secretsByType:"=",
strategyType:"=",
type:"@",
displayType:"@",
namespace:"=",
alerts:"=",
serviceAccountToLink:"@?"
},
templateUrl:"views/directives/osc-source-secrets.html",
link:function(b) {
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
secretSource:{
name:""
},
mountPath:""
});

default:
return void b.pickedSecrets.push({
secret:{
name:""
},
destinationDir:""
});
}
}, b.removeSecret = function(a) {
if (1 === b.pickedSecrets.length) switch (b.strategyType) {
case "Custom":
b.pickedSecrets = [ {
secretSource:{
name:""
},
mountPath:""
} ];
break;

default:
b.pickedSecrets = [ {
secret:{
name:""
},
destinationDir:""
} ];
} else b.pickedSecrets.splice(a, 1);
b.secretsForm.$setDirty();
}, b.openCreateSecretModal = function() {
var e = a.open({
animation:!0,
templateUrl:"views/modals/create-secret.html",
controller:"CreateSecretModalController",
scope:b
});
e.result.then(function(a) {
c.list("secrets", {
namespace:b.namespace
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
restrict:"E",
scope:{
status:"=?",
spec:"=",
disableScaling:"=?",
scaleFn:"&?",
deployment:"="
},
templateUrl:"views/directives/replicas.html",
link:function(a) {
a.model = {
editing:!1
}, a.scale = function() {
a.form.scaling.$valid && (a.scaleFn({
replicas:a.model.desired
}), a.model.editing = !1);
}, a.cancel = function() {
a.model.editing = !1;
};
}
};
}), angular.module("openshiftConsole").directive("containerStatuses", [ "$filter", function(a) {
return {
restrict:"E",
scope:{
pod:"=",
onDebugTerminal:"=?",
detailed:"=?"
},
templateUrl:"views/_container-statuses.html",
link:function(b) {
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
restrict:"E",
scope:{
podTemplate:"=",
imagesByDockerReference:"=",
builds:"=",
detailed:"=?",
addHealthCheckUrl:"@?"
},
templateUrl:"views/_pod-template.html"
};
}).directive("podTemplateContainer", function() {
return {
restrict:"E",
scope:{
container:"=podTemplateContainer",
imagesByDockerReference:"=",
builds:"=",
detailed:"=?",
labelPrefix:"@?"
},
templateUrl:"views/_pod-template-container.html"
};
}).directive("annotations", function() {
return {
restrict:"E",
scope:{
annotations:"="
},
templateUrl:"views/directives/annotations.html",
link:function(a) {
a.expandAnnotations = !1, a.toggleAnnotations = function() {
a.expandAnnotations = !a.expandAnnotations;
};
}
};
}).directive("registryAnnotations", function() {
return {
restrict:"E",
priority:1,
terminal:!0,
scope:{
annotations:"="
},
templateUrl:"views/directives/annotations.html",
link:function(a) {
a.expandAnnotations = !1, a.toggleAnnotations = function() {
a.expandAnnotations = !a.expandAnnotations;
};
}
};
}).directive("volumes", function() {
return {
restrict:"E",
scope:{
volumes:"=",
namespace:"=",
canRemove:"=?",
removeFn:"&?"
},
templateUrl:"views/_volumes.html"
};
}).directive("volumeClaimTemplates", function() {
return {
restrict:"E",
scope:{
templates:"="
},
templateUrl:"views/_volume-claim-templates.html"
};
}).directive("hpa", function() {
return {
restrict:"E",
scope:{
hpa:"=",
project:"=",
showScaleTarget:"=?",
alerts:"="
},
templateUrl:"views/directives/hpa.html"
};
}).directive("probe", function() {
return {
restrict:"E",
scope:{
probe:"="
},
templateUrl:"views/directives/_probe.html"
};
}).directive("podsTable", [ "$filter", function(a) {
return {
restrict:"E",
scope:{
pods:"=",
activePods:"=?",
emptyMessage:"=?",
customNameHeader:"=?",
podFailureReasons:"=?"
},
templateUrl:"views/directives/pods-table.html",
link:function(b) {
var c = a("orderObjectsByDate"), d = _.debounce(function(a) {
b.$evalAsync(function() {
b.sortedPods = c(a, !0);
});
}, 150, {
maxWait:500
});
b.$watch("pods", d);
}
};
} ]).directive("trafficTable", function() {
return {
restrict:"E",
scope:{
routes:"=",
services:"=",
portsByRoute:"=",
showNodePorts:"=?",
customNameHeader:"=?"
},
templateUrl:"views/directives/traffic-table.html"
};
}), angular.module("openshiftConsole").directive("sidebar", [ "$location", "$filter", "Constants", function(a, b, c) {
var d = b("canI"), e = function(a, b) {
return a.href === b || _.some(a.prefixes, function(a) {
return _.startsWith(b, a);
});
};
return {
restrict:"E",
templateUrl:"views/_sidebar.html",
controller:[ "$scope", function(f) {
var g = a.path().replace("/project/" + f.projectName, "");
f.activeSecondary, f.navItems = c.PROJECT_NAVIGATION, f.activePrimary = _.find(f.navItems, function(a) {
return e(a, g) ? (f.activeSecondary = null, !0) :_.some(a.secondaryNavSections, function(a) {
var b = _.find(a.items, function(a) {
return e(a, g);
});
return !!b && (f.activeSecondary = b, !0);
});
}), f.navURL = function(a) {
return a ? b("isAbsoluteURL")(a) ? a :"project/" + f.projectName + a :"";
}, f.show = function(a) {
var b = !a.isValid || a.isValid();
if (!b) return !1;
var c = !a.canI || d(a.canI.resource, a.canI.verb, a.canI.group);
return c;
};
} ]
};
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
}).change(function() {
var c = $(this).val(), d = "" === c ? "projects" :e(c);
a.$apply(function() {
b.url(d);
});
}), a.$on("project.settings.update", function(a, b) {
i[b.metadata.name] = b, o();
});
}
};
} ]).directive("projectFilter", [ "LabelFilter", "gettext", "gettextCatalog", function(a, b, c) {
return {
restrict:"E",
templateUrl:"views/directives/_project-filter.html",
link:function(d, e) {
a.setupFilterWidget(e.find(".navbar-filter-widget"), e.find(".active-filters"), {
addButtonText:c.getString(b("Add"))
}), a.toggleFilterWidget(!d.renderOptions || !d.renderOptions.hideFilterWidget), d.$watch("renderOptions", function(b) {
a.toggleFilterWidget(!b || !b.hideFilterWidget);
});
}
};
} ]).directive("projectPage", function() {
return {
restrict:"E",
transclude:!0,
templateUrl:"views/_project-page.html"
};
}).directive("navbarUtility", function() {
return {
restrict:"E",
transclude:!0,
templateUrl:"views/directives/header/_navbar-utility.html",
controller:[ "$scope", "Constants", function(a, b) {
a.launcherApps = b.APP_LAUNCHER_NAVIGATION;
} ]
};
}).directive("navbarUtilityMobile", function() {
return {
restrict:"E",
transclude:!0,
templateUrl:"views/directives/header/_navbar-utility-mobile.html"
};
}).directive("defaultHeader", function() {
return {
restrict:"E",
transclude:!0,
templateUrl:"views/directives/header/default-header.html"
};
}).directive("navPfVerticalAlt", function() {
return {
restrict:"EAC",
link:function() {
$.fn.navigation();
}
};
}).directive("breadcrumbs", function() {
return {
restrict:"E",
scope:{
breadcrumbs:"="
},
templateUrl:"views/directives/breadcrumbs.html"
};
}).directive("back", [ "$window", function(a) {
return {
restrict:"A",
link:function(b, c) {
c.bind("click", function() {
a.history.back();
});
}
};
} ]), angular.module("openshiftConsole").directive("alerts", function() {
return {
restrict:"E",
scope:{
alerts:"=",
filter:"=?",
animateSlide:"=?",
hideCloseButton:"=?",
toast:"=?"
},
templateUrl:"views/_alerts.html",
link:function(a) {
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
restrict:"E",
scope:{
error:"="
},
templateUrl:"views/_parse-error.html",
link:function(a) {
a.$watch("error", function() {
a.hidden = !1;
});
}
};
}), angular.module("openshiftConsole").directive("podWarnings", [ "podWarningsFilter", function(a) {
return {
restrict:"E",
scope:{
pod:"="
},
link:function(b) {
var c, d = "", e = a(b.pod);
for (c = 0; c < _.size(e); c++) d && (d += "<br>"), "error" === e[c].severity && (b.hasError = !0), d += e[c].message;
b.content = d;
},
templateUrl:"views/directives/_warnings-popover.html"
};
} ]).directive("routeWarnings", [ "RoutesService", function(a) {
return {
restrict:"E",
scope:{
route:"=",
services:"="
},
link:function(b) {
var c = function() {
var c = a.getRouteWarnings(b.route, b.services);
b.content = _.map(c, _.escape).join("<br>");
};
b.$watchGroup([ "route", "services" ], c);
},
templateUrl:"views/directives/_warnings-popover.html"
};
} ]), angular.module("openshiftConsole").directive("takeFocus", [ "$timeout", function(a) {
return {
restrict:"A",
link:function(b, c) {
a(function() {
$(c).focus();
}, 300);
}
};
} ]).directive("selectOnFocus", function() {
return {
restrict:"A",
link:function(a, b) {
$(b).focus(function() {
$(this).select();
});
}
};
}).directive("focusWhen", [ "$timeout", function(a) {
return {
restrict:"A",
scope:{
trigger:"@focusWhen"
},
link:function(b, c) {
b.$watch("trigger", function(b) {
b && a(function() {
$(c).focus();
});
});
}
};
} ]).directive("clickToReveal", function() {
return {
restrict:"A",
transclude:!0,
scope:{
linkText:"@"
},
templateUrl:"views/directives/_click-to-reveal.html",
link:function(a, b) {
$(".reveal-contents-link", b).click(function() {
$(this).hide(), $(".reveal-contents", b).show();
});
}
};
}).directive("copyToClipboard", function() {
return {
restrict:"E",
scope:{
clipboardText:"=",
isDisabled:"=?",
displayWide:"=?",
inputText:"=?",
multiline:"=?"
},
templateUrl:"views/directives/_copy-to-clipboard.html",
controller:[ "$scope", function(a) {
a.id = _.uniqueId("clipboardJs");
} ],
link:function(a, b) {
var c = $("a", b), d = c.get(0);
a.inputText && (d = c.get(1));
var e = new Clipboard(d);
e.on("success", function(a) {
$(a.trigger).attr("title", "Copied!").tooltip("fixTitle").tooltip("show").attr("title", "Copy to Clipboard").tooltip("fixTitle"), a.clearSelection();
}), e.on("error", function(a) {
var b = /Mac/i.test(navigator.userAgent) ? "Press ⌘C to copy" :"Press Ctrl-C to copy";
$(a.trigger).attr("title", b).tooltip("fixTitle").tooltip("show").attr("title", "Copy to Clipboard").tooltip("fixTitle");
}), b.on("$destroy", function() {
e.destroy();
});
}
};
}).directive("shortId", function() {
return {
restrict:"E",
scope:{
id:"@"
},
template:'<code class="short-id" title="{{id}}">{{id.substring(0, 6)}}</code>'
};
}).directive("customIcon", function() {
return {
restrict:"E",
scope:{
resource:"=",
kind:"@",
tag:"=?"
},
controller:[ "$scope", "$filter", function(a, b) {
a.$watchGroup([ "resource", "tag" ], function() {
a.tag ? a.icon = b("imageStreamTagAnnotation")(a.resource, "icon", a.tag) :a.icon = b("annotation")(a.resource, "icon"), a.isDataIcon = a.icon && 0 === a.icon.indexOf("data:"), a.isDataIcon || (a.tag ? a.icon = b("imageStreamTagIconClass")(a.resource, a.tag) :a.icon = b("iconClass")(a.resource, a.kind));
});
} ],
templateUrl:"views/directives/_custom-icon.html"
};
}).directive("bottomOfWindow", function() {
return {
restrict:"A",
link:function(a, b) {
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
}).directive("persistTabState", [ "$routeParams", "$location", function(a, b) {
return {
restrict:"A",
scope:!1,
link:function(c) {
c.selectedTab = c.selectedTab || {}, c.$watch(function() {
return a.tab;
}, function(a) {
a && (c.selectedTab[a] = !0);
}), c.$watch("selectedTab", function() {
var a = _.keys(_.pick(c.selectedTab, function(a) {
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
restrict:"E",
scope:{
labels:"=",
clickable:"@?",
kind:"@?",
projectName:"@?",
limit:"=?",
titleKind:"@?",
navigateUrl:"@?",
filterCurrentPage:"=?"
},
templateUrl:"views/directives/labels.html",
link:function(d) {
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
restrict:"E",
scope:{
labels:"=",
systemLabels:"=",
expand:"=?",
canToggle:"=?",
helpText:"@?"
},
templateUrl:"views/directives/label-editor.html",
link:function(a, b, c) {
angular.isDefined(c.canToggle) || (a.canToggle = !0);
},
controller:[ "$scope", function(c) {
var d = {
test:function(c) {
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
validator:{
key:d,
value:d
}
});
} ]
};
}), angular.module("openshiftConsole").directive("editLifecycleHook", function() {
return {
restrict:"E",
scope:{
type:"@",
hookParams:"=model",
availableVolumes:"=",
availableContainers:"=",
availableSecrets:"=",
availableConfigMaps:"=",
namespace:"="
},
templateUrl:"views/directives/edit-lifecycle-hook.html",
controller:[ "$scope", function(a) {
a.view = {
isDisabled:!1
}, a.lifecycleHookFailurePolicyTypes = [ "Abort", "Retry", "Ignore" ], a.istagHook = {}, a.removedHookParams = {}, a.action = {
type:_.has(a.hookParams, "tagImages") ? "tagImages" :"execNewPod"
};
var b = {
command:[],
env:[],
volumes:[],
containerName:a.availableContainers[0] || ""
}, c = {
to:{},
containerName:a.availableContainers[0] || ""
}, d = function(b) {
var c = {};
if (_.isEmpty(b)) c = {
namespace:a.namespace,
imageStream:"",
tagObject:null
}; else {
var d = b.name.split(":");
c = {
namespace:b.namespace || a.namespace,
imageStream:d[0],
tagObject:{
tag:d[1]
}
};
}
return c;
}, e = function() {
"execNewPod" === a.action.type ? (_.has(a.removedHookParams, "execNewPod") ? a.hookParams.execNewPod = a.removedHookParams.execNewPod :a.hookParams.execNewPod = _.get(a, "hookParams.execNewPod", {}), a.hookParams.execNewPod = _.merge(angular.copy(b), a.hookParams.execNewPod)) :(_.has(a.removedHookParams, "tagImages") ? a.hookParams.tagImages = a.removedHookParams.tagImages :a.hookParams.tagImages = _.get(a, "hookParams.tagImages", [ {} ]), a.hookParams.tagImages = [ _.merge(angular.copy(c), a.hookParams.tagImages[0]) ], a.istagHook = d(_.head(a.hookParams.tagImages).to)), a.hookParams.failurePolicy = _.get(a.hookParams, "failurePolicy", "Abort");
};
a.addHook = function() {
return _.isEmpty(a.removedHookParams) ? (a.hookParams = {}, void e()) :void (a.hookParams = a.removedHookParams);
}, a.removeHook = function() {
a.removedHookParams = a.hookParams, delete a.hookParams, a.editForm.$setDirty();
};
var f = function() {
a.hookParams && ("execNewPod" === a.action.type ? (a.hookParams.tagImages && (a.removedHookParams.tagImages = a.hookParams.tagImages, delete a.hookParams.tagImages), e()) :"tagImages" === a.action.type && (a.hookParams.execNewPod && (a.removedHookParams.execNewPod = a.hookParams.execNewPod, delete a.hookParams.execNewPod), e()));
};
a.$watchGroup([ "hookParams", "action.type" ], f), a.valueFromObjects = [], a.$watchGroup([ "availableSecrets", "availableConfigMaps" ], function() {
a.valueFromObjects = (a.availableSecrets || []).concat(a.availableConfigMaps);
}), a.$watch("istagHook.tagObject.tag", function() {
_.has(a.istagHook, [ "tagObject", "tag" ]) && (_.set(a.hookParams, "tagImages[0].to.kind", "ImageStreamTag"), _.set(a.hookParams, "tagImages[0].to.namespace", a.istagHook.namespace), _.set(a.hookParams, "tagImages[0].to.name", a.istagHook.imageStream + ":" + a.istagHook.tagObject.tag));
});
} ]
};
}).directive("lifecycleHook", [ "$filter", function(a) {
return {
restrict:"E",
scope:{
deploymentConfig:"=",
type:"@"
},
templateUrl:"views/directives/lifecycle-hook.html",
link:function(b) {
b.$watch("deploymentConfig", function(c) {
b.strategyParams = a("deploymentStrategyParams")(c);
});
}
};
} ]), angular.module("openshiftConsole").directive("actionChip", function() {
return {
restrict:"E",
scope:{
key:"=?",
value:"=?",
keyHelp:"=?",
valueHelp:"=",
action:"&?",
actionIcon:"=?",
showAction:"=?"
},
templateUrl:"views/directives/action-chip.html"
};
}), angular.module("openshiftConsole").directive("templateOptions", [ "gettext", function(a) {
return {
restrict:"E",
templateUrl:"views/_templateopt.html",
transclude:!0,
scope:{
parameters:"=",
expand:"=?",
canToggle:"=?",
isDialog:"=?"
},
link:function(b, c, d) {
angular.isDefined(d.canToggle) || (b.canToggle = !0), b.isOnlyWhitespace = function(a) {
return /^\s+$/.test(a);
}, b.focus = function(a) {
angular.element("#" + a).focus();
}, b.singleText = a("Collapse to a single line input This may strip any new lines you have entered."), b.multiText = a("Expand to enter multiple lines of content. This is required if you need to include newline characters.");
}
};
} ]), angular.module("openshiftConsole").directive("tasks", function() {
return {
restrict:"E",
templateUrl:"views/_tasks.html"
};
}), angular.module("openshiftConsole").directive("catalog", [ "CatalogService", "Constants", "KeywordService", "Logger", function(a, b, c, d) {
return {
restrict:"E",
scope:{
projectImageStreams:"=",
openshiftImageStreams:"=",
projectTemplates:"=",
openshiftTemplates:"=",
projectName:"=",
parentCategory:"=category"
},
templateUrl:"views/catalog/catalog.html",
link:function(e) {
function f() {
var b = e.keywords = c.generateKeywords(e.filter.keyword);
return _.isEmpty(b) ? (e.filterActive = !1, e.filteredBuildersByCategory = e.buildersByCategory, void (e.filteredTemplatesByCategory = e.templatesByCategory)) :(e.filterActive = !0, e.filteredBuildersByCategory = {}, _.each(e.buildersByCategory, function(c, d) {
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
keyword:""
}, e.$watch("filter.keyword", _.debounce(function() {
e.$apply(function() {
f(), j();
});
}, 200, {
maxWait:1e3,
trailing:!0
}));
var m;
e.$watchGroup([ "openshiftImageStreams", "projectImageStreams" ], h), e.$watchGroup([ "openshiftTemplates", "projectTemplates" ], i);
}
};
} ]), angular.module("openshiftConsole").directive("categoryContent", [ "CatalogService", "Constants", "KeywordService", "Logger", function(a, b, c, d) {
return {
restrict:"E",
scope:{
projectImageStreams:"=",
openshiftImageStreams:"=",
projectTemplates:"=",
openshiftTemplates:"=",
projectName:"=",
category:"="
},
templateUrl:"views/catalog/category-content.html",
link:function(b) {
function e() {
var d = b.keywords = c.generateKeywords(b.filter.keyword);
b.filteredBuilderImages = a.filterImageStreams(k, d), b.filteredTemplates = a.filterTemplates(l, d);
}
function f() {
return b.projectImageStreams && b.openshiftImageStreams ? _.toArray(b.projectImageStreams).concat(_.toArray(b.openshiftImageStreams)) :[];
}
function g() {
var c = a.categorizeImageStreams(f());
k = _.get(c, [ b.category.id ], []), j();
}
function h() {
return b.projectTemplates && b.openshiftTemplates ? _.toArray(b.projectTemplates).concat(_.toArray(b.openshiftTemplates)) :[];
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
keyword:""
}, b.$watch("filter.keyword", e), b.$watchGroup([ "openshiftImageStreams", "projectImageStreams" ], g), b.$watchGroup([ "openshiftTemplates", "projectTemplates" ], i);
}
};
} ]), angular.module("openshiftConsole").directive("catalogImage", [ "$filter", "CatalogService", function(a, b) {
return {
restrict:"E",
replace:!0,
scope:{
image:"=",
imageStream:"=",
project:"@",
isBuilder:"=?",
keywords:"="
},
templateUrl:"views/catalog/_image.html",
link:function(c) {
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
tag:b
}) || _.set(c, "is.tag", _.head(c.tags));
});
}
};
} ]), angular.module("openshiftConsole").directive("catalogTemplate", function() {
return {
restrict:"E",
replace:!0,
scope:{
template:"=",
project:"@",
keywords:"="
},
templateUrl:"views/catalog/_template.html"
};
}), angular.module("openshiftConsole").directive("podMetrics", [ "$filter", "$interval", "$parse", "$timeout", "$q", "$rootScope", "ChartsService", "ConversionService", "MetricsCharts", "MetricsService", "ModalsService", "usageValueFilter", "gettext", function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
return {
restrict:"E",
scope:{
pod:"=",
includedMetrics:"=?",
stackDonut:"=?",
alerts:"=?"
},
templateUrl:"views/directives/pod-metrics.html",
link:function(n) {
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
type:"donut",
columns:[ [ "Used", b.used ], [ "Available", Math.max(b.available, 0) ] ],
colors:{
Used:b.available > 0 ? "#0088ce" :"#ec7a08",
Available:"#d1d1d1"
}
};
D[b.id] ? D[b.id].load(e) :(c = K(a), c.data = e, d(function() {
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
E[g] ? E[g].load(f) :(e = L(a), e.data = f, a.chartDataColors && (e.color = {
pattern:a.chartDataColors
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
metric:b.id,
type:b.type,
bucketDuration:t()
};
return b.data && b.data.length ? (d = _.last(b.data), e.start = d.end) :e.start = c, n.pod ? _.assign(e, {
namespace:n.pod.metadata.namespace,
pod:n.pod,
containerName:a.containerMetric ? n.options.selectedContainer.name :"pod"
}) :null;
}
function v() {
I || (M = 0, _.each(n.metrics, function(a) {
q(a), p(a);
}));
}
function w(a) {
if (!I) {
if (M++, n.noData) return void (n.metricsError = {
status:_.get(a, "status", 0),
details:_.get(a, "data.errorMsg") || _.get(a, "statusText") || "Status code " + _.get(a, "status", 0)
});
if (!(M < 2)) {
var b = "metrics-failed-" + n.uniqueID;
n.alerts[b] = {
type:"error",
message:"An error occurred updating metrics for pod " + _.get(n, "pod.metadata.name", "<unknown>") + ".",
links:[ {
href:"",
label:"Retry",
onClick:function() {
delete n.alerts[b], M = 1, B();
}
} ]
};
}
}
}
function x() {
return window.OPENSHIFT_CONSTANTS.DISABLE_CUSTOM_METRICS ? e.when({}) :j.getCustomMetrics(n.pod).then(function(a) {
angular.forEach(a, function(a) {
var b = a.description || a.name, c = a.unit || "", d = "custom/" + a.id.replace(/.*\/custom\//, "");
n.metrics.push({
label:b,
units:c,
chartPrefix:"custom-" + _.uniqueId("custom-metric-"),
chartType:"spline",
datasets:[ {
id:d,
label:b,
type:a.type,
data:[]
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
return a.data ? void (a.data = _.chain(a.data).takeRight(H).concat(c).value()) :void (a.data = c);
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
id:a.metricID
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
label:"Memory",
units:"MiB",
chartPrefix:"memory-",
convert:h.bytesToMiB,
containerMetric:!0,
datasets:[ {
id:"memory/usage",
label:m("Memory"),
data:[]
} ]
}), _.includes(n.includedMetrics, "cpu") && n.metrics.push({
label:"CPU",
units:"cores",
chartPrefix:"cpu-",
convert:h.millicoresToCores,
usagePrecision:3,
containerMetric:!0,
datasets:[ {
id:"cpu/usage_rate",
label:m("CPU"),
data:[]
} ]
}), _.includes(n.includedMetrics, "network") && n.metrics.push({
label:m("Network"),
units:"KiB/s",
chartPrefix:"network-",
chartType:"spline",
convert:h.bytesToKiB,
datasets:[ {
id:"network/tx_rate",
label:m("Sent"),
data:[]
}, {
id:"network/rx_rate",
label:m("Received"),
data:[]
} ]
}), n.loaded = !1, n.noData = !0, n.showComputeUnitsHelp = function() {
k.showComputeUnitsHelp();
}, j.getMetricsURL().then(function(a) {
n.metricsURL = a;
}), n.options = {
rangeOptions:i.getTimeRangeOptions()
}, n.options.timeRange = _.head(n.options.rangeOptions);
var J = a("upperFirst"), K = function(a) {
var b = "#" + a.chartPrefix + n.uniqueID + "-donut";
return {
bindto:b,
onrendered:function() {
g.updateDonutCenterText(b, a.datasets[0].used, J(a.units) + " Used");
},
donut:{
label:{
show:!1
},
width:10
},
legend:{
show:!1
},
size:{
height:175,
widht:175
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
restrict:"E",
scope:{
pods:"=",
containers:"=",
profile:"@",
alerts:"=?"
},
templateUrl:function(a, b) {
return "compact" === b.profile ? "views/directives/metrics-compact.html" :"views/directives/deployment-metrics.html";
},
link:function(b) {
function c(a) {
return null === a.value || void 0 === a.value;
}
function d(a) {
var b;
b = w ? a.compactDatasetLabel || a.label :"Average Usage";
var d = {}, e = [ "Date" ], f = [ b ], g = [ e, f ], h = function(a) {
var b = "" + a.start;
return d[b] || (d[b] = {
total:0,
count:0
}), d[b];
};
return _.each(A[a.descriptor], function(a) {
_.each(a, function(a) {
var b = h(a);
(!y || y < a.end) && (y = a.end), c(a) || (b.total += a.value, b.count = b.count + 1);
});
}), _.each(d, function(b, c) {
var d;
d = b.count ? b.total / b.count :null, e.push(Number(c)), f.push(a.convert ? a.convert(d) :d);
}), f.length > 1 && (a.lastValue = _.last(f) || 0), g;
}
function f(a, e) {
var f = [], g = {
type:"spline"
};
return b.showAverage ? (_.each(a[e.descriptor], function(a, b) {
r(e.descriptor, b, a);
}), g.type = "area-spline", w && e.compactType && (g.type = e.compactType), g.x = "Date", g.columns = d(e), g) :(_.each(a[e.descriptor], function(a, b) {
r(e.descriptor, b, a);
var d = b + "-dates";
_.set(g, [ "xs", b ], d);
var h = [ d ], i = [ b ];
f.push(h), f.push(i), _.each(A[e.descriptor][b], function(a) {
if (h.push(a.start), (!y || y < a.end) && (y = a.end), c(a)) i.push(a.value); else {
var b = e.convert ? e.convert(a.value) :a.value;
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
w && c.compactCombineWith && (g = c.compactCombineWith, c.lastValue && (D[g].lastValue = (D[g].lastValue || 0) + c.lastValue)), u[g] ? (u[g].load(e), b.showAverage ? u[g].legend.hide() :u[g].legend.show()) :(d = F(c), d.data = e, u[g] = c3.generate(d));
}));
}
function l() {
return w ? "-15mn" :"-" + b.options.timeRange.value + "mn";
}
function m() {
return 60 * b.options.timeRange.value * 1e3;
}
function n() {
return w ? "1mn" :Math.floor(m() / v) + "ms";
}
function o() {
var a = _.find(b.pods, "metadata.namespace");
if (a) {
var c = {
pods:b.pods,
namespace:a.metadata.namespace,
bucketDuration:n()
};
return w || (c.containerName = b.options.selectedContainer.name), y ? c.start = y :c.start = l(), c;
}
}
function p(a) {
if (!x) {
if (E++, b.noData) return void (b.metricsError = {
status:_.get(a, "status", 0),
details:_.get(a, "data.errorMsg") || _.get(a, "statusText") || "Status code " + _.get(a, "status", 0)
});
if (!(E < 2) && b.alerts) {
var c = "metrics-failed-" + b.uniqueID;
b.alerts[c] = {
type:"error",
message:"An error occurred updating metrics.",
links:[ {
href:"",
label:"Retry",
onClick:function() {
delete b.alerts[c], E = 1, s();
}
} ]
};
}
}
}
function q() {
var a = _.isEmpty(b.pods);
return a ? (b.loaded = !0, !1) :!b.metricsError && E < 2;
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
label:"Memory",
units:"MiB",
convert:g.bytesToMiB,
formatUsage:function(a) {
return C(a) && (a /= 1024), h.formatUsage(a);
},
usageUnits:function(a) {
return C(a) ? "GiB" :"MiB";
},
descriptor:"memory/usage",
type:"pod_container",
chartID:"memory-" + b.uniqueID
}, {
label:"CPU",
units:"cores",
convert:g.millicoresToCores,
formatUsage:h.formatUsage,
usageUnits:function() {
return "cores";
},
descriptor:"cpu/usage_rate",
type:"pod_container",
chartID:"cpu-" + b.uniqueID
}, {
label:"Network (Sent)",
units:"KiB/s",
convert:g.bytesToKiB,
formatUsage:h.formatUsage,
usageUnits:function() {
return "KiB/s";
},
descriptor:"network/tx_rate",
type:"pod",
compactLabel:"Network",
compactDatasetLabel:"Sent",
compactType:"spline",
chartID:"network-tx-" + b.uniqueID
}, {
label:"Network (Received)",
units:"KiB/s",
convert:g.bytesToKiB,
formatUsage:h.formatUsage,
usageUnits:function() {
return "KiB/s";
},
descriptor:"network/rx_rate",
type:"pod",
compactCombineWith:"network/tx_rate",
compactDatasetLabel:"Received",
compactType:"spline",
chartID:"network-rx-" + b.uniqueID
} ];
var D = _.indexBy(b.metrics, "descriptor");
b.loaded = !1, b.noData = !0, b.showComputeUnitsHelp = function() {
j.showComputeUnitsHelp();
};
var E = 0;
i.getMetricsURL().then(function(a) {
b.metricsURL = a;
}), b.options = {
rangeOptions:h.getTimeRangeOptions()
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
} ]), angular.module("openshiftConsole").directive("logViewer", [ "$sce", "$timeout", "$window", "$filter", "$q", "AuthService", "APIService", "APIDiscovery", "DataService", "HTMLService", "ModalsService", "logLinks", "BREAKPOINTS", "gettext", "gettextCatalog", function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
var p = $(window), q = $('<tr class="log-line"><td class="log-line-number"></td><td class="log-line-text"></td></tr>').get(0), r = function(a, b) {
var c = q.cloneNode(!0);
c.firstChild.setAttribute("data-line-number", a);
var d = ansi_up.escape_for_html(b), e = ansi_up.ansi_to_html(d), f = j.linkify(e, "_blank", !0);
return c.lastChild.innerHTML = f, c;
};
return {
restrict:"AE",
transclude:!0,
templateUrl:"views/directives/logs/_log-viewer.html",
scope:{
followAffixTop:"=?",
object:"=",
fullLogUrl:"=?",
name:"=",
context:"=",
options:"=?",
fixedHeight:"=?",
chromeless:"=?",
empty:"=?",
run:"=?"
},
controller:[ "$scope", function(b) {
var j, k, q, s, t, u = document.documentElement;
b.logViewerID = _.uniqueId("log-viewer"), b.empty = !0;
var v, w;
"ReplicationController" === b.object.kind ? (v = "deploymentconfigs/log", w = d("annotation")(b.object, "deploymentConfig")) :(v = g.kindToResource(b.object.kind) + "/log", w = b.object.metadata.name);
var x, y = function() {
s = window.innerWidth < m.screenSmMin && !b.fixedHeight ? null :k;
}, z = function() {
b.$apply(function() {
var a = j.getBoundingClientRect();
b.fixedHeight ? b.showScrollLinks = a && a.height > b.fixedHeight :b.showScrollLinks = a && (a.top < 0 || a.bottom > u.clientHeight);
});
}, A = !1, B = function() {
A ? A = !1 :b.$evalAsync(function() {
b.autoScrollActive = !1;
});
}, C = function() {
q.off("scroll", B), p.off("scroll", B), window.innerWidth <= m.screenSmMin && !b.fixedHeight ? p.on("scroll", B) :q.on("scroll", B);
}, D = function() {
b.fixedHeight || (window.innerWidth < m.screenSmMin && !b.fixedHeight ? t.affix({
target:window,
offset:{
top:b.followAffixTop || 0
}
}) :t.affix({
target:q,
offset:{
top:b.followAffixTop || 0
}
}));
}, E = function() {
return $("#" + b.logViewerID + " .log-view-output");
}, F = function(a) {
var c = E(), d = c.offset().top;
if (!(d < 0)) {
var e = $(".ellipsis-pulser").outerHeight(!0), f = b.fixedHeight ? b.fixedHeight :Math.floor($(window).height() - d - e);
b.chromeless || b.fixedHeight || (f -= 40), a ? c.animate({
"min-height":f + "px"
}, "fast") :c.css("min-height", f + "px"), b.fixedHeight && c.css("max-height", f);
}
}, G = function() {
if (!x) {
var a = function() {
clearInterval(x), x = null, b.$evalAsync(function() {
b.sized = !0;
});
}, c = 0;
x = setInterval(function() {
if (c > 10) return void a();
c++;
var b = E();
b.is(":visible") && (F(), a());
}, 100);
}
}, H = _.debounce(function() {
F(!0), y(), C(), z(), D(), B();
}, 100);
p.on("resize", H);
var I, J = function() {
A = !0, l.scrollBottom(s);
}, K = function() {
b.autoScrollActive = !b.autoScrollActive, b.autoScrollActive && J();
}, L = document.createDocumentFragment(), M = _.debounce(function() {
j.appendChild(L), L = document.createDocumentFragment(), b.autoScrollActive && J(), b.showScrollLinks || z();
}, 100, {
maxWait:300
}), N = function(a) {
var b = e.defer();
return I ? (I.onClose(function() {
b.resolve();
}), I.stop()) :b.resolve(), a || (M.cancel(), j && (j.innerHTML = ""), L = document.createDocumentFragment()), b.promise;
}, O = function() {
N().then(function() {
b.$evalAsync(function() {
if (b.run) {
angular.extend(b, {
loading:!0,
autoScrollActive:!0,
largeLog:!1,
limitReached:!1,
showScrollLinks:!1,
state:""
});
var a = angular.extend({
follow:!0,
tailLines:5e3,
limitBytes:10485760
}, b.options);
I = i.createStream(v, w, b.context, a);
var c = 0, d = function(a) {
c++, L.appendChild(r(c, a)), M();
};
I.onMessage(function(e, f, g) {
b.$evalAsync(function() {
b.empty = !1, "logs" !== b.state && (b.state = "logs", G());
}), e && (a.limitBytes && g >= a.limitBytes && (b.$evalAsync(function() {
b.limitReached = !0, b.loading = !1;
}), N(!0)), d(e), !b.largeLog && c >= a.tailLines && b.$evalAsync(function() {
b.largeLog = !0;
}));
}), I.onClose(function() {
I = null, b.$evalAsync(function() {
b.loading = !1, b.autoScrollActive = !1, 0 !== c || b.emptyStateMessage || (b.state = "empty", b.emptyStateMessage = o.getString(n("The logs are no longer available or could not be loaded.")));
});
}), I.onError(function() {
I = null, b.$evalAsync(function() {
angular.extend(b, {
loading:!1,
autoScrollActive:!1
}), 0 === c ? (b.state = "empty", b.emptyStateMessage = o.getString(n("The logs are no longer available or could not be loaded."))) :b.errorWhileRunning = !0;
});
}), I.start();
}
});
});
};
return h.getLoggingURL().then(function(d) {
var e = _.get(b.context, "project.metadata.name"), g = _.get(b.options, "container");
e && g && w && d && (angular.extend(b, {
kibanaAuthUrl:a.trustAsResourceUrl(URI(d).segment("auth").segment("token").normalizePathname().toString()),
access_token:f.UserStore().getToken()
}), b.$watchGroup([ "context.project.metadata.name", "options.container", "name" ], function() {
angular.extend(b, {
kibanaArchiveUrl:a.trustAsResourceUrl(l.archiveUri({
namespace:b.context.project.metadata.name,
namespaceUid:b.context.project.metadata.uid,
podname:w,
containername:b.options.container,
backlink:URI.encode(c.location.href)
}))
});
}));
}), this.cacheScrollableNode = function(a) {
k = a, q = $(k);
}, this.cacheLogNode = function(a) {
j = a;
}, this.cacheAffixable = function(a) {
t = $(a);
}, this.start = function() {
y(), C(), D();
}, angular.extend(b, {
ready:!0,
loading:!0,
autoScrollActive:!0,
state:!1,
onScrollBottom:function() {
l.scrollBottom(s);
},
onScrollTop:function() {
b.autoScrollActive = !1, l.scrollTop(s), $("#" + b.logViewerID + "-affixedFollow").affix("checkPosition");
},
toggleAutoScroll:K,
goChromeless:l.chromelessLink,
restartLogs:O
}), b.$on("$destroy", function() {
N(), p.off("resize", H), p.off("scroll", B), q.off("scroll", B);
}), "deploymentconfigs/logs" !== v || w ? void b.$watchGroup([ "name", "options.container", "run" ], O) :(b.state = "empty", void (b.emptyStateMessage = "Logs are not available for this replication controller because it was not generated from a deployment configuration."));
} ],
require:"logViewer",
link:function(a, c, d, e) {
b(function() {
e.cacheScrollableNode(document.getElementById(a.fixedHeight ? a.logViewerID + "-fixed-scrollable" :"container-main")), e.cacheLogNode(document.getElementById(a.logViewerID + "-logContent")), e.cacheAffixable(document.getElementById(a.logViewerID + "-affixedFollow")), e.start();
}, 0);
var f = function() {
var b = $(c).find(".log-line-text").text(), d = _.get(a, "object.metadata.name", "openshift") + ".log", e = new Blob([ b ], {
type:"text/plain;charset=utf-8"
});
saveAs(e, d);
};
a.canSave = !!new Blob(), a.saveLog = function() {
return a.largeLog ? void k.confirmSaveLog(a.object).then(f) :void f();
};
}
};
} ]), angular.module("openshiftConsole").directive("statusIcon", function() {
return {
restrict:"E",
templateUrl:"views/directives/_status-icon.html",
scope:{
status:"=",
disableAnimation:"@"
},
link:function(a, b, c) {
a.spinning = !angular.isDefined(c.disableAnimation);
}
};
}), angular.module("openshiftConsole").directive("ellipsisPulser", [ function() {
return {
restrict:"E",
scope:{
color:"@",
display:"@",
size:"@",
msg:"@"
},
templateUrl:"views/directives/_ellipsis-pulser.html"
};
} ]), angular.module("openshiftConsole").directive("podDonut", [ "$timeout", "isPullingImageFilter", "isTerminatingFilter", "podWarningsFilter", "numContainersReadyFilter", "Logger", "ChartsService", "gettext", "gettextCatalog", function(a, b, c, d, e, f, g, h, i) {
return {
restrict:"E",
scope:{
pods:"=",
desired:"=?",
idled:"=?",
mini:"=?"
},
templateUrl:"views/directives/pod-donut.html",
link:function(a, f) {
function j() {
var b = _.reject(a.pods, {
status:{
phase:"Failed"
}
}), c = _.size(b);
if (a.mini) return void a.$evalAsync(function() {
a.total = c;
});
var d;
d = angular.isNumber(a.desired) && a.desired !== c ? i.getString(h("scaling to")) + " " + a.desired + "..." :1 === c ? "pod" :"pods", a.idled ? g.updateDonutCenterText(f[0], "Idle") :g.updateDonutCenterText(f[0], c, d);
}
function k(b) {
var c = {
columns:[]
};
angular.forEach(q, function(a) {
c.columns.push([ i.getString(a), b[a] || 0 ]);
}), _.isEmpty(b) ? c.columns.push([ "Empty", 1 ]) :c.unload = "Empty", o ? o.load(c) :(p.data.columns = c.columns, o = c3.generate(p)), a.podStatusData = c.columns;
}
function l(a) {
var b = e(a), c = _.size(a.spec.containers);
return b === c;
}
function m(a) {
if (c(a)) return i.getString(h("Terminating"));
var e = d(a);
return _.some(e, {
severity:"error"
}) ? i.getString(h("Error")) :_.isEmpty(e) ? b(a) ? i.getString(h("Pulling")) :"Running" !== a.status.phase || l(a) ? _.get(a, "status.phase", i.getString(h("Unknown"))) :i.getString(h("Not Ready")) :i.getString(h("Warning"));
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
});
}
};
} ]), angular.module("openshiftConsole").directive("routeServicePie", function() {
return {
restrict:"E",
scope:{
route:"="
},
template:'<div ng-show="totalWeight" ng-attr-id="{{chartId}}"></div>',
link:function(a) {
function b() {
var b = {
columns:[],
names:{}
};
a.route && (b.columns.push(g(a.route.spec.to)), b.names[a.route.spec.to.name] = _.trunc(a.route.spec.to.name, {
length:30
}), a.totalWeight = a.route.spec.to.weight, _.each(a.route.spec.alternateBackends, function(c) {
b.columns.push(g(c)), b.names[c.name] = _.trunc(c.name, {
length:30
}), a.totalWeight += c.weight;
})), a.totalWeight && (c ? (i(b), c.load(b)) :(d.data.columns = b.columns, c = c3.generate(d)), f = b);
}
var c, d, e = window.matchMedia("(max-width: 400px)").matches;
a.chartId = _.uniqueId("route-service-chart-"), d = {
bindto:"#" + a.chartId,
color:{
pattern:[ $.pfPaletteColors.blue, $.pfPaletteColors.orange, $.pfPaletteColors.green, $.pfPaletteColors.red ]
},
legend:{
show:!0,
position:e ? "bottom" :"right"
},
pie:{
label:{
show:!1
}
},
size:{
height:e ? 150 :115
},
tooltip:{
format:{
name:function(a, b, c) {
return c;
}
}
},
data:{
type:"pie",
order:null,
selection:{
enabled:!1
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
restrict:"E",
scope:{
rc:"=",
deploymentConfig:"=",
deployment:"=",
scalable:"=",
hpa:"=?",
limitRanges:"=",
quotas:"=",
clusterQuotas:"=",
project:"=",
pods:"="
},
templateUrl:"views/directives/deployment-donut.html",
controller:[ "$scope", "$filter", "$q", function(a, b, c) {
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
id:"deployment-scale-error",
type:"error",
message:"An error occurred scaling " + e + " " + d.metadata.name + ".",
details:b("getErrorDetails")(a)
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
animation:!0,
templateUrl:"views/modals/confirmScale.html",
controller:"ConfirmScaleController",
resolve:{
resource:function() {
return a.rc;
},
type:function() {
return l(a.rc) ? "deployment" :"replication controller";
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
return angular.isDefined(a.desiredReplicas) && null !== a.desiredReplicas ? a.desiredReplicas :a.rc && a.rc.spec && angular.isDefined(a.rc.spec.replicas) ? a.rc.spec.replicas :1;
}, a.$watch(function() {
return !_.get(a.rc, "spec.replicas") && !!(a.deploymentConfig ? b("annotation")(a.deploymentConfig, "idledAt") :b("annotation")(a.rc, "idledAt"));
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
restrict:"E",
scope:{
used:"=",
crossProjectUsed:"=?",
total:"=",
type:"@",
height:"=?",
width:"=?"
},
replace:!0,
templateUrl:"views/_quota-usage-chart.html",
link:function(e, f) {
function g() {
var a = _.spread(function(a, c) {
b.updateDonutCenterText(f[0], a, c);
});
a(j(e.total, e.type, !0));
}
var h = a("usageValue"), i = a("usageWithUnits"), j = a("amountAndUnit");
e.height = e.height || 200, e.width = e.width || 175;
var k = function(a) {
return a ? (100 * Number(a)).toFixed(1) + "%" :"0%";
};
e.chartID = _.uniqueId("quota-usage-chart-");
var l, m = {
type:"donut",
bindto:"#" + e.chartID,
donut:{
label:{
show:!1
},
width:10
},
size:{
height:e.height,
width:e.width
},
legend:{
show:!0,
position:e.legendPosition || "bottom",
item:{
onclick:_.noop
}
},
onrendered:g,
tooltip:{
position:function() {
return {
top:0,
left:0
};
},
contents:function(a, b, f, g) {
var j = $('<table class="c3-tooltip"></table>').css({
width:e.width + "px"
}), l = $("<tr/>").appendTo(j), m = $('<td class="name nowrap"></td>').appendTo(l);
$("<span/>").css({
"background-color":g(a[0].id)
}).appendTo(m), $("<span/>").text(a[0].name).appendTo(m);
var n;
n = e.total ? k(a[0].value / h(e.total)) + " " + d.getString(c("of")) + " " + i(e.total, e.type) :i(e.used, e.type);
var o = $("<tr/>").appendTo(j);
return $('<td class="value" style="text-align: left;"></td>').text(n).appendTo(o), j.get(0).outerHTML;
}
},
data:{
type:"donut",
order:null
}
}, n = function() {
var a = void 0 !== e.crossProjectUsed, b = h(e.used) || 0, f = Math.max((h(e.crossProjectUsed) || 0) - b, 0), g = Math.max(h(e.total) - (f + b), 0), i = {
columns:[ [ "used", b ], [ "available", g ] ],
colors:{
used:g ? "#0088ce" :"#ec7a08",
other:g ? "#7dc3e8" :"#f7bd7f",
available:"#d1d1d1"
},
names:{
used:a ? d.getString(c("Used - This Project")) :d.getString(c("Used")),
other:d.getString(c("Used - Other Projects")),
available:d.getString(c("Available"))
}
};
a && i.columns.splice(1, 0, [ "other", f ]), l ? l.load(i) :(_.assign(m.data, i), l = c3.generate(m));
};
e.$watchGroup([ "used", "total", "crossProjectUsed" ], _.debounce(n, 300));
}
};
} ]), angular.module("openshiftConsole").directive("buildTrendsChart", [ "$filter", "$location", "$rootScope", "$timeout", "BuildsService", function(a, b, c, d, e) {
return {
restrict:"E",
scope:{
builds:"="
},
templateUrl:"views/_build-trends-chart.html",
link:function(f) {
var g, h = [ "Complete", "Failed", "Cancelled", "Error" ];
f.minBuilds = _.constant(4);
var i = function(a) {
var b = [], c = moment.duration(a), d = Math.floor(c.asHours()), e = c.minutes(), f = c.seconds();
return d || e || f ? (d && b.push(d + "h"), e && b.push(e + "m"), d || b.push(f + "s"), b.join(" ")) :"";
};
f.chartID = _.uniqueId("build-trends-chart-");
var j, k, l = _.constant(350), m = {
bindto:"#" + f.chartID,
padding:{
right:30,
left:80
},
axis:{
x:{
fit:!0,
label:{
text:"Build Number",
position:"outer-right"
},
tick:{
culling:!0,
format:function(a) {
return "#" + g.json[a].buildNumber;
},
width:30
},
type:"category"
},
y:{
label:{
text:"Duration",
position:"outer-top"
},
min:0,
padding:{
bottom:0
},
tick:{
format:i
}
}
},
bar:{
width:{
max:50
}
},
legend:{
item:{
onclick:_.noop
}
},
size:{
height:250
},
tooltip:{
format:{
title:function(a) {
var b = g.json[a], c = e.getStartTimestsamp(b.build);
return "#" + b.buildNumber + " (" + moment(c).fromNow() + ")";
}
}
},
transition:{
duration:l()
},
data:{
colors:{
Cancelled:"#d1d1d1",
Complete:"#00b9e4",
Error:"#393f44",
Failed:"#cc0000"
},
empty:{
label:{
text:"No Completed Builds"
}
},
onclick:function(d) {
var e = g.json[d.x].build, f = a("navigateResourceURL")(e);
f && c.$apply(function() {
b.path(f);
});
},
selection:{
enabled:!0
},
type:"bar"
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
value:k,
"class":"build-trends-avg-line"
} ]) :j.ygrids.remove();
};
f.toggleAvgLine = function() {
p = !p, q();
};
var r = function() {
g = {
json:[],
keys:{
x:"buildNumber"
}
};
var a = 0, b = 0;
angular.forEach(f.completeBuilds, function(c) {
var d = e.getBuildNumber(c);
if (d) {
var f = e.getDuration(c);
a += f, b++;
var h = {
buildNumber:d,
phase:c.status.phase,
build:c
};
h[c.status.phase] = f, g.json.push(h);
}
}), g.json.sort(function(a, b) {
return a.buildNumber - b.buildNumber;
}), g.json.length > 50 && (g.json = g.json.slice(g.json.length - 50));
var c = {};
angular.forEach(g.json, function(a) {
c[a.phase] = !0;
}), b ? (k = a / b, f.averageDurationText = i(k)) :(k = null, f.averageDurationText = null);
var n = [], o = [];
angular.forEach(h, function(a) {
c[a] ? n.push(a) :o.push(a);
}), g.keys.value = n, g.groups = [ n ], j ? (g.unload = o, g.done = function() {
setTimeout(function() {
j.flush();
}, l() + 25);
}, j.load(g), q()) :(m.data = angular.extend(g, m.data), d(function() {
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
restrict:"E",
require:"ngModel",
scope:{
label:"@",
type:"@",
description:"@",
defaultValue:"=",
limitRangeMin:"=",
limitRangeMax:"=",
maxLimitRequestRatio:"=",
request:"="
},
templateUrl:"views/_compute-resource.html",
link:function(d, e, f, g) {
var h = a("usageValue"), i = a("amountAndUnit"), j = a("humanizeUnit");
d.id = _.uniqueId("compute-resource-"), d.input = {};
var k = function(a) {
_.some(d.units, {
value:a
}) || d.units.push({
value:a,
label:c.getString(j(a, d.type))
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
value:"m",
label:c.getString(b("millicores"))
}, {
value:"",
label:c.getString(b("cores"))
} ];
break;

case "memory":
d.input.unit = "Mi", d.units = [ {
value:"Mi",
label:"MiB"
}, {
value:"Gi",
label:"GiB"
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
d.input.amount ? a = h(d.input.amount + d.input.unit) :d.defaultValue && (a = h(d.defaultValue)), b && a && (c = a >= b, d.maxLimitRequestRatio && (e = a / b <= d.maxLimitRequestRatio)), b && !a && d.maxLimitRequestRatio && (e = !1), d.form.amount.$setValidity("limitLargerThanRequest", c), d.form.amount.$setValidity("limitWithinRatio", e);
};
g.$render = function() {
var a = _.spread(function(a, b) {
a ? (d.input.amount = Number(a), d.input.unit = b, k(b)) :d.input.amount = null;
});
a(i(g.$viewValue, d.type));
}, d.$watchGroup([ "input.amount", "input.unit" ], function() {
l(), m(), d.input.amount ? g.$setViewValue(d.input.amount + d.input.unit) :g.$setViewValue(void 0);
}), d.$watchGroup([ "limitRangeMin", "limitRangeMax" ], l), d.$watch("request", m);
}
};
} ]).directive("editRequestLimit", [ "$filter", "LimitRangesService", "ModalsService", function(a, b, c) {
return {
restrict:"E",
scope:{
resources:"=",
type:"@",
limitRanges:"=",
project:"="
},
templateUrl:"views/_edit-request-limit.html",
link:function(a) {
a.showComputeUnitsHelp = function() {
c.showComputeUnitsHelp();
}, a.$watch("limitRanges", function() {
a.limits = b.getEffectiveLimitRange(a.limitRanges, a.type, "Container", a.project), a.requestCalculated = b.isRequestCalculated(a.type, a.project), a.limitCalculated = b.isLimitCalculated(a.type, a.project);
}, !0);
}
};
} ]), angular.module("openshiftConsole").directive("editProbe", function() {
return {
restrict:"E",
scope:{
probe:"=",
exposedPorts:"="
},
templateUrl:"views/directives/_edit-probe.html",
link:function(a) {
a.id = _.uniqueId("edit-probe-"), a.probe = a.probe || {}, a.types = [ {
id:"httpGet",
label:"HTTP GET"
}, {
id:"exec",
label:"Container Command"
}, {
id:"tcpSocket",
label:"TCP Socket"
} ], a.previousProbes = {}, a.tcpPorts = _.filter(a.exposedPorts, {
protocol:"TCP"
});
var b = _.get(a, "probe.httpGet.port") || _.get(a, "probe.exec.port");
b && !_.some(a.tcpPorts, {
containerPort:b
}) && (a.tcpPorts = [ {
containerPort:b,
protocol:"TCP"
} ].concat(a.tcpPorts)), a.portOptions = a.tcpPorts;
var c, d = function(b, c) {
if (a.probe = a.probe || {}, a.previousProbes[c] = a.probe[c], delete a.probe[c], a.probe[b] = a.previousProbes[b], !a.probe[b]) switch (b) {
case "httpGet":
case "tcpSocket":
var d = _.head(a.tcpPorts);
a.probe[b] = {
port:d ? d.containerPort :""
};
break;

case "exec":
a.probe = {
exec:{
command:[]
}
};
}
};
a.probe.httpGet ? c = "httpGet" :a.probe.exec ? c = "exec" :a.probe.tcpSocket ? c = "tcpSocket" :(c = "httpGet", d("httpGet")), _.set(a, "selected.type", c), a.$watch("selected.type", function(a, b) {
a !== b && d(a, b);
}), a.refreshPorts = function(b) {
if (/^\d+$/.test(b)) {
var c = a.tcpPorts;
b = parseInt(b, 10), b && !_.some(c, {
containerPort:b
}) && (c = [ {
containerPort:b,
protocol:"TCP"
} ].concat(c)), a.portOptions = _.uniq(c);
}
};
}
};
}), angular.module("openshiftConsole").directive("editCommand", [ "$filter", function(a) {
return {
restrict:"E",
scope:{
args:"=",
type:"@",
placeholder:"@",
description:"=",
isRequired:"="
},
templateUrl:"views/directives/_edit-command.html",
link:function(b) {
b.id = _.uniqueId("edit-command-"), b.input = {};
var c, d, e = a("isMultiline");
b.$watch("args", function() {
return d ? void (d = !1) :void (_.isEmpty(b.args) || (b.input.args = _.map(b.args, function(a) {
return {
value:a,
multiline:e(a)
};
}), c = !0));
}, !0), b.$watch("input.args", function(a, e) {
return c ? void (c = !1) :void (a !== e && (d = !0, b.args = _.map(b.input.args, function(a) {
return a.value;
}), b.form.command.$setDirty()));
}, !0), b.addArg = function() {
b.nextArg && (b.input.args = b.input.args || [], b.input.args.push({
value:b.nextArg,
multiline:e(b.nextArg)
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
restrict:"E",
scope:{
build:"=",
expandOnlyRunning:"=?",
collapsePending:"=?",
buildConfigNameOnExpanded:"=?"
},
replace:!0,
templateUrl:"views/directives/build-pipeline.html",
link:function(c) {
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
restrict:"E",
scope:{
status:"="
},
templateUrl:"views/directives/pipeline-status.html"
};
}), angular.module("openshiftConsole").directive("buildStatus", function() {
return {
restrict:"E",
scope:{
build:"="
},
templateUrl:"views/directives/build-status.html"
};
}), function() {
function a() {
var a = this, b = function(b, c) {
return b.name === a.highlightService ? -1 :c.name === a.highlightService ? 1 :c.weight === b.weight ? b.name.localeCompare(c.name) :c.weight - b.weight;
}, c = function(b) {
a.total += b.weight, a.max = Math.max(b.weight, a.max || 0), a.backends.push({
name:b.name,
weight:b.weight
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
controller:a,
controllerAs:"routeServices",
bindings:{
route:"<",
highlightService:"<"
},
templateUrl:"views/directives/route-service-bar-chart.html"
});
}(), function() {
function a(a, b, c, d) {
var e, f, g, h, i, j, k, l = this, m = b("statusCondition"), n = function() {
var a, b;
_.each(l.serviceInstances, function(c) {
var d = "True" === _.get(m(c, "Ready"), "status");
d && (!a || c.metadata.creationTimestamp > a.metadata.creationTimestamp) && (a = c), d || b && !(c.metadata.creationTimestamp > b.metadata.creationTimestamp) || (b = c);
}), l.serviceToBind = a || b;
}, o = function() {
l.serviceClasses && l.serviceInstances && (l.orderedServiceInstances = _.sortByAll(l.serviceInstances, function(a) {
return _.get(l.serviceClasses, [ a.spec.serviceClassName, "externalMetadata", "displayName" ]) || a.spec.serviceClassName;
}, function(a) {
return _.get(a, "metadata.name", "");
}));
}, p = function() {
if (g && h && i && j && k) {
var a = [].concat(g).concat(h).concat(i).concat(j).concat(k);
l.applications = _.sortByAll(a, [ "metadata.name", "kind" ]), l.bindType = l.applications.length ? "application" :"secret-only";
}
}, q = function() {
l.nextTitle = "Bind", e = a.$watch("ctrl.selectionForm.$valid", function(a) {
l.steps[0].valid = a;
});
}, r = function() {
e && (e(), e = void 0), l.nextTitle = "Close", l.wizardComplete = !0, l.bindService();
}, s = function() {
var a = {
namespace:_.get(l.target, "metadata.namespace")
};
c.list("deploymentconfigs", a).then(function(a) {
g = _.toArray(a.by("metadata.name")), p();
}), c.list("replicationcontrollers", a).then(function(a) {
i = _.reject(a.by("metadata.name"), b("hasDeploymentConfig")), p();
}), c.list({
group:"extensions",
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
});
}, t = function() {
var a = {
namespace:_.get(l.target, "metadata.namespace")
};
c.list({
group:"servicecatalog.k8s.io",
resource:"instances"
}, a).then(function(a) {
l.serviceInstances = a.by("metadata.name"), l.serviceToBind || n(), o();
});
};
l.$onInit = function() {
l.serviceSelection = {}, l.projectDisplayName = b("displayName")(l.project), l.steps = [ {
id:"bindForm",
label:"Binding",
view:"views/directives/bind-service/bind-service-form.html",
valid:!0,
onShow:q
}, {
label:"Results",
id:"results",
view:"views/directives/bind-service/results.html",
valid:!0,
onShow:r
} ], c.list({
group:"servicecatalog.k8s.io",
resource:"serviceclasses"
}, {}).then(function(a) {
l.serviceClasses = a.by("metadata.name"), "Instance" === l.target.kind && (l.serviceClass = l.serviceClasses[l.target.spec.serviceClassName], l.serviceClassName = l.target.spec.serviceClassName), o();
}), "Instance" === l.target.kind ? (l.bindType = "secret-only", l.appToBind = null, l.serviceToBind = l.target, s()) :(l.bindType = "application", l.appToBind = l.target, t());
}, l.$onChanges = function(a) {
a.project && !a.project.isFirstChange() && (l.projectDisplayName = b("displayName")(l.project));
}, l.$onDestroy = function() {
e && (e(), e = void 0), f && c.unwatch(f);
}, l.bindService = function() {
var a = "Instance" === l.target.kind ? l.target :l.serviceToBind, b = "application" === l.bindType ? l.appToBind :void 0, e = {
namespace:_.get(a, "metadata.namespace")
}, g = d.getServiceClassForInstance(a, l.serviceClasses);
d.bindService(a, b, g).then(function(a) {
l.binding = a, l.error = null, f = c.watchObject(d.bindingResource, _.get(l.binding, "metadata.name"), e, function(a) {
l.binding = a;
});
}, function(a) {
l.error = a;
});
}, l.closeWizard = function() {
_.isFunction(l.onClose) && l.onClose();
};
}
angular.module("openshiftConsole").component("bindService", {
controller:[ "$scope", "$filter", "DataService", "BindingService", a ],
controllerAs:"ctrl",
bindings:{
target:"<",
project:"<",
onClose:"<"
},
templateUrl:"views/directives/bind-service.html"
});
}(), function() {
function a(a, b, c) {
var d, e, f = this, g = b("serviceInstanceDisplayName"), h = function() {
var a = f.selectedBinding.metadata.name;
f.unboundApps = f.appsForBinding(a), c["delete"]({
group:"servicecatalog.k8s.io",
resource:"bindings"
}, a, e, {
propagationPolicy:null
}).then(_.noop, function(a) {
f.error = a;
});
}, i = function() {
var b = _.first(f.steps);
b.valid = !1, d = a.$watch("ctrl.selectedBinding", function(a) {
b.valid = !!a;
});
}, j = function() {
d && (d(), d = void 0);
}, k = function() {
f.nextTitle = "Delete", i();
}, l = function() {
f.nextTitle = "Close", f.wizardComplete = !0, h(), j();
};
f.$onInit = function() {
var a = "Instance" === f.target.kind ? "Applications" :"Services";
f.displayName = g(f.target), f.steps = [ {
id:"deleteForm",
label:a,
view:"views/directives/bind-service/delete-binding-select-form.html",
onShow:k
}, {
id:"results",
label:"Results",
view:"views/directives/bind-service/delete-binding-result.html",
onShow:l
} ], e = {
namespace:_.get(f.target, "metadata.namespace")
};
}, f.appsForBinding = function(a) {
return _.get(f.applicationsByBinding, a);
}, f.closeWizard = function() {
_.isFunction(f.onClose) && f.onClose();
}, f.$onDestroy = function() {
j();
};
}
angular.module("openshiftConsole").component("unbindService", {
controller:[ "$scope", "$filter", "DataService", a ],
controllerAs:"ctrl",
bindings:{
target:"<",
bindings:"<",
applicationsByBinding:"<",
onClose:"<"
},
templateUrl:"views/directives/unbind-service.html"
});
}(), function() {
function a(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
function o(a) {
var b = /^helplink\.(.*)\.title$/, c = /^helplink\.(.*)\.url$/, d = {};
for (var e in a.annotations) {
var f, g = e.match(b);
g ? (f = d[g[1]] || {}, f.title = a.annotations[e], d[g[1]] = f) :(g = e.match(c), g && (f = d[g[1]] || {}, f.url = a.annotations[e], d[g[1]] = f));
}
return d;
}
function p() {
r.prefillParameters && _.each(r.template.parameters, function(a) {
r.prefillParameters[a.name] && (a.value = r.prefillParameters[a.name]);
}), r.systemLabels = _.map(r.template.labels, function(a, b) {
return {
name:b,
value:a
};
}), B() && r.systemLabels.push({
name:"app",
value:r.template.metadata.name
});
}
var q, r = this, s = a("displayName"), t = a("humanize");
r.$onInit = function() {
r.labels = [], r.template = angular.copy(r.template), r.templateDisplayName = s(r.template), r.selectedProject = r.project, p();
};
var u, v = function() {
var a = {
started:n.getString(m("Creating")) + " " + r.templateDisplayName + " " + n.getString(m("in project ")) + " " + s(r.selectedProject),
success:n.getString(m("Created")) + " " + r.templateDisplayName + " " + n.getString(m("in project")) + " " + s(r.selectedProject),
failure:n.getString(m("Failed to create")) + " " + r.templateDisplayName + " " + n.getString(m("in project")) + " " + s(r.selectedProject)
}, d = o(r.template);
k.clear(), k.add(a, d, r.selectedProject.metadata.name, function() {
var a = b.defer();
return e.batch(u, q).then(function(b) {
var c = [], d = !1;
b.failure.length > 0 ? (d = !0, b.failure.forEach(function(a) {
c.push({
type:"error",
message:"Cannot create " + t(a.object.kind).toLowerCase() + ' "' + a.object.metadata.name + '". ',
details:a.data.message
});
}), b.success.forEach(function(a) {
c.push({
type:"success",
message:"Created " + t(a.kind).toLowerCase() + ' "' + a.metadata.name + '" successfully. '
});
})) :c.push({
type:"success",
message:n.getString(m("All items in template {{templateDisplayName}} were created successfully."), {
templateDisplayName:r.templateDisplayName
})
}), a.resolve({
alerts:c,
hasErrors:d
});
}), a.promise;
}), r.isDialog ? c.$emit("templateInstantiated", {
project:r.selectedProject,
template:r.template
}) :f.toNextSteps(r.templateDisplayName, r.selectedProject.metadata.name);
}, w = function(a) {
var b = d.open({
animation:!0,
templateUrl:"views/modals/confirm.html",
controller:"ConfirmModalController",
resolve:{
modalConfig:function() {
return {
alerts:a,
message:n.getString(m("We checked your application for potential problems. Please confirm you still want to create this application.")),
okButtonText:n.getString(m("Create Anyway")),
okButtonClass:"btn-danger",
cancelButtonText:n.getString(m("Cancel"))
};
}
}
});
b.result.then(v);
}, x = {}, y = function() {
g.hideNotification("process-template-error"), _.each(x, function(a) {
!a.id || "error" !== a.type && "warning" !== a.type || g.hideNotification(a.id);
});
}, z = function(a) {
y(), x = j.getSecurityAlerts(u, r.selectedProject.metadata.name);
var b = a.quotaAlerts || [];
x = x.concat(b);
var c = _.filter(x, {
type:"error"
});
c.length ? (r.disableInputs = !1, _.each(x, function(a) {
a.id = _.uniqueId("process-template-alert-"), g.addNotification(a);
})) :x.length ? (w(x), r.disableInputs = !1) :v();
}, A = function() {
if (_.has(r.selectedProject, "metadata.uid")) return b.when(r.selectedProject);
var d = r.selectedProject.metadata.name, f = r.selectedProject.metadata.annotations["new-display-name"], g = a("description")(r.selectedProject), h = {
apiVersion:"v1",
kind:"ProjectRequest",
metadata:{
name:d
},
displayName:f,
description:g
};
return e.create("projectrequests", null, h, c);
};
r.createFromTemplate = function() {
r.disableInputs = !0, A().then(function(a) {
r.selectedProject = a, q = {
namespace:r.selectedProject.metadata.name
};
var b = l.mapEntries(l.compactEntries(r.labels)), c = l.mapEntries(l.compactEntries(r.systemLabels));
r.template.labels = _.extend(c, b), e.create("processedtemplates", null, r.template, q).then(function(a) {
h.setTemplateData(a.parameters, r.template.parameters, a.message), u = a.objects, i.getLatestQuotaAlerts(u, q).then(z);
}, function(a) {
r.disableInputs = !1;
var b;
a.data && a.data.message && (b = a.data.message), g.addNotification({
id:"process-template-error",
type:"error",
message:"An error occurred processing the template.",
details:b
});
});
}, function(a) {
r.disableInputs = !1;
var b;
a.data && a.data.message && (b = a.data.message), g.addNotification({
id:"process-template-error",
type:"error",
message:"An error occurred creating the project.",
details:b
});
});
}, r.cancel = function() {
y(), f.toProjectOverview(r.project.metadata.name);
}, c.$on("instantiateTemplate", r.createFromTemplate), c.$on("$destroy", y);
var B = function() {
return !_.get(r.template, "labels.app") && !_.some(r.template.objects, "metadata.labels.app");
};
}
angular.module("openshiftConsole").component("processTemplate", {
controller:[ "$filter", "$q", "$scope", "$uibModal", "DataService", "Navigate", "NotificationsService", "ProcessedTemplateService", "QuotaService", "SecurityCheckService", "TaskList", "keyValueEditorUtils", "gettext", "gettextCatalog", a ],
controllerAs:"$ctrl",
bindings:{
template:"<",
project:"<",
prefillParameters:"<",
isDialog:"<"
},
templateUrl:"views/directives/process-template.html"
});
}(), function() {
function a(a, b) {
function c() {
var a = _.get(j, "template.metadata.annotations.iconClass", "fa fa-clone");
return a.indexOf("icon-") !== -1 ? "font-icon " + a :a;
}
function d() {
j.steps = [ j.configStep, j.resultsStep ];
}
function e() {
i && (i(), i = void 0);
}
function f() {
j.configStep.selected = !0, j.resultsStep.selected = !1, j.nextTitle = "Create", j.resultsStep.allowed = j.configStep.valid, i = a.$watch("$ctrl.form.$valid", function(a) {
j.configStep.valid = a, j.resultsStep.allowed = a;
});
}
function g() {
j.configStep.selected = !1, j.resultsStep.selected = !0, j.nextTitle = "Close", e(), j.wizardDone = !0;
}
function h() {
a.$broadcast("instantiateTemplate");
}
var i, j = this;
j.configStep = {
id:"configuration",
label:"Configuration",
view:"views/directives/process-template-dialog/process-template-config.html",
valid:!1,
allowed:!0,
onShow:f
}, j.resultsStep = {
id:"results",
label:"Results",
view:"views/directives/process-template-dialog/process-template-results.html",
valid:!0,
allowed:!1,
prevEnabled:!1,
onShow:g
}, j.$onInit = function() {
j.loginBaseUrl = b.openshiftAPIBaseUrl();
}, j.$onChanges = function(a) {
a.template && j.template && (d(), j.iconClass = c());
}, a.$on("templateInstantiated", function(a, b) {
j.selectedProject = b.project, j.currentStep = j.resultsStep.label;
}), j.$onDestroy = function() {
e();
}, j.next = function(a) {
return a.stepId === j.configStep.id ? (h(), !1) :a.stepId !== j.resultsStep.id || (j.close(), !1);
}, j.close = function() {
var a = j.onDialogClosed();
_.isFunction(a) && a();
};
}
angular.module("openshiftConsole").component("processTemplateDialog", {
controller:[ "$scope", "DataService", a ],
controllerAs:"$ctrl",
bindings:{
template:"<",
onDialogClosed:"&"
},
templateUrl:"views/directives/process-template-dialog.html"
});
}(), function() {
function a(a, b) {
var c = this;
c.$onInit = function() {
c.loginBaseUrl = b.openshiftAPIBaseUrl(), c.currentStep = "Image";
}, c.deployImage = function() {
a.$broadcast("newAppFromDeployImage");
}, a.$on("deployImageNewAppCreated", function(a, b) {
c.selectedProject = b.project, c.currentStep = "Results";
}), c.close = function() {
var a = c.onDialogClosed();
return _.isFunction(a) && a(), c.wizardDone = !1, !0;
}, a.$on("wizard:stepChanged", function(a, b) {
"results" === b.step.stepId ? (c.nextButtonTitle = "Close", c.wizardDone = !0) :c.nextButtonTitle = "Deploy";
}), c.nextCallback = function(a) {
return "image" === a.stepId ? (c.deployImage(), !1) :("results" === a.stepId && c.close(), !0);
};
}
angular.module("openshiftConsole").component("deployImageDialog", {
controller:[ "$scope", "DataService", a ],
controllerAs:"$ctrl",
bindings:{
visible:"<",
project:"<",
context:"<",
onDialogClosed:"&"
},
templateUrl:"views/directives/deploy-image-dialog.html"
});
}(), function() {
function a(a, b, c) {
function d() {
var a = _.get(e, "template.metadata.annotations.iconClass", "fa fa-clone");
return a.indexOf("icon-") !== -1 ? "font-icon " + a :a;
}
var e = this;
e.$onInit = function() {
e.alerts = {}, e.loginBaseUrl = c.openshiftAPIBaseUrl();
}, e.importFile = function() {
a.$broadcast("importFileFromYAMLOrJSON");
}, e.instantiateTemplate = function() {
a.$broadcast("instantiateTemplate");
}, a.$on("fileImportedFromYAMLOrJSON", function(a, c) {
e.selectedProject = c.project, e.template = c.template, e.iconClass = d(), b(function() {
e.currentStep = e.template ? "Template Configuration" :"Results";
}, 0);
}), a.$on("templateInstantiated", function(a, b) {
e.selectedProject = b.project, e.currentStep = "Results";
}), e.close = function() {
e.template = null;
var a = e.onDialogClosed();
return _.isFunction(a) && a(), e.wizardDone = !1, !0;
}, a.$on("wizard:stepChanged", function(a, b) {
"results" === b.step.stepId ? (e.nextButtonTitle = "Close", e.wizardDone = !0) :e.nextButtonTitle = "Create";
}), e.currentStep = "JSON / YAML", e.nextCallback = function(a) {
return "file" === a.stepId ? (e.importFile(), !1) :"template" === a.stepId ? (e.instantiateTemplate(), !1) :"results" !== a.stepId || (e.close(), !1);
};
}
angular.module("openshiftConsole").component("fromFileDialog", {
controller:[ "$scope", "$timeout", "DataService", a ],
controllerAs:"$ctrl",
bindings:{
visible:"<",
project:"<",
context:"<",
onDialogClosed:"&"
},
templateUrl:"views/directives/from-file-dialog.html"
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
e.showParamsTable = !1;
var f = a.getTemplateData();
e.parameters = f.params, e.templateMessage = f.message, a.clearTemplateData();
var g = function(a) {
var b = _.get(e, "createdBuildConfig.spec.triggers", []);
return _.some(b, {
type:a
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
controller:[ "ProcessedTemplateService", "Navigate", a ],
bindings:{
project:"<",
projectName:"<",
loginBaseUrl:"<",
fromSampleRepo:"<",
createdBuildConfig:"<",
onContinue:"<"
},
templateUrl:"views/directives/next-steps.html"
});
}(), angular.module("openshiftConsole").directive("imageNames", [ "$filter", "PodsService", function(a, b) {
return {
restrict:"E",
scope:{
podTemplate:"=",
pods:"="
},
templateUrl:"views/_image-names.html",
link:function(c) {
var d = a("imageSHA"), e = function() {
var a = _.get(c, "podTemplate.spec.containers[0]");
if (a) {
var e = d(a.image);
return e ? void (c.imageIDs = [ e ]) :void (c.imageIDs = b.getImageIDs(c.pods, a.name));
}
};
c.$watchGroup([ "podTemplate", "pods" ], e);
}
};
} ]), function() {
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
controller:[ "$scope", "BuildsService", a ],
controllerAs:"buildCounts",
bindings:{
builds:"<",
showRunningStage:"<",
label:"@"
},
templateUrl:"views/overview/_build-counts.html"
});
}(), function() {
function a(a, b, c, d) {
var e, f = this, g = !0, h = function(a) {
return a >= 1024;
};
f.metrics = [ {
label:"Memory",
convert:b.bytesToMiB,
formatUsage:function(a) {
return h(a) && (a /= 1024), c.formatUsage(a);
},
usageUnits:function(a) {
return h(a) ? "GiB" :"MiB";
},
datasets:[ "memory/usage" ],
type:"pod_container"
}, {
label:"CPU",
convert:b.millicoresToCores,
usageUnits:function() {
return "cores";
},
formatUsage:function(a) {
return a < .01 ? "< 0.01" :c.formatUsage(a);
},
datasets:[ "cpu/usage_rate" ],
type:"pod_container"
}, {
label:"Network",
units:"KiB/s",
convert:b.bytesToKiB,
formatUsage:function(a) {
return a < .01 ? "< 0.01" :c.formatUsage(a);
},
usageUnits:function() {
return "KiB/s";
},
datasets:[ "network/tx_rate", "network/rx_rate" ],
type:"pod"
} ];
var i = function() {
var a = _.find(f.pods, "metadata.namespace");
if (!a) return null;
var b = {
pods:f.pods,
namespace:a.metadata.namespace,
start:"-1mn",
bucketDuration:"1mn"
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
}), null === c ? delete a.currentUsage :a.currentUsage = c / _.size(d);
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
controller:[ "$interval", "ConversionService", "MetricsCharts", "MetricsService", a ],
controllerAs:"metricsSummary",
bindings:{
pods:"<",
containers:"<"
},
templateUrl:"views/overview/_metrics-summary.html"
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
markup:d,
id:n
}), l.length > k && (l = _.takeRight(l, k)), m();
}
}, p = function() {
h && (h.stop(), h = null);
}, q = function() {
var a = {
follow:!0,
tailLines:k
};
h = d.createStream(g, f, i.context, a), h.start(), h.onMessage(o), h.onClose(function() {
h = null;
});
};
i.$onInit = function() {
"ReplicationController" === i.apiObject.kind ? (g = "deploymentconfigs/log", f = j(i.apiObject, "deploymentConfig")) :(g = c.kindToResource(i.apiObject.kind) + "/log", f = i.apiObject.metadata.name), q();
}, i.$onDestroy = function() {
p();
};
}
angular.module("openshiftConsole").component("miniLog", {
controllerAs:"miniLog",
controller:[ "$scope", "$filter", "APIService", "DataService", "HTMLService", a ],
bindings:{
apiObject:"<",
numLines:"<",
context:"<"
},
templateUrl:"views/overview/_mini-log.html"
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
controller:[ "$scope", a ],
controllerAs:"notification",
bindings:{
alerts:"<"
},
templateUrl:"views/overview/_notification-icon.html"
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
controller:[ "$filter", a ],
controllerAs:"overviewBuilds",
bindings:{
buildConfigs:"<",
recentBuildsByBuildConfig:"<",
context:"<",
hideLog:"<"
},
templateUrl:"views/overview/_builds.html"
});
}(), function() {
function a(a, b, c, d, e, f, g, h, i, j) {
var k = this;
_.extend(k, f.ui);
var l = a("canI"), m = a("deploymentIsInProgress"), n = a("isBinaryBuild"), o = a("enableTechPreviewFeature"), p = function(a) {
var b = _.get(a, "spec.triggers");
_.isEmpty(b) || (k.imageChangeTriggers = _.filter(b, function(a) {
return "ImageChange" === a.type && _.get(a, "imageChangeParams.automatic");
}));
}, q = function(a) {
a && !k.current && "DeploymentConfig" !== a.kind && "Deployment" !== a.kind && (k.current = a);
}, r = function(a) {
k.rgv = c.objectToResourceGroupVersion(a), q(a), p(a);
};
k.$onChanges = function(a) {
a.apiObject && r(a.apiObject.currentValue);
};
var s = [], t = function(a) {
if (!k.state.hpaByResource) return null;
var b = _.get(a, "kind"), c = _.get(a, "metadata.name");
return _.get(k.state.hpaByResource, [ b, c ], s);
};
k.$doCheck = function() {
k.notifications = f.getNotifications(k.apiObject, k.state), k.hpa = t(k.apiObject), k.current && _.isEmpty(k.hpa) && (k.hpa = t(k.current));
var a = _.get(k, "apiObject.metadata.uid");
a && (k.services = _.get(k, [ "state", "servicesByObjectUID", a ]), k.buildConfigs = _.get(k, [ "state", "buildConfigsByObjectUID", a ]), k.bindings = _.get(k, [ "state", "bindingsByApplicationUID", a ]));
var b, c = _.get(k, "apiObject.kind");
"DeploymentConfig" === c && (b = _.get(k, "apiObject.metadata.name"), k.pipelines = _.get(k, [ "state", "pipelinesByDeploymentConfig", b ]), k.recentBuilds = _.get(k, [ "state", "recentBuildsByDeploymentConfig", b ]), k.recentPipelines = _.get(k, [ "state", "recentPipelinesByDeploymentConfig", b ]));
}, k.getPods = function(a) {
var b = _.get(a, "metadata.uid");
return _.get(k, [ "state", "podsByOwnerUID", b ]);
}, k.firstPod = function(a) {
var b = k.getPods(a);
return _.find(b);
}, k.isScalable = function() {
return !!_.isEmpty(k.hpa) && !k.isDeploymentInProgress();
}, k.isDeploymentInProgress = function() {
return !(!k.current || !k.previous) || m(k.current);
}, k.canIDoAny = function() {
var a = _.get(k, "apiObject.kind"), b = _.get(k, "apiObject.metadata.uid"), c = _.get(k.state.deleteableBindingsByApplicationUID, b);
switch (a) {
case "DeploymentConfig":
return !!l("deploymentconfigs/instantiate", "create") || (!!l("deploymentconfigs", "update") || (!(!k.current || !l("deploymentconfigs/log", "get")) || (!(!o("pod_presets") || _.isEmpty(k.state.bindableServiceInstances) || !l({
resource:"bindings",
group:"servicecatalog.k8s.io"
}, "create")) || (!(!o("pod_presets") || _.isEmpty(c) || !l({
resource:"bindings",
group:"servicecatalog.k8s.io"
}, "delete")) || (k.showStartPipelineAction() || k.showStartBuildAction())))));

case "Pod":
return !!l("pods/log", "get") || !!l("pods", "update");

default:
return !(!k.firstPod(k.current) || !l("pods/log", "get")) || (!!l(k.rgv, "update") || (!(!o("pod_presets") || _.isEmpty(k.state.bindableServiceInstances) || !l({
resource:"bindings",
group:"servicecatalog.k8s.io"
}, "create")) || !(!o("pod_presets") || _.isEmpty(c) || !l({
resource:"bindings",
group:"servicecatalog.k8s.io"
}, "delete"))));
}
}, k.showStartBuildAction = function() {
if (!_.isEmpty(k.pipelines)) return !1;
if (!l("buildconfigs/instantiate", "create")) return !1;
if (1 !== _.size(k.buildConfigs)) return !1;
var a = _.first(k.buildConfigs);
return !n(a);
}, k.showStartPipelineAction = function() {
return l("buildconfigs/instantiate", "create") && 1 === _.size(k.pipelines);
}, k.startBuild = d.startBuild, k.canDeploy = function() {
return !!k.apiObject && (!k.apiObject.metadata.deletionTimestamp && (!k.deploymentInProgress && !k.apiObject.spec.paused));
}, k.isPaused = function() {
return k.apiObject.spec.paused;
}, k.startDeployment = function() {
e.startLatestDeployment(k.apiObject, {
namespace:k.apiObject.metadata.namespace
});
}, k.cancelDeployment = function() {
var a = k.current;
if (a) {
var c, d = a.metadata.name, f = _.get(k, "apiObject.status.latestVersion");
c = 1 === f ? j.getString(i("This will attempt to stop the in-progress deployment. It may take some time to complete.")) :j.getString(i("This will attempt to stop the in-progress deployment and rollback to the last successful deployment. It may take some time to complete."));
var g = b.open({
animation:!0,
templateUrl:"views/modals/confirm.html",
controller:"ConfirmModalController",
resolve:{
modalConfig:function() {
return {
message:j.getString(i("Cancel deployment {{rcName}}?"), {
rcName:d
}),
details:c,
okButtonText:j.getString(i("Yes, cancel")),
okButtonClass:"btn-danger",
cancelButtonText:j.getString(i("No, don't cancel"))
};
}
}
});
g.result.then(function() {
return a.metadata.uid !== k.current.metadata.uid ? void h.addNotification({
type:"error",
message:"Deployment #" + f + " is no longer the latest."
}) :(a = k.current, m(a) ? void e.cancelRunningDeployment(a, {
namespace:a.metadata.namespace
}) :void h.addNotification({
type:"error",
message:"Deployment " + d + " is no longer in progress."
}));
});
}
}, k.urlForImageChangeTrigger = function(b) {
var c = a("stripTag")(_.get(b, "imageChangeParams.from.name")), d = _.get(k, "apiObject.metadata.namespace"), e = _.get(b, "imageChangeParams.from.namespace", d);
return g.resourceURL(c, "ImageStream", e);
}, k.navigateToPods = function() {
var a = k.getPods(k.current);
_.isEmpty(a) || g.toPodsForDeployment(k.current, a);
}, k.closeOverlayPanel = function() {
_.set(k, "overlay.panelVisible", !1);
}, k.showOverlayPanel = function(a, b) {
_.set(k, "overlay.panelVisible", !0), _.set(k, "overlay.panelName", a), _.set(k, "overlay.state", b);
};
}
angular.module("openshiftConsole").component("overviewListRow", {
controller:[ "$filter", "$uibModal", "APIService", "BuildsService", "DeploymentsService", "ListRowUtils", "Navigate", "NotificationsService", "gettext", "gettextCatalog", a ],
controllerAs:"row",
bindings:{
apiObject:"<",
current:"<",
previous:"<",
state:"<",
hidePipelines:"<"
},
templateUrl:"views/overview/_list-row.html"
});
}(), function() {
function a(a, b, c, d, e, f, g) {
var h = this;
_.extend(h, e.ui);
var i = a("getErrorDetails"), j = a("serviceInstanceDisplayName"), k = function() {
var a = h.apiObject.spec.serviceClassName;
return _.get(h, [ "state", "serviceClasses", a, "description" ]);
};
h.$doCheck = function() {
h.notifications = e.getNotifications(h.apiObject, h.state), h.displayName = j(h.apiObject, h.state.serviceClasses), h.isBindable = d.isServiceBindable(h.apiObject, h.state.serviceClasses), h.description = k();
}, h.$onChanges = function(a) {
a.bindings && (h.deleteableBindings = _.reject(h.bindings, "metadata.deletionTimestamp"));
}, h.getSecretForBinding = function(a) {
return a && _.get(h, [ "state", "secrets", a.spec.secretName ]);
}, h.actionsDropdownVisible = function() {
return !(!h.isBindable || !g.canI({
resource:"bindings",
group:"servicecatalog.k8s.io"
}, "create")) || (!(_.isEmpty(h.deleteableBindings) || !g.canI({
resource:"bindings",
group:"servicecatalog.k8s.io"
}, "delete")) || !!g.canI({
resource:"instances",
group:"servicecatalog.k8s.io"
}, "delete"));
}, h.closeOverlayPanel = function() {
_.set(h, "overlay.panelVisible", !1);
}, h.showOverlayPanel = function(a, b) {
_.set(h, "overlay.panelVisible", !0), _.set(h, "overlay.panelName", a), _.set(h, "overlay.state", b);
}, h.deprovision = function() {
var a = {
alerts:{
deprovision:{
type:"error",
message:"Service '" + h.apiObject.spec.serviceClassName + "' will be deleted and no longer available."
}
},
detailsMarkup:"Delete Service?",
okButtonText:"Delete",
okButtonClass:"btn-danger",
cancelButtonText:"Cancel"
};
b.open({
animation:!0,
templateUrl:"views/modals/confirm.html",
controller:"ConfirmModalController",
resolve:{
modalConfig:function() {
return a;
}
}
}).result.then(function() {
f.hideNotification("deprovision-service-error"), c["delete"]({
group:"servicecatalog.k8s.io",
resource:"instances"
}, h.apiObject.metadata.name, {
namespace:h.apiObject.metadata.namespace
}, {
propagationPolicy:null
}).then(function() {
f.addNotification({
type:"success",
message:"Successfully deleted " + h.apiObject.metadata.name + "."
});
}, function(a) {
f.addNotification({
id:"deprovision-service-error",
type:"error",
message:"An error occurred while deleting " + h.apiObject.metadata.name + ".",
details:i(a)
});
});
});
};
}
angular.module("openshiftConsole").component("serviceInstanceRow", {
controller:[ "$filter", "$uibModal", "DataService", "BindingService", "ListRowUtils", "NotificationsService", "AuthorizationService", a ],
controllerAs:"row",
bindings:{
apiObject:"<",
state:"<",
bindings:"<"
},
templateUrl:"views/overview/_service-instance-row.html"
});
}(), angular.module("openshiftConsole").component("overviewNetworking", {
controllerAs:"networking",
bindings:{
rowServices:"<",
allServices:"<",
routesByService:"<"
},
templateUrl:"views/overview/_networking.html"
}), angular.module("openshiftConsole").component("overviewPipelines", {
controllerAs:"overviewPipelines",
bindings:{
recentPipelines:"<"
},
templateUrl:"views/overview/_pipelines.html"
}), angular.module("openshiftConsole").component("overviewServiceBindings", {
controllerAs:"$ctrl",
bindings:{
bindings:"<",
bindableServiceInstances:"<",
serviceClasses:"<",
serviceInstances:"<",
secrets:"<",
createBinding:"&"
},
templateUrl:"views/overview/_service-bindings.html"
}), function() {
function a() {
var a = this, b = function() {
var b = _.get(a.binding, "spec.instanceRef.name"), c = _.get(a.serviceInstances, [ b ]), d = _.get(c, "spec.serviceClassName");
a.serviceClass = _.get(a.serviceClasses, [ d ]);
};
this.$onChanges = function(a) {
(a.binding || a.serviceInstances || a.serviceClasses) && b();
};
}
angular.module("openshiftConsole").component("overviewServiceBinding", {
controller:[ a ],
controllerAs:"$ctrl",
bindings:{
binding:"<",
serviceClasses:"<",
serviceInstances:"<",
secrets:"<"
},
templateUrl:"views/overview/_service-binding.html"
});
}(), angular.module("openshiftConsole").directive("istagSelect", [ "DataService", function(a) {
return {
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
});
}) :(b.namespaces.push(c), b.isNamesByNamespace[c] = b.isNamesByNamespace[c].concat(b.istag.imageStream), void (b.isByNamespace[c][b.istag.imageStream] = {
status:{
tags:[ {
tag:b.istag.tagObject.tag
} ]
}
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
});
});
}), b.getTags = function(a) {
b.allowCustomTag && a && !_.find(b.isByNamespace[b.istag.namespace][b.istag.imageStream].status.tags, {
tag:a
}) && (_.remove(b.isByNamespace[b.istag.namespace][b.istag.imageStream].status.tags, function(a) {
return !a.items;
}), b.isByNamespace[b.istag.namespace][b.istag.imageStream].status.tags.unshift({
tag:a
}));
}, b.groupTags = function(a) {
return b.allowCustomTag ? a.items ? "Current Tags" :"New Tag" :"";
};
} ]
};
} ]), angular.module("openshiftConsole").directive("deployImage", [ "$filter", "$q", "$window", "$uibModal", "ApplicationGenerator", "DataService", "ImagesService", "Navigate", "NotificationsService", "ProjectsService", "QuotaService", "TaskList", "SecretsService", "keyValueEditorUtils", "gettext", "gettextCatalog", function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
return {
restrict:"E",
scope:{
project:"=",
context:"=",
isDialog:"="
},
templateUrl:"views/directives/deploy-image.html",
link:function(c) {
function j() {
var a = n.mapEntries(n.compactEntries(c.labels)), b = n.mapEntries(n.compactEntries(c.systemLabels));
return g.getResources({
name:c.app.name,
image:c["import"].name,
namespace:c["import"].namespace,
tag:c["import"].tag || "latest",
ports:c.ports,
volumes:c.volumes,
env:n.compactEntries(c.env),
labels:_.extend(b, a),
pullSecrets:c.pullSecrets
});
}
c.mode = "istag", c.istag = {}, c.app = {}, c.env = [], c.labels = [], c.systemLabels = [ {
name:"app",
value:""
} ], c.pullSecrets = [ {
name:""
} ];
var q = a("orderByDisplayName"), r = a("getErrorDetails"), s = {}, t = function() {
i.hideNotification("deploy-image-list-config-maps-error"), i.hideNotification("deploy-image-list-secrets-error"), _.each(s, function(a) {
!a.id || "error" !== a.type && "warning" !== a.type || i.hideNotification(a.id);
});
}, u = [], v = [], w = {
namespace:c.project.metadata.name
};
c.valueFromObjects = [], f.list("configmaps", w, null, {
errorNotification:!1
}).then(function(a) {
u = q(a.by("metadata.name")), c.valueFromObjects = u.concat(v);
}, function(a) {
403 !== a.code && i.addAlert({
id:"deploy-image-list-config-maps-error",
type:"error",
message:"Could not load config maps.",
details:r(a)
});
}), f.list("secrets", w, null, {
errorNotification:!1
}).then(function(a) {
v = q(a.by("metadata.name")), c.valueFromObjects = v.concat(u);
var b = m.groupSecretsByType(a), d = _.mapValues(b, function(a) {
return _.map(a, "metadata.name");
});
c.secretsByType = _.each(d, function(a) {
a.unshift("");
});
}, function(a) {
403 !== a.code && i.addAlert({
id:"deploy-image-list-secrets-error",
type:"error",
message:"Could not load secrets.",
details:r(a)
});
});
var x = a("stripTag"), y = a("stripSHA"), z = a("humanizeKind"), A = function(a) {
return a.length > 24 ? a.substring(0, 24) :a;
}, B = function() {
var a = _.last(c["import"].name.split("/"));
return a = y(a), a = x(a), a = A(a);
};
c.findImage = function() {
c.loading = !0, g.findImage(c.imageName, c.context).then(function(a) {
if (c["import"] = a, c.loading = !1, "Success" !== _.get(a, "result.status")) return void (c["import"].error = _.get(a, "result.message", "An error occurred finding the image."));
c.forms.imageSelection.imageName.$setValidity("imageLoaded", !0);
var b = c["import"].image;
b && (c.app.name = B(), c.runsAsRoot = g.runsAsRoot(b), c.ports = e.parsePorts(b), c.volumes = g.getVolumes(b), c.createImageStream = !0);
}, function(b) {
c["import"].error = a("getErrorDetails")(b) || "An error occurred finding the image.", c.loading = !1;
});
}, c.$watch("app.name", function() {
c.nameTaken = !1, _.set(_.find(c.systemLabels, {
name:"app"
}), "value", c.app.name);
}), c.$watch("mode", function(a, b) {
a !== b && (delete c["import"], c.istag = {}, "dockerImage" === a ? c.forms.imageSelection.imageName.$setValidity("imageLoaded", !1) :c.forms.imageSelection.imageName.$setValidity("imageLoaded", !0));
}), c.$watch("istag", function(b, d) {
if (b !== d) {
if (!b.namespace || !b.imageStream || !b.tagObject) return void delete c["import"];
var h, i = _.get(b, "tagObject.items[0].image");
c.app.name = A(b.imageStream), c["import"] = {
name:b.imageStream,
tag:b.tagObject.tag,
namespace:b.namespace
}, i && (h = b.imageStream + "@" + i, c.loading = !0, f.get("imagestreamimages", h, {
namespace:b.namespace
}).then(function(a) {
c.loading = !1, c["import"].image = a.image, c.ports = e.parsePorts(a.image), c.volumes = g.getVolumes(a.image), c.runsAsRoot = !1;
}, function(b) {
c["import"].error = a("getErrorDetails")(b) || "An error occurred.", c.loading = !1;
}));
}
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
};
}), d = d.concat(_.map(b.success, function(a) {
return {
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
return {
alerts:a,
message:"Problems were detected while checking your application configuration.",
okButtonText:"Create Anyway",
okButtonClass:"btn-danger",
cancelButtonText:"Cancel"
};
}
}
});
b.result.then(E);
}, G = function(a) {
s = a.quotaAlerts || [];
var b = _.filter(s, {
type:"error"
});
c.nameTaken || b.length ? (c.disableInputs = !1, _.each(s, function(a) {
a.id = _.uniqueId("deploy-image-alert-"), i.addNotification(a);
})) :s.length ? (F(s), c.disableInputs = !1) :E();
};
c.create = function() {
c.disableInputs = !0, t(), C = j();
var a = e.ifResourcesDontExist(C, c.project.metadata.name), b = k.getLatestQuotaAlerts(C, c.context), d = function(a) {
return c.nameTaken = a.nameTaken, b;
};
a.then(d, d).then(G, G);
}, c.$on("newAppFromDeployImage", c.create), c.$on("$destroy", t);
}
};
} ]), angular.module("openshiftConsole").directive("selector", function() {
return {
restrict:"E",
scope:{
selector:"="
},
templateUrl:"views/directives/selector.html"
};
}), angular.module("openshiftConsole").directive("selectContainers", function() {
return {
restrict:"E",
scope:{
containers:"=ngModel",
template:"=podTemplate",
required:"=ngRequired",
helpText:"@?"
},
templateUrl:"views/directives/select-containers.html",
controller:[ "$scope", function(a) {
a.containers = a.containers || {}, a.$watch("containers", function(b) {
a.containerSelected = _.some(b, function(a) {
return a;
});
}, !0);
} ]
};
}), angular.module("openshiftConsole").directive("buildHooks", function() {
return {
restrict:"E",
templateUrl:"views/directives/build-hooks.html",
scope:{
build:"="
}
};
}), angular.module("openshiftConsole").directive("pauseRolloutsCheckbox", [ "APIService", function(a) {
return {
restrict:"E",
scope:{
deployment:"=",
disabled:"=ngDisabled",
alwaysVisible:"="
},
templateUrl:"views/directives/pause-rollouts-checkbox.html",
link:function(b) {
var c = function() {
if (!b.deployment) return !1;
var c = a.objectToResourceGroupVersion(b.deployment);
return "deploymentconfigs" === c.resource && !c.group;
};
b.$watch("deployment.spec.triggers", function(a) {
b.missingConfigChangeTrigger = c() && !_.some(a, {
type:"ConfigChange"
});
}, !0);
}
};
} ]), function() {
angular.module("openshiftConsole").directive("keyValueEditor", [ "$routeParams", "$timeout", "$filter", "gettextCatalog", "keyValueEditorConfig", "keyValueEditorUtils", function(a, b, c, d, e, f) {
var g = c("humanizeKind"), h = c("canI"), i = 1e3;
return {
restrict:"AE",
scope:{
keyMinlength:"@",
keyMaxlength:"@",
valueMinlength:"@",
valueMaxlength:"@",
entries:"=",
keyPlaceholder:"@",
valuePlaceholder:"@",
keyValidator:"@",
keyValidatorRegex:"=",
valueValidator:"@",
valueValidatorRegex:"=",
keyValidatorError:"@",
keyValidatorErrorTooltip:"@",
keyValidatorErrorTooltipIcon:"@",
valueValidatorError:"@",
valueValidatorErrorTooltip:"@",
valueValidatorErrorTooltipIcon:"@",
valueIconTooltip:"@",
valueFromSelectorOptions:"=",
cannotAdd:"=?",
cannotSort:"=?",
cannotDelete:"=?",
isReadonly:"=?",
isReadonlyValue:"=?",
isReadonlyKeys:"=?",
addRowLink:"@",
addRowWithSelectorsLink:"@",
showHeader:"=?",
allowEmptyKeys:"=?",
keyRequiredError:"@"
},
templateUrl:"views/directives/key-value-editor.html",
link:function(a, c, f) {
var h;
a.validation = {
key:a.keyValidator,
val:a.valueValidator
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
name:b.metadata.name
}, delete a.valueFrom.secretKeyRef) :"Secret" === b.kind && (a.valueFrom.secretKeyRef = {
name:b.metadata.name
}, delete a.valueFrom.configMapKeyRef), delete a.valueFrom.key;
}, a.valueFromKeySelected = function(a, b) {
return a.valueFrom.configMapKeyRef ? void (a.valueFrom.configMapKeyRef.key = b) :a.valueFrom.secretKeyRef ? void (a.valueFrom.secretKeyRef.key = b) :void 0;
}, angular.extend(a, {
keyMinlength:e.keyMinlength || f.keyMinlength,
keyMaxlength:e.keyMaxlength || f.keyMaxlength,
valueMinlength:e.valueMinlength || f.valueMinlength,
valueMaxlength:e.valueMaxlength || f.valueMaxlength,
keyValidator:e.keyValidator || f.keyValidator,
valueValidator:e.valueValidator || f.valueValidator,
keyValidatorError:e.keyValidatorError || f.keyValidatorError,
valueValidatorError:e.valueValidatorError || f.valueValidatorError,
keyRequiredError:e.keyRequiredError || f.keyRequiredError,
keyValidatorErrorTooltip:e.keyValidatorErrorTooltip || f.keyValidatorErrorTooltip,
keyValidatorErrorTooltipIcon:e.keyValidatorErrorTooltipIcon || f.keyValidatorErrorTooltipIcon,
valueValidatorErrorTooltip:e.valueValidatorErrorTooltip || f.valueValidatorErrorTooltip,
valueValidatorErrorTooltipIcon:e.valueValidatorErrorTooltipIcon || f.valueValidatorErrorTooltipIcon,
keyPlaceholder:e.keyPlaceholder || f.keyPlaceholder,
valuePlaceholder:e.valuePlaceholder || f.valuePlaceholder
});
},
controller:[ "$scope", function(b) {
var c = [], d = [], e = i++, g = h("secrets", "get"), j = h("configmaps", "get");
angular.extend(b, {
namespace:a.project,
unique:e,
forms:{},
placeholder:f.newEntry(),
setFocusKeyClass:"key-value-editor-set-focus-key-" + e,
setFocusValClass:"key-value-editor-set-focus-value-" + e,
uniqueForKey:f.uniqueForKey,
uniqueForValue:f.uniqueForValue,
dragControlListeners:{
accept:function(a, b) {
return a.itemScope.sortableScope.$id === b.$id;
},
orderChanged:function() {
b.forms.keyValueEditor.$setDirty();
}
},
deleteEntry:function(a, c) {
b.entries.splice(a, c), !b.entries.length && b.addRowLink && f.addEntry(b.entries), b.forms.keyValueEditor.$setDirty();
},
isReadonlySome:function(a) {
return _.contains(c, a);
},
cannotDeleteSome:function(a) {
return _.contains(d, a);
},
onAddRow:function() {
f.addEntry(b.entries), f.setFocusOn("." + b.setFocusKeyClass);
},
onAddRowWithSelectors:function() {
f.addEntryWithSelectors(b.entries), f.setFocusOn("." + b.setFocusKeyClass);
},
isValueFromReadonly:function(a) {
return b.isReadonlyAny || a.isReadonlyValue || a.refType && !a.selectedValueFrom || !b.valueFromSelectorOptions.length;
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
scope:{
dirty:"=",
message:"="
},
link:function(d) {
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
g - c < 50 ? (_.set(window, "OPENSHIFT_CONSTANTS.CONFIRM_DIALOG_BLOCKED", !0), a.warn("Confirm on exit prompt appears to have been blocked by the browser.")) :b.preventDefault();
}
}
});
d.$on("$destroy", function() {
$(window).off("beforeunload", f), g && g();
});
}
}
};
} ]), angular.module("openshiftConsole").filter("duration", [ "gettext", "gettextCatalog", function(a, b) {
return function(c, d, e, f) {
function g(a, b, c) {
if (0 !== a) return 1 === a ? void (e ? j.push(b) :j.push("1 " + b)) :void j.push(a + " " + c);
}
if (!c) return c;
f = f || 2, d = d || new Date();
var h = moment(d).diff(c);
h < 0 && (h = 0);
var i = moment.duration(h), j = [], k = i.years(), l = i.months(), m = i.days(), n = i.hours(), o = i.minutes(), p = i.seconds();
return g(k, b.getString(a("year")), b.getString(a("years"))), g(l, b.getString(a("month")), b.getString(a("months"))), g(m, b.getString(a("day")), b.getString(a("days"))), g(n, b.getString(a("hour")), b.getString(a("hours"))), g(o, b.getString(a("minute")), b.getString(a("minutes"))), g(p, b.getString(a("second")), b.getString(a("seconds"))), 1 === j.length && p && 1 === f ? e ? "minute" :"1 minute" :(0 === j.length && j.push("0 seconds"), j.length > f && (j.length = f), j.join(", "));
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
return b ? (c = c || new Date(), a(moment(c).diff(b))) :b;
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
return d ? d.split(/\s*,\s*/) :[];
};
} ]).filter("imageStreamLastUpdated", function() {
return function(a) {
var b = a.metadata.creationTimestamp, c = moment(b);
return angular.forEach(a.status.tags, function(a) {
if (!_.isEmpty(a.items)) {
var d = moment(_.first(a.items).created);
d.isAfter(c) && (c = d, b = _.first(a.items).created);
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
return c ? c :"";
};
} ]).filter("iconClass", [ "annotationFilter", function(a) {
return function(b, c) {
var d = a(b, "iconClass");
return d ? d :"template" === c ? "fa fa-clone" :"";
};
} ]).filter("imageName", function() {
return function(a) {
return a ? a.contains(":") ? a.split(":")[1] :a :"";
};
}).filter("imageStreamName", function() {
return function(a) {
if (!a) return "";
var b, c = a.split("@")[0], d = c.split("/");
return 3 === d.length ? (b = d[2].split(":"), d[1] + "/" + b[0]) :2 === d.length ? c :1 === d.length ? (b = c.split(":"), b[0]) :void 0;
};
}).filter("stripTag", function() {
return function(a) {
return a ? a.split(":")[0] :a;
};
}).filter("stripSHA", function() {
return function(a) {
return a ? a.split("@")[0] :a;
};
}).filter("imageSHA", function() {
return function(a) {
if (!a) return a;
var b = a.split("@");
return b.length > 1 ? b[1] :"";
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
resource:"buildconfigs/webhooks/" + d + "/" + c.toLowerCase(),
name:b,
namespace:e
});
};
} ]).filter("isWebRoute", [ "routeHostFilter", function(a) {
return function(b) {
return !!a(b, !0) && "Subdomain" !== _.get(b, "spec.wildcardPolicy");
};
} ]).filter("routeWebURL", [ "routeHostFilter", function(a) {
return function(b, c, d) {
var e = b.spec.tls && "" !== b.spec.tls.tlsTerminationType ? "https" :"http", f = e + "://" + (c || a(b));
return b.spec.path && !d && (f += b.spec.path), f;
};
} ]).filter("routeLabel", [ "RoutesService", "routeHostFilter", "routeWebURLFilter", "isWebRouteFilter", function(a, b, c, d) {
return function(e, f, g) {
if (d(e)) return c(e, f, g);
var h = f || b(e);
return h ? ("Subdomain" === _.get(e, "spec.wildcardPolicy") && (h = "*." + a.getSubdomain(e)), g ? h :(e.spec.path && (h += e.spec.path), h)) :"<unknown host>";
};
} ]).filter("parameterPlaceholder", [ "gettext", "gettextCatalog", function(a, b) {
return function(c) {
return c.generate ? b.getString(a("(generated if empty)")) :"";
};
} ]).filter("parameterValue", function() {
return function(a) {
return !a.value && a.generate ? "(generated)" :a.value;
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
reason:"Unknown",
pod:h.metadata.name,
message:"The state of the pod could not be obtained. This is typically due to an error communicating with the host of the pod."
}), a(h) && i.push({
reason:"Stuck",
pod:h.metadata.name,
message:"The pod has been stuck in the pending state for more than five minutes."
}), "Running" === h.status.phase && h.status.containerStatuses && _.each(h.status.containerStatuses, function(a) {
return !!a.state && (c(a) && (e(h) ? i.push({
severity:"error",
reason:"NonZeroExitTerminatingPod",
pod:h.metadata.name,
container:a.name,
message:g.getString("The container {{name}} did not stop cleanly when terminated (exit code {{exitCode}}).", {
name:a.name,
exitCode:a.state.terminated.exitCode
})
}) :i.push({
severity:"warning",
reason:"NonZeroExit",
pod:h.metadata.name,
container:a.name,
message:g.getString("The container {{name}} failed (exit code {{exitCode}}).", {
name:a.name,
exitCode:a.state.terminated.exitCode
})
})), b(a) && i.push({
severity:"error",
reason:"Looping",
pod:h.metadata.name,
container:a.name,
message:g.getString(f("The container {{name}} is crashing frequently. It must wait before it will be restarted again."), {
name:a.name
})
}), void (d(a) && i.push({
severity:"warning",
reason:"Unprepared",
pod:h.metadata.name,
container:a.name,
message:g.getString(f("The container {{name}} has been running for more than five minutes and has not passed its readiness check."), {
name:a.name
})
})));
}), i.length > 0 ? i :null;
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
return angular.isString(b) ? a.projectOverviewURL(b) :angular.isObject(b) ? a.projectOverviewURL(b.metadata && b.metadata.name) :a.projectOverviewURL("");
};
} ]).filter("createFromSourceURL", function() {
return function(a, b) {
var c = URI.expand("project/{project}/catalog/images{?q*}", {
project:a,
q:{
builderfor:b
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
return b.kind ? b.id ? b.kind + " " + b.id :b.kind :b.id;
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
return d.status.details ? d.status.details.causes :[];

default:
return Logger.error('Unknown API version "' + d.apiVersion + '" in encoded deployment config for deployment ' + b.metadata.name), d.status && d.status.details && d.status.details.causes ? d.status.details.causes :[];
}
} catch (e) {
return Logger.error("Failed to parse encoded deployment config", e), [];
}
};
} ]).filter("desiredReplicas", function() {
return function(a) {
return a && a.spec ? void 0 === a.spec.replicas ? 1 :a.spec.replicas :0;
};
}).filter("serviceImplicitDNSName", function() {
return function(a) {
return a && a.metadata && a.metadata.name && a.metadata.namespace ? a.metadata.name + "." + a.metadata.namespace + ".svc" :"";
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
return !b(c) || "Complete" === d && c.spec.replicas > 0 ? "Active" :d;
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
return !d || c ? d :d.replace(/\/consoleText$/, "/console");
};
} ]).filter("jenkinsBuildURL", [ "annotationFilter", "jenkinsLogURLFilter", function(a, b) {
return function(b) {
return a(b, "jenkinsBuildURL");
};
} ]).filter("jenkinsInputURL", [ "jenkinsBuildURLFilter", function(a) {
return function(b) {
var c = a(b);
return c ? new URI(c).segment("/input/").toString() :null;
};
} ]).filter("buildLogURL", [ "isJenkinsPipelineStrategyFilter", "jenkinsLogURLFilter", "navigateResourceURLFilter", function(a, b, c) {
return function(d) {
if (a(d)) return b(d);
var e = c(d);
return e ? new URI(e).addSearch("tab", "logs").toString() :null;
};
} ]).filter("jenkinsfileLink", [ "isJenkinsPipelineStrategyFilter", "githubLinkFilter", function(a, b) {
return function(c) {
if (!a(c) || _.has(c, "spec.strategy.jenkinsPipelineStrategy.jenkinsfile")) return "";
var d = _.get(c, "spec.source.git.uri");
if (!d) return "";
var e = _.get(c, "spec.source.git.ref"), f = _.get(c, "spec.strategy.jenkinsPipelineStrategy.jenkinsfilePath", "Jenkinsfile"), g = _.get(c, "spec.source.contextDir");
g && (f = URI.joinPaths(g, f).path());
var h = b(d, e, f);
return URI(h).is("url") ? h :"";
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
buildconfigs:"bc",
deploymentconfigs:"dc",
horizontalpodautoscalers:"hpa",
imagestreams:"is",
imagestreamtags:"istag",
replicasets:"rs",
replicationcontrollers:"rc",
services:"svc"
};
return function(a) {
return b[a] || a;
};
} ]).filter("humanizeQuotaResource", function() {
return function(a, b) {
if (!a) return a;
var c = {
configmaps:"Config Maps",
cpu:"CPU (Request)",
"limits.cpu":"CPU (Limit)",
"limits.memory":"Memory (Limit)",
memory:"Memory (Request)",
"openshift.io/imagesize":"Image Size",
"openshift.io/imagestreamsize":"Image Stream Size",
"openshift.io/projectimagessize":"Project Image Size",
persistentvolumeclaims:"Persistent Volume Claims",
"requests.storage":"Storage (Request)",
pods:"Pods",
replicationcontrollers:"Replication Controllers",
"requests.cpu":"CPU (Request)",
"requests.memory":"Memory (Request)",
resourcequotas:"Resource Quotas",
secrets:"Secrets",
services:"Services",
"services.loadbalancers":"Service Load Balancers",
"services.nodeports":"Service Node Ports"
}, d = {
configmaps:"config maps",
cpu:"CPU (request)",
"limits.cpu":"CPU (limit)",
"limits.memory":"memory (limit)",
memory:"memory (request)",
"openshift.io/imagesize":"image size",
"openshift.io/imagestreamsize":"image stream size",
"openshift.io/projectimagessize":"project image size",
persistentvolumeclaims:"persistent volume claims",
"requests.storage":"storage (request)",
replicationcontrollers:"replication controllers",
"requests.cpu":"CPU (request)",
"requests.memory":"memory (request)",
resourcequotas:"resource quotas",
"services.loadbalancers":"service load balancers",
"services.nodeports":"service node ports"
};
return b ? c[a] || a :d[a] || a;
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
return f ? b(f.port, f.targetPort, f.protocol) :angular.isString(e) ? b(e, null) :b(null, e);
};
} ]).filter("podStatus", function() {
return function(a) {
if (!a || !a.metadata.deletionTimestamp && !a.status) return "";
if (a.metadata.deletionTimestamp) return "Terminating";
var b = a.status.reason || a.status.phase;
return angular.forEach(a.status.containerStatuses, function(a) {
var c, d, e = _.get(a, "state.waiting.reason") || _.get(a, "state.terminated.reason");
return e ? void (b = e) :(c = _.get(a, "state.terminated.signal")) ? void (b = "Signal: " + c) :(d = _.get(a, "state.terminated.exitCode"), void (d && (b = "Exit Code: " + d)));
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
type:b
}) :null;
};
}).filter("routeHost", function() {
return function(a, b) {
if (!_.get(a, "status.ingress")) return _.get(a, "spec.host");
if (!a.status.ingress) return a.spec.host;
var c = null;
return angular.forEach(a.status.ingress, function(a) {
_.some(a.conditions, {
type:"Admitted",
status:"True"
}) && (!c || c.lastTransitionTime > a.lastTransitionTime) && (c = a);
}), c ? c.host :b ? null :a.spec.host;
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
return c && b.isRequestCalculated("cpu", d) ? a.convertRequestPercentToLimit(c, d) :c;
};
} ]).filter("podTemplate", function() {
return function(a) {
return a ? "Pod" === a.kind ? a :_.get(a, "spec.template") :null;
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
Terminating:c.getString(b("Affects pods that have an active deadline. These pods usually include builds, deployers, and jobs.")),
NotTerminating:c.getString(b("Affects pods that do not have an active deadline. These pods usually include your applications.")),
BestEffort:c.getString(b("Affects pods that do not have resource limits set. These pods have a best effort quality of service.")),
NotBestEffort:c.getString(b("Affects pods that have at least one resource limit set. These pods do not have a best effort quality of service."))
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
return 2 !== d.length ? (Logger.warn('Invalid debug.openshift.io/source-resource annotation value "' + c + '"'), "") :d[1];
};
} ]).filter("entrypoint", function() {
var a = function(a) {
return _.isArray(a) ? a.join(" ") :a;
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
return f ? "<image-entrypoint> " + f :null;
};
}).filter("unidleTargetReplicas", [ "annotationFilter", function(a) {
return function(b, c) {
var d;
if (b) try {
d = parseInt(a(b, "idledPreviousScale"));
} catch (e) {
Logger.error("Unable to parse previous scale annotation as a number.");
}
return d || _.get(_.first(c), "spec.minReplicas") || 1;
};
} ]).filter("lastDeploymentRevision", [ "annotationFilter", function(a) {
return function(b) {
if (!b) return "";
var c = a(b, "deployment.kubernetes.io/revision");
return c ? "#" + c :"Unknown";
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
name:d.name
});
return c(f) ? "read-only" :_.get(f, "persistentVolumeClaim.readOnly") ? "read-only" :b.getString(a(d.readOnly ? "read-only" :"read-write"));
};
} ]).filter("managesRollouts", [ "APIService", function(a) {
return function(b) {
if (!b) return !1;
var c = a.objectToResourceGroupVersion(b);
return "deploymentconfigs" === c.resource && !c.group || "deployments" === c.resource && "extensions" === c.group;
};
} ]).filter("hasAlternateBackends", function() {
return function(a) {
var b = _.get(a, "spec.alternateBackends", []);
return !_.isEmpty(b);
};
}).filter("serviceInstanceDisplayName", function() {
return function(a, b) {
var c = a.spec.serviceClassName, d = a.metadata.name, e = _.get(b, [ c, "externalMetadata", "displayName" ]);
return e || c || d;
};
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
verbs:[ "update" ]
}, {
group:"extensions",
resource:"deployments",
verbs:[ "create", "update" ]
} ],
deploymentConfigs:[ {
group:"autoscaling",
resource:"horizontalpodautoscalers",
verbs:[ "create", "update" ]
}, {
group:"",
resource:"deploymentconfigs",
verbs:[ "create", "update" ]
} ],
horizontalPodAutoscalers:[ {
group:"autoscaling",
resource:"horizontalpodautoscalers",
verbs:[ "update", "delete" ]
} ],
imageStreams:[ {
group:"",
resource:"imagestreams",
verbs:[ "update", "delete" ]
} ],
persistentVolumeClaims:[ {
group:"",
resource:"persistentvolumeclaims",
verbs:[ "update", "delete" ]
} ],
pods:[ {
group:"",
resource:"pods",
verbs:[ "update", "delete" ]
}, {
group:"",
resource:"deploymentconfigs",
verbs:[ "update" ]
} ],
replicaSets:[ {
group:"autoscaling",
resource:"horizontalpodautoscalers",
verbs:[ "create", "update" ]
}, {
group:"extensions",
resource:"replicasets",
verbs:[ "update", "delete" ]
} ],
replicationControllers:[ {
group:"",
resource:"replicationcontrollers",
verbs:[ "update", "delete" ]
} ],
routes:[ {
group:"",
resource:"routes",
verbs:[ "update", "delete" ]
} ],
services:[ {
group:"",
resource:"services",
verbs:[ "update", "create", "delete" ]
} ],
secrets:[ {
group:"",
resource:"secrets",
verbs:[ "update", "delete" ]
} ],
projects:[ {
group:"",
resource:"projects",
verbs:[ "delete", "update" ]
} ],
statefulsets:[ {
group:"apps",
resource:"statefulsets",
verbs:[ "update", "delete" ]
} ]
};
return function(c) {
return _.some(b[c], function(b) {
return _.some(b.verbs, function(c) {
return a({
resource:b.resource,
group:b.group
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
return null === a ? b :("string" != typeof a && (a = String(a)), 0 === a.trim().length ? b :a);
};
}).filter("keys", function() {
return _.keys;
}).filter("usageValue", function() {
return function(a) {
if (!a) return a;
var b = /(-?[0-9\.]+)\s*(.*)/.exec(a);
if (!b) return a;
var c = b[1];
c = c.indexOf(".") >= 0 ? parseFloat(c) :parseInt(b[1]);
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
return a ? a + "B" :a;

case "cpu":
case "limits.cpu":
case "requests.cpu":
"m" === a && (a = "milli");
var d = c ? "core" :"cores";
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
return b ? a + " " + b :a;
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
return d ? b.getString(a("Memory")) :b.getString(a("memory"));

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
return "completed" !== a.status ? a.titles.started :a.hasErrors ? a.titles.failure :a.titles.success;
};
}).filter("httpHttps", function() {
return function(a) {
return a ? "https://" :"http://";
};
}).filter("isGithubLink", function() {
var a = /^(?:https?:\/\/|git:\/\/|git\+ssh:\/\/|git\+https:\/\/)?(?:[^@]+@)?github\.com[:\/]([^\/]+\/[^\/]+?)(\/|(?:\.git(#.*)?))?$/;
return function(b) {
return b ? a.test(b) :b;
};
}).filter("githubLink", function() {
return function(a, b, c) {
var d = a.match(/^(?:https?:\/\/|git:\/\/|git\+ssh:\/\/|git\+https:\/\/)?(?:[^@]+@)?github\.com[:\/]([^\/]+\/[^\/]+?)(\/|(?:\.git(#.*)?))?$/);
return d && (a = "https://github.com/" + d[1], c && "/" === c.charAt(0) && (c = c.substring(1)), c ? (c = encodeURIComponent(c), c = c.replace("%2F", "/"), a += "/tree/" + encodeURIComponent(b || "master") + "/" + c) :b && "master" !== b && (a += "/tree/" + encodeURIComponent(b))), a;
};
}).filter("yesNo", function() {
return function(a) {
return a ? "Yes" :"No";
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
return a ? a.replace(/^sha256:/, "") :a;
};
}).filter("limitToOrAll", [ "limitToFilter", function(a) {
return function(b, c) {
return isNaN(c) ? b :a(b, c);
};
} ]).filter("getErrorDetails", [ "gettext", "gettextCatalog", function(a, b) {
return function(c) {
var d = c.data || {};
if (d.message) return b.getString(a("Reason:")) + " " + d.message;
var e = c.status || d.status;
return e ? b.getString(a("Status:")) + " " + e :"";
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
apiVersion:e
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
d = e ? "RWO (Read-Write-Once)" :"Read-Write-Once";
break;

case "ReadOnlyMany":
d = e ? "ROX (Read-Only-Many)" :"Read-Only-Many";
break;

case "ReadWriteMany":
d = e ? "RWX (Read-Write-Many)" :"Read-Write-Many";
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
return null === a || void 0 === a ? a :_.round(100 * Number(a), b) + "%";
};
}).filter("filterCollection", function() {
return function(a, b) {
return a && b ? _.filter(a, b) :a;
};
}).filter("isAbsoluteURL", function() {
return function(a) {
if (!a) return !1;
var b = new URI(a), c = b.protocol();
return b.is("absolute") && ("http" === c || "https" === c);
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
} ]), angular.module("openshiftConsole").factory("logLinks", [ "$anchorScroll", "$document", "$location", "$window", function(a, b, c, d) {
var e = function(a) {
a ? a.scrollTop = 0 :window.scrollTo(null, 0);
}, f = function(a) {
a ? a.scrollTop = a.scrollHeight :window.scrollTo(0, document.body.scrollHeight - document.body.clientHeight);
}, g = function(b, d) {
d.preventDefault(), d.stopPropagation(), c.hash(b), a(b);
}, h = function(a, b) {
if (b) return void d.open(b, "_blank");
var c = {
view:"chromeless"
};
a && a.container && (c.container = a.container), c = _.flatten([ c ]);
var e = new URI();
_.each(c, function(a) {
e.addSearch(a);
}), d.open(e.toString(), "_blank");
}, i = _.template([ "/#/discover?", "_g=(", "time:(", "from:now-1w,", "mode:relative,", "to:now", ")", ")", "&_a=(", "columns:!(kubernetes.container_name,message),", "index:'project.<%= namespace %>.<%= namespaceUid %>.*',", "query:(", "query_string:(", "analyze_wildcard:!t,", 'query:\'kubernetes.pod_name:"<%= podname %>" AND kubernetes.namespace_name:"<%= namespace %>"\'', ")", "),", "sort:!('@timestamp',desc)", ")", "#console_container_name=<%= containername %>", "&console_back_url=<%= backlink %>" ].join("")), j = function(a) {
return i(a);
};
return {
scrollTop:e,
scrollBottom:f,
scrollTo:g,
chromelessLink:h,
archiveUri:j
};
} ]), function() {
var a = "javaLinkExtension";
angular.module(a, [ "openshiftConsole" ]).run([ "AuthService", "BaseHref", "DataService", "extensionRegistry", function(a, b, c, d) {
var e = [ "<div row ", 'ng-show="item.url" ', 'class="icon-row" ', 'title="Connect to container">', '<div class="icon-wrap">', '<i class="fa fa-share" aria-hidden="true"></i>', "</div>", "<div flex>", '<a ng-click="item.onClick($event)" ', 'ng-href="item.url">', "Open Java Console", "</a>", "</div>", "</div>" ].join(""), f = function(a, b, d) {
return new URI(c.url({
resource:"pods/proxy",
name:[ "https", b, d || "" ].join(":"),
namespace:a
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
jolokiaUrl:l,
title:f,
returnTo:e
});
window.location.href = h.toString();
};
return {
type:"dom",
node:e,
onClick:m,
url:l
};
}
}
}));
} ]), hawtioPluginLoader.addModule(a);
}(), angular.module("openshiftConsole").run([ "extensionRegistry", function(a) {
a.add("nav-help-dropdown", function() {
var a = [];
if (a.push({
type:"dom",
node:'<li><a target="_blank" href="{{\'default\' | helpLink}}">Documentation</a></li>'
}), _.get(window, "OPENSHIFT_CONSTANTS.ENABLE_TECH_PREVIEW_FEATURE.service_catalog_landing_page")) {
var b = _.get(window, "OPENSHIFT_CONSTANTS.GUIDED_TOURS.landing_page_tour");
b && b.enabled && b.steps && a.push({
type:"dom",
node:'<li><a href="./?startTour=true">Tour Home Page</a></li>'
});
}
return a.push({
type:"dom",
node:'<li><a href="command-line">Command Line Tools</a></li>'
}), a.push({
type:"dom",
node:'<li><a href="about">About</a></li>'
}), a;
});
} ]), angular.module("openshiftConsole").run([ "extensionRegistry", "$rootScope", "AuthService", "gettext", "gettextCatalog", function(a, b, c, d, e) {
a.add("nav-user-dropdown", function() {
var a = d("Log out");
a = e.getString(a), b.user.fullName && b.user.fullName !== b.user.metadata.name && (a += " (" + b.user.metadata.name + ")");
var f = c.UserStore().getToken(), g = "";
return b.user.metadata.annotations && b.user.metadata.annotations.manager && (g += '<li><a href="' + window.DMOS_ADDRESS + "?t=" + f + '">集群管理</a></li>'), [ {
type:"dom",
node:g + '<li><a href="logout">' + _.escape(a) + "</a></li>"
} ];
});
} ]), angular.module("openshiftConsole").run([ "extensionRegistry", "Constants", function(a, b) {
a.add("nav-dropdown-mobile", _.spread(function(a) {
var c = [], d = b.APP_LAUNCHER_NAVIGATION;
return _.each(d, function(a) {
var b = {
type:"dom",
node:[ "<li>", '<a href="' + _.escape(a.href) + '">', '<span class="' + _.escape(a.iconClass) + ' fa-fw" aria-hidden="true"></span> ' + _.escape(a.title), "</a>", "</li>" ].join("")
};
c.push(b);
}), c = c.concat([ {
type:"dom",
node:[ "<li>", "<a href=\"{{'default' | helpLink}}\">", '<span class="fa fa-book fa-fw" aria-hidden="true"></span> Documentation', "</a>", "</li>" ].join("")
}, {
type:"dom",
node:[ "<li>", '<a href="command-line">', '<span class="fa fa-terminal" aria-hidden="true"></span> Command Line Tools', "</a>", "</li>" ].join("")
}, {
type:"dom",
node:[ "<li>", '<a href="about">', '<span class="pficon pficon-info fa-fw" aria-hidden="true"></span> About', "</a>", "</li>" ].join("")
}, {
type:"dom",
node:_.template([ "<li>", '<a href="logout">', '<span class="pficon pficon-user fa-fw" aria-hidden="true"></span>', 'Log out <span class="username"><%= userName %></span>', "</a>", "</li>" ].join(""))({
userName:a ? a.fullName || a.metadata.name :""
})
} ]);
}));
} ]);