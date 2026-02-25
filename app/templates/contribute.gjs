import pageTitle from "ember-page-title/helpers/page-title";
import t from "ember-intl/helpers/t";
import Callout from "../components/callout.gjs";
import blobcolor from "../helpers/blobcolor.js";
import { on } from "@ember/modifier";
import { fn } from "@ember/helper";
import svgJar from "ember-svg-jar/helpers/svg-jar";
<template>{{pageTitle (t "menu.contribute")}}
<Callout @subtitle={{t "contribute.subtitle"}}>{{t "contribute.title"}}</Callout>

<p class="intro">{{t "contribute.welcome"}}</p>

<h2 class="cards-title">{{t "contribute.my-roles"}}</h2>
<div class="bingo-card">
  {{#unless @controller.roles}}<p class="intro no-roles">{{t "contribute.no-roles"}}</p>{{/unless}}
  {{#each @controller.roles as |item|}}
    <button type="button" style={{blobcolor (t item.title)}} class="cell {{if item.completed "completed"}}" {{on "click" (fn @controller.selectSquare item)}}>
      {{svgJar item.icon class="illustration"}}
      <br><p class="title">{{t item.title}}</p>{{t item.description}}</button>
  {{/each}}
</div>

<h2 class="cards-title">{{t "contribute.bingo-title"}}</h2>
<div class="bingo-card">
  {{#each @controller.squares as |item|}}
    <button type="button" style={{blobcolor (t item.title)}} class="cell {{if item.completed "completed"}}" {{on "click" (fn @controller.selectSquare item)}}>{{svgJar item.icon class="illustration"}}
<br><p class="title">{{t item.title}}</p>{{t item.description}}</button>
  {{/each}}
</div></template>
