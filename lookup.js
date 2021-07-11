const dnd = {
    "backgrounds": [
        {
            "name": "lineage ",
            "displayname": "lineage ",
            "languages": [
                ""
            ],
            "toolproficiencies": [
                "one tool proficiency "
            ],
            "equipment": [
                "a family heirloom"
            ],
            "currency": {
                "gp": "50"
            },
            "features": [
                {
                    "featuretextwithbullet": "Create a custom Combat maneuver passed down in your family line for generations."
                }
            ]
        },
        {
            "name": "Hunter",
            "displayname": "Hunter",
            "skills": [
                "nature",
                "stealth"
            ],
            "languages": [
                ""
            ],
            "toolproficiencies": [
                ""
            ],
            "equipment": [
                ""
            ],
            "currency": {
                "sp": "35"
            },
            "features": [
                {
                    "featuretextwithbullet": "Years of hunting in forests has taught you many things,  you are able to easily retrace your steps and can not get lost except by magical means. "
                },
                {
                    "featuretextwithbullet": "You have advantage on attack rolls with ranged weapons vs. creatures that havn't seen you yet "
                }
            ]
        }
    ],
    "races": [
        {
            "name": "Dwarf",
            "displayname": "Dwarf",
            "abilityscorebonuses": {
                "constitution": "2"
            },
            "speed": "25",
            "languages": ["common", "dwarvish"]
        },
        {
            "name": "Elf",
            "displayname": "Elf",
            "abilityscorebonuses": {
                "dexterity": "2"
            },
            "speed": "25",
            "languages": ["common", "dwarvish"]
        },
        {
            "name": "Gith",
            "displayname": "Gith",
            "abilityscorebonuses": [
                {
                    "intelligence": "1"
                }
            ],
            "speed": "30",
            "languages": [
                "Common",
                "Gith"
            ]
        },
        {
            "name": "Changeling",
            "displayname": "Changeling",
            "abilityscorebonuses": [
                {
                    "dexterity": "1",
                    "charisma": "1"
                }
            ],
            "speed": "30",
            "languages": [
                "Common",
                "Two Others"
            ],
            "features": [
                {
                    "setskillproficiency": {
                        "deception": "true"
                    }
                },
                {
                    "featuretext": "Shapechanger: As an action, you can polymorph into any humanoid of your size that you have seen, or back into your true form. However, your equipment does not change with you. If you die, you revert to your natural appearance."
                }
            ]
        },
        {
            "name": "Dragonborn",
            "displayname": "Dragonborn",
            "abilityscorebonuses": [
                {
                    "strength": "1",
                    "charisma": "1"
                }
            ],
            "speed": "30",
            "languages": [
                "Common",
                "Draconic"
            ],
            "features": [
                {
                    "featuretext": "Dragonborn Features:"
                }
            ]
        },
        {
            "name": "Minotaur",
            "displayname": "Minotaur",
            "abilityscorebonuses": [
                {
                    "strength": "1"
                },
                {
                    "select1": [
                        {
                            "strength": "1"
                        },
                        {
                            "intelligence": "1"
                        },
                        {
                            "wisdom": "1"
                        }
                    ]
                }
            ],
            "speed": "30",
            "languages": [
                "Common"
            ],
            "features": [
                {
                    "featuretext": ""
                },
                {
                    "featuretext": "You can use your horns for unarmed attacks, doing 1d10 pirrcing damage.\nYour horns give you advantage on attempts to shove a creature.\nWhen you take the dash action, you can make an unarmed strike with your horns as a bonus action.\nWhen you make a melee weapon attack, you can use a bonus action to shove a creature, but cannot attempt to knock it prone."
                },
                {
                    "featuretext": "You can perfectly recall any path you have traveled."
                },
                {
                    "addtoolproficiencies": [
                        "Vehicles (water)",
                        "Navigator's tools"
                    ]
                }
            ]
        },
        {
            "name": "Shifter",
            "displayname": "Shifter",
            "abilityscorebonuses": [
                {
                    "dexterity": "1"
                }
            ],
            "speed": "30",
            "languages": [
                "Common",
                "Sylvan"
            ],
            "features": [
                {
                    "featuretext": "Shifter Features:"
                },
                {
                    "featuretextwithbullet": "Within 60 feet of you, treat dim light as bright, darkness as dim light"
                },
                {
                    "featuretextwithbullet": "You can shift as a bonus action, lasting for 1 min. or until you end it as a bonus action. You gain (level+CON) Temporary hitpoints. (Subrace feature) 1\/rest"
                }
            ]
        },
        {
            "name": "Warforged",
            "displayname": "Warforged",
            "abilityscorebonuses": [
                {
                    "strength": "1",
                    "constitution": "1"
                }
            ],
            "speed": "30",
            "languages": [
                "Common",
                "One Other Language"
            ],
            "features": [
                {
                    "modifyarmorclassbonus": "1"
                },
                {
                    "featuretext": "Warforged Features"
                },
                {
                    "featuretextwithbullet": "You are immune to disease, and do not need to eat or drink, but may do so if you wish. Instead of sleeping you enter a state of inactivity for 4 hours, but are fully aware of your surroundings."
                }
            ]
        },
        {
            "name": "Kitsune",
            "displayname": "Kitsune",
            "abilityscorebonuses": [
                {
                    "charisma": "2"
                }
            ],
            "speed": "35",
            "languages": [
                "Common",
                ""
            ],
            "features": [
                {
                    "featuretextwithbullet": "Kitsune Awareness. You have the ability to hear falsehoods for what they are. You know if you hear a creature willingly lie. A creature hidden from divination magic reveals nothing."
                },
                {
                    "featuretextwithbullet": "Kitsune Trickery. You can appear as a human equivalent of yourself indefinitely using a very simple illusion magic, you cannot change alter your illusionary human self. A creature looking directly at you can make a Intelligence (Investigation) check, to tell that you are not what you appear to be, though they still cannot perceive your true form. The DC for this check is equal to 10 + your proficiency bonus + your Charisma modifier. This magic is detectable by spells such as detect magic and dispelled in an antimagic field or by a successful dispel magic. Your proficiency bonus is considered the level of the spell for the sake of dispel magic. If your illusion is dispelled you cannot use the effect again until after a long rest."
                }
            ]
        },
        {
            "name": "New Changeling",
            "displayname": "Changeling",
            "abilityscorebonuses": [
                {
                    "select1": [
                        {
                            "dexterity": "1"
                        },
                        {
                            "intelligence": "1"
                        }
                    ]
                },
                {
                    "charisma": "2"
                }
            ],
            "speed": "30",
            "languages": [
                "Common",
                "Two others"
            ],
            "features": [
                {
                    "featuretextwithbullet": "As an action you can transform your appearance or revert to your natural form. You can't transform into a creature you've never seen, however you choose your features for said creature. Can't change size and can't change basic shape. Clothing and equipment do not change with you. You have advantage on Deception checks to pass off this new identity"
                },
                {
                    "featuretextwithbullet": "Once per rest, impose disadvantage on an attack against you that you can see. Using this reveals your shapeshifting nature to everyone within 30 feet of you"
                },
                {
                    "setskillproficiency": {
                        "persuasion": "true"
                    }
                },
                {
                    "setskillproficiency": {
                        "deception": "true"
                    }
                },
                {
                    "featuretextwithbullet": "Choose a tool to be proficient in, as well as an identity to go with that tool. while assuming that identity, you double your proficiency in that tool"
                }
            ]
        },
        {
            "name": "Three Goblins in a trench coat",
            "displayname": "Three Goblins in a trench coat",
            "abilityscorebonuses": [
                {
                    "dexterity": "2",
                    "charisma": "1"
                }
            ],
            "speed": "25",
            "languages": [
                "Common",
                "Goblin"
            ],
            "features": [
                {
                    "featuretext": "Age: you live as long as other people, dont ask silly questions."
                },
                {
                    "featuretext": "Alignment: You can never seem to make up your mind, and can be even heard arguing with your own torso and legs. You tend to be chaotic."
                },
                {
                    "featuretext": "Size: In spite of your swaying walk and lumpy posture, you stand a little over six feet tall, like any other tall person. Your size is Medium."
                },
                {
                    "featuretextwithbullet": "Darkvision. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray."
                },
                {
                    "featuretextwithbullet": "Incognito. You have proficiency in the Performance skill and with disguise kits. You have advantage on any check made to disguise yourself or convince someone that you are, in fact, just a tall person."
                },
                {
                    "featuretextwithbullet": "Quick Swipe. As an object interaction on your turn, you can pull an item from your space into your coat or produce and item from your coat. The item must be small enough to fit in a 1-foot cube. It might look like you just grabbed it with an extra green arm, poking out of the jacket for only a second, but that's just a trick of the light."
                },
                {
                    "featuretextwithbullet": "Unconscious Movement. If you drop you to 0 hit points and fall unconscious, you can still crawl around, moving a maximum of 5 feet on each of your turns."
                },
                {
                    "featuretextwithbullet": "Second and Third Chances. When you make an attack roll, ability check, or saving throw, you can roll two additional d20s. You choose to use this ability after you roll the die, but before the outcome is determined. You choose which of the d20s is used for the attack roll, ability check, or saving throw. Once you use this trait, you can't use it again until you finish a long rest."
                },
                {
                    "featuretextwithbullet": "Awkward. You can't add your proficiency bonus to Dexterity checks or saving throws."
                }
            ]
        },
        {
            "name": "Pug",
            "displayname": "Pug",
            "abilityscorebonuses": [
                {
                    "charisma": "1"
                }
            ],
            "speed": "25",
            "languages": [
                ""
            ],
            "features": [
                {
                    "featuretextwithbullet": "You are a Pug, you are a tiny creature.\nyou weigh less than 20 pounds. I'm not sure what else your expecting."
                }
            ]
        },
        {
            "name": "Kalashtar",
            "displayname": "Kalashtar",
            "abilityscorebonuses": [
                {
                    "wisdom": "2",
                    "charisma": "1"
                }
            ],
            "speed": "30",
            "languages": [
                "Common",
                "Quori",
                "One extra language "
            ],
            "features": [
                {
                    "featuretextwithbullet": "Dual Mind. When you make a Wisdom saving throw, you can use your reaction to gain advantage on the roll. You can use this trait immediately before or after you roll, but before any of the roll's effects occur."
                },
                {
                    "featuretextwithbullet": "Mental Discipline. You have resistance to psychic damage."
                },
                {
                    "featuretextwithbullet": "Mind Link. You can speak telepathically to any creature you can see within 60 feet of you. You don’t need to share a language with the creature for it to understand your telepathic messages, but the creature must be able to understand at least one language or be telepathic itself. \n\nAs a bonus action when you’re speaking telepathically to a creature, you can give that creature the ability to speak telepathically to you until the start of your next turn. To use this ability, the creature must be within 60 feet of you and be able to see you."
                },
                {
                    "featuretextwithbullet": "Psychic Glamour. Choose one of the following skills: Insight, Intimidation, Performance, or Persuasion. You have advantage on all ability checks you make with that skill."
                },
                {
                    "featuretextwithbullet": "Severed from Dreams. Kalashtar sleep, but they don’t connect to the plane of dreams as other creatures do. Instead, their minds draw from the memories of their otherworldly spirit while they sleep. As such, you are immune to magical spells and effects that require you to dream, like the Dream spell, but not to spells and effects that put you to sleep, like the Sleep spell."
                }
            ]
        },
        {
            "name": "Kua Toa",
            "displayname": "Kua Toa",
            "abilityscorebonuses": [
                {
                    "strength": "1",
                    "constitution": "1",
                    "intelligence": "1"
                }
            ],
            "speed": "30",
            "languages": [
                "Common",
                "Undercommon"
            ],
            "features": [
                {
                    "featuretextwithbullet": "Amphibious. You can breathe both air and water."
                },
                {
                    "featuretextwithbullet": "Superior Darkvision. You have 120 ft. of Darkvision."
                },
                {
                    "featuretextwithbullet": "Slippery Skin. You have advantage on ability checks and saving throws made to escape a grapple."
                },
                {
                    "featuretextwithbullet": "Otherwordly Perception. You can sense the presence of any creature within 30 feet of it that is invisible or on the Ethereal Plane. You can pinpoint such a creature that is moving. Additionally, you have proficiency in Perception."
                },
                {
                    "featuretextwithbullet": "Sunlight Sensitivity. You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight."
                }
            ]
        },
        {
            "name": "Verdan",
            "displayname": "Verdan ",
            "abilityscorebonuses": [
                {
                    "constitution": "1",
                    "charisma": "2"
                }
            ],
            "speed": "30",
            "languages": [
                "Common",
                "Goblin",
                "Telepathy",
                "One extra language"
            ],
            "features": [
                {
                    "featuretext": "• Size. Verdan start out similar in size to the goblins they were created from, ranging from 3 to 4 feet in height. But at some point after reaching maturity, each verdan undergoes a sudden growth spurt of 2 feet or more. At 1st level, you are a small creature. When you reach 5th level, you become a Medium creature."
                },
                {
                    "featuretext": "• Black Blood Healing. The black blood that is a sign of your people’s connection to That-Which-Endures boots your natural healing. When you roll a 1 or 2 on any Hit Die you spend at the end of a short rest, you can reroll the die and must use the new roll."
                },
                {
                    "featuretext": "• Limited Telepathy. You can telepathically speak to any creature you can see within 30 feet of you. You don’t need to share a language with the creature for it to understand your telepathy, but it must be able to understand at least one language. This process of communication is slow and limited, allowing you to transmit and receive only simple ideas and straightforward concepts."
                },
                {
                    "featuretext": "• Persuasive.Your people’s lack of history makes you trustworthy and humble. You have proficiency in the Persuasion skill."
                },
                {
                    "featuretext": "• Telepathic Insight. Your mind’s connection to the world around you strengthens your will. You have advantage on all Wisdom and Charisma saving throws."
                }
            ]
        },
        {
            "name": "lionen",
            "displayname": "Lionen",
            "abilityscorebonuses": [
                {
                    "strength": "2"
                }
            ],
            "speed": "30",
            "languages": [
                "Common",
                "Beast speech"
            ],
            "features": [
                {
                    "featuretextwithbullet": "Brave. You have advantage on saving throws against being frightened."
                },
                {
                    "featuretextwithbullet": "Leonin Might. You may use the higher damage die of versatile weapons while wielding the weapon in one hand.\n"
                },
                {
                    "featuretextwithbullet": "Lionhearted. When you roll your Hit Dice to regain hit points, you may roll twice and use the higher result."
                }
            ]
        },
        {
            "name": "Satyr",
            "displayname": "Satyr",
            "abilityscorebonuses": [
                {
                    "dexterity": "1",
                    "charisma": "2"
                }
            ],
            "speed": "30",
            "languages": [
                "Common",
                "Sylvan"
            ],
            "features": [
                {
                    "featuretextwithbullet": "Fey Ancestry. You have advantage on saving throws against being charmed and magic can't put you to sleep."
                },
                {
                    "featuretextwithbullet": "Pipes. You can use panpipes (that you begin play with) as an arcane focus to cast spells. You know the vicious mockery cantrip. Once you reach 3rd level, you can cast entangle with this trait, and starting at 5th level, you can also cast suggestion with it. Once you cast a spell with this trait, you can't do so again until you finish a long rest. Charisma is your spellcasting ability for these spells."
                },
                {
                    "featuretextwithbullet": "Exotic Body. Normal articles don't fit you, and your people do not clothe or armor themselves. Any garments you wish to wear must be custom-made with a material cost equal to the base item plus 50%. This does not include any service fee a craftsman may charge you."
                },
                {
                    "featuretextwithbullet": "Charmed Speech. You are proficient in the Persuasion skill."
                },
                {
                    "featuretextwithbullet": "Drunken Foolery. You have advantage on saving throws against anything you ingest and on Intelligence (Investigation) checks to locate social gatherings. In addition, you can dance, sing, or play music without experiencing exhaustion."
                }
            ]
        },
        {
            "name": "Simic hybrid",
            "displayname": "Simic hybrid",
            "abilityscorebonuses": [
                {
                    "constitution": "2"
                },
                {
                    "select1": [
                        {
                            "strength": "1"
                        },
                        {
                            "dexterity": "1"
                        },
                        {
                            "intelligence": "1"
                        },
                        {
                            "wisdom": "1"
                        },
                        {
                            "charisma": "1"
                        }
                    ]
                }
            ],
            "speed": "30",
            "languages": [
                "Common",
                "Elvish or Valdeken "
            ],
            "features": [
                {
                    "featuretext": "• Darkvision. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray."
                },
                {
                    "featuretext": "• Animal Enhancement. Your body has been altered to incorporate certain animal characteristics. You choose one animal enhancement now and a second enhancement at 5th level.\nAt 1st level, choose one of the following options:\n-Manta Glide. You have ray-like fins that you can use as wings to slow your fall or allow you to glide. When you fall and aren't incapacitated, you can subtract up to 100 feet from the fall when calculating falling damage, and you can move up to 2 feet horizontally for every 1 foot you descend.\n\n-Nimble Climber. You have a climbing speed equal to your walking speed.\n\n-Underwater Adaptation. You can breathe air and water, and you have a swimming speed equal to your walking speed.\n\nAt 5th level, your body evolves further, developing new characteristics. Choose one of the options you didn’t take at 1st level, or one of the following options:\n"
                },
                {
                    "featuretextwithbullet": "Grappling Appendages. You have two special appendages growing alongside your arms. Choose whether they're both claws or tentacles. As an action , you can use one of them to try to grapple a creature. Each one is also a natural weapon , which you can use to make an unarmed strike. If you hit with it, the target takes bludgeoning damage equal to 1d6 +your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike. Immediately after hitting, you can try to grapple the target as a bonus action. These appendages can't precisely manipulate anything and can't wield weapons, magic items. or other specialized equipment."
                },
                {
                    "featuretextwithbullet": "Carapace. Your skin in places is covered by a thick shell. You gain a +1 bonus to AC when you aren’t wearing heavy armor."
                },
                {
                    "featuretextwithbullet": "Acid Spit. As an action, you can spray acid from glands in your mouth, targeting one creature or object you can see within 30 feet of you. The target takes 2d10 acid damage unless it succeeds on a Dexterity saving throw against a DC equal to 8 +your Constitution modifier+ your proficiency bonus. This damage increases by 1d10 when you reach 11th level (3d10) and 17th level (4d10). You can use this trait a number of times equal to your Constitution modifier (minimum of once), and you regain all expended uses of it when you finish a long rest."
                }
            ]
        },
        {
            "name": "locathah ",
            "displayname": "Locathah ",
            "abilityscorebonuses": [
                {
                    "strength": "2",
                    "dexterity": "1"
                }
            ],
            "speed": "30",
            "languages": [
                "Common",
                "Aquan"
            ],
            "features": [
                {
                    "featuretext": "• Natural Armor. You have tough scaly skin. When you aren’t wearing armor, your AC is 12 + your Dexterity modifier. You can use your natural armor to determine your AC if the armor you wear would leave you with a lower AC. A shield’s benefits apply as normal while you use your natural armor."
                },
                {
                    "featuretext": "• Observant and Athletic. You have proficiency in Athletics and Perception skills."
                },
                {
                    "setskillproficiency": {
                        "athletics": "true"
                    }
                },
                {
                    "setskillproficiency": {
                        "perception": "true"
                    }
                },
                {
                    "featuretext": "• Leviathan Will. You have advantage on saves against being charmed, frightened, paralyzed, poisoned, stunned, or put to sleep."
                },
                {
                    "featuretext": "• Limited Amphibiousness. You can breathe air and water, but you need to be submerged at least once every 4 hours to avoid suffocating."
                }
            ]
        },
        {
            "name": "Grung",
            "displayname": "Grung",
            "abilityscorebonuses": [
                {
                    "dexterity": "2",
                    "constitution": "1"
                }
            ],
            "speed": "30",
            "languages": [
                "Common",
                "Grung",
                ""
            ],
            "features": [
                {
                    "featuretext": "• Size. Around 3 feet tall, you are Small."
                },
                {
                    "featuretext": "• Poison Immunity. You are immune to poison damage and the poisoned condition."
                },
                {
                    "featuretext": "• Poisonous Skin. Any creature that touches you with its bare skin for the first time on its turn or is touching you at the beginning of its turn must succeed on a Constitution saving throw. The save DC is equal to 8 + your proficiency bonus + your Constitution modifier. On a failed save, the creature is poisoned until the start of its next turn."
                },
                {
                    "featuretext": "• Poisonous Skin. Any creature that touches you with its bare skin for the first time on its turn or is touching you at the beginning of its turn must succeed on a Constitution saving throw. The save DC is equal to 8 + your proficiency bonus + your Constitution modifier. On a failed save, the creature is poisoned until the start of its next turn."
                },
                {
                    "featuretext": "• Secrete Poison. As an action, you can apply your body’s poison to a melee weapon or up to 3 pieces of ammunition. The poison loses its potency after 1 minute. A creature struck by a weapon or piece of ammunition poisoned in this way must make a Constitution saving throw with the same DC equal to 8 + your proficiency bonus + your Constitution modifier or be poisoned for 1 minute. A poisoned creature can repeat the saving throw at the end of its turn."
                },
                {
                    "featuretext": "• Water Dependency. If you fail to immerse yourself in water for at least 1 hour during a day, you suffer 1 level of exhaustion at the end of that day. You can recover from this exhaustion only through magic or by immersing yourself in water for at least 1 hour."
                }
            ]
        },
        {
            "name": "Scarecrow",
            "displayname": "Scarecrow",
            "abilityscorebonuses": [
                {
                    "dexterity": "1",
                    "charisma": "1"
                }
            ],
            "speed": "30",
            "languages": [
                "Common"
            ],
            "features": [
                {
                    "featuretextwithbullet": "Darkvision. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray"
                },
                {
                    "featuretextwithbullet": "Fibrous Body. Your entire body is viable to be lit aflame. You have disadvantage in saving throws against spells and effects which would ignite you."
                },
                {
                    "featuretextwithbullet": "Living Construct. You are not organic. Your creature type is construct. As such, spells like cure wounds don't affect you, and you are immune to spells like crown of madness or dominate person because they specifically target humanoids. You are immune to poison damage, being poisoned, and diseases. You do not need to eat or breathe, and any food you do attempt to eat falls through your mouth cavity. Rather than sleeping, you enter an inactive state for 6 hours each day. You do not dream in this state; you are fully aware of your surroundings and notice approaching enemies and other events as normal."
                },
                {
                    "featuretextwithbullet": "False Appearance. While you remain motionless, you are indistinguishable from an ordinary, inanimate scarecrow. Creatures with the ability to see or feel magic can however detect the magic within you."
                },
                {
                    "featuretextwithbullet": "Gaze of Terrors. You are pretty creepy to run into in a corn field, with your glowing eyes and all. You are proficient in the Intimidation skill."
                },
                {
                    "setskillproficiency": {
                        "intimidation": "true"
                    }
                },
                {
                    "featuretextwithbullet": "Magical Being. As you are a body built up of hay, grass or similar materials, it is only magic holding you to this life. You are incapacitated while in the area of an antimagic field. If targeted by dispel magic, you must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute."
                },
                {
                    "featuretextwithbullet": "Mendable. You can be mended like an object, not healed like an organic thing. When the mending spell is cast on you, it has the following alterations: It has a casting time of 1 action. If you have 0 hit points you become stable. As part of the casting of mending the caster may expend any level of spell slot to cause you to regain a number of hit points equal to 1d8, plus their spellcasting ability modifier. For each level of the spell slot expended you regain an additional 1d8 hit points."
                }
            ]
        },
        {
            "name": "Soulbound",
            "displayname": "Soulbound",
            "abilityscorebonuses": [
                {
                    "constitution": "2"
                }
            ],
            "speed": "30",
            "languages": [
                "Common",
                "One extra language "
            ],
            "features": [
                {
                    "featuretextwithbullet": "Living Construct. Though you are still driven by a living soul, your body is artificial, a suit of armor made of a variety of durable materials. Your creature type is construct. You are immune to normal diseases, normal toxins of any kind, suffocation, starvation, sleep loss, and exhaustion. You do not benefit from any conventional magical HP-restoration. Since you are a soul bound to an armor or a construct, your HP is bound to the condition of that armor or construct. The central piece of the armor is analogous to your heart, and as such your soul will be lost if your chest piece is destroyed. Before your armor pieces can take damage itself, they drain received damage from your HP to mend themself. Should you reach 0 HP you stabilize automatically, but your armor pieces fall motionless to the ground. As long as the chest piece is intact, other destroyed armor pieces may recover from what is left of them slowly over time. Until destroyed pieces had a full recovery, your HP are reduced by the percentage, represented by the destroyed armor pieces (if uneven, round up). A soulbound may recover broken parts and HP faster through a meditation ritual innately known to them, which requires no material components to cast. This ritual restores their armor and HP to maximum and takes 4 hours to fully prepare and cast in which you remain motionless while fully aware of your surroundings. Alternatively can the spell mending be casted, to cure a soulbounds wounds. The caster may expand any number of spell slots (minimum 1) causing the spell to heal a number of hit points equal to 1d8 + their spellcasting ability modifier. When using a spell slot of 2nd level or higher, the healing increases by 1d8 for each slot level above 1st.\nEnsouled Armor. You can control your seperated limbs, as long as they are not more than 20 feet away from your chest piece."
                },
                {
                    "featuretextwithbullet": "Ensouled Armor. You can control your seperated limbs, as long as they are not more than 20 feet away from your chest piece."
                },
                {
                    "featuretextwithbullet": "Artificial senses. Because you do not have physical eyes or ears, your senses are magical in nature. You have advantage on saving throws against any effect that can cause the blinded or deafened conditions. You also feel no discomfort from normal extremes of temperature, and are immune to Exhaustion caused by exceptionally hot or cold natural environments."
                },
                {
                    "featuretextwithbullet": "Insomnia. You cannot be put to sleep by any means. You can always feel in what direction a piece of your armor is located."
                },
                {
                    "featuretextwithbullet": "Antimagic susceptability. You are incapacitated while in the area of an antimagic field. If targeted by dispel magic, you must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute."
                },
                {
                    "featuretextwithbullet": "Empty, But Not.. Any spell or ability that treates a armored creature differently considers you to be an armored creature, regardless of your lack of fleshy armor filler."
                }
            ]
        }
    ],
    "subraces": [
        {
            "name": "UA Eladrin",
            "displayname": "UA Eladrin",
            "race": "Elf",
            "abilityscorebonuses": [
                {
                    "select1": [
                        {
                            "intelligence": "1"
                        },
                        {
                            "charisma": "1"
                        }
                    ]
                }
            ],
            "languages": [
                ""
            ],
            "features": [
                {
                    "featuretext": "Fey Step: As a bonus action teleport up to 30' to a place you can see. (1\/rest)"
                },
                {
                    "featuretext": "Shifting Seasons: At the end of a rest choose one of 4 cantrips you can cadt, based on either Intelligence or Charisma.\nChill Touch, Friends, Minor Illusion, Fire Bolt"
                }
            ]
        },
        {
            "name": "Githyanki",
            "displayname": "Githyanki",
            "race": "Gith",
            "abilityscorebonuses": [
                {
                    "wisdom": "2"
                }
            ],
            "languages": [
                "One of your choice"
            ],
            "features": [
                {
                    "menu": {
                        "name": "Decadent Mastery",
                        "selections": "1",
                        "entries": [
                            {
                                "name": "Acrobatics",
                                "displayname": "Acrobatics",
                                "effects": [
                                    {
                                        "setskillproficiency": {
                                            "acrobatics": "true"
                                        }
                                    }
                                ]
                            },
                            {
                                "name": "Animal Handling",
                                "displayname": "Animal Handling",
                                "effects": [
                                    {
                                        "setskillproficiency": {
                                            "animal handling": "true"
                                        }
                                    }
                                ]
                            },
                            {
                                "name": "Arcana",
                                "displayname": "Arcana",
                                "effects": [
                                    {
                                        "setskillproficiency": {
                                            "arcana": "true"
                                        }
                                    }
                                ]
                            },
                            {
                                "name": "Athletics",
                                "displayname": "Athletics",
                                "effects": [
                                    {
                                        "setskillproficiency": {
                                            "athletics": "true"
                                        }
                                    }
                                ]
                            },
                            {
                                "name": "Deception",
                                "displayname": "Deception",
                                "effects": [
                                    {
                                        "setskillproficiency": {
                                            "deception": "true"
                                        }
                                    }
                                ]
                            },
                            {
                                "name": "History",
                                "displayname": "History",
                                "effects": [
                                    {
                                        "setskillproficiency": {
                                            "history": "true"
                                        }
                                    }
                                ]
                            },
                            {
                                "name": "Insight",
                                "displayname": "Insight",
                                "effects": [
                                    {
                                        "setskillproficiency": {
                                            "insight": "true"
                                        }
                                    }
                                ]
                            },
                            {
                                "name": "Intimidation",
                                "displayname": "Intimidation",
                                "effects": [
                                    {
                                        "setskillproficiency": {
                                            "intimidation": "true"
                                        }
                                    }
                                ]
                            },
                            {
                                "name": "Investigation",
                                "displayname": "Investigation",
                                "effects": [
                                    {
                                        "setskillproficiency": {
                                            "investigation": "true"
                                        }
                                    }
                                ]
                            },
                            {
                                "name": "Medicine",
                                "displayname": "Medicine",
                                "effects": [
                                    {
                                        "setskillproficiency": {
                                            "medicine": "true"
                                        }
                                    }
                                ]
                            },
                            {
                                "name": "Nature",
                                "displayname": "Nature",
                                "effects": [
                                    {
                                        "setskillproficiency": {
                                            "nature": "true"
                                        }
                                    }
                                ]
                            },
                            {
                                "name": "Perception",
                                "displayname": "Perception",
                                "effects": [
                                    {
                                        "setskillproficiency": {
                                            "perception": "true"
                                        }
                                    }
                                ]
                            },
                            {
                                "name": "Persuasion",
                                "displayname": "Persuasion",
                                "effects": [
                                    {
                                        "setskillproficiency": {
                                            "persuasion": "true"
                                        }
                                    }
                                ]
                            },
                            {
                                "name": "Religion",
                                "displayname": "Religion",
                                "effects": [
                                    {
                                        "setskillproficiency": {
                                            "religion": "true"
                                        }
                                    }
                                ]
                            },
                            {
                                "name": "Sleight of Hand",
                                "displayname": "Sleight of Hand",
                                "effects": [
                                    {
                                        "setskillproficiency": {
                                            "sleight of hand": "true"
                                        }
                                    }
                                ]
                            },
                            {
                                "name": "Stealth",
                                "displayname": "Stealth",
                                "effects": [
                                    {
                                        "setskillproficiency": {
                                            "stealth": "true"
                                        }
                                    }
                                ]
                            },
                            {
                                "name": "Survival",
                                "displayname": "Survival",
                                "effects": [
                                    {
                                        "setskillproficiency": {
                                            "survival": "true"
                                        }
                                    }
                                ]
                            },
                            {
                                "name": "Tool",
                                "displayname": "Tool",
                                "effects": [
                                    {
                                        "addtoolproficiencies": [
                                            "one tool"
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    "addarmorproficiencies": [
                        "Light Armor",
                        "Medium Armor"
                    ]
                },
                {
                    "featuretextwithbullet": "Can cast the Mage Hand cantrip. At 3rd level, Jump (1\/day). At 5th level, Misty Step (1\/day) (use Int for DCs)"
                }
            ]
        },
        {
            "name": "Githzerai",
            "displayname": "Githzerai",
            "race": "Gith",
            "abilityscorebonuses": [
                {
                    "wisdom": "2"
                }
            ],
            "speed": "30",
            "languages": [
                ""
            ],
            "features": [
                {
                    "featuretext": "You have +1 AC when not wearing medium or heavy armor or using a shield."
                },
                {
                    "modifyarmorclassbonus": "1"
                },
                {
                    "featuretextwithbullet": "Can cast the Mage Hand cantrip. At 3rd level, Shield (1\/day). At 5th level, Detect Thoughts (1\/day) (use Wis for DCs)"
                }
            ]
        },
        {
            "name": "Aasimar Revenant",
            "displayname": "Aasimar Revenant",
            "race": "Aasimar",
            "abilityscorebonuses": [
                {
                    "constitution": "1"
                }
            ],
            "speed": "30",
            "languages": [
                ""
            ],
            "features": [
                {
                    "featuretext": "You are undead, select a goal with your DM, likely tied to your cause of death."
                },
                {
                    "featuretextwithbullet": "If you are below your hit point maximum at the start of your turn, regain one hit point."
                },
                {
                    "featuretextwithbullet": "If you die, you come back to \"life\" after 24 hours."
                },
                {
                    "featuretextwithbullet": "When you complete your goal, you die and cannot be returned to life."
                }
            ]
        },
        {
            "name": "Dragonborn",
            "displayname": "Dragonborn",
            "race": "Dragonborn",
            "abilityscorebonuses": [
                {
                    "strength": "1"
                }
            ],
            "languages": [
                ""
            ],
            "features": [
                {
                    "menu": {
                        "name": "Draconic Ancestry",
                        "title": "Draconic Ancestry",
                        "selections": "1",
                        "entries": [
                            {
                                "name": "Black",
                                "displayname": "Black",
                                "previewtext": "Breath Weapon: 30 ft line of acid\nGain acid resistance",
                                "effects": [
                                    {
                                        "featuretextwithbullet": "Black Dragon"
                                    },
                                    {
                                        "featuretextwithbullet": "As an action, you can breathe a 30 ft line of acid, dealing 2d6 acid damage, Dex save for half damage. DC = 8 + Con mod + prof (1\/rest)\nThis damage increases as you level up; 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level."
                                    },
                                    {
                                        "featuretextwithbullet": "You resist acid damage"
                                    }
                                ]
                            },
                            {
                                "name": "Blue",
                                "displayname": "Blue",
                                "previewtext": "Breath Weapon: 30 ft line of lightning\nGain lightning resistance",
                                "effects": [
                                    {
                                        "featuretextwithbullet": "Blue Dragon"
                                    },
                                    {
                                        "featuretextwithbullet": "As an action, you can breathe a 30 ft line of lightning, dealing 2d6 lightning damage, Dex save for half damage. DC = 8 + Con mod + prof (1\/ rest)\nThis damage increases as you level up; 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level."
                                    },
                                    {
                                        "featuretextwithbullet": "You resist lightning damage"
                                    }
                                ]
                            },
                            {
                                "name": "Brass",
                                "displayname": "Brass",
                                "previewtext": "Breath Weapon: 30 ft line of fire\nGain fire resistance",
                                "effects": [
                                    {
                                        "featuretextwithbullet": "Brass Dragon"
                                    },
                                    {
                                        "featuretextwithbullet": "As an action, you can breathe a 30 ft line of fire, dealing 2d6 fire damage, Dex save for half damage. DC = 8 + Con mod + prof (1\/rest)\nThis damage increases as you level up; 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level."
                                    },
                                    {
                                        "featuretextwithbullet": "You resist fire damage"
                                    }
                                ]
                            },
                            {
                                "name": "Bronze",
                                "displayname": "Bronze",
                                "previewtext": "Breath Weapon: 30 ft line of lightning\nGain lightning resistance",
                                "effects": [
                                    {
                                        "featuretextwithbullet": "Bronze Dragon"
                                    },
                                    {
                                        "featuretextwithbullet": "As an action, you can breathe a 30 ft line of lightning, dealing 2d6 lightning damage, Dex save for half damage. DC = 8 + Con mod + prof (1\/rest)\nThis damage increases as you level up; 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level."
                                    },
                                    {
                                        "featuretextwithbullet": "You resist lightning damage"
                                    }
                                ]
                            },
                            {
                                "name": "Copper",
                                "displayname": "Copper",
                                "previewtext": "Breath Weapon: 30 ft line of acid\nGain acid resistance",
                                "effects": [
                                    {
                                        "featuretextwithbullet": "Copper Dragon"
                                    },
                                    {
                                        "featuretextwithbullet": "As an action, you can breathe a 30 ft line of acid, dealing 2d6 acid damage, Dex save for half damage. DC = 8 + Con mod + prof (1\/rest)\nThis damage increases as you level up; 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level."
                                    },
                                    {
                                        "featuretextwithbullet": "You resist acid damage"
                                    }
                                ]
                            },
                            {
                                "name": "Gold",
                                "displayname": "Gold",
                                "previewtext": "Breath Weapon: 15 ft cone of fire\nGain fire resistance",
                                "effects": [
                                    {
                                        "featuretextwithbullet": "Gold Dragon"
                                    },
                                    {
                                        "featuretextwithbullet": "As an action, you can breathe a 15 ft cone of fire, dealing 2d6 fire damage, Dex save for half damage. DC = 8 + Con mod + prof (1\/rest)\nThis damage increases as you level up; 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level."
                                    },
                                    {
                                        "featuretextwithbullet": "You resist fire damage"
                                    }
                                ]
                            },
                            {
                                "name": "Green",
                                "displayname": "Green",
                                "previewtext": "Breath Weapon: 15 ft cone of poison\nGain poison resistance",
                                "effects": [
                                    {
                                        "featuretextwithbullet": "Green Dragon"
                                    },
                                    {
                                        "featuretextwithbullet": "As an action, you can breathe a 15 ft cone of poison, dealing 2d6 poison damage, Con save for half damage. DC = 8 + Con mod + prof (1\/rest)\nThis damage increases as you level up; 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level."
                                    },
                                    {
                                        "featuretextwithbullet": "You resist poison damage"
                                    }
                                ]
                            },
                            {
                                "name": "Red",
                                "displayname": "Red",
                                "previewtext": "Breath Weapon: 15 ft cone of fire\nGain fire resistance",
                                "effects": [
                                    {
                                        "featuretextwithbullet": "Red Dragon"
                                    },
                                    {
                                        "featuretextwithbullet": "As an action, you can breathe a 15 ft cone of fire, dealing 2d6 fire damage, Dex save for half damage. DC = 8 + Con mod + prof (1\/rest)\nThis damage increases as you level up; 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level."
                                    },
                                    {
                                        "featuretextwithbullet": "You resist fire damage"
                                    }
                                ]
                            },
                            {
                                "name": "Silver",
                                "displayname": "Silver",
                                "previewtext": "Breath Weapon: 15 ft cone of cold\nGain cold resistance",
                                "effects": [
                                    {
                                        "featuretextwithbullet": "Silver Dragon"
                                    },
                                    {
                                        "featuretextwithbullet": "As an action, you can breathe a 15 ft cone of cold, dealing 2d6 cold damage, Con save for half damage. DC = 8 + Con mod + prof (1\/rest)\nThis damage increases as you level up; 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level."
                                    },
                                    {
                                        "featuretextwithbullet": "You resist cold damage"
                                    }
                                ]
                            },
                            {
                                "name": "White",
                                "displayname": "White",
                                "previewtext": "Breath Weapon: 15 ft cone of cold\nGain cold resistance",
                                "effects": [
                                    {
                                        "featuretextwithbullet": "White Dragon"
                                    },
                                    {
                                        "featuretextwithbullet": "As an action, you can breathe a 15 ft cone of cold, dealing 2d6 cold damage, Con save for half damage. DC = 8 + Con mod + prof (1\/rest)\nThis damage increases as you level up; 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level."
                                    },
                                    {
                                        "featuretextwithbullet": "You resist cold damage"
                                    }
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        {
            "name": "Dragonborn Revenant",
            "displayname": "Dragonborn Revenant",
            "race": "Dragonborn",
            "abilityscorebonuses": [
                {
                    "strength": "1"
                },
                {
                    "constitution": "1"
                }
            ],
            "speed": "30",
            "languages": [
                ""
            ],
            "features": [
                {
                    "featuretext": "You are undead, select a goal with your DM, likely tied to your cause of death."
                },
                {
                    "featuretextwithbullet": "If you are below your hit point maximum at the start of your turn, regain one hit point."
                },
                {
                    "featuretextwithbullet": "If you die, you come back to \"life\" after 24 hours."
                },
                {
                    "featuretextwithbullet": "When you complete your goal, you die and cannot be returned to life."
                },
                {
                    "menu": {
                        "name": "Breath Weapon",
                        "title": "Breath Weapon",
                        "entries": [
                            {
                                "name": "30 ft line",
                                "displayname": "30 ft line",
                                "effects": [
                                    {
                                        "featuretext": "• Undead Dragon\n• As an action, you can breathe a 30 ft line of necrotic energy, dealing 2d6 necrotic damage, Con save for half damage. DC = 8 + Con mod + prof (1\/rest)\nThis damage increases as you level up; 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level.\n• You resist necrotic damage"
                                    }
                                ]
                            },
                            {
                                "name": "15 ft cone",
                                "displayname": "15 ft cone",
                                "effects": [
                                    {
                                        "featuretext": "• Undead Dragon\n• As an action, you can breathe a 15 ft cone of necrotic energy, dealing 2d6 necrotic damage, Con save for half damage. DC = 8 + Con mod + prof (1\/rest)\nThis damage increases as you level up; 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level.\n• You resist necrotic damage"
                                    }
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        {
            "name": "Dwarf Revenant",
            "displayname": "Dwarf Revenant",
            "race": "Dwarf",
            "abilityscorebonuses": [
                {
                    "constitution": "1"
                }
            ],
            "speed": "30",
            "languages": [
                ""
            ],
            "features": [
                {
                    "featuretext": "You are undead, select a goal with your DM, likely tied to your cause of death."
                },
                {
                    "featuretextwithbullet": "If you are below your hit point maximum at the start of your turn, regain one hit point."
                },
                {
                    "featuretextwithbullet": "If you die, you come back to \"life\" after 24 hours."
                },
                {
                    "featuretextwithbullet": "When you complete your goal, you die and cannot be returned to life."
                }
            ]
        },
        {
            "name": "Elf Revenant",
            "displayname": "Elf Revenant",
            "race": "Elf",
            "abilityscorebonuses": [
                {
                    "constitution": "1"
                }
            ],
            "speed": "30",
            "languages": [
                ""
            ],
            "features": [
                {
                    "featuretext": "You are undead, select a goal with your DM, likely tied to your cause of death."
                },
                {
                    "featuretextwithbullet": "If you are below your hit point maximum at the start of your turn, regain one hit point."
                },
                {
                    "featuretextwithbullet": "If you die, you come back to \"life\" after 24 hours."
                },
                {
                    "featuretextwithbullet": "When you complete your goal, you die and cannot be returned to life."
                }
            ]
        },
        {
            "name": "Genasi Revenant",
            "displayname": "Genasi Revenant",
            "race": "Genasi",
            "abilityscorebonuses": [
                {
                    "constitution": "1"
                }
            ],
            "speed": "30",
            "languages": [
                ""
            ],
            "features": [
                {
                    "featuretext": "You are undead, select a goal with your DM, likely tied to your cause of death."
                },
                {
                    "featuretextwithbullet": "If you are below your hit point maximum at the start of your turn, regain one hit point."
                },
                {
                    "featuretextwithbullet": "If you die, you come back to \"life\" after 24 hours."
                },
                {
                    "featuretextwithbullet": "When you complete your goal, you die and cannot be returned to life."
                }
            ]
        },
        {
            "name": "Gnome Revenant",
            "displayname": "Gnome Revenant",
            "race": "Gnome",
            "abilityscorebonuses": [
                {
                    "constitution": "1"
                }
            ],
            "speed": "30",
            "languages": [
                ""
            ],
            "features": [
                {
                    "featuretext": "You are undead, select a goal with your DM, likely tied to your cause of death."
                },
                {
                    "featuretextwithbullet": "If you are below your hit point maximum at the start of your turn, regain one hit point."
                },
                {
                    "featuretextwithbullet": "If you die, you come back to \"life\" after 24 hours."
                },
                {
                    "featuretextwithbullet": "When you complete your goal, you die and cannot be returned to life."
                }
            ]
        },
        {
            "name": "Half-Elf Revenant",
            "displayname": "Half-Elf Revenant",
            "race": "Half-Elf",
            "abilityscorebonuses": [
                {
                    "constitution": "1"
                }
            ],
            "speed": "30",
            "languages": [
                ""
            ],
            "features": [
                {
                    "featuretext": "You are undead, select a goal with your DM, likely tied to your cause of death."
                },
                {
                    "featuretextwithbullet": "If you are below your hit point maximum at the start of your turn, regain one hit point."
                },
                {
                    "featuretextwithbullet": "If you die, you come back to \"life\" after 24 hours."
                },
                {
                    "featuretextwithbullet": "When you complete your goal, you die and cannot be returned to life."
                }
            ]
        },
        {
            "name": "Halfling Revenant",
            "displayname": "Halfling Revenant",
            "race": "Halfling",
            "abilityscorebonuses": [
                {
                    "constitution": "1"
                }
            ],
            "speed": "30",
            "languages": [
                ""
            ],
            "features": [
                {
                    "featuretext": "You are undead, select a goal with your DM, likely tied to your cause of death."
                },
                {
                    "featuretextwithbullet": "If you are below your hit point maximum at the start of your turn, regain one hit point."
                },
                {
                    "featuretextwithbullet": "If you die, you come back to \"life\" after 24 hours."
                },
                {
                    "featuretextwithbullet": "When you complete your goal, you die and cannot be returned to life."
                }
            ]
        },
        {
            "name": "Human Revenant",
            "displayname": "Human Revenant",
            "race": "Human",
            "abilityscorebonuses": [
                {
                    "constitution": "1"
                },
                {
                    "select2": [
                        {
                            "strength": "1"
                        },
                        {
                            "dexterity": "1"
                        },
                        {
                            "constitution": "1"
                        },
                        {
                            "intelligence": "1"
                        },
                        {
                            "wisdom": "1"
                        },
                        {
                            "charisma": "1"
                        }
                    ]
                }
            ],
            "speed": "30",
            "languages": [
                ""
            ],
            "features": [
                {
                    "featuretext": "You are undead, select a goal with your DM, likely tied to your cause of death."
                },
                {
                    "featuretextwithbullet": "If you are below your hit point maximum at the start of your turn, regain one hit point."
                },
                {
                    "featuretextwithbullet": "If you die, you come back to \"life\" after 24 hours."
                },
                {
                    "featuretextwithbullet": "When you complete your goal, you die and cannot be returned to life."
                }
            ]
        },
        {
            "name": "Beasthide Shifter",
            "displayname": "Beasthide Shifter",
            "race": "Shifter",
            "abilityscorebonuses": [
                {
                    "dexterity": "1"
                }
            ],
            "speed": "30",
            "languages": [
                ""
            ],
            "features": [
                {
                    "replacestringfromfeaturetext": {
                        "replacementtext": "Your AC increases by 1.",
                        "find": "(Subrace feature)"
                    }
                }
            ]
        },
        {
            "name": "Cliffwalk Shifter",
            "displayname": "Cliffwalk Shifter",
            "race": "Shifter",
            "abilityscorebonuses": [
                {
                    "dexterity": "1"
                }
            ],
            "speed": "30",
            "languages": [
                ""
            ],
            "features": [
                {
                    "replacestringfromfeaturetext": {
                        "replacementtext": "You have a climb speed of 30'",
                        "find": "(Subrace feature)"
                    }
                }
            ]
        },
        {
            "name": "Longstride Shifter",
            "displayname": "Longstride Shifter",
            "race": "Shifter",
            "abilityscorebonuses": [
                {
                    "dexterity": "1"
                }
            ],
            "speed": "30",
            "languages": [
                ""
            ],
            "features": [
                {
                    "replacestringfromfeaturetext": {
                        "replacementtext": "You can dash as a bonus action",
                        "find": "(Subrace feature)"
                    }
                }
            ]
        },
        {
            "name": "Longtooth Shifter",
            "displayname": "Longtooth Shifter",
            "race": "Shifter",
            "abilityscorebonuses": [
                {
                    "dexterity": "1"
                }
            ],
            "speed": "30",
            "languages": [
                ""
            ],
            "features": [
                {
                    "replacestringfromfeaturetext": {
                        "replacementtext": "You can make a bite attack as an action, for 1d6 piercing. If you hit a creature your size or smaller it is grappled.",
                        "find": "(Subrace feature)"
                    }
                }
            ]
        },
        {
            "name": "Razorclaw Shifter",
            "displayname": "Razorclaw Shifter",
            "race": "Shifter",
            "abilityscorebonuses": [
                {
                    "dexterity": "1"
                }
            ],
            "speed": "30",
            "languages": [
                ""
            ],
            "features": [
                {
                    "replacestringfromfeaturetext": {
                        "replacementtext": "You can dash as a bonus action",
                        "find": "(Subrace feature)"
                    }
                }
            ]
        },
        {
            "name": "Shifter Revenant",
            "displayname": "Shifter Revenant",
            "race": "Shifter",
            "abilityscorebonuses": [
                {
                    "constitution": "1"
                }
            ],
            "speed": "30",
            "languages": [
                ""
            ],
            "features": [
                {
                    "featuretext": "You are undead, select a goal with your DM, likely tied to your cause of death."
                },
                {
                    "featuretextwithbullet": "If you are below your hit point maximum at the start of your turn, regain one hit point."
                },
                {
                    "featuretextwithbullet": "If you die, you come back to \"life\" after 24 hours."
                },
                {
                    "featuretextwithbullet": "When you complete your goal, you die and cannot be returned to life."
                }
            ]
        },
        {
            "name": "Wildhunt Shifter",
            "displayname": "Wildhunt Shifter",
            "race": "Shifter",
            "abilityscorebonuses": [
                {
                    "dexterity": "1"
                }
            ],
            "speed": "30",
            "languages": [
                ""
            ],
            "features": [
                {
                    "replacestringfromfeaturetext": {
                        "replacementtext": "You have advantage on all Wisdom checks and saving throws.",
                        "find": "(Subrace feature)"
                    }
                }
            ]
        },
        {
            "name": "Abyssal Tiefling",
            "displayname": "Abyssal ",
            "race": "Tiefling",
            "useracename": "true",
            "abilityscorebonuses": [
                {
                    "constitution": "1"
                }
            ],
            "speed": "30",
            "languages": [
                "Abyssal (Replaces Infernal)"
            ],
            "features": [
                {
                    "featuretext": "Your innate spells change every time you take a long rest. See UA:  That Old Black Magic for details."
                }
            ]
        },
        {
            "name": "Tiefling Revenant",
            "displayname": "Tiefling Revenant",
            "race": "Tiefling",
            "abilityscorebonuses": [
                {
                    "constitution": "1",
                    "charisma": "2"
                }
            ],
            "speed": "30",
            "languages": [
                ""
            ],
            "features": [
                {
                    "featuretext": "You are undead, select a goal with your DM, likely tied to your cause of death."
                },
                {
                    "featuretextwithbullet": "If you are below your hit point maximum at the start of your turn, regain one hit point."
                },
                {
                    "featuretextwithbullet": "If you die, you come back to \"life\" after 24 hours."
                },
                {
                    "featuretextwithbullet": "When you complete your goal, you die and cannot be returned to life."
                }
            ]
        },
        {
            "name": "Firemane",
            "displayname": "Firemane",
            "race": "lionen",
            "abilityscorebonuses": [
                {
                    "intelligence": "1"
                }
            ],
            "speed": "30",
            "languages": [
                ""
            ],
            "features": [
                {
                    "featuretextwithbullet": "Leonin Preparation. You are ready for the next threat. You can use your Intelligence modifier instead of your Dexterity modifier when rolling initiative."
                }
            ]
        },
        {
            "name": "ironclaw",
            "displayname": "Ironclaw",
            "race": "lionen",
            "abilityscorebonuses": [
                {
                    "charisma": "1"
                }
            ],
            "speed": "30",
            "languages": [
                ""
            ],
            "features": [
                {
                    "featuretextwithbullet": "Leonin Aggression. Your enemies fear how dangerous you can be. As a bonus action, you can move up to your speed to a hostile creature of your choice that you can see. You must end this move closer to the creature than you started."
                }
            ]
        },
        {
            "name": "Zenko",
            "displayname": "Zenko",
            "race": "Kitsune",
            "abilityscorebonuses": [
                {
                    "wisdom": "1"
                }
            ],
            "speed": "30",
            "languages": [
                "Celestial"
            ],
            "features": [
                {
                    "featuretextwithbullet": "Kitsune Divinity. You know the produce flame cantrip, with the exception that your flame is blue. When you reach 3rd level, you can cast the bless spell once and need to finish a long rest before you can cast it again. When you reach 5th level, you can also cast the calm emotions spell once and need to finish a long rest before you can cast it again. Charisma is your spellcasting ability for these spells."
                },
                {
                    "featuretextwithbullet": "Second Langauge. You can speak, read and write Celestial."
                }
            ]
        },
        {
            "name": "Yako",
            "displayname": "Yako",
            "race": "Kitsune",
            "abilityscorebonuses": [
                {
                    "dexterity": "1"
                }
            ],
            "speed": "30",
            "languages": [
                "Sylvan"
            ],
            "features": [
                {
                    "featuretextwithbullet": "Kitsune Arcana. You know the produce flame cantrip, with the exception that your flame is blue. When you reach 3rd level, you can cast the cause fear[1] spell once and need to finish a long rest before you can cast it again. When you reach 5th level, you can also cast the phantasmal force spell once and need to finish a long rest before you can cast it again. Charisma is your spellcasting ability for these spells."
                },
                {
                    "featuretextwithbullet": "Second Langauge. You can speak, read and write Sylvan."
                }
            ]
        },
        {
            "name": "Light armor soulbound",
            "displayname": "Light armor soulbound ",
            "race": "Soulbound",
            "abilityscorebonuses": [
                {
                    "dexterity": "1"
                }
            ],
            "speed": "40",
            "languages": [
                ""
            ],
            "features": [
                {
                    "featuretextwithbullet": "Armor class. Your AC is equal to 8 plus your Dexterity modifier, plus your proficiency bonus."
                },
                {
                    "featuretextwithbullet": "Lightweight. Your base speed is 40ft."
                }
            ]
        },
        {
            "name": "Medium armor soulbound ",
            "displayname": "Medium armor soulbound ",
            "race": "Soulbound",
            "abilityscorebonuses": [
                {
                    "select1": [
                        {
                            "strength": "1"
                        },
                        {
                            "dexterity": "1"
                        }
                    ]
                }
            ],
            "speed": "30",
            "languages": [
                ""
            ],
            "features": [
                {
                    "featuretextwithbullet": "Flexible. You can take the Dodge action as a bonus action a number of times equal to your Dexterity modifier(minimum 1). You regain all expended uses of this trait when you complete a long rest.\n\n• Armor class. Your AC is equal to 11 plus your Dexterity modifier (Max 2) plus your proficiency bonus."
                }
            ]
        },
        {
            "name": "Heavy armor soulbound ",
            "displayname": "Heavy armor soulbound ",
            "race": "Soulbound",
            "abilityscorebonuses": [
                {
                    "strength": "1"
                }
            ],
            "speed": "30",
            "languages": [
                ""
            ],
            "features": [
                {
                    "featuretextwithbullet": "Heavy plating. At the end of a short or long rest, you gain temporary hit points equal to your level.\n\n• Armor class. Your AC is equal to 15 plus your dexterity bonus.\n\n"
                }
            ]
        }
    ],
    "classes": [
        {
            "name": "Transmutation alchemist ",
            "displayname": "Transmutation Alchemist ",
            "hitdie": "10",
            "armorproficiencies": [
                "Medium Armor",
                "Shield's"
            ],
            "weaponproficiencies": [
                "Simple Weapons",
                "Martial Weapons"
            ],
            "toolproficiencies": [
                "alchemists supplies"
            ],
            "languages": [
                "Common",
                "one extra language "
            ],
            "equipment": [
                {
                    "selection": [
                        {
                            "armor": {
                                "name": "Hide"
                            }
                        },
                        {
                            "weapon": {
                                "range": "melee"
                            }
                        }
                    ]
                },
                {
                    "selection": [
                        {
                            "armor": {
                                "name": "Shield"
                            }
                        },
                        {
                            "weapon": {
                                "type": "simple"
                            }
                        }
                    ]
                },
                {
                    "selection": [
                        "explorers pack",
                        "scholars pack"
                    ]
                },
                "chalk "
            ],
            "saveproficiencies": [
                "constitution",
                "intelligence"
            ],
            "classskills": [
                "arcana",
                "insight",
                "intimidation",
                "medicine",
                "nature",
                "perception",
                "religion",
                "survival"
            ],
            "skillcount": "4",
            "spellcastingability": "intelligence",
            "multiclass": {
                "abilityscoreprerequisites": [],
                "armorproficiencies": [
                    "Medium Armor",
                    "Shield"
                ],
                "weaponproficiencies": [
                    "Martial Weapons",
                    "Simple Weapons"
                ],
                "skillcount": "1"
            },
            "level": {
                "1": [
                    {
                        "featuretextwithbullet": "Transmutation ability \n\nTransmutation Save DC 8 + Int mod + Proficiency\nTransmutation Attack Modifier Int mod + Proficiency\nAlchemic Stamina You use Alchemic Stamina to Fuel your transmutation circles. You must have the specified amount of Alchemic Stamina left to activate a Transmutation Circle. You regain your Alchemic Stamina after a short rest. \nyour alchemic stamina is 12 at 1st lvl, this pool increases by 2 points each level you take into transmutation alchemist. at 20th lvl you have 50 alchemic stamina.\n"
                    },
                    {
                        "featuretextwithbullet": "Transmutation Circle\n\nAlchemist manifest their powers through the use of transmutation circles.To make a Circle of a specific element requires the presence of the element within 60ft of the Circle. Using a circle is an Action. Some circles can be further empowered by overloading it with extra Alchemical Stamina. Circles come in varying sizes. The Size of the Circle determines its Base Cost as well as its time to Use.\n\nSmall 2 Bonus Action \nMedium 4 Action\nLarge 6 Action + Bonus Action\n\n"
                    },
                    {
                        "featuretextwithbullet": "Equivalent Exchange\n\nIn order for a transmutation to succeed, an equal or greater amount of the source material must be present to fuel the reaction. If enough of the source material is not present, however, the reaction fails. You can only manipulate (10 X Alchemist LV X Proficency X int mod) pounds.\n"
                    },
                    {
                        "setresource": {
                            "name": "Stamina",
                            "amount": "12",
                            "spendable": "true",
                            "displayname": "Stamina",
                            "reset": "shortrest"
                        }
                    },
                    {
                        "featuretextwithbullet": "Alchemical Origin\n\nAll Alchemists draw the energy from a specific source, At level 1 pick which source you draw your alchemy from.\n\nLiving Puppet Alchemy\n\nCreating A Construct You can create a construct which has the challenge rating of your Transmutation Alchemist Level or lower. you may only have 6 constructs depending on level which you are at the time of creating a construct, if you create another one while you have more constructs than you can control the oldest one you have created will die. when you create a construct you must ask the dm how much each construct is worth and once you have created a construct you lose the same amount of hit points as the construct has. It takes an action to command all your constructs or a bonus action to command a single construct.\nAdditional Modifications Modifications only available for Living Puppet Alchemists\n\nMarking Transmutation\ncost 1\nDestroy a Construct with the CR of your level or lower\n\n\nBlood Constructs At 3rd Level,you can have 2 constructs which you can create, in one plane. additionally you can also instead of having everything you need to make a construct you will only require 1 of the things needed if you use your blood on that thing but you will take damage equal to your Alchemist level if you create this way.\nConstruct Melding. At 5th level, you can hide in one of your constructs, until it dies. you may have 4 constructs in one plane.\nMonsterous Alchemy. At 10th Level You can create Monstrositys at the cost of 2 constructs and the Dm will decided what ingrediants they will need. also you can have 6 constructs in one plane. the same rules apply to monstrositys and constructs\n\nTectonic Alchemy\n\nEarth's Power The use of the energy from the tectonic shifts and geothermal currents to control your Alchemy.\nAdditional Modifications Modifications only available for Tectonic Alchemists\n\nMarking Transmutation\ncost 1\nChoose one creature targeted by the transmutation, You gain advantage to that creature on your next transmutation attack\n\n\nTransmutation Strike At 3rd Level, after spending the needed time to use a Transmutation Circle instead of activating it you may Concentrate it into your weapon releasing it in the next melee attack. Your type of damage changes to the type of Transmutation Circle used, you also deal an extra 1d4 points of damage for every point of Alchemical Stamina put into the Transmutation Circle.\nDedicated Study. At 5th level, double all instances of alchemical Study.\nPracticed Alchemist. At 10th Level, when you use your standard action to activate a Transmutation Circle you may activate one additional Transmutation Circle for a total of 2 per action. This increases to 3 at 15th Level. This increases to 4 at 20th Level.\n\nXing Alkahestry\n\nFluid Alkahestry. The use of the flow of energy inside the planet and the tides to power your alchemy.\nTransmutation Transistor At 3rd Level you can turn one weapon or ammunition of your choice to a Transistor. To create a transistor you must spend a short rest allowing your energy to flow through it connecting your energy with it. The number of transistors you can make increases by 1 every 3 levels after.\nTransmutation Transition At 3rd Level you can plant one Transistor and cause the effect of a Transmutation Circle to occur at the location of your transistor instead. This increases by 1 every 3 levels after.\nAlchemic Touch At 5th level gain the ability to boost a creatures energy by expending Alchemy Points, They gain 1d6 temporary Hit points Per Alchemy Point Used, Increases to 1d8 Per Alchemy Point Used at 10th level, Increases to 1d10 Per Alchemy Point Used at 15th level, Increases to 1d12 Per Alchemy Point Used at 20th level.\nAdditional Modifications Modifications only available with Xingese Alkahestry\n\nResonance\n1\/2 The Transmutation Circles Cost per Transistor \nActivate a circle at multiple transistors\n\n\nTransition Gate At 7th level, gain the ability to transport a creature or object of up to Medium size between you and one of your transistors as an Action, this increases to Large at 15th Level, this increases to Huge at 20th Level\n\n"
                    },
                    {
                        "showresource": "Stamina"
                    }
                ],
                "2": [
                    {
                        "featuretextwithbullet": "Alchemical Study\n\nYou gain Affinity for 1 of the Following: Water, Earth, Fire, Air, Electricity, Metal, Organic(plant), Organic(flesh)\n\nAffinity Level You can pick the same Study more than once, this gives you a new bonus for each rank reached. When first chosen the Affinity starts at Minor and increases with each time chosen. You gain this feature again every 3 LVs.\n\nMinor - Add Your Transmutation Attack Modifier to the Attack Roll\n\nMajor - Add half Your Transmutation Attack Modifier to your AC\n\nLesser - Increase the Base Range by 50%\n\nModerate - Increase the Base Duration by 50%\n\nGreater - Half the Amount of Alchemic Stamina needed for the Base Transmutation Circle Cost Rounded Down\n\nPerfect - Half the amount of Alchemic Stamina needed to Overload it rounded down\n\n"
                    },
                    {
                        "featuretextwithbullet": "Alchemic makeup\n\nyou touch an object as a bonus action and you make tell its basic composition. if the material matches an alchemic study you have chosen you can determine the exact composition of an object as well as anything in direct contact with the object."
                    },
                    {
                        "modifyresource": {
                            "name": "Stamina",
                            "amount": "2"
                        }
                    }
                ],
                "3": [
                    {
                        "featuretextwithbullet": "Combat alchemy\n\nWhen you use an Action other than to activate a Circle, you may activate a Circle up to Medium size as a bonus action.\n"
                    },
                    {
                        "archetypemenu": ""
                    },
                    {
                        "modifyresource": {
                            "name": "Stamina",
                            "amount": "2"
                        }
                    }
                ],
                "4": [
                    {
                        "abilityscoreimprovement": ""
                    },
                    {
                        "featuretextwithbullet": "Alchemic recovery\n\nOnce per short rest you may regain 1\/2 your max alchemical Stamina.\n"
                    },
                    {
                        "featuretextwithbullet": "Transmutation Tattoo\n\nAt Every 4th level you may etch a transmutation circle permanently anywhere on your body, then taking 2d6 necrotic damage. The Circle may be used a number of times (alchemist’s LV + int mod + proficiency) per long rest\n"
                    },
                    {
                        "modifyresource": {
                            "name": "Stamina",
                            "amount": "2"
                        }
                    }
                ],
                "5": [
                    {
                        "featuretextwithbullet": "Alchemical Study\n\nYou gain Affinity for 1 of the Following: Water, Earth, Fire, Air, Electricity, Metal, Organics(plant), Organics(Flesh)\n"
                    },
                    {
                        "modifyresource": {
                            "name": "Stamina",
                            "amount": "2"
                        }
                    }
                ],
                "6": [
                    {
                        "featuretextwithbullet": "Transmutation Modification\n\nEvery 2 levels, starting at the 6th level, you gain the ability to enhance the use of a Transmutation Circle in ways other than overloading it. The Additional cost is determined after any overloading. You may use it like a overload, doubling the amount needed to double the effect. Gain the effect of one of the following:\n\nRapid Transmutation\n1\/2 The Transmutation Circles Cost, The time required to activate a Circle is halved (Action -> Bonus Action, Bonus Action -> Free Action)\n\nAlchemic Recycling\n1\/2 The Transmutation Circles Cost, You can reuse the same Transmutation Circle again as a Bonus Action\n\nEmpowered Transmutation \n1\/2 The Transmutation Circles Cost, You double the range or duration of the circle\n\nDeadly Transmutation\nThe Transmutation Circles Cost 2x, deal 2x the normal amount of damage dealt by the circle.\n\nTransmutation Trap\n1 Point Per Turn\nThe Circle is not activated until a creature moves onto a designated space within 30ft\n\nPlanned Transmutation\n2 Points\nChose a number of creatures in the area affected by your Transmutation Circle. Those creatures automatically pass their Saves and take no damage\n\nBrutal Transmutation\n3 Points\nYou may reroll 1s on damage dice up to your intelligence modifier. (must be used before damage is rolled)"
                    },
                    {
                        "modifyresource": {
                            "name": "Stamina",
                            "amount": "2"
                        }
                    }
                ],
                "7": [
                    {
                        "featuretextwithbullet": "Red stone\n\nBeginning at 7th level, over 12 hours you may create an object of immense alchemical power called a red stone. In order to create a red stone, you must perform a transmutation in the presence of 1 or more dead humanoids killed within 2 hours of the reaction. During the reaction, the souls of the present corpses are gathered together and solidified into an red colored stone of a size of your choosing and souls contained or captured in your philosophers stone cannot be magically revived except for the 'Wish' spell. You can add additional souls into your stone without an 8 hour ritual, rather, you simply need to place the corpse in a transmutation circle with the stone in the middle for 1 minute. Even if you have more than 1 stone, the effects of the stones do not stack. You may affix this stone to a necklace, earring, ring, or bracelet. you gain access to each ability at the assigned soul level, the use of the ability also consumes the souls. if no souls remain the stone shatters and becomes useless.\n\n\n7souls\nYou no longer need to draw transmutation circles to perform alchemy, and may ignore Equivalent Exchange when performing Alchemy.\n\n8 souls\nAdd 1 point per 2 souls to your Alchemy attack modifier, Save DC, or AC per turn with a maximum of 5 points. This effect lasts until your next turn.\n\n9 souls \nYou may add your Alchemy attack modifier twice when determining damage.\n\n10 souls\nPerforming alchemy only costs a bonus action, and your transmutation tattoo is reduced to a free action.\n\n11 souls\nAs an action, heal 10 + Alchemist Level + int mod + Proficiency + souls = hit points. This ability consumes the souls you use. A minimum of one soul is used per use with a maximum of 5.\n\n12 souls\nAs an bonus action per turn you can gain advantage for the entire turn at the cost of consuming 5 souls.\n\n13 souls\nGain expertise in all skills you have proficiency in until the end of your next turn\n\n14 souls\nSucceed any saving throw at the cost of 10 souls.\n\n15 souls\nAs a reaction to an attack you may create a wall to block the attack within 120ft at the cost of consuming 1 soul.\n\n16souls\nOnce per day as an action on your turn, you may chose a point within a 120ft range. Within a 20ft radius from that point, creatures lose any negative conditions affecting them (poisoned, stunned, frightened etc)\n"
                    },
                    {
                        "modifyresource": {
                            "name": "Stamina",
                            "amount": "2"
                        }
                    }
                ],
                "8": [
                    {
                        "abilityscoreimprovement": ""
                    },
                    {
                        "featuretextwithbullet": "Alchemical Study\n\nYou gain Affinity for 1 of the Following: Water, Earth, Fire, Air, Electricity, Metal, Organic(plant), Organic(flesh)\n"
                    },
                    {
                        "featuretextwithbullet": "Transmutation Modification \n"
                    },
                    {
                        "modifyresource": {
                            "name": "Stamina",
                            "amount": "2"
                        }
                    }
                ],
                "9": [
                    {
                        "featuretextwithbullet": "Soul Bonding\n\nBeginning at 9th level, upon the death of any humanoid you may perform a transmutation to bond their soul to a set of armor. The suit of armor may be pre-existing or alchemically created during the reaction. The creature retains all languages it knew in its previous life and retains any proficiencies it had, along with any proficiencies that you have and choose to give it. You may force the creature to make a DC 18 intelligence saving throw. On a failed save, the creature is charmed by you and follows your orders for (level)d6 hours. On a successful save the creature retains its free will but takes 2d10s of psychic damage. During this transmutation, you take 5d10s of necrotic damage, then multiply your hit points by two to find the construct's total hit points. The created construct does not need to eat, breathe, or sleep, has a natural armor of 18, and cannot wear additional armor. It has immunity to poison and psychic damage, and resistance to fire and physical attacks. It regains all hit points at midnight of each day, and if sufficient material is nearby, the creator can use the mend circle to restore hit points to the construct. If you hold a philosopher's stone, the creature is permanently charmed by you and will follow you orders.\n\nthe dm may choose if you lose a portion of your physical body during this process."
                    },
                    {
                        "modifyresource": {
                            "name": "Stamina",
                            "amount": "2"
                        }
                    }
                ],
                "10": [
                    {
                        "featuretextwithbullet": "Alchemic Meditation\n\nAt 10th Level you can spend your standard action meditating. This lets you regain Alchemical Stamina equal to half your level. You regain use of this feature after a long rest. At 20th Level gain a second use of this ability each long rest.\n"
                    },
                    {
                        "featuretextwithbullet": "Transmutation Modification "
                    },
                    {
                        "modifyresource": {
                            "name": "Stamina",
                            "amount": "2"
                        }
                    }
                ],
                "11": [
                    {
                        "featuretextwithbullet": "Alchemical Study\n\nYou gain Affinity for 1 of the Following: Water, Earth, Fire, Air, Electricity, Metal, Organic(plant), Organic(flesh)"
                    },
                    {
                        "featuretextwithbullet": "Chimera\n\nStarting at 11th level, You may attempt to make your own chimera. The chimera appearance is determined by the DM and the Alchemist. The stats of the animal are both stats combined divided by 2. The animals CR cannot be higher than half your Alchemist Level. The amount of time required to create a Chimera is equal to the final CR of the animal.\nIt is charmed by you and follows your orders. It rolls its own initiative in combat. You can only have at most 2, and when you try to form the third, the oldest one is destroyed. The chimera gains all the natural weapons of its component parts. Its hit points are equal the sum of its component parts. The resulting creature is one size larger than the largest component creature. You cannot use a chimera's corpse as one of the composite corpses. If you are wielding a red stone, you may substitute one of the component beasts with a humanoid's corpse.\n"
                    },
                    {
                        "modifyresource": {
                            "name": "Stamina",
                            "amount": "2"
                        }
                    }
                ],
                "12": [
                    {
                        "abilityscoreimprovement": ""
                    },
                    {
                        "featuretextwithbullet": "Transmutation Modification "
                    },
                    {
                        "modifyresource": {
                            "name": "Stamina",
                            "amount": "2"
                        }
                    }
                ],
                "13": [
                    {
                        "featuretextwithbullet": "Bio-Alchemy[edit]\n\nAs you reach level 13, you have begun your studies in the field of Human Transmutation and may bolster a humanoids' strength, dexterity or constitution score. To do so, you may perform a ritual that drains the strength, dexterity, or constitution of one target humanoid and bestowing it on another (Max 20). You may use yourself as either target. This ritual takes 1 hour per every 2 points drained. This change is unnatural however, and for every 2 points added every hour you take 1d6 necrotic damage. This change is reversed after you take a long rest. You may use a red stone to make the change permanent, but for a maximum of 2 points. The red stone is consumed and you may only do this to a person once. You may also now use Alchemy to deconstruct or reconstruct sentient beings. When attempting to deconstruct someone, the target may make a dexterity saving throw, the target takes (1\/2*Alchemist Level)d6 damage on a failed save, or none on a successful save, this damage can be targeted at a specific limb. When using Reconstruction, it heals the target for the damage it would have done instead, and can repair one limb at a time. You may use this ability a number of times equal to your intelligence modifier, all uses of this ability are refreshed after a long rest.\n"
                    },
                    {
                        "modifyresource": {
                            "name": "Stamina",
                            "amount": "2"
                        }
                    }
                ],
                "14": [
                    {
                        "featuretextwithbullet": "Transmutation Modification "
                    },
                    {
                        "featuretextwithbullet": "Alchemical Study\n\nYou gain Affinity for 1 of the Following: Water, Earth, Fire, Air, Electricity, Metal, Organic(plant), Organic(flesh)"
                    },
                    {
                        "modifyresource": {
                            "name": "Stamina",
                            "amount": "2"
                        }
                    }
                ],
                "15": [
                    {
                        "featuretextwithbullet": "Transmuting without a matrix\n\nFrom 15th level on, you no longer need a transmutation circle in order to perform your alchemy.\n"
                    },
                    {
                        "modifyresource": {
                            "name": "Stamina",
                            "amount": "2"
                        }
                    }
                ],
                "16": [
                    {
                        "featuretextwithbullet": "Transmutation Modification "
                    },
                    {
                        "abilityscoreimprovement": ""
                    },
                    {
                        "modifyresource": {
                            "name": "Stamina",
                            "amount": "2"
                        }
                    }
                ],
                "17": [
                    {
                        "featuretextwithbullet": "Alchemical Study\n\nYou gain Affinity for 1 of the Following: Water, Earth, Fire, Air, Electricity, Metal, Organic(plant), Organic(flesh)"
                    },
                    {
                        "modifyresource": {
                            "name": "Stamina",
                            "amount": "2"
                        }
                    }
                ],
                "18": [
                    {
                        "featuretextwithbullet": "Human Transmutation\n\nFrom level 18 on, you may use a special form of alchemy called human transmutation. With this comes 3 very advanced transmutations. You may also use your own alchemic power to activitie one of the following transmutions as an action instead of the normal transmutation time at the cost of you losing your ability to use alchemy\/magic after the transmutation is complete you lose all your alchemic\/magical talents and can never use magic\/alchemy ever again.\n\nResurrective Alchemy\nWhile wielding a 25 soul red stone you may perform a transmutation that returns the soul of a dead humanoid to its body. The body is restored as well. This transmutation takes 1 hours to perform and may be done over a long rest but you cannot use this feature on a person that has been dead for more than 2 hours. Your red stone is consumed in the transmutation during this reaction.\n\nRestorative Alchemy\nWhile wielding a 20 soul red stone you may perform a transmutation to return a soul bonded creature to its original body. The creature now ages and can die of old age. It needs to eat, sleep, and breathe as well. This transmutation takes 1 hours to perform. Your red stone is consumed during this reaction.\n\nCreative Alchemy\nWhile wielding a 30 soul red stone you may perform a transmutation to create a brand new humanoid. You must use a separate humanoid as a blueprint. You may not use yourself as this blueprint. The humanoid is an exact copy of the blueprint creature including class features, hit points, speed, abilities, and skills. It needs to roll Intel check of DC 18 or it is charmed by you and follows your commands. Your red stone is consumed during this reaction. You can command only up to 2 of this creation.\n"
                    },
                    {
                        "modifyresource": {
                            "name": "Stamina",
                            "amount": "2"
                        }
                    }
                ],
                "19": [
                    {
                        "abilityscoreimprovement": ""
                    },
                    {
                        "featuretextwithbullet": "Alchemical rejuvenation\n\nAt 19th level during a short rest or long rest regain alchemical Stamina equal to your max & if you gain more alchemical Stamina then your max you gain the rest as temporary alchemical Stamina. Temporary alchemical Stamina go away if you take a short or long rest this feature can only once per day.\n"
                    },
                    {
                        "modifyresource": {
                            "name": "Stamina",
                            "amount": "2"
                        }
                    }
                ],
                "20": [
                    {
                        "featuretextwithbullet": "Alchemical Study\n\nYou gain Affinity for 1 of the Following: Water, Earth, Fire, Air, Electricity, Metal, Organic(plant), Organic(flesh)"
                    },
                    {
                        "featuretextwithbullet": "Transmutation Modification "
                    },
                    {
                        "featuretextwithbullet": "The Truth\n\nAt 20th level, your portal of truth is full and you are able to transmute at will. You no longer need your transmutation tattoos but you can use them to increase the potency of your transmutations, adding 2 die to the specified damage die (ex: 2d6 becomes 4d6, 4d8 becomes 6d8 and so on) You are able to spend A FULL TURN to enter your portal of truth and meditate with -The Truth- regaining all of your alchemical stamina plus 1d12 temporary alchemic stamina.\n"
                    },
                    {
                        "modifyresource": {
                            "name": "Stamina",
                            "amount": "2"
                        }
                    }
                ]
            }
        },
        {
            "name": "Militant ",
            "displayname": "Militant",
            "hitdie": "10",
            "armorproficiencies": [
                "Light Armor",
                "Medium Armor"
            ],
            "weaponproficiencies": [
                "Simple Weapons",
                "Firearms"
            ],
            "equipment": [
                {
                    "selection": [
                        {
                            "weapon": {
                                "type": "simple",
                                "range": "melee"
                            }
                        },
                        "Handgun"
                    ]
                },
                {
                    "selection": [
                        {
                            "armor": {
                                "type": "light"
                            }
                        },
                        {
                            "armor": {
                                "type": "medium"
                            }
                        }
                    ]
                },
                {
                    "selection": [
                        "Explorer's pack",
                        "Scholars pack"
                    ]
                }
            ],
            "saveproficiencies": [
                "strength",
                "constitution"
            ],
            "classskills": [
                "animal handling",
                "athletics",
                "investigation",
                "medicine",
                "perception",
                "stealth",
                "survival"
            ],
            "skillcount": "3",
            "multiclass": {
                "abilityscoreprerequisites": [],
                "armorproficiencies": [
                    "Light Armor",
                    "Medium Armor"
                ],
                "weaponproficiencies": [
                    "Simple Weapons"
                ],
                "skillcount": "1"
            },
            "level": {
                "1": [
                    {
                        "setresource": {
                            "name": "Morale ",
                            "amount": "3",
                            "spendable": "true",
                            "displayname": "Morale ",
                            "reset": "shortrest"
                        }
                    },
                    {
                        "showresource": "Morale "
                    },
                    {
                        "featuretextwithbullet": "Morale \nYou gain a pool of Morale points.\n\n-spend 1 morale point to increase any damage roll by 1d6\n\n-spend 1 morale point to heal a creature by 1d6+constitution mod\n\n-spend 1 morale point to decrease any enemy roll by 1d6.\n\nThese increase by 1d6 at levels 5, 10, 15, and 20."
                    }
                ],
                "2": [
                    {
                        "modifyresource": {
                            "name": "Morale ",
                            "amount": "1"
                        }
                    },
                    {
                        "featuretextwithbullet": "Weapons training\nYou get an additional +1 to hit and to damage with any 1 weapon of your choice."
                    }
                ],
                "3": [
                    {
                        "modifyresource": {
                            "name": "Morale ",
                            "amount": "1"
                        }
                    },
                    {
                        "abilityscoreimprovement": ""
                    }
                ],
                "4": [
                    {
                        "modifyresource": {
                            "name": "Morale ",
                            "amount": "1"
                        }
                    },
                    {
                        "archetypemenu": ""
                    }
                ],
                "5": [
                    {
                        "modifyresource": {
                            "name": "Morale ",
                            "amount": "2"
                        }
                    },
                    {
                        "featuretextwithbullet": "Weapons training\nYou get an additional +1 to hit and to damage with any 1 weapon of your choice."
                    }
                ],
                "6": [
                    {
                        "modifyresource": {
                            "name": "Morale ",
                            "amount": "1"
                        }
                    }
                ],
                "7": [
                    {
                        "modifyresource": {
                            "name": "Morale ",
                            "amount": "1"
                        }
                    },
                    {
                        "featuretextwithbullet": "Weapons training\nYou get an additional +1 to hit and to damage with any 1 weapon of your choice."
                    }
                ],
                "8": [
                    {
                        "modifyresource": {
                            "name": "Morale ",
                            "amount": "1"
                        }
                    },
                    {
                        "featuretextwithbullet": "Commanding officer \nA group of 3 low ranking soldiers are placed under your command. It is your responsibility to arm, feed, and shelter them. they can be ordered to do most simple tasks. they can fight but are unskilled and use the bandit stat block. they roll their own initiative."
                    }
                ],
                "9": [
                    {
                        "modifyresource": {
                            "name": "Morale ",
                            "amount": "1"
                        }
                    },
                    {
                        "abilityscoreimprovement": ""
                    }
                ],
                "10": [
                    {
                        "modifyresource": {
                            "name": "Morale ",
                            "amount": "2"
                        }
                    },
                    {
                        "featuretextwithbullet": "Advanced weapon training\nYou get an additional +1 to hit and to damage with any 1 weapon of your choice.\nalso the bonuses from all your weapon training now effect all weapons you own that use the same damage type. ex. if you've used weapon training on a dagger, all slashing weapons now recieve the same benefit."
                    }
                ],
                "11": [
                    {
                        "modifyresource": {
                            "name": "Morale ",
                            "amount": "1"
                        }
                    },
                    {
                        "featuretextwithbullet": "Career Militant \nYou've spent most of your adult life with the military, and they have noticed your loyalty. Choose one of the following.\n\n-A large payment bonus of 10,000gp.\n\n-Command of a small squad 10 skilled lower ranking soldiers, they use the bandit captain stat block.\n\n-A masterwork weapon of your choice, and a masterwork set of light or medium armor."
                    }
                ],
                "12": [
                    {
                        "modifyresource": {
                            "name": "Morale ",
                            "amount": "1"
                        }
                    },
                    {
                        "abilityscoreimprovement": ""
                    }
                ],
                "13": [
                    {
                        "modifyresource": {
                            "name": "Morale ",
                            "amount": "1"
                        }
                    },
                    {
                        "featuretextwithbullet": "Weapon mastery\nYou get an additional +1 to hit and to damage with any 1 weapon of your choice.\nyou now have double proficiency with the weapon type that has recieved the most weapon training, in addition to the weapon training bonus'"
                    }
                ],
                "14": [
                    {
                        "modifyresource": {
                            "name": "Morale ",
                            "amount": "1"
                        }
                    }
                ],
                "15": [
                    {
                        "modifyresource": {
                            "name": "Morale ",
                            "amount": "2"
                        }
                    },
                    {
                        "abilityscoreimprovement": ""
                    }
                ],
                "16": [
                    {
                        "modifyresource": {
                            "name": "Morale ",
                            "amount": "1"
                        }
                    },
                    {
                        "featuretextwithbullet": "Rally the troops\nSpend 5 Morale points to increase damage of soldiers under your command by 1d10"
                    }
                ],
                "17": [
                    {
                        "modifyresource": {
                            "name": "Morale ",
                            "amount": "1"
                        }
                    },
                    {
                        "featuretextwithbullet": "Beloved commander\nYou now have access to 25 soldiers under your command. they continue to use the bandit captain stat block, and can perform most tasks at your command. "
                    }
                ],
                "18": [
                    {
                        "modifyresource": {
                            "name": "Morale ",
                            "amount": "1"
                        }
                    },
                    {
                        "abilityscoreimprovement": ""
                    }
                ],
                "19": [
                    {
                        "modifyresource": {
                            "name": "Morale ",
                            "amount": "1"
                        }
                    },
                    {
                        "featuretextwithbullet": "Troop morale\nSpend 10 morale points to heal all soldiers under your command by 3d8\n"
                    }
                ],
                "20": [
                    {
                        "modifyresource": {
                            "name": "Morale ",
                            "amount": "2"
                        }
                    },
                    {
                        "featuretextwithbullet": "In High places\nYou've attained rank above most other military personnel, and can give orders to most if not all other members of your military.\nYou have the power and resources of an entire army at your disposal. speak with your dm about this and how it will incorporate into the game."
                    }
                ]
            }
        },
        {
            "name": " Exhalmancer",
            "displayname": "Exhalmancer",
            "hitdie": "8",
            "armorproficiencies": [
                "Light Armor"
            ],
            "weaponproficiencies": [
                "Quarterstaff",
                "Simple Weapons"
            ],
            "languages": [
                "Draconic"
            ],
            "saveproficiencies": [
                "constitution",
                "charisma"
            ],
            "classskills": [
                "arcana",
                "insight",
                "intimidation",
                "nature",
                "performance",
                "survival"
            ],
            "skillcount": "3",
            "spellprogression": "half",
            "spellcastingability": "constitution",
            "multiclass": {
                "abilityscoreprerequisites": [],
                "armorproficiencies": [
                    "Light Armor"
                ],
                "weaponproficiencies": [
                    "Simple Weapons"
                ],
                "languages": [
                    "Draconic"
                ],
                "skillcount": "1"
            },
            "level": {
                "1": [
                    {
                        "featuretextwithbullet": "Dragon secrets\nA secret revealed to your family long ago allows members of your family to spew elemental energy from your breath. every 2 levels you may choose between fire, ice, and lightning, receiving 3 element points for the chosen element. you regain these points after a short rest."
                    },
                    {
                        "featuretextwithbullet": "Element chart\nFire- 0\/0\nIce- 0\/0\nLightning- 0\/0"
                    },
                    {
                        "featuretextwithbullet": "Breath attack\nAt level 1 you can spend 1 elemental point of your choice to expel a powerful gout of elemental energy dealing 1d8+Constitution mod to a target up to 15 ft away"
                    },
                    {
                        "featuretextwithbullet": "Inate spellcasting\nYou may cast any evocation spells that deal fire, cold, or lightning damage that you have spell slots for. these spells require all components listed."
                    }
                ],
                "2": [
                    {
                        "featuretextwithbullet": "Always ready\nHaving your main attack only a breath away has its advantages, and so do you. gain advantage on initiative rolls."
                    }
                ],
                "3": [
                    {
                        "featuretextwithbullet": "Elemental surge\nAdd 3 points to your elemental point pool to either Fire, Ice, or Lightning."
                    },
                    {
                        "featuretextwithbullet": "Enhanced breath\nExpend 2 charges from your elemental pool and increase your breath attack to a 15ft cone dealing 1d8+con mod to each creature in the cone."
                    }
                ],
                "4": [
                    {
                        "abilityscoreimprovement": ""
                    },
                    {
                        "archetypemenu": ""
                    }
                ],
                "5": [
                    {
                        "featuretextwithbullet": "Elemental surge\nAdd 3 points to your elemental point pool to either Fire, Ice, or Lightning."
                    }
                ],
                "6": [
                    {
                        "featuretextwithbullet": "Overcharged breath\nExpend double elemental energy on any breath attack to double the damage dice."
                    },
                    {
                        "featuretextwithbullet": "Frightening presence \nWhen attempting to intimidate, you may expend a charge from your element pool to gain advantage. Elemental energy pulses with your words frightening those that you are speaking to."
                    }
                ],
                "7": [
                    {
                        "featuretextwithbullet": "Elemental surge\nAdd 3 points to your elemental point pool to either Fire, Ice, or Lightning."
                    },
                    {
                        "featuretextwithbullet": "Combined strengths \nwhile casting a breath attack you can now use any number of points from any pool you have elemental energy in\nand combine the types of damage into a single attack. damage it dealt separately fo each type of damage."
                    }
                ],
                "8": [
                    {
                        "abilityscoreimprovement": ""
                    },
                    {
                        "featuretextwithbullet": "Elemental weapon\nSpend 3 points from your elemental pool, elemental energy flows from your open maw and flows over a weapon that you are holding. this weapon gains 1d6 elemental damage of the type spent for 3 rounds. this effect remains even if the weapon is dropped."
                    }
                ],
                "9": [
                    {
                        "featuretextwithbullet": "Elemental surge\nAdd 3 points to your elemental point pool to either Fire, Ice, or Lightning."
                    }
                ],
                "10": [
                    {
                        "featuretextwithbullet": "Cloak of energy\nSpend 4 points of elemental energy to coat yourself in a blanket of energy increasing your ac by 2 for 3 rounds. when hit with a melee attack the attacker takes 1d8+con mod damage."
                    }
                ],
                "11": [
                    {
                        "featuretextwithbullet": "Elemental surge\nAdd 3 points to your elemental point pool to either Fire, Ice, or Lightning."
                    }
                ],
                "12": [
                    {
                        "abilityscoreimprovement": ""
                    }
                ],
                "13": [
                    {
                        "featuretextwithbullet": "Elemental surge\nAdd 3 points to your elemental point pool to either Fire, Ice, or Lightning."
                    }
                ],
                "14": [
                    {
                        "featuretextwithbullet": "Destructive breath\nSpend 5 points from your elemental pool, you open your mouth wide and let out an ear shattering scream along with an intense fountain of energy dealing 2d12+con mod to any creature in a 20ft cone. Fire hot enough to melt solid stone, ice cold enough to freeze creatures to the core in an instant, and lighting so powerful it disintegrates materials of all sorts."
                    }
                ],
                "15": [
                    {
                        "featuretextwithbullet": "Elemental surge\nAdd 3 points to your elemental point pool to either Fire, Ice, or Lightning."
                    }
                ],
                "16": [
                    {
                        "abilityscoreimprovement": ""
                    }
                ],
                "17": [
                    {
                        "featuretextwithbullet": "Elemental surge\nAdd 3 points to your elemental point pool to either Fire, Ice, or Lightning."
                    }
                ],
                "18": [
                    {
                        "featuretextwithbullet": "Immense power\nExpend 7 charges of elemental energy to release a flow of energy in a 30ft line dealing 4d12+con mod damage to any creature in the line."
                    }
                ],
                "19": [
                    {
                        "featuretextwithbullet": "Elemental surge\nAdd 3 points to your elemental point pool to either Fire, Ice, or Lightning."
                    }
                ],
                "20": [
                    {
                        "abilityscoreimprovement": ""
                    },
                    {
                        "featuretextwithbullet": "Unstoppable force\nExpend 12 charges from your elemental pool to launch a spear of energy from deep within your body. dealing 6d12+con mod to 1 creature within 120 ft. this spear of energy ignores resistances of the targeted creature."
                    }
                ]
            }
        },
        {
            "name": "Mystic",
            "displayname": "Mystic",
            "hitdie": "8",
            "armorproficiencies": [
                "Light Armor"
            ],
            "weaponproficiencies": [
                "Simple Weapons"
            ],
            "equipment": [
                {
                    "selection": [
                        {
                            "weapon": {
                                "name": "Spear"
                            }
                        },
                        {
                            "weapon": {
                                "name": "Mace"
                            }
                        }
                    ]
                },
                {
                    "selection": [
                        {
                            "armor": {
                                "name": "Leather"
                            }
                        },
                        {
                            "armor": {
                                "name": "Studded Leather"
                            }
                        }
                    ]
                },
                {
                    "selection": [
                        [
                            {
                                "weapon": {
                                    "name": "Crossbow, Light"
                                }
                            },
                            "20 Crossbow bolts"
                        ],
                        {
                            "weapon": {
                                "type": "simple"
                            }
                        }
                    ]
                },
                {
                    "selection": [
                        "Scholar's Pack",
                        "Explorer's Pack"
                    ]
                }
            ],
            "saveproficiencies": [
                "intelligence",
                "wisdom"
            ],
            "classskills": [
                "arcana",
                "history",
                "insight",
                "medicine",
                "nature",
                "perception",
                "religion"
            ],
            "skillcount": "2",
            "spellcastingability": "intelligence",
            "multiclass": {
                "abilityscoreprerequisites": [
                    {
                        "greaterthanorequal": {
                            "first": "intelligencescore",
                            "second": "13"
                        }
                    }
                ],
                "armorproficiencies": [
                    "Light Armor"
                ],
                "weaponproficiencies": [
                    "Simple Weapons"
                ]
            },
            "level": {
                "1": [
                    {
                        "setresource": {
                            "name": "Psi Points",
                            "amount": "4",
                            "spendable": "true",
                            "displayname": "Psi",
                            "reset": "longrest"
                        }
                    },
                    {
                        "featuretextwithbullet": "Psi Limit: You can only spend up to a certain number of Psi Points on a Discipline. This value increases based on your level. The current max is: 2"
                    },
                    {
                        "showresource": "Psi Points"
                    },
                    {
                        "addweaponproficiencies": [
                            "Simple Weapons"
                        ]
                    },
                    {
                        "featuretextwithbullet": "Psychic Focus: As a bonus action, choose one of your psionic disciplines and gain it's psychic bonus benefit. This last until you are incapacitated or swap focus."
                    },
                    {
                        "archetypemenu": ""
                    },
                    {
                        "sharedclassfeaturemenu": {
                            "name": "Psionic Talents",
                            "selections": "1",
                            "class": "Mystic"
                        }
                    },
                    {
                        "sharedclassfeaturemenu": {
                            "name": "Psionic Disciplines",
                            "selections": "1",
                            "class": "Mystic"
                        }
                    }
                ],
                "2": [
                    {
                        "featuretextwithbullet": "Mystical Recovery - Whenever you spend Psi Points on a Psionic Discipline, you may use a bonus action to regain HP equal to the number of Psi points spent."
                    },
                    {
                        "modifyresource": {
                            "name": "Psi Points",
                            "amount": "2"
                        }
                    },
                    {
                        "featuretextwithbullet": "Telepathy- You can speak telepathically to any creature with 120 ft. You don't need to share a language with it but it must understand at least one language."
                    }
                ],
                "3": [
                    {
                        "sharedclassfeaturemenu": {
                            "name": "Psionic Talents",
                            "selections": "1",
                            "class": "Mystic"
                        }
                    },
                    {
                        "modifyresource": {
                            "name": "Psi Points",
                            "amount": "8"
                        }
                    },
                    {
                        "replacestringfromfeaturetext": {
                            "replacementtext": "Psi Limit: You can only spend up to a certain number of Psi Points on a Discipline. This value increases based on your level. The current max is: 3",
                            "find": "Psi Limit: You can only spend up to a certain number of Psi Points on a Discipline. This value increases based on your level. The current max is: 2"
                        }
                    },
                    {
                        "sharedclassfeaturemenu": {
                            "name": "Psionic Disciplines",
                            "selections": "1",
                            "replace": "1",
                            "class": "Mystic"
                        }
                    }
                ],
                "4": [
                    {
                        "abilityscoreimprovement": ""
                    },
                    {
                        "featuretextwithbullet": "Strength of Mind - Whenever you finish a short or long rest, you can replace your proficiency in Wisdom saving throws with Strength, Dexterity, Constitution, or Charisma."
                    },
                    {
                        "modifyresource": {
                            "name": "Psi Points",
                            "amount": "3"
                        }
                    }
                ],
                "5": [
                    {
                        "sharedclassfeaturemenu": {
                            "name": "Psionic Disciplines",
                            "selections": "1",
                            "replace": "1",
                            "class": "Mystic"
                        }
                    },
                    {
                        "modifyresource": {
                            "name": "Psi Points",
                            "amount": "10"
                        }
                    },
                    {
                        "replacestringfromfeaturetext": {
                            "replacementtext": "Psi Limit: You can only spend up to a certain number of Psi Points on a Discipline. This value increases based on your level. The current max is: 5",
                            "find": "Psi Limit: You can only spend up to a certain number of Psi Points on a Discipline. This value increases based on your level. The current max is: 3"
                        }
                    }
                ],
                "6": [
                    {
                        "modifyresource": {
                            "name": "Psi Points",
                            "amount": "5"
                        }
                    },
                    {
                        "replacestringfromfeaturetext": {
                            "replacementtext": "Psi Limit: You can only spend up to a certain number of Psi Points on a Discipline. This value increases based on your level. The current max is: 6",
                            "find": "Psi Limit: You can only spend up to a certain number of Psi Points on a Discipline. This value increases based on your level. The current max is: 5"
                        }
                    }
                ],
                "7": [
                    {
                        "modifyresource": {
                            "name": "Psi Pounts",
                            "amount": "6"
                        }
                    },
                    {
                        "replacestringfromfeaturetext": {
                            "replacementtext": "Psi Limit: You can only spend up to a certain number of Psi Points on a Discipline. This value increases based on your level. The current max is: 7",
                            "find": "Psi Limit: You can only spend up to a certain number of Psi Points on a Discipline. This value increases based on your level. The current max is: 6"
                        }
                    },
                    {
                        "sharedclassfeaturemenu": {
                            "name": "Psionic Disciplines",
                            "selections": "1",
                            "replace": "1",
                            "class": "Mystic"
                        }
                    }
                ],
                "8": [
                    {
                        "abilityscoreimprovement": ""
                    },
                    {
                        "modifyresource": {
                            "name": "Psi Points",
                            "amount": "6"
                        }
                    },
                    {
                        "featuretextwithbullet": "Potent Psionics- Once per turn when you hit with a weapon attack you can add 1d8 psychic damage. You also can now add your Intelligence mod to damage from talents.\n\t The damage increases to 2d8 at level 14."
                    }
                ],
                "9": [
                    {
                        "modifyresource": {
                            "name": "Psi Points ",
                            "amount": "13"
                        }
                    },
                    {
                        "sharedclassfeaturemenu": {
                            "name": "Psionic Disciplines",
                            "selections": "1",
                            "replace": "1",
                            "class": "Mystic"
                        }
                    }
                ],
                "10": [
                    {
                        "modifyresource": {
                            "name": "Psi Points",
                            "amount": "7"
                        }
                    },
                    {
                        "sharedclassfeaturemenu": {
                            "name": "Psionic Talents",
                            "selections": "1",
                            "class": "Mystic"
                        }
                    },
                    {
                        "featuretextwithbullet": "Consumptive Power- When activating a Discipline, you can pay the psi point cost in HP. Your house and HP reduce by the amount spent. You can't reduce this damage and it remains until a long rest. you can do this once per long rest."
                    }
                ],
                "11": [
                    {
                        "featuretextwithbullet": "Psionic Mastery: As an action, you 9 special psi points that can only be used on Disciplines that take and action or bonus action. You can use them all on one Discipline or spread them out. You cannot mix the spending of the special psi points with your regular pool of points. You lose any remaining special psi points at the end of a long rest.\n\t If more than one Discipline you activate using these special points requires concentration, you can concentrate on them all. This cancels any concentration you had that was created with the regular psi points, and vice versa.\n\t At level 15, this pool of points increases to 11. \n\t You have one use of this feature per long rest, and gain another at levels 13, 15, and 17."
                    }
                ],
                "12": [
                    {
                        "sharedclassfeaturemenu": {
                            "name": "Psionic Disciplines",
                            "selections": "1",
                            "replace": "1",
                            "class": "Mystic"
                        }
                    },
                    {
                        "abilityscoreimprovement": ""
                    }
                ],
                "13": [
                    {
                        "modifyresource": {
                            "name": "Mastery Uses",
                            "amount": "1"
                        }
                    }
                ],
                "14": [
                    {
                        "modifyresource": {
                            "name": "Mastery Uses",
                            "amount": "1"
                        }
                    }
                ],
                "15": [
                    {
                        "modifyresource": {
                            "name": "Mastery Uses",
                            "amount": "1"
                        }
                    },
                    {
                        "modifyresource": {
                            "name": "Mastery Psi Points",
                            "amount": "2"
                        }
                    }
                ],
                "16": [
                    {
                        "abilityscoreimprovement": ""
                    }
                ],
                "17": [
                    {
                        "modifyresource": {
                            "name": "Mastery Uses",
                            "amount": "1"
                        }
                    },
                    {
                        "sharedclassfeaturemenu": {
                            "name": "Psionic Talents",
                            "selections": "1",
                            "class": "Mystic"
                        }
                    }
                ],
                "18": [
                    {
                        "modifyresource": {
                            "name": "Psi Points",
                            "amount": "7"
                        }
                    }
                ],
                "19": [
                    {
                        "abilityscoreimprovement": ""
                    }
                ],
                "20": [
                    {
                        "featuretextwithbullet": "Psionic Body: You gain a multitude of benefits-\n\t -You gain resistance to bludgeoning, piercing, and slashing damage.\n\t -You no longer age.\n\t -You are immune ot disease, poison damage, and the poisoned condition.\n\t -If you die, roll a d20. On a 10 or higher, you don't die and fall unconscious. You and your gear disappear and reappear 1d3 days later on the plane where you died, and benefitted from a long rest."
                    }
                ]
            }
        },
        {
            "name": "Blood Hunter",
            "displayname": "Blood Hunter",
            "hitdie": "10",
            "armorproficiencies": [
                "Light Armor",
                "Medium Armor"
            ],
            "weaponproficiencies": [
                "Simple Weapons",
                "Martial Weapons"
            ],
            "toolproficiencies": [
                "Alchemist's Supplies"
            ],
            "equipment": [
                {
                    "selection": [
                        {
                            "weapon": {
                                "type": "martial"
                            }
                        },
                        [
                            {
                                "weapon": {
                                    "type": "simple"
                                }
                            },
                            {
                                "weapon": {
                                    "type": "simple"
                                }
                            }
                        ]
                    ]
                },
                {
                    "selection": [
                        [
                            {
                                "weapon": {
                                    "name": "Crossbow, Light"
                                }
                            },
                            "Bolts"
                        ],
                        [
                            {
                                "weapon": {
                                    "name": "Crossbow, Hand"
                                }
                            },
                            "Bolts"
                        ]
                    ]
                },
                {
                    "selection": [
                        {
                            "armor": {
                                "name": "Studded Leather"
                            }
                        },
                        {
                            "armor": {
                                "name": "Scale Mail"
                            }
                        }
                    ]
                },
                "Explorer's Pack"
            ],
            "saveproficiencies": [
                "strength",
                "wisdom"
            ],
            "classskills": [
                "acrobatics",
                "arcana",
                "athletics",
                "insight",
                "investigation",
                "survival"
            ],
            "skillcount": "3",
            "multiclass": {
                "abilityscoreprerequisites": [
                    {
                        "or": [
                            {
                                "greaterthanorequal": {
                                    "first": "strengthscore",
                                    "second": "13"
                                }
                            },
                            {
                                "greaterthanorequal": {
                                    "first": "dexterityscore",
                                    "second": "13"
                                }
                            },
                            {
                                "and": [
                                    {
                                        "greaterthanorequal": {
                                            "first": "wisdomscore",
                                            "second": "13"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "armorproficiencies": [
                    "Light Armor",
                    "Medium Armor"
                ],
                "weaponproficiencies": [
                    "Simple Weapons",
                    "Martial Weapons"
                ],
                "toolproficiencies": [
                    "Alchemist's Supplies"
                ]
            },
            "level": {
                "1": [
                    {
                        "featuretextwithbullet": "Hunter's Bane: You have Advantage on Wisdom (Survival) checks to track Fey, Fiends, and Undead, and Intelligence checks to recall information about them. If you are actively tracking one of these creature types, you can't be surprised by creature's of that type. You can only track one type of creature at a time."
                    },
                    {
                        "featuretextwithbullet": "Crimson Rite: As a bonus action you imbue a single weapon with a Rite you know at the cost of your vitality. Your Rite damage die is 1d4, and the Rite damage is considered magical. If the weapon is a thrown weapon, the Rite fades directly after the attack is complete, otherwise if the weapon leaves your grip, the Rite fades immediately.\n   When Crimson Rite is activated, you suffer damage equal to your character level and you reduce your maximum hit point equal to your character level. These lost maximum hit points return once your Rite fades, and can't be restored any other way. A Rite can be allowed to fade at anytime. \n   Your Rite can be used on multiple weapons, costing additional hit point loss for each weapon. Each end of a polearm or quarterstaff is treated as a separate weapon for this feature, though most other weapons can only be affected by a single Rite at a time."
                    },
                    {
                        "sharedclassfeaturemenu": {
                            "name": "Primal Rites",
                            "class": "Blood Hunter"
                        }
                    },
                    {
                        "setresource": {
                            "name": "Rite Damage",
                            "diesize": "4",
                            "amount": "1",
                            "spendable": "false",
                            "displayname": "Rite Damage"
                        }
                    },
                    {
                        "showresource": "Rite Damage"
                    },
                    {
                        "storestring": {
                            "name": "string_huntersbane",
                            "text": "Hunter's Bane: You have Advantage on Wisdom (Survival) checks to track Fey, Fiends, and Undead, and Intelligence checks to recall information about them. If you are actively tracking one of these creature types, you can't be surprised by creature's of that type. You can only track one type of creature at a time."
                        }
                    }
                ],
                "2": [
                    {
                        "sharedclassfeaturemenu": {
                            "name": "Fighting Style",
                            "class": "Blood Hunter"
                        }
                    },
                    {
                        "featuretextwithbullet": "Blood Maledict: You can invoke a Blood Curse that you know. When invoking a Blood Curse, but before it affects the target, you may choose to Amplify the Curse by taking damage equal to your Crimson Rite damage die. Amplified curses gain an additional effect noted in their description. Creatures that do not have blood are immune to Blood Curses (DM discretion). You can use this feature once. You regain expended uses after finishing a short or long rest."
                    },
                    {
                        "sharedclassfeaturemenu": {
                            "name": "Blood Curses",
                            "class": "Blood Hunter"
                        }
                    },
                    {
                        "storestring": {
                            "name": "string_maledict",
                            "text": "You can use this feature once."
                        }
                    }
                ],
                "3": [
                    {
                        "archetypemenu": ""
                    }
                ],
                "4": [
                    {
                        "abilityscoreimprovement": ""
                    }
                ],
                "5": [
                    {
                        "sharedclassfeature": {
                            "name": "Extra Attack",
                            "class": "Fighter"
                        }
                    }
                ],
                "6": [
                    {
                        "replacestringfromfeaturetext": {
                            "replacementtext": "You can use this feature twice.",
                            "find": {
                                "getstoredstring": "string_maledict"
                            }
                        }
                    },
                    {
                        "sharedclassfeaturemenu": {
                            "name": "Blood Curses",
                            "class": "Blood Hunter"
                        }
                    },
                    {
                        "sharedclassfeaturemenu": {
                            "name": "Primal Rites",
                            "class": "Blood Hunter"
                        }
                    },
                    {
                        "replacestringfromfeaturetext": {
                            "replacementtext": "Your Rite damage die is 1d6, and the Rite damage is considered magical",
                            "find": "Your Rite damage die is 1d4, and the Rite damage is considered magical"
                        }
                    },
                    {
                        "setresource": {
                            "name": "Rite Damage",
                            "diesize": "6",
                            "amount": "1",
                            "spendable": "false",
                            "displayname": "Rite Damage"
                        }
                    },
                    {
                        "storestring": {
                            "name": "string_maledict",
                            "text": "You can use this feature twice."
                        }
                    }
                ],
                "8": [
                    {
                        "abilityscoreimprovement": ""
                    }
                ],
                "9": [
                    {
                        "featuretextwithbullet": "You can take 10 minutes to meditate on an object. Make a Wisdom ability check. Based on the result, the DM may reveal obscure information or vague details about dark events that may have previously surrounded the object, or hints toward a sinister purpose. This feature has no effect on objects on touched by evil. An object can only be targeted by this feature once, and future attempts reveal no further details."
                    }
                ],
                "10": [
                    {
                        "featuretextwithbullet": "Dark Velocity: While in dim light or Darkness, your speed increases by 10 feet, and attacks of opportunity made against you have disadvantage"
                    },
                    {
                        "sharedclassfeaturemenu": {
                            "name": "Blood Curses",
                            "class": "Blood Hunter"
                        }
                    }
                ],
                "11": [
                    {
                        "replacestringfromfeaturetext": {
                            "replacementtext": "You can use this feature three times.",
                            "find": {
                                "getstoredstring": "string_maledict"
                            }
                        }
                    },
                    {
                        "appendstoredstring": {
                            "name": "string_huntersbane",
                            "text": "\n   You can choose to suffer damage equal to your Crimson Rite damage die to gain Advantage on a Wisdom (Insight) check or Charisma (Intimidation) check."
                        }
                    },
                    {
                        "sharedclassfeaturemenu": {
                            "name": "Primal Rites",
                            "class": "Blood Hunter"
                        }
                    },
                    {
                        "replacestringfromfeaturetext": {
                            "replacementtext": "Your Rite damage die is 1d8, and the Rite damage is considered magical",
                            "find": "Your Rite damage die is 1d6, and the Rite damage is considered magical"
                        }
                    },
                    {
                        "setresource": {
                            "name": "Rite Damage",
                            "diesize": "8",
                            "amount": "1",
                            "spendable": "false"
                        }
                    },
                    {
                        "storestring": {
                            "name": "string_maledict",
                            "text": "You can use this feature three times."
                        }
                    }
                ],
                "12": [
                    {
                        "abilityscoreimprovement": ""
                    }
                ],
                "14": [
                    {
                        "sharedclassfeaturemenu": {
                            "name": "Esoteric Rites",
                            "class": "Blood Hunter"
                        }
                    },
                    {
                        "sharedclassfeaturemenu": {
                            "name": "Blood Curses",
                            "class": "Blood Hunter"
                        }
                    },
                    {
                        "featuretextwithbullet": "You can no longer become Frightened, and you have Advantage on saving throws against magical Charm effects."
                    }
                ],
                "16": [
                    {
                        "abilityscoreimprovement": ""
                    },
                    {
                        "replacestringfromfeaturetext": {
                            "replacementtext": "Your Rite damage die is 1d10, and the Rite damage is considered magical",
                            "find": "Your Rite damage die is 1d8, and the Rite damage is considered magical"
                        }
                    },
                    {
                        "setresource": {
                            "name": "Rite Damage",
                            "diesize": "10",
                            "amount": "1",
                            "spendable": "false"
                        }
                    }
                ],
                "17": [
                    {
                        "replacestringfromfeaturetext": {
                            "replacementtext": "You can use this feature four times.",
                            "find": {
                                "getstoredstring": "string_maledict"
                            }
                        }
                    }
                ],
                "18": [
                    {
                        "sharedclassfeaturemenu": {
                            "name": "Blood Curses",
                            "class": "Blood Hunter"
                        }
                    }
                ],
                "19": [
                    {
                        "abilityscoreimprovement": ""
                    }
                ],
                "20": [
                    {
                        "featuretextwithbullet": "Sanguine Mastery: When you have an active Crimson Rite, you no longer reduce your maximum hit points and you take no damage when amplifying Blood Curses. In addition, when you are below 1\/4 of your current maximum hit points and conscious, all of your Crimson Rite damage dice are maximized."
                    }
                ]
            }
        },
        {
            "name": "Revised Ranger",
            "displayname": "Revised Ranger",
            "hitdie": "10",
            "armorproficiencies": [
                "Light Armor",
                "Medium Armor"
            ],
            "weaponproficiencies": [
                "Martial Weapons",
                "Simple Weapons"
            ],
            "equipment": [
                {
                    "selection": [
                        {
                            "armor": {
                                "name": "Scale Mail"
                            }
                        },
                        {
                            "armor": {
                                "name": "Leather"
                            }
                        }
                    ]
                },
                {
                    "selection": [
                        {
                            "weapon": {
                                "name": "Shortsword",
                                "quantity": "2"
                            }
                        },
                        [
                            {
                                "weapon": {
                                    "type": "simple",
                                    "range": "melee"
                                }
                            },
                            {
                                "weapon": {
                                    "type": "simple",
                                    "range": "melee"
                                }
                            }
                        ]
                    ]
                },
                {
                    "selection": [
                        "Dungeoneer's Pack",
                        "Explorer's Pack"
                    ]
                },
                {
                    "weapon": {
                        "name": "Longbow"
                    }
                },
                "Quiver of 20 Arrows"
            ],
            "saveproficiencies": [
                "strength",
                "dexterity"
            ],
            "classskills": [
                "animal handling",
                "athletics",
                "insight",
                "investigation",
                "nature",
                "perception",
                "stealth",
                "survival"
            ],
            "skillcount": "3",
            "spellprogression": "half",
            "spellcastingability": "wisdom",
            "multiclass": {
                "abilityscoreprerequisites": [],
                "armorproficiencies": [
                    "Light Armor",
                    "Medium Armor",
                    "Shield"
                ],
                "weaponproficiencies": [
                    "Simple Weapons",
                    "Martial Weapons"
                ],
                "skillcount": "1"
            },
            "level": {
                "1": [
                    {
                        "menu": {
                            "name": "Favored Enemy",
                            "title": "Favored Enemy",
                            "selections": "1",
                            "hidepreviewtext": "true",
                            "advancedfeaturetext": {
                                "useentrypreviewtext": "true",
                                "usebullet": "true",
                                "prefixwithentryname": "true",
                                "prefixseperator": ": "
                            },
                            "entries": [
                                {
                                    "name": "Beasts",
                                    "displayname": "Favored Enemy - Beasts",
                                    "previewtext": "+2 damage bonus with weapon attacks; Advantage on Wisdom (Survival) checks to track; Advantage on Intelligence checks to recall information."
                                },
                                {
                                    "name": "Fey",
                                    "displayname": "Favored Enemy - Fey",
                                    "previewtext": "+2 damage bonus with weapon attacks; Advantage on Wisdom (Survival) checks to track; Advantage on Intelligence checks to recall information."
                                },
                                {
                                    "name": "Humanoids",
                                    "displayname": "Favored Enemy - Humanoids",
                                    "previewtext": "+2 damage bonus with weapon attacks; Advantage on Wisdom (Survival) checks to track; Advantage on Intelligence checks to recall information."
                                },
                                {
                                    "name": "Monstrosities",
                                    "displayname": "Favored Enemy - Monstrosities",
                                    "previewtext": "+2 damage bonus with weapon attacks; Advantage on Wisdom (Survival) checks to track; Advantage on Intelligence checks to recall information"
                                },
                                {
                                    "name": "Undead",
                                    "displayname": "Favored Enemy - Undead",
                                    "previewtext": "+2 damage bonus with weapon attacks; Advantage on Wisdom (Survival) checks to track; Advantage on Intelligence checks to recall information."
                                }
                            ],
                            "effects": [
                                {
                                    "languagesknowntext": "One extra language, typically spoken by your Favored Enemy or creatures associated with them."
                                }
                            ]
                        }
                    },
                    {
                        "featuretextwithbullet": "Natural Explorer: In natural environments, you gain the following benefits:\n   - You ignore difficult terrain.\n   - You have advantage on initiative rolls.\n   - On your first turn during combat, you have advantage on Attack rolls against creatures that have not yet acted.\n   In addition, you are skilled at navigating the wilderness. You gain the following benefits when traveling for an hour or more:\n   - Difficult terrain doesn't slow your group's travel.\n   - Your group can't become lost except by magical means.\n   - Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger.\n   - If you are traveling alone, you can move stealthily at a normal pace.\n   - When you forage, you find twice as much food as you normally would.\n   - While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area."
                    }
                ],
                "2": [
                    {
                        "sharedclassfeaturemenu": {
                            "name": "Fighting Style",
                            "selections": "1",
                            "class": "Ranger"
                        }
                    },
                    {
                        "setspellprogression": "Half"
                    },
                    {
                        "setcasterlevel": "casterlevel"
                    }
                ],
                "3": [
                    {
                        "featuretextwithbullet": "Primeval Awareness: \n   - You can communicate simple ideas to a beast as an action, and can read its basic mood and intent. you learn it's emotional state, whether it is affected by Magic, short-term needs, and actions you can take if any to persuade to not attack. You cannot use this ability against a creature that you have attacked within the past 10 minutes.\n   - You can spend 1 uninterrupted minute in concentration to sense whether any of your favored enemies are present within 5 miles. This reveals which of your favorite enemies are present, their numbers, and the creatures general direction and distance (in miles) from you. If there are multiple groups within range, you learn this information for each group."
                    },
                    {
                        "archetypemenu": ""
                    }
                ],
                "4": [
                    {
                        "abilityscoreimprovement": ""
                    }
                ],
                "6": [
                    {
                        "menu": {
                            "name": "Greater Favored Enemy",
                            "title": "Greater Favored Enemy",
                            "selections": "1",
                            "hidepreviewtext": "true",
                            "advancedfeaturetext": {
                                "useentrypreviewtext": "true",
                                "usebullet": "true",
                                "prefixwithentryname": "true",
                                "prefixseperator": ": "
                            },
                            "entries": [
                                {
                                    "name": "Aberrations",
                                    "displayname": "Greater Favored Enemy - Aberrations",
                                    "previewtext": "+4 damage bonus with weapon attacks; Advantage on Wisdom (Survival) checks to track; Advantage on Intelligence checks to recall information; Advantage on saving throws against spells and abilities used by Aberrations."
                                },
                                {
                                    "name": "Celestials",
                                    "displayname": "Greater Favored Enemy - Celestials",
                                    "previewtext": "+4 damage bonus with weapon attacks; Advantage on Wisdom (Survival) checks to track; Advantage on Intelligence checks to recall information; Advantage on saving throws against spells and abilities used by Celestials."
                                },
                                {
                                    "name": "Constructs",
                                    "displayname": "Greater Favored Enemy -  Constructs",
                                    "previewtext": "+4 damage bonus with weapon attacks; Advantage on Wisdom (Survival) checks to track; Advantage on Intelligence checks to recall information; Advantage on saving throws against spells and abilities used by Constructs."
                                },
                                {
                                    "name": "Dragons",
                                    "displayname": "Greater Favored Enemy - Dragons",
                                    "previewtext": "+4 damage bonus with weapon attacks; Advantage on Wisdom (Survival) checks to track; Advantage on Intelligence checks to recall information; Advantage on saving throws against spells and abilities used by Dragons."
                                },
                                {
                                    "name": "Elementals",
                                    "displayname": "Greater Favored Enemy - Elementals",
                                    "previewtext": "+4 damage bonus with weapon attacks; Advantage on Wisdom (Survival) checks to track; Advantage on Intelligence checks to recall information; Advantage on saving throws against spells and abilities used by Elementals."
                                },
                                {
                                    "name": "Fiends",
                                    "displayname": "Greater Favored Enemy - Fiends",
                                    "previewtext": "+4 damage bonus with weapon attacks; Advantage on Wisdom (Survival) checks to track; Advantage on Intelligence checks to recall information; Advantage on saving throws against spells and abilities used by Fiends."
                                },
                                {
                                    "name": "Giants",
                                    "displayname": "Greater Favored Enemy - Giants",
                                    "previewtext": "+4 damage bonus with weapon attacks; Advantage on Wisdom (Survival) checks to track; Advantage on Intelligence checks to recall information; Advantage on saving throws against spells and abilities used by Giants."
                                }
                            ],
                            "effects": [
                                {
                                    "languagesknowntext": "One extra language, typically spoken by your Greater Favored Enemy or creatures associated with them."
                                },
                                {
                                    "replacestringfromfeaturetext": {
                                        "replacementtext": "+4 damage bonus",
                                        "find": "+2 damage bonus"
                                    }
                                }
                            ]
                        }
                    }
                ],
                "8": [
                    {
                        "abilityscoreimprovement": ""
                    },
                    {
                        "featuretextwithbullet": "Fleet of Foot: You can Dash using a bonus action."
                    }
                ],
                "10": [
                    {
                        "featuretextwithbullet": "Hide in Plain Sight: You are skilled at remaining motionless for long periods of time to set up ambushes. When you attempt to hide, you can choose not to move. If you avoid moving, creatures that attempt to detect you take a -10 penalty to their Wisdom (Perception) checks until the start of your next turn. You lose this benefit if you move or fall prone for any reason. You are still automatically detected if any effect or action causes you to no longer be hidden. If you are still hidden on your next turn, you can continue to remain motionless and gain this benefit until detected."
                    }
                ],
                "12": [
                    {
                        "abilityscoreimprovement": ""
                    }
                ],
                "14": [
                    {
                        "featuretextwithbullet": "Vanish: You can Hide as a bonus action. Also, you can not be tracked by nonmagical means unless you choose to leave a trail."
                    }
                ],
                "16": [
                    {
                        "abilityscoreimprovement": ""
                    }
                ],
                "18": [
                    {
                        "featuretextwithbullet": "Feral Senses: Attacking a creature you can't see doesn't impose disadvantage on your attack rolls against it.  You are also aware of the location of any invisible creature within 30 feet of you, provided that the creature isn't hidden from you and you are not blinded or deafened."
                    }
                ],
                "19": [
                    {
                        "abilityscoreimprovement": ""
                    }
                ],
                "20": [
                    {
                        "featuretextwithbullet": "Foe Slayer: Once on each of your turns, you can add your Wisdom modifier to the attack roll or the damage roll of an attack that you make. You can choose to use this feature before or after the roll, but before any effects of the roll are applied."
                    }
                ]
            }
        },
        {
            "name": "Artificer",
            "displayname": "Artificer",
            "hitdie": "8",
            "armorproficiencies": [
                "Light Armor",
                "Medium Armor"
            ],
            "weaponproficiencies": [
                "Simple Weapons"
            ],
            "toolproficiencies": [
                "Thieves' Tools",
                "One type of artisan's tools",
                "One type of artisan's tools"
            ],
            "equipment": [
                {
                    "selection": [
                        [
                            {
                                "weapon": {
                                    "name": "Light Hammer"
                                }
                            },
                            {
                                "weapon": {
                                    "name": "Handaxe"
                                }
                            }
                        ],
                        {
                            "weapon": {
                                "type": "simple",
                                "quantity": "2"
                            }
                        }
                    ]
                },
                {
                    "weapon": {
                        "name": "Crossbow, Light"
                    }
                },
                "Bolts",
                {
                    "selection": [
                        {
                            "armor": {
                                "name": "Scale Mail"
                            }
                        },
                        {
                            "armor": {
                                "name": "Studded Leather"
                            }
                        }
                    ]
                },
                "Thieves' Tools",
                "Dungeoneer's Pack"
            ],
            "saveproficiencies": [
                "constitution",
                "intelligence"
            ],
            "classskills": [
                "arcana",
                "deception",
                "history",
                "investigation",
                "medicine",
                "nature",
                "religion",
                "sleight of hand"
            ],
            "skillcount": "3",
            "spellprogression": "third",
            "spellcastingability": "intelligence",
            "multiclass": {
                "abilityscoreprerequisites": [
                    {
                        "greaterthanorequal": {
                            "first": "intelligencescore",
                            "second": "13"
                        }
                    }
                ],
                "armorproficiencies": [
                    "Light Armor",
                    "Medium Armor"
                ],
                "weaponproficiencies": [
                    "Simple Weapons"
                ],
                "toolproficiencies": [
                    "Thieves' Tools",
                    "One type of artisan's tools"
                ]
            },
            "level": {
                "1": [
                    {
                        "archetypemenu": ""
                    },
                    {
                        "addspell": {
                            "name": "Identify",
                            "spelllevel": "0"
                        }
                    },
                    {
                        "addspell": {
                            "name": "Detect Magic",
                            "spelllevel": "0"
                        }
                    }
                ]
            }
        },
        {
            "name": "Vampire",
            "displayname": "Vampire",
            "hitdie": "10",
            "armorproficiencies": [
                "Light Armor",
                "Medium Armor"
            ],
            "weaponproficiencies": [
                "Simple Weapons",
                "Martial Weapons"
            ],
            "toolproficiencies": [
                "One type of artisan's tools",
                "One type of musical instrument"
            ],
            "languages": [
                "2 extra Languages "
            ],
            "equipment": [
                "A set of fine clothes",
                {
                    "selection": [
                        {
                            "weapon": {
                                "type": "martial"
                            }
                        },
                        {
                            "armor": {
                                "type": "light"
                            }
                        }
                    ]
                },
                {
                    "selection": [
                        {
                            "weapon": {
                                "type": "simple"
                            }
                        },
                        {
                            "armor": {
                                "type": "medium"
                            }
                        }
                    ]
                },
                "A long thick cloak"
            ],
            "saveproficiencies": [
                "strength",
                "charisma"
            ],
            "classskills": [
                "acrobatics",
                "athletics",
                "deception",
                "insight",
                "intimidation",
                "performance",
                "persuasion",
                "religion",
                "sleight of hand",
                "stealth"
            ],
            "skillcount": "4",
            "spellprogression": "full",
            "spellcastingability": "constitution",
            "multiclass": {
                "abilityscoreprerequisites": [],
                "armorproficiencies": [
                    "Light Armor",
                    "Medium Armor"
                ],
                "weaponproficiencies": [
                    "Simple Weapons",
                    "Martial Weapons"
                ],
                "skillcount": "1"
            },
            "level": {
                "1": [
                    {
                        "featuretextwithbullet": "Superior dark vision\nYou are acclimated to see in complete darkness. darkness does not hinder your sight in any way."
                    },
                    {
                        "featuretextwithbullet": "You do not need to breath, you can remain underwater for as long as you like, furthermore as long as you do not breath gases have no effect on you."
                    },
                    {
                        "setresource": {
                            "name": "Blood Points ",
                            "amount": "6",
                            "spendable": "true",
                            "displayname": "Blood Points "
                        }
                    },
                    {
                        "showresource": "Blood Points "
                    },
                    {
                        "featuretextwithbullet": "Apex predator\nYou have perfect physical features, a strong muscular body, and an alluring presence. \n- You have access to a custom spell lis that you can cast using only somatic components. 1 time per day\n\n- Your body is coated in a solid marble like layer that shields you from damage. you have a natural +3 to AC\nThis protective layer makes your skin appear pale and somewhat reflective \n\n- You have unbreakable teeth, and elongated fangs. you may choose to bite as a melee attack dealing 1d8+str mod add your dex mod to hit.\nWhen making a bite attack you can use your bonus action to drink the blood of the enemy you bite, dealing an additional 1d6 and giving you half as many blood point rounded up.\n\n- Your bare hands are hard as stone with nails as sharp as blades. your melee attack does 1d8+str mod add your dex mod to hit.\n"
                    },
                    {
                        "setunarmedstrikedamage": {
                            "diesize": "8",
                            "dienumber": "1"
                        }
                    },
                    {
                        "featuretextwithbullet": "You are weak against:\nFire damage\nRadiant damage\nSunlight\n\n• weakness to Sunlight \nsunlight against your bare skin burns you for 1d2 radiant damage every hour you are exposed. wearing a cloak that covers you entirely will prevent this damage. \n\n• Undead\nYou are undead, radiant damage hurts you. in addition spells such as turn undead have great effect on you. Drinking healing potions or being healed by magical means has the opposite effect and causes damage equal to the healing effect.\n\nWhen you are dropped to zero hit point, as long as you have not been exposed to one of your weaknesses you are automatically stabilized and returned to 1 hp. you remain incapacitated until an hour has passed. \n\nWhile incapacitated you maintain awareness of your senses. if a creature approaches within 5 feet of you, you may make a Constitution saving throw dc 18. on a failure you remain incapacitated. on a success you grapple the creature and make a bite attack drinking the creatures blood and regaining 1d4+con mod hp. and dealing damage equal to the roll to the creature. "
                    },
                    {
                        "featuretextwithbullet": "Death state\nAs the sun rises your body begins to feel fatigued and you begin to enter a sleep like state. while in this state you are considered dead, you regain your undeath as dusk approaches and the sun settles below the horizon\nOnce you reach level 5 you may roll a Constitution saving throw dc 15 to remain conscious through the day. the dc of this check is reduced to 10 at level 10, and reduced to 5 at level 15."
                    },
                    {
                        "featuretextwithbullet": "You are unable to eat or drink anything other than blood or water. \nIf you ingest any food or dring besides blood or water your body violently rejects it, dealing 1d4- con mod damage to you."
                    },
                    {
                        "featuretextwithbullet": "You cast a shadow\n\n• You have a reflection"
                    },
                    {
                        "featuretextwithbullet": "You gain a pool of blood points\n\n- You may spend a blood point as a bonus action to heal yourself 1d4+con mod. you may spend additional blood points to increase the die"
                    },
                    {
                        "setbasespeed": "45"
                    },
                    {
                        "featuretextwithbullet": "Dont drink from the dead\nwhen drinking blood of a creature you must never drain them fully. draining a body dry will cause you damage. when drinking blood make a Constitution check dc 5, on a  success you are able to control your thirst, on a failure take 1d6 necrotic damage "
                    },
                    {
                        "addspell": {
                            "name": "Friends",
                            "spelllevel": "0"
                        }
                    }
                ],
                "2": [
                    {
                        "modifyresource": {
                            "name": "Blood Points ",
                            "amount": "2"
                        }
                    },
                    {
                        "featuretextwithbullet": "Sense life\nYou are able to sense the presence of living creatures that are near you. you can hear heartbeats from several yards away, smell creatures you cants see, and can hear the smallest movements.\n\n- You are aware of any living creature within a 20ft radius of you. and gain advantage to locate creatures within 40ft."
                    },
                    {
                        "featuretextwithbullet": "Need to hunt\nYour blood points do not regenerate when you rest, you must hunt to regain your blood points.\n\n- You may spend 1 hour to hunt and regain all blood points."
                    }
                ],
                "3": [
                    {
                        "modifyresource": {
                            "name": "Blood Points ",
                            "amount": "2"
                        }
                    },
                    {
                        "abilityscoreimprovement": ""
                    },
                    {
                        "featuretextwithbullet": "Blood sensitivity \nyou can smell blood from incredible distances.\n\n- You gain advantage and +5 on all checks to track blood within 2 miles of your location."
                    },
                    {
                        "featuretextwithbullet": "Blood malidact \n- As a bonus action spend 3 blood points to double damage on any melee attack."
                    },
                    {
                        "addspell": {
                            "name": "Charm Person",
                            "spelllevel": "1"
                        }
                    }
                ],
                "4": [
                    {
                        "modifyresource": {
                            "name": "Blood Points ",
                            "amount": "2"
                        }
                    },
                    {
                        "featuretextwithbullet": "Fast healing\nspend 3 blood points to heal 1d6"
                    },
                    {
                        "archetypemenu": ""
                    }
                ],
                "5": [
                    {
                        "modifyresource": {
                            "name": "Blood Points ",
                            "amount": "2"
                        }
                    },
                    {
                        "setskillproficiency": {
                            "perception": "true"
                        }
                    },
                    {
                        "setskilldoubleproficiency": {
                            "perception": "true"
                        }
                    },
                    {
                        "featuretextwithbullet": "Keen senses\nyou can sense things mere mortals cant. \n\n- You gain double proficiency in the perception skill and recieve advantage on all checks that you make to find anything using your 5 senses"
                    },
                    {
                        "addspell": {
                            "name": "Suggestion ",
                            "spelllevel": "2"
                        }
                    }
                ],
                "6": [
                    {
                        "abilityscoreimprovement": ""
                    },
                    {
                        "modifyresource": {
                            "name": "Blood Points ",
                            "amount": "2"
                        }
                    },
                    {
                        "featuretextwithbullet": "Meditative state\nyou may choose to sit and listen to the world around you. the longer you focus the keener you sense of hearing becomes granting you advantage on skill checks to hear things. As you continue to sit, each hour spent in this state further lowers the dc of any skill check to hear.\n\nPetrification\nRemaining in this state for more than 10 hours causes your marble like skin to harden. after 48 hours your body becomes solid like a statue. you lose the ability to move, speak, or use any action except skill checks to hear. all skill checks to hear are treated as a critical success. and you can hear everything in a 30 mile radius."
                    },
                    {
                        "featuretextwithbullet": "Deadly Body\nYour melee damage with your:\n\n- Unarmed attack is increased to 2d8\n\n- Bite attack is increased to 2d6"
                    }
                ],
                "7": [
                    {
                        "modifyresource": {
                            "name": "Blood Points ",
                            "amount": "2"
                        }
                    },
                    {
                        "modifyabilityscore": {
                            "strength": "2"
                        }
                    },
                    {
                        "featuretextwithbullet": "You get a +2 to your strength score\n\n- You may take a 20 on 3 strength checks per long rest"
                    },
                    {
                        "addspell": {
                            "name": "fast friends",
                            "spelllevel": "3"
                        }
                    }
                ],
                "8": [
                    {
                        "modifyresource": {
                            "name": "Blood Points ",
                            "amount": "2"
                        }
                    },
                    {
                        "featuretextwithbullet": "Superhuman speed\nYou get a +2 to your dexterity score\n\n- You can move double your movement speed with no exhaustion 3 times per long rest"
                    },
                    {
                        "modifyabilityscore": {
                            "dexterity": "2"
                        }
                    },
                    {
                        "featuretext": "Fast healing die is increased to 1d8"
                    }
                ],
                "9": [
                    {
                        "abilityscoreimprovement": ""
                    },
                    {
                        "modifyresource": {
                            "name": "Blood Points ",
                            "amount": "2"
                        }
                    },
                    {
                        "addspell": {
                            "name": "Dominate Person",
                            "spelllevel": "5"
                        }
                    }
                ],
                "10": [
                    {
                        "modifyresource": {
                            "name": "Blood Points ",
                            "amount": "2"
                        }
                    },
                    {
                        "featuretextwithbullet": "Sunlight resistance\nYou can handle sunlight on your bare skin for short periods without taking damage. you can spend up to 3 hours in sunlight before taking damage."
                    }
                ],
                "11": [
                    {
                        "modifyresource": {
                            "name": "Blood Points ",
                            "amount": "2"
                        }
                    },
                    {
                        "featuretextwithbullet": "Decreasing bloodlust\nYou've been a vampire for some time now, and have such gained some control of your hunger.\n\n-A short rest will now recover half of your total blood points. \n\n-Anytime you drink blood you now regain 1d8+con mod blood points."
                    },
                    {
                        "addspell": {
                            "name": "Power Word Stun",
                            "spelllevel": "8"
                        }
                    }
                ],
                "12": [
                    {
                        "abilityscoreimprovement": ""
                    },
                    {
                        "modifyresource": {
                            "name": "Blood Points ",
                            "amount": "2"
                        }
                    },
                    {
                        "featuretextwithbullet": "Deadly Body\nYour melee damage with your:\n\n- Unarmed attack is increased to 3d8\n\n- Bite attack is increased to 3d6"
                    }
                ],
                "13": [
                    {
                        "modifyresource": {
                            "name": "Blood Points ",
                            "amount": "2"
                        }
                    },
                    {
                        "featuretextwithbullet": "Fast healing die is increased to 1d12"
                    }
                ],
                "14": [
                    {
                        "modifyresource": {
                            "name": "Blood Points ",
                            "amount": "2"
                        }
                    }
                ],
                "15": [
                    {
                        "abilityscoreimprovement": ""
                    },
                    {
                        "modifyresource": {
                            "name": "Blood Points ",
                            "amount": "2"
                        }
                    },
                    {
                        "featuretextwithbullet": "The Dark Gift\nYou gain the knowledge to pass on your immortality. you select a humanoid mortal that in unafflicted by lycanthropy, and you take them to a hidden place. as a 3 day ritual you perform a dark rite draining the mortal of their blood and replacing it with a portion of your own. the mortal makes death saves to determine if they survive the transformation. when finished the mortal becomes a lvl 1 vampire, the dm decides when this character levels up.\n\nThe ritual costs you 25 blood points and 10,000gp."
                    }
                ],
                "16": [
                    {
                        "modifyresource": {
                            "name": "Blood Points ",
                            "amount": "2"
                        }
                    },
                    {
                        "featuretextwithbullet": "Fast healing die is increased to 2d12"
                    }
                ],
                "17": [
                    {
                        "modifyresource": {
                            "name": "Blood Points ",
                            "amount": "2"
                        }
                    },
                    {
                        "featuretextwithbullet": "Deadly Body\nYour melee damage with your:\n\n- Unarmed attack is increased to 4d8\n\n- Bite attack is increased to 4d6"
                    }
                ],
                "18": [
                    {
                        "abilityscoreimprovement": ""
                    },
                    {
                        "modifyresource": {
                            "name": "Blood Points ",
                            "amount": "2"
                        }
                    }
                ],
                "19": [
                    {
                        "modifyresource": {
                            "name": "Blood Points ",
                            "amount": "2"
                        }
                    },
                    {
                        "featuretextwithbullet": "Overexurtion\nSpend 30 blood points while attacking a creature that is below half health with an unarmed to drop its hp to 1d10+ the creatures Constitution mod"
                    },
                    {
                        "featuretext": "Fast healing die is increased to 3d12"
                    }
                ],
                "20": [
                    {
                        "modifyresource": {
                            "name": "Blood Points ",
                            "amount": "8"
                        }
                    },
                    {
                        "featuretextwithbullet": "Ancient vampire\nYou have achieved the pinnacle of the vampire form. \n\n- You can handle sunlight for several hours at a time.\n\n- You no longer feel fatigue as the sun rises.\n\n- You regain all blood points on a short rest\n\n- Once a day you may move 60ft as a reaction. moving faster than any mortal can see.\n\n- You cannot be surprised."
                    }
                ]
            }
        }
    ],
    "archetypes": [
        {
            "name": "The Hexblade",
            "displayname": "Hexblade",
            "class": "Warlock",
            "previewtext": "Gain access to combat spells.\nUse Cha to attack, curse targets, and summon a Shadow Hound.",
            "level": {
                "1": [
                    {
                        "addarmorproficiencies": [
                            "Medium Armor",
                            "Shield"
                        ]
                    },
                    {
                        "addweaponproficiencies": [
                            "Martial Weapons"
                        ]
                    },
                    {
                        "featuretextwithbullet": "Warlock Archetype: Hexblade"
                    },
                    {
                        "featuretextwithbullet": "Expanded Spell List: You may select Shield and Wrathful Smite as Warlock spells."
                    },
                    {
                        "featuretextwithbullet": "Hex Warrior - When you attack with a wepaon you are proficient with, and is not two-handed, you may use your Cha mod for the attack and damage instead of Str or Dex."
                    },
                    {
                        "featuretextwithbullet": "Hexblade's Curse - Once per short or long rest, you can choose one creature you can see within 30 feet of you as a bonus action. The target is cursed for 1 minute. Until the curse ends, you gain the following benefits:"
                    },
                    {
                        "featuretext": {
                            "combinestrings": [
                                "-Bonus to damage rolls against the target equal to: ",
                                {
                                    "value": "proficiencybonus"
                                },
                                " (proficiency bonus)."
                            ]
                        }
                    },
                    {
                        "featuretext": "-Attacks you make against the target are critical hits on 19 or 20."
                    },
                    {
                        "featuretext": {
                            "combinestrings": [
                                "-If the target dies while cursed, you regain ",
                                {
                                    "value": {
                                        "add": [
                                            "charismamodifier",
                                            {
                                                "classlevel": "Warlock"
                                            }
                                        ]
                                    }
                                },
                                " (Cha mod + level) hit points."
                            ]
                        }
                    }
                ],
                "3": [
                    {
                        "featuretextwithbullet": "Expanded Spell List: You may select Branding Smite and Magic Weapon as Warlock spells."
                    }
                ],
                "5": [
                    {
                        "featuretextwithbullet": "Expanded Spell List: You may select Blink and Elemental Weapon as Warlock spells."
                    }
                ],
                "6": [
                    {
                        "featuretextwithbullet": "Shadow Hound - As a bonus action, command your shadow to attach to a creature you can see within 60 ft of you. While affected, the target gains no benefit from cover (other than full) against your attacks. You also know the distance and direction to the target. Your Hound cannot be seen by anyone but you and Truesight."
                    },
                    {
                        "featuretext": "You can recall the Hound with a bonus action. It also returns if you are incapacitated, or it is affected by: Dispel Magic, Remove Curse, or a similar effect."
                    }
                ],
                "7": [
                    {
                        "featuretextwithbullet": "Expanded Spell List: You may select Phantasmal Killer and Staggering Smite as Warlock spells."
                    }
                ],
                "9": [
                    {
                        "featuretextwithbullet": "Expanded Spell List: You may select Cone of Cold and Destructive Wave as Warlock spells."
                    }
                ],
                "10": [
                    {
                        "featuretextwithbullet": "Armor of Hexes - If your cursed target hits you with an attack roll, roll a d6. On a 4 or higher, the attack misses."
                    }
                ],
                "14": [
                    {
                        "featuretextwithbullet": "Master of Hexes - You may use your Hexblade Curse again without resting. Cursing a new target ends the curse on a previous."
                    }
                ],
                "all": [
                    {
                        "replacelinefromfeaturetext": {
                            "replacementtext": {
                                "combinestrings": [
                                    "If the target dies while cursed, you regain ",
                                    {
                                        "value": {
                                            "add": [
                                                "charismamodifier",
                                                {
                                                    "classlevel": "Warlock"
                                                }
                                            ]
                                        }
                                    },
                                    " (Cha mod + level) hit points."
                                ]
                            },
                            "linestarts": "If the target dies",
                            "lineends": "hit points."
                        }
                    },
                    {
                        "replacelinefromfeaturetext": {
                            "replacementtext": {
                                "combinestrings": [
                                    "Bonus to damage rolls against the target equal to ",
                                    {
                                        "value": "proficiencybonus"
                                    },
                                    " (proficiency bonus)."
                                ]
                            },
                            "linestarts": "Bonus to damage rolls",
                            "lineends": "(proficiency bonus)."
                        }
                    }
                ]
            }
        },
        {
            "name": "Revised Ancestral Guardian",
            "displayname": "Ancestral Guardian",
            "class": "Barbarian",
            "previewtext": "Summon spirits to hinder your foes and protect you and your allies",
            "level": {
                "3": [
                    {
                        "featuretext": "When raging the first creature you hit on your turn has disadvantage on any attack roll that doesn't target you, and creatures other than you have redistance to its attacks,"
                    }
                ],
                "6": [
                    {
                        "featuretext": "Spirit Shield: When raging and a creature you can see within 30' takes damage, you can use your reaction to reduce the damage by 2d8.\nThis reduction increases to 3d8 at 10th level, and 4d8 at 14th level."
                    }
                ],
                "10": [
                    {
                        "featuretext": "You can summon an ancestor spirit which functions as the Clairvoyance spell. (1\/rest)"
                    }
                ],
                "14": [
                    {
                        "featuretext": "When you use Spirit Shield the attacker takes damage equal to the amount prevented."
                    }
                ]
            }
        },
        {
            "name": "Revised Circle of the Shepherd",
            "displayname": "Circle of the Shepherd",
            "class": "Druid",
            "previewtext": "Call forth powerful animal spirits",
            "spellcastingability": "wisdom",
            "level": {
                "2": [
                    {
                        "featuretext": "As a bonus action you can call a Medium spirit and bind it for 1 minute to an unoccupied space you can see within 60'. You can move it up to 60' to a point you see as a bonus action. It creates a 30' aura, with different abilities based on what spirit is bound. Usable 1\/rest."
                    },
                    {
                        "featuretextwithbullet": "Bear: You and your allies within the aura gain (5+druid level) temporary hit points, and have advantage on strength checks and saving throws while in the aura."
                    },
                    {
                        "featuretextwithbullet": "Hawk: You can use your reaction to grant advantage on a ranged attack against a creature within the aura."
                    },
                    {
                        "featuretextwithbullet": "Unicorn: You and your allies have advantage on all checks to detect creatures in the aura. Also, whenever you cast a healing spell each creature of your choice within the aura gains hit points equal to your druid level."
                    },
                    {
                        "featuretext": "You can communicate with beasts."
                    },
                    {
                        "addlanguagesknown": [
                            "Sylvan"
                        ]
                    }
                ],
                "6": [
                    {
                        "featuretext": "Any beast summoned or created by your spells gains 2 hit points for each of its hit die, and its natural weapons are conscidered magical for determining resistance and immunity to non-magical damage."
                    }
                ],
                "10": [
                    {
                        "featuretext": "Whenever a beast or fey you summoned ends its turn in the aura it regains hitpoints equal to half your druid level."
                    }
                ],
                "14": [
                    {
                        "featuretext": "If you are reduced to 0 hp or incapacitated against your will, you immediately gain the benefits of a 9th level Conjure Animals. Select 4 beasts of CR 2 or lower, they appear within 20' of you, and if you issue no commands they protect you and attack your foes. This spell does not require concentration, and lasts for 1 hour or until you dismiss it as a free action. 1\/long rest."
                    }
                ]
            }
        },
        {
            "name": "Revised Arcane Archer",
            "displayname": "Arcane Archer",
            "class": "Fighter",
            "previewtext": "Blend magic and archery",
            "level": {
                "3": [
                    {
                        "featuretext": "When you fire a nonmagical arrow from a shortbow or longbow it becomes a +1 magical arrow. This magic fades as soon as you hit or miss your target."
                    },
                    {
                        "featuretext": "Arcane Shot: Once per turn you can use an Arcane Shot option, deciding to use it after it hits, unless the shot does not require an attack. You regain all uses after a short or long rest."
                    },
                    {
                        "sharedclassfeaturemenu": {
                            "name": "Arcane Shots"
                        }
                    },
                    {
                        "setresource": {
                            "name": "Arcane Shot",
                            "amount": "2",
                            "displayname": "Arcane Shot",
                            "reset": "shortrest"
                        }
                    },
                    {
                        "showresource": "Arcane Shot"
                    },
                    {
                        "skillmenu": {
                            "skills": [
                                "Arcana",
                                "Nature"
                            ],
                            "selections": "1",
                            "title": "Arcane Archer's Lore"
                        }
                    },
                    {
                        "setspellcastingability": "Intelligence"
                    }
                ],
                "7": [
                    {
                        "featuretext": "As a bonus action, when you miss with a magical arrow you can re-roll the attack against a creature within 60' of the first target."
                    },
                    {
                        "sharedclassfeaturemenu": {
                            "name": "Arcane Shots",
                            "selections": "1"
                        }
                    }
                ],
                "10": [
                    {
                        "sharedclassfeaturemenu": {
                            "name": "Arcane Shots",
                            "selections": "1"
                        }
                    }
                ],
                "15": [
                    {
                        "sharedclassfeaturemenu": {
                            "name": "Arcane Shots",
                            "selections": "1"
                        }
                    },
                    {
                        "featuretext": "If you roll initiative and have no uses of Arcane Shot left, you regain 1 use."
                    }
                ],
                "18": [
                    {
                        "sharedclassfeaturemenu": {
                            "name": "Arcane Shots",
                            "selections": "1"
                        }
                    }
                ]
            }
        },
        {
            "name": "Revised Kensei",
            "displayname": "Way of the Kensei",
            "class": "Monk",
            "previewtext": "Weapon masters",
            "level": {
                "3": [
                    {
                        "featuretext": "Kensei Weapons:"
                    },
                    {
                        "menu": {
                            "name": "Kensei Weapon: Melee",
                            "title": "Kensei Weapon: Melee",
                            "selections": "1",
                            "entries": [
                                {
                                    "name": "Battleaxe",
                                    "displayname": "Battleaxe",
                                    "effects": [
                                        {
                                            "addweaponproficiencies": [
                                                "Battleaxe"
                                            ]
                                        },
                                        {
                                            "featuretextwithbullet": "Battleaxe"
                                        }
                                    ]
                                },
                                {
                                    "name": "Club",
                                    "displayname": "Club",
                                    "effects": [
                                        {
                                            "addweaponproficiencies": [
                                                "Club"
                                            ]
                                        },
                                        {
                                            "featuretextwithbullet": "Club"
                                        }
                                    ]
                                },
                                {
                                    "name": "Dagger",
                                    "displayname": "Dagger",
                                    "effects": [
                                        {
                                            "addweaponproficiencies": [
                                                "Dagger"
                                            ]
                                        },
                                        {
                                            "featuretextwithbullet": "Dagger"
                                        }
                                    ]
                                },
                                {
                                    "name": "Flail",
                                    "displayname": "Flail",
                                    "effects": [
                                        {
                                            "addweaponproficiencies": [
                                                "Flail"
                                            ]
                                        },
                                        {
                                            "featuretextwithbullet": "Flail"
                                        }
                                    ]
                                },
                                {
                                    "name": "Greatclub",
                                    "displayname": "Greatclub",
                                    "effects": [
                                        {
                                            "addweaponproficiencies": [
                                                "Greatclub"
                                            ]
                                        },
                                        {
                                            "featuretextwithbullet": "Greatclub"
                                        }
                                    ]
                                },
                                {
                                    "name": "Handaxe",
                                    "displayname": "Handaxe",
                                    "effects": [
                                        {
                                            "addweaponproficiencies": [
                                                "Handaxe"
                                            ]
                                        },
                                        {
                                            "featuretextwithbullet": "Handaxe"
                                        }
                                    ]
                                },
                                {
                                    "name": "Javelin",
                                    "displayname": "Javelin",
                                    "effects": [
                                        {
                                            "addweaponproficiencies": [
                                                "Javelin"
                                            ]
                                        },
                                        {
                                            "featuretextwithbullet": "Javelin"
                                        }
                                    ]
                                },
                                {
                                    "name": "Light Hammer",
                                    "displayname": "Light Hammer",
                                    "effects": [
                                        {
                                            "addweaponproficiencies": [
                                                "Light Hammer"
                                            ]
                                        },
                                        {
                                            "featuretextwithbullet": "Light Hammer"
                                        }
                                    ]
                                },
                                {
                                    "name": "Longsword",
                                    "displayname": "Longsword",
                                    "effects": [
                                        {
                                            "addweaponproficiencies": [
                                                "Longsword"
                                            ]
                                        },
                                        {
                                            "featuretextwithbullet": "Longsword"
                                        }
                                    ]
                                },
                                {
                                    "name": "Mace",
                                    "displayname": "Mace",
                                    "effects": [
                                        {
                                            "addweaponproficiencies": [
                                                "Mace"
                                            ]
                                        },
                                        {
                                            "featuretextwithbullet": "Mace"
                                        }
                                    ]
                                },
                                {
                                    "name": "Quarterstaff",
                                    "displayname": "Quarterstaff",
                                    "effects": [
                                        {
                                            "addweaponproficiencies": [
                                                "Quarterstaff"
                                            ]
                                        },
                                        {
                                            "featuretextwithbullet": "Quarterstaff"
                                        }
                                    ]
                                },
                                {
                                    "name": "Rapier",
                                    "displayname": "Rapier",
                                    "effects": [
                                        {
                                            "addweaponproficiencies": [
                                                "Rapier"
                                            ]
                                        },
                                        {
                                            "featuretextwithbullet": "Rapier"
                                        }
                                    ]
                                },
                                {
                                    "name": "Scimitar",
                                    "displayname": "Scimitar",
                                    "effects": [
                                        {
                                            "addweaponproficiencies": [
                                                "Scimitar"
                                            ]
                                        },
                                        {
                                            "featuretextwithbullet": "Scimitar"
                                        }
                                    ]
                                },
                                {
                                    "name": "Shortsword",
                                    "displayname": "Shortsword",
                                    "effects": [
                                        {
                                            "addweaponproficiencies": [
                                                "Shortsword"
                                            ]
                                        },
                                        {
                                            "featuretextwithbullet": "Shortsword"
                                        }
                                    ]
                                },
                                {
                                    "name": "Sickle",
                                    "displayname": "Sickle",
                                    "effects": [
                                        {
                                            "addweaponproficiencies": [
                                                "Sickle"
                                            ]
                                        },
                                        {
                                            "featuretextwithbullet": "Sickle"
                                        }
                                    ]
                                },
                                {
                                    "name": "Spear",
                                    "displayname": "Spear",
                                    "effects": [
                                        {
                                            "addweaponproficiencies": [
                                                "Spear"
                                            ]
                                        },
                                        {
                                            "featuretextwithbullet": "Spear"
                                        }
                                    ]
                                },
                                {
                                    "name": "Trident",
                                    "displayname": "Trident",
                                    "effects": [
                                        {
                                            "addweaponproficiencies": [
                                                "Trident"
                                            ]
                                        },
                                        {
                                            "featuretextwithbullet": "Trident"
                                        }
                                    ]
                                },
                                {
                                    "name": "War Pick",
                                    "displayname": "War Pick",
                                    "effects": [
                                        {
                                            "addweaponproficiencies": [
                                                "War Pick"
                                            ]
                                        },
                                        {
                                            "featuretextwithbullet": "War Pick"
                                        }
                                    ]
                                },
                                {
                                    "name": "Warhammer",
                                    "displayname": "Warhammer",
                                    "effects": [
                                        {
                                            "addweaponproficiencies": [
                                                "Warhammer"
                                            ]
                                        },
                                        {
                                            "featuretextwithbullet": "Warhammer"
                                        }
                                    ]
                                },
                                {
                                    "name": "Whip",
                                    "displayname": "Whip",
                                    "effects": [
                                        {
                                            "addweaponproficiencies": [
                                                "Whip"
                                            ]
                                        },
                                        {
                                            "featuretextwithbullet": "Whip"
                                        }
                                    ]
                                }
                            ]
                        }
                    },
                    {
                        "menu": {
                            "name": "Kensei Weapon: Melee",
                            "title": "Kensei Weapon: Melee",
                            "selections": "1",
                            "entries": [
                                {
                                    "name": "Blowgun",
                                    "displayname": "Blowgun",
                                    "effects": [
                                        {
                                            "addweaponproficiencies": [
                                                "Blowgun"
                                            ]
                                        },
                                        {
                                            "featuretextwithbullet": "Blowgun"
                                        }
                                    ]
                                },
                                {
                                    "name": "Crossbow, Hand",
                                    "displayname": "Crossbow, Hand",
                                    "effects": [
                                        {
                                            "addweaponproficiencies": [
                                                "Crossbow, Hand"
                                            ]
                                        },
                                        {
                                            "featuretextwithbullet": "Crossbow, Hand"
                                        }
                                    ]
                                },
                                {
                                    "name": "Crossbow, Light",
                                    "displayname": "Crossbow, Light",
                                    "effects": [
                                        {
                                            "addweaponproficiencies": [
                                                "Crossbow, Light"
                                            ]
                                        },
                                        {
                                            "featuretextwithbullet": "Crossbow, Light"
                                        }
                                    ]
                                },
                                {
                                    "name": "Dart",
                                    "displayname": "Dart",
                                    "effects": [
                                        {
                                            "addweaponproficiencies": [
                                                "Dart"
                                            ]
                                        },
                                        {
                                            "featuretextwithbullet": "Dart"
                                        }
                                    ]
                                },
                                {
                                    "name": "Longbow",
                                    "displayname": "Longbow",
                                    "effects": [
                                        {
                                            "addweaponproficiencies": [
                                                "Longbow"
                                            ]
                                        },
                                        {
                                            "featuretextwithbullet": "Longbow"
                                        }
                                    ]
                                },
                                {
                                    "name": "Shortbow",
                                    "displayname": "Shortbow",
                                    "effects": [
                                        {
                                            "addweaponproficiencies": [
                                                "Shortbow"
                                            ]
                                        },
                                        {
                                            "featuretextwithbullet": "Shortbow"
                                        }
                                    ]
                                },
                                {
                                    "name": "Sling",
                                    "displayname": "Sling",
                                    "effects": [
                                        {
                                            "addweaponproficiencies": [
                                                "Sling"
                                            ]
                                        },
                                        {
                                            "featuretextwithbullet": "Sling"
                                        }
                                    ]
                                }
                            ]
                        }
                    },
                    {
                        "featuretext": "Kensei Properties:"
                    },
                    {
                        "featuretextwithbullet": "You may treat Kensei Weapons as monk weapons"
                    },
                    {
                        "featuretextwithbullet": "When you make an unarmed attack you gain +2 AC so long as a Kensei Weapom is in your hand and you aren't incapacitated."
                    },
                    {
                        "featuretextwithbullet": "When you make a ranged attack you can empower it as a bonus action, causing all attacks this turn to do an extra 1d4 damage."
                    }
                ],
                "6": [
                    {
                        "replacestringfromfeaturetext": {
                            "replacementtext": "an extra 1d4 damage.\n• Your Kensei Weapons count as magical for the purposes of overcoming resistance and immunity.\n• You can spend 1 ki point when you hit a target to do extra damage equal to your martial arts die.",
                            "find": "an extra 1d4 damage."
                        }
                    },
                    {
                        "sharedclassfeaturemenu": {
                            "name": "Kensei Weapons",
                            "selections": "1"
                        }
                    }
                ],
                "11": [
                    {
                        "replacestringfromfeaturetext": {
                            "replacementtext": "your martial arts die.\n• You can put up to 3 ki points into your weapon, granting a +1 to attacks and damage for each point. Lasts 1 minute, or until you use this feature again.",
                            "find": "your martial arts die."
                        }
                    },
                    {
                        "sharedclassfeaturemenu": {
                            "name": "Kensei Weapons",
                            "selections": "1"
                        }
                    }
                ],
                "17": [
                    {
                        "replacestringfromfeaturetext": {
                            "replacementtext": "use this feature again.\n• Once per turn, you may reroll one monk weapon attack that misses.",
                            "find": " your martial arts die.\n• You can put up to 3 ki points into your weapon, granting a +1 to attacks and damage for each point. Lasts 1 minute, or until you use this feature again."
                        }
                    },
                    {
                        "sharedclassfeaturemenu": {
                            "name": "Kensei Weapons"
                        }
                    }
                ]
            }
        },
        {
            "name": "Revised Oath of Conquest",
            "displayname": "Oath of Conquest",
            "class": "Paladin",
            "previewtext": "Tyranical rulers and their followers",
            "level": {
                "3": [
                    {
                        "addspell": {
                            "name": "Armor of Agathys",
                            "spelllevel": "1"
                        }
                    },
                    {
                        "addspell": {
                            "name": "Command",
                            "spelllevel": "1"
                        }
                    },
                    {
                        "featuretext": "You can use Channel Divinity when you make an attack to force a target to make a Wisdom saving throw. If it fails it is frightened of you, repeating the saving throw on its turn until it succeeds or 1 minute passes. "
                    },
                    {
                        "featuretext": "You can use Channel Divinity to gain +10 to an attack you have rolled."
                    }
                ],
                "5": [
                    {
                        "addspell": {
                            "name": "Hold Person",
                            "spelllevel": "2"
                        }
                    },
                    {
                        "addspell": {
                            "name": "Spiritual Weapon",
                            "spelllevel": "2"
                        }
                    }
                ],
                "7": [
                    {
                        "featuretext": "You create a 10' aura in which all creatures frightened of you have their speed reduced to 0' an take (paladin level\/2) psychic damage when starting their turn in your aura.\nThis aura increases to 30' at 18th level."
                    }
                ],
                "9": [
                    {
                        "addspell": {
                            "name": "Bestow Curse",
                            "spelllevel": "3"
                        }
                    },
                    {
                        "addspell": {
                            "name": "Fear",
                            "spelllevel": "3"
                        }
                    }
                ],
                "13": [
                    {
                        "addspell": {
                            "name": "Dominate Beast",
                            "spelllevel": "4"
                        }
                    },
                    {
                        "addspell": {
                            "name": "Stoneskin",
                            "spelllevel": "4"
                        }
                    }
                ],
                "15": [
                    {
                        "featuretext": "So long as you aren't incapacitated any enemy who damages you takes CHA psychic damage."
                    }
                ],
                "17": [
                    {
                        "addspell": {
                            "name": "Cloudkill",
                            "spelllevel": "5"
                        }
                    },
                    {
                        "addspell": {
                            "name": "Dominate Person",
                            "spelllevel": "5"
                        }
                    }
                ],
                "20": [
                    {
                        "featuretext": "As an action you become an Avatar of Conquest for 1 minute. 1\/long rest."
                    },
                    {
                        "featuretextwithbullet": "You have resistance to all damage"
                    },
                    {
                        "featuretextwithbullet": "When you take the attack action, you may make an additional attack."
                    },
                    {
                        "featuretextwithbullet": "You score a critical hit on 19 or 20."
                    }
                ]
            }
        },
        {
            "name": "Revised Favored Soul",
            "displayname": "Favored Soul",
            "class": "Sorcerer",
            "previewtext": "Heir to divine power",
            "level": {
                "1": [
                    {
                        "featuretext": "You can learn cleric cantrips and spells in lieu of any sorcerer ones."
                    },
                    {
                        "featuretext": "If you miss with an attack or fail a saving throw, you can roll 2d4 and add it to the result. 1\/rest"
                    },
                    {
                        "addspell": {
                            "name": "Cure Wounds",
                            "spelllevel": "1"
                        }
                    }
                ],
                "6": [
                    {
                        "featuretextwithbullet": "You can use a sorcery point to reroll any number of dice for any healing sorcery spell once."
                    }
                ],
                "14": [
                    {
                        "featuretext": "As a bonus action you can sprout spectral wings, granting you a 30' fly speed. These wings last until you are incapacitated or dismiss them as a bonus action."
                    }
                ],
                "18": [
                    {
                        "featuretext": "If below half hit points, can use a bonus action to regain half your maximum hit points. 1\/long rest"
                    }
                ]
            }
        },
        {
            "name": "Celestial",
            "displayname": "Celestial",
            "class": "Warlock",
            "previewtext": "Patron of Knowledge",
            "level": {
                "1": [
                    {
                        "featuretext": "Healing Light: You have a pool of dice you can use to heal. As a bonus action touch a creature and roll up to CHA dice. They regain hit points equal to the sum."
                    },
                    {
                        "addspell": {
                            "name": "Sacred Flame",
                            "spelllevel": "0"
                        }
                    },
                    {
                        "addspell": {
                            "name": "Light",
                            "spelllevel": "0"
                        }
                    },
                    {
                        "setresource": {
                            "name": "Healing Light",
                            "diesize": "6",
                            "amount": {
                                "add": [
                                    "1",
                                    {
                                        "classlevel": "Warlock"
                                    }
                                ]
                            },
                            "spendable": "true",
                            "displayname": "Light",
                            "reset": "longrest"
                        }
                    },
                    {
                        "showresource": "Healing Light"
                    }
                ],
                "6": [
                    {
                        "featuretextwithbullet": "You have resistance to radiant damage"
                    },
                    {
                        "featuretextwithbullet": "When you cast a spell that does fire or radiant damage you can add CHA to the damage total against one target of your choice."
                    }
                ],
                "10": [
                    {
                        "featuretext": "When you take a short or long rest you gain temporary hit points equal to (Warlock level+CHA) and up to 5 creatures you can see gain ((Warlock level+CHA)\/2) temporary hit points."
                    }
                ],
                "14": [
                    {
                        "featuretext": "When you need to make a death saving throw you can instead explode with radiant energy, regaining half your maximum hit points, and stading if you wish. Each creature of your choice within 30' takes 2d8+CHA radiant damage and is blinded until the end of the turn. (1\/long rest)"
                    }
                ]
            }
        },
        {
            "name": "War Magic",
            "displayname": "War Magic",
            "class": "Wizard",
            "previewtext": "Fuse destruction and protection to master combat",
            "level": {
                "2": [
                    {
                        "setextraabilitymodifiertoinitiative": "Intelligence"
                    },
                    {
                        "featuretext": "Arcane Deflection: When you are hit by an attack or fail a Constitution saving throw you can use your reaction to give yourself a +2 AC or +4 to the saving throw. After using this ability you can't cast spells other than cantrips until the end of your next turn."
                    }
                ],
                "6": [
                    {
                        "featuretext": "When multiple creatures are forced to make saving throws against one of your spells that cause damage, you can add two more damage dice. (1\/rest)"
                    }
                ],
                "10": [
                    {
                        "featuretext": "While maintaining concentration on a spell you have +2 to AC and all saving throws."
                    }
                ],
                "14": [
                    {
                        "featuretext": "When you use Arcane Deflection each creature of your choice within 10' takes (wizard level\/2) force damage."
                    }
                ]
            }
        },
        {
            "name": "Ancestral Guardian",
            "displayname": "Ancestral Guardian",
            "class": "Barbarian",
            "previewtext": "Summon spirits to hinder your foes and protect you and your allies",
            "level": {
                "3": [
                    {
                        "featuretext": "As a bonus action when raging, select a creature within 5' it has disadvantage on attacks against creatures other than you, and moves at half speed if it disengages."
                    }
                ],
                "6": [
                    {
                        "featuretext": "As a reaction, you can transfer your bludgeoning, piercing, or slashing damage to an ally within 30' until the start of your next turn"
                    }
                ],
                "10": [
                    {
                        "featuretext": "Give yourself advantage on an Intelligence or Wisdom check 3 times\/long rest"
                    }
                ],
                "14": [
                    {
                        "featuretext": "If you or an ally within 30' are damaged by a melee attack you can use your reaction to damage the attacker for 2d8 force"
                    }
                ]
            }
        },
        {
            "name": "Storm Herald",
            "displayname": "Storm Herald",
            "class": "Barbarian",
            "previewtext": "Channel the fury of the storm",
            "spellcastingability": "constitution",
            "level": {
                "3": [
                    {
                        "featuretext": "While raging you generate an aura 10' in radius, its effects depends on your terrain choice."
                    },
                    {
                        "menu": {
                            "name": "Storm of Fury",
                            "title": "Environment",
                            "selections": "1",
                            "entries": [
                                {
                                    "name": "Desert",
                                    "displayname": "Desert",
                                    "previewtext": "Cause fire damage to enemies in your aura",
                                    "effects": [
                                        {
                                            "featuretext": "Any enemy creature that ends its turn in your aura takes (Barbarian Level+2)\/4 fire damage"
                                        }
                                    ]
                                },
                                {
                                    "name": "Sea",
                                    "displayname": "Sea",
                                    "previewtext": "Call lightning onto your foes",
                                    "effects": [
                                        {
                                            "featuretext": "At the end of each of your turns, choose a creature within your aura, it must make a dexterity saving throw or take 2d6 lightning damage. This upgrades to 3d6 at 10th level, and 4d6 at 15th."
                                        }
                                    ]
                                },
                                {
                                    "name": "Tundra",
                                    "displayname": "Tundra",
                                    "previewtext": "Cause ice damage to enemies in your aura",
                                    "effects": [
                                        {
                                            "featuretext": "Any enemy creature that ends its turn in your aura takes ice damage"
                                        },
                                        {
                                            "featuretext": {
                                                "value": {
                                                    "divide": [
                                                        {
                                                            "add": [
                                                                {
                                                                    "classlevel": "Barbarian"
                                                                },
                                                                "2"
                                                            ]
                                                        },
                                                        "4"
                                                    ]
                                                }
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                ],
                "6": [
                    {
                        "menu": {
                            "name": "Storm Soul",
                            "title": "Environment",
                            "selections": "1",
                            "entries": [
                                {
                                    "name": "Desert",
                                    "displayname": "Desert",
                                    "previewtext": "Resist fire & heat exhaustian",
                                    "effects": [
                                        {
                                            "featuretext": "You\thave\tresistance\tto\tfire\t damage\tand\t\r\ndon’t\tsuffer\tthe\t effects\tof\textreme\theat."
                                        }
                                    ]
                                },
                                {
                                    "name": "Sea",
                                    "displayname": "Sea",
                                    "previewtext": "Resist lightning & breathe underwater",
                                    "effects": [
                                        {
                                            "featuretext": "You\thave\tresistance\tto\tlightning\t damage\t and\t\r\ncan breathe underwater."
                                        }
                                    ]
                                },
                                {
                                    "name": "Tundra",
                                    "displayname": "Tundra",
                                    "previewtext": "Resist ice & cold exhaustian",
                                    "effects": [
                                        {
                                            "featuretext": "You\thave\tresistance\tto\tfire\t damage\tand\t\r\ndon’t\tsuffer\tthe\t effects\tof\textreme\theat."
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                ],
                "10": [
                    {
                        "featuretext": "While within your aura allies gain the benefit of your Storm Soul (defensive) ability."
                    }
                ],
                "14": [
                    {
                        "menu": {
                            "name": "Raging Storm",
                            "title": "Environment",
                            "selections": "1",
                            "entries": [
                                {
                                    "name": "Desert",
                                    "displayname": "Desert",
                                    "previewtext": "Stop enemies passing through your aura.",
                                    "effects": [
                                        {
                                            "featuretext": "Any creature moving more than 5' in your aura must make a strength saving throw, or its speed becomes 0 until the start of its next turn."
                                        }
                                    ]
                                },
                                {
                                    "name": "Sea",
                                    "displayname": "Sea",
                                    "previewtext": "Knock enemies in your aura prone",
                                    "effects": [
                                        {
                                            "featuretext": "Any creature in your your that you hit with an attack must makd a strength saving throw or fall prone."
                                        }
                                    ]
                                },
                                {
                                    "name": "Tundra",
                                    "displayname": "Tundra",
                                    "effects": [
                                        {
                                            "featuretext": "Your aura counts as difficult terrain for your enemies."
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                ]
            }
        },
        {
            "name": "Zealot",
            "displayname": "Zealot",
            "class": "Barbarian",
            "previewtext": "Become a holy berzerker",
            "level": {
                "3": [
                    {
                        "menu": {
                            "name": "Damage Type",
                            "selections": "1",
                            "entries": [
                                {
                                    "name": "Necrotic",
                                    "displayname": "Necrotic",
                                    "effects": [
                                        {
                                            "featuretext": "Any enemy within 5' of you when you end your turn takes 1d6+1\/2 barbarian level necrotic damage."
                                        }
                                    ]
                                },
                                {
                                    "name": "Radiant",
                                    "displayname": "Radiant",
                                    "effects": [
                                        {
                                            "featuretext": "Any enemy within 5' of you when you end your turn takes 1d6+1\/2 barbarian level radiant damage."
                                        }
                                    ]
                                }
                            ]
                        }
                    },
                    {
                        "featuretext": "If a spell\twould\thave\tthe\tsole\t effect\tof\trestoring\t\r\nyou\tto\tlife\t(but\tnot undeath),\tthe caster does not need\tmaterial\tcomponents\tto cast the\tspell on\tyou."
                    }
                ],
                "6": [
                    {
                        "featuretext": "If you fail a saving throw while raging, you can use your reaction to save, immediately ending your rage, and you can't rage again until you finish a rest."
                    }
                ],
                "10": [
                    {
                        "featuretext": "As an action you can unleash a battle cry, giving all allies within 60' advantage on all attacks and saving throws. 1\/long rest"
                    }
                ]
            }
        },
        {
            "name": "College of Glamour",
            "displayname": "College of Glamour",
            "class": "Bard",
            "previewtext": "Call on the Fey to soothe and charm",
            "level": {
                "3": [
                    {
                        "featuretext": "As a bonus action change your appearance, inspiring (CHA mod, minimum of 1) allies within 60'. They can then move up to their speed toward you without provoking opportunity attacks, and gaining 2d6 temporary hit points. This increases based on bard level, 2d8\tat\t5th\t level,\t2d10 at\t10th level,\tand\t2d12\tat\t15th\tlevel."
                    },
                    {
                        "featuretext": "After a 10 minute performance choose (CHA mod, minimum 1) humanoids that heard\/saw all of it, they must make a Wisdom save or be charmed by you, speaking glowingly of your performance. This effect ends if it takes damage, or if it  you attack it or any of its allies. If it saves it does not know you attempted to charm it. Usable 1\/rest."
                    }
                ],
                "6": [
                    {
                        "featuretext": "As a bonus action you take on an appearance of unearthly beauty, for 1 minute you can cast Command as a bonus action without using spell slots. A target you have charmed automatically fails the save. Usable 1\/long rest."
                    }
                ],
                "14": [
                    {
                        "featuretext": "Once per rest you can cast sanctuary on yourself, if a creature fails its saving throw, they have disadvantage on saving throws against spells you cast next turn, and you have advantage on charisma checks against them."
                    }
                ]
            }
        },
        {
            "name": "College of Whispers",
            "displayname": "College of Whispers",
            "class": "Bard",
            "previewtext": "Use fear and manipulation to acquire power and secrets",
            "level": {
                "3": [
                    {
                        "featuretext": "When you hit a creature with a weapon attack you may use a bardic inspiration  to do 2d6 poison damage. Only usable once\/turn. The damage increases as you gain bard levels, doing 2d8\tat\t5th\tlevel,\t2d10\tat\t10th\tlevel,\tand\t2d12\tat\t\r\n15th\tlevel."
                    },
                    {
                        "featuretext": "You can spend 10 minutes speaking alone with a humanoid, after which it must make a Wisdom save or be frightened, avoiding others, and retreating to the safest place it knows. This ends after 1 hour, if it is attacked or damaged, or if it sees an ally be attacked or damaged. If it saves, it is unaware you attempted to frighten it."
                    }
                ],
                "6": [
                    {
                        "featuretext": "When you kill a creature, or if it dies within 5' of you, you can magically capture its shadow as a reaction if is both your creature type (such as humanoid) and size (small creatures can capture either small or medium creatures). As an action you can use a shadow to disguise yourself as the creature it came from, and access its surface memories for one hour, ending it as a bonus action. The information gained is what would be given to a casual acquaintance, not secrets. A creature can see through the disguise with a succesful Wisdom (Insight) check opposed by your Charisma (Deception) +5."
                    }
                ],
                "14": [
                    {
                        "featuretext": "As an action whisper a phrase directed at a target within 30', it must make a Wisdom save or becomes charmed by you, believing you know its greatest secret (although this does not give you that knowledge). This effect ends after 8 hours, or if you or your allies attack it, after which it does not know why it feared you. If it succeeds on the saving throw all it hears are mumblings."
                    }
                ]
            }
        },
        {
            "name": "College of Satire",
            "displayname": "College of Satire",
            "class": "Bard",
            "previewtext": "Caper and tumble, and embarass others",
            "level": {
                "3": [
                    {
                        "ifthenelse": {
                            "if": [
                                {
                                    "toolproficiency": "Thieves' Tools"
                                }
                            ],
                            "then": [
                                {
                                    "ifthenelse": {
                                        "if": [
                                            {
                                                "skillproficiency": "sleight of hand"
                                            }
                                        ],
                                        "then": [
                                            {
                                                "skillmenu": {
                                                    "skills": [
                                                        "Acrobatics",
                                                        "Animal Handling",
                                                        "Arcana",
                                                        "Athletics",
                                                        "Deception",
                                                        "History",
                                                        "Insight",
                                                        "Intimidation",
                                                        "Investigation",
                                                        "Medicine",
                                                        "Nature",
                                                        "Perception",
                                                        "Performance",
                                                        "Persuasion",
                                                        "Religion",
                                                        "Sleight of Hand",
                                                        "Stealth",
                                                        "Survival"
                                                    ],
                                                    "selections": "1"
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "featuretext": "You can tumble as a bonus action, granting you several benefits"
                    },
                    {
                        "featuretextwithbullet": "You gain the benefits of Disengage and Dash"
                    },
                    {
                        "featuretextwithbullet": "You gain a climbing speed equal to your movement speed"
                    },
                    {
                        "featuretextwithbullet": "You take half damage from falling"
                    }
                ],
                "6": [
                    {
                        "featuretext": "You can cast Detect Thoughts, and if the target succeeds on its saving throw, it suffers a social gaffe. (CHA\/long rest)"
                    }
                ],
                "14": [
                    {
                        "featuretext": "When you fail an ability check, saving throw, or miss with an attack, you may use a Bardic Inspiration and add it to the total. If that causes a success the DM can subtract the value of the Inspiration from a future ability check or attack, and you cannot use this ability again until they have done so."
                    }
                ]
            }
        },
        {
            "name": "Forge",
            "displayname": "Forge",
            "class": "Cleric",
            "previewtext": "Gods of craft and metal",
            "level": {
                "1": [
                    {
                        "featuretext": "1\/ long rest, imbue a non-magical weapon or armor with divine power, turning it into a +1 magic item (AC for armor, attack\/damage for weapons). This magic fades when you take a long rest"
                    },
                    {
                        "addspell": {
                            "name": "Searing Smite",
                            "spelllevel": "1"
                        }
                    },
                    {
                        "addspell": {
                            "name": "Shield",
                            "spelllevel": "1"
                        }
                    },
                    {
                        "addarmorproficiencies": [
                            "Heavy Armor"
                        ]
                    }
                ],
                "2": [
                    {
                        "featuretext": "Use channel divinity during a short rest to craft an item at least part metal, worth no more than 100 gp, and expending an equal value of raw materials. It can be an exact duplicate if you possess the item being duplicated during the ritual."
                    }
                ],
                "3": [
                    {
                        "addspell": {
                            "name": "Heat Metal",
                            "spelllevel": "2"
                        }
                    },
                    {
                        "addspell": {
                            "name": "Magic Weapon",
                            "spelllevel": "2"
                        }
                    }
                ],
                "5": [
                    {
                        "addspell": {
                            "name": "Elemental Weapon",
                            "spelllevel": "3"
                        }
                    },
                    {
                        "addspell": {
                            "name": "Protection from Energy",
                            "spelllevel": "3"
                        }
                    }
                ],
                "6": [
                    {
                        "featuretext": "AC increases by 1 in heavy or medium armor, resistance to fire damage, and hitting a construct deals additional force damage equal to cleric level."
                    },
                    {
                        "modifyarmorclassbonus": "1"
                    }
                ],
                "7": [
                    {
                        "addspell": {
                            "name": "Fabricate",
                            "spelllevel": "4"
                        }
                    },
                    {
                        "addspell": {
                            "name": "Wall of Fire",
                            "spelllevel": "4"
                        }
                    }
                ],
                "8": [
                    {
                        "featuretext": "1\/Turn do an extra 1d8 fire damage with a weapon attack, this becomes 2d8 at 14th level."
                    }
                ],
                "9": [
                    {
                        "addspell": {
                            "name": "Animate Objects",
                            "spelllevel": "5"
                        }
                    },
                    {
                        "addspell": {
                            "name": "Creation",
                            "spelllevel": "5"
                        }
                    }
                ],
                "17": [
                    {
                        "featuretext": "Immune to fire damage and resistant to non-magical bludgeoning, piercing, and slashing."
                    }
                ]
            }
        },
        {
            "name": "Grave",
            "displayname": "Grave",
            "class": "Cleric",
            "previewtext": "Gods who guard the boundry between life and death",
            "level": {
                "1": [
                    {
                        "featuretext": "When using a spell to heal a creature at 0 hp, treat any dice rolled as the maximum value."
                    },
                    {
                        "addspell": {
                            "name": "Bane",
                            "spelllevel": "1"
                        }
                    },
                    {
                        "addspell": {
                            "name": "False Life",
                            "spelllevel": "1"
                        }
                    },
                    {
                        "featuretext": "Can cast Spare the Dying as a bonus action."
                    },
                    {
                        "addarmorproficiencies": [
                            "Heavy Armor"
                        ]
                    }
                ],
                "2": [
                    {
                        "featuretext": "Use channel divinity to touch a creature, the next time it takes damage from you or an ally it is vulnerable to the damage type or types. If it is resistant or immune, it insteads loses that quality."
                    }
                ],
                "3": [
                    {
                        "addspell": {
                            "name": "Gentle Repose",
                            "spelllevel": "2"
                        }
                    },
                    {
                        "addspell": {
                            "name": "Ray of Enfeeblement",
                            "spelllevel": "2"
                        }
                    }
                ],
                "5": [
                    {
                        "addspell": {
                            "name": "Revifify",
                            "spelllevel": "3"
                        }
                    },
                    {
                        "addspell": {
                            "name": "Vampiric Touch",
                            "spelllevel": "3"
                        }
                    }
                ],
                "6": [
                    {
                        "featuretext": "When you or an ally within 30' suffer a critical hit, you can use a reaction to turn it into a normal hit. 1\/rest."
                    }
                ],
                "7": [
                    {
                        "addspell": {
                            "name": "Blight",
                            "spelllevel": "4"
                        }
                    },
                    {
                        "addspell": {
                            "name": "Death Ward",
                            "spelllevel": "4"
                        }
                    }
                ],
                "8": [
                    {
                        "featuretext": "1\/Turn do an extra 1d8 necrotic damage with a weapon attack, this becomes 2d8 at 14th level."
                    }
                ],
                "9": [
                    {
                        "addspell": {
                            "name": "Antilife Shell",
                            "spelllevel": "5"
                        }
                    },
                    {
                        "addspell": {
                            "name": "Raise Dead",
                            "spelllevel": "5"
                        }
                    }
                ],
                "17": [
                    {
                        "featuretext": "When an enemy you can see within 30' dies, you or an ally within 30' regain hit points equal to its number of hit dice. Usable 1\/round so long as you aren't incapacitated"
                    }
                ]
            }
        },
        {
            "name": "Protection",
            "displayname": "Protection",
            "class": "Cleric",
            "previewtext": "Gods who command the strong to protect the weak",
            "level": {
                "1": [
                    {
                        "featuretext": "As a reaction give disadvantage on an attack against an ally within 5'."
                    },
                    {
                        "addspell": {
                            "name": "Compelled Duel",
                            "spelllevel": "1"
                        }
                    },
                    {
                        "addspell": {
                            "name": "Protection from Evil and Good",
                            "spelllevel": "1"
                        }
                    },
                    {
                        "addarmorproficiencies": [
                            "Heavy Armor"
                        ]
                    }
                ],
                "2": [
                    {
                        "featuretext": "Use channel divinity to imbue an ally within 30' with radiant energy. If it is hit by an attack within the next minute the attacker takes 2d10+cleric level radiant damage."
                    }
                ],
                "3": [
                    {
                        "addspell": {
                            "name": "Aid",
                            "spelllevel": "2"
                        }
                    },
                    {
                        "addspell": {
                            "name": "Protection from Poison",
                            "spelllevel": "2"
                        }
                    }
                ],
                "5": [
                    {
                        "addspell": {
                            "name": "Protection from Energy",
                            "spelllevel": "3"
                        }
                    },
                    {
                        "addspell": {
                            "name": "Poison",
                            "spelllevel": "3"
                        }
                    }
                ],
                "6": [
                    {
                        "featuretext": "1\/Turn do an extra 1d8 radiant damage with a weapon attack, this becomes 2d8 at 14th level."
                    }
                ],
                "7": [
                    {
                        "addspell": {
                            "name": "Guardian of Faith",
                            "spelllevel": "4"
                        }
                    },
                    {
                        "addspell": {
                            "name": "Otiluke's Resilient Sphere",
                            "spelllevel": "4"
                        }
                    }
                ],
                "8": [
                    {
                        "featuretext": "When you cast a spell with a spell slot that restores hit points to a creature other than yourself, you regain hitpoints equal to 2+spell level"
                    }
                ],
                "9": [
                    {
                        "addspell": {
                            "name": "Antilife Shell",
                            "spelllevel": "5"
                        }
                    },
                    {
                        "addspell": {
                            "name": "Wall of Force",
                            "spelllevel": "5"
                        }
                    }
                ],
                "17": [
                    {
                        "featuretext": "At the end of each rest, you gain resistence to two of the following: bludgeoning, piercing, slashing, radiant, and necrotic. You can transfer the resistance to a creature you touch as an action. This ends when you take a rest, or if you choose to do so as a bonus reaction."
                    }
                ]
            }
        },
        {
            "name": "Circle of Dreams",
            "displayname": "Circle of Dreams",
            "class": "Druid",
            "previewtext": "Channel restoring energies from the Feywild",
            "spellcastingability": "wisdom",
            "level": {
                "2": [
                    {
                        "setresource": {
                            "name": "Balm of the Summer Court",
                            "diesize": "6",
                            "amount": {
                                "classlevel": "Druid"
                            },
                            "spendable": "true",
                            "displayname": "Fey Energy",
                            "reset": "longrest"
                        }
                    },
                    {
                        "featuretext": "You have access to energy from the Feywild, you can access it as a bonus action, healing any ally you can see for the total value of dice rolled (not more than half your druid level). In addition for each die used, they gain 1 temporary hit point and a 5' increase in speed. The speed increase lasts for 1 minute. Recharges on a long rest."
                    },
                    {
                        "showresource": "Fey Energy"
                    }
                ],
                "6": [
                    {
                        "featuretext": "During any short or long rest you can protect your campsite, creating a 30' radius in which you and your allies recieve a +5 to Wisdom (Perception) checks to spot creatures, and light from open fires does not leave the area."
                    }
                ],
                "10": [
                    {
                        "featuretext": "On your turn you can teleport to a spot you can see within 30'. This still counts against your movement on that turn. You can also teleport a willing ally by using your action to touch them on your turn. Once either option has been used you can not do so again for 1d4 turns."
                    }
                ],
                "14": [
                    {
                        "featuretext": "When you cast a spell using a spell slot that restores hit points to you or an ally, you may simultaneously target them with dispel magic, using a spell slot of the same level. If the spell heald multiple creatures, you may cast multiple dispel magics, however you only have 3 uses per long rest."
                    }
                ]
            }
        },
        {
            "name": "Circle of the Shepherd",
            "displayname": "Circle of the Shepherd",
            "class": "Druid",
            "previewtext": "Call forth powerful animal spirits",
            "spellcastingability": "wisdom",
            "level": {
                "2": [
                    {
                        "featuretext": "As a bonus action you can call a Medium spirit and bind it for 1 minute to an unoccupied space you can see within 60'. It creates a 30' aura, with different abilities based on what spirit is bound. Usable 1\/rest."
                    },
                    {
                        "featuretextwithbullet": "Bear: You and your allies within the aura gain (5+druid level) temporary hit points, and have advantage on strength checks and saving throws while in the aura."
                    },
                    {
                        "featuretextwithbullet": "Hawk: You and your allies within the aura gain advantage on ranged attacks against creatures within the aura."
                    },
                    {
                        "featuretextwithbullet": "Wolf: You and your allies within the aura gain advantage on ability checks to detect creatures within the aura, and whenever you cast a spell with a spell slot that restores a creature's hit points, you and each of your allies within the aura gain hit points equal to your druid level."
                    },
                    {
                        "featuretext": "You can communicate with beasts."
                    }
                ],
                "6": [
                    {
                        "featuretext": "Any beast summoned or created by your spells gains 2 hit points for each of its hit die, and its natural weapons are conscidered magical for determining resistance and immunity to non-magical damage."
                    }
                ],
                "10": [
                    {
                        "featuretext": "Whenever you finish a long rest you gain the benefits of Death Ward for 24 hrs."
                    }
                ],
                "14": [
                    {
                        "featuretext": "If you are reduced to 0 hp or incapacitated against your will, you immediately gain the benefits of a 9th level Conjure Animals. Select 4 beasts of CR 2 or lower, they appear within 20' of you, and if you issue no commands they protect you and attack your foes. 1\/long rest."
                    }
                ]
            }
        },
        {
            "name": "Circle of Twilight",
            "displayname": "Circle of Twilight",
            "class": "Druid",
            "previewtext": "Preserve the order of nature by exterminating undead",
            "spellcastingability": "constitution",
            "level": {
                "2": [
                    {
                        "setresource": {
                            "name": "Harvest's Scythe",
                            "diesize": "10",
                            "amount": {
                                "classlevel": "Druid"
                            },
                            "spendable": "true",
                            "displayname": "Harvest's Scythe",
                            "reset": "longrest"
                        }
                    },
                    {
                        "featuretext": "You have access to energy tied to death, when you roll damage for a spell you can add to it from this pool, up to half your druid level. They cause necrotic damage, and if you kill a creature this way, you or an ally you can see within 30' regain 2 hp for each die used, 5 if the creature undead. Recharges on a long rest."
                    }
                ],
                "6": [
                    {
                        "featuretext": "You can cast Speak with Dead without material components, and can converse with the target even if you do not share a language, or it is not intelligent enough to have one."
                    }
                ],
                "10": [
                    {
                        "featuretext": "You have resistence to radiant and necrotic damage, and so long as you aren't incapacitated, any ally within 30' has advantage on death saving throws."
                    }
                ],
                "14": [
                    {
                        "featuretext": "Can cast Etherealness 1\/rest"
                    }
                ]
            }
        },
        {
            "name": "Arcane Archer",
            "displayname": "Arcane Archer",
            "class": "Fighter",
            "previewtext": "Blend magic and archery",
            "level": {
                "3": [
                    {
                        "featuretext": "As a bonus action, create a magical arrow which lasts until the end of the turn, or until it hits or misses a target. It does additional force damage in addition to magical damage appropriate to the weapon it was fired from. You may also use an Arcane Shot on this arrow."
                    },
                    {
                        "featuretext": "Arcane Shot:"
                    },
                    {
                        "skillmenu": {
                            "skills": [
                                "Arcana",
                                "Athletics",
                                "Nature",
                                "Perception",
                                "Stealth",
                                "Survival"
                            ],
                            "selections": "2",
                            "title": "Archer's Lore"
                        }
                    },
                    {
                        "sharedclassfeaturemenu": {
                            "name": "Arcane Shots"
                        }
                    },
                    {
                        "setresource": {
                            "name": "Arcane Arrow",
                            "diesize": "6",
                            "amount": "2",
                            "displayname": "Arcane Arrow"
                        }
                    },
                    {
                        "showresource": "Arcane Arrow"
                    }
                ],
                "7": [
                    {
                        "featuretext": "As an action, you can conjure 20 non-magical arrows in your hand, quiver, or similar. They last for 10 minutes."
                    },
                    {
                        "sharedclassfeaturemenu": {
                            "name": "Arcane Shots",
                            "selections": "1"
                        }
                    }
                ],
                "10": [
                    {
                        "sharedclassfeaturemenu": {
                            "name": "Arcane Shots",
                            "selections": "1"
                        }
                    }
                ],
                "15": [
                    {
                        "sharedclassfeaturemenu": {
                            "name": "Arcane Shots",
                            "selections": "1"
                        }
                    },
                    {
                        "featuretext": "1 minute after using your last remaining Arcane Shot, you regain one use."
                    }
                ],
                "18": [
                    {
                        "sharedclassfeaturemenu": {
                            "name": "Arcane Shots",
                            "selections": "1"
                        }
                    },
                    {
                        "setresource": {
                            "name": "Arcane Arrow",
                            "diesize": "6",
                            "amount": "4",
                            "displayname": "Arcane Arrow"
                        }
                    }
                ]
            }
        },
        {
            "name": "Knight",
            "displayname": "Knight",
            "class": "Fighter",
            "previewtext": "Excel in mounted combat and defending your allies",
            "level": {
                "3": [
                    {
                        "featuretext": "Mounting\/dismounting costs only 5' movement, you have advantage on saving throws to remain mounted, and if you fail, always land on your feet unless incapacitated or fall more than 10'."
                    },
                    {
                        "featuretext": "When you hit a creature with a melee weapon attack. A marked creature has disadvantage on attacks against creatures who have not marked it. If it is within 5' of you when it attacks a creature who has not marked it, or attempts to move, you may make an attack against it, using your reaction, at advantage, doing extra damage equal to your fighter level. You may make this attack even if you have already used your reaction this round, but not if you have done so this turn. The attack is limited to 3\/rest."
                    }
                ],
                "7": [
                    {
                        "menu": {
                            "name": "Noble Calvary",
                            "title": "Noble Calvary",
                            "selections": "1",
                            "entries": [
                                {
                                    "name": "Noble Calvary: Skills",
                                    "displayname": "Noble Calvary: Skills",
                                    "effects": [
                                        {
                                            "skillmenu": {
                                                "skills": [
                                                    "Animal Handling",
                                                    "History",
                                                    "Insight",
                                                    "Persuasion",
                                                    "Religion"
                                                ],
                                                "selections": "2"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "name": "Noble Calvary: Language",
                                    "displayname": "Noble Calvary: Language",
                                    "effects": [
                                        {
                                            "addlanguagesknown": [
                                                "One Extra Language"
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                ],
                "15": [
                    {
                        "featuretext": "You can give up advantage on an attack to make an extra attack with your bonus action."
                    }
                ],
                "18": [
                    {
                        "featuretext": "When you take  damage that would reduce you to 0 hp, you can take a bonus turn, interrupting the current turn order, and before the damage occurs. 1\/long rest."
                    }
                ]
            }
        },
        {
            "name": "Sharpshooter",
            "displayname": "Sharpshooter",
            "class": "Fighter",
            "previewtext": "Train to master the bow",
            "spellcastingability": "dexterity",
            "level": {
                "3": [
                    {
                        "featuretext": "As a bonus action ignore 1\/2 & 3\/4 cover, and do damage equal to 1\/2 fighter level when using a ranged weapon. Usable 3\/rest."
                    }
                ],
                "7": [
                    {
                        "featuretext": "Can Search as a bonus action"
                    },
                    {
                        "skillmenu": {
                            "skills": [
                                "Perception",
                                "Investigation",
                                "Survival"
                            ],
                            "selections": "1"
                        }
                    }
                ],
                "10": [
                    {
                        "featuretext": "Attacking with a ranged weapon in melee no longer gives disadvantage"
                    },
                    {
                        "featuretext": "A creature hit by your ranged weapon attack in melee cannot take reactions this turn."
                    }
                ],
                "15": [
                    {
                        "featuretext": "You can give up advantage on an attack to make a bonus action attack."
                    }
                ],
                "18": [
                    {
                        "featuretext": "If you attack on your first turn in combat you can make an extra attack"
                    }
                ]
            }
        },
        {
            "name": "Samurai",
            "displayname": "Samurai",
            "class": "Fighter",
            "previewtext": "Channel phenomenal willpower and adherence to a strict code",
            "spellcastingability": "dexterity",
            "level": {
                "3": [
                    {
                        "setresource": {
                            "name": "Fighting Spirit",
                            "amount": "3",
                            "displayname": "Spirit",
                            "reset": "shortrest"
                        }
                    },
                    {
                        "featuretext": "Fighting Spirit: As a bonus action use your fighting spirit to gain several benefits until the end of your next turn. (3\/rest)"
                    },
                    {
                        "featuretextwithbullet": "Gain resistance to bludgeoning, piercing, and slashing damage."
                    },
                    {
                        "featuretextwithbullet": "You have advantage on all attack rolls."
                    }
                ],
                "7": [
                    {
                        "featuretext": "You can add your Wisdom modifier to any Charisma check to please someone of a higher station."
                    },
                    {
                        "menu": {
                            "name": "Elegant Courtier",
                            "selections": "1",
                            "entries": [
                                {
                                    "name": "History",
                                    "displayname": "History",
                                    "effects": [
                                        {
                                            "setskillproficiency": {
                                                "history": "true"
                                            }
                                        },
                                        {
                                            "setskillproficiency": {
                                                "insight": "true"
                                            }
                                        },
                                        {
                                            "setskillproficiency": {
                                                "persuasion": "true"
                                            }
                                        },
                                        {
                                            "addlanguagesknown": [
                                                "One Language"
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    },
                    {
                        "ifthenelse": {
                            "if": [
                                {
                                    "saveproficiency": "wisdom"
                                }
                            ],
                            "then": [
                                {
                                    "menu": {
                                        "name": "Unbreakable Will",
                                        "selections": "1",
                                        "entries": [
                                            {
                                                "name": "Intelligence",
                                                "displayname": "Intelligence",
                                                "effects": [
                                                    {
                                                        "setsaveproficiency": {
                                                            "intelligence": "true"
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                "name": "Charisma",
                                                "displayname": "Charisma",
                                                "effects": [
                                                    {
                                                        "setsaveproficiency": {
                                                            "charisma": "true"
                                                        }
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                }
                            ],
                            "else": [
                                {
                                    "setsaveproficiency": {
                                        "wisdom": "true"
                                    }
                                }
                            ]
                        }
                    }
                ],
                "10": [
                    {
                        "featuretext": "Attacking with a ranged weapon in melee no longer gives disadvantage"
                    },
                    {
                        "featuretext": "A creature hit by your ranged weapon attack in melee cannot take reactions this turn."
                    }
                ],
                "15": [
                    {
                        "featuretext": "You can give up advantage on an attack to make a bonus action attack."
                    }
                ],
                "18": [
                    {
                        "featuretext": "When you take damage that would reduce you to 0 hp, you gain an extra turn, interrupting normal initiative. You take the damage at the end of this turn, but can take actions that stop you from dropping to 0. (1\/long rest)"
                    }
                ]
            }
        },
        {
            "name": "Drunken Master",
            "displayname": "Drunken Master",
            "class": "Monk",
            "previewtext": "Unpredictable and wily",
            "level": {
                "3": [
                    {
                        "featuretext": "When you use Flurry of Blows you gain the benefits of Disengage, and increase movement speed by 10' until the end of the turn."
                    },
                    {
                        "setskillproficiency": {
                            "performance": "true"
                        }
                    }
                ],
                "6": [
                    {
                        "featuretext": "As a reaction when an enemy misses you with a melee attack, you can force it to reroll an attack against another creature within 5' of you. 1\/rest"
                    }
                ],
                "11": [
                    {
                        "featuretext": "You can spend 1 ki point to grant yourself advantage on a saving throw. You must declare before rolling."
                    }
                ],
                "17": [
                    {
                        "featuretextwithbullet": "When you use Flurry of Blows you can make 3 additional attacks if each attack targets a different creature."
                    }
                ]
            }
        },
        {
            "name": "Kensei",
            "displayname": "Way of the Kensei",
            "class": "Monk",
            "previewtext": "Weapon masters",
            "level": {
                "3": [
                    {
                        "addweaponproficiencies": [
                            "Three Martial Weapons"
                        ]
                    },
                    {
                        "useunarmedstrikedamageforclassweapons": "Kensei Monk"
                    },
                    {
                        "meleeclassweaponscanusedexterity": "Kensei Monk"
                    },
                    {
                        "featuretextwithbullet": "After hitting a target with a Kensei Weapon, you may use a bonus action to do 1d4 bludgeoning damage."
                    }
                ],
                "6": [
                    {
                        "featuretextwithbullet": "Kensei weapons count as magical for the purposes of overcoming immunity and resistance."
                    },
                    {
                        "featuretextwithbullet": "Use a bonus action to apply twice your proficiency bonus to an attack roll against a target you can see within 30'. Short or long rest to recover."
                    }
                ],
                "11": [
                    {
                        "featuretext": "As a bonus action use up to 3 ki points and gain a bonus to attack and damage rolls with a weapon equal to the number of ki points used. Lasts 1 minute."
                    }
                ],
                "17": [
                    {
                        "featuretextwithbullet": "Once per turn, you may reroll one weapon attack that misses."
                    }
                ]
            }
        },
        {
            "name": "Way of Tranquility",
            "displayname": "Way of Tranquility",
            "class": "Monk",
            "previewtext": "Pacifists who focus on diplomacy over combat",
            "level": {
                "3": [
                    {
                        "featuretext": "You can cast Sanctuary on yourself without material components, lasting for 8 hours. If a creature succeeds on the save they are immune to the effects for 1 hour. 1\/minute."
                    },
                    {
                        "featuretext": "You gain access to a pool of healing energy. As an action you can use these to restore hitpoints (1:1) or cure a disease or remove poison (5:1). This has no effect on undead or constructs. When you use Flurry of Blows you can replace one of your attacks with this ability. Recharges on long rests."
                    },
                    {
                        "setresource": {
                            "name": "Healing Hands",
                            "amount": {
                                "multiply": [
                                    "10",
                                    {
                                        "classlevel": "Monk"
                                    }
                                ]
                            },
                            "displayname": "Healing Hands"
                        }
                    }
                ],
                "6": [
                    {
                        "featuretext": "Whenever you make a Charisma check for peace in good faith, you have advantage on the check."
                    }
                ],
                "11": [
                    {
                        "featuretext": "As an action touch a creature, it must make a Wisdom saving throw, automatically succeeding if its missing any of its hit points. If it fails it cannot attack, cast spells that do damage or force a target to make a saving throw. This ends after 1 minute, or if it or any of its allies are attacked, damaged, or forced to make a saving throw."
                    }
                ],
                "17": [
                    {
                        "featuretextwithbullet": "If you see a creature reduce another to 0 hit points, you can use your reaction to do extra damage equal to your monk level on all attacks until the end of your next turn."
                    }
                ]
            }
        },
        {
            "name": "Oath of Conquest",
            "displayname": "Oath of Conquest",
            "class": "Paladin",
            "previewtext": "Tyranical rulers and their followers",
            "level": {
                "3": [
                    {
                        "addspell": {
                            "name": "Armor of Agathys",
                            "spelllevel": "1"
                        }
                    },
                    {
                        "addspell": {
                            "name": "Command",
                            "spelllevel": "1"
                        }
                    },
                    {
                        "featuretext": "You can use Channel Divinity when you make an attack to force a target to make a Wisdom saving throw. If it fails it is frightened of you, repeating the saving throw on its turn until it succeeds or 1 minute passes. "
                    },
                    {
                        "featuretext": "You can use Channel Divinity to gain +10 to an attack you have rolled."
                    }
                ],
                "5": [
                    {
                        "addspell": {
                            "name": "Hold Person",
                            "spelllevel": "2"
                        }
                    },
                    {
                        "addspell": {
                            "name": "Spiritual Weapon",
                            "spelllevel": "2"
                        }
                    }
                ],
                "7": [
                    {
                        "featuretext": "You create a 10' aura in which all enemies have disadvantage on saving throws against being frightened."
                    }
                ],
                "9": [
                    {
                        "addspell": {
                            "name": "Bestow Curse",
                            "spelllevel": "3"
                        }
                    },
                    {
                        "addspell": {
                            "name": "Fear",
                            "spelllevel": "3"
                        }
                    }
                ],
                "13": [
                    {
                        "addspell": {
                            "name": "Blight",
                            "spelllevel": "4"
                        }
                    },
                    {
                        "addspell": {
                            "name": "Dominate Beast",
                            "spelllevel": "4"
                        }
                    }
                ],
                "15": [
                    {
                        "featuretext": "You are immune to charm."
                    }
                ],
                "17": [
                    {
                        "addspell": {
                            "name": "Dominate Person",
                            "spelllevel": "5"
                        }
                    },
                    {
                        "addspell": {
                            "name": "Insect Plague",
                            "spelllevel": "5"
                        }
                    }
                ],
                "20": [
                    {
                        "featuretext": "As an action you become an Avatar of Conquest for 1 minute. 1\/long rest."
                    },
                    {
                        "featuretextwithbullet": "You have resistance to all damage"
                    },
                    {
                        "featuretextwithbullet": "When you take the attack action, you may make an additional attack."
                    },
                    {
                        "featuretextwithbullet": "You score a critical hit on 19 or 20."
                    }
                ]
            }
        },
        {
            "name": "Oath of Redemption",
            "displayname": "Oath of Redemption",
            "class": "Paladin",
            "previewtext": "Warriors who strive for peace and reconciliation",
            "level": {
                "3": [
                    {
                        "addspell": {
                            "name": "Shield",
                            "spelllevel": "1"
                        }
                    },
                    {
                        "addspell": {
                            "name": "Sleep",
                            "spelllevel": "1"
                        }
                    },
                    {
                        "featuretext": "You can use Channel Divinity to give yourself +5 Charisma (Persuasion) checks for the next minute."
                    },
                    {
                        "featuretext": "You can use Channel Divinity as a reaction when an enemy within 10' makes an attack against a creature other than you to force it to make a Wisdom saving throw, taking radiant damage equal to the damage it caused, or half as much on a save."
                    },
                    {
                        "setarmorclass": {
                            "add": [
                                "16",
                                "dexteritymodifier"
                            ]
                        }
                    },
                    {
                        "featuretext": "Your unarmored defense is (16+DEX)"
                    },
                    {
                        "featuretext": "While using simple bludgeoning weapons, if you reduce a creature to 0 hp and do not kill it, instead of falling unconscious, it is charmed by you for 1 minute. It does not take actions unless you tell it to, and it cannot make attacks, force a creature to make saving throws, or cause damage to itself or others. This ends if you or your allies attacks it, forces it to make a saving throw, or cause damage to it. If this effect ends with it still at 0 hp, it falls unconscious."
                    }
                ],
                "5": [
                    {
                        "addspell": {
                            "name": "Hold Person",
                            "spelllevel": "2"
                        }
                    },
                    {
                        "addspell": {
                            "name": "Ray of Enfeeblement",
                            "spelllevel": "2"
                        }
                    }
                ],
                "7": [
                    {
                        "featuretext": "As a reaction, when an ally within 10' takes damage you can transfer the damage, but not effects, to yourself."
                    }
                ],
                "9": [
                    {
                        "addspell": {
                            "name": "Counterspell",
                            "spelllevel": "3"
                        }
                    },
                    {
                        "addspell": {
                            "name": "Hypnotic Pattern",
                            "spelllevel": "3"
                        }
                    }
                ],
                "13": [
                    {
                        "addspell": {
                            "name": "Otiluke's Resilient Sphere",
                            "spelllevel": "4"
                        }
                    },
                    {
                        "addspell": {
                            "name": "Stoneskin",
                            "spelllevel": "4"
                        }
                    }
                ],
                "15": [
                    {
                        "featuretext": "You regain 1d6+(paladin level\/2) hp at the end of your turn if you have less than half your hit points and aren't incapacitated."
                    }
                ],
                "17": [
                    {
                        "addspell": {
                            "name": "Hold Monster",
                            "spelllevel": "5"
                        }
                    },
                    {
                        "addspell": {
                            "name": "Wall of Force",
                            "spelllevel": "5"
                        }
                    }
                ],
                "20": [
                    {
                        "featuretext": "You become an Avatar of Redemption, gaining benefits against any creature you have not attacked, forced to make a saving throw, or caused damage to. 1\/long rest"
                    },
                    {
                        "featuretextwithbullet": "You have resistence to damage from other creatures"
                    },
                    {
                        "featuretextwithbullet": "When a creature damages you it takes damageequal to half what it caused"
                    },
                    {
                        "featuretextwithbullet": "If you have advantage on an attack roll, you do extra damage equal to your paladin level."
                    }
                ]
            }
        },
        {
            "name": "Oath of Treachery",
            "displayname": "Oath of Treachery",
            "class": "Paladin",
            "previewtext": "Blackguards who refuse all loyalty",
            "level": {
                "3": [
                    {
                        "addspell": {
                            "name": "Charm Person",
                            "spelllevel": "1"
                        }
                    },
                    {
                        "addspell": {
                            "name": "Expeditious Retreat",
                            "spelllevel": "1"
                        }
                    },
                    {
                        "featuretext": "You can use Channel Divinity to make an illusory duplicate of yourself within 30', lasting 1 minute or until you lose concentration. The illusion is visualy perfect, but does not occupy its space, or respond when attacked or damaged. You can use your bonus action to move it up to 30', so long as it stays within 120'. You can cast spells from its location, but relying on your senses. If both it and you are within 5' of a creature, you have advantage on attacks against the creature."
                    },
                    {
                        "featuretext": "You can use Channel Divinity to poison a weapon or piece of ammunition for 1 attack or 1 minute. The poison does 2d10 damage, or 20 if you have advantage."
                    }
                ],
                "5": [
                    {
                        "addspell": {
                            "name": "Invisibilty",
                            "spelllevel": "2"
                        }
                    },
                    {
                        "addspell": {
                            "name": "Mirror Image",
                            "spelllevel": "2"
                        }
                    }
                ],
                "7": [
                    {
                        "featuretext": "You have advantage on any attack against a creature with one of its allies within 5' of it."
                    },
                    {
                        "featuretext": "If a creature within 5' misses you with a melee attack, you can use your reaction to force it to reroll the attack against a creature of your choice also within 5' of it. This has no effect on creatures immune to charm. 3\/rest."
                    }
                ],
                "9": [
                    {
                        "addspell": {
                            "name": "Gaseous Form",
                            "spelllevel": "3"
                        }
                    },
                    {
                        "addspell": {
                            "name": "Haste",
                            "spelllevel": "3"
                        }
                    }
                ],
                "13": [
                    {
                        "addspell": {
                            "name": "Confusion",
                            "spelllevel": "4"
                        }
                    },
                    {
                        "addspell": {
                            "name": "Greater Invisibility",
                            "spelllevel": "4"
                        }
                    }
                ],
                "15": [
                    {
                        "featuretext": "After taking damage you can use your reaction to turn invisible and teleport up to 60' to a spot you can see. You remain invisible until the end of your next turn, or until you make an attack, cast a spell, or force a creature to make a saving throw."
                    }
                ],
                "17": [
                    {
                        "addspell": {
                            "name": "Dominate Person",
                            "spelllevel": "5"
                        }
                    },
                    {
                        "addspell": {
                            "name": "Passwall",
                            "spelllevel": "5"
                        }
                    }
                ],
                "20": [
                    {
                        "featuretext": "As an action you become an Avatar of Deceit for 1 minute. 1\/long rest."
                    },
                    {
                        "featuretextwithbullet": "You are invisible"
                    },
                    {
                        "featuretextwithbullet": "When you take damage from a creature it must make a Wisdom saving throw (automatically saving if immune to charm). If it fails, you control its next action, unless you are incapacitated at that time."
                    },
                    {
                        "featuretextwithbullet": "If you have advantage on an attack roll, you do extra damage equal to your paladin level."
                    }
                ]
            }
        },
        {
            "name": "Beast Conclave",
            "displayname": "Beast Conclave",
            "class": "Revised Ranger",
            "previewtext": "Bond with a beast, then further strengthen that bond through magic.",
            "level": {
                "3": [
                    {
                        "featuretextwithbullet": "Animal Companion: With 8 hours of work and 50GP worth of rare herbs and fine food, you call forth a faithful animal companion. At the end of the 8 hours, your animal companion gains the benefits of the Companion's Bond ability.  You can only have one animal companion at a time.  If your companion is ever slain, you can call forth it's spirit with 8 hours of work and 25GP worth of rare herbs and fine food, and use your magic to create a new body for it.  If you use this ability while you have a current companion, the current companion leaves you and is replaced the restored companion."
                    },
                    {
                        "menu": {
                            "name": "Animal Companion",
                            "title": "Animal Companion",
                            "selections": "1",
                            "replace": "1",
                            "advancedfeaturetext": {
                                "useentrypreviewtext": "true",
                                "usebullet": "true",
                                "prefixwithentryname": "true",
                                "prefixseperator": ": "
                            },
                            "entries": [
                                {
                                    "name": "Ape",
                                    "displayname": "Animal Companion - Ape",
                                    "previewtext": "Uses Fist and Rock attacks, +5 Athletics, +3 Perception"
                                },
                                {
                                    "name": "Black Bear",
                                    "displayname": "Animal Companion - Black Bear",
                                    "previewtext": "Uses Bite and Claw attacks, Keen Smell, +3 Perception"
                                },
                                {
                                    "name": "Boar",
                                    "displayname": "Animal Companion - Boar",
                                    "previewtext": "Uses Tusk attacks, Charge, Relentless (short\/long rest)"
                                },
                                {
                                    "name": "Giant Badger",
                                    "displayname": "Animal Companion - Giant Badger",
                                    "previewtext": "Uses Bite and Claw attacks, Keen Smell, Darkvision 30ft"
                                },
                                {
                                    "name": "Panther",
                                    "displayname": "Animal Companion - Panther",
                                    "previewtext": "Uses Bite and Claw attacks, Pounce, Keen Smell, +4 Perception, +6 Stealth"
                                },
                                {
                                    "name": "Mule",
                                    "displayname": "Animal Companion - Mule",
                                    "previewtext": "Uses Hooves to attack, Beast of Burden, Sure-Footed"
                                },
                                {
                                    "name": "Giant Weasel",
                                    "displayname": "Animal Companion - Giant Weasel",
                                    "previewtext": "Uses Bite Attacks, Keen Hearing and Smell, +3 Perception, +5 Stealth"
                                },
                                {
                                    "name": "Wolf",
                                    "displayname": "Animal Companion - Wolf",
                                    "previewtext": "Uses Bite attacks, Keen Hearing and Smell, Pack Tactics, +3 Perception, +4 Stealth"
                                }
                            ],
                            "effects": [
                                {
                                    "featuretextwithbullet": "Companion's Bond:\n   - Your Companion loses it's Multiattack ability if it has one.\n   - It obeys your command as best as it can. It rolls for its own Initiative, but you determine its actions, decisions, and attitudes. If you are incapacitated or absent, it acts on its own.\n   - When using Natural Explorer, your companion can move with you stealthily a normal pace.\n   - It uses your proficiency bonus rather than its own. In addition to normal proficiency uses, your Companion's adds it's proficiency bonus to AC and Damage rolls.\n   - It gains proficiency in two skills your choice.\n   - It becomes proficient with all saving throws.\n   - For each level you gain after 3rd, your companion gains an additional hit die and increases its hit points.\n   - When you gain an Ability Score Improvement, your Companion's abilities improve using the same rules.\n- Your Companion gains the benefits of your Favored Enemy and Greater Favored Enemy features.\n   - It shares your alignment, and has a personality trait and flaw you choose. It shares your alignment, and it's bond is always \"The Ranger who travels with me is a beloved companion for whom I would gladly give my life.\""
                                }
                            ]
                        }
                    }
                ],
                "5": [
                    {
                        "featuretextwithbullet": "Coordinated Attack: When you use the Attack action on your turn, if your Companion can see you, it can use its Reaction to make a melee attack."
                    }
                ],
                "7": [
                    {
                        "featuretextwithbullet": "Beast's Defense: While your Companion can see you, it has Advantage on all Saving Throws."
                    }
                ],
                "11": [
                    {
                        "featuretextwithbullet": "Storm of Claws and Fangs: Your Companion can use its Action to make a melee attack against each creature of its choice within 5 feet of it, with a separate attack roll for each target."
                    }
                ],
                "15": [
                    {
                        "featuretextwithbullet": "Superior Beast's Defense: Whenever an attacker that your companion can see hits it with an attack, it can use its Reaction to halve the attack's damage."
                    }
                ]
            }
        },
        {
            "name": "Deep Stalker Conclave",
            "displayname": "Deep Stalker Conclave",
            "class": "Revised Ranger",
            "previewtext": "Strives to uncover and defeat Underdark threats before they can reach the surface.",
            "level": {
                "3": [
                    {
                        "featuretextwithbullet": "Underdark Scout:\n   - On your first turn during combat, you gain a +10 bonus to your speed, and if you use the Attack action, you can make one additional attack.\n   - You are adept at evading creatures that rely on Darkvision.  Such creatures gain no benefit when attempting to detect you in dark and dim conditions. Additionally, when the DM determines if you can hide from a creature, that creature gains no benefit from its Darkvision."
                    },
                    {
                        "featuretextwithbullet": "Deep Stalker Magic:\n- You gain Darkvision out to 90 feet. If you already have Darkvision, you increase its range by 30 feet.\n- You gain access to Deep Stalker spells. They count as Ranger spells for you, but do not count against the number of Ranger spells you know."
                    },
                    {
                        "addspell": {
                            "name": "Disguise Self",
                            "spelllevel": "1"
                        }
                    }
                ],
                "5": [
                    {
                        "sharedclassfeature": {
                            "name": "Extra Attack",
                            "class": "Ranger"
                        }
                    },
                    {
                        "addspell": {
                            "name": "Rope Trick",
                            "spelllevel": "2"
                        }
                    }
                ],
                "7": [
                    {
                        "setsaveproficiency": {
                            "wisdom": "true"
                        }
                    },
                    {
                        "featuretextwithbullet": "Iron Mind: You gain proficiency in Wisdom Saving Throws."
                    },
                    {
                        "addspell": {
                            "name": "Glyph of Warding",
                            "spelllevel": "3"
                        }
                    }
                ],
                "11": [
                    {
                        "featuretextwithbullet": "Stalker's Flurry: Once on each of your turns, when you miss with an attack, you can make another attack."
                    },
                    {
                        "addspell": {
                            "name": "Greater Invisibility",
                            "spelllevel": "4"
                        }
                    }
                ],
                "15": [
                    {
                        "featuretextwithbullet": "Stalker's Dodge: Whenever a creature attacks you and does not have Advantage, you can use your reaction to impose Disadvantage on the creature's attack roll against you. You can use this feature before or after the attack roll is made, but it must be used before the outcome of the roll is determined."
                    },
                    {
                        "addspell": {
                            "name": "Seeming",
                            "spelllevel": "5"
                        }
                    }
                ]
            }
        },
        {
            "name": "Horizon Walker",
            "displayname": "Horizon Walker",
            "class": "Revised Ranger",
            "previewtext": "Guardian of the planes, fighting creatures from other dimensions",
            "level": {
                "3": [
                    {
                        "addspell": {
                            "name": "Protection from Evil and Good",
                            "spelllevel": "1"
                        }
                    },
                    {
                        "featuretext": "Use a bonus action to target a creature you can see within 30' of you. Until the end of your turn your attacks ignore its resistence, and your first attack deals an extra 1d6 force damage."
                    },
                    {
                        "featuretext": "Use an action to locate any planar portals within 1000' of you, in addition to where each portal leads. 1\/rest or 2nd level spell slot."
                    }
                ],
                "5": [
                    {
                        "sharedclassfeature": {
                            "name": "Extra Attack",
                            "class": "Ranger"
                        }
                    }
                ],
                "7": [
                    {
                        "featuretext": "As a bonus action you can cast Etherealness on yourself until the end of the turn. 1\/rest."
                    }
                ],
                "11": [
                    {
                        "featuretext": "When using the attack action, you can teleport up to 10' to a space you can see before each attack. If you attack two or more seperate creatures, you can make an extra attack against a third."
                    }
                ],
                "15": [
                    {
                        "featuretext": "As a reaction you can halve the damage taken by an attack."
                    }
                ]
            }
        },
        {
            "name": "Hunter Conclave",
            "displayname": "Hunter Conclave",
            "class": "Revised Ranger",
            "previewtext": "Master weapons and learn specialized fighting techniques for use against the most dire threats.",
            "level": {
                "3": [
                    {
                        "menu": {
                            "name": "Hunter's Prey",
                            "title": "Hunter's Prey",
                            "selections": "1",
                            "advancedfeaturetext": {
                                "useentrypreviewtext": "true",
                                "usebullet": "true",
                                "prefixwithentryname": "true",
                                "prefixseperator": ": "
                            },
                            "entries": [
                                {
                                    "name": "Colossus Slayer",
                                    "displayname": "Colossus Slayer",
                                    "previewtext": "When you hit a creature with a weapon attack, the creature takes an extra 1d8 damage if it is below it's hit point maximum. You can deal this damage once per turn."
                                },
                                {
                                    "name": "Giant Killer",
                                    "displayname": "Giant Killer",
                                    "previewtext": "When a Large or larger creature within 5 feet of you hits or misses you with an attack, you can use your Reaction to attack that creature immediately after it's attack, provided you can see the creature."
                                },
                                {
                                    "name": "Horde Breaker",
                                    "displayname": "Horde Breaker",
                                    "previewtext": "Once on each of your turns when you make a weapon attack, you can make another attack with the same weapon against a different creature that is within 5 feet of the original target and within range of your weapon."
                                }
                            ]
                        }
                    }
                ],
                "5": [
                    {
                        "sharedclassfeature": {
                            "name": "Extra Attack",
                            "class": "Ranger"
                        }
                    }
                ],
                "7": [
                    {
                        "menu": {
                            "name": "Defensive Tactics",
                            "title": "Defensive Tactics",
                            "selections": "1",
                            "advancedfeaturetext": {
                                "useentrypreviewtext": "true",
                                "usebullet": "true",
                                "prefixwithentryname": "true",
                                "prefixseperator": ": "
                            },
                            "entries": [
                                {
                                    "name": "Escape the Horde",
                                    "displayname": "Escape the Horde",
                                    "previewtext": "Opportunity attacks against you are made with Disadvantage."
                                },
                                {
                                    "name": "Multiattack Defense",
                                    "displayname": "Multiattack Defense",
                                    "previewtext": "When a creature hits you with an attack, you gain a +4 bonus to AC against all subsequent attacks made by that creature for the rest of the turn."
                                },
                                {
                                    "name": "Steel Will",
                                    "displayname": "Steel Will",
                                    "previewtext": "You have Advantage on Saving Throws against being Frightened."
                                }
                            ]
                        }
                    }
                ],
                "11": [
                    {
                        "menu": {
                            "name": "Multiattack",
                            "title": "Multiattack",
                            "selections": "1",
                            "advancedfeaturetext": {
                                "useentrypreviewtext": "true",
                                "usebullet": "true",
                                "prefixwithentryname": "true",
                                "prefixseperator": ": "
                            },
                            "entries": [
                                {
                                    "name": "Volley",
                                    "displayname": "Volley",
                                    "previewtext": "You can use your action to make a ranged attack against any number of creatures within 10 feet of a point you can see within your weapon's range. You must have ammo for each target, and you make a separate attack roll for each target."
                                },
                                {
                                    "name": "Whirlwind Attack",
                                    "displayname": "Whirlwind Attack",
                                    "previewtext": "You can use your action to make melee attacks against any number of creatures within 5 feet of you, with a separate attack roll for each target."
                                }
                            ]
                        }
                    }
                ],
                "15": [
                    {
                        "menu": {
                            "name": "Superior Hunter's Defense",
                            "title": "Superior Hunter's Defense",
                            "selections": "1",
                            "advancedfeaturetext": {
                                "useentrypreviewtext": "true",
                                "usebullet": "true",
                                "prefixwithentryname": "true",
                                "prefixseperator": ": "
                            },
                            "entries": [
                                {
                                    "name": "Evasion",
                                    "displayname": "Evasion",
                                    "previewtext": "When you are subjected to an effect, such as a red dragon's fiery breath or a lightning bolt spell, that allows you to make a Dexterity Saving Throw to take only half damage, you instead take no damage if you succeed on a saving throw, and only half damage if you fail."
                                },
                                {
                                    "name": "Stand Against the Tide",
                                    "displayname": "Stand Against the Tide",
                                    "previewtext": "When a hostile creature misses you with a melee attack, you can use your Reaction to force that creature to repeat the same attack against another creature (other than itself) of your choice."
                                },
                                {
                                    "name": "Uncanny Dodge",
                                    "displayname": "Uncanny Dodge",
                                    "previewtext": "When an attacker that you can see hits you with an attack, you can use your reaction to halve the attack's damage against you."
                                }
                            ]
                        }
                    }
                ]
            }
        },
        {
            "name": "Monster Slayer",
            "displayname": "Monster Slayer",
            "class": "Revised Ranger",
            "previewtext": "Eliminate powerful magical threats",
            "level": {
                "3": [
                    {
                        "addspell": {
                            "name": "Protection From Evil & Good",
                            "spelllevel": "1"
                        }
                    },
                    {
                        "featuretext": "Slayer's Eye: As a bonus action choose a creature you can see within 120' This ends when you target a new creature or take a rest."
                    },
                    {
                        "featuretextwithbullet": "You learn any vulnerabilities, resistances, and immunities, and any effects from it taking damage."
                    },
                    {
                        "featuretextwithbullet": "The first time each turn you hit the target with a weapon attack, it takes an additional 1d6 damage."
                    }
                ],
                "5": [
                    {
                        "sharedclassfeature": {
                            "name": "Extra Attack",
                            "class": "Ranger"
                        }
                    },
                    {
                        "addspell": {
                            "name": "Zone of Truth",
                            "spelllevel": "2"
                        }
                    }
                ],
                "7": [
                    {
                        "featuretextwithbullet": "Whenever the target of your Slayer’s Eye forces ﻿you to make a saving throw, add 1d6 to your roll."
                    }
                ],
                "9": [
                    {
                        "addspell": {
                            "name": "Magic Circle",
                            "spelllevel": "3"
                        }
                    }
                ],
                "11": [
                    {
                        "featuretextwithbullet": "If the target of your Slayer's Eye attempts to teleport or shapeshift while visible within 30' it must make a Wisdom saving throw or waste the action."
                    }
                ],
                "13": [
                    {
                        "addspell": {
                            "name": "Banishment",
                            "spelllevel": "4"
                        }
                    }
                ],
                "15": [
                    {
                        "featuretext": "When the target of your Slayer's Eye forces you to make a saving throw, you can make a weapon attack as a reaction before you make the save, automatically passing if you hit the target."
                    }
                ],
                "17": [
                    {
                        "addspell": {
                            "name": "Insect Plague",
                            "spelllevel": "5"
                        }
                    }
                ]
            }
        },
        {
            "name": "Primeval Guardian",
            "displayname": "Primeval Guardian",
            "class": "Revised Ranger",
            "previewtext": "Turn into an ent",
            "level": {
                "3": [
                    {
                        "addspell": {
                            "name": "Entangle",
                            "spelllevel": "1"
                        }
                    },
                    {
                        "featuretext": "You can add 1d6 piercing damage to one weapon attack. 1\/turn."
                    },
                    {
                        "featuretext": "Use a bonus action to transform into your Guardian Form, that of a treelike person with bark, branches, and leaves. You also gain certain abilities."
                    },
                    {
                        "featuretextwithbullet": "You grow to Large size."
                    },
                    {
                        "featuretextwithbullet": "Your speed is reduced to 5'."
                    },
                    {
                        "featuretextwithbullet": "Your reach increases by 5'."
                    },
                    {
                        "featuretextwithbullet": "You gain temporary hit points at the start of your turn, equal to 1\/2 your ranger level. These are lost when you leave this form."
                    }
                ],
                "5": [
                    {
                        "sharedclassfeature": {
                            "name": "Extra Attack",
                            "class": "Ranger"
                        }
                    },
                    {
                        "addspell": {
                            "name": "Enhance Ability",
                            "spelllevel": "2"
                        }
                    }
                ],
                "7": [
                    {
                        "featuretextwithbullet": "You can increase your hit point maximum and total by 2xRanger level. This lasts until you leave Guardian Form, when your Hit Points only decrease to abide by your new maximum. 1\/rest"
                    }
                ],
                "9": [
                    {
                        "addspell": {
                            "name": "Conjure Animals",
                            "spelllevel": "3"
                        }
                    }
                ],
                "11": [
                    {
                        "featuretextwithbullet": "The ground within 30' of your Guardian form is difficult terrain for your enemies."
                    }
                ],
                "13": [
                    {
                        "addspell": {
                            "name": "Giant Insect",
                            "spelllevel": "4"
                        }
                    }
                ],
                "15": [
                    {
                        "featuretext": "Any ally with less than half its hit points, is not an undead or construct, and that starts its turn within 30' regains ranger level\/2 hit points."
                    }
                ],
                "17": [
                    {
                        "addspell": {
                            "name": "Insect Plague",
                            "spelllevel": "5"
                        }
                    }
                ]
            }
        },
        {
            "name": "Scout",
            "displayname": "Scout",
            "class": "Rogue",
            "previewtext": "Rogues that want to be rangers",
            "level": {
                "3": [
                    {
                        "ifthenelse": {
                            "if": [
                                {
                                    "skillproficiency": "nature"
                                }
                            ],
                            "then": [
                                {
                                    "setskillproficiency": {
                                        "nature": "true"
                                    }
                                }
                            ],
                            "else": [
                                {
                                    "setskilldoubleproficiency": {
                                        "nature": "true"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "ifthenelse": {
                            "if": [
                                {
                                    "skillproficiency": "survival"
                                }
                            ],
                            "then": [
                                {
                                    "setskillproficiency": {
                                        "survival": "true"
                                    }
                                }
                            ],
                            "else": [
                                {
                                    "setskilldoubleproficiency": {
                                        "survival": "true"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "featuretext": "You can move half your speed as a reaction when an enemy ends its turn within 5' of you. This movement does not provoke an opportunity attack."
                    }
                ],
                "9": [
                    {
                        "modifyspeedbonus": "10"
                    }
                ],
                "13": [
                    {
                        "featuretext": "If you start an encounter where any foes are surprised, you can use a bonus action to give all your allies a +5 to initiative, or your initiative, whichever is lower. They also have a 10' increase to speed on their next turn."
                    }
                ],
                "17": [
                    {
                        "featuretext": "If you take the Attack action, you can use your bonus action to make a second attack. If this is your first attack against this target this turn, you may apply Sneak Attack, even if you have already used it."
                    }
                ]
            }
        },
        {
            "name": "Inquisitive",
            "displayname": "Inquisitive",
            "class": "Rogue",
            "previewtext": "Rogues that ferret out secrets",
            "level": {
                "3": [
                    {
                        "featuretext": "When rolling Wisdom (Insight) your minimum value for the die roll is 8, you still add all applicable modifiers."
                    },
                    {
                        "featuretext": "You can use your bonus action to make a Perception or Investigation check, or for Insightful Fighting. This bonus lasts for 1 minute, or until you use it on a different target."
                    },
                    {
                        "featuretext": "Insightful Fighting: As an action make a contested check of your Insight vs a visible creature's Deception. If you succeed, you may use sneak attack even if you do not have advantage or an ally adjacent to your target, and even if you have disadvantage."
                    }
                ],
                "9": [
                    {
                        "featuretext": "You have advantage on Perception checks if you do not move or ready movement on that turn."
                    }
                ],
                "13": [
                    {
                        "featuretext": "You gain an ability to sense magical deception within 30' such as illusion magic, shapechangers not in their true form, or similar. This does not inform you what is hidden, or its true form."
                    }
                ],
                "17": [
                    {
                        "featuretext": "When you use Insightful Fighting the target takes an additional 2d6 damage from Sneak Attack."
                    }
                ]
            }
        },
        {
            "name": "Favored Soul",
            "displayname": "Favored Soul",
            "class": "Sorcerer",
            "previewtext": "Heir to divine power",
            "level": {
                "1": [
                    {
                        "featuretext": "You can learn cleric cantrips and spells in lieu of any sorcerer ones."
                    },
                    {
                        "sethitpointslevelupbonus": "1"
                    },
                    {
                        "featuretext": "If you miss with an attack or fail a saving throw, you can roll 2d4 and add it to the result. 1\/rest"
                    }
                ],
                "6": [
                    {
                        "ifthenelse": {
                            "if": [
                                {
                                    "skillproficiency": "deception"
                                }
                            ],
                            "then": [
                                {
                                    "setskilldoubleproficiency": {
                                        "deception": "true"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "ifthenelse": {
                            "if": [
                                {
                                    "skillproficiency": "intimidation"
                                }
                            ],
                            "then": [
                                {
                                    "setskilldoubleproficiency": {
                                        "intimidation": "true"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "ifthenelse": {
                            "if": [
                                {
                                    "skillproficiency": "persuasion"
                                }
                            ],
                            "then": [
                                {
                                    "setskilldoubleproficiency": {
                                        "persuasion": "true"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "ifthenelse": {
                            "if": [
                                {
                                    "skillproficiency": "performance"
                                }
                            ],
                            "then": [
                                {
                                    "setskilldoubleproficiency": {
                                        "performance": "true"
                                    }
                                }
                            ]
                        }
                    }
                ],
                "14": [
                    {
                        "featuretext": "You are immune to disease, poison damage, and the poisoned condition."
                    }
                ],
                "18": [
                    {
                        "featuretext": "If below half hit points, can use a bonus action to regain half your maximum hit points. 1\/long rest"
                    }
                ]
            }
        },
        {
            "name": "Phoenix",
            "displayname": "Phoenix",
            "class": "Sorcerer",
            "previewtext": "Carry a spark of elemental flame",
            "level": {
                "1": [
                    {
                        "featuretext": "As an action, you can ignite a flamable object in your hand."
                    },
                    {
                        "featuretext": "As a bonus action activate your Mantle of Flame. 1\/long rest"
                    },
                    {
                        "featuretextwithbullet": "Shed bright light for 30' and dim light for another 30'"
                    },
                    {
                        "featuretextwithbullet": "Any creature that hits you with a melee attack from within 5' or touches you takes (CHA) fire damage"
                    },
                    {
                        "featuretextwithbullet": "Any fire damage you do on your turn is increased by (CHA)"
                    }
                ],
                "6": [
                    {
                        "featuretext": "Phoenix Spark: If you take damage that would reduce you to 0 hp, you can use your reaction to instead be reduced to 1 hp, and every creature within 10' takes (sorcerer level\/2)+(CHA) fire damage. If your Mantle of Flame is active you instead do (sorcerer level\/2)+(2xCHA) fire damage, and it ends immediately. 1\/long rest"
                    }
                ],
                "14": [
                    {
                        "featuretext": "When you cast a spell that includes a fire damage roll, you regain (spell slot level+(CHA)) hp."
                    }
                ],
                "18": [
                    {
                        "featuretext": "Improved Mantle of Flame"
                    },
                    {
                        "featuretextwithbullet": "You have a fly speed of 40' and can hover"
                    },
                    {
                        "featuretextwithbullet": "You have resistence to all damage"
                    },
                    {
                        "featuretextwithbullet": "Your Phoenix Spark does an additional 20 fire damage"
                    }
                ]
            }
        },
        {
            "name": "Sea",
            "displayname": "Sea",
            "class": "Sorcerer",
            "previewtext": "Tied to oceans and rivers",
            "level": {
                "1": [
                    {
                        "featuretext": "You can breathe underwater and have a swim speed equal to your walking speed."
                    },
                    {
                        "featuretext": "When you hit a creature with a cantrip you can curse a creature.\nOnce per turn when you cast a spell that does cold or lightning damage to the cursed creature, or forces it to move, you can trigger an ability. You choose which if multiple are applicable. The curse ends afterwards if you do not use a cantrip."
                    },
                    {
                        "featuretextwithbullet": "Cold: The target's speed is reduced by 15' (or higher if the spell causes this) until the end of your next turn"
                    },
                    {
                        "featuretextwithbullet": "Lightning: The creature takes (CHA) additional lightning damage"
                    },
                    {
                        "featuretextwithbullet": "Forced Movement: The amount the creature is moved increases by 15'"
                    }
                ],
                "6": [
                    {
                        "featuretext": "You have resistance to fire damage"
                    },
                    {
                        "featuretext": "As a reaction when you take bludgeoning, piercing, or slashing damage you can reduce it by (sorcerer level+(CHA)) and move 30' without provoking an opportunity attack. 1\/rest"
                    }
                ],
                "14": [
                    {
                        "featuretext": "When you move on your turn you take half damage from opportunity attacks and can move through enemy spaces, but cannot end your turn there. You can move through any space up to 3\" wide without squeezing, though when you stop standard squeezing rules apply, or you are forced out back along your path if it is still too small."
                    }
                ],
                "18": [
                    {
                        "featuretext": "Improved Mantle of Flame"
                    },
                    {
                        "featuretextwithbullet": "You no longer need to eat, sleep, or breathe"
                    },
                    {
                        "featuretextwithbullet": "You have resistence to bludgeoning, piercing, and slashing damage"
                    },
                    {
                        "featuretextwithbullet": "Any critical hit against you becomes a normal hit"
                    }
                ]
            }
        },
        {
            "name": "Stone",
            "displayname": "Stone",
            "class": "Sorcerer",
            "previewtext": "Tied to elemental earth",
            "level": {
                "1": [
                    {
                        "featuretext": "You have access to additional spells when selecting spells (see text)"
                    },
                    {
                        "modifyhitpointslevelupbonus": "1"
                    },
                    {
                        "setarmorclass": {
                            "add": [
                                "13",
                                "constitutionmodifier"
                            ]
                        }
                    },
                    {
                        "featuretext": "As an action, when not wearing armor you can set your AC to (13+CON). This ends if you don armor, are incapacitated, or you do so as a bonus action."
                    }
                ],
                "6": [
                    {
                        "featuretext": "Stone Aegis: As a bonus action grant an ally within 60' a reduction to bludgeoning, piercing, or slashing damage equal to (2+sorcerer level)\/4. It lasts for 1 minute, until you use it again, or if you are incapacitated.\nIf a creature you can see within 60' on the same surface attacks an ally guarded in this way, you can use your reaction to teleport within 5' of the attacker, and make a melee weapon attack, doing an extra 1d10 force damage. This becomes 2d10 at 11th level and 3d10 at 17th."
                    }
                ],
                "14": [
                    {
                        "featuretext": "When you cast a spell on your turn that does damage, choose one creature effected. It takes additional (sorcerer level\/2) force damage. 1\/spell"
                    }
                ],
                "18": [
                    {
                        "featuretext": "You can target three creatures with your Stone Aegis"
                    }
                ]
            }
        },
        {
            "name": "Shadow",
            "displayname": "Shadow",
            "class": "Sorcerer",
            "previewtext": "Tied to the Shadowfell",
            "level": {
                "1": [
                    {
                        "featuretext": "Within 60 feet of you, treat dim light as bright, darkness as dim light"
                    },
                    {
                        "featuretext": "You can spend a sorcery point to cast Darkness, which you can see through."
                    },
                    {
                        "featuretext": "Your ties to the Shadowfell make you harder to kill. Whenever damage reduces you to 0 hp, make a Constitution saving throw, DC (5+damage taken). On a success, you are instead dropped to 1 hp. This ability does not work if the damage taken is radiant or from a critical hit."
                    }
                ],
                "6": [
                    {
                        "featuretext": "As a bonus action, for 3 sorcery points, you can summon a Shadow Hound to pursue a creature you can see. The hound uses a Dire Wolf's stats, but is Medium, treats creatures and objects as diffucult terrain (taking 5 force damage if it ends its turn in their square), and at the start of its turn knows where the creature is.\nThe hound appears within 30' of the target, has its own initiative, and must take the most direct route to its target, and can use its actions and reactions only to attack the target.\nThe hound dissapears if it is reduced to 0 hp, its target is reduced to 0 hp, or 5 minutes pass."
                    }
                ],
                "14": [
                    {
                        "featuretext": "As a bonus action when in dim light or darkness, you can teleport to another space you can see within 120' yhat is in dim light or darkness."
                    }
                ],
                "18": [
                    {
                        "featuretext": "As a bonus action, you can spend 3 sorcery points to transform into a shadow, gaining resistance to all damage except force damage and can treat creatures and objects as diffucult terrain (taking 5 force damage if you end your turn in their square),"
                    }
                ]
            }
        },
        {
            "name": "Hexblade",
            "displayname": "Hexblade",
            "class": "Warlock",
            "previewtext": "Evil Sword",
            "level": {
                "1": [
                    {
                        "featuretext": "Hexblade's Curse: Bonus Action curse enemy, gain proficency bonus to damage, crit on 19 or 20, gain warlock level +CHA hp when you kill a target. 1\/rest"
                    },
                    {
                        "addweaponproficiencies": [
                            "Martial Weapons"
                        ]
                    },
                    {
                        "addarmorproficiencies": [
                            "Medium Armor",
                            "Shield"
                        ]
                    },
                    {
                        "featuretext": "When attacking with a weapon you are proficient with that does not have the two-handed property, you may use your CHA instead of STR or DEX for attack and damage modifiers."
                    }
                ],
                "6": [
                    {
                        "featuretext": "As a bonus action, send a shadow hound to a creature you can see within 60' of you. The target no longer benefits from 1\/2 or 3\/4 cover against your attacks, and you always know its direction and distance from you. It is invisible to everyone but you and those with truesight. This ends if you do so as a bonus action, you and your target are on different planes, you are incapacitated, or it is targeted with Remove Curse, Dispel Magic, or similar."
                    }
                ],
                "10": [
                    {
                        "featuretext": "Whenever the target of your Hexblade Curse hits you with an attack roll a d6, on a 4 or higher it misses."
                    }
                ],
                "14": [
                    {
                        "featuretext": "You no longer need to rest between uses of your Hexblade Curse, but you can only place it on one creature at a time."
                    }
                ]
            }
        },
        {
            "name": "Raven Queen",
            "displayname": "Raven Queen",
            "class": "Warlock",
            "previewtext": "Ruler of the Shadowfell",
            "level": {
                "1": [
                    {
                        "modifyskillbonus": {
                            "perception": "charismamodifier"
                        }
                    },
                    {
                        "featuretext": "Sentinel Raven: You have a spirit in the form of a raven that obeys your orders"
                    },
                    {
                        "featuretextwithbullet": "You can communicate with it telepathically and share senses while it stays within 100'"
                    },
                    {
                        "featuretextwithbullet": "While perched on your shoulder you have 30' darkvision and add CHA to Wisdom (Perception) checks. During this time it is immune to damage, cannot be targeted by anyone but you, and is incapacitated."
                    },
                    {
                        "featuretextwithbullet": "In combat roll its initiative independently, and determine its actions. If it is killed you gain advantage on all attacks against the killer for 24 hours."
                    },
                    {
                        "featuretextwithbullet": "It does not require sleep, and can wake you as a bonus action if it is within 100'"
                    },
                    {
                        "featuretextwithbullet": "It vanishes if either of you die, or are seperated by more than 5 mi."
                    },
                    {
                        "featuretextwithbullet": "At the end of a rest you can summon it back to you, regardless of whether it had died."
                    }
                ],
                "6": [
                    {
                        "featuretext": "When your raven is on your shoulder you can use a bonus action to merge with it, becoming tiny, gain its speeds, and all benefits from it being on your shoulder. While you are in this form you cannot attack or cast spells. You end this as an action."
                    }
                ],
                "10": [
                    {
                        "featuretext": "You have advantage on death saving throws, immunity to the frightened condition, and resistance to necrotic damage."
                    }
                ],
                "14": [
                    {
                        "featuretext": "You can cast Finger of Death 1\/long rest."
                    }
                ]
            }
        },
        {
            "name": "Seeker",
            "displayname": "Seeker",
            "class": "Warlock",
            "previewtext": "Patron of Knowledge",
            "level": {
                "1": [
                    {
                        "featuretext": "As a bonus action, create a 10' aura around yourself, granting resistence to all damage to you, and damaging any enemy within for (warlock level+CHA) radiant damage. 1\/rest."
                    }
                ],
                "6": [
                    {
                        "featuretext": "As an action, travel to a pocket dimension. You can cast two spells targeting yourself, before returning and ending your turn."
                    }
                ],
                "10": [
                    {
                        "featuretext": "You no longer need to breathe, and are resistant to fire and cold damage."
                    }
                ],
                "14": [
                    {
                        "featuretext": "By performing a 5 minute ritual, you and up to 10 willing creatures can travel to a pocket dimension to take a short rest, before returning at the same time you left."
                    }
                ]
            }
        },
        {
            "name": "Lore Mastery",
            "displayname": "Lore Mastery",
            "class": "Wizard",
            "previewtext": "Alter spells and master the intellectual",
            "level": {
                "2": [
                    {
                        "ifthenelse": {
                            "if": [
                                {
                                    "skillproficiency": "arcana"
                                }
                            ],
                            "then": [
                                {
                                    "setskilldoubleproficiency": {
                                        "arcana": "true"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "ifthenelse": {
                            "if": [
                                {
                                    "skillproficiency": "history"
                                }
                            ],
                            "then": [
                                {
                                    "setskilldoubleproficiency": {
                                        "history": "true"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "ifthenelse": {
                            "if": [
                                {
                                    "skillproficiency": "nature"
                                }
                            ],
                            "then": [
                                {
                                    "setskilldoubleproficiency": {
                                        "nature": "true"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "ifthenelse": {
                            "if": [
                                {
                                    "skillproficiency": "religion"
                                }
                            ],
                            "then": [
                                {
                                    "setskilldoubleproficiency": {
                                        "religion": "true"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "featuretext": "Initiative is either a Dexterity or Intelligence check (your choice)"
                    },
                    {
                        "featuretext": "When you cast a spell using a spell slot that does acid,\tcold,\tfire,\tforce, lightning, necrotic,\tradiant,\tor\t thunder\tdamage, you can switch to another of those damages."
                    },
                    {
                        "featuretext": "When you cast a spell using a spell slot that requires a saving throw, you can switch to another saving throw."
                    },
                    {
                        "ifthenelse": {
                            "if": [
                                {
                                    "greaterthan": {
                                        "first": "intelligencemodifier",
                                        "second": "dexteritymodifier"
                                    }
                                }
                            ],
                            "then": [
                                {
                                    "modifyinitiativebonus": {
                                        "multiply": [
                                            "-1",
                                            "dexteritymodifier"
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                ],
                "6": [
                    {
                        "featuretext": "You can use additional spell slots to augment your spells"
                    },
                    {
                        "featuretext": "First Level: You can do an extra 2d10 force damage against all targets on the first turn they take damage."
                    },
                    {
                        "featuretext": "Second Level: If a spell has a range of 30' it is increased to 1 mi."
                    },
                    {
                        "featuretext": "Third Level: The saving throw DC of the spell is increased by 2."
                    }
                ],
                "10": [
                    {
                        "featuretext": "As a bonus action you can switch one prepared spell with another in your spellbook. 1\/rest"
                    }
                ],
                "14": [
                    {
                        "featuretext": "As a bonus action you can prepare a spell from any class' spell list, which counts as a Wizard spell for you. The spell fades after you cast it, or when this turn ends. 1\/rest"
                    }
                ]
            }
        },
        {
            "name": "Theurgy",
            "displayname": "Theurgy",
            "class": "Wizard",
            "previewtext": "Combine the Divine and the Arcane",
            "level": {
                "2": [
                    {
                        "menu": {
                            "name": "Divine Domain",
                            "title": "Divine Domain",
                            "selections": "1",
                            "entries": [
                                {
                                    "name": "Arcana",
                                    "displayname": "Arcana",
                                    "effects": [
                                        {
                                            "featuretext": "Divine Domain: Arcana"
                                        }
                                    ]
                                },
                                {
                                    "name": "Death",
                                    "displayname": "Death",
                                    "effects": [
                                        {
                                            "featuretext": "Divine Domain: Death"
                                        }
                                    ]
                                },
                                {
                                    "name": "Forge",
                                    "displayname": "Forge",
                                    "effects": [
                                        {
                                            "featuretext": "Divine Domain: Forge"
                                        }
                                    ]
                                },
                                {
                                    "name": "Grave",
                                    "displayname": "Grave",
                                    "effects": [
                                        {
                                            "featuretext": "Divine Domain: Grave"
                                        }
                                    ]
                                },
                                {
                                    "name": "Knowledge",
                                    "displayname": "Knowledge",
                                    "effects": [
                                        {
                                            "featuretext": "Divine Domain: Knowledge"
                                        }
                                    ]
                                },
                                {
                                    "name": "Life",
                                    "displayname": "Life",
                                    "effects": [
                                        {
                                            "featuretext": "Divine Domain: Life"
                                        }
                                    ]
                                },
                                {
                                    "name": "Light",
                                    "displayname": "Light",
                                    "effects": [
                                        {
                                            "featuretext": "Divine Domain: Light"
                                        }
                                    ]
                                },
                                {
                                    "name": "Nature",
                                    "displayname": "Nature",
                                    "effects": [
                                        {
                                            "featuretext": "Divine Domain: Nature"
                                        }
                                    ]
                                },
                                {
                                    "name": "Protection",
                                    "displayname": "Protection",
                                    "effects": [
                                        {
                                            "featuretext": "Divine Domain: Protection"
                                        }
                                    ]
                                },
                                {
                                    "name": "Tempest",
                                    "displayname": "Tempest",
                                    "effects": [
                                        {
                                            "featuretext": "Divine Domain: Tempest"
                                        }
                                    ]
                                },
                                {
                                    "name": "Trickery",
                                    "displayname": "Trickery",
                                    "effects": [
                                        {
                                            "featuretext": "Divine Domain: Trickery"
                                        }
                                    ]
                                },
                                {
                                    "name": "War",
                                    "displayname": "War",
                                    "effects": [
                                        {
                                            "featuretext": "Divine Domain: War"
                                        }
                                    ]
                                }
                            ]
                        }
                    },
                    {
                        "featuretext": "Whenever you can add a spell into your spellbook, you can copy a spell from your god's domain, or if you have already copied all of them, any cleric spell. Other wizards cannot copy these spells."
                    },
                    {
                        "setresource": {
                            "name": "Channel Arcana",
                            "diesize": "0",
                            "amount": "2",
                            "displayname": "Channel Arcana",
                            "reset": "shortrest"
                        }
                    },
                    {
                        "showresource": "Channel Arcana"
                    },
                    {
                        "featuretext": "You can use Channel Arcana "
                    }
                ],
                "6": [
                    {
                        "featuretext": "You can use additional spell slots to augment your spells"
                    },
                    {
                        "featuretext": "First Level: You can do an extra 2d10 force damage against all targets on the first turn they take damage."
                    },
                    {
                        "featuretext": "Second Level: If a spell has a range of 30' it is increased to 1 mi."
                    },
                    {
                        "featuretext": "Third Level: The saving throw DC of the spell is increased by 2."
                    }
                ],
                "10": [
                    {
                        "featuretext": "As a bonus action you can switch one prepared spell with another in your spellbook. 1\/rest"
                    }
                ],
                "14": [
                    {
                        "featuretext": "As a bonus action you can prepare a spell from any class' spell list, which counts as a Wizard spell for you. The spell fades after you cast it, or when this turn ends. 1\/rest"
                    }
                ]
            }
        },
        {
            "name": "State alchemist ",
            "displayname": "State Alchemist ",
            "class": "Transmutation alchemist ",
            "previewtext": "you recieve training from the military, and you recieve a pocket watch that empowers your Transmutation's",
            "spellcastingability": "intelligence",
            "level": {
                "3": [
                    {
                        "featuretextwithbullet": "Encoded notes\n- The military teaches you to encode notes using several methods\n- You gain advantage when attempting to decode notes of others.\n\n- Others have disadvantage when attempting to read your encoded notes."
                    },
                    {
                        "featuretextwithbullet": "Silver pocket watch\nYou've been given a silver pocket watch as a badge of office as a state alchemist, as long as you have it with you:\n\n- Your alchemic stamina pool is increased by 10 points\n\n- When you activate a circle that would cost 10 alchemic stamina or more you instead spend only 1\/2 rounded up"
                    },
                    {
                        "setsaveproficiency": {
                            "charisma": "true"
                        }
                    },
                    {
                        "modifyresource": {
                            "name": "Stamina",
                            "amount": "10"
                        }
                    }
                ],
                "6": [
                    {
                        "featuretextwithbullet": "State funding\nSpeak with the dm to discuss an alchemic specialization youd like to focus in. \n\n- You get a military pay of 25gp per week for basic pay. this may increase or decrease based on premonitions\/demotions \n\n- The state grant's you 1000gp per year for your research. However, you are subject to random hearings to determine the value of your research. the military may choose to raise or lower this annual grant as a result.\n\n-You may pay 200gp for a small circle 400gp for a medium circle or 600gp for a large circle to create a custom Transmutation and circle based on your alchemic specialization. speak with your dm to do this."
                    }
                ],
                "10": [
                    {
                        "featuretextwithbullet": "Subordinates \n- The state places lower ranking military personnel under your command. These personnel can be ordered to do most tasks, at the discretion of the dm.\n\n- At level 9 you are given 2 subordinates. additional personnel can be requested from your commanding officer. \nPersonnel under your command are non-alchemists. they are however equipped with a handgun that deals 2d6+4 with +4 to hit, and can be fired as an action and\/or a bonus action. They share your turn, have a movement speed of 30, and and AC of 16. they recieve their own pay, you are not responsible for feeding them. they do however stay at whatever residence\/camp\/base you stay at."
                    }
                ],
                "14": [
                    {
                        "featuretextwithbullet": "Friends in high places\nYou've made connections during your military service, and many of them would be willing to die for you.\n\n- You gain advantage when persuading higher ranking military personnel.\n\n- You are more likely to recieve good reviews during your alchemic specialization hearings."
                    }
                ]
            }
        },
        {
            "name": "Alchemic Teacher",
            "displayname": "Alchemic Teacher",
            "class": "Transmutation alchemist ",
            "previewtext": "A skilled alchemist with years of practice, get bonus' to unarmed and unarmored combat.",
            "spellcastingability": "intelligence",
            "level": {
                "3": [
                    {
                        "setskillproficiency": {
                            "intimidation": "true"
                        }
                    },
                    {
                        "setunarmedstrikedamage": {
                            "diesize": "8",
                            "dienumber": "1"
                        }
                    },
                    {
                        "setarmorclass": {
                            "add": [
                                "14",
                                "constitutionmodifier"
                            ]
                        }
                    },
                    {
                        "featuretextwithbullet": "Advantage vs. being frightened"
                    },
                    {
                        "featuretextwithbullet": "Companion\nYou attract a friend that is willing to follow you anywhere. they can be any class other than an alchemist, and their level is equal to half your character level rounded down"
                    },
                    {
                        "addarmorproficiencies": [
                            "Unarmored master"
                        ]
                    },
                    {
                        "setsaveproficiency": {
                            "wisdom": "true"
                        }
                    }
                ],
                "6": [
                    {
                        "featuretextwithbullet": "Greater understanding\nReroll all 1's on any dice rolls when you Transmute any circle."
                    }
                ],
                "11": [
                    {
                        "featuretextwithbullet": "Counter Transmutation \nIf a Transmutation circle is activated within 30ft of you, you may use your reaction to stop the Transmutation at the deconstruction phase. the materials are broken and scattered 1d10 feet."
                    }
                ],
                "14": [
                    {
                        "featuretextwithbullet": "Advanced combat alchemy\nWhen you make and unarmed attack as an action you may transmute with a small circle with the same action."
                    }
                ]
            }
        },
        {
            "name": "Gunslinger",
            "displayname": "Gunslinger",
            "class": "Fighter",
            "previewtext": "Allows you to design, craft, and utilise powerful, but dangerous guns for use at range.",
            "level": {
                "3": [
                    {
                        "addweaponproficiencies": [
                            "Firearms"
                        ]
                    },
                    {
                        "addtoolproficiencies": [
                            "Tinker's Tools"
                        ]
                    },
                    {
                        "setresource": {
                            "name": "Grit",
                            "amount": "wisdommodifier",
                            "spendable": "true",
                            "displayname": "Grit Points",
                            "restoreshortrest": "wisdommodifier",
                            "restorelongrest": "wisdommodifier"
                        }
                    },
                    {
                        "showresource": "Grit"
                    },
                    {
                        "featuretextwithbullet": "Firearm Proficiency: You can add your proficiency bonus to attacks made with Firearms."
                    },
                    {
                        "featuretextwithbullet": "Gunsmith: You gain proficiency with Tinker's Tools, and may use them to craft ammunition, repair damaged firearms, or even draft and create new firearms (DM's discretion)."
                    },
                    {
                        "featuretextwithbullet": "Grit: You gain a number of Grit Points equal to your Wisdom modifier (minimum 1). You can spend Grit Points to perform various \"shot\" attacks with Firearms. An attack may only benefit from a single shot feature.  You regain Grit Points after finishing a Short or Long Rest. You can also regain Grit Points in the following ways:\n   - Critical Hit with a Firearm: You regain 1 spent Grit Point. Critical hits granted by Conditions do not generate Grit.\n   - Killing Blow with a Firearm: Each time you reduce a dangerous creature (DM's discretion) to 0 hit points with a Firearm attack, and kill them, you regain 1 spent Grit Point."
                    },
                    {
                        "featuretextwithbullet": "Deadeye Shot: You can spend 1 Grit Point to gain Advantage on the next attack you make with a Firearm this round."
                    }
                ],
                "7": [
                    {
                        "featuretextwithbullet": "Quickdraw: You add your proficiency bonus to your Initiative. You can also stow a Firearm, then draw another firearm as a single object interaction your turn."
                    },
                    {
                        "setinitiativeproficiency": "true"
                    },
                    {
                        "featuretextwithbullet": "Violent Shot: You can spend 1 or more Grit Points before making an attack with a Firearm. For each Grit Point spent, that attack gains +2 to the firearm's misfire score. If the Attack hits, you can roll one additional weapon damage die per Grit Point spent."
                    }
                ],
                "10": [
                    {
                        "featuretextwithbullet": "Trick Shot: You can spend 1 Grit Point before making an attack roll to target a specific location on the target's body. if the body part can not be seen, or the target lacks the part in question, only normal damage is suffered with no additional effect. Your Trick Shot DC = 8 + Prof + Dex Mod\n   - Head: On hit, target takes normal damage and must make a CON Save or suffer Disadvantage on attacks until the end of their next turn.\n   - Arms: On hit, target takes normal damage and must make a STR Save or drop 1 held item your choice.\n   - Torso: On hit, target takes normal damage and is pushed up to 10 feet directly away from you.\n   - Legs\/Wings: On hit, target takes normal damage and must make a STR Save or get knocked Prone."
                    }
                ],
                "15": [
                    {
                        "featuretextwithbullet": "Lightning Reload: You can reload any Firearm as a bonus action."
                    },
                    {
                        "featuretextwithbullet": "Piercing Strike: You can spend 1 Grit Point before making an attack with a Firearm that deals piercing damage. If it hits, you make an attack roll against every creature in a line directly behind the target (within your first range increment). Only the initial hit can misfire."
                    }
                ],
                "18": [
                    {
                        "featuretextwithbullet": "Vicious Intent: Your Firearm attacks score a critical hit on a roll of 19-20."
                    },
                    {
                        "featuretextwithbullet": "Hemorrhaging Critical: When you score a critical hit with a Firearm, the target additionally suffers half of the damage from the Attack at the end of its next turn."
                    }
                ]
            }
        },
        {
            "name": "Spec ops",
            "displayname": "Spec ops",
            "class": "Militant ",
            "previewtext": "Focus on combat with your squad",
            "level": {
                "4": [
                    {
                        "featuretextwithbullet": "spend 2 Morale point to increase any skill check by 1d6"
                    },
                    {
                        "setskillproficiency": {
                            "intimidation": "true"
                        }
                    },
                    {
                        "setskillproficiency": {
                            "stealth": "true"
                        }
                    }
                ],
                "6": [
                    {
                        "featuretextwithbullet": "Spend 4 Morale point to increase any damage roll by 1d8."
                    }
                ],
                "11": [
                    {
                        "featuretextwithbullet": "Spend 6 Morale points to add 1d8 to any roll to hit."
                    }
                ],
                "14": [
                    {
                        "featuretextwithbullet": "spend 8 Morale points to make an extra attack on your turn."
                    }
                ]
            }
        },
        {
            "name": "Medic",
            "displayname": "Medic",
            "class": "Militant ",
            "previewtext": "Focus on healing your party and squad",
            "level": {
                "4": [
                    {
                        "featuretextwithbullet": "spend 2 morale points to heal any creature you can touch by 1d6"
                    },
                    {
                        "setskillproficiency": {
                            "medicine": "true"
                        }
                    },
                    {
                        "setskillproficiency": {
                            "survival": "true"
                        }
                    }
                ],
                "6": [
                    {
                        "featuretextwithbullet": "spend 4 morale points to cure a status effect from a creature you can touch."
                    }
                ],
                "11": [
                    {
                        "featuretextwithbullet": "spend 6 morale points to stabalize a creature in death saves that you can touch."
                    }
                ],
                "14": [
                    {
                        "featuretextwithbullet": "spend 8 morale points to heal a creature you can touch by 3d10"
                    }
                ]
            }
        },
        {
            "name": "Military police ",
            "displayname": "Military police",
            "class": "Militant ",
            "previewtext": "focus on investigation",
            "level": {
                "4": [
                    {
                        "featuretextwithbullet": "spend 2 morale point to gain advantage on a perception or investigation check"
                    },
                    {
                        "setskillproficiency": {
                            "investigation": "true"
                        }
                    },
                    {
                        "setskillproficiency": {
                            "perception": "true"
                        }
                    }
                ],
                "6": [
                    {
                        "featuretextwithbullet": "spend 4 morale points to gain advantage on any charisma check"
                    }
                ],
                "11": [
                    {
                        "featuretextwithbullet": "spend 6 morale points the dm must reveal 1 detail you may have missed."
                    }
                ],
                "14": [
                    {
                        "featuretextwithbullet": "spend 8 morale points, you gain advantage on all skill checks made for the next hour."
                    }
                ]
            }
        },
        {
            "name": "Smuggler ",
            "displayname": "Smuggler ",
            "class": "Rogue",
            "previewtext": "Focus on moving items across long distances without being noticed",
            "level": {
                "3": [
                    {
                        "featuretextwithbullet": "Nothing to see here\n\nStarting at 3rd level, you can use the bonus action granted by your Cunning Action to make a Dexterity (Stealth) check to attempt to hide an object or a willing creature within 5 feet of you. Alternatively, you can use this bonus action to allow a friendly creature outside of this range that can see or hear you to use its reaction to immediately attempt to Hide.\n"
                    },
                    {
                        "featuretextwithbullet": "Adaptive camouflage \nyou spend 1 hour to create camouflage from natural materials granting advantage on stealth checks against being seen for 24 hours."
                    },
                    {
                        "featuretextwithbullet": "Razor Wit\n\nSometimes knowing the right thing to say or knowing what someone wants to hear can be just as important as how you say it or how charming or likable you are.\nWhen you choose this archetype at 3rd level, you can add your Intelligence modifier to your roll for any Charisma (persuasion), Charisma (deception), or Charisma (intimidation) check.\nAdditionally, you have a keen sense of when a social interaction is beginning to go badly and can quickly change strategies mid-conversation to attempt to salvage your goals. When you fail an ability check using one of Charisma (persuasion), Charisma (deception), or Charisma (intimidation), you can immediately make a roll to attempt to use one of the other two skills from that list to achieve the same result in a different way without any disadvantage or consequence for that initial failure. You can use this ability once, and regain the ability to use it when you finish a short or a long rest.\n"
                    }
                ],
                "9": [
                    {
                        "featuretextwithbullet": "Low Profile Leader\n\nStarting at 9th level, you can use your action to grant any number of friendly creatures within 30 feet of you advantage on all Dexterity (stealth) checks until the end of your next turn.\n"
                    }
                ],
                "13": [
                    {
                        "featuretextwithbullet": "Superior Preparation\n\nStarting at 13th level, you are always on the lookout for danger, and have taken pains to make sure that you and your allies are always prepared for an ambush.\nIf you or your party are surprised, you and all of your allies have advantage on all saving throws until they take their first turn in combat, and all hostile creatures have disadvantage on attacks that target any ally of yours (including yourself) that has not yet taken a turn in combat.\n"
                    }
                ],
                "17": [
                    {
                        "featuretextwithbullet": "Magical Appraiser’s Eye\n\nWhen you reach 17th level, your eye for powerful, rare, valuable, and contraband items has no equal. You can take 10 minutes to examine any item, gaining information about it as though you had cast the identify spell on it, though you do not use magic to do so. You know the approximate market value of any item you use this feature to examine, regardless of whether it is magical or not. You can also tell immediately if an item or document is a forgery (no ability check required) provided you have at least some knowledge of what the object is (you can’t tell a document written in a language you can’t read is a forgery, and you can’t tell if a small machine is a fake if you don’t know what it does, for example).\nAdditionally, your study of the value of magical items has given you a deep functional understanding of how they work and how others can use them. Any time you are attacked by a creature wielding a magical weapon for that attack, or a spell is cast against you where the caster was using a magical item as a spell focus, you can use your reaction to protect yourself from that attack or spell. Using this reaction imposes disadvantage on all attack rolls against you from that creature, advantage on all saving throws against spells cast by that creature, and resistance to all damage from that weapon or spell until the end of your next turn. You can use this feature once, and regain the ability to do so after completing a short or a long rest\n"
                    }
                ]
            }
        },
        {
            "name": "Black dragon technique",
            "displayname": "Black dragon technique ",
            "class": " Exhalmancer",
            "previewtext": "gain a pool of elemental acid, and the knowledge to use it.",
            "level": {
                "4": [
                    {
                        "featuretextwithbullet": "Elemental Inheritance\nYou recieve a pool of elemental acid that you may now use for breath attacks. gain 6 points to your acid pool.\n"
                    },
                    {
                        "featuretextwithbullet": "Acid bath\nspend 2 points from your acid pool to cover a 10ft x 10ft area with a gout of acid. creatures attempting to move through this area take 2d6+con mod acid damage for each 5 ft space they walk through."
                    }
                ],
                "9": [
                    {
                        "featuretextwithbullet": "Bane of equipment\nSpend 4 points from your acid pool.\nyou may target an item with a concentrated stream of acid, destroying it. when rolling to hit with this breath weapon any roll above a 17 counts as a critical success."
                    },
                    {
                        "featuretextwithbullet": "Elemental Inheritance\nGain 6 points to your acid pool."
                    }
                ],
                "11": [
                    {
                        "featuretextwithbullet": "Elemental Inheritance\nGain 6 points to your acid pool."
                    },
                    {
                        "featuretextwithbullet": "Draconic napalm\nspend 4 additional points from your acid pool when casting any breath attack. your breath attack sticks to creatures you hit, dealing another round of damage on the creatures next turn, you do not need to roll to hit on the second round of damage."
                    }
                ],
                "15": [
                    {
                        "featuretextwithbullet": "Elemental Inheritance\nGain 6 points to your acid pool."
                    },
                    {
                        "featuretextwithbullet": "Dragons breath\nspend 10 points from your acid pool, you spout a continuous flow of acid from your open maw for 2 rounds. any creature in a 30ft line take 4d10+con mod acid damage and must make a Constitution save dc 15, on a success they take half damage. on a failure the creature loses its movement speed on its next turn and takes an automatic hit on your next turn taking another 4d10+con mod acid damage."
                    }
                ]
            }
        },
        {
            "name": "Green dragon technique ",
            "displayname": "green dragon technique ",
            "class": " Exhalmancer",
            "previewtext": "Learn to spew poison as the green dragons do",
            "level": {
                "4": [
                    {
                        "featuretextwithbullet": "Elemental plague\nGain a pool of elemental poison energy. add 6 points to your poison energy pool."
                    },
                    {
                        "featuretextwithbullet": "Affliction\nSpend 2 points of poison energy while casting any breath attack.\nthe target must make a Constitution save dc 15 or become poisoned, taking 2d4+con mod damage at the start of its turn, for 5 rounds."
                    }
                ],
                "9": [
                    {
                        "featuretextwithbullet": "Elemental plague\nAdd 6 points to your poison energy pool."
                    },
                    {
                        "featuretextwithbullet": "Poisoned mind\nSpend 4 points from your poison pool\nyou open your mouth and spew a Draconic chant, all creatures of your choice within 40ft of you must make a Constitution save DC 15 or have thier minds poisoned, creatures remain poisoned this way for 5 rounds and must succeed a wisdom save or attack the creature closest to them regardless of allies."
                    }
                ],
                "11": [
                    {
                        "featuretextwithbullet": "Elemental plague\nAdd 6 points to your poison energy pool."
                    },
                    {
                        "featuretextwithbullet": "Toxic being\nThe poison you wield has permiated your body, when attacked you release a miasma of poison gas 10ft around you. creatures that start thier turn in this cloud or move into or though it must make a Constitution save dc 15. on a success the target takes half damage, on a failure the creature takes 4d6+con mod poison damage and is poisoned for 2 rounds"
                    }
                ],
                "15": [
                    {
                        "featuretextwithbullet": "Elemental plague\nAdd 6 points to your poison energy pool."
                    },
                    {
                        "featuretextwithbullet": "Advanced poison\nYour poison is so powerful it ignores resistances and immunities. not even the gods are safe from your toxic presence. all poison breath attacks now deal double damage."
                    }
                ]
            }
        },
        {
            "name": "Way of the Burning Soul",
            "displayname": "Way of the Burning Soul",
            "class": "Monk",
            "previewtext": "Manifest your soul as Burning Energy",
            "level": {
                "3": [
                    {
                        "featuretextwithbullet": {
                            "combinestrings": [
                                "Invoke Spirit: When you hit with an unarmed strike, you can expend 1 ki to activate one of the following effects:",
                                "",
                                "\nBurning Soul: The unarmed strike deals fire damage, and you roll one additional martial arts die when determining the damage of this attack.",
                                "",
                                "\nDraining Soul: The unarmed strike deals necrotic damage, and you gain temporary hit points equal to your Wisdom modifier plus half of your monk level (rounded up).",
                                "",
                                "\nWarding Soul: The unarmed strike deals radiant damage, and the target must make a Strength saving throw. On a failed saving throw, the target is moved a number of feet equal to your monk level (rounded up) away from you in a straight line.",
                                "",
                                "\n You cannot activate two different effects on the same turn, but you can activate the same effect multiple times on same turn for each unarmed strike."
                            ]
                        }
                    }
                ],
                "6": [
                    {
                        "featuretextwithbullet": {
                            "combinestrings": [
                                "Spirit Blasts: Immediately after you take the Attack action on your turn, you can spend 3 ki points to cast the 2nd level spell scorching ray as a bonus action. Each ray deals your choice of fire, radiant, or necrotic damage.",
                                "",
                                "\nYou can spend additional ki points to cast scorching ray at a higher level. Each additional ki point you spend increases the spell's level by 1. The maximum number of ki points (3 plus any additional points) that you can spend on the spell equals half your monk level (rounded down)."
                            ]
                        }
                    }
                ],
                "11": [
                    {
                        "featuretextwithbullet": "Emboldened Spirit: Choose one damage type from fire, radiant, or necrotic when you finish a short or long rest. You gain resistance to that damage type until you choose a different one with this feature. Additionally, your hit point maximum cannot be reduced, and you have advantage on saving throws against being possessed."
                    }
                ],
                "17": [
                    {
                        "featuretextwithbullet": "Invoke Soul: When you use Invoke Spirit, you may activate two effects at once instead of just one, for 1 ki point. You choose which of the two you use for the damage type of the unarmed strike."
                    }
                ]
            }
        },
        {
            "name": "The Raven Queen",
            "displayname": "Raven Queen",
            "class": "Warlock",
            "previewtext": "Gain access to death based spells.\nReceive a raven sentinel, granting you numerous benefits. ",
            "level": {
                "1": [
                    {
                        "featuretextwithbullet": "Warlock Archetype: Raven Queen"
                    },
                    {
                        "featuretextwithbullet": "Expanded Spell List: You may select False Life and Sanctuary as Warlock spells."
                    },
                    {
                        "featuretextwithbullet": "Sentinel Raven: You gain the service of a spirit in raven form. It has the stats of a raven and always obeys your commands. You can speak to it telepathically within 100 ft.\n- If the Raven is perched on your shoulder you gain 30 ft of darkvision and you can add your Charisma mod to your Passive , and only you can cast spells on it. \n - You can see through the raven's eyes and hear what it hears while it's within 100 ft of you. \n- You roll it a separate initiative and control it in combat. If it is slain, you have advantage on attack rolls against the killer for 24 hours. \n- The raven doesn't need sleep, it can waken you as a bonus action while within 100 ft of you. It vanishes when it dies, you die, or you are separated by more than 5 miles. \n- You can call the Raven back to you at the end of a short or long rest, wherever it is, alive or dead."
                    }
                ],
                "3": [
                    {
                        "featuretextwithbullet": "Expanded Spell List: You may select Silence and Spiritual Weapon as Warlock spells."
                    }
                ],
                "5": [
                    {
                        "featuretextwithbullet": "Expanded Spell List: You may select Feign Death and Speak With Dead as Warlock spells."
                    }
                ],
                "6": [
                    {
                        "featuretextwithbullet": "Soul of the Raven: You gain the ability to merge with your raven as a bonus action. It must be on your shoulder to do this. While merged, you become Tiny sized, your speed is the raven's, and you can only use your action to Dash, Disengage, Dodge, Help, Hide, or Search. \nYou gain the same benefits as if the raven is on your shoulder. It takes an action to revert back. "
                    }
                ],
                "7": [
                    {
                        "featuretextwithbullet": "Expanded Spell List: You may select Ice Storm and Locate Creature as Warlock spells."
                    }
                ],
                "9": [
                    {
                        "featuretextwithbullet": "Expanded Spell List: You may select Commune and Cone of Cold as Warlock spells."
                    }
                ],
                "10": [
                    {
                        "featuretextwithbullet": "Raven's Shield: You have advantage in death saving throws, immunity vs the frightened condition, and resistance to necrotic damage."
                    }
                ],
                "14": [
                    {
                        "featuretextwithbullet": "Queen's Right Hand: You can cast Finger of Death once per long rest."
                    },
                    {
                        "addspell": {
                            "name": "Finger of Death",
                            "spelllevel": "7"
                        }
                    }
                ]
            }
        },
        {
            "name": "Undying",
            "displayname": "Undying",
            "class": "Warlock",
            "previewtext": "Your patron is a being beyond both life and death, possessing power to break the cyclical nature of time and their own mortality.",
            "spellprogression": "full",
            "spellcastingability": "charisma",
            "level": {
                "1": [
                    {
                        "featuretextwithbullet": "The first time a creature dies within 30 feet of you, you regain one of your warlock spell slots if you have expended any. You can't regain spell slots again in this way until you finish a short or long rest."
                    },
                    {
                        "addspell": {
                            "name": "False Life",
                            "spelllevel": "1"
                        }
                    },
                    {
                        "addspell": {
                            "name": "Inflict Wounds",
                            "spelllevel": "1"
                        }
                    }
                ],
                "2": [
                    {
                        "addspell": {
                            "name": "Gentle Repose",
                            "spelllevel": "2"
                        }
                    },
                    {
                        "addspell": {
                            "name": "Silence",
                            "spelllevel": "2"
                        }
                    }
                ],
                "3": [
                    {
                        "addspell": {
                            "name": "Speak with Dead",
                            "spelllevel": "3"
                        }
                    },
                    {
                        "addspell": {
                            "name": "Revivify",
                            "spelllevel": "3"
                        }
                    }
                ],
                "4": [
                    {
                        "addspell": {
                            "name": "Aura of life",
                            "spelllevel": "4"
                        }
                    },
                    {
                        "addspell": {
                            "name": "Death Ward",
                            "spelllevel": "4"
                        }
                    }
                ],
                "5": [
                    {
                        "addspell": {
                            "name": "Contagion",
                            "spelllevel": "5"
                        }
                    },
                    {
                        "addspell": {
                            "name": "Raise Dead",
                            "spelllevel": "5"
                        }
                    }
                ],
                "6": [
                    {
                        "featuretextwithbullet": "when you are reduced to 0 hit points by an effect that does not cause radiant damage and is not a critical hit, you instead drop to 1 hit point. Once you use this feature, you can't use it again until you finish a short or long rest."
                    }
                ],
                "10": [
                    {
                        "featuretextwithbullet": "you age only 1 year for every 10 years that pass, and you can't be aged magically. In addition, you gain resistance to necrotic and poison damage."
                    }
                ],
                "14": [
                    {
                        "featuretextwithbullet": "As an action, you can make a melee spell attack against a creature. If you hit them, they take 6d6 cold damage, and must succeed on a Constitution saving throw or be paralyzed for one minute. They can repeat the saving throw at the end of each of their turns, ending the effect on a success. Once you use this feature, you can't use it again until you finish a short or long rest."
                    }
                ]
            }
        },
        {
            "name": "Order of the Immortal",
            "displayname": "Order of the Immortal",
            "class": "Mystic",
            "previewtext": "Members of this order are skilled warriors. Their psionic abilities allow them to shrug off injuries and hazards, while focusing their strength and speed in combat.",
            "level": {
                "1": [
                    {
                        "featuretextwithbullet": "Mystic Order - Order of the Immortal"
                    },
                    {
                        "sharedclassfeaturemenu": {
                            "name": "Psionic Disciplines",
                            "selections": "2",
                            "class": "Mystic"
                        }
                    },
                    {
                        "modifyhitpointslevelupbonus": "1"
                    },
                    {
                        "featuretextwithbullet": "Immortal Durability- Your HP max increases by 1 per mystic level and when you have no armor or shield equipped, your AC = 10+Dex+Con mods. "
                    }
                ],
                "3": [
                    {
                        "featuretextwithbullet": {
                            "combinestrings": [
                                "Psionic Resilience - If you have at least 1 hit point, at the start of your turn you gain temporary hp equal to: ",
                                {
                                    "value": "intelligencemodifier"
                                },
                                ", your Intelligence Modifier."
                            ]
                        }
                    }
                ],
                "6": [
                    {
                        "featuretextwithbullet": "Surge of Health: If you take damage, you can half the damage against you by using your reaction and ending your psychic focus. You can't regain a new focus until a short or long rest. "
                    }
                ],
                "14": [
                    {
                        "featuretextwithbullet": {
                            "combinestrings": [
                                "Immortal Will - If you are at 0hp at the end of your turn, you can spend 5 psi points to heal: ",
                                {
                                    "value": {
                                        "add": [
                                            {
                                                "classlevel": "Mystic"
                                            },
                                            "constitutionmodifier"
                                        ]
                                    }
                                },
                                " hit points. (Mystic level + Con mod)"
                            ]
                        }
                    }
                ],
                "all": [
                    {
                        "replacelinefromfeaturetext": {
                            "replacementtext": {
                                "combinestrings": [
                                    "Psionic Resilience - If you have at least 1 hit point, at the start of your turn you gain temporary hp equal to: ",
                                    {
                                        "value": "intelligencemodifier"
                                    },
                                    ", your Intelligence Modifier."
                                ]
                            },
                            "linestarts": "Psionic Resilience - If you have at least 1 hit point, at the start of your turn you gain temporary hp equal to: ",
                            "lineends": "Modifier."
                        }
                    }
                ]
            }
        },
        {
            "name": "Order of the Awakened",
            "displayname": "Order of the Awakened",
            "class": "Mystic",
            "previewtext": "The Awakened are skilled at bending minds and unleashing devastating psychic attacks, and are able to read the secrets of the world through psionic energy.",
            "level": {
                "1": [
                    {
                        "sharedclassfeaturemenu": {
                            "name": "Psionic Disciplines",
                            "selections": "2",
                            "replace": "1",
                            "class": "Mystic"
                        }
                    },
                    {
                        "skillmenu": {
                            "skills": [
                                "",
                                "Animal Handling",
                                "",
                                "Deception",
                                "",
                                "Insight",
                                "Intimidation",
                                "Investigation",
                                "",
                                "",
                                "Perception",
                                "",
                                "Persuasion",
                                "",
                                "",
                                "",
                                "",
                                ""
                            ],
                            "selections": "2",
                            "title": "Awakened"
                        }
                    }
                ],
                "3": [
                    {
                        "featuretextwithbullet": "Psionic Investigation - If you hold an object and concentrate on it for 10 minutes, you gain a few benefits:"
                    },
                    {
                        "featuretext": "- You learn basic facts about the object. You can see the last creature who handled the object, regardless of how long ago that was. "
                    },
                    {
                        "featuretext": "- You learn of any events that have happened in the last 24 hours within 20 ft of the object. You can see and hear the events from the object's perspective."
                    },
                    {
                        "featuretext": "- You can imbed a sensor within the object. As an action, you can sense the object's location and look at the object's surroundings from it's point of view. "
                    }
                ],
                "6": [
                    {
                        "featuretextwithbullet": "Psychic Surge - You can impose disadvantage on a target’s saving throw against a discipline or talent you use, but at the cost of using your psychic focus. Your focus immediately ends, and you can’t use it again until you finish a short or long rest."
                    }
                ],
                "14": [
                    {
                        "featuretextwithbullet": "Spectral Form- As an action, you can transform into a ghostly version of yourself. You have resistance to all damage, move at half speed, and can pass through objects and creatures while moving. You cant willingly stop in their space. This form lasts 10 minutes and you can use it once per long rest. "
                    }
                ]
            }
        },
        {
            "name": "Order of the Avatar",
            "displayname": "Order of the Avatar",
            "class": "Mystic",
            "previewtext": "Avatars are masters of emotion, lending hope and courage or bringing fear and disgust. ",
            "level": {
                "1": [
                    {
                        "sharedclassfeaturemenu": {
                            "name": "Psionic Disciplines",
                            "selections": "2",
                            "class": "Mystic"
                        }
                    }
                ],
                "3": [
                    {
                        "featuretextwithbullet": "Avatar of Battle- As long as you are not incapacitated, all allies within 30 feet of you gain +2 to initiative. "
                    }
                ],
                "6": [
                    {
                        "featuretextwithbullet": "Avatar of Healing- As long as you aren't incapacitated, each ally in 30 ft of you regain HP equal to your Intelligence Modifier whenever they regain HP from a Psionic Discipline."
                    }
                ],
                "14": [
                    {
                        "featuretextwithbullet": "Avatar of Speed- As long as you aren't incapacitated, all allies within 30 ft of you can dash as a bonus action. "
                    }
                ]
            }
        },
        {
            "name": "Order of the Nomad",
            "displayname": "Order of the Nomad",
            "class": "Mystic",
            "previewtext": "Nomads seek travel, exploration, and discovery. Their search of knowledge allows them to pick skills up quickly, and have an unmatched ability for travel. ",
            "level": {
                "1": [
                    {
                        "sharedclassfeaturemenu": {
                            "name": "Psionic Disciplines",
                            "selections": "2",
                            "class": "Mystic"
                        }
                    },
                    {
                        "featuretextwithbullet": "Breadth of Knowledge- After a long rest, you gain 2 proficiencies. Either 2 tools, 2 skills, 2 languages, or 1 from 2 different groups. "
                    }
                ],
                "3": [
                    {
                        "featuretextwithbullet": "Memory of One Thousand Steps- As a reaction when you are hit by an attack, you can teleport to an unoccupied space that you occupied since the start of your last turn. and the attack misses you. You may do this once per short or long rest. "
                    }
                ],
                "6": [
                    {
                        "featuretextwithbullet": "Superior Teleportation- When you use a Discipline to teleport any distance, you can increase that by 10 ft. "
                    }
                ],
                "14": [
                    {
                        "featuretextwithbullet": "Effortless Journey- You can forfeit up to 30 ft of your movement speed to instead teleport that distance. Your destination must be unoccupied and in your line of sight. "
                    }
                ]
            }
        },
        {
            "name": "Order of the Soul Knife ",
            "displayname": "Order of the Soul Knife",
            "class": "Mystic",
            "previewtext": "Soul Knives sacrificed knowledge to focus on martial techniques. They gain less Disciplines but make up for it with their deadly psychic blades. ",
            "level": {
                "1": [
                    {
                        "featuretextwithbullet": "Soul Knife- As a bonus action, you create knives of energy projecting from your fists. You cant hold anything while doing so. You can dismiss them as a bonus action. \nA soul knife is a martial melee weapon with the light and finesse properties. It deals 1d8 damage on a hit. \nAs a bonus action, you can prepare to parry and gain +2 AC until your next turn or are incapacitated."
                    }
                ],
                "3": [
                    {
                        "featuretextwithbullet": "Hone the Blade- You can spend Psi point to increase the Soul Knives' power. This bonus lasts for 10 minutes. Spending 2, 5, or 7 points grants the Knives a +1, 2, and 4 to attack and damage rolls respectively. "
                    }
                ],
                "6": [
                    {
                        "featuretextwithbullet": "Consumptive Knife- Whenever you slay a creature with a soul knife attack, you regain 2 psi points. "
                    }
                ],
                "14": [
                    {
                        "featuretextwithbullet": "Phantom Knife- As an action, make one attack with your soul knife. This attack treats the target's AC as 10. "
                    }
                ]
            }
        },
        {
            "name": "Order of the Wu Jen",
            "displayname": "Order of the Wu Jen ",
            "class": "Mystic",
            "previewtext": "Those in the Order of the Wu Jen have mastered control over the elements. ",
            "level": {
                "1": [
                    {
                        "sharedclassfeaturemenu": {
                            "name": "Psionic Disciplines",
                            "selections": "2",
                            "class": "Mystic"
                        }
                    },
                    {
                        "skillmenu": {
                            "skills": [
                                "Animal Handling",
                                "Arcana",
                                "History",
                                "Insight",
                                "Medicine",
                                "Nature",
                                "Perception",
                                "Religion",
                                "Survival"
                            ],
                            "selections": "2",
                            "title": "Hermit's Study"
                        }
                    }
                ],
                "3": [
                    {
                        "featuretextwithbullet": "Elemental Attunement- When a creature's resistance reduces the damage dealt by one of your disciplines, you can spend 1 psi point to ignore the resistance. You can't spend this point if you would go over the max psi limit for disciplines "
                    }
                ],
                "6": [
                    {
                        "featuretextwithbullet": "Arcane Dabbler- You learn 3 wizard spells of your choice and always have them prepared. They must be from 1st-3rd level. \nAs a bonus action you can spend psi points to create spell slots, the cost is: 2, 3, 5, 6, 7 to create slots of 1-5 respectively. "
                    }
                ],
                "14": [
                    {
                        "featuretextwithbullet": "Elemental Master- If you have resistance to a damage type, and are damaged by it, you can spend 2 psi points as a reaction to gain immunity to the type until the end of your next turn. "
                    }
                ]
            }
        },
        {
            "name": "Order of the Ghostslayer",
            "displayname": "Order of the Ghostslayer",
            "class": "Blood Hunter",
            "previewtext": "This order refines the secrets of blood magic for combat against the scourge of undeath.",
            "level": {
                "3": [
                    {
                        "featuretextwithbullet": "Rite of the Dawn: You learn this Esoteric Rite, which imbues a weapon with Radiant Rite damage.  If you hit an Undead creature with your Rite of the Dawn, it suffers additional Radiant damage equal to your Wisdom modifier."
                    }
                ],
                "7": [
                    {
                        "featuretextwithbullet": "Hallowed Veins: Your Blood Curses now affect any creature, regardless of their form or lack of blood."
                    }
                ],
                "11": [
                    {
                        "replacestringfromfeaturetext": {
                            "replacementtext": "As of 11th level, any creature you hit with this Rite suffers additional Radiant damage equal to your Wisdom.",
                            "find": "If you hit an Undead creature with your Rite of the Dawn, it suffers additional Radiant damage equal to your Wisdom modifier."
                        }
                    },
                    {
                        "featuretextwithbullet": "Supernal Surge: You can spend a Bonus Action to take on a swift, ghostly form. This effect lasts a number of rounds equal to your Wisdom modifier (Minimum 1). While the Surge lasts, you can make a single weapon attack as a Bonus Action on each of your turns.\n   You become spectral for the duration, allowing you to move through other creatures and objects as if they were difficult terrain. You take 1d10 Force damage if you end your turn inside an object. If the Surge end while you are inside an object, you are immediately shunted to the nearest unoccupied space that you can occupy and take Force damage equal to twice the number of get you moved.\n   You can use this feature once per short or long rest."
                    }
                ],
                "15": [
                    {
                        "featuretextwithbullet": "Gravesight: You can see in normal darkness, as well as see invisible creatures and objects, up to 30 feet."
                    }
                ],
                "18": [
                    {
                        "featuretextwithbullet": "Vengeful Spirit: Whenever you hit points drop to 0, you can choose to let your soul emerge from your body to fight on. Your body remains unconscious and subject to death saving throws per normal. At the beginning of your next turn, you manifest a spirit form in your space that picks up your weapons and continues fighting on, acting on your turn and every one of your subsequent turns under your control.\n   Your Spirit form has your physical attributes and armor class, as well as your weapons and ammunition, and can move through other creatures and objects as if they were difficult terrain. This form is immune to Cold, Necrotic, and non-magical weapon damage. Your spirit form has access to all of your abilities other than your Blood Maledict feature, and suffers no damage from your Crimson Rite feature.\n   If your spirit form takes any damage, your body dies, or you regain any hit points, your Spirit Form vanishes. It drops your weapons in its space."
                    }
                ]
            }
        },
        {
            "name": "Order of the Profane Soul",
            "displayname": "Order of the Profane Soul",
            "class": "Blood Hunter",
            "previewtext": "You've made a pact with an Otherworldly Patron to gain Arcana knowledge and power.",
            "spellprogression": "third",
            "spellcastingability": "wisdom",
            "level": {
                "3": [
                    {
                        "menu": {
                            "name": "Otherworldly Patron",
                            "title": "Otherworldly Patron",
                            "selections": "1",
                            "hidepreviewtext": "true",
                            "entries": [
                                {
                                    "name": "The Archfey",
                                    "effects": [
                                        {
                                            "addclassfeatureflag": "Archfey"
                                        }
                                    ]
                                },
                                {
                                    "name": "The Fiend",
                                    "effects": [
                                        {
                                            "addclassfeatureflag": "Fiend"
                                        }
                                    ]
                                },
                                {
                                    "name": "The Great Old One",
                                    "effects": [
                                        {
                                            "addclassfeatureflag": "Old_One"
                                        }
                                    ]
                                },
                                {
                                    "name": "The Undying",
                                    "effects": [
                                        {
                                            "addclassfeatureflag": "Undying"
                                        }
                                    ]
                                }
                            ]
                        }
                    },
                    {
                        "featuretextwithbullet": "Pact Magic: You've struck a bargain with an Otherworldly Patron and gained the ability to cast spells. You know 2 Cantrips of your choice from the Warlock spell list."
                    },
                    {
                        "ifthenelse": {
                            "if": [
                                {
                                    "and": []
                                }
                            ],
                            "then": [
                                {
                                    "featuretextwithbullet": "Rite Focus: Your weapon becomes core to your pact with your Patron. While you have an active Rite, you can use your weapon as a spellcasting focus. In addition, if you deal Rite damage to a creature, that creature loses any ½ or ¾ cover bonuses, as well as invisibility, until the start of your next turn."
                                }
                            ]
                        }
                    },
                    {
                        "ifthenelse": {
                            "if": [
                                {
                                    "and": []
                                }
                            ],
                            "then": [
                                {
                                    "featuretextwithbullet": "Rite Focus: Your weapon becomes core to your pact with your Patron. While you have an active Rite, you can use your weapon as a spellcasting focus. In addition, while using the Rite of Flame, if you still a 1 on your Rite damage, you may reroll the die. You may re only once per attack."
                                }
                            ]
                        }
                    },
                    {
                        "ifthenelse": {
                            "if": [
                                {
                                    "and": []
                                }
                            ],
                            "then": [
                                {
                                    "featuretextwithbullet": "Rite Focus: Your weapon becomes core to your pact with your Patron. While you have an active Rite, you can use your weapon as a spellcasting focus. In addition, whenever you deal a critical hit to a creature, that creature must make a Wisdom saving throw against your spell DC. On a failure, the creature is Frightened of you until the end of your next turn."
                                }
                            ]
                        }
                    },
                    {
                        "ifthenelse": {
                            "if": [
                                {
                                    "and": []
                                }
                            ],
                            "then": [
                                {
                                    "featuretextwithbullet": "Rite Focus: Your weapon becomes core to your pact with your Patron. While you have an active Rite, you can use your weapon as a spellcasting focus. In addition, whenever you reduce a hostile creature to 0 hit points with a weapon attack, and kill it, you regain hit points equal to your Crimson Rite damage die."
                                }
                            ]
                        }
                    }
                ],
                "7": [
                    {
                        "featuretextwithbullet": "Mystic Frenzy: When you use your action to cast a cantrip, you can make one weapon attack as a bonus action."
                    },
                    {
                        "ifthenelse": {
                            "if": [
                                {
                                    "and": []
                                }
                            ],
                            "then": [
                                {
                                    "featuretextwithbullet": "Revealed Arcana: You are granted the ability to cast Blur with a spell slot once per long rest."
                                },
                                {
                                    "addspell": {
                                        "name": "Blur (Revealed Arcana)",
                                        "spelllevel": "2"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "ifthenelse": {
                            "if": [
                                {
                                    "and": []
                                }
                            ],
                            "then": [
                                {
                                    "featuretextwithbullet": "Revealed Arcana: You are granted the ability to cast Scorching Ray with a spell slot once per long rest."
                                },
                                {
                                    "addspell": {
                                        "name": "Scorching Ray (Revealed Arcana)",
                                        "spelllevel": "2"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "ifthenelse": {
                            "if": [
                                {
                                    "and": []
                                }
                            ],
                            "then": [
                                {
                                    "featuretextwithbullet": "Revealed Arcana: You are granted the ability to cast Detect Thoughts with a spell slot once per long rest."
                                },
                                {
                                    "addspell": {
                                        "name": "Detect Thoughts (Revealed Arcana)",
                                        "spelllevel": "2"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "ifthenelse": {
                            "if": [
                                {
                                    "and": []
                                }
                            ],
                            "then": [
                                {
                                    "featuretextwithbullet": "Revealed Arcana: You are granted the ability to cast Blindness\/Deafness with a spell slot once per long rest."
                                },
                                {
                                    "addspell": {
                                        "name": "Blindness\/Deafness (Revealed Arcana)",
                                        "spelllevel": "2"
                                    }
                                }
                            ]
                        }
                    }
                ],
                "11": [
                    {
                        "featuretextwithbullet": "Diabolic Channel: As an Action, you can imbue your Rite-enhanced weapon with one spell you can cast (or that is already active), then make a single attack with that weapon. If the attack hits, all spell attack rolls for the imbued spell hit the target automatically and are considered part of the single weapon attack. The target takes weapon damage, and is subject to the effects of the spell, expending a spell slot accordingly. If the attack has Advantage, the target's initial Saving Throw against the spell has Disadvantage. If the attack misses, the spell has no effect. Area spells originate from the target's space.\n   The spell must be 1st-level or higher, have a casting time of 1 Action, or require an Action to activate an already active concentration spell."
                    }
                ],
                "15": [
                    {
                        "ifthenelse": {
                            "if": [
                                {
                                    "and": []
                                }
                            ],
                            "then": [
                                {
                                    "featuretextwithbullet": "Unsealed Arcana: You are granted the ability to cast Slow with a spell slot once per long rest."
                                },
                                {
                                    "addspell": {
                                        "name": "Slow (Unsealed Arcana)",
                                        "spelllevel": "3"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "ifthenelse": {
                            "if": [
                                {
                                    "and": []
                                }
                            ],
                            "then": [
                                {
                                    "featuretextwithbullet": "Unsealed Arcana: You are granted the ability to cast Fireball with a spell slot once per long rest."
                                },
                                {
                                    "addspell": {
                                        "name": "Fireball (Unsealed Arcana)",
                                        "spelllevel": "3"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "ifthenelse": {
                            "if": [
                                {
                                    "and": []
                                }
                            ],
                            "then": [
                                {
                                    "featuretextwithbullet": "Unsealed Arcana: You are granted the ability to cast Haste with a spell slot once per long rest."
                                },
                                {
                                    "addspell": {
                                        "name": "Haste (Unsealed Arcana)",
                                        "spelllevel": "3"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "ifthenelse": {
                            "if": [
                                {
                                    "and": []
                                }
                            ],
                            "then": [
                                {
                                    "featuretextwithbullet": "Unsealed Arcana: You are granted the ability to cast Bestow Curse with a spell slot once per long rest."
                                },
                                {
                                    "addspell": {
                                        "name": "Bestow Curse (Unsealed Arcana)",
                                        "spelllevel": "3"
                                    }
                                }
                            ]
                        }
                    }
                ],
                "18": [
                    {
                        "featuretextwithbullet": "Soul Syphon: When you reduce a creature to 0 hit points with an attack, kill the creature, and they have a CR15 or higher, you recover an expended spell slot."
                    }
                ]
            }
        },
        {
            "name": "Order of the Mutant",
            "displayname": "Order of the Mutant",
            "class": "Blood Hunter",
            "previewtext": "Focuses on brewing toxic elixirs to modify their capabilities in battle and allowing their blood to become Mutants.",
            "level": {
                "3": [
                    {
                        "featuretextwithbullet": "Mutagen Craft: You can take a Short Rest to concoct a single Mutagen. You can choose 3 Mutagen Formulas that you know at level 3. You learn additional Formulas as you gain levels.\n   Consuming a single Mutagen requires a Bonus Action, and the effects (including side effects) last until you take a Short or Long Rest to meditate and flush the toxins from your system.\nMutagens are designed for your biology. They have no effect on Large or Larger creatures, and only impart the Side Effects on other Medium or smaller creatures that sink the entire mutagen. They are also unstable by nature, losing their potency over time and becoming inert if not swallowed before you finish your next Short or Long Rest.\n   Your body will begin to better utilize the toxins you instill it with as you grow in power. These advancing migrations may be signified but a Mutation Score (Blood Hunter level ÷ 4, rounded up)."
                    },
                    {
                        "sharedclassfeaturemenu": {
                            "name": "Mutagen Formulae",
                            "selections": "3",
                            "class": "Blood Hunter"
                        }
                    },
                    {
                        "setresource": {
                            "name": "Mutagen Score",
                            "amount": {
                                "divide": [
                                    {
                                        "classlevel": "Blood Hunter"
                                    },
                                    "4"
                                ]
                            },
                            "displayname": "Mutagen Score"
                        }
                    },
                    {
                        "showresource": "Mutagen Score"
                    }
                ],
                "7": [
                    {
                        "storestring": {
                            "name": "mutagen_craft",
                            "text": "Advanced Mutagen Craft: When you take a Short Rest to concoct a mutagen, you can now create 2. Mutagens must be different Formulas and can be interested with overlapping effects that last until you finish your next Short or Long Rest. Each Mutagen still takes a separate Action to imbibe. At 15th level, you can create 3 Mutagens on a Short Rest."
                        }
                    },
                    {
                        "featuretextwithbullet": {
                            "getstoredstring": "mutagen_craft"
                        }
                    },
                    {
                        "sharedclassfeaturemenu": {
                            "name": "Mutagen Formulae",
                            "class": "Blood Hunter"
                        }
                    }
                ],
                "11": [
                    {
                        "featuretextwithbullet": "Strange Metabolism: You can use a Bonus Action to instill a burst of adrenaline to temporarily resist the negative effects of a Mutagen. You can choose to ignore the side effect of a Mutagen for 1 minute. Once you use this feature, you must finish a Short or Long Rest."
                    },
                    {
                        "sharedclassfeaturemenu": {
                            "name": "Mutagen Formulae",
                            "class": "Blood Hunter"
                        }
                    }
                ],
                "15": [
                    {
                        "replacestringfromfeaturetext": {
                            "replacementtext": "Advanced Mutagen Craft: When you take a Short Rest to concoct a mutagen, you can now create 3. Mutagens must be different Formulas and can be interested with overlapping effects that last until you finish your next Short or Long Rest. Each Mutagen still takes a separate Action to imbibe.",
                            "find": {
                                "getstoredstring": "mutagen_craft"
                            }
                        }
                    },
                    {
                        "sharedclassfeaturemenu": {
                            "name": "Mutagen Formulae",
                            "class": "Blood Hunter"
                        }
                    }
                ],
                "18": [
                    {
                        "featuretextwithbullet": "Exalted Mutation: Your body has begun producing one of your toxins naturally. Choose one of your known Formulas. You gain the benefits and side effects of this Mutagen permanently. You cannot change this choice of formula after this feature is acquired."
                    },
                    {
                        "sharedclassfeaturemenu": {
                            "name": "Mutagen Formulae",
                            "class": "Blood Hunter"
                        }
                    }
                ]
            }
        },
        {
            "name": "Order of the Lycan",
            "displayname": "Order of the Lycan",
            "class": "Blood Hunter",
            "previewtext": "Grants a lycanthropic hybrid form with enhanced physical prowess, unnatural resilience and razor sharp claws.",
            "level": {
                "3": [
                    {
                        "featuretextwithbullet": "Heightened Senses: You gain Advantage on Wisdom (Perception) checks that rely on hearing or smell."
                    },
                    {
                        "storestring": {
                            "name": "feral_might",
                            "text": "\n   - Feral Might: You gain a Bonus to melee damage rolls equal to half your proficiency bonus (rounded down). You also have Advantage on Strength checks and Strength Saving Throws."
                        }
                    },
                    {
                        "storestring": {
                            "name": "resilient_hide",
                            "text": "\n   - Resilient Hide: You have resistance to Bludgeoning, Piercing, and Slashing damage from nonmagical weapons that aren't Silvered. While you are not wearing heavy armor, you gain a +1 Bonus to your AC."
                        }
                    },
                    {
                        "storestring": {
                            "name": "predatory_strikes",
                            "text": "\n   - Predatory Strikes: Your Unarmed Strikes are considered a single weapon in regards to your Crimson Rite feature. Your Unarmed Strikes can use Dexterity instead of Strength for attack and damage rolls. When you use the Attack Action with an Unarmed Strike, you can make another Unarmed Strike as a Bonus Action.\n   Your Unarmed Strikes deal 1d6 Slashing damage. This die increases as you level."
                        }
                    },
                    {
                        "storestring": {
                            "name": "cursed_weakness",
                            "text": "\n   - Cursed Weakness: You have vulnerability to same from Silvered weapons."
                        }
                    },
                    {
                        "storestring": {
                            "name": "bloodlust",
                            "text": "\n   - Bloodlust: At the start of your turn, if you've taken any damage since the beginning of your last turn, you must make a Wisdom Saving Throw to maintain control. The DC equals 10, or 15 if you have no more than half your hit points left. On a failed save, you must move directly towards the nearest creature to you and use the Attack Action against that creature. If there is more than one possible target, the DM chooses the target. Your turn immediately ends and you regain control. If you are under an effect that prevents you from concentrating (like a Barbarian's Rage feature), you automatically fail this Saving Throw."
                        }
                    },
                    {
                        "featuretextwithbullet": {
                            "combinestrings": [
                                "Hybrid Transformation: As an Action, you can transform into your lycanthropic Hybrid form. This form lasts for 10 minutes. You can speak, use equipment, and wear armor in this form. You can revert to your normal form earlier by using an Action on your turn. You automatically revert to your normal form of you fall unconscious, drop to 0 hit points, or die. You can use this feature twice. You regain expended uses when you finish a Short or Long Rest.\n   While transformed, you gain the following features:",
                                {
                                    "getstoredstring": "feral_might"
                                },
                                {
                                    "getstoredstring": "resilient_hide"
                                },
                                {
                                    "getstoredstring": "predatory_strikes"
                                },
                                {
                                    "getstoredstring": "cursed_weakness"
                                },
                                {
                                    "getstoredstring": "bloodlust"
                                }
                            ]
                        }
                    },
                    {
                        "setresource": {
                            "name": "Unarmed Die",
                            "diesize": "6",
                            "amount": "1",
                            "displayname": "Unarmed Die"
                        }
                    },
                    {
                        "showresource": "Unarmed Die"
                    }
                ],
                "7": [
                    {
                        "featuretextwithbullet": "Stalker's Prowess: Your Speed increases by 10 feet. You also can add 10 feet to your long jump distance, and 5 feet to your high jump distance. In addition, your Hybrid Form gains Improved Predatory Strikes."
                    },
                    {
                        "setspeedbonus": "10"
                    },
                    {
                        "storestring": {
                            "name": "imp_predatory_strikes",
                            "text": "\n   - Predatory Strikes: Your Unarmed Strikes are considered a single weapon in regards to your Crimson Rite feature. Your Unarmed Strikes can use Dexterity instead of Strength for attack and damage rolls. When you use the Attack Action with an Unarmed Strike, you can make another Unarmed Strike as a Bonus Action.\n   Your Unarmed Strikes deal 1d6 Slashing damage. This die increases as you level.\n   - Improved Predatory Strikes: When you have an active Rite while in your Hybrid Form, your Unarmed Strikes are considered magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage."
                        }
                    },
                    {
                        "replacestringfromfeaturetext": {
                            "replacementtext": {
                                "getstoredstring": "imp_predatory_strikes"
                            },
                            "find": "\n   - Predatory Strikes: Your Unarmed Strikes are considered a single weapon in regards to your Crimson Rite feature. Your Unarmed Strikes can use Dexterity instead of Strength for attack and damage rolls. When you use the Attack Action with an Unarmed Strike, you can make another Unarmed Strike as a Bonus Action.\n   Your Unarmed Strikes deal 1d6 Slashing damage. This die increases as you level."
                        }
                    }
                ],
                "11": [
                    {
                        "featuretextwithbullet": "Advanced Transformation: You can now transform into your Hybrid Form as a Bonus Action, and your Hybrid Transformation now lasts 30 minutes.  In addition, you gain Improved Resilient Hide and Feral Precision."
                    },
                    {
                        "storestring": {
                            "name": "imp_resilient_hide",
                            "text": "\n   - Resilient Hide: You have resistance to Bludgeoning, Piercing, and Slashing damage from nonmagical weapons that aren't Silvered. While you are not wearing heavy armor, you gain a +1 Bonus to your AC.\n   - Improved Resilient Hide: While you have an active Crimson Rite, you gain resistance to the damage type of your chosen Rite."
                        }
                    },
                    {
                        "storestring": {
                            "name": "feral_precision",
                            "text": "\n   - Predatory Strikes: Your Unarmed Strikes are considered a single weapon in regards to your Crimson Rite feature. Your Unarmed Strikes can use Dexterity instead of Strength for attack and damage rolls. When you use the Attack Action with an Unarmed Strike, you can make another Unarmed Strike as a Bonus Action.\n   Your Unarmed Strikes deal 1d6 Slashing damage. This die increases as you level.\n   - Improved Predatory Strikes: When you have an active Rite while in your Hybrid Form, your Unarmed Strikes are considered magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.\n   - Feral Precision: You gain a +2 Bonus to melee Attack Rolls made with your Unarmed Strikes."
                        }
                    },
                    {
                        "replacestringfromfeaturetext": {
                            "replacementtext": {
                                "getstoredstring": "imp_resilient_hide"
                            },
                            "find": "\n   - Resilient Hide: You have resistance to Bludgeoning, Piercing, and Slashing damage from nonmagical weapons that aren't Silvered. While you are not wearing heavy armor, you gain a +1 Bonus to your AC."
                        }
                    },
                    {
                        "replacestringfromfeaturetext": {
                            "replacementtext": {
                                "getstoredstring": "feral_precision"
                            },
                            "find": "\n   - Predatory Strikes: Your Unarmed Strikes are considered a single weapon in regards to your Crimson Rite feature. Your Unarmed Strikes can use Dexterity instead of Strength for attack and damage rolls. When you use the Attack Action with an Unarmed Strike, you can make another Unarmed Strike as a Bonus Action.\n   Your Unarmed Strikes deal 1d6 Slashing damage. This die increases as you level.\n   - Improved Predatory Strikes: When you have an active Rite while in your Hybrid Form, your Unarmed Strikes are considered magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage."
                        }
                    }
                ],
                "15": [
                    {
                        "featuretextwithbullet": "Iron Volition: Whenever you make a Wisdom Saving Throw to maintain control of your Hybrid Form, you do so with Advantage. In addition, your Hybrid Form gains the Pack Hunter feature."
                    },
                    {
                        "storestring": {
                            "name": "pack_hunter",
                            "text": "\n   - Bloodlust: At the start of your turn, if you've taken any damage since the beginning of your last turn, you must make a Wisdom Saving Throw to maintain control. The DC equals 10, or 15 if you have no more than half your hit points left. On a failed save, you must move directly towards the nearest creature to you and use the Attack Action against that creature. If there is more than one possible target, the DM chooses the target. Your turn immediately ends and you regain control. If you are under an effect that prevents you from concentrating (like a Barbarian's Rage feature), you automatically fail this Saving Throw.\n   - Pack Hunter: You have Advantage on an Attack Roll against a creature if at least one of your allies is within 5 feet of the creature and the ally is not incapacitated."
                        }
                    },
                    {
                        "replacestringfromfeaturetext": {
                            "replacementtext": {
                                "getstoredstring": "pack_hunter"
                            },
                            "find": "\n   - Bloodlust: At the start of your turn, if you've taken any damage since the beginning of your last turn, you must make a Wisdom Saving Throw to maintain control. The DC equals 10, or 15 if you have no more than half your hit points left. On a failed save, you must move directly towards the nearest creature to you and use the Attack Action against that creature. If there is more than one possible target, the DM chooses the target. Your turn immediately ends and you regain control. If you are under an effect that prevents you from concentrating (like a Barbarian's Rage feature), you automatically fail this Saving Throw."
                        }
                    }
                ],
                "18": [
                    {
                        "replacestringfromfeaturetext": {
                            "replacementtext": "or die. You can use this feature three times. You regain",
                            "find": "or die. You can use this feature twice. You regain"
                        }
                    },
                    {
                        "featuretextwithbullet": "Hybrid Transformation Mastery: You can now use your Hybrid Transformation three times between rests.  You also gain Blood Curse of the Howl for your Blood Malediction feature. This does not count against your Blood Curses known."
                    },
                    {
                        "featuretextwithbullet": "Blood Curse of the Howl: As an Action, you Howl at a creature within 30 feet, chilling their blood and stunning them with fear. If the target creature can hear you, they must succeed on a Wisdom Saving Throw (DC = 8 + Proficiency + Wisdom modifier) or be stunned until the end of your next turn.\n   Amplify: This Curse affects every creature within 15 feet of you."
                    }
                ]
            }
        },
        {
            "name": "Telepathy ",
            "displayname": "Telepathy ",
            "class": "Vampire",
            "previewtext": "Gain the ability to hear the thoughts of others, and manipulate them.",
            "spellprogression": "full",
            "spellcastingability": "constitution",
            "level": {
                "4": [
                    {
                        "featuretextwithbullet": "Telepathy \nYou gain the ability to hear thoughts of those around you and impart your own thoughts into minds.\nYou have advantage on all insight checks"
                    },
                    {
                        "featuretextwithbullet": "you may cast spells 3 times per day"
                    },
                    {
                        "addspell": {
                            "name": "Sending",
                            "spelllevel": "3"
                        }
                    }
                ],
                "9": [
                    {
                        "addspell": {
                            "name": "Mass suggestion",
                            "spelllevel": "6"
                        }
                    },
                    {
                        "featuretextwithbullet": "\nYou gain new spells\nyou may cast spells 5 times per day"
                    },
                    {
                        "addspell": {
                            "name": "Power Word Pain",
                            "spelllevel": "7"
                        }
                    }
                ],
                "11": [
                    {
                        "addspell": {
                            "name": "antipathy\/sympathy",
                            "spelllevel": "8"
                        }
                    },
                    {
                        "featuretextwithbullet": "You gain a new spell\nyou may cast your spells 7 times per day"
                    }
                ],
                "14": [
                    {
                        "addspell": {
                            "name": "Telepathy",
                            "spelllevel": "8"
                        }
                    },
                    {
                        "featuretextwithbullet": "Telepathy\nyou gain access to the telepathy spell \nyou may cast spells 9 times per day"
                    }
                ],
                "20": [
                    {
                        "featuretextwithbullet": "Human Cattle\nYou twist the mind of a mortal and make them your thrall. they maintain the abilities they had before the ritual.\n\nas a ritual, across 6 hours and the cost of 2000 gp, you alter the mind of a humanoid creature. this creature will follow any orders given and will even commit harm to itself if ordered to. they will continue any task they are orded to do until they have completed it or died. once finished with a task they will seek you out to recieve new orders. you may feed on them to revive all your blood points. you may have a number of thralls equal to half your vampire level + charisma mod+ proficiency bonus."
                    }
                ]
            }
        },
        {
            "name": "Telekinesis ",
            "displayname": "Telekinesis ",
            "class": "Vampire",
            "previewtext": "Gain the power to move objects with your mind, and even play puppet master to the mortals",
            "spellprogression": "full",
            "spellcastingability": "constitution",
            "level": {
                "4": [
                    {
                        "addspell": {
                            "name": "gust",
                            "spelllevel": "0"
                        }
                    },
                    {
                        "addspell": {
                            "name": "mold earth",
                            "spelllevel": "0"
                        }
                    },
                    {
                        "addspell": {
                            "name": "Catapult ",
                            "spelllevel": "1"
                        }
                    },
                    {
                        "addspell": {
                            "name": "Jump",
                            "spelllevel": "1"
                        }
                    },
                    {
                        "featuretextwithbullet": "Telekinesis\nYou notice as you move your hand a force seems to move objects nearby. you learn to control this power.\nYou gain new spells and can cast them with only somatic components 3 times per day."
                    }
                ],
                "9": [
                    {
                        "addspell": {
                            "name": "feather fall",
                            "spelllevel": "0"
                        }
                    },
                    {
                        "addspell": {
                            "name": "slow",
                            "spelllevel": "3"
                        }
                    },
                    {
                        "addspell": {
                            "name": "Erupting earth",
                            "spelllevel": "3"
                        }
                    },
                    {
                        "featuretextwithbullet": "Telekinesis \nNew spells are available to you.\nYou can now cast your spells 5 times per day"
                    }
                ],
                "11": [
                    {
                        "addspell": {
                            "name": "Control winds",
                            "spelllevel": "5"
                        }
                    },
                    {
                        "addspell": {
                            "name": "Telekinesis ",
                            "spelllevel": "5"
                        }
                    },
                    {
                        "addspell": {
                            "name": "Move Earth",
                            "spelllevel": "6"
                        }
                    },
                    {
                        "featuretextwithbullet": "Telekinesis \nNew spells are available to you.\nyou can now cast your spells 7 times per day"
                    }
                ],
                "14": [
                    {
                        "addspell": {
                            "name": "Reverse Gravity ",
                            "spelllevel": "7"
                        }
                    },
                    {
                        "featuretextwithbullet": "Telekinesis \nNew spells are available to you.\nYou can now cast your spells 9 times per day"
                    }
                ],
                "20": [
                    {
                        "addspell": {
                            "name": "Time Stop",
                            "spelllevel": "9"
                        }
                    },
                    {
                        "featuretextwithbullet": "Your telekinetic abilities are so powerful you are able to freeze several people in place while you move freely. \n\nyou can cast the time stop spell with only a somatic component 1 time per day"
                    }
                ]
            }
        }
    ],
    "sharedclassfeatures": [],
    "sharedclassfeaturemenus": [
        {
            "name": "Eldritch Invocations",
            "title": "Choose Invocations",
            "selections": "2",
            "advancedfeaturetext": {
                "useentrypreviewtext": "true",
                "usebullet": "true",
                "prefixwithentryname": "true",
                "prefixseperator": "- ",
                "removefeaturetextifreplaced": "true"
            },
            "entries": [
                {
                    "name": "Agonizing Blast",
                    "displayname": "Agonizing Blast",
                    "previewtext": "When you cast Eldritch Blast, add your Charisma modifier on hit."
                },
                {
                    "name": "Armor of Shadows",
                    "displayname": "Armor of Shadows",
                    "previewtext": "You can cast Mage Armor at will.",
                    "effects": [
                        {
                            "addspell": {
                                "name": "Mage Armor",
                                "spelllevel": "1"
                            }
                        }
                    ]
                },
                {
                    "name": "Ascendant Step",
                    "displayname": "Ascendant Step",
                    "previewtext": " You can cast Levitate on yourself at will.",
                    "prerequisites": [
                        {
                            "greaterthanorequal": {
                                "first": {
                                    "classlevel": "Warlock"
                                },
                                "second": "9"
                            }
                        }
                    ],
                    "hideifprerequisitesnotmet": "true",
                    "effects": [
                        {
                            "addspell": {
                                "name": "Levitate",
                                "spelllevel": "2"
                            }
                        }
                    ]
                },
                {
                    "name": "Beast Speech",
                    "displayname": "Beast Speech",
                    "previewtext": "You can cast Speak With Animals at will.",
                    "effects": [
                        {
                            "addspell": {
                                "name": "Speak With Animals",
                                "spelllevel": "1"
                            }
                        }
                    ]
                },
                {
                    "name": "Beguiling Influence",
                    "displayname": "Beguiling Influence",
                    "previewtext": "You gain proficiency in Deception and Persuasion. (If you already were, go pick another skill",
                    "effects": [
                        {
                            "setskillproficiency": {
                                "deception": "true"
                            }
                        },
                        {
                            "setskillproficiency": {
                                "persuasion": "true"
                            }
                        }
                    ]
                },
                {
                    "name": "Bewitching Whisper",
                    "displayname": "Bewitching Whisper",
                    "previewtext": "You can cast Compulsion once per long rest using a Warlock spell slot. ",
                    "prerequisites": [
                        {
                            "greaterthanorequal": {
                                "first": {
                                    "classlevel": "Warlock"
                                },
                                "second": "7"
                            }
                        }
                    ],
                    "hideifprerequisitesnotmet": "true",
                    "effects": [
                        {
                            "addspell": {
                                "name": "Compulsion",
                                "spelllevel": "4"
                            }
                        }
                    ]
                },
                {
                    "name": "Book of Ancient Secrets",
                    "displayname": "Book of Ancient Secrets",
                    "previewtext": "Choose 2 ritual spells from any spell list. They don't count against your spell number and you can cast them as rituals. You can now also cast Warlock spells you know as rituals if they are eligible.\n You can add new ritual spells you find if their spell level is half your Warlock level rounded up. It take 2 hours and 50 gp per spell level.",
                    "hideifprerequisitesnotmet": "true"
                },
                {
                    "name": "Chains of Carceri",
                    "displayname": "Chains of Cerceri",
                    "previewtext": "You can cost Hold Monster at wil against celestials, fiends, or elementals. You must take a long rest before casting it on the same creature again.",
                    "prerequisites": [
                        {
                            "and": [
                                {
                                    "greaterthanorequal": {
                                        "first": {
                                            "classlevel": "Warlock"
                                        },
                                        "second": "15"
                                    }
                                }
                            ]
                        }
                    ],
                    "hideifprerequisitesnotmet": "true",
                    "effects": [
                        {
                            "addspell": {
                                "name": "Hold Monster",
                                "spelllevel": "5"
                            }
                        }
                    ]
                },
                {
                    "name": "Devil's Sight",
                    "displayname": "Devil's Sight",
                    "previewtext": "You can see in both magical and nonmagical darkness up to 120 ft.",
                    "hideifprerequisitesnotmet": "true"
                },
                {
                    "name": "Dreadful Word",
                    "displayname": "Dreadful Word",
                    "previewtext": "You can cast Confusion once per long rest using a Warlock spell slot.",
                    "prerequisites": [
                        {
                            "greaterthanorequal": {
                                "first": {
                                    "classlevel": "Warlock"
                                },
                                "second": "7"
                            }
                        }
                    ],
                    "hideifprerequisitesnotmet": "true",
                    "effects": [
                        {
                            "addspell": {
                                "name": "Confusion",
                                "spelllevel": "4"
                            }
                        }
                    ]
                },
                {
                    "name": "Eldritch Sight",
                    "displayname": "Eldrith Sight",
                    "previewtext": "You can cast Detect Magic at will.",
                    "effects": [
                        {
                            "addspell": {
                                "name": "Detect Magic",
                                "spelllevel": "1"
                            }
                        }
                    ]
                },
                {
                    "name": "Eldritch Spear",
                    "displayname": "Eldritch Spear",
                    "previewtext": "The range on Eldritch Blast is now 300 ft."
                },
                {
                    "name": "Eyes of the Rune Keeper",
                    "displayname": "Eyes of the Rune Keeper",
                    "previewtext": "You can read all writing."
                },
                {
                    "name": "Fiendish Vigor",
                    "displayname": "Fiendish Vigor",
                    "previewtext": "You can cast False Life on yourself at will as a 1st level spell.",
                    "effects": [
                        {
                            "addspell": {
                                "name": "False Life",
                                "spelllevel": "1"
                            }
                        }
                    ]
                },
                {
                    "name": "Gaze of Two Minds",
                    "displayname": "Gaze of Two Minds",
                    "previewtext": "As an action, touch a humanoid to perceive through its senses until the end of your next turn. You can use an action on each turn after to maintain it. You are blind and deaf to your own senses during it."
                },
                {
                    "name": "Lifedrinker",
                    "displayname": "Lifedrinker",
                    "previewtext": "When you hit a creature with your pact weapon, they take extra necrotic damage equal to your Cha mod (minimum 1).",
                    "prerequisites": [
                        {
                            "and": [
                                {
                                    "greaterthanorequal": {
                                        "first": {
                                            "classlevel": "Warlock"
                                        },
                                        "second": "12"
                                    }
                                }
                            ]
                        }
                    ],
                    "hideifprerequisitesnotmet": "true"
                },
                {
                    "name": "Mask of Many Faces",
                    "displayname": "Mask of Many Faces",
                    "previewtext": "You can cast Disguise Self at will.",
                    "effects": [
                        {
                            "addspell": {
                                "name": "Disguise",
                                "spelllevel": "1"
                            }
                        }
                    ]
                },
                {
                    "name": "Master of Myriad Forms",
                    "displayname": "Master of Myriad Forms",
                    "previewtext": "You can cast Alter Self at will.",
                    "prerequisites": [
                        {
                            "greaterthanorequal": {
                                "first": {
                                    "classlevel": "Warlock"
                                },
                                "second": "15"
                            }
                        }
                    ],
                    "hideifprerequisitesnotmet": "true",
                    "effects": [
                        {
                            "addspell": {
                                "name": "Alter Self",
                                "spelllevel": "2"
                            }
                        }
                    ]
                },
                {
                    "name": "Minions of Chaos",
                    "displayname": "Minions of Chaos",
                    "previewtext": "You can cast Conjure Elemental once per long rest using a Warlock spell slot.",
                    "prerequisites": [
                        {
                            "greaterthanorequal": {
                                "first": {
                                    "classlevel": "Warlock"
                                },
                                "second": "9"
                            }
                        }
                    ],
                    "hideifprerequisitesnotmet": "true",
                    "effects": [
                        {
                            "addspell": {
                                "name": "Conjure Elemental",
                                "spelllevel": "5"
                            }
                        }
                    ]
                },
                {
                    "name": "Mire the Mind",
                    "displayname": "Mire the Mind",
                    "previewtext": "You can cast Slow once per long rest using a Warlock spell slot.",
                    "prerequisites": [
                        {
                            "greaterthanorequal": {
                                "first": {
                                    "classlevel": "Warlock"
                                },
                                "second": "5"
                            }
                        }
                    ],
                    "hideifprerequisitesnotmet": "true",
                    "effects": [
                        {
                            "addspell": {
                                "name": "Slow",
                                "spelllevel": "3"
                            }
                        }
                    ]
                },
                {
                    "name": "Misty Visions",
                    "displayname": "Misty Visions",
                    "previewtext": "You can cast Silent Image at will.",
                    "effects": [
                        {
                            "addspell": {
                                "name": "Silent Image",
                                "spelllevel": "1"
                            }
                        }
                    ]
                },
                {
                    "name": "One With Shadows",
                    "displayname": "One With Shadows",
                    "previewtext": "When you are in dim light or darkness, you can use your action to become invisible. This lasts until you move or take an action or reaction."
                },
                {
                    "name": "Otherworldly Leap",
                    "displayname": "Otherworldly Leap",
                    "previewtext": "You can cast Jump on yourself at will.",
                    "prerequisites": [
                        {
                            "greaterthanorequal": {
                                "first": {
                                    "classlevel": "Warlock"
                                },
                                "second": "9"
                            }
                        }
                    ],
                    "hideifprerequisitesnotmet": "true",
                    "effects": [
                        {
                            "addspell": {
                                "name": "Jump",
                                "spelllevel": "1"
                            }
                        }
                    ]
                },
                {
                    "name": "Repelling Blast",
                    "displayname": "Repelling BLast",
                    "previewtext": "When you hit a creature with Eldritch Blast, you can push them back 10 ft."
                },
                {
                    "name": "Sculpter of Flesh",
                    "displayname": "Sculpter of Flesh",
                    "previewtext": "You can cast Polymorph once per long rest using a Warlock spell slot.",
                    "prerequisites": [
                        {
                            "greaterthanorequal": {
                                "first": {
                                    "classlevel": "Warlock"
                                },
                                "second": "7"
                            }
                        }
                    ],
                    "hideifprerequisitesnotmet": "true",
                    "effects": [
                        {
                            "addspell": {
                                "name": "Polymorph",
                                "spelllevel": "4"
                            }
                        }
                    ]
                },
                {
                    "name": "Sign of Ill Omen",
                    "displayname": "Sign of Ill Omen",
                    "previewtext": "You can cast Bestow Curse once per long rest using a Warlock spell slot.",
                    "prerequisites": [
                        {
                            "greaterthanorequal": {
                                "first": {
                                    "classlevel": "Warlock"
                                },
                                "second": "5"
                            }
                        }
                    ],
                    "hideifprerequisitesnotmet": "true",
                    "effects": [
                        {
                            "addspell": {
                                "name": "Bestow Curse",
                                "spelllevel": "3"
                            }
                        }
                    ]
                },
                {
                    "name": "Thief of Five Fates",
                    "displayname": "Thief of Five Fates",
                    "previewtext": "You can cast Bane once per long rest using a Warlock spell slot.",
                    "effects": [
                        {
                            "addspell": {
                                "name": "Bane",
                                "spelllevel": "1"
                            }
                        }
                    ]
                },
                {
                    "name": "Thirsting Blade",
                    "displayname": "Thirsting Blade",
                    "previewtext": "You can attack with your pact weapon twice, instead of once, when you take the Attack action on your turn.",
                    "prerequisites": [
                        {
                            "and": [
                                {
                                    "greaterthanorequal": {
                                        "first": {
                                            "classlevel": "Warlock"
                                        },
                                        "second": "5"
                                    }
                                }
                            ]
                        }
                    ],
                    "hideifprerequisitesnotmet": "true"
                },
                {
                    "name": "Visions of Distant Realms",
                    "displayname": "Visions of Distant Realms",
                    "previewtext": "You can cast Arcane Eye at will.",
                    "prerequisites": [
                        {
                            "greaterthanorequal": {
                                "first": {
                                    "classlevel": "Warlock"
                                },
                                "second": "15"
                            }
                        }
                    ],
                    "hideifprerequisitesnotmet": "true",
                    "effects": [
                        {
                            "addspell": {
                                "name": "Arcane Eye",
                                "spelllevel": "4"
                            }
                        }
                    ]
                },
                {
                    "name": "Voice of the Chain Master",
                    "displayname": "Voice of the Chain Master",
                    "previewtext": "You can communicate telepathically with your familiar and perceive through their senses. Additionally, while doing so, you can speak using your voice through your familiar.",
                    "hideifprerequisitesnotmet": "true"
                },
                {
                    "name": "Whispers of the Grave",
                    "displayname": "Whispers of the Grave",
                    "previewtext": "You can cast Speak With Dead at will.",
                    "prerequisites": [
                        {
                            "greaterthanorequal": {
                                "first": {
                                    "classlevel": "Warlock"
                                },
                                "second": "9"
                            }
                        }
                    ],
                    "hideifprerequisitesnotmet": "true",
                    "effects": [
                        {
                            "addspell": {
                                "name": "Speak With Dead",
                                "spelllevel": "3"
                            }
                        }
                    ]
                },
                {
                    "name": "Witch Sight",
                    "displayname": "Witch Sight",
                    "previewtext": "You can see the true form of shapechangers or creatures masked by illusions if they are within 30 ft of you.",
                    "prerequisites": [
                        {
                            "greaterthanorequal": {
                                "first": {
                                    "classlevel": "Warlock"
                                },
                                "second": "15"
                            }
                        }
                    ],
                    "hideifprerequisitesnotmet": "true"
                },
                {
                    "name": "Aspect of the Moon",
                    "displayname": "Aspect of the Moon_UA",
                    "previewtext": "You no longer need to sleep and can't be forced to sleep. You still need to relax with light activity only for 8 hours to benefit from a long rest.",
                    "prerequisites": [
                        {
                            "archetype": {
                                "name": "The Archfey",
                                "class": "Warlock"
                            }
                        }
                    ],
                    "hideifprerequisitesnotmet": "true"
                },
                {
                    "name": "Burning Hex",
                    "displayname": "Burning Hex_UA",
                    "previewtext": "As a bonus action, deal fire damage to your Hexblade Cursed target equal to your Cha mod.",
                    "prerequisites": [
                        {
                            "archetype": {
                                "name": "The Hexblade",
                                "class": "Warlock"
                            }
                        }
                    ],
                    "hideifprerequisitesnotmet": "true"
                },
                {
                    "name": "Caiphon's Beacon",
                    "displayname": "Caiphon's Beacon_UA",
                    "previewtext": "You gain proficiency in Deception and Stealth (pick other skills if you already are proficient in one or both). You also have advantage on attack rolls against charmed creatures.",
                    "prerequisites": [
                        {
                            "archetype": {
                                "name": "The Great Old One",
                                "class": "Warlock"
                            }
                        }
                    ],
                    "hideifprerequisitesnotmet": "true"
                },
                {
                    "name": "Chilling Hex",
                    "displayname": "Chilling Hex_UA",
                    "previewtext": "As a bonus action, deal cold damage to all enemies within 5 feet of your Hexblade Cursed target. The damage is equal to your Cha mod.",
                    "prerequisites": [
                        {
                            "archetype": {
                                "name": "The Hexblade",
                                "class": "Warlock"
                            }
                        }
                    ],
                    "hideifprerequisitesnotmet": "true"
                },
                {
                    "name": "Chronicle of the Raven Queen",
                    "displayname": "Chronicle of the Raven Queen_UA",
                    "previewtext": "Place a corpse's hand or similar body part on your Book of Shadows and ask a question. After 1 minute, the answer appears written in blood in your book. It is provided by the creature's spirit to the best of its knowledge, in any language you choose. \n This ability must be used within 1 minute of the creature's death, and this ability only works on it for the one question.",
                    "prerequisites": [
                        {
                            "and": [
                                {
                                    "archetype": {
                                        "name": "The Raven Queen",
                                        "class": "Warlock"
                                    }
                                }
                            ]
                        }
                    ],
                    "hideifprerequisitesnotmet": "true"
                },
                {
                    "name": "Claw of Acamar",
                    "displayname": "Claw of Acamar_UA",
                    "previewtext": "You can create a tentacled flail with your Pact of the Blade feature. The weapon has the reach property. When you hit a creature with it, you can expend a spell slot to deal an extra 2d8 necrotic damage per slot level. ",
                    "prerequisites": [
                        {
                            "and": [
                                {
                                    "archetype": {
                                        "name": "The Great Old One",
                                        "class": "Warlock"
                                    }
                                }
                            ]
                        }
                    ],
                    "hideifprerequisitesnotmet": "true"
                },
                {
                    "name": "Cloak of Baalzebul",
                    "displayname": "Cloak of Baalzebul_UA",
                    "previewtext": "As a bonus action, you surround yourself with flies. You have advantage on Charisma (Intimidation) checks but disadvantage on all other Charisma checks. Additionally, any creature that starts its turn within 5 ft. takes poison damage equal to your Charisma mod.",
                    "prerequisites": [
                        {
                            "archetype": {
                                "name": "The Fiend",
                                "class": "Warlock"
                            }
                        }
                    ],
                    "hideifprerequisitesnotmet": "true"
                },
                {
                    "name": "Curse Bringer",
                    "displayname": "Curse Bringer_UA",
                    "previewtext": "You can create a special greatsword with your Pact of the Blade feature. If you bring your Hexblade Cursed to 0 hp, you can immediately change the target to a different creature. The duration is not extended. \n When you hit a creature with this greatsword, you can expend a spell slot to deal an extra 2d8 slashing damage per spell level, and you can reduce the creature's speed to 0. ",
                    "prerequisites": [
                        {
                            "and": [
                                {
                                    "archetype": {
                                        "name": "The Hexblade",
                                        "class": "Warlock"
                                    }
                                }
                            ]
                        }
                    ],
                    "hideifprerequisitesnotmet": "true"
                },
                {
                    "name": "Kiss of Mephistopheles",
                    "displayname": "Kiss of Mephistopheles_UA",
                    "previewtext": "When you hit a creature with Eldritch Blast, you may use a bonus action and spend a Warlock spell slot to immediately cast Fireball, centered on the creature. ",
                    "prerequisites": [
                        {
                            "archetype": {
                                "name": "The Fiend",
                                "class": "Warlock"
                            }
                        }
                    ],
                    "hideifprerequisitesnotmet": "true"
                },
                {
                    "name": "Frost Lance",
                    "displayname": "Frost Lance_UA",
                    "previewtext": "If you hit a creature with Eldritch Blast one or more times, you can reduce their speed by 10 ft. until the end of your next turn.",
                    "prerequisites": [
                        {
                            "archetype": {
                                "name": "The Archfey",
                                "class": "Warlock"
                            }
                        }
                    ],
                    "hideifprerequisitesnotmet": "true"
                },
                {
                    "name": "Gaze of Khirad",
                    "displayname": "Gaze of Khirad_UA",
                    "previewtext": "As an action, you can see through solid objects within 30 ft until the end of the turn. ",
                    "prerequisites": [
                        {
                            "and": [
                                {
                                    "greaterthanorequal": {
                                        "first": {
                                            "classlevel": "Warlock"
                                        },
                                        "second": "7"
                                    }
                                },
                                {
                                    "archetype": {
                                        "name": "The Archfey",
                                        "class": "The Great Old One"
                                    }
                                }
                            ]
                        }
                    ],
                    "hideifprerequisitesnotmet": "true"
                },
                {
                    "name": "Grasp of Hadar",
                    "displayname": "Grasp of Hadar_UA",
                    "previewtext": "Once during your turn, when you hit a creature with Eldritch Blast, you can move them 10 ft closer to you.",
                    "prerequisites": [
                        {
                            "archetype": {
                                "name": "The Great Old One",
                                "class": "Warlock"
                            }
                        }
                    ],
                    "hideifprerequisitesnotmet": "true"
                },
                {
                    "name": "Green Lord's Gift",
                    "displayname": "Green Lord's Gift_UA",
                    "previewtext": "Whenever you regain hit points, treat any dice rolled to determine the amount of hp as their maximum. ",
                    "prerequisites": [
                        {
                            "archetype": {
                                "name": "The Archfey",
                                "class": "Warlock"
                            }
                        }
                    ],
                    "hideifprerequisitesnotmet": "true"
                },
                {
                    "name": "Improved Pact Weapon",
                    "displayname": "Improved Pact Weapon_UA",
                    "previewtext": "Any weapon you create using Pact of the Blade is a +1 weapon. This does not affect a magic weapon you turned in to a pact weapon. ",
                    "prerequisites": [
                        {
                            "and": [
                                {
                                    "greaterthanorequal": {
                                        "first": {
                                            "classlevel": "Warlock"
                                        },
                                        "second": "5"
                                    }
                                }
                            ]
                        }
                    ],
                    "hideifprerequisitesnotmet": "true"
                },
                {
                    "name": "Mace of Disaster",
                    "displayname": "Mace of Disaster_UA",
                    "previewtext": "When you create your pact weapon in to a mace, upon hitting a creatue with the mace, you can expend a spell slot ot deal 2d8 additional force damage per slot level. You can knock it prone if it is Huge or smaller. ",
                    "prerequisites": [
                        {
                            "and": [
                                {
                                    "archetype": {
                                        "name": "The Fiend",
                                        "class": "Warlock"
                                    }
                                }
                            ]
                        }
                    ],
                    "hideifprerequisitesnotmet": "true"
                },
                {
                    "name": "Moon Bow",
                    "displayname": "Moon Bow_UA",
                    "previewtext": "You can create a longbow with Pact of the Blade. It has advantage on attack rolls vs Lycanthropes. When you hit a creature with the bow, you can spend a spell slot to deal extra 2d8 radiant damage per slot level.",
                    "prerequisites": [
                        {
                            "and": [
                                {
                                    "archetype": {
                                        "name": "The Archfey",
                                        "class": "Warlock"
                                    }
                                }
                            ]
                        }
                    ],
                    "hideifprerequisitesnotmet": "true"
                },
                {
                    "name": "Path of the Seeker",
                    "displayname": "Path of the Seeker_UA",
                    "previewtext": "You ignore difficult terrain, have advantage to checks to escape a grapple, manacles, or ropes, and advantage on all saving throws against being paralyzed.",
                    "prerequisites": [
                        {
                            "archetype": {
                                "name": "The Seeker",
                                "class": "Warlock"
                            }
                        }
                    ],
                    "hideifprerequisitesnotmet": "true"
                },
                {
                    "name": "Raven Queen's Blessing",
                    "displayname": "Raven Queen's Blessing_UA",
                    "previewtext": "When you score a critical hit with Eldritch Blast, pick yourself or an ally you can see within 30 ft. The chosen creature can spend a Hit Die to regain hp equal to the roll + Con mod. ",
                    "prerequisites": [
                        {
                            "archetype": {
                                "name": "The Raven Queen",
                                "class": "Warlock"
                            }
                        }
                    ],
                    "hideifprerequisitesnotmet": "true"
                },
                {
                    "name": "Relentless Hex",
                    "displayname": "Relentless Hex_UA",
                    "previewtext": "As a bonus action, you can teleport to a space within 5 ft. of your Hexblade Cursed target. You must be able to see them and be within 30 ft.",
                    "prerequisites": [
                        {
                            "and": [
                                {
                                    "greaterthanorequal": {
                                        "first": {
                                            "classlevel": "Warlock"
                                        },
                                        "second": "5"
                                    }
                                },
                                {
                                    "archetype": {
                                        "name": "The Hexblade",
                                        "class": "Warlock"
                                    }
                                }
                            ]
                        }
                    ],
                    "hideifprerequisitesnotmet": "true"
                },
                {
                    "name": "Sea Twins' Gift",
                    "displayname": "Sea Twins' Gift_UA",
                    "previewtext": "You can breathe underwater and gain a swimming speed equal to your walking speed. You can also cast Water Breathing once per long rest using a Warlock spell slot.",
                    "prerequisites": [
                        {
                            "archetype": {
                                "name": "The Archfey",
                                "class": "Warlock"
                            }
                        }
                    ],
                    "hideifprerequisitesnotmet": "true",
                    "effects": [
                        {
                            "addspell": {
                                "name": "Water Breathing",
                                "spelllevel": "3"
                            }
                        }
                    ]
                },
                {
                    "name": "Seeker's Speech",
                    "displayname": "Seeker's Speech_UA",
                    "previewtext": "After each long rest, you can pick 2 languages, you gain proficiency with them until the next long rest. ",
                    "prerequisites": [
                        {
                            "archetype": {
                                "name": "The Seeker",
                                "class": "Warlock"
                            }
                        }
                    ],
                    "hideifprerequisitesnotmet": "true"
                },
                {
                    "name": "Shroud of Ulban",
                    "displayname": "Shroud of Ulban_UA",
                    "previewtext": "As an action, you can turn invisible for 1 minute. If you attack, deal damage, or force a save,you become visible at the end of the turn. ",
                    "prerequisites": [
                        {
                            "and": [
                                {
                                    "greaterthanorequal": {
                                        "first": {
                                            "classlevel": "Warlock"
                                        },
                                        "second": "18"
                                    }
                                },
                                {
                                    "archetype": {
                                        "name": "The Great Old One",
                                        "class": "Warlock"
                                    }
                                }
                            ]
                        }
                    ],
                    "hideifprerequisitesnotmet": "true"
                },
                {
                    "name": "Superior Pact Weapon",
                    "displayname": "Superior Pact Weapon_UA",
                    "previewtext": "Any weapon you create using Pact of the Blade is a +2 weapon. This does not affect a magic weapon you turned in to a pact weapon. ",
                    "prerequisites": [
                        {
                            "and": [
                                {
                                    "greaterthanorequal": {
                                        "first": {
                                            "classlevel": "Warlock"
                                        },
                                        "second": "9"
                                    }
                                }
                            ]
                        }
                    ],
                    "hideifprerequisitesnotmet": "true"
                },
                {
                    "name": "Tomb of Levistus",
                    "displayname": "Tomb of Levistus_UA",
                    "previewtext": "As a reaction to damage, encase yourself in ice, which lasts until the end of your next turn. You gain 10 temporary hit points per Warlock level. The ice has vulnerability to fire damage, your speed is 0, and you're incapacitated while the ice persists. You may only do this once per short or long rest.",
                    "prerequisites": [
                        {
                            "archetype": {
                                "name": "The Fiend",
                                "class": "Warlock"
                            }
                        }
                    ],
                    "hideifprerequisitesnotmet": "true"
                },
                {
                    "name": "Ultimate Pact Weapon",
                    "displayname": "Ultimate Pact Weapon_UA",
                    "previewtext": "Any weapon you create using Pact of the Blade is a +3 weapon. This does not affect a magic weapon you turned in to a pact weapon. ",
                    "prerequisites": [
                        {
                            "and": [
                                {
                                    "greaterthanorequal": {
                                        "first": {
                                            "classlevel": "Warlock"
                                        },
                                        "second": "15"
                                    }
                                }
                            ]
                        }
                    ],
                    "hideifprerequisitesnotmet": "true"
                }
            ]
        },
        {
            "name": "Revised Arcane Shots",
            "title": "Arcane Shots",
            "selections": "1",
            "entries": [
                {
                    "name": "Banishing Arrow",
                    "displayname": "Banishing Arrow",
                    "previewtext": "Temporarily banish a creature",
                    "effects": [
                        {
                            "featuretextwithbullet": "Banishing Arrow: After being hit your target must make a Charisma saving throw or be banished to a harmless section of the Feywild until the end of its next turn. While banished it is incapacitaed and has 0' movement.\nAt 18th level you do an additional 2d6 force damage."
                        }
                    ]
                },
                {
                    "name": "Brute Bane Arrow",
                    "displayname": "Brute Bane Arrow",
                    "previewtext": "Do necrotic damage and reduce an enemy's damage",
                    "effects": [
                        {
                            "featuretextwithbullet": "Brute Bane Arrow: A creature hit by this attack takes 2d6 necrotic damage, and must make a Constitution save or it deals half damage until the end of your next turn.\nThe damage increases to 4d6 necrotic at 18th level."
                        }
                    ]
                },
                {
                    "name": "Grasping Arrow",
                    "displayname": "Grasping Arrow",
                    "previewtext": "Slow a creature and inflict extra damage if it moves",
                    "effects": [
                        {
                            "featuretextwithbullet": "Grasping Arrow: If a creature is hit by the attack, it has its speed reduced by 10', takes 2d6 poison damage, and takes 2d6 slashing damage if it attempts to move without teleporting. This ends after 1 minute, or when it or adjacent ally uses its action to make a Strength (Athletics) check against your Arcane Shot DC."
                        }
                    ]
                },
                {
                    "name": "Mind-Scrambling Arrow",
                    "displayname": "Shadow Arrow",
                    "previewtext": "Confuse an enemy to protect an ally",
                    "effects": [
                        {
                            "featuretextwithbullet": "Choose an ally within 30' of your target. If your attack hits, the target takes 2d6 psychic damage and must make a Wisdom saving throw or be unable to attack the ally, or include it in any harmful areas of effect.\nThe damage increases to 4d6 psychic at 18th level."
                        }
                    ]
                },
                {
                    "name": "Piercing Arrow",
                    "displayname": "Piercing Arrow",
                    "previewtext": "Fire through multiple opponents",
                    "effects": [
                        {
                            "featuretextwithbullet": "Piercing Arrow: You fire an arrow that hits every creature in a 30' line, ignoring cover. They must make a Dexterity saving throw or take the arrow's damage plus 1d6 piercing. Save halves.\nThe damage increases to 2d6 piercing at 18th level."
                        }
                    ]
                },
                {
                    "name": "Seeking Arrow",
                    "displayname": "Seeking Arrow",
                    "previewtext": "Fire an arrow to find your target",
                    "effects": [
                        {
                            "featuretextwithbullet": "Seeking Arrow: You fire an arrow targeting a creature you have seen in the last minute. The arrow pursues the target, ignoring partial cover, and only failing if no path to the target exists. The target must make a Dexterity saving throw or take the arrow's damage plus 1d6 force, and reveal to you its location. If it passes the save it takes half damage and does not reveal its location.\nThe damage increases to 2d6 force at 18th level."
                        }
                    ]
                },
                {
                    "name": "Shadow Arrow",
                    "displayname": "Shadow Arrow",
                    "previewtext": "Blind your target beyond 5'",
                    "effects": [
                        {
                            "featuretextwithbullet": "If your attack hits, the target takes 2d6 psychic damage and must make a Wisdom saving throw or be blinded beyond 5'\nThe damage increases to 4d6 psychic at 18th level."
                        }
                    ]
                }
            ]
        },
        {
            "name": "Fighting Style",
            "title": "UA Fighting Styles",
            "selections": "1",
            "entries": [
                {
                    "name": "Archery",
                    "displayname": "Archery",
                    "previewtext": "+2 to attack rolls with ranged weapons.",
                    "effects": [
                        {
                            "modifyrangedattackbonus": "2"
                        },
                        {
                            "featuretextwithbullet": "Fighting Style - Archery: You gain a +2 bonus to attack rolls made with ranged weapons."
                        }
                    ]
                },
                {
                    "name": "Close Quarters Shooter",
                    "displayname": "Close Quarters Shooter",
                    "previewtext": "Ignores disadvantage for shooting in melee, ignores ½ and ¾ cover, +1 attack bonus to ranged.",
                    "effects": [
                        {
                            "featuretextwithbullet": "Fighting Style - Close Quarters Shooter: When making a ranged attack while within 5 feet of a hostile creature, you do not have Disadvantage on the attack roll. Your ranged attacks ignore half and three-quarters cover against target's within 30 feet of you. You gain a +1 bonus to attack rolls on ranged attacks."
                        },
                        {
                            "modifyrangedattackbonus": "1"
                        }
                    ]
                },
                {
                    "name": "Defense",
                    "displayname": "Defense",
                    "previewtext": "+1 AC bonus when wearing armor.",
                    "effects": [
                        {
                            "featuretextwithbullet": "Fighting Style - Defense: While wearing Armor, you gain a +1 bonus to AC."
                        },
                        {
                            "modifyarmorclassbonus": "1"
                        }
                    ]
                },
                {
                    "name": "Dueling",
                    "displayname": "Dueling",
                    "previewtext": "Fighting Style - Dueling +2 damage bonus when wielding a melee weapon in one hand and no other weapons."
                },
                {
                    "name": "Great Weapon Fighting",
                    "displayname": "Great Weapon Fighting",
                    "previewtext": "Reroll 1s and 2s on two-handed weapons",
                    "effects": [
                        {
                            "featuretext": "When you roll a 1 or 2 on a damage die for a two-handed attack, you can reroll and must use the new value."
                        }
                    ]
                },
                {
                    "name": "Mariner",
                    "displayname": "Mariner",
                    "previewtext": "+1 AC when not wearing heavy armor or using a shield, full speed climbing and swimming",
                    "effects": [
                        {
                            "featuretextwithbullet": "Fighting Style - Mariner You use your full speed, rather than half, when swimming or climbing"
                        },
                        {
                            "modifyarmorclassbonus": "1"
                        }
                    ]
                },
                {
                    "name": "Protection",
                    "displayname": "Protection",
                    "previewtext": "As a reaction, use your shield to impose disadvanatge when an enemy attacks an adjacent ally",
                    "effects": [
                        {
                            "featuretextwithbullet": "Fighting Style - Protection As a reaction, use your shield to impose disadvantage when an enemy attacks an ally within 5'"
                        },
                        {
                            "modifyarmorclassbonus": "1"
                        }
                    ]
                },
                {
                    "name": "Tunnel Fighter",
                    "displayname": "Tunnel Fighter",
                    "previewtext": "Grants a defensive stance which lets you make improved opportunity attacks.",
                    "effects": [
                        {
                            "featuretextwithbullet": "Fighting Style - Tunnel Fighter: As a bonus action, you can enter a defensive stance that lasts until the start of your next turn. While in your defensive stance, you can make opportunity attacks without using your Reaction, and you can use your Reaction to make a melee attack against a creature that moves more than 5 feet while within your reach."
                        }
                    ]
                },
                {
                    "name": "Two-Weapon Fighting",
                    "displayname": "Two-Weapon Fighting",
                    "previewtext": "Adds ability modifier to second attack when fighting with two weapons.",
                    "effects": [
                        {
                            "featuretextwithbullet": "Fighting Style - Two-Weapon Fighting: When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack."
                        }
                    ]
                }
            ]
        },
        {
            "name": "Kensei Weapons",
            "entries": [
                {
                    "name": "Blowgun",
                    "displayname": "Blowgun",
                    "effects": [
                        {
                            "replacestringfromfeaturetext": {
                                "replacementtext": "Kensei Weapons:\n• Blowgun",
                                "find": "Kensei Weapons:"
                            }
                        },
                        {
                            "addweaponproficiencies": [
                                "Blowgun"
                            ]
                        }
                    ]
                },
                {
                    "name": "Club",
                    "displayname": "Club",
                    "effects": [
                        {
                            "replacestringfromfeaturetext": {
                                "replacementtext": "Kensei Weapons:\n• Club",
                                "find": "Kensei Weapons:"
                            }
                        },
                        {
                            "addweaponproficiencies": [
                                "Club"
                            ]
                        }
                    ]
                },
                {
                    "name": "Crossbow, Hand",
                    "displayname": "Crossbow, Hand",
                    "effects": [
                        {
                            "replacestringfromfeaturetext": {
                                "replacementtext": "Kensei Weapons:\n• Crossbow, Hand",
                                "find": "Kensei Weapons:"
                            }
                        },
                        {
                            "addweaponproficiencies": [
                                "Crossbow, Hand"
                            ]
                        }
                    ]
                },
                {
                    "name": "Crossbow, Light",
                    "displayname": "Crossbow, Light",
                    "effects": [
                        {
                            "replacestringfromfeaturetext": {
                                "replacementtext": "Kensei Weapons:\n• Crossbow, Light",
                                "find": "Kensei Weapons:"
                            }
                        },
                        {
                            "addweaponproficiencies": [
                                "Crossbow, Light"
                            ]
                        }
                    ]
                },
                {
                    "name": "Dagger",
                    "displayname": "Dagger",
                    "effects": [
                        {
                            "replacestringfromfeaturetext": {
                                "replacementtext": "Kensei Weapons:\n• Dagger",
                                "find": "Kensei Weapons:"
                            }
                        },
                        {
                            "addweaponproficiencies": [
                                "Dagger"
                            ]
                        }
                    ]
                },
                {
                    "name": "Dart",
                    "displayname": "Dart",
                    "effects": [
                        {
                            "replacestringfromfeaturetext": {
                                "replacementtext": "Kensei Weapons:\n• Dart",
                                "find": "Kensei Weapons:"
                            }
                        },
                        {
                            "addweaponproficiencies": [
                                "Dart"
                            ]
                        }
                    ]
                },
                {
                    "name": "Flail",
                    "displayname": "Flail",
                    "effects": [
                        {
                            "replacestringfromfeaturetext": {
                                "replacementtext": "Kensei Weapons:\n• Flail",
                                "find": "Kensei Weapons:"
                            }
                        },
                        {
                            "addweaponproficiencies": [
                                "Flail"
                            ]
                        }
                    ]
                },
                {
                    "name": "Greatclub",
                    "displayname": "Greatclub",
                    "effects": [
                        {
                            "replacestringfromfeaturetext": {
                                "replacementtext": "Kensei Weapons:\n• Greatclub",
                                "find": "Kensei Weapons:"
                            }
                        },
                        {
                            "addweaponproficiencies": [
                                "Greatclub"
                            ]
                        }
                    ]
                },
                {
                    "name": "Handaxe",
                    "displayname": "Handaxe",
                    "effects": [
                        {
                            "replacestringfromfeaturetext": {
                                "replacementtext": "Kensei Weapons:\n• Handaxe",
                                "find": "Kensei Weapons:"
                            }
                        },
                        {
                            "addweaponproficiencies": [
                                "Handaxe"
                            ]
                        }
                    ]
                },
                {
                    "name": "Javelin",
                    "displayname": "Javelin",
                    "effects": [
                        {
                            "replacestringfromfeaturetext": {
                                "replacementtext": "Kensei Weapons:\n• Javelin",
                                "find": "Kensei Weapons:"
                            }
                        },
                        {
                            "addweaponproficiencies": [
                                "Javelin"
                            ]
                        }
                    ]
                },
                {
                    "name": "Light Hammer",
                    "displayname": "Light Hammer",
                    "effects": [
                        {
                            "replacestringfromfeaturetext": {
                                "replacementtext": "Kensei Weapons:\n• Light Hammer",
                                "find": "Kensei Weapons:"
                            }
                        },
                        {
                            "addweaponproficiencies": [
                                "Light Hammer"
                            ]
                        }
                    ]
                },
                {
                    "name": "Longbow",
                    "displayname": "Longbow",
                    "effects": [
                        {
                            "replacestringfromfeaturetext": {
                                "replacementtext": "Kensei Weapons:\n• Longbow",
                                "find": "Kensei Weapons:"
                            }
                        },
                        {
                            "addweaponproficiencies": [
                                "Longbow"
                            ]
                        }
                    ]
                },
                {
                    "name": "Longsword",
                    "displayname": "Longsword",
                    "effects": [
                        {
                            "replacestringfromfeaturetext": {
                                "replacementtext": "Kensei Weapons:\n• Longsword",
                                "find": "Kensei Weapons:"
                            }
                        },
                        {
                            "addweaponproficiencies": [
                                "Longsword"
                            ]
                        }
                    ]
                },
                {
                    "name": "Mace",
                    "displayname": "Mace",
                    "effects": [
                        {
                            "replacestringfromfeaturetext": {
                                "replacementtext": "Kensei Weapons:\n• Mace",
                                "find": "Kensei Weapons:"
                            }
                        },
                        {
                            "addweaponproficiencies": [
                                "Mace"
                            ]
                        }
                    ]
                },
                {
                    "name": "Quarterstaff",
                    "displayname": "Quarterstaff",
                    "effects": [
                        {
                            "replacestringfromfeaturetext": {
                                "replacementtext": "Kensei Weapons:\n• Quarterstaff",
                                "find": "Kensei Weapons:"
                            }
                        },
                        {
                            "addweaponproficiencies": [
                                "Quarterstaff"
                            ]
                        }
                    ]
                },
                {
                    "name": "Rapier",
                    "displayname": "Rapier",
                    "effects": [
                        {
                            "replacestringfromfeaturetext": {
                                "replacementtext": "Kensei Weapons:\n• Rapier",
                                "find": "Kensei Weapons:"
                            }
                        },
                        {
                            "addweaponproficiencies": [
                                "Rapier"
                            ]
                        }
                    ]
                },
                {
                    "name": "Scimitar",
                    "displayname": "Scimitar",
                    "effects": [
                        {
                            "replacestringfromfeaturetext": {
                                "replacementtext": "Kensei Weapons:\n• Scimitar",
                                "find": "Kensei Weapons:"
                            }
                        },
                        {
                            "addweaponproficiencies": [
                                "Scimitar"
                            ]
                        }
                    ]
                },
                {
                    "name": "Shortbow",
                    "displayname": "Shortbow",
                    "effects": [
                        {
                            "replacestringfromfeaturetext": {
                                "replacementtext": "Kensei Weapons:\n• Shortbow",
                                "find": "Kensei Weapons:"
                            }
                        },
                        {
                            "addweaponproficiencies": [
                                "Shortbow"
                            ]
                        }
                    ]
                },
                {
                    "name": "Shortsword",
                    "displayname": "Shortsword",
                    "effects": [
                        {
                            "replacestringfromfeaturetext": {
                                "replacementtext": "Kensei Weapons:\n• Shortsword",
                                "find": "Kensei Weapons:"
                            }
                        },
                        {
                            "addweaponproficiencies": [
                                "Shortsword"
                            ]
                        }
                    ]
                },
                {
                    "name": "Sickle",
                    "displayname": "Sickle",
                    "effects": [
                        {
                            "replacestringfromfeaturetext": {
                                "replacementtext": "Kensei Weapons:\n• Sickle",
                                "find": "Kensei Weapons:"
                            }
                        },
                        {
                            "addweaponproficiencies": [
                                "Sickle"
                            ]
                        }
                    ]
                },
                {
                    "name": "Sling",
                    "displayname": "Sling",
                    "effects": [
                        {
                            "replacestringfromfeaturetext": {
                                "replacementtext": "Kensei Weapons:\n• Sling",
                                "find": "Kensei Weapons:"
                            }
                        },
                        {
                            "addweaponproficiencies": [
                                "Sling"
                            ]
                        }
                    ]
                },
                {
                    "name": "Spear",
                    "displayname": "Spear",
                    "effects": [
                        {
                            "replacestringfromfeaturetext": {
                                "replacementtext": "Kensei Weapons:\n• Spear",
                                "find": "Kensei Weapons:"
                            }
                        },
                        {
                            "addweaponproficiencies": [
                                "Spear"
                            ]
                        }
                    ]
                },
                {
                    "name": "Trident",
                    "displayname": "Trident",
                    "effects": [
                        {
                            "replacestringfromfeaturetext": {
                                "replacementtext": "Kensei Weapons:\n• Trident",
                                "find": "Kensei Weapons:"
                            }
                        },
                        {
                            "addweaponproficiencies": [
                                "Trident"
                            ]
                        }
                    ]
                },
                {
                    "name": "War Pick",
                    "displayname": "War Pick",
                    "effects": [
                        {
                            "replacestringfromfeaturetext": {
                                "replacementtext": "Kensei Weapons:\n• War Pick",
                                "find": "Kensei Weapons:"
                            }
                        },
                        {
                            "addweaponproficiencies": [
                                "War Pick"
                            ]
                        }
                    ]
                },
                {
                    "name": "Warhammer",
                    "displayname": "Warhammer",
                    "effects": [
                        {
                            "replacestringfromfeaturetext": {
                                "replacementtext": "Kensei Weapons:\n• Warhammer",
                                "find": "Kensei Weapons:"
                            }
                        },
                        {
                            "addweaponproficiencies": [
                                "Warhammer"
                            ]
                        }
                    ]
                },
                {
                    "name": "Whip",
                    "displayname": "Whip",
                    "effects": [
                        {
                            "replacestringfromfeaturetext": {
                                "replacementtext": "Kensei Weapons:\n• Whip",
                                "find": "Kensei Weapons:"
                            }
                        },
                        {
                            "addweaponproficiencies": [
                                "Whip"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "Arcane Shots",
            "title": "Arcane Shots",
            "selections": "1",
            "entries": [
                {
                    "name": "Beguiling Arrow",
                    "displayname": "Beguiling Arrow",
                    "previewtext": "Charm an enemy on behalf of an ally",
                    "effects": [
                        {
                            "featuretextwithbullet": "Beguiling Arrow: Choose an ally within 30' of you, if the arrow hits, the creature can not attack this ally, or include them in any area of effects until the end of your next turn. This fails if the target is immune to charm, or the ally attacks the creature."
                        }
                    ]
                },
                {
                    "name": "Brute Bane Arrow",
                    "displayname": "Brute Bane Arrow",
                    "previewtext": "Reduce an enemy's damage",
                    "effects": [
                        {
                            "featuretextwithbullet": "Brute Bane Arrow: A creature hit by this attack deals half damage with bludgeoning, piercing, and slashing attacks until the end of your next turn."
                        }
                    ]
                },
                {
                    "name": "Bursting Arrow",
                    "displayname": "Bursting Arrow",
                    "previewtext": "Deal an explosion of force damage",
                    "effects": [
                        {
                            "featuretextwithbullet": "Bursting Arrow: If a creature is hit by an attack, each creature within 10' takes 2d6 force damage."
                        }
                    ]
                },
                {
                    "name": "Defending Arrow",
                    "displayname": "Defending Arrow",
                    "previewtext": "Inflict disadvantage on a creature's next attack",
                    "effects": [
                        {
                            "featuretextwithbullet": "Defending Arrow: If a creature is hit by the attack, it has disadvantage on its next until the start of your next turn."
                        }
                    ]
                },
                {
                    "name": "Grasping Arrow",
                    "displayname": "Grasping Arrow",
                    "previewtext": "Slow a creature and inflict extra damage if it moves",
                    "effects": [
                        {
                            "featuretextwithbullet": "Grasping Arrow: If a creature is hit by the attack, it has its speed reduced by 10', and takes 2d6 slashing damage if it attempts to move without teleporting. This ends after 1 minute, or when it or adjacent ally uses its action to make a DC 10 Strength check."
                        }
                    ]
                },
                {
                    "name": "Piercing Arrow",
                    "displayname": "Piercing Arrow",
                    "previewtext": "Fire through multiple opponents",
                    "effects": [
                        {
                            "featuretextwithbullet": "Piercing Arrow: You fire an arrow that hits every creature in a 30' line, making seperate attack rolls for each target."
                        }
                    ]
                },
                {
                    "name": "Seeking Arrow",
                    "displayname": "Seeking Arrow",
                    "previewtext": "Ignore all standard attack penalties except for maximum range",
                    "effects": [
                        {
                            "featuretextwithbullet": "Seeking Arrow: As an action, you fire an arrow targeting a creature you have seen in the last minute. The arrow pursues the target, ignoring cover, penalties due to not being able to see the creature, only failing if no path to the target exists, or it is beyond the maximum range of your weapon."
                        }
                    ]
                },
                {
                    "name": "Shadow Arrow",
                    "displayname": "Shadow Arrow",
                    "previewtext": "Blind your target beyond 30'",
                    "effects": [
                        {
                            "featuretextwithbullet": "If your attack hits, the target cannot see beyond a 30' radius."
                        }
                    ]
                }
            ]
        },
        {
            "name": "UA Invocations",
            "title": "UA Invocations",
            "replace": "1",
            "entries": [
                {
                    "name": "Aspect of the Moon",
                    "displayname": "Aspect of the Moon",
                    "previewtext": "Immune to sleep",
                    "prerequisites": [
                        {
                            "archetype": {
                                "name": "Archfey",
                                "class": "Warlock"
                            }
                        }
                    ],
                    "hideifprerequisitesnotmet": "true",
                    "effects": [
                        {
                            "featuretext": "You no longer need or can be forced to sleep, a long rest is only 8 hours of light activity, such as reading or keeping watch."
                        }
                    ]
                },
                {
                    "name": "Burning Hex",
                    "displayname": "Burning Hex",
                    "previewtext": "Bonus action fire damage",
                    "prerequisites": [
                        {
                            "archetype": {
                                "name": "Hexblade",
                                "class": "Warlock"
                            }
                        }
                    ],
                    "hideifprerequisitesnotmet": "true",
                    "effects": [
                        {
                            "featuretext": "As a bonus action the target of your Hexblade's Curse takes (CHA) fire damage."
                        }
                    ]
                },
                {
                    "name": "Caiphon's Beacon",
                    "displayname": "Caiphon's Beacon",
                    "previewtext": "Deception & Stealth proficiency, advantage vs. charmed",
                    "prerequisites": [
                        {
                            "archetype": {
                                "name": "Great Old One",
                                "class": "Warlock"
                            }
                        }
                    ],
                    "hideifprerequisitesnotmet": "true",
                    "effects": [
                        {
                            "featuretext": "You have advantage on attacks against charmed creatures"
                        },
                        {
                            "setskillproficiency": {
                                "deception": "true"
                            }
                        },
                        {
                            "setskillproficiency": {
                                "stealth": "true"
                            }
                        }
                    ]
                },
                {
                    "name": "Burning Hex",
                    "displayname": "Burning Hex",
                    "previewtext": "Bonus action frost damage",
                    "prerequisites": [
                        {
                            "archetype": {
                                "name": "Hexblade",
                                "class": "Warlock"
                            }
                        }
                    ],
                    "hideifprerequisitesnotmet": "true",
                    "effects": [
                        {
                            "featuretext": "As a bonus action all enemirs within 5' of the target of your Hexblade's Curse take (CHA) frost damage."
                        }
                    ]
                }
            ]
        },
        {
            "name": "Psionic Talents",
            "title": "Psionic Talents",
            "selections": "1",
            "replace": "1",
            "advancedfeaturetext": {
                "useentrypreviewtext": "true",
                "usebullet": "true",
                "prefixwithentryname": "true",
                "prefixseperator": " - ",
                "removefeaturetextifreplaced": "true"
            },
            "entries": [
                {
                    "name": "Beacon",
                    "displayname": "Beacon",
                    "previewtext": "As a bonus action, cause bright light to emit from your body in a 20 ft. radius, and dim light for another 20. This light can be any color and lasts for an hour or until you extinguish it as a bonus action. "
                },
                {
                    "name": "Blade Meld",
                    "displayname": "Blade Meld",
                    "previewtext": "As a bonus action, a one-handed melee weapon you hold becomes one with your hand. For the next minute, you can’t let go of the weapon nor can it be forced from your grasp."
                },
                {
                    "name": "Blind Spot",
                    "displayname": "Blind Spot",
                    "previewtext": "As an action, you erase your image from the mind of one creature you can see within 120 feet of you; the target must succeed on a Wisdom saving throw, or you are invisible to it until the end of your next turn."
                },
                {
                    "name": "Delusion",
                    "displayname": "Delusion",
                    "previewtext": "As an action, you plant a false belief in the mind of one creature that you can see within 60 feet of you. You can create a sound or an image. Only\nthe target of this talent perceives the sound or image you create.\nIf you create a sound, its volume can range from a whisper to a scream. It can be your voice, someone else's voice, a creature's roar, a musical instrument, or any other sound you pick. It lasts for 1 minute.\nIf you create an object, it must fit within a 5-foot cube and can’t move or be reflective. The image can't create any effect that influences a sense other than sight. The image lasts for 1 minute, and it disappears if the creature touches it."
                },
                {
                    "name": "Energy Beam",
                    "displayname": "Energy Beam",
                    "previewtext": "As an action, you target one creature you can see within 90 feet of you. The target must succeed on a Dexterity saving throw or take 1d8 acid, cold, fire, lightning, or thunder damage (your choice).\nThe talent’s damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
                },
                {
                    "name": "Light Step",
                    "displayname": "Light Step",
                    "previewtext": "As a bonus action, you alter your density and weight to improve your mobility. For the rest of your turn, your walking speed increases by 10feet, and the first time you stand up this turn,you do so without expending any of your movement if your speed is greater than 0."
                },
                {
                    "name": "Mind Meld",
                    "displayname": "Mind Meld",
                    "previewtext": "As a bonus action, you can communicate telepathically with one willing creature you can see within 120 feet of you. The target must have an Intelligence of at least 2, otherwise this talent fails and the action is wasted.\nThis communication can occur until the end of the current turn. You don’t need to share a language with the target for it to understand your telepathic utterances, and it understands you even if it lacks a language. You also gain access to one memory of the target’s choice, gaining perfect recall of one thing it saw or did."
                },
                {
                    "name": "Mind Slam",
                    "displayname": "Mind Slam",
                    "previewtext": "As an action, you target one creature you can see within 60 feet of you. The target must succeed on a Constitution saving throw or take 1d6 force damage. If it takes any of this damage and is Large or smaller, it is knocked prone.\nThe talent’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
                },
                {
                    "name": "Mind Thrust",
                    "displayname": "Mind Thrust",
                    "previewtext": "As an action, you target one creature you can see within 120 feet of you. The target must succeed on an Intelligence saving throw or take 1d10 psychic damage.\nThe talent’s damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10)."
                },
                {
                    "name": "Mystic Charm",
                    "displayname": "Mystic Charm",
                    "previewtext": "As an action, you beguile one humanoid you can see within 120 feet of you. The target must succeed on a Charisma saving throw or be charmed by you until the end of your next turn."
                },
                {
                    "name": "Mystic Hand",
                    "displayname": "Mystic Hand",
                    "previewtext": "You can use your action to manipulate or move one object within 30 feet of you. The object can’t weigh more than 10 pounds, and you can’t affect an object being worn or carried by another creature. If the object is loose, you can move it up to 30 feet in any direction.\nThis talent allows you to open an unlocked door, pour out a beer stein, and so on.\nThe object falls to the ground at the end of your turn if you leave it suspended in midair."
                },
                {
                    "name": "Psychic Hammer",
                    "displayname": "Psychic Hammer",
                    "previewtext": "As an action, you try to grasp one creature you can see within 120 feet of you, with a hand crafted from telekinetic energy. The target must succeed on a Strength saving throw or take 1d6 force damage. If it takes any of this damage and is Large or smaller, you can move it up to 10 feet in a straight line in a direction of your choice. You can’t lift the target off the ground unless it is already airborne or underwater.\nThe talent’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
                }
            ]
        },
        {
            "name": "Psionic Disciplines",
            "title": "Psionic Disciplines",
            "selections": "2",
            "entries": [
                {
                    "name": "Adaptive Body",
                    "displayname": "Adaptive Body",
                    "previewtext": "Immortal- Protect yourself and others from enviromental effects and damage.",
                    "effects": [
                        {
                            "featuretextwithbullet": "Adaptive Body: While focused on this discipline,you don't need to eat, breathe, or sleep."
                        },
                        {
                            "featuretext": "\t\t-Environmental Adaptation (2 psi). As an action, you or a creature you touch ignores the effects of extreme heat or cold (but not cold or fire damage) for the next hour. "
                        },
                        {
                            "featuretext": "\t\t-Adaptive Shield (3 psi). When you take acid,cold, fire, lightning, or thunder damage, you can use your reaction to gain resistance to damage of that type—including the triggering damage— until the end of your next turn. "
                        },
                        {
                            "featuretext": "\t\t-Energy Adaptation (5 psi; conc., 1 hr.). As an action, you can touch one creature and give it resistance to acid, cold, fire, lightning, or thunder damage (your choice), which lasts until your concentration ends."
                        },
                        {
                            "featuretext": "\t\t-Energy Immunity (7 psi; conc., 1 hr.). As an action, you can touch one creature and give it immunity to acid, cold, fire, lightning, or thunder damage (your choice), which lasts until your concentration ends."
                        }
                    ]
                },
                {
                    "name": "Aura Sight",
                    "displayname": "Aura Sight",
                    "previewtext": "Awakened- Perceive creatures and read their auras.",
                    "effects": [
                        {
                            "featuretextwithbullet": "Aura Sight: While focused on this discipline, you have advantage on Wisdom(Insight) checks."
                        },
                        {
                            "featuretext": "\t\t-Assess Foe (2 psi). As a bonus action, you analyze the aura of one creature you see. You learn its current hit point total and all its immunities, resistances, and vulnerabilities."
                        },
                        {
                            "featuretext": "\t\t-Read Moods (2 psi). As a bonus action, you learn a one-word summary of the emotional state of up to six creatures you can see, such as happy, confused, afraid, or violent."
                        },
                        {
                            "featuretext": "\t\t-View Aura (3 psi; conc., 1 hr.). As an action, you study one creature’s aura. Until your concentration ends, while you can see the target, you learn if it’s under the effect of any magical or psionic effects, its current hit point total, and its basic emotional state. While this effect lasts, you have advantage on Wisdom (Insight) and Charisma checks you make against it."
                        },
                        {
                            "featuretext": "\t\t-Perceive the Unseen (5 psi; conc., 1 min.). As a bonus action, you gain the ability to see auras even of invisible or hidden creatures. Until your concentration ends, you can see all creatures, including hidden and invisible ones, regardless of lighting conditions."
                        }
                    ]
                },
                {
                    "name": "Bestial Form",
                    "displayname": "Bestial Form",
                    "previewtext": "Immortal- Transform your body, gaining various traits.",
                    "effects": [
                        {
                            "featuretextwithbullet": "Bestial Form: While focused on this discipline, you have advantage on Wisdom(Animal Handling) checks."
                        },
                        {
                            "featuretext": "\t\t-Bestial Claws (1–7 psi). You manifest long claws for an instant and make a melee weapon attack against one creature within 5 feet of you. On a hit, this attack deals 1d10 slashing damage per psi point spent."
                        },
                        {
                            "featuretext": "\t\t--Bestial Transformation. As a bonus action, you alter your physical form to gain different characteristics. When you use this ability, you can choose one or more of the following effects. This transformation lasts for 1 hour, until you die, or until you end it as a bonus action:"
                        },
                        {
                            "featuretext": "\t\t-Amphibious (2 psi). You gain gills; you can breathe air and water"
                        },
                        {
                            "featuretext": "\t\t-Climbing (2 psi). You grow tiny hooked claws that give you gain a climbing speed equal to your walking speed."
                        },
                        {
                            "featuretext": "\t\t-Flight (5 psi). Wings sprout from your back. You gain a flying speed equal to your walking speed."
                        },
                        {
                            "featuretext": "\t\t-Keen Senses (2 psi). Your eyes and ears become more sensitive. You gain advantage on Wisdom (Perception) checks."
                        },
                        {
                            "featuretext": "\t\t-Perfect Senses (3 psi). You gain a keen sense of smell and an instinct to detect prey. You can see invisible creatures and objects within 10 feet of you, even if you are blinded."
                        },
                        {
                            "featuretext": "\t\t-Swimming (2 psi). You gain fins and webbing between your fingers and toes; you gain a swimming speed equal to your walking speed."
                        },
                        {
                            "featuretext": "\t\t-Tough Hide (2 psi). Your skin becomes as tough as leather; you gain a +2 bonus to AC."
                        }
                    ]
                },
                {
                    "name": "Brute Force",
                    "displayname": "Brute Force",
                    "previewtext": "Immortal- Enhance your strength for increased damage, knockbacks, and jumping.",
                    "effects": [
                        {
                            "featuretextwithbullet": "Brute Force: While focused on this discipline, you have advantage on Strength (Athletics) checks."
                        },
                        {
                            "featuretext": "\t\t-Brute Strike (1–7 psi). As a bonus action, you gain a bonus to your next damage roll against a target you hit with a melee attack during the current turn. The bonus equals +1d6 per psi point spent, and the bonus damage is the same type as the attack. If the attack has more than one damage type, you choose which one to use for the bonus damage."
                        },
                        {
                            "featuretext": "\t\t-Knock Back (1–7 psi). When you hit a target with a melee attack, you can activate this ability as a reaction. The target must succeed on a Strength saving throw or be knocked 10 feet away from you per psi point spent. The target moves in a straight line. If it hits an object, this movement immediately ends and the target takes 1d6 bludgeoning damage per psi point spent."
                        },
                        {
                            "featuretext": "\t\t-Mighty Leap (1–7 psi). As part of your movement, you jump in any direction up to 20 feet per psi point spent."
                        },
                        {
                            "featuretext": "\t\t-Feat of Strength (2 psi). As a bonus action, you gain a +5 bonus to Strength checks until the end of your next turn."
                        }
                    ]
                },
                {
                    "name": "Celerity",
                    "displayname": "Celerity",
                    "previewtext": "Immortal- Become a blur. Increase your speed and reflexes",
                    "effects": [
                        {
                            "featuretextwithbullet": "Celerity: While focused on this discipline, your walking speed increases by 10 feet."
                        },
                        {
                            "featuretext": "\t\t-Rapid Step (1–7 psi). As a bonus action, you increase your walking speed by 10 feet per psi point spent until the end of the current turn. If you have a climbing or swimming speed, this increase applies to that speed as well."
                        },
                        {
                            "featuretext": "\t\t-Agile Defense (2 psi). As a bonus action, you take the Dodge action."
                        },
                        {
                            "featuretext": "\t\t-Blur of Motion (2 psi). As an action, you cause yourself to be invisible during any of your movement during the current turn."
                        },
                        {
                            "featuretext": "\t\t-Surge of Speed (2 psi). As a bonus action, you gain two benefits until the end of the current turn: you don’t provoke opportunity attacks, and you have a climbing speed equal to your walking speed."
                        },
                        {
                            "featuretext": "\t\t-Surge of Action (5 psi). As a bonus action, you can Dash or make one weapon attack."
                        }
                    ]
                },
                {
                    "name": "Corrosive Metabolism",
                    "displayname": "Corrosive Metabolism",
                    "previewtext": "Immortal- Resist or attack with acid, harm those who harm you.",
                    "effects": [
                        {
                            "featuretextwithbullet": "Corrosive Metabolism: While focused on this discipline, you have resistance to acid and poison damage."
                        },
                        {
                            "featuretext": "\t\t-Corrosive Touch (1–7 psi). As an action, you deliver a touch of acid to one creature within your reach. The target must make a Dexterity saving throw, taking 1d10 acid damage per psi point spent on a failed save, or half as much damage on a successful one."
                        },
                        {
                            "featuretext": "\t\t-Venom Strike (1–7 psi). As an action, you create a poison spray that targets one creature you can see within 30 feet of you. The target must make a Constitution saving throw. On a failed save, it takes 1d6 poison damage per psi point spent and is poisoned until the end of your next turn. On a successful save, the target takes half as much damage and isn’t poisoned."
                        },
                        {
                            "featuretext": "\t\t-Acid Spray (2 psi). As a reaction when you take piercing or slashing damage, you cause acid to spray from your wound; each creature within 5 feet of you takes 2d6 acid damage."
                        },
                        {
                            "featuretext": "\t\t-Breath of the Black Dragon (5 psi). You exhale a wave of acid in a 60-foot line that is 5 feet wide. Each creature in the line must make a Constitution saving throw, taking 6d6 acid damage on a failed save, or half as much on a successful one. You can increase the damage by 1d6 per additional psi point spent on it."
                        },
                        {
                            "featuretext": "\t\t-Breath of the Green Dragon (7 psi). You exhale a cloud of poison in a 90-foot cone. Each creature in the line must make a Constitution saving throw, taking 10d6 poison damage on a failed save, or half as much damage on a successful one."
                        }
                    ]
                },
                {
                    "name": "Crown of Despair",
                    "displayname": "Crown of Despair",
                    "previewtext": "Avatar- Plant debilitating seeds of despair within creatures, bringing them to inaction.",
                    "effects": [
                        {
                            "featuretextwithbullet": "Crown of Despair: While focused on this discipline, you have advantage on Charisma (Intimidation) checks."
                        },
                        {
                            "featuretext": "\t\t-Crowned in Sorrow (1–7 psi). As an action, one creature you can see within 60 feet of you must make a Charisma saving throw. On a failed save, it takes 1d8 psychic damage per psi point spent, and it can’t take reactions until the start of its next turn. On a successful save, it takes half as much damage."
                        },
                        {
                            "featuretext": "\t\t-Call to Inaction (2 psi; conc., 10 min.). If you spend 1 minute conversing with a creature, you can attempt to seed it with overwhelming ennui. At the end of the minute, you can use an action to force the creature to make a Wisdom saving throw. The save automatically succeeds if the target is immune to being charmed. On a failed save, it sits and is incapacitated until your concentration ends. This effect immediately ends if the target or any ally it can see is attacked or takes damage. On a successful save, the creature is unaffected and has no inkling of your attempt to bend its will."
                        },
                        {
                            "featuretext": "\t\t-Visions of Despair (3 psi). As an action, you force one creature you can see within 60 feet of you to make a Charisma saving throw. On a failed save, it takes 3d6 psychic damage, and its speed is reduced to 0 until the end of its next turn. On a successful save, it takes half as much damage. You can increase the damage by 1d6 per additional psi point spent on it."
                        },
                        {
                            "featuretext": "\t\t-Dolorous Mind (5 psi; conc., 1 min.). As an action, you choose one creature you can see within 60 feet of you. It must succeed on a Charisma saving throw, or it is incapacitated and has a speed of 0 until your concentration ends. It can repeat this saving throw at the end of each of its turns, ending the effect on itself on a success."
                        }
                    ]
                },
                {
                    "name": "Crown of Disgust",
                    "displayname": "Crown of Disgust",
                    "previewtext": "Avatar- Flood other creatures with feelings of disgust and fear. ",
                    "effects": [
                        {
                            "featuretextwithbullet": "Crown of Disgust: While you are focused on this discipline, the area in a 5-foot radius around you is difficult terrain for any enemy that isn’t immune to being frightened."
                        },
                        {
                            "featuretext": "\t\t-Eye of Horror (1–7 psi). As an action, choose one creature you can see within 60 feet of you. The target must make a Charisma saving throw. On a failed save, it takes 1d6 psychic damage per psi point spent and can’t move closer to you until the end of its next turn. On a successful save, it takes half as much damage."
                        },
                        {
                            "featuretext": "\t\t-Wall of Repulsion (3 psi; conc., 10 min.). As an action, you create an invisible, insubstantial wall of energy within 60 feet of you that is up to 30 feet long, 10 feet high, and 1 foot thick. The wall lasts until your concentration ends. Any creature attempting to move through it must make a Wisdom saving throw. On a failed save, a creature can’t move through the wall until the start of its next turn. On a successful save, the creature can pass through it. A creature must make this save whenever it attempts to pass through the wall, whether willingly or unwillingly."
                        },
                        {
                            "featuretext": "\t\t-Visions of Disgust (5 psi; conc., 1 min.). You cause a creature to regard all other beings as horrid, alien entities. As an action, choose one creature you can see within 60 feet of you. The target must make a Wisdom saving throw. On a failed save, it takes 5d6 psychic damage, and until your concentration ends, it takes 1d6 psychic damage per creature within 5 feet of it at the end of each of its turns. On a successful save, the target takes only half the initial damage and suffers none of the other effects."
                        },
                        {
                            "featuretext": "\t\t-World of Horror (7 psi; conc., 1 min.). As an action, choose up to six creatures within 60 feet of you. Each target must make a Charisma saving throw. On a failed save, a target takes 8d6 psychic damage, and it is frightened until your concentration ends. On a successful save, a target takes half as much damage. While frightened by this effect, a target’s speed is reduced to 0, and the target can use its action, and any bonus action it might have, only to make melee attacks. The frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
                        }
                    ]
                },
                {
                    "name": "Crown of Rage",
                    "displayname": "Crown of Rage",
                    "previewtext": "Avatar- Incite other creatures' anger, causing it's bloodlust to overtake it and act as you wish it to.",
                    "effects": [
                        {
                            "featuretextwithbullet": "Crown of Rage: While you are focused on this discipline, any enemy within 5 feet of you that makes a melee attack roll against creatures other than you does so with disadvantage."
                        },
                        {
                            "featuretext": "\t\t-Primal Fury (1–7 psi). As an action, choose one creature you can see within 60 feet of you. The target must succeed on a Charisma saving throw or take 1d6 psychic damage per psi point spent on this ability and immediately use its reaction to move its speed in a straight line toward its nearest enemy. The save automatically succeeds if the target is immune to being charmed."
                        },
                        {
                            "featuretext": "\t\t-Fighting Words (2 psi; conc., 10 min.). If you spend 1 minute conversing with a creature, you can attempt to leave a simmering violence in its mind. At the end of the minute, you can use an action to force the creature to make a Wisdom saving throw to resist feeling violent urges against one creature you describe to it or name. The save automatically succeeds if the target is immune to being charmed. On a failed save, the target attacks the chosen creature if it sees that creature before your concentration ends, using weapons or spells against a creature it was already hostile toward or unarmed strikes against an ally or a creature it was neutral toward. Once the fight starts, it continues to attack for 5 rounds before this effect ends. This effect immediately ends if the target or any ally it can see is attacked or takes damage from any creature other than the one it has been incited against. On a successful save, the creature is unaffected and has no inkling of your attempt to bend its will."
                        },
                        {
                            "featuretext": "\t\t-Mindless Courage (2 psi). You cause a creature's bloodlust to overcome its sense of preservation. As a bonus action, choose one creature you can see within 60 feet of you. The target must succeed on a Wisdom saving throw or, until the end of your next turn, it can’t willingly move unless its movement brings it closer to its nearest enemy that it can see. The ©2017 Wizards of the Coast LLC 14 save automatically succeeds if the target is immune to being charmed."
                        },
                        {
                            "featuretext": "\t\t-Punishing Fury (5 psi; conc., 1 min.). You cause a creature's rage to grow so hot that it attacks without heeding its own safety. As a bonus action, choose one creature you can see within 60 feet of you. The target must succeed on a Wisdom saving throw or, until your concentration ends, any creature within 5 feet of it can use a reaction to make a melee attack against it whenever the target makes a melee attack. The save automatically succeeds if the target is immune to being charmed."
                        }
                    ]
                },
                {
                    "name": "Diminution",
                    "displayname": "Diminution",
                    "previewtext": "Immortal- Manipute the matter in your body, reducing your size.",
                    "effects": [
                        {
                            "featuretextwithbullet": "Diminution: While focused on this discipline, you have advantage on Dexterity (Stealth) checks."
                        },
                        {
                            "featuretext": "\t\t-Miniature Form (2 psi; conc., 10 min.). As a bonus action, you become Tiny until your concentration ends. While this size, you gain a +5 bonus to Dexterity (Stealth) checks and can move through gaps up to 6 inches across without squeezing"
                        },
                        {
                            "featuretext": "\t\t-Toppling Shift (2 psi). As a bonus action, you shift to an incredibly small size and then suddenly return to normal, sending an opponent flying backward. Choose one creature you can see within 5 feet of you. It must succeed on a Strength saving throw or be knocked prone."
                        },
                        {
                            "featuretext": "\t\t-Sudden Shift (5 psi). As a reaction when you are hit by an attack, you shift down to minute size to avoid the attack. The attack misses, and you move up to 5 feet without provoking opportunity attacks before returning to normal size."
                        },
                        {
                            "featuretext": "\t\t-Microscopic Form (7 psi; conc., 10 min.). As a bonus action, you become smaller than Tiny until your concentration ends. While this size, you gain a +10 bonus to Dexterity (Stealth) checks and a +5 bonus to AC, you can move through gaps up to 1 inch across without squeezing, and you can’t make weapon attacks."
                        }
                    ]
                },
                {
                    "name": "Giant Growth",
                    "displayname": "Giant Growth",
                    "previewtext": "Immortal- Manipute the matter in your body, increasing your size and strength.",
                    "effects": [
                        {
                            "featuretextwithbullet": "Giant Growth: While focused on this discipline, your reach increases by 5 feet."
                        },
                        {
                            "featuretext": "\t\t-Ogre Form (2 psi; conc., 1 min.). As a bonus action, you gain 10 temporary hit points. In addition, until your concentration ends, your melee weapon attacks deal an extra 1d4 bludgeoning damage on a hit, and your reach increases by 5 feet. If you’re smaller than Large, you also become Large for the duration."
                        },
                        {
                            "featuretext": "\t\t-Giant Form (7 psi; conc., 1 min.). As a bonus action, you gain 30 temporary hit points. In addition, until your concentration ends, your melee weapon attacks deal an extra 2d6 bludgeoning damage on a hit, and your reach increases by 10 feet. If you’re smaller than Huge, you also become Huge for the duration."
                        }
                    ]
                },
                {
                    "name": "Intellect Fortress",
                    "displayname": "Intellect Fortress",
                    "previewtext": "Awakened- Bolster your mental and physical defenses, and harm those who harm you.",
                    "effects": [
                        {
                            "featuretextwithbullet": "Intellect Fortress: While focused on this discipline, you gain resistance to psychic damage."
                        },
                        {
                            "featuretext": "\t\t-Psychic Backlash (2 psi). As a reaction, you can impose disadvantage on an attack roll against you if you can see the attacker. If the attack still hits you, the attacker takes 2d10 psychic damage."
                        },
                        {
                            "featuretext": "\t\t-Psychic Parry (1–7 psi). As a reaction when you make an Intelligence, a Wisdom, or a Charisma saving throw, you gain a +1 bonus to that saving throw for each psi point you spend on this ability. You can use this ability after rolling the die but before suffering the results."
                        },
                        {
                            "featuretext": "\t\t-Psychic Redoubt (5 psi; conc., 10 min.). As an action, you create a field of protective psychic energy. Choose any number of creatures within 30 feet of you. Until your concentration ends, each target has resistance to psychic damage and advantage on Intelligence, Wisdom, and Charisma saving throws."
                        }
                    ]
                },
                {
                    "name": "Iron Durability",
                    "displayname": "Iron Durability",
                    "previewtext": "Immortal- Transform your body in to living metal, greatly bolstering your defenses. ",
                    "effects": [
                        {
                            "featuretextwithbullet": "Iron Durability: While focused on this discipline, you gain a +1 bonus to AC."
                        },
                        {
                            "featuretext": "\t\t-Iron Hide (1–7 psi). As a reaction when you are hit by an attack, you gain a +1 bonus to AC for each psi point you spend on this ability. The bonus lasts until the end of your next turn. This bonus applies against the triggering attack."
                        },
                        {
                            "featuretext": "\t\t-Steel Hide (2 psi). As a bonus action, you gain resistance to bludgeoning, piercing, and slashing damage until the end of your next turn."
                        },
                        {
                            "featuretext": "\t\t-Iron Resistance (7 psi; conc., 1 hr.). As an action, you gain resistance to bludgeoning, piercing, or slashing damage (your choice), which lasts until your concentration ends"
                        }
                    ]
                },
                {
                    "name": "Mantle of Awe",
                    "displayname": "Mantle of Awe",
                    "previewtext": "Awakened- Use your psionic powers to subtly manipulate others and enhance your natural charm.",
                    "effects": [
                        {
                            "featuretextwithbullet": "Mantle of Awe: While focused on this discipline, you gain a bonus to Charisma checks. The bonus equals half your Intelligence modifier (minimum of +1)."
                        },
                        {
                            "featuretext": "\t\t-Charming Presence (1–7 psi). As an action, you exert an aura of sympathetic power. Roll 2d8 per psi point spent on this ability; the total is how many hit points worth of creatures this option can affect. Creatures within 30 feet of you are affected in ascending order of their hit point maximums, ignoring incapacitated creatures, creatures immune to being charmed, and creatures engaged in combat. Starting with the creature that has the lowest hit point maximum, each creature affected by this option is charmed by you for 10 minutes, regarding you as a friendly acquaintance. Subtract each creature’s hit point maximum from the total before moving on to the next creature. A creature’s hit point maximum must be equal to or less than the remaining total for that creature to be affected."
                        },
                        {
                            "featuretext": "\t\t-Center of Attention (2 psi; conc., 1 min.). As an action, you exert an aura of power that grabs a creature's attention. Choose one creature you can see within 60 feet of you. It must make a Charisma saving throw. On a failed save, the creature is so thoroughly distracted by you that all other creatures are invisible to it until your concentration ends. This effect ends if the creature can no longer see or hear you or if it takes damage."
                        },
                        {
                            "featuretext": "\t\t-Invoke Awe (7 psi; conc., 10 min.). As an action, you exert an aura that inspires awe in others. Choose up to 5 creatures you can see within 60 feet of you. Each target must succeed on an Intelligence saving throw or be charmed by you until your concentration ends. While charmed, the target obeys all your verbal commands to the best of its ability and without doing anything obviously self-destructive. The charmed target will attack only creatures that it has seen attack you since it was charmed or that it was already hostile toward. At the end of each of its turns, it can repeat the saving throw, ending the effect on itself on a success."
                        }
                    ]
                },
                {
                    "name": "Mantle of Command",
                    "displayname": "Mantle of Command",
                    "previewtext": "Avatar- Exert an aura of trust and authority, aiding your allies.",
                    "effects": [
                        {
                            "featuretextwithbullet": "Mantle of Command: While focused on this discipline, when you end your turn and didn’t move during it, you can use your reaction to allow one ally you can see within 30 feet of you to move up to half their speed, following a path of your choice. To move in this way, the ally mustn’t be incapacitated."
                        },
                        {
                            "featuretext": "\t\t-Coordinated Movement (2 psi). As a bonus action, choose up to five allies you can see within 60 feet of you. Each of those allies can use their reaction to move up to half their speed, following a path of your choice."
                        },
                        {
                            "featuretext": "\t\t-Commander’s Sight (2 psi; conc., 1 rnd.). As an action, choose one creature you can see within 60 feet of you. Until the start of your next turn, your allies have advantage on attack rolls against that target."
                        },
                        {
                            "featuretext": "\t\t-Command to Strike (3 psi). As an action, choose one ally you can see within 60 feet of you. That ally can use their reaction to immediately take the Attack action. You choose the targets"
                        },
                        {
                            "featuretext": "\t\t-Strategic Mind (5 psi; conc., 1 min.). As an action, you exert an aura of trust and command that unites your allies into a cohesive unit. Until your concentration ends, any ally within 60 feet of you on their turn can, as a bonus action, take the Dash or Disengage action or roll a d4 and add the number rolled to each attack roll they make that turn."
                        },
                        {
                            "featuretext": "\t\t-Overwhelming Attack (7 psi). As an action, choose up to five allies you can see within 60 feet of you. Each of those allies can use their reaction to take the Attack action. You choose the targets of the attacks."
                        }
                    ]
                },
                {
                    "name": "Mantle of Courage",
                    "displayname": "Mantle of Courage",
                    "previewtext": "Avatar- You radiatie an aura of confidence and bravado to your allies.",
                    "effects": [
                        {
                            "featuretextwithbullet": "Mantle of Courage: While focused on this discipline, you and allies within 10 feet of you who can see you have advantage on saving throws against being frightened."
                        },
                        {
                            "featuretext": "\t\t-Incite Courage (2 psi). As a bonus action, choose up to six creatures you can see within 60 feet of you. If any of those creatures is frightened, that condition ends on that creature"
                        },
                        {
                            "featuretext": "\t\t-Aura of Victory (1–7 psi; conc., 10 min.). As a bonus action, you project psionic energy until your concentration ends. The energy fortifies you and your allies when your enemies are felled; whenever an enemy you can see is reduced to 0 hit points, you and each of your allies within 30 feet of you gain temporary hit points equal to double the psi points spent to activate this effect."
                        },
                        {
                            "featuretext": "\t\t-Pillar of Confidence (6 psi; conc., 1 rnd.). As an action, you and up to five creatures you can see within 60 feet of you each gain one extra action to use on your individual turns. The action goes away if not used before the end of your next turn. the action can be used only to make one weapon attack or to take the Dash or Disengage action."
                        }
                    ]
                },
                {
                    "name": "Mantle of Fear",
                    "displayname": "Mantle of Fear",
                    "previewtext": "Avatar- Turn yourself in to a beacon of terror to your enemies.",
                    "effects": [
                        {
                            "featuretextwithbullet": "Mantle of Fear: While focused on this discipline, you have advantage on Charisma (Intimidation) checks."
                        },
                        {
                            "featuretext": "\t\t-Incite Fear (2 psi; conc., 1 min.). As an action, choose one creature you can see within 60 feet of you. The target must succeed on a Wisdom saving throw or become frightened of you until your concentration ends. Whenever the frightened target ends its turn in a location where it can’t see you, it can repeat the saving throw, ending the effect on itself on a success."
                        },
                        {
                            "featuretext": "\t\t-Unsettling Aura (3 psi; conc., 1 hr.). As a bonus action, you cloak yourself in unsettling psychic energy. Until your concentration ends, any enemy within 60 feet of you that can see you must spend 1 extra foot of movement for every foot it moves toward you. A creature ignores this effect if immune to being frightened."
                        },
                        {
                            "featuretext": "\t\t-Incite Panic (5 psi; conc., 1 min.). As an action, choose up to eight creatures you can see within 90 feet of you that can see you. At the start of each of a target’s turns before your concentration ends, the target must make a Wisdom saving throw. On a failed save, the target is frightened until the start of its next turn, and you roll a die. If you roll an odd number, the frightened target moves half its speed in a random direction and takes no action on that turn, other than to scream in terror. If you roll an even number, the frightened target makes one melee attack against a random target within its reach. If there is no such target, it moves half its speed in a random direction and takes no action on that turn. This effect ends on a target if it succeeds on three saving throws against it."
                        }
                    ]
                },
                {
                    "name": "Mantle of Fury",
                    "displayname": "Mantle of Fury",
                    "previewtext": "Avatar- Let loose your primal fury, inciting bloodlust within yourself and your allies.",
                    "effects": [
                        {
                            "featuretextwithbullet": "Mantle of Fury: While focused on this discipline in combat, you and any ally who starts their turn within 10 feet of you gains a 5-foot increase to their walking speed during that turn."
                        },
                        {
                            "featuretext": "\t\t-Incite Fury (2 psi; conc., 1 min.). As a bonus action, choose up to three allies you can see within 60 feet of you (you can choose yourself in place of one of the allies). Until your concentration ends, each target can roll a d4 when rolling damage for a melee weapon attack and add the number rolled to the damage roll."
                        },
                        {
                            "featuretext": "\t\t-Mindless Charge (2 psi). As a bonus action, choose up to three creatures you can see within 60 feet of you. Each target can immediately use its reaction to move up to its speed in a straight line toward its nearest enemy."
                        },
                        {
                            "featuretext": "\t\t-Aura of Bloodletting (3 psi; conc., 1 min.). As a bonus action, you unleash an aura of rage. Until your concentration ends, you and any creature within 60 feet of you has advantage on melee attack rolls."
                        },
                        {
                            "featuretext": "\t\t-Overwhelming Fury (5 psi; conc., 1 min.). As an action, you flood rage into one creature you can see within 60 feet of you. The target must succeed on a Charisma saving throw, or it can use its actions only to make melee attacks until your concentration ends. It can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
                        }
                    ]
                },
                {
                    "name": "Mantle of Joy",
                    "displayname": "Mantle of Joy",
                    "previewtext": "Avatar- Radiate a soothing, psychic energy, bringing hope and comfort to those around you.",
                    "effects": [
                        {
                            "featuretextwithbullet": "Mantle of Joy: While focused on this discipline, you have advantage on Charisma (Persuasion) checks."
                        },
                        {
                            "featuretext": "\t\t-Soothing Presence (1–7 psi). As a bonus action, choose up to three creatures you can see within 60 feet of you. Each target gains 3 temporary hit points per psi point spent on this effect."
                        },
                        {
                            "featuretext": "\t\t-Comforting Aura (2 psi; conc., 1 min.). As a bonus action, choose up to three allies you can see (you can choose yourself in place of one of the allies). Until your concentration ends, each target can roll a d4 when making a saving throw and add the number rolled to the total."
                        },
                        {
                            "featuretext": "\t\t-Aura of Jubilation (3 psi; conc., 1 min.). As a bonus action, you radiate a distracting mirth until your concentration ends. Each creature within 60 feet of you that can see you suffers disadvantage on any checks using the Perception and Investigation skills."
                        },
                        {
                            "featuretext": "\t\t-Beacon of Recovery (5 psi). As a bonus action, you and up to five allies you can see within 60 feet of you can immediately make saving throws against every effect they’re suffering that allows a save at the start or end of their turns."
                        }
                    ]
                },
                {
                    "name": "Mastery of Air",
                    "displayname": "Mastery of Air",
                    "previewtext": "Wu Jen- You become one with the power of air; flying and letting of blasts of wind.",
                    "effects": [
                        {
                            "featuretextwithbullet": "Mastery of Air: While focused on this discipline, you take no falling damage, and you ignore difficult terrain when walking."
                        },
                        {
                            "featuretext": "\t\t-Wind Step (1–7 psi). As part of your move on your turn, you can fly up to 20 feet for each psi point spent. If you end this flight in the air, you fall unless something else holds you aloft."
                        },
                        {
                            "featuretext": "\t\t-Wind Stream (1–7 psi). As an action, you create a line of focused air that is 30 feet long and 5 feet wide. Each creature in that area must make a Strength saving throw, taking 1d8 bludgeoning damage per psi point spent and being knocked prone on a failed save, or half as much damage on a successful one."
                        },
                        {
                            "featuretext": "\t\t-Cloak of Air (3 psi; conc., 10 min.). As a bonus action, you seize control of the air around you to create a protective veil. Until your concentration ends, attack rolls against you have disadvantage, and when a creature you can see misses you with a melee attack, you can use your reaction to force the creature to repeat the attack roll against itself."
                        },
                        {
                            "featuretext": "\t\t-Wind Form (5 psi; conc., 10 min.). As a bonus action, you gain a flying speed of 60 feet, which lasts until your concentration ends"
                        },
                        {
                            "featuretext": "\t\t-Misty Form (6 psi; conc., 1 min.). As an action, your body becomes like a misty cloud until your concentration ends. In this form, you gain resistance to bludgeoning, piercing, and slashing damage, and you can’t take actions other than the Dash action. You can pass through openings that are no more than 1 inch wide without squeezing."
                        },
                        {
                            "featuretext": "\t\t-Animate Air (7 psi; conc., 1 hr.). As an action, you cause an air elemental to appear in an unoccupied space you can see within 120 feet of you. The elemental lasts until your concentration ends, and it obeys your verbal commands. In combat, roll for its initiative, and choose its behavior during its turns. When this effect ends, the elemental disappears. See the Monster Manual for its stat block."
                        }
                    ]
                },
                {
                    "name": "Mastery of Fire",
                    "displayname": "Mastery of Fire",
                    "previewtext": "Wu Jen- You become one with the power of fire; summoning flaming shields and causing explosions.",
                    "effects": [
                        {
                            "featuretextwithbullet": "Mastery of Fire: While focused on this discipline, you gain resistance to fire damage, and you gain a +2 bonus to rolls for fire damage."
                        },
                        {
                            "featuretext": "\t\t-Combustion (1–7 psi; conc., 1 min.). As an action, choose one creature or object you can see within 120 feet of you. The target must make a Constitution save. On a failed save, the target takes 1d10 fire damage per psi point spent, and it catches on fire, taking 1d6 fire damage at the end of each of its turns until your concentration ends or until it or a creature adjacent to it extinguishes the flames with an action. On a successful save, the target takes half as much damage and doesn’t catch on fire."
                        },
                        {
                            "featuretext": "\t\t-Rolling Flame (3 psi; conc., 1 min.). As an action, you create fire in a 20-foot-by-20-foot cube within 5 feet of you. The fire lasts until your concentration ends. Any creature in that area when you use this ability and any creature that ends its turn there takes 5 fire damage"
                        },
                        {
                            "featuretext": "\t\t-Detonation (5 psi). As an action, you create a fiery explosion at a point you can see within 120 feet of you. Each creature in a 20-foot-radius sphere centered on that point must make a Constitution saving throw, taking 7d6 fire damage and being knocked prone on a failed save, or half as much damage on a successful one."
                        },
                        {
                            "featuretext": "\t\t-Fire Form (5 psi; conc., 1 min.). As a bonus action, you become wreathed in flames until your concentration ends. Any creature that end its turn within 5 feet of you takes 3d6 fire damage."
                        },
                        {
                            "featuretext": "\t\t-Animate Fire (7 psi; conc., 1 hr.). As an action, you cause a fire elemental to appear in an unoccupied space you can see within 120 feet of you. The elemental lasts until your concentration ends, and it obeys your verbal commands. In combat, roll for its initiative, and choose its behavior during its turns. When this effect ends, the elemental disappears. See the Monster Manual for its stat block."
                        }
                    ]
                },
                {
                    "name": "Mastery of Force",
                    "displayname": "Mastery of Force",
                    "previewtext": "Wu Jen- You have honed your psionic power; moving things, and creatures, at will.",
                    "effects": [
                        {
                            "featuretextwithbullet": "Mastery of Force: While focused on this discipline, you have advantage on Strength checks."
                        },
                        {
                            "featuretext": "\t\t-Push (1–7 psi). As an action, choose one creature you can see within 60 feet of you. The target must make a Strength saving throw. On a failed save, it takes 1d8 force damage per psi point spent and is pushed up to 5 feet per point spent in a straight line away from you. On a successful save, it takes half as much damage."
                        },
                        {
                            "featuretext": "\t\t-Move (2–7 psi). Choose one object you can see within 60 feet of you that isn’t being worn or carried by another creature and that isn’t secured in place. It can’t be larger than 20 feet on a side, and its maximum weight depends on the psi points spent on this ability, as shown below. As an action, you move the object up to 60 feet, and you must keep the object within sight during this movement. If the object ends this movement in the air, it falls. If the object would fall on a creature, the creature must succeed on a DC 10 Dexterity saving throw or take damage as listed on the table in the pdf."
                        },
                        {
                            "featuretext": "\t\t-Inertial Armor (2 psi). As an action, you sheathe yourself in an intangible field of magical force. For 8 hours, your base AC is 14 + your Dexterity modifier, and you gain resistance to force damage. This effect ends if you are wearing or don armor."
                        },
                        {
                            "featuretext": "\t\t-Telekinetic Barrier (3 psi; conc., 10 min.). As an action, you create a transparent wall of telekinetic energy, at least one portion of which must be within 60 feet of you. The wall is 40 feet long, 10 feet high, and 1 inch thick. The wall lasts until your concentration ends. Each 10-foot section of the wall has an AC of 10 and 10 hit points."
                        },
                        {
                            "featuretext": "\t\t-Grasp (3 psi; conc., 1 min.). You attempt to grasp a creature in telekinetic energy and hold it captive. As an action, choose one creature you can see within 60 feet of you. The target must succeed on a Strength saving throw or be grappled by you until your concentration ends or until the target leaves your reach, which is 60 feet for this grapple. The grappled target can escape by succeeding on a Strength (Athletics) or Dexterity (Acrobatics) check contested by your psionic ability plus your proficiency bonus. When a target attempts to escape in this way, you can spend psi points to boost your check, abiding by your psi limit. You gain a +1 bonus per psi point spent. While a target is grappled in this manner, you create one of the following effects as an action:"
                        },
                        {
                            "featuretext": "\t\t-Crush (1–7 psi). The target takes 1d6 bludgeoning damage per psi point spent"
                        },
                        {
                            "featuretext": "\t\t-Move (1–7 psi). You move the target up to 5 feet per psi point spent. You can move it in the air and hold it there. It falls if the grapple ends."
                        }
                    ]
                },
                {
                    "name": "Mastery of Ice",
                    "displayname": "Mastery of Ice",
                    "previewtext": "Wu Jen- Shape ice to your will; launching spikes at or freezing creatures, and cover yourself in a protective layer of frost.",
                    "effects": [
                        {
                            "featuretextwithbullet": "Mastery of Ice: Psychic Focus. While focused on this discipline, you have resistance to cold damage"
                        },
                        {
                            "featuretext": "\t\t-Ice Spike (1–7 psi). As an action, you hurl a mote of ice at one creature you can see within 120 feet of you. The target must make a Dexterity saving throw. On a failed save, the target takes 1d8 cold damage per psi point spent and has its speed halved until the start of your next turn. On a successful save, the target takes half as much damage."
                        },
                        {
                            "featuretext": "\t\t-Ice Sheet (2 psi). As an action, choose a point on the ground you can see within 60 feet of you. The ground in a 20-foot radius centered on that point becomes covered in ice for 10 minutes. It is difficult terrain, and any creature that moves more than 10 feet on it must succeed on a Dexterity saving throw or fall prone. If the surface is sloped, a creature that falls prone in the area immediately slides to the bottom of the slope."
                        },
                        {
                            "featuretext": "\t\t-Frozen Sanctuary (3 psi). As a bonus action, you sheathe yourself with icy resilience. You gain 20 temporary hit points."
                        },
                        {
                            "featuretext": "\t\t-Frozen Rain (5 psi; conc., 1 min.). As an action, choose a point you can see within 120 feet of you. The air in a 20-foot-radius sphere centered on that point becomes deathly cold and saturated with moisture. Each creature in that area must make a Constitution saving throw. On a failed save, a target takes 6d6 cold damage, and its speed is reduced to 0 until your concentration ends. On a successful save, a target takes half as much damage. As an action, a target that has its speed reduced can end the effect early if it succeeds on a Strength (Athletics) check with a DC equal to this effect’s save DC. You can increase this effect’s damage by 1d6 per each additional psi point spent on it."
                        },
                        {
                            "featuretext": "\t\t-Ice Barrier (6 psi; conc., 10 min.). As an action, you create a wall of ice, at least one portion of which must be within 60 feet of you. The wall is 60 feet long, 15 feet high, and 1 foot thick. The wall lasts until your concentration ends. Each 10-foot section of the wall has AC 12 and 30 hit points. A creature that damages the wall with a melee attack takes cold damage equal to the damage the creature dealt to the wall."
                        }
                    ]
                },
                {
                    "name": "Mastery of Light and Darkness",
                    "displayname": "Mastery of Light and Darkness",
                    "previewtext": "Wu Jen- You claim dominion over light and darkness; creating magical darkness or light, summoning Shadows, and blasting creatures with rays of light.",
                    "effects": [
                        {
                            "featuretextwithbullet": "Mastery of Light and Darkness: Psychic Focus. While focused on this discipline, natural and magical darkness within 30 feet of you has no effect on your vision."
                        },
                        {
                            "featuretext": "\t\t-Darkness (1–7 psi). As an action, you create an area of magical darkness, which foils darkvision. Choose a spot you can see within 60 feet of you. Magical darkness radiates from that point in a sphere with a 10-foot radius per psi point spent on this ability. The light produced by spells of 2nd level or less is suppressed in this area."
                        },
                        {
                            "featuretext": "\t\t-Light (2 psi; conc., 1 min.). As an action, an object you touch radiates light in a 20-foot radius and dim light for an additional 20 feet. The light lasts until your concentration ends. Alternatively, a creature you touch radiates light in the same manner if it fails a Dexterity saving throw. While lit in this manner, it can’t hide, and attack rolls against it gain advantage."
                        },
                        {
                            "featuretext": "\t\t-Shadow Beasts (3 psi; conc., 1 min.). As an action, you cause two shadows to appear in unoccupied spaces you can see within 60 feet of you. The shadows last until your concentration ends, and they obey your verbal commands. In combat, roll for their initiative, and choose their behavior during their turns. When this effect ends, the shadows disappear. See the Monster Manual for their stat block."
                        },
                        {
                            "featuretext": "\t\t-Radiant Beam (5 psi; conc., 1 min.). As an action, you project a beam of light at one creature you can see within 60 feet of you. The target must make a Dexterity saving throw. On a failed save, it takes 6d6 radiant damage and is blinded until your concentration ends. On a successful save, it takes half as much damage. A blinded target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. You can increase this effect’s damage by 1d6 per each additional psi point spent on it."
                        }
                    ]
                },
                {
                    "name": "Mastery of Water",
                    "displayname": "Mastery of Water",
                    "previewtext": "Wu Jen- Your mind ebbs and flows like the tide; granting you swim speed, withering attacks, and water manipulation. ",
                    "effects": [
                        {
                            "featuretextwithbullet": "Mastery of Water: While focused on this discipline, you have a swimming speed equal to your walking speed, and you can breathe underwater"
                        },
                        {
                            "featuretext": "\t\t-Desiccate (1–7 psi). As an action, choose one creature you can see within 60 feet of you. The target must make a Constitution saving throw, taking 1d10 necrotic damage per psi point spent on this ability, or half as much damage on a successful one."
                        },
                        {
                            "featuretext": "\t\t-Watery Grasp (2 psi). As an action, you unleash a wave that surges forth and then retreats to you like the rising tide. You create a wave in a 20-foot-by-20-foot square. At least some portion of the square’s border must be within 5 feet of you. Any creature in that square must make a Strength saving throw. On a failed save, a target takes 2d6 bludgeoning damage, is knocked prone, and is pulled up to 10 feet closer to you. On a successful save, a target takes half as much damage. You can increase this ability’s damage by 1d6 per additional psi point spent on it."
                        },
                        {
                            "featuretext": "\t\t-Water Whip (3 psi). As an action, you unleash a jet of water in a line that is 60 feet long and 5 feet wide. Each creature in the line must make a Strength saving throw, taking 3d6 bludgeoning damage on a failed save, or half as much damage on a successful one. In addition, you can move each target that fails its saving throw to any unoccupied space touching the line. You can increase this ability’s damage by 1d6 per additional psi point spent on it."
                        },
                        {
                            "featuretext": "\t\t-Water Breathing (5 psi). As an action, you grant yourself and up to ten willing creatures you can see within 60 feet of you the ability to breathe underwater for the next 24 hours."
                        },
                        {
                            "featuretext": "\t\t-Water Sphere (6 psi; conc., 1 min.). As an action, you cause a sphere of water to form around a creature. Choose one creature you can see within 60 feet of you. The target must make a Dexterity saving throw. On a failed save, it becomes trapped in the sphere of water until your concentration ends. While the target is trapped, its speed is halved, it suffers disadvantage on attack rolls, and it can’t see anything more than 10 feet away from it. However, attack rolls against it also suffer disadvantage. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a successful one."
                        },
                        {
                            "featuretext": "\t\t-Animate Water (7 psi; conc., 1 hr.). As an action, you cause a water elemental to appear in an unoccupied space you can see within 120 feet of you. The elemental lasts until your concentration ends, and it obeys your verbal commands. In combat, roll for its initiative, and choose its behavior during its turns. When this effect ends, the elemental disappears. See the Monster Manual for its stat block."
                        }
                    ]
                },
                {
                    "name": "Mastery of Weather",
                    "displayname": "Mastery of Weather",
                    "previewtext": "Wu Jen- Your mind reaches into the sky, reshaping the clouds and storms.",
                    "effects": [
                        {
                            "featuretextwithbullet": "Mastery of Weather: While focused on this discipline, you have resistance to lightning and thunder damage."
                        },
                        {
                            "featuretext": "\t\t-Cloud Steps (1–7 psi; conc., 10 min.). As an action, you conjure forth clouds to create a solid, translucent staircase that lasts until your concentration ends. The stairs form a spiral that fills a 10-foot-by-10-foot area and reaches upward 20 feet per psi point spent."
                        },
                        {
                            "featuretext": "\t\t-Hungry Lightning (1–7 psi). As an action, you lash out at one creature you can see within 60 feet of you with tendrils of lightning. The target must make a Dexterity saving throw, with disadvantage if it’s wearing heavy armor. The target takes 1d8 lightning damage per psi point spent on a failed save, or half as much damage on a successful one."
                        },
                        {
                            "featuretext": "\t\t-Wall of Clouds (2 psi; conc., 10 min.). As an action, you create a wall of clouds, at least one portion of which must be within 60 feet of you. The wall is 60 feet long, 15 feet high, and 1 foot thick. The wall lasts until your concentration ends. Creatures can pass through it without hindrance, but the wall blocks vision."
                        },
                        {
                            "featuretext": "\t\t-Whirlwind (2 psi). As an action, choose a point you can see within 60 feet of you. Winds howl in a 20-foot-radius sphere centered on that point. Each creature in the sphere must succeed on a Strength saving throw or take 1d6 bludgeoning damage and be moved to an unoccupied space of your choice in the sphere. Any loose object in the sphere is moved to an unoccupied space of your choice within it if the object weighs no more than 100 pounds."
                        },
                        {
                            "featuretext": "\t\t-Lightning Leap (5 psi). As an action, you let loose a line of lightning that is 60 feet long and 5 feet wide. Each creature in the line must make a Dexterity saving throw, taking 6d6 lightning damage on a failed save, or half as much damage on a successful one. You can then teleport to an unoccupied space touched by the line. You can increase this ability’s damage by 1d6 per additional psi point spent on it."
                        },
                        {
                            "featuretext": "\t\t-Wall of Thunder (6 psi; conc., 10 min.). As an action, you create a wall of thunder, at least one portion of which must be within 60 feet of you. The wall is 60 feet long, 15 feet high, and 1 foot thick. The wall lasts until your concentration ends. Every foot moved through the wall costs 1 extra foot of movement. When a creature moves into the wall’s space for the first time on a turn or starts its turn there, that creature must succeed on a Strength saving throw, or it takes 6d6 thunder damage, is pushed in a straight line up to 30 feet away from the wall, and is knocked prone."
                        },
                        {
                            "featuretext": "\t\t-Thunder Clap (7 psi). As an action, choose a point you can see within 60 feet of you. Thunder energy erupts in a 20-foot-radius sphere centered on that point. Each creature in that area must make Constitution saving throw. On a failed save, a target takes 8d6 thunder damage, and it is stunned until the end of your next turn. On a successful save, a target takes half as much damage."
                        }
                    ]
                },
                {
                    "name": "Mastery of Wood and Earth",
                    "displayname": "Mastery of Wood and Earth",
                    "previewtext": "Wu Jen- Bolster your defenses and cause other creatures' equipment to become useless. ",
                    "effects": [
                        {
                            "featuretextwithbullet": "Mastery of Wood and Earth: While focused on this discipline, you have a +1 bonus to AC."
                        },
                        {
                            "featuretext": "\t\t-Animate Weapon (1–7 psi). As an action, your mind seizes control of a one-handed melee weapon you’re holding. The weapon flies toward one creature you can see within 30 feet of you and makes a one-handed melee weapon attack against it, using your discipline attack modifier for the attack and damage rolls. On a hit, the weapon deals its normal damage, plus an extra 1d10 force damage per psi point spent on this ability. The weapon returns to your grasp after it attacks."
                        },
                        {
                            "featuretext": "\t\t-Warp Weapon (2 psi). As an action, choose one nonmagical weapon held by one creature you can see within 60 feet of you. That creature must succeed on a Strength saving throw, or the chosen weapon can’t be used to attack until the end of your next turn."
                        },
                        {
                            "featuretext": "\t\t-Warp Armor (3 psi). As an action, choose a nonmagical suit of armor worn by one creature you can see within 60 feet of you. That creature must succeed on a Constitution saving throw, or the creature’s AC becomes 10 + its Dexterity modifier until the end of your next turn."
                        },
                        {
                            "featuretext": "\t\t-Wall of Wood (3 psi; conc., 1 hr.). As an action, you create a wall of wood at least one portion of which must be within 60 feet of you. The wall is 60 feet long, 15 feet high, and 1 foot thick. The wall lasts until your concentration ends. Each 5-foot wide section of the wall has AC 12 and 100 hit points. Breaking one section creates a 5-foot by 5-foot hole in it, but the wall otherwise remains intact."
                        },
                        {
                            "featuretext": "\t\t-Armored Form (6 psi; conc., 1 min.). As a bonus action, you gain resistance to bludgeoning, piercing, and slashing damage, which lasts until your concentration ends."
                        },
                        {
                            "featuretext": "\t\t-Animate Earth (7 psi; conc., 1 hr.). As an action, you cause an earth elemental to appear in an unoccupied space you can see within 120 feet of you. The elemental lasts until your concentration ends, and it obeys your verbal commands. In combat, roll for its initiative, and choose its behavior during its turns. When this effect ends, the elemental disappears. See the Monster Manual for its stat block."
                        }
                    ]
                },
                {
                    "name": "Nomadic Arrow",
                    "displayname": "Nomadic Arrow",
                    "previewtext": "Nomad- Imbue your ranged weapon with your psionic power, granting it benefits.",
                    "effects": [
                        {
                            "featuretextwithbullet": "Nomadic Arrow: While you are focused on this discipline, any attack roll you make for a ranged weapon attack ignores disadvantage. If disadvantage would normally apply to the roll, that roll also can’t benefit from advantage."
                        },
                        {
                            "featuretext": "\t\t-Speed Dart (1–7 psi). As a bonus action, you imbue one ranged weapon you hold with psionic power. The next attack you make with it that hits before the end of the current turn deals an extra 1d10 psychic damage per psi point spent."
                        },
                        {
                            "featuretext": "\t\t-Seeking Missile (2 psi). As a reaction when you miss with a ranged weapon attack, you can repeat the attack roll against the same target."
                        },
                        {
                            "featuretext": "\t\t-Faithful Archer (5 psi; conc., 1 min.). As a bonus action, you imbue a ranged weapon with a limited sentience. Until your concentration ends, you can make an extra attack with the weapon at the start of each of your turns (no action required). If it is a thrown weapon, it returns to your grasp each time you make any attack with it."
                        }
                    ]
                },
                {
                    "name": "Nomadic Chameleon",
                    "displayname": "Nomadic Chameleon",
                    "previewtext": "Nomad- Distort your appearance and that of others, efficiently hiding you.",
                    "effects": [
                        {
                            "featuretextwithbullet": "Nomadic Chameleon: While focused on this discipline, you have advantage on Dexterity (Stealth) checks."
                        },
                        {
                            "featuretext": "\t\t-Chameleon (2 psi). As an action, you can attempt to hide even if you fail to meet the requirements needed to do so. At the end of the current turn, you remain hidden only if you then meet the normal requirements for hiding."
                        },
                        {
                            "featuretext": "\t\t-Step from Sight (3 psi; conc., 1 min.). As a bonus action, cloak yourself from sight. You can target one additional creature for every additional psi point you spend on this ability. The added targets must be visible to you and within 60 feet of you.\nEach target turns invisible and remains so until your concentration ends or until immediately after it targets, damages, or otherwise affects any creature with an attack, a spell, or another ability."
                        },
                        {
                            "featuretext": "\t\t-Enduring Invisibility (7 psi; conc., 1 min.). As a bonus action, you turn invisible and remain so until your concentration ends."
                        }
                    ]
                },
                {
                    "name": "Nomadic Mind",
                    "displayname": "Nomadic Mind",
                    "previewtext": "Nomad- Stretch your mind outwards and gather knowledge from others. ",
                    "effects": [
                        {
                            "featuretextwithbullet": "Nomadic Mind: Whenever you focus on this discipline, you choose one skill or tool and have proficiency with it until your focus ends. Alternatively, you gain the ability to read and write one language of your choice until your focus ends"
                        },
                        {
                            "featuretext": "\t\t-Wandering Mind (2–6 psi; conc., 10 min.). You enter a deep contemplation. If you concentrate for this option’s full duration, you then gain proficiency with up to three of the following skills (one skill for every 2 psi points spent): Animal Handling, Arcana, History, Medicine, Nature, Performance, Religion, and Survival. The benefit lasts for 1 hour, no concentration required"
                        },
                        {
                            "featuretext": "\t\t-Find Creature (2 psi; conc., 1 hr.). You cast your mind about for information about a specific creature. If you concentrate for this option’s full duration, you then gain a general understanding of the creature’s current location. You learn the region, city, town, village, or district where it is, pinpointing an area between 1 and 3 miles on a side (DM’s choice). If the creature is on another plane of existence, you instead learn which plane."
                        },
                        {
                            "featuretext": "\t\t-Item Lore (3 psi; conc., 1 hr.). You carefully study an item. If you concentrate for this option’s full duration while remaining within 5 feet of the item, you then gain the benefits of an identify spell cast on that item."
                        },
                        {
                            "featuretext": "\t\t-Psychic Speech (5 psi). As an action, you attune your mind to the psychic imprint of all language. For 1 hour, you gain the ability to understand any language you hear or attempt to read. In addition, when you speak, all creatures that can understand a language understand what you say, regardless of what language you use."
                        },
                        {
                            "featuretext": "\t\t-Wandering Eye (6 psi; conc., 1 hr.). As an action, you create a psychic sensor within 60 feet of you. The sensor lasts until your concentration ends. The sensor is invisible and hovers in the air. You mentally receive visual information from it, which has normal vision and darkvision with a range of 60 feet. The sensor can look in all directions. As an action, you can move the sensor up to 30 feet in any direction. There is no limit to how far away from you the eye can move, but it can’t enter another plane of existence. A solid barrier blocks the eye’s movement, but the eye can pass through an opening as small as 1 inch in diameter."
                        },
                        {
                            "featuretext": "\t\t-Phasing Eye (7 psi; conc., 1 hr.). As Wandering Eye above, except the eye can move through solid objects but can’t end its movement in one. If it does so, the effect immediately ends"
                        }
                    ]
                },
                {
                    "name": "Nomadic Step",
                    "displayname": "Nomadic Step",
                    "previewtext": "Nomad- Twist the world around you, granting you instantaneous travel.",
                    "effects": [
                        {
                            "featuretextwithbullet": "Nomadic Step: After you teleport on your turn while focused on this discipline, your walking speed increases by 10 feet until the end of the turn, as you are propelled by the magic of your teleportation. You can receive this increase only once per turn."
                        },
                        {
                            "featuretext": "\t\t-Defensive Step (2 psi). When you are hit by an attack, you can use your reaction to gain a +4 bonus to AC against that attack, possibly turning it into a miss. You then teleport up to 10 feet to an unoccupied space you can see."
                        },
                        {
                            "featuretext": "\t\t-There and Back Again (2 psi). As a bonus action, you teleport up to 20 feet to an unoccupied space you can see and then move up to half your speed. At the end of your turn, you can teleport back to the spot you occupied before teleporting, unless it is now occupied or on a different plane of existence."
                        },
                        {
                            "featuretext": "\t\t-Transposition (3 psi). If you haven’t moved yet on your turn, choose an ally you can see within 60 feet of you. As a bonus action, you and that creature teleport, swapping places, and your speed is reduced to 0 until the end of the turn. This ability fails and is wasted if either of you can’t fit in the destination space."
                        },
                        {
                            "featuretext": "\t\t-Baleful Transposition (5 psi). As an action, choose one creature you can see within 120 feet of you. That creature must make a Wisdom saving throw. On a failed save, you and that creature teleport, swapping places. This ability fails and is wasted if either of you can’t fit in the destination space."
                        },
                        {
                            "featuretext": "\t\t-Phantom Caravan (6 psi). As an action, you and up to six willing creatures of your choice that you can see within 60 feet of you teleport up to 1 mile to a spot you can see. If there isn’t an open space for all the targets to occupy at the arrival point, this ability fails and is wasted."
                        },
                        {
                            "featuretext": "\t\t-Nomad’s Gate (7 psi; conc., 1 hr.). As an action, you create a 5-foot cube of dim, gray light within 5 feet of you. You create an identical cube at any point of your choice within 1 mile that you have viewed within the past 24 hours. Until your concentration ends, anyone entering one of the cubes immediately teleports to the other one, appearing in an unoccupied space next to it. The teleportation fails if there is no space for the creature to appear in."
                        }
                    ]
                },
                {
                    "name": "Precognition",
                    "displayname": "Precognition",
                    "previewtext": "Awakended- Pull in massive amounts of data from around you, weaving together probabilities to grant you extra insight.",
                    "effects": [
                        {
                            "featuretextwithbullet": "Precognition: While focused on this discipline, you have advantage on initiative rolls."
                        },
                        {
                            "featuretext": "\t\t-Precognitive Hunch (2 psi; conc., 1 min.). As a bonus action, you open yourself to receive momentary insights that improve your odds of success; until your concentration ends, whenever you make an attack roll, a saving throw, or an ability check, you roll a d4 and add it to the total."
                        },
                        {
                            "featuretext": "\t\t-All-Around Sight (3 psi). In response to an attack hitting you, you use your reaction to impose disadvantage on that attack roll, possibly causing it to miss."
                        },
                        {
                            "featuretext": "\t\t-Danger Sense (5 psi; conc., 8 hr.). As an action, you create a psychic model of reality in your mind and set it to show you a few seconds into the future. Until your concentration ends, you can’t be surprised, attack rolls against you can’t gain advantage, and you gain a +10 bonus to initiative."
                        },
                        {
                            "featuretext": "\t\t-Victory Before Battle (7 psi). When you roll initiative, you can use this ability to grant yourself and up to five creatures of your choice within 60 feet of you a +10 bonus to initiative"
                        }
                    ]
                },
                {
                    "name": "Psionic Restoration",
                    "displayname": "Psionic Restoration",
                    "previewtext": "Immortal- Cure wounds and restore health to yourself and others.",
                    "effects": [
                        {
                            "featuretextwithbullet": "Psionic Restoration: While focused on this discipline, you can use a bonus action to touch a creature that has 0 hit points and stabilize it."
                        },
                        {
                            "featuretext": "\t\t-Mend Wounds (1–7 psi). As an action, you can spend psi points to restore hit points to one creature you touch. The creature regains 1d8 hit points per psi point spent."
                        },
                        {
                            "featuretext": "\t\t-Restore Health (3 psi). As an action, you touch one creature and remove one of the following conditions from it: blinded, deafened, paralyzed, or poisoned. Alternatively, you remove one disease from the creature."
                        },
                        {
                            "featuretext": "\t\t-Restore Life (5 psi). As an action, you touch one creature that has died within the last minute. The creature returns to life with 1 hit point. This ability can’t return to life a creature that has died of old age, nor can it restore a creature missing any vital body parts."
                        },
                        {
                            "featuretext": "\t\t-Restore Vigor (7 psi). As an action, you can touch one creature and choose one of the following: remove any reductions to one of its ability scores, remove one effect that reduces its hit point maximum, or reduce its exhaustion level by one."
                        }
                    ]
                },
                {
                    "name": "Psionic Weapon",
                    "displayname": "Psionic Weapon",
                    "previewtext": "Immortal- Channel psionic energy in to your attacks.",
                    "effects": [
                        {
                            "featuretextwithbullet": "Psionic Weapon: Whenever you focus on this discipline, choose one weapon you’re holding or your unarmed strike. When you attack with it while focused on this discipline, its damage is psychic and magical, rather than its normal damage type. Until you reach 6th level as a mystic, you don’t add your Strength or Dexterity modifier to the psychic attack’s damage rolls."
                        },
                        {
                            "featuretext": "\t\t-Ethereal Weapon (1 psi). As a bonus action, you temporarily transform one weapon you’re holding or your unarmed strike into pure psionic energy. The next attack you make with it before the end of your turn ignores the target’s armor, requiring no attack roll. Instead, the target makes a Dexterity saving throw against this discipline. On a failed save, the target takes the attack’s normal damage and suffers its additional effects. On a successful save, the target takes half damage from the attack but suffers no additional effects that would normally be imposed on a hit."
                        },
                        {
                            "featuretext": "\t\t-Lethal Strike (1–7 psi). As a bonus action, you imbue a weapon you’re holding or your unarmed strike with psychic energy. The next time you hit with it before the end of your turn, it deals an extra 1d10 psychic damage per psi point spent."
                        },
                        {
                            "featuretext": "\t\t-Augmented Weapon (5 psi; conc., 10 min.). As a bonus action, touch one simple or martial weapon. Until your concentration ends, that weapon becomes a magic weapon with a +3 bonus to its attack and damage rolls."
                        }
                    ]
                },
                {
                    "name": "Psychic Assault",
                    "displayname": "Psychic Assault",
                    "previewtext": "Awakened- Turn you mind in to a devastating weapon.",
                    "effects": [
                        {
                            "featuretextwithbullet": "Psychic Assault: While focused on this discipline, you gain a +2 bonus to damage rolls with psionic talents that deal psychic damage."
                        },
                        {
                            "featuretext": "\t\t-Psionic Blast (1–7 psi). As an action, choose one creature you can see within 60 feet of you. The target takes 1d8 psychic damage per psi point spent on this ability."
                        },
                        {
                            "featuretext": "\t\t-Ego Whip (3 psi). As an action, choose one creature you can see within 60 feet of you. The target must make an Intelligence saving throw. On a failed save, the creature takes 3d8 psychic damage, and it is filled with self-doubt, leaving it able to use its action on its next turn only to take the Dodge, Disengage, or Hide action. On a successful saving throw, it takes half as much damage."
                        },
                        {
                            "featuretext": "\t\t-Id Insinuation (5 psi). As an action, choose one creature you can see within 60 feet of you. The target must make an Intelligence saving throw. On a failed save, the creature takes 5d8 psychic damage, and it goes into a fury, as its id runs rampant. On its next turn, it can use its action only to take the Dodge or Attack action. On a successful save, it takes half as much damage"
                        },
                        {
                            "featuretext": "\t\t-Psychic Blast (6 psi). As an action, you unleash devastating psychic energy in a 60-foot cone. Each creature in that area must make an Intelligence saving throw, taking 8d8 psychic damage on a failed save, or half as much damage on a successful one. You can increase the damage by 2d8 if you spend 1 more psi point on this ability."
                        },
                        {
                            "featuretext": "\t\t-Psychic Crush (7 psi). As an action, you create a 20-foot cube of psychic energy within 120 feet of you. Each creature in that area must make an Intelligence saving throw. On a failed save, a target takes 8d8 psychic damage and is stunned until the end of your next turn. On a successful save, a target takes half as much damage."
                        }
                    ]
                },
                {
                    "name": "Psychic Disruption",
                    "displayname": "Psychic Disruption",
                    "previewtext": "Awakened- Mess with other creatures' heads and throw them off balance. ",
                    "effects": [
                        {
                            "featuretextwithbullet": "Psychic Disruption: While focused on this discipline, you have advantage on Charisma (Deception) checks"
                        },
                        {
                            "featuretext": "\t\t-Distracting Haze (1–7 psi; conc., 1 min.). As an action, choose one creature you can see within 60 feet of you. That creature must make an Intelligence saving throw. On a failed save, it takes 1d10 psychic damage per psi point spent and can’t see anything more than 10 feet from it until your concentration ends. On a successful save, it takes half as much damage."
                        },
                        {
                            "featuretext": "\t\t-Daze (3 psi). As an action, choose one creature you can see within 60 feet of you. That creature must make an Intelligence saving throw. On a failed save, the target is incapacitated until the end of your next turn or until it takes any damage."
                        },
                        {
                            "featuretext": "\t\t-Mind Storm (5 psi). As an action, choose a point you can see within 60 feet of you. Each creature in a 20-foot-radius sphere centered on that point must make a Wisdom saving throw. On a failed save, a target takes 6d8 psychic damage and suffers disadvantage on all saving throws until the end of your next turn. On a successful save, a creature takes half as much damage. You can increase the damage by 1d6 per additional psi point spent on this ability."
                        }
                    ]
                },
                {
                    "name": "Psychic Inquisition",
                    "displayname": "Psychic Inquisition",
                    "previewtext": "Awakened- Pull inforation out of other creatures' minds, or plant it.",
                    "effects": [
                        {
                            "featuretextwithbullet": "Psychic Inquisition: While focused on this discipline, you know when a creature communicating with you via telepathy is lying."
                        },
                        {
                            "featuretext": "\t\t-Hammer of Inquisition (1–7 psi). As an action, choose one creature you can see within 60 feet of you. The target must make an Intelligence saving throw. On a failed save, it takes 1d10 psychic damage per psi point spent and suffers disadvantage on its next Wisdom saving throw before the end of your next turn. On a successful save, it takes half as much damage."
                        },
                        {
                            "featuretext": "\t\t-Forceful Query (2 psi). As an action, you ask a question of one creature that can see and hear you within 30 feet of you. The question must be phrased so that it can be answered with a yes or no, otherwise this ability fails. The target must succeed on a Wisdom saving throw, or it replies with a truthful answer. A creature is immune to this ability if it is immune to being charmed."
                        },
                        {
                            "featuretext": "\t\t-Ransack Mind (5 psi; conc., 1 hr.). While you concentrate on this ability, you probe one creature’s mind. The creature must remain within 30 feet of you, and you must be able to see it. If you reach the ability’s full duration, the target must make three Intelligence saving throws, and you learn information from it based on the number of saving throws it fails. With one failed saving throw, you learn its key memories from the past 12 hours. With two failed saving throws, you learn its key memories from the past 24 hours.  With three failed saving throws, you learn its key memories from the past 48 hours."
                        },
                        {
                            "featuretext": "\t\t-Phantom Idea (6 psi; conc., 1 hr.). While you concentrate on this ability, you probe one creature’s mind. The creature must remain within 30 feet of you, and you must be able to see it. If you reach the ability’s full duration, the target must make three Intelligence saving throws, and you plant a memory or an idea in it, which lasts for a number of hours based on the number of saving throws it fails. You choose whether the idea or memory is trivial (such as “I had porridge for breakfast” or “Ale is the worst”) or personality-defining (“I failed to save my village from orc marauders and am therefore a coward” or “Magic is a scourge, so I renounce it”). With one failed saving throw, the idea or memory lasts for the next 4 hours. With two failed saving throws, it lasts for 24 hours. With three failed saving throws, it lasts for 48 hours."
                        }
                    ]
                },
                {
                    "name": "Psychic Phantoms",
                    "displayname": "Psychic Phantoms",
                    "previewtext": "Awakened- Force others to see what isn't really there.",
                    "effects": [
                        {
                            "featuretextwithbullet": "Psychic Focus. While focused on this discipline, you have advantage on Charisma (Deception) checks."
                        },
                        {
                            "featuretext": "\t\t-Distracting Figment (1–7 psi). As an action, choose one creature you can see within 60 feet of you. The target must make an Intelligence saving throw. On a failed save, it takes 1d10 psychic damage per psi point spent and thinks it perceives a threatening creature just out of its sight; until the end of your next turn, it can’t use reactions, and melee attack rolls against it have advantage. On a successful save, it takes half as much damage."
                        },
                        {
                            "featuretext": "\t\t-Phantom Foe (3 psi; conc., 1 min.). As an action, choose one creature you can see within 60 feet of you. The target must make an Intelligence saving throw. On a failed save, it perceives a horrid creature adjacent to it until your concentration ends. During this time, the target can’t take reactions, and it takes 1d8 psychic damage at the start of each of its turns. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. You can increase the damage by 1d8 for each additional psi point spent on the ability."
                        },
                        {
                            "featuretext": "\t\t-Phantom Betrayal (5 psi; conc., 1 min.). As an action, you plant delusional paranoia in a creature’s mind. Choose one creature you can see within 60 feet of you. The target must succeed on an Intelligence saving throw, or until your concentration ends, it must target its allies with attacks and other damaging effects. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. A creature is immune to this ability if it is immune to being charmed."
                        },
                        {
                            "featuretext": "\t\t-Phantom Riches (7 psi; conc., 1 min.). As an action, you plant the phantom of a greatly desired object in a creature’s mind. Choose one creature you can see within 60 feet of you. The target must make an Intelligence saving throw. On a failed save, you gain partial control over the target’s behavior until your concentration ends; the target moves as you wish on each of its turns, as it thinks it pursues the phantom object it desires. If it hasn’t taken damage since its last turn, it can use its action only to admire the object you created in its perception. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success"
                        }
                    ]
                },
                {
                    "name": "Telepathic Contact",
                    "displayname": "Telepathic Contact",
                    "previewtext": "Awakened- Expand your powers of telepathy, pulling the truth from others or forcing your own truth on them.",
                    "effects": [
                        {
                            "featuretextwithbullet": "Telepathic Contact: While focused on this discipline, you gain the ability to use your Telepathy class feature with up to six creatures at once. If you don’t have that feature from the mystic class, you instead gain it while focused on this discipline"
                        },
                        {
                            "featuretext": "\t\t-Exacting Query (2 psi). As an action, you target one creature you can communicate with via telepathy. The target must make an Intelligence saving throw. On a failed save, the target truthfully answers one question you ask it via telepathy. On a successful save, the target is unaffected, and you can’t use this ability on it again until you finish a long rest. A creature is immune to this ability if it is immune to being charmed."
                        },
                        {
                            "featuretext": "\t\t-Occluded Mind (2 psi). As an action, you target one creature you can communicate with via telepathy. The target must make an Intelligence saving throw. On a failed save, the target believes one statement of your choice for the next 5 minutes that you communicate to it via telepathy. The statement can be up to ten words long, and it must describe you or a creature or an object the target can see. On a successful save, the target is unaffected, and you can’t use this ability on it again until you finish a long rest. A creature is immune to this ability if it is immune to being charmed."
                        },
                        {
                            "featuretext": "\t\t-Broken Will (5 psi). As an action, you target one creature you can communicate with via telepathy. The target must make an Intelligence saving throw. On a failed save, you choose the target’s movement and action on its next turn. On a successful save, the target is unaffected, and you can’t use this ability on it again until you finish a long rest. A creature is immune to this ability if it is immune to being charmed."
                        },
                        {
                            "featuretext": "\t\t-Psychic Grip (6 psi; conc., 1 min.). As an action, you target one creature you can see within 60 feet of you. The target must succeed on an Intelligence saving throw, or it is paralyzed until your concentration ends. At the end of each of its turns, it can repeat the saving throw. On a success, this effect ends. On a failure, you can use your reaction to force the target to move up to half its speed, even though it’s paralyzed."
                        },
                        {
                            "featuretext": "\t\t-Psychic Domination (7 psi; conc., 1 min.). As an action, you target one creature you can see within 60 feet of you. The target must succeed on an Intelligence saving throw, or you choose the creature’s actions and movement on its turns until your concentration ends. At the end of each of its turns, it can repeat the saving throw, ending the effect on itself on a success. A creature is immune to this ability if it is immune to being charmed."
                        }
                    ]
                },
                {
                    "name": "Third Eye",
                    "displayname": "Third Eye",
                    "previewtext": "Nomad- Enhance your senses, neither insivibility or objects will obstruct your view.",
                    "effects": [
                        {
                            "featuretextwithbullet": "Third Eye: While focused on this discipline, you have darkvision with a range of 60 feet. If you already have darkvision with that range or greater, increase its range by 10 feet"
                        },
                        {
                            "featuretext": "\t\t-Tremorsense (2 psi; conc., 1 min.). As a bonus action, you gain tremorsense with a radius of 30 feet, which lasts until your concentration ends."
                        },
                        {
                            "featuretext": "\t\t-Unwavering Eye (2 psi). As a bonus action, you gain advantage on Wisdom checks for 1 minute."
                        },
                        {
                            "featuretext": "\t\t-Piercing Sight (3 psi; conc., 1 min.). As a bonus action, you gain the ability to see through objects that are up to 1 foot thick within 30 feet of you. This sight lasts until your concentration ends"
                        }
                    ]
                }
            ]
        },
        {
            "name": "Blood Curses",
            "title": "Blood Curses",
            "selections": "1",
            "entries": [
                {
                    "name": "Binding",
                    "displayname": "Binding",
                    "previewtext": "You can attempt to bind an enemy one size larger than you within 30 feet.",
                    "effects": [
                        {
                            "featuretextwithbullet": "Blood Curse of Binding: As a Bonus Action, you can attempt to bind an enemy no more than one size larger than you within 30 feet. The target must succeed on a Strength saving throw (DC = 8 + Proficiency + Wisdom modifier) or have their speed reduced to 0 until the beginning of your next turn.\n   Amplify: The Curse becomes ongoing, and can affect a creature no more than two sizes larger than you. At the end of each of its turns, the cursed can make another Strength saving throw. On a success, this Curse ends. You can end the Curse whenever you like (no Action required)."
                        }
                    ]
                },
                {
                    "name": "Eyeless",
                    "displayname": "Eyeless",
                    "previewtext": "You can impose disadvantage against attacks made against you by enemies with eyes who are within 30 feet.",
                    "effects": [
                        {
                            "featuretextwithbullet": "Blood Curse of the Eyeless: When an enemy with eyes within 30 feet makes a weapon attack against you, you can use your Reaction to impose disadvantage on the attack.\n   Amplify: The triggering attack can be targeting a creature other than yourself."
                        }
                    ]
                },
                {
                    "name": "Fallen Puppet",
                    "displayname": "Fallen Puppet",
                    "previewtext": "You can use a Reaction when a creature goes unconscious or dead to command them to make a single weapon attack against a target in range.",
                    "effects": [
                        {
                            "featuretextwithbullet": "Blood Curse of the Fallen Puppet: When a creature Falls unconscious or dies within 30 feet of you, you can use your reaction to give that creature a single weapon attack against a target of your choice within in its attack range. After the attack the creature returns to being unconscious or dead.\n   Amplify: You Grant bonus to the attack roll and damage role of the cursed creatures attack equal to your Wisdom modifier (Minimum of 1)."
                        }
                    ]
                },
                {
                    "name": "Fending Rite",
                    "displayname": "Fending Rite",
                    "previewtext": "If a spell causes you to make a Dexterity saving throw, you can use your Reaction to deflect the spell, gaining a Bonus to the Saving Throw equal to your Wisdom modifier.",
                    "effects": [
                        {
                            "featuretextwithbullet": "Blood Curse of the Fending Rite: When an enemy casts a spell that requires a Dexterity Saving Throw, you can use your Reaction to deflect the spell with your Crimson Rite. You gain a bonus to the initial Saving Throw against that spell equal to your Wisdom modifier (Minimum of 1). This curse is invoked before the Saving Throw is rolled.\n   Amplify: You grant all allies within 5 feet of you this bonus to their Saving Throw against the triggering spell as well."
                        }
                    ]
                },
                {
                    "name": "Marked",
                    "displayname": "Marked",
                    "previewtext": "You can mark an enemy within 30 feet. Until the end of your turn, all Crimson Rite damage is doubled.",
                    "effects": [
                        {
                            "featuretextwithbullet": "Blood Curse of the Marked: As a bone infection, you can mark an enemy within 30 feet. Until the end of your turn, all Crimson Rite damage you deal to the target is doubled.\n   Amplify: You cause the marked target to also lose resistance to your Rite damage type until the beginning of your next turn."
                        }
                    ]
                },
                {
                    "name": "Mutual Suffering",
                    "displayname": "Mutual Suffering",
                    "previewtext": "You can force a creature within 30 feet to share the pain they inflict upon you.",
                    "effects": [
                        {
                            "featuretextwithbullet": "Blood Curse of Mutual Suffering: As a bonus action, you can link to a creature within 30 feet for up to a minute, forcing them to share in the pain they inflict upon you. The next time the cursed creature damages you with a weapon attack, this Curse deals Necrotic damage to the cursed creature equal to half of the damage you suffered. This curse then ends.\n   Amplify: This curse instead deals damage equal to the damage you suffered, and it ignores Necrotic resistance."
                        }
                    ]
                },
                {
                    "name": "Purgation",
                    "displayname": "Purgation",
                    "previewtext": "You can cause a creature within 30 feet of you to immediately make a Saving Throw against a Poisoned condition afflicting it.",
                    "effects": [
                        {
                            "featuretextwithbullet": "Blood Curse of Purgation: As a Bonus Action, you can manipulate the blood of a creature within 30 feet to expunge corruption. The target creature can immediately make a Saving Throw against a Poisoned condition afflicting it.\n   Amplify: Your target can instead immediately make a Saving Throw against one other condition afflicting it. This condition can be blinded, deafened or paralyzed."
                        }
                    ]
                },
                {
                    "name": "Spell Sunder",
                    "displayname": "Soul Sunder",
                    "previewtext": "When an enemy within 30 feet targets you with a spell that requires a spell attack roll, you can impose Disadvantage on the attack.",
                    "effects": [
                        {
                            "featuretextwithbullet": "Blood Curse of Spell Sunder: When an enemy casts a spell within 30 feet that requires a spell attack roll and targets you, you can use your reaction to rend the spell from the air, imposing disadvantage on the spell attack roll.\n   Amplify: You make a wisdom ability check. The DC = 10 + the spell's level. On a success, the spell misses you automatically."
                        }
                    ]
                }
            ]
        },
        {
            "name": "Primal Rites",
            "title": "Primal Rites",
            "selections": "1",
            "entries": [
                {
                    "name": "Rite of the Flame",
                    "previewtext": "Weapons imbued with this Rite cause additional Fire damage.",
                    "effects": [
                        {
                            "featuretextwithbullet": "Rite of the Flame: This Rite damage is Fire type."
                        }
                    ]
                },
                {
                    "name": "Rite of the Frozen",
                    "previewtext": "Weapons imbued with this Rite cause additional Cold damage.",
                    "effects": [
                        {
                            "featuretextwithbullet": "Rite of the Frozen: This Rite damage is Cold type."
                        }
                    ]
                },
                {
                    "name": "Rite of the Storm",
                    "previewtext": "Weapons imbued with this Rite cause additional Lightning damage.",
                    "effects": [
                        {
                            "featuretextwithbullet": "Rite of the Storm: This Rite damage is Lightning type."
                        }
                    ]
                }
            ]
        },
        {
            "name": "Esoteric Rites",
            "title": "Esoteric Rites",
            "selections": "1",
            "entries": [
                {
                    "name": "Rite of the Roar",
                    "previewtext": "Weapons imbued with this Rite cause additional Thunder damage.",
                    "effects": [
                        {
                            "featuretextwithbullet": "Rite of the Roar: This Rite damage is Thunder type."
                        }
                    ]
                },
                {
                    "name": "Rite of the Oracle",
                    "previewtext": "Weapons imbued with this Rite cause additional Psychic damage.",
                    "effects": [
                        {
                            "featuretextwithbullet": "Rite of the Oracle: This Rite damage is Psychic type."
                        }
                    ]
                },
                {
                    "name": "Rite of the Dead",
                    "previewtext": "Weapons imbued with this Rite cause additional Necrotic damage.",
                    "effects": [
                        {
                            "featuretextwithbullet": "Rite of the Dead: This Rite damage is Necrotic type."
                        }
                    ]
                }
            ]
        },
        {
            "name": "Mutagen Formulae",
            "title": "Mutagen Formulae",
            "selections": "1",
            "replace": "1",
            "advancedfeaturetext": {
                "useentrypreviewtext": "true",
                "usebullet": "true",
                "prefixwithentryname": "true",
                "prefixseperator": " Mutagen : "
            },
            "entries": [
                {
                    "name": "Aether",
                    "previewtext": "You gain a Flying speed of 20 feet.\n   Side Effect: Disadvantage on Strength and Dexterity ability checks.",
                    "prerequisites": [
                        {
                            "greaterthanorequal": {
                                "first": {
                                    "classlevel": "Blood Hunter"
                                },
                                "second": "11"
                            }
                        }
                    ],
                    "hideifprerequisitesnotmet": "true"
                },
                {
                    "name": "Celerity",
                    "previewtext": "Celerity Mutagen: Your Dexterity Score increases by an amount equal to your Mutation Score, as does your Dexterity Maximum.\n   Side Effect: Your Wisdom Score decreases by an amount equal to your Mutation Score."
                },
                {
                    "name": "Conversant",
                    "previewtext": "Conversant Mutagen: You gain Advantage on Intelligence ability checks.\n   Side Effect: You have Disadvantage on Charisma ability checks."
                },
                {
                    "name": "Cruelty",
                    "previewtext": "You can make a single weapon attack as a bonus action on each of your turns.\n   Side Effect: You have Disadvantage on all Saving Throws.",
                    "prerequisites": [
                        {
                            "greaterthanorequal": {
                                "first": {
                                    "classlevel": "Blood Hunter"
                                },
                                "second": "11"
                            }
                        }
                    ],
                    "hideifprerequisitesnotmet": "true"
                },
                {
                    "name": "Impermeable",
                    "previewtext": "You gain resistance to Piecing damage. Side Effect: You gain vulnerability to Slashing damage."
                },
                {
                    "name": "Mobility",
                    "previewtext": "You gain immunity to the Grappled and Restrained conditions. At 11th level, you also are immune to the Paralyzed condition.\n   Side Effect: You gain a penalty to the Initiative equal to 2 times your Mutation Score."
                },
                {
                    "name": "Nighteye",
                    "previewtext": "You gain Darkvision for up to 60 feet. If you already have Darkvision, this increases its range by 60 feet.\n   Side Effect: You gain sunlight sensitivity."
                },
                {
                    "name": "Potency",
                    "previewtext": "Your Strength score increases by an amount equal to your Mutation Score, as does your Strength maximum.\n   Side Effect: Your Dexterity Score decreases by an amount equal to your Mutation Score."
                },
                {
                    "name": "Precision",
                    "previewtext": "Your weapon attacks score a Critical Hit on a roll of 19 - 20.\n   Side Effect: All healing you receive is halved.",
                    "prerequisites": [
                        {
                            "greaterthanorequal": {
                                "first": {
                                    "classlevel": "Blood Hunter"
                                },
                                "second": "11"
                            }
                        }
                    ],
                    "hideifprerequisitesnotmet": "true"
                },
                {
                    "name": "Rapidity",
                    "previewtext": "Your Speed increases by 10 feet. At 15th level, your Speed increases by 15 feet instead.\n   Side Effect: You have Disadvantage on Dexterity ability checks."
                },
                {
                    "name": "Reconstruction",
                    "previewtext": "While conscious and in combat, you regenerate hit points equal to 2 times your Mutation Score at the start of your turn as long as you are above 0 hit points.\n   Side Effect: Your Speed decreases by 10 feet.",
                    "prerequisites": [
                        {
                            "greaterthanorequal": {
                                "first": {
                                    "classlevel": "Blood Hunter"
                                },
                                "second": "7"
                            }
                        }
                    ],
                    "hideifprerequisitesnotmet": "true"
                },
                {
                    "name": "Sagacity",
                    "previewtext": "Your Wisdom Score increases by an amount equal to your Mutation Score, as does your Wisdom maximum.\n   Side Effect: Your AC is reduced by an amount equal to your Mutation Score."
                },
                {
                    "name": "Shielded",
                    "previewtext": "You gain resistance to Slashing damage.\nSide Effect: You gain vulnerability to Bludgeoning damage."
                },
                {
                    "name": "Unbreakable",
                    "previewtext": "You gain Resistance to Bludgeoning damage.\nSide Effect: You gain vulnerability to Piecing damage."
                },
                {
                    "name": "Wariness",
                    "previewtext": "You gain a bonus to Initiative equal to 2 times your Mutation Score.\n   Side Effect: You have Disadvantage on Wisdom (Perception) checks."
                }
            ]
        }
    ],
    "feats": [
        {
            "name": "Acrobat",
            "displayname": "Acrobat",
            "effects": [
                {
                    "modifyabilityscore": {
                        "dexterity": "1"
                    }
                },
                {
                    "featuretext": "As a bonus action, make a DC 15 acrobatics check, if you pass, difficult terrain does not require extra movement this turn"
                },
                {
                    "ifthenelse": {
                        "if": [
                            {
                                "skillproficiency": "acrobatics"
                            }
                        ],
                        "then": [
                            {
                                "setskilldoubleproficiency": {
                                    "acrobatics": "true"
                                }
                            }
                        ],
                        "else": [
                            {
                                "setskillproficiency": {
                                    "acrobatics": "true"
                                }
                            }
                        ]
                    }
                }
            ]
        },
        {
            "name": "Alchemist",
            "displayname": "Alchemist",
            "effects": [
                {
                    "modifyabilityscore": {
                        "intelligence": "1"
                    }
                },
                {
                    "featuretext": "You have proficiency with the alchemy kit, or if already proficient, expertise. You can improve a healing potion, so it heals its maximum amount rather than rolling dice, if drunk no more than 1 hour after you improve it. 1\/short rest"
                }
            ]
        },
        {
            "name": "Animal Handler",
            "displayname": "Animal Handler",
            "effects": [
                {
                    "modifyabilityscore": {
                        "wisdom": "1"
                    }
                },
                {
                    "featuretext": "As a bonus action, command a beast that can hear you within 60' and isn't under the command of another creature. It follows the command on its next turn or over the next minute."
                },
                {
                    "ifthenelse": {
                        "if": [
                            {
                                "skillproficiency": "animal handling"
                            }
                        ],
                        "then": [
                            {
                                "setskilldoubleproficiency": {
                                    "animal handling": "true"
                                }
                            }
                        ],
                        "else": [
                            {
                                "setskillproficiency": {
                                    "animal handling": "true"
                                }
                            }
                        ]
                    }
                }
            ]
        },
        {
            "name": "Arcanist",
            "displayname": "Arcanist",
            "effects": [
                {
                    "modifyabilityscore": {
                        "intelligence": "1"
                    }
                },
                {
                    "featuretext": "You can cast Detect Magic without using a spell slot. 1\/long rest."
                },
                {
                    "ifthenelse": {
                        "if": [
                            {
                                "skillproficiency": "arcana"
                            }
                        ],
                        "then": [
                            {
                                "setskilldoubleproficiency": {
                                    "arcana": "true"
                                }
                            }
                        ],
                        "else": [
                            {
                                "setskillproficiency": {
                                    "arcana": "true"
                                }
                            }
                        ]
                    }
                },
                {
                    "addspell": {
                        "name": "Prestidigitation",
                        "spelllevel": "0"
                    }
                },
                {
                    "addspell": {
                        "name": "Detect Magic (1\/rest)",
                        "spelllevel": "1"
                    }
                }
            ]
        },
        {
            "name": "Brawny",
            "displayname": "Brawny",
            "effects": [
                {
                    "modifyabilityscore": {
                        "strength": "1"
                    }
                },
                {
                    "featuretext": "Your carrying capacity is doubled"
                },
                {
                    "ifthenelse": {
                        "if": [
                            {
                                "skillproficiency": "athletics"
                            }
                        ],
                        "then": [
                            {
                                "setskilldoubleproficiency": {
                                    "athletics": "true"
                                }
                            }
                        ],
                        "else": [
                            {
                                "setskillproficiency": {
                                    "athletics": "true"
                                }
                            }
                        ]
                    }
                }
            ]
        },
        {
            "name": "Diplomat",
            "displayname": "Diplomat",
            "effects": [
                {
                    "modifyabilityscore": {
                        "charisma": "1"
                    }
                },
                {
                    "featuretext": "You can spend 1 min. talking to a creature, after which you make a Charisma (Persuasion) contested by their Wisdom (Insight). They automatically succeed if you or your allies are fighting it. If they fail they are charmed so long as they stay within 60' of you or 1 minute."
                },
                {
                    "ifthenelse": {
                        "if": [
                            {
                                "skillproficiency": "persuasion"
                            }
                        ],
                        "then": [
                            {
                                "setskilldoubleproficiency": {
                                    "persuasion": "true"
                                }
                            }
                        ],
                        "else": [
                            {
                                "setskillproficiency": {
                                    "persuasion": "true"
                                }
                            }
                        ]
                    }
                }
            ]
        },
        {
            "name": "Empathic",
            "displayname": "Empathic",
            "effects": [
                {
                    "modifyabilityscore": {
                        "wisdom": "1"
                    }
                },
                {
                    "featuretext": "Use an action to make a Wisdom (Insight) check opposed by a humanoid's Charisma (Deception). If you win, you have advantage on attacks until the end of your next turn."
                },
                {
                    "ifthenelse": {
                        "if": [
                            {
                                "skillproficiency": "insight"
                            }
                        ],
                        "then": [
                            {
                                "setskilldoubleproficiency": {
                                    "insight": "true"
                                }
                            }
                        ],
                        "else": [
                            {
                                "setskillproficiency": {
                                    "insight": "true"
                                }
                            }
                        ]
                    }
                }
            ]
        },
        {
            "name": "Gourmand",
            "displayname": "Gourmand",
            "effects": [
                {
                    "modifyabilityscore": {
                        "constitution": "1"
                    }
                },
                {
                    "featuretext": "You have proficiency with the cook's utensils, or if already proficient, expertise. You can inspect a plate of food or drink that you can see and smell, determining if it is poisoned. You can prepare a meal during a long rest for up to 6 people, allowing them to regain 2 additional hit dice, and gaining advantage on Constitution saving throws against disease."
                }
            ]
        },
        {
            "name": "Historian",
            "displayname": "Historian",
            "effects": [
                {
                    "modifyabilityscore": {
                        "intelligence": "1"
                    }
                },
                {
                    "featuretext": "Make a DC 15 History check when you take the Help action. If you pass, the creature you help can add your proficiency bonus to the check."
                },
                {
                    "ifthenelse": {
                        "if": [
                            {
                                "skillproficiency": "history"
                            }
                        ],
                        "then": [
                            {
                                "setskilldoubleproficiency": {
                                    "history": "true"
                                }
                            }
                        ],
                        "else": [
                            {
                                "setskillproficiency": {
                                    "history": "true"
                                }
                            }
                        ]
                    }
                }
            ]
        },
        {
            "name": "Investigator",
            "displayname": "Investigator",
            "effects": [
                {
                    "modifyabilityscore": {
                        "intelligence": "1"
                    }
                },
                {
                    "featuretext": "You can Search as a bonus action"
                },
                {
                    "ifthenelse": {
                        "if": [
                            {
                                "skillproficiency": "investigation"
                            }
                        ],
                        "then": [
                            {
                                "setskilldoubleproficiency": {
                                    "investigation": "true"
                                }
                            }
                        ],
                        "else": [
                            {
                                "setskillproficiency": {
                                    "investigation": "true"
                                }
                            }
                        ]
                    }
                }
            ]
        },
        {
            "name": "Master of Disguise",
            "displayname": "Master of Disguise",
            "effects": [
                {
                    "modifyabilityscore": {
                        "charisma": "1"
                    }
                },
                {
                    "featuretext": "You have proficiency with the disguise kit, or if already proficient, expertise. If you spend 1 hour observing a creature, you can spend 8 hours creating a disguise you can put on as an action that allows you to mimic the creature."
                },
                {
                    "addtoolproficiencies": [
                        "Disguise kit"
                    ]
                }
            ]
        },
        {
            "name": "Medic",
            "displayname": "Medic",
            "effects": [
                {
                    "modifyabilityscore": {
                        "wisdom": "1"
                    }
                },
                {
                    "featuretext": "Make a DC 15 Medicine check on a short rest for up to 6 humanoids or beasts. On a success the creature regains the maximum value for their Hit Dice."
                },
                {
                    "ifthenelse": {
                        "if": [
                            {
                                "skillproficiency": "medicine"
                            }
                        ],
                        "then": [
                            {
                                "setskilldoubleproficiency": {
                                    "medicine": "true"
                                }
                            }
                        ],
                        "else": [
                            {
                                "setskillproficiency": {
                                    "medicine": "true"
                                }
                            }
                        ]
                    }
                }
            ]
        },
        {
            "name": "Menacing",
            "displayname": "Menacing",
            "effects": [
                {
                    "modifyabilityscore": {
                        "charisma": "1"
                    }
                },
                {
                    "featuretext": "Replace one attack in the Attack action with a Charisma (Intimidation) check against a creature's Wisdom (Insight). On a success it is immune to this ability for 1 hour, on a fail the target is frightened of you until the end of its next turn."
                },
                {
                    "ifthenelse": {
                        "if": [
                            {
                                "skillproficiency": "intimidation"
                            }
                        ],
                        "then": [
                            {
                                "setskilldoubleproficiency": {
                                    "intimidation": "true"
                                }
                            }
                        ],
                        "else": [
                            {
                                "setskillproficiency": {
                                    "intimidation": "true"
                                }
                            }
                        ]
                    }
                }
            ]
        },
        {
            "name": "Naturalist",
            "displayname": "Naturalist",
            "effects": [
                {
                    "modifyabilityscore": {
                        "intelligence": "1"
                    }
                },
                {
                    "featuretext": "You can cast Detect Poison & Disease without using a spell slot. 1\/long rest."
                },
                {
                    "ifthenelse": {
                        "if": [
                            {
                                "skillproficiency": "nature"
                            }
                        ],
                        "then": [
                            {
                                "setskilldoubleproficiency": {
                                    "nature": "true"
                                }
                            }
                        ],
                        "else": [
                            {
                                "setskillproficiency": {
                                    "nature": "true"
                                }
                            }
                        ]
                    }
                },
                {
                    "addspell": {
                        "name": "Druidcraft",
                        "spelllevel": "0"
                    }
                },
                {
                    "addspell": {
                        "name": "Detect Poison & Disease (1\/rest)",
                        "spelllevel": "1"
                    }
                }
            ]
        },
        {
            "name": "Perceptive",
            "displayname": "Perceptive",
            "effects": [
                {
                    "modifyabilityscore": {
                        "wisdom": "1"
                    }
                },
                {
                    "featuretext": "Dim light does not impose disadvantage on Wisdom (Perception) checks when you can see & hear."
                },
                {
                    "ifthenelse": {
                        "if": [
                            {
                                "skillproficiency": "perception"
                            }
                        ],
                        "then": [
                            {
                                "setskilldoubleproficiency": {
                                    "perception": "true"
                                }
                            }
                        ],
                        "else": [
                            {
                                "setskillproficiency": {
                                    "perception": "true"
                                }
                            }
                        ]
                    }
                }
            ]
        },
        {
            "name": "Performer",
            "displayname": "Performer",
            "effects": [
                {
                    "modifyabilityscore": {
                        "charisma": "1"
                    }
                },
                {
                    "featuretext": "While performing, you make a Charisma (Performance) check contested by a humanoid's Wisdom (Insight). If they fail they have disadvantage on Wisdom (Perception) and Intelligence (Investigation) checks until you stop performing."
                },
                {
                    "ifthenelse": {
                        "if": [
                            {
                                "skillproficiency": "performance"
                            }
                        ],
                        "then": [
                            {
                                "setskilldoubleproficiency": {
                                    "performance": "true"
                                }
                            }
                        ],
                        "else": [
                            {
                                "setskillproficiency": {
                                    "performance": "true"
                                }
                            }
                        ]
                    }
                }
            ]
        },
        {
            "name": "Quick Fingered",
            "displayname": "Quick Fingered",
            "effects": [
                {
                    "modifyabilityscore": {
                        "dexterity": "1"
                    }
                },
                {
                    "featuretext": "As a bonus action, make a Dexterity (Sleight of Hand) check to plant something on someone, or steal something from them."
                },
                {
                    "ifthenelse": {
                        "if": [
                            {
                                "skillproficiency": "sleight of hand"
                            }
                        ],
                        "then": [
                            {
                                "setskilldoubleproficiency": {
                                    "sleight of hand": "true"
                                }
                            }
                        ],
                        "else": [
                            {
                                "setskillproficiency": {
                                    "sleight of hand": "true"
                                }
                            }
                        ]
                    }
                }
            ]
        },
        {
            "name": "Silver Tongued",
            "displayname": "Silver Tongued",
            "effects": [
                {
                    "modifyabilityscore": {
                        "charisma": "1"
                    }
                },
                {
                    "featuretext": "Replace one attack in the Attack action with a Charisma (Deception) check against a creature's Wisdom (Insight). On a success it is immune to this ability for 1 hour, on a fail you have advantage on attacks and do not provoke opportunity attacks from it until the end of your next turn."
                },
                {
                    "ifthenelse": {
                        "if": [
                            {
                                "skillproficiency": "deception"
                            }
                        ],
                        "then": [
                            {
                                "setskilldoubleproficiency": {
                                    "deception": "true"
                                }
                            }
                        ],
                        "else": [
                            {
                                "setskillproficiency": {
                                    "deception": "true"
                                }
                            }
                        ]
                    }
                }
            ]
        },
        {
            "name": "Stealthy",
            "displayname": "Stealthy",
            "effects": [
                {
                    "modifyabilityscore": {
                        "dexterity": "1"
                    }
                },
                {
                    "featuretext": "You do not break Stealth if you travel up to 10' in the open if you end your move partially obscured. "
                },
                {
                    "ifthenelse": {
                        "if": [
                            {
                                "skillproficiency": "stealth"
                            }
                        ],
                        "then": [
                            {
                                "setskilldoubleproficiency": {
                                    "stealth": "true"
                                }
                            }
                        ],
                        "else": [
                            {
                                "setskillproficiency": {
                                    "stealth": "true"
                                }
                            }
                        ]
                    }
                }
            ]
        },
        {
            "name": "Survivalist",
            "displayname": "Survival",
            "effects": [
                {
                    "modifyabilityscore": {
                        "wisdom": "1"
                    }
                },
                {
                    "featuretext": "You can cast Alarm without using a spell slot. 1\/long rest."
                },
                {
                    "ifthenelse": {
                        "if": [
                            {
                                "skillproficiency": "survival"
                            }
                        ],
                        "then": [
                            {
                                "setskilldoubleproficiency": {
                                    "survival": "true"
                                }
                            }
                        ],
                        "else": [
                            {
                                "setskillproficiency": {
                                    "survival": "true"
                                }
                            }
                        ]
                    }
                },
                {
                    "addspell": {
                        "name": "Alarm (1\/rest)",
                        "spelllevel": "1"
                    }
                }
            ]
        },
        {
            "name": "Theologian",
            "displayname": "Theologian",
            "effects": [
                {
                    "modifyabilityscore": {
                        "intelligence": "1"
                    }
                },
                {
                    "featuretext": "You can cast Detect Evil & Good without using a spell slot. 1\/long rest."
                },
                {
                    "ifthenelse": {
                        "if": [
                            {
                                "skillproficiency": "religion"
                            }
                        ],
                        "then": [
                            {
                                "setskilldoubleproficiency": {
                                    "religion": "true"
                                }
                            }
                        ],
                        "else": [
                            {
                                "setskillproficiency": {
                                    "religion": "true"
                                }
                            }
                        ]
                    }
                },
                {
                    "addspell": {
                        "name": "Thaumaturgy",
                        "spelllevel": "0"
                    }
                },
                {
                    "addspell": {
                        "name": "Detect Detect Evil & Good (1\/rest)",
                        "spelllevel": "1"
                    }
                }
            ]
        },
        {
            "name": "Demigod",
            "displayname": "Demigod",
            "previewtext": "gain godly Powers at a cost",
            "usepreviewtextasfeaturetext": "true",
            "effects": [
                {
                    "featuretextwithbullet": "You have been granted power from a god. you can cast wish at will and cannot suffer a mishap. when cast your health drops by 1d6 HP but does not cost material components. if your hp is below 8 you may not use this feat. "
                }
            ]
        },
        {
            "name": "Divine spark",
            "displayname": "Divine spark",
            "previewtext": "you no longer age, eat, drink or breathe. but magical healing has little effect on you",
            "usepreviewtextasfeaturetext": "true",
            "effects": [
                {
                    "featuretextwithbullet": "You stop aging. You are immune to any effect that would age you, and you can't die from old age.You don’t need to eat, drink, or breathe. Healing from spells and others magical means   provide only half their normal effect (Min :1)."
                }
            ]
        },
        {
            "name": "Weapon specialization ",
            "displayname": "weapon specialization ",
            "previewtext": "Learn to deal extra damage with one weapon",
            "usepreviewtextasfeaturetext": "true",
            "effects": [
                {
                    "featuretextwithbullet": "You are an expert in the use of your weapon. You add +1 to hit and +2 to damage with this weapon.  Once per day you may get advantage on an attack."
                }
            ]
        },
        {
            "name": "Monitor Training",
            "displayname": "Monitor Training",
            "previewtext": "You have trained your body to allow you to strike with ferocity that most are unable to, with your fists. Other kuo-toa will recognize your abilities as a monitor, and fear you.",
            "prerequisites": [
                {
                    "race": "Kua Toa"
                }
            ],
            "effects": [
                {
                    "featuretextwithbullet": "You have trained your body to allow you to strike with ferocity that most are unable to, with your fists. Other kuo-toa will recognize your abilities as a monitor, and fear you.\n\n• Your unarmed strike damage die is increased to a d6, if it is lower.\n\n• While not wearing armor, your armor class is equal to 12 plus your Dexterity modifier. You may wield a shield and still benefit from this.\n\n"
                }
            ]
        },
        {
            "name": "Archpriest Training",
            "displayname": "Archpriest Training",
            "previewtext": "Your mind has been blessed by a god, granting you divine abilities beyond other kuo-toa. Other kuo-toa will recognize your abilities as a archpriest-in-training, and respect or fear you.",
            "prerequisites": [
                {
                    "race": "Kua Toa"
                }
            ],
            "effects": [
                {
                    "featuretextwithbullet": "Your mind has been blessed by a god, granting you divine abilities beyond other kuo-toa. Other kuo-toa will recognize your abilities as a archpriest-in-training, and respect or fear you.\n\nYou learn two cantrips from the cleric spell list, and can cast them at will.\n\nYou can cast detect magic, sanctuary, and shield of faith. After casting any combination of them twice, you must take a long rest before using them again. Wisdom is your spellcasting ability for these spells."
                }
            ]
        }
    ],
    "weapons": []
}