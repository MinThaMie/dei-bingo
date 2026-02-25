import blobcolor from "../helpers/blobcolor.js";
import { on } from "@ember/modifier";
import FaIcon from "@fortawesome/ember-fontawesome/components/fa-icon";
import svgJar from "ember-svg-jar/helpers/svg-jar";
import t from "ember-intl/helpers/t";
import { fn } from "@ember/helper";
<template><div class="contribute-modal" style={{blobcolor @data.selected.title}}>
  <button type="button" class="modal-close" {{on "click" @close}}><FaIcon @icon="close" /></button>
  {{svgJar @data.selected.icon class="illustration"}}
  <p class="modal-title">{{t @data.selected.title}}</p>
  <p class="modal-description">{{t @data.selected.description}}</p>
  <button type="button" class="button button-secondary" {{on "click" @close}}>{{t "contribute.cancel"}}</button>
  {{#if @data.selected.completed}}
    <button type="button" class="button complete" {{on "click" (fn @data.removeSquare @close)}}>{{t "contribute.remove"}}</button>
  {{else}}
    <button type="button" class="button complete" {{on "click" (fn @data.completeSquare @close)}}>{{t "contribute.add"}}</button>
  {{/if}}
</div>

</template>