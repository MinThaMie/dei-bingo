import pageTitle from "ember-page-title/helpers/page-title";
import t from "ember-intl/helpers/t";
import Callout from "../components/callout.gjs";
import FaIcon from "@fortawesome/ember-fontawesome/components/fa-icon";
import { Input } from "@ember/component";
import svgJar from "ember-svg-jar/helpers/svg-jar";
<template>{{pageTitle (t "menu.glossary")}}
<Callout @subtitle={{t "glossary.subtitle"}}>{{t "glossary.title"}}</Callout>

<p class="intro">{{t "glossary.welcome"}}</p>
<div class="search">
  <div class="search-bar">
    <FaIcon class="search-icon" @icon="search" />
    <Input @type="search" @value={{@controller.query}} class="search-input light" placeholder={{t "glossary.placeholder"}} aria-label={{t "glossary.search"}} />
  </div>
</div>
<div class="definition-container">
  {{#each @controller.results as |item|}}
    {{!-- template-lint-disable no-triple-curlies --}}
    <div class="row"><div class="caps">{{item.caps}}</div><div><h3 class="glossary-title">{{t item.title}}<a href="#{{item.link}}" aria-label="{{t "glossary.go-to"}} {{t item.title}}" id={{item.link}}>{{svgJar "link" class="link-icon"}}</a></h3><p class="definition">{{t item.definition htmlSafe=true}}</p></div></div>
  {{/each}}
</div></template>
