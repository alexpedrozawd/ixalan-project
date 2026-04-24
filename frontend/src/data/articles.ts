import type { NewsArticle } from '@/types'

export const ARTICLES: NewsArticle[] = [
  {
    id: 1,
    title: 'Rampaging Ferocidon Banned',
    description: 'New banned and restricted list from Wizards brings extinction to Rampaging Ferocidon',
    imageUrl: 'https://api.scryfall.com/cards/xln/154?format=image&version=art_crop',
    date: '2018-01-15',
    slug: 'rampaging-ferocidon-banned',
    body: [
      {
        type: 'paragraph',
        content: 'The Star of Extinction came earlier to this poor dinosaur.',
      },
      {
        type: 'paragraph',
        content:
          "Today, January 15th of 2018, Wizards of the Coast announced the new banned and restricted lists. The standard format had four cards banned and they will no longer be accepted in the format. Here are the cards:",
      },
      {
        type: 'list',
        items: [
          'Attune with Aether',
          'Rogue Refiner',
          'Ramunap Ruins',
          'Rampaging Ferocidon',
        ],
      },
      {
        type: 'paragraph',
        content:
          "It's a great loss to dinosaur lovers (like me) because this card fits pretty well on main deck or sideboard, depending on your play style. This was a salvation against life decks (like vampire decks) and token generator decks (Guess what? Vampires again. And Merfolk) because players can't get life, and this ability broke the game against that type of deck. How many times did it save my life? I know, it's easier to remove, but your opponent will spend one removal spell against it, and you can put the big creatures on the battlefield (like dinosaurs, for example).",
      },
      {
        type: 'card-image',
        cardUrl: 'https://api.scryfall.com/cards/xln/154?format=image&version=normal',
        cardAlt: 'Rampaging Ferocidon — Creature card from Ixalan',
      },
      {
        type: 'paragraph',
        content:
          "I'll miss that card. I hope Wizards does not start banning more dinosaurs, because we are not competitive — banishing more of our poor creatures will be more than devastating for all Enrage lovers.",
      },
    ],
  },
  {
    id: 2,
    title: 'Be Prepared for RIX Release',
    description: 'The last part of the Ixalan block will arrive this month: Rivals of Ixalan',
    imageUrl: 'https://api.scryfall.com/cards/rix/90?format=image&version=art_crop',
    date: '2018-01-10',
    slug: 'be-prepared-for-rix-release',
    body: [
      {
        type: 'paragraph',
        content:
          'Rivals of Ixalan, the second and final set of the Ixalan block, releases on January 19th, 2018. This expansion brings 196 new cards that conclude the epic struggle between the four factions competing for control of the golden city of Orazca.',
      },
      {
        type: 'paragraph',
        content:
          'The set introduces the powerful Ascend mechanic, which rewards players who achieve the City\'s Blessing — a special designation gained by controlling ten or more permanents. Once you have the City\'s Blessing, it stays with you for the rest of the game and unlocks powerful bonus effects on cards that mention it.',
      },
      {
        type: 'paragraph',
        content:
          'Each of the four tribes — Dinosaurs, Pirates, Merfolk, and Vampires — receives exciting new payoffs in Rivals of Ixalan. With a full spoiler now available, here are some of the key things to watch out for:',
      },
      {
        type: 'list',
        items: [
          'Ascend mechanic: unlock the City\'s Blessing by controlling 10+ permanents',
          'New tribal payoffs for all four factions: Dinosaurs, Pirates, Merfolk, and Vampires',
          'Legendary cards for each faction, including a new Elder Dinosaur cycle',
          'The Immortal Sun: a powerful artifact that locks out planeswalkers and supercharges your spells',
          'Ghalta, Primal Hunger: a 12/12 trampler that costs just two green mana if you have enough power on the board',
        ],
      },
      {
        type: 'card-image',
        cardUrl: 'https://api.scryfall.com/cards/rix/90?format=image&version=normal',
        cardAlt: 'Ghalta, Primal Hunger — Legendary Creature card from Rivals of Ixalan',
      },
      {
        type: 'paragraph',
        content:
          'Whether you\'re a fan of aggro, midrange, or control strategies, Rivals of Ixalan has something for every archetype. Make sure to pick up your prerelease packs on January 13–14 to get an early taste of the action before the set goes wide on release day.',
      },
    ],
  },
  {
    id: 3,
    title: 'Welcome to Ixalan News',
    description: 'For readers who want to know everything about the new block of Magic: The Gathering',
    imageUrl: 'https://api.scryfall.com/cards/xln/217?format=image&version=art_crop',
    date: '2018-01-05',
    slug: 'welcome-to-ixalan-news',
    body: [
      {
        type: 'paragraph',
        content:
          'Welcome to Ixalan News — your go-to destination for everything related to the Ixalan block of Magic: The Gathering. Whether you are a seasoned veteran or a newcomer to the game, this site is designed to keep you informed, entertained, and ready to battle on the high seas of Ixalan.',
      },
      {
        type: 'paragraph',
        content:
          'The Ixalan block is set in a world of swashbuckling Pirates, ferocious Dinosaurs, mysterious Merfolk, and bloodthirsty Vampires, all racing to claim the legendary golden city of Orazca. It is one of the most flavourful and exciting settings Magic has ever explored, and we are here to cover every corner of it.',
      },
      {
        type: 'paragraph',
        content:
          'Here is what you can find on Ixalan News:',
      },
      {
        type: 'list',
        items: [
          'News: the latest updates, banned and restricted announcements, and event coverage',
          'Tribe Strategy: in-depth guides for Dinosaurs, Pirates, Merfolk, and Vampires',
          'Card Database: browse all cards from both Ixalan and Rivals of Ixalan with search and filter tools',
          'Spoilers: early previews and analysis of new cards as they are revealed',
        ],
      },
      {
        type: 'card-image',
        cardUrl: 'https://api.scryfall.com/cards/xln/217?format=image&version=normal',
        cardAlt: 'Admiral Beckett Brass — Legendary Creature card from Ixalan',
      },
      {
        type: 'paragraph',
        content:
          'Thank you for joining us on this adventure. Bookmark the site, check back often, and let\'s explore Ixalan together. The golden city awaits.',
      },
    ],
  },
  {
    id: 4,
    title: 'River Sneak: Best Merfolk of Ixalan',
    description: 'Dive deep into the Merfolk tribe and discover why River Sneak is the backbone of every competitive Merfolk list',
    imageUrl: 'https://api.scryfall.com/cards/xln/67?format=image&version=art_crop',
    date: '2018-01-01',
    slug: 'river-sneak-best-merfolk',
    body: [
      {
        type: 'paragraph',
        content:
          'When it comes to Merfolk in Ixalan Standard, no card does more work for its mana cost than River Sneak. A 1/1 for two mana might not look impressive on paper, but River Sneak has two abilities that make it a nightmare for opponents: it cannot be blocked, and it gets +1/+1 each time another Merfolk enters the battlefield under your control.',
      },
      {
        type: 'paragraph',
        content:
          'In a tribal deck built around Merfolk, River Sneak can grow to a 3/3, 4/4, or even larger in the blink of an eye — and your opponent has no way to stop it from connecting. Combine it with pump spells or lords like Merfolk Mistbinder and you have a clock that demands an answer immediately, or the game is over.',
      },
      {
        type: 'paragraph',
        content:
          'These are the best Merfolk synergies to pair with River Sneak in Standard:',
      },
      {
        type: 'list',
        items: [
          'Merfolk Mistbinder: a 2/2 lord that gives all Merfolk +1/+1, making River Sneak trade up in combat if necessary',
          'Deeproot Waters: creates a 1/1 Hexproof Merfolk token every time you cast a Merfolk, fuelling River Sneak\'s growth',
          'Kumena\'s Speaker: a 1/1 for one mana that becomes a 2/2 whenever you control an Island or another Merfolk',
          'Silvergill Adept: draws a card when it enters the battlefield, keeping your hand full while growing River Sneak',
          'Kopala, Warden of Waves: makes your Merfolk expensive to target, protecting River Sneak from cheap removal',
        ],
      },
      {
        type: 'card-image',
        cardUrl: 'https://api.scryfall.com/cards/xln/67?format=image&version=normal',
        cardAlt: 'River Sneak — Creature card from Ixalan',
      },
      {
        type: 'paragraph',
        content:
          'If you are looking for a reason to sleeve up the Merfolk tribe in Ixalan Standard, River Sneak is your answer. It is cheap, evasive, and explosive in the right shell. Give it a try at your next Friday Night Magic and watch your opponents scramble for a way to stop the unblockable tide.',
      },
    ],
  },
]
