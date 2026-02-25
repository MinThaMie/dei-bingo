import pageTitle from "ember-page-title/helpers/page-title";
import t from "ember-intl/helpers/t";
import { LinkTo } from "@ember/routing";
import { on } from "@ember/modifier";
import eq from "ember-truth-helpers/helpers/eq";
import countryflag from "../helpers/countryflag.js";
import language from "../helpers/language.js";
import MobileMenuWrapper from "ember-mobile-menu/components/mobile-menu-wrapper";
import FaIcon from "@fortawesome/ember-fontawesome/components/fa-icon";
import EpmModalContainer from "ember-promise-modals/components/epm-modal-container";
<template>{{pageTitle (t "index.page-title")}}

{{#if @controller.isDesktop}}
<div class="navbar">
  <LinkTo @route="index"><img src="logo.svg" alt="{{t "menu.logo-alt"}}"></LinkTo>
  <nav>
    <ul>
      <li>
        <LinkTo @route="index">{{t "menu.home"}}</LinkTo>
      </li>
      <li>
        <LinkTo @route="contribute">{{t "menu.contribute"}}</LinkTo>
      </li>
      <li>
        <LinkTo @route="glossary">{{t "menu.glossary"}}</LinkTo>
      </li>
      <li>
        <LinkTo @route="resources">{{t "menu.resources"}}</LinkTo>
      </li>
      <li>
        <LinkTo @route="trusted-ten">{{t "menu.ten"}}</LinkTo>
      </li>
      <li>
        <LinkTo @route="privilege-walk">{{t "menu.walk"}}</LinkTo>
      </li>
      <li>
        <select aria-label={{t "menu.language"}} name="locale" {{on "change" @controller.changeLocale}}>
          {{#each @controller.locales as |model|}}
          <option selected={{if (eq model @controller.activeLocale) "selected"}} value={{model}}>{{countryflag model}} {{language model}}</option>
          {{/each}}
        </select>
      </li>
    </ul>
  </nav>
</div>
<div class="container">
  {{outlet}}
</div>
{{else}}
<MobileMenuWrapper as |mmw|>

  <mmw.Content class="mobile-container">
    <div class="mobile-bar">
      <LinkTo @route="index"><img src="logo.svg" alt="{{t "menu.logo-alt"}}"></LinkTo>
      <div>
        <select aria-label={{t "menu.language"}} name="locale" {{on "change" @controller.changeLocale}}>
            {{#each @controller.locales as |model|}}
            <option selected={{if (eq model @controller.activeLocale) "selected"}} value={{model}}>{{countryflag model}} {{language model}}</option>
            {{/each}}
          </select>
        <mmw.Toggle class="menu-button" aria-label="{{t "menu.aria-label"}}">
          <FaIcon @icon="bars" alt="Hamburger menu" />
        </mmw.Toggle>
      </div>
    </div>
    {{outlet}}
  </mmw.Content>
   <mmw.MobileMenu @type="right" as |mm|>
    <div class="menu mobile">
      {{!-- template-lint-disable no-duplicate-landmark-elements --}}
      <nav>
        <ul>
          <li>
            <LinkTo @route="index" {{on "click" mm.actions.close}}>{{t "menu.home"}}</LinkTo>
          </li>
          <li>
            <LinkTo @route="contribute" {{on "click" mm.actions.close}}>{{t "menu.contribute"}}</LinkTo>
          </li>
          <li>
            <LinkTo @route="glossary" {{on "click" mm.actions.close}}>{{t "menu.glossary"}}</LinkTo>
          </li>
          <li>
            <LinkTo @route="resources" {{on "click" mm.actions.close}}>{{t "menu.resources"}}</LinkTo>
          </li>
          <li>
            <LinkTo @route="trusted-ten" {{on "click" mm.actions.close}}>{{t "menu.ten"}}</LinkTo>
          </li>
        </ul>
      </nav>
    </div>
  </mmw.MobileMenu>

</MobileMenuWrapper>
{{/if}}

<EpmModalContainer />
</template>