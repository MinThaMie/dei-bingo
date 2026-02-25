import pageTitle from "ember-page-title/helpers/page-title";
import t from "ember-intl/helpers/t";
import Callout from "../components/callout.gjs";
import { on } from "@ember/modifier";

<template>{{pageTitle (t "ten.pagetitle")}}
  <Callout @subtitle={{t "ten.subtitle"}}>{{t "ten.title"}}</Callout>
  <p class="intro">{{t "ten.intro" htmlSafe=true}}</p>
  <div class="ten-grid">
      <p id="name">{{t "ten.name"}}</p>
      <p>{{t "ten.gender"}}</p>
      <p>{{t "ten.race"}}</p>
      <p>{{t "ten.age"}}</p>
      <p>{{t "ten.sex"}}</p>
      <p>{{t "ten.ed"}}</p>
      <p>{{t "ten.language"}}</p>
      <p>{{t "ten.relation"}}</p>
      <input aria-label={{t "ten.name"}} {{on "focusout" @controller.updatePeople}} type="input" />
      <input aria-label={{t "ten.gender"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.race"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.age"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.sex"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.ed"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.language"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.relation"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />

      <input aria-label={{t "ten.name"}} {{on "focusout" @controller.updatePeople}} type="input" />
      <input aria-label={{t "ten.gender"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.race"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.age"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.sex"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.ed"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.language"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.relation"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />

      <input aria-label={{t "ten.name"}} {{on "focusout" @controller.updatePeople}} type="input" />
      <input aria-label={{t "ten.gender"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.race"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.age"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.sex"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.ed"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.language"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.relation"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />

      <input aria-label={{t "ten.name"}} {{on "focusout" @controller.updatePeople}} type="input" />
      <input aria-label={{t "ten.gender"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.race"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.age"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.sex"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.ed"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.language"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.relation"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />

      <input aria-label={{t "ten.name"}} {{on "focusout" @controller.updatePeople}} type="input" />
      <input aria-label={{t "ten.gender"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.race"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.age"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.sex"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.ed"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.language"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.relation"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />

      <input aria-label={{t "ten.name"}} {{on "focusout" @controller.updatePeople}} type="input" />
      <input aria-label={{t "ten.gender"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.race"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.age"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.sex"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.ed"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.language"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.relation"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />

      <input aria-label={{t "ten.name"}} {{on "focusout" @controller.updatePeople}} type="input" />
      <input aria-label={{t "ten.gender"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.race"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.age"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.sex"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.ed"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.language"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.relation"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />

      <input aria-label={{t "ten.name"}} {{on "focusout" @controller.updatePeople}} type="input" />
      <input aria-label={{t "ten.gender"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.race"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.age"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.sex"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.ed"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.language"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.relation"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />

      <input aria-label={{t "ten.name"}} {{on "focusout" @controller.updatePeople}} type="input" />
      <input aria-label={{t "ten.gender"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.race"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.age"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.sex"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.ed"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.language"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.relation"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />

      <input aria-label={{t "ten.name"}} {{on "focusout" @controller.updatePeople}} type="input" />
      <input aria-label={{t "ten.gender"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.race"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.age"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.sex"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.ed"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.language"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.relation"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />

      <input aria-label={{t "ten.name"}} {{on "focusout" @controller.updatePeople}} type="input" />
      <input aria-label={{t "ten.gender"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.race"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.age"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.sex"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.ed"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.language"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
      <input aria-label={{t "ten.relation"}} {{on "click" @controller.clickCheckBox}} type="checkbox" />
  </div>
  <h2 class="cards-title">{{t "ten.reflection"}}</h2>
  <p>{{t "ten.score"}}: {{@controller.similarityScore}}
  /{{@controller.amountOfCheckboxes}}</p>
  <p class="intro">{{t "ten.reflection-text" htmlSafe=true}}</p>
</template>
