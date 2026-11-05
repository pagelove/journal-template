export const config={
  "id": "journal",
  "repo": "journal-template",
  "title": "A little space",
  "heading": "A page of your own.",
  "intro": "Write what happened, keep what mattered and return to it in your own time.",
  "noun": "entry",
  "plural": "entries",
  "titleField": "title",
  "private": true,
  "fields": [
    {
      "key": "title",
      "label": "Entry title",
      "type": "text",
      "required": true
    },
    {
      "key": "date",
      "label": "Date",
      "type": "date",
      "required": true
    },
    {
      "key": "tags",
      "label": "Tags",
      "type": "text",
      "required": false
    },
    {
      "key": "body",
      "label": "Your entry",
      "type": "textarea",
      "required": true,
      "max": 20000
    }
  ],
  "settings": [
    {
      "key": "name",
      "label": "Journal name",
      "default": "A little space",
      "type": "text",
      "required": true
    },
    {
      "key": "headline",
      "label": "Headline",
      "default": "Put it into words.",
      "type": "text",
      "required": true
    },
    {
      "key": "about",
      "label": "About this journal",
      "default": "Private notes, one day at a time.",
      "type": "textarea",
      "required": true
    },
    {
      "key": "timezone",
      "label": "Calendar timezone",
      "default": "America/New_York",
      "type": "text",
      "required": true
    }
  ]
};
