import pageTitle from "ember-page-title/helpers/page-title";
import t from "ember-intl/helpers/t";
import Callout from "../components/callout.gjs";
import { LinkTo } from "@ember/routing";
<template>{{pageTitle (t "menu.home")}}
<div class="index-container">
<Callout class="landing-callout" @subtitle="{{t "index.subtitle"}}">{{t "index.title" htmlSafe=true}}</Callout>
<p class="intro">{{t "index.welcome"}}</p>
<LinkTo class="button button-index" @route="contribute">{{t "index.button"}}</LinkTo>
</div>
{{!-- {{svg-jar 'landscape-illustration' class="large-illustration"}} --}}
</template>
