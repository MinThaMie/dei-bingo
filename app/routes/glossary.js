import Route from '@ember/routing/route';

export default class GlossaryRoute extends Route {
  model() {
    const glossary = [
      {
        title: 'Ableism',
        definition:
          'Discrimination against persons with mental and/or physical disabilities; social structures that favor able-bodied individuals. People are assigned or denied certain perceived abilities, skills, or character orientations.',
      },
      {
        title: 'AFAB / AMAB',
        definition:
          'Acronyms to indicate `assigned female at birth` and `assigned male at birth`.',
      },
      {
        title: 'BIPOC',
        definition:
          'An acronym for Black, Indigenous and People of Color. The term has increased in use and awareness during 2020 after the Black Lives Matter resurgence against racism and police brutality in the wake of the George Floyd shooting. BIPOC is meant to emphasize the particular hardships faced by Black and Indigenous people (in the US and Canada) and is also meant to acknowledge that not all people of color face the same levels of injustice.',
      },
      {
        title: 'Cisgender',
        definition:
          'A term used to describe a person whose <a href="#Gender Identity">gender identity</a> corresponds to their sex assigned at birth. Often shortened to cis.',
      },
      {
        title: 'Culture',
        definition:
          'A concept that encompasses the social behavior, institutions, and norms found in human societies, as well as the knowledge, beliefs, arts, laws, customs, capabilities, and habits of the individuals in these groups. Culture is often originated from or attributed to a specific region or location.',
      },
      {
        title: 'Cultural Competence',
        definition:
          "Refers to an individual's or an organization's knowledge and understanding of different cultures and perspectives. It's a measure of an individual's or a workforce's ability to work with people of different nationalities, ethnicities, languages, and religions. In short it is the ability to interact effectively with people from different cultures.",
      },
      {
        title: 'Discrimination',
        definition:
          'Unfavorable or unfair treatment towards people based on the groups, classes, or other categories to which they belong or are perceived to belong. Some examples are their ethnicity, color, religion, socioeconomic status, education, sex, marital status, political affiliation, language, age, gender, physical or mental abilities, sexual orientation or <a href="#Gender Identity">gender identity</a>.',
      },
      {
        title: 'Diversity',
        definition:
          'Psychological, physical, and social differences that occur among any and all individuals; including but not limited to race, ethnicity, nationality, religion, socioeconomic status, education, marital status, language, age, gender, sexual orientation, mental or physical ability, and learning styles. A diverse group, community, or organization is one in which a variety of social and cultural characteristics exist.',
      },
      {
        title: 'Emotional labor',
        definition:
          'The process of managing feelings and expressions to fulfill the emotional requirements of a job. More specifically, workers are expected to regulate their personas during interactions with customers, co-workers, clients, and managers. This includes analysis and decision-making in terms of the expression of emotion, whether actually felt or not, as well as its opposite: the suppression of emotions that are felt but not expressed.',
      },
      {
        title: 'Emotional Tax',
        definition:
          'The combination of being on guard to protect against bias and feeling different from peers at work because of gender, race, and/or ethnicity and the associated effects on health, well-being, and ability to thrive at work. It particularly affects employees from underrepresented minorities.',
      },
      {
        title: 'Equality',
        definition:
          'The state of being equal, especially in status, rights and opportunities. Equality means each individual or group of people is given the same resources and opportunities, regardless of their circumstances.',
      },
      {
        title: 'Equity',
        definition:
          "Refers to fairness or justice in the way people are treated. Equality would be providing individuals with the same opportunities or aids. Equity, on the other hand, would take into account each individual's needs to ensure access to the same opportunities and outcomes.",
      },
      {
        title: 'Gender',
        definition:
          'The socially constructed ideas about behavior, actions, and roles a particular sex performs.',
      },
      {
        title: 'Gender Expression',
        definition:
          'A term to describe how people externally communicate or perform their <a href="#Gender Identity">gender identity</a> to others.',
      },
      {
        title: 'Gender Identity',
        definition:
          "The personal sense of one's own gender. Often in relation to a gender opposition between masculinity and femininity.",
      },
      {
        title: 'Gender-Neutral',
        definition:
          'Used to denote a unisex or all-gender inclusive space, language, etc. For example: a gender-neutral bathroom is a bathroom open to people of any <a href="#Gender Identity">gender identity</a> and expression.',
      },
      {
        title: 'Gender Expansive (gender non-confirming)',
        definition:
          'Used to describe those who view their <a href="#Gender Identity">gender identity</a> as one of many possible genders beyond strictly man or woman. These individuals have expanded notions of gender expression and identity beyond what is perceived as the expected gender norms for their society or context. Some gender-expansive individuals identify as a man or a woman, some identify as neither, and others identify as a mix of both.',
      },
      {
        title: 'Implicit Bias',
        definition:
          "Also known as unconscious or hidden bias, implicit biases are (negative) associations that people unknowingly hold. They are expressed automatically, without conscious awareness. Implicit biases affect people's attitudes and actions, thus creating real-world implications, even though individuals may not even be aware that those biases exist within themselves.",
      },
      {
        title: 'Inclusion',
        definition:
          'The act of creating environments in which any individual or group can be and feel welcomed, respected, supported, and valued to fully participate. An inclusive and welcoming climate embraces differences, and offers respect in words and actions for all people.',
      },
      {
        title: 'Intersectionality',
        definition:
          "An analytical framework for understanding how different aspects of a person's social and political identities (e.g., gender, race, class, sexuality, ability, physical appearance, etc.) combine to create unique combinations of discrimination and privilege. Intersectionality identifies advantages and disadvantages that are felt by people due to this combination of factors.",
      },
      {
        title: 'Latino/a',
        definition:
          'An individual originating from, or having a heritage relating to Latin America.',
      },
      {
        title: 'Latinx',
        definition:
          'A gender-neutral or non-binary alternative to Latino or Latina.',
      },
      {
        title: 'LGBTQ (QIA)',
        definition:
          'Acronym for “Lesbian Gay Bisexual Transgender Queer (Questioning Intersex Allies).” The description of the movement expanded from gay and lesbian to LGBTQ and some include questioning, intersex, allies, same-gender-loving, asexual, pansexual, and polyamorous. A plus sign is often added to variations of the acronym to include other identies',
      },
      {
        title: 'Microaggressions',
        definition:
          'The everyday verbal, nonverbal, and environmental slights, snubs, or insults, whether intentional or unintentional, which communicate hostile, derogatory, or negative messages to target persons based solely upon their marginalized group membership. For example commenting that a "black" person “talks white” if they are articulate and eloquent or moving to the opposite side of a street to avoid interacting with a particular racial group.',
      },
      {
        title: 'Neurodiversity',
        definition:
          'Refers to the variation in the human brain regarding sociability, learning, attention, mood and other mental functions. It recognizes that all variations of human neurological function need to be respected as just another way of being, and that neurological differences like autism and ADHD are the result of normal/natural variations in the human genome.',
      },
      {
        title: 'Non-binary',
        definition:
          'An adjective describing a person who does not identify exclusively as a man or a woman. Non-binary people may identify as being both a man and a woman, somewhere in between, or as falling completely outside these categories.',
      },
      {
        title: 'Oppression',
        definition:
          'A malicious or unjust treatment of, or exercise of power over, a group of individuals. Oppression signifies a hierarchical relationship in which dominant or privileged groups benefit, often in unconscious ways, from the disempowerment of subordinated or targeted groups.',
      },
      {
        title: 'Pansexuality',
        definition:
          'A term reflective of those who feel they are sexually, emotionally, and spiritually capable of falling in love with all genders.',
      },
      {
        title: 'People/Person of Color',
        definition:
          'A term primarily used to describe any person who is not considered "white", mostly used in the United States. The term emphasizes common experiences of systemic racism, which some communities have faced.',
      },
      {
        title: 'Privilege',
        definition:
          'Unearned social power granted by the formal and informal institutions of society to all members of a dominant group (e.g. <a href="#White Privilege">white privilege</a>, male privilege, etc.). Privilege is usually invisible to those who have it but nevertheless it puts them at an advantage over those who do not have it. Individuals can be privileged in one area, but not in another.',
      },
      {
        title: 'Psychological Safety',
        definition:
          'The belief that one will not be punished or humiliated for speaking up with ideas, questions, concerns, or mistakes. In psychological safe workplaces employees feel empowered to express an idea or contribution fully, without fear of negative consequences to themselves, their status or their career.',
      },
      {
        title: 'Queer',
        definition:
          'An umbrella term for people who are not heterosexual or are not <a href="#Cisgender">cisgender</a>.',
      },
      {
        title: 'Race',
        definition:
          'A categorization of humans based on shared physical or social qualities into groups generally viewed as distinct within a given society. Race does not have an inherent physical or biological meaning and is instead an identity which is assigned based on rules made by society.',
      },
      {
        title: 'Racism',
        definition:
          'Individual and institutional practices and policies based on the belief that a particular race is superior to others. This often results in depriving certain individuals and groups of civil liberties, rights, and other resources, hindering opportunities for social, educational, and political advancement.',
      },
      {
        title: 'Social Justice',
        definition:
          'A vision of society in which the distribution of resources is equitable and all members are physically and psychologically safe and secure.',
      },
      {
        title: 'Transgender',
        definition:
          'Someone whose <a href="#Gender Identity">gender identity</a> differs from that typically associated with the sex they were assigned at birth. Transgender does not imply any form of sexual orientation. Often shortened to trans.',
      },
      {
        title: 'White Privilege',
        definition:
          'Refers to the unquestioned and unearned set of advantages, entitlements, benefits and choices bestowed on people solely because they are "white", particularly if they are otherwise under the same social, political, or economic circumstances.',
      },
    ];
    return glossary;
  }
}
