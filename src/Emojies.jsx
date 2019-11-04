import React from 'react';

import './Sidebar.css';

const emojies = [
    {
        title: 'people',
        items: [

            {
                src: '1f4aa.svg',
                keywords: ['bicep', 'strength', 'muscles', 'arm', '💪'],
            },
            {
                src: '1f938.svg',
                keywords: ['🤸‍', 'woman', 'female', 'girl', 'cartwheeling'],
            },

            {
                src: '1f914.svg',
                keywords: ['thinking', '🤔', 'chin', 'confused'],
            },
            {
                src: '1f60f.svg',
                keywords: ['smirking', '😏', 'flirting', 'suggestive'],
            },
            {
                src: '1f600.svg',
                keywords: ['laughing', '😀', 'grinning', 'smile'],
            },
            {
                src: '1f44d.svg',
                keywords: ['like', '👍', 'thumbs', 'up', 'yes'],
            },
            {
                src: '1f93e-200d-2642-fe0f.svg',
                keywords: ['🤾‍', 'man', 'handball', 'play'],
            },
            {
                src: '1f60d.svg',
                keywords: ['😍', 'heart', 'smiling', 'high_voltage'],
            },
            {
                src: '1f911.svg',
                keywords: ['🤑', 'money', 'smiling', 'dollar'],
            },
            {
                src: '2764.svg',
                keywords: ['❤️', 'heart', 'red', 'love'],
            },

            {
                src: '1f44b.svg',
                keywords: ['👋️', 'waving', 'wave', 'hand', 'hi', 'hello'],
            },
            {
                src: '1f642.svg',
                keywords: ['🙂️', 'smiling', 'slightly', 'find'],
            },
            {
                src: '1f590.svg',
                keywords: ['🖐️️', 'hand', 'five', 'fingers'],
            },

            {
                src: '1f64c.svg',
                keywords: ['🙌️️', 'hands', 'raising', 'praise'],
            },


            {
                src: '1f913.svg',
                keywords: ['🤓️️', 'nerd', 'geek', 'smiling'],
            },
            {
                src: '1f917.svg',
                keywords: ['🤗️️', 'hug', 'happy', 'praise'],
            },
        ]
    },
    {
        title: 'objects',
        items: [
            {
                src: '1f4e3.svg',
                keywords: ['cheering', 'megaphone', '📣'],
            },

            {
                src: '1f3a9.svg',
                keywords: ['hat', 'formal', '🎩'],
            },

            {
                src: '1f451.svg',
                keywords: ['hat', 'crown', 'king', 'luxury', 'gold', 'queen', 'royal', '👑'],
            },

            {
                src: '1f381.svg',
                keywords: ['birthday', 'present', 'christmas', 'present', '🎁', 'gift', 'box'],
            },
            {
                src: '1f36a.svg',
                keywords: ['cookie', 'biscuit', '🍪', 'cookie', 'chip'],
            },
            {
                src: '1f510.svg',
                keywords: ['Lock', 'key', 'closed', '🔐'],
            },
            {
                src: '1f680.svg',
                keywords: ['🚀', 'rocket', 'space', 'shuttle'],
            },
            {
                src: '1f6e0.svg',
                keywords: ['hammer', 'wrench', 'repair', 'tools', '🛠️'],
            },
            {
                src: '1f50c.svg',
                keywords: ['🔌', 'ac', 'adaptor', 'power', 'cable', 'plug'],
            },
            {
                src: '1f6f4.svg',
                keywords: ['scooter', '🛴', 'kick'],
            },
            {
                src: '1f3cd.svg',
                keywords: ['motorbike', 'motorcycle', '🏍', 'racing'],
            },
            {
                src: '1f4d2.svg',
                keywords: ['📒', 'ledger', 'book', 'high_voltage'],
            },
            {
                src: '1f5a5.svg',
                keywords: ['imac', 'mac', 'pc', 'screen', 'desktop', 'computer', '🖥️', 'monitor'],
            },
            {
                src: '1f6e9.svg',
                keywords: ['🛩️', 'jet', 'airplane', 'plane', 'aircraft'],
            },
            {
                src: '1f5fa.svg',
                keywords: ['🗺️', 'world', 'map'],
            },
            {
                src: '1f4bc.svg',
                keywords: ['briefcase', 'suitcase', '💼', 'case'],
            },
            {
                src: '1f3e2.svg',
                keywords: ['building', 'house', 'business', 'office', '🏢', 'city'],
            },

            {
                src: '26f5.svg',
                keywords: ['⛵', 'dinghy', 'sailboat', 'boat', 'ship'],
            },

            {
                src: '1f4c3.svg',
                keywords: ['📃', 'page', 'sheet'],
            },
            {
                src: '1f4d1.svg',
                keywords: ['📑', 'page', 'sheet', 'bookmarks'],
            },

            {
                src: '1f4d8.svg',
                keywords: ['📘', 'blue', 'sheet', 'book'],
            },
        ]
    },
    {
        title: 'nature',
        items: [
            {
                src: '26a1.svg',
                keywords: ['lightning', 'bolt', 'thunderbolt', 'high', 'voltage', '⚡'],
            },
            {
                src: '1f423.svg',
                keywords: ['hatching', 'chiken', '🐣', 'baby'],
            },
            {
                src: '1f324.svg',
                keywords: ['🌤️', 'sun', 'cloud', 'behind'],
            },
            {
                src: '1f984.svg',
                keywords: ['🦄', 'unicorn', 'magic', 'horse'],
            },
            {
                src: '2600.svg',
                keywords: ['☀️️', 'sun', 'Sunshine'],
            },
            {
                src: '2601.svg',
                keywords: ['☁️', 'cloud', 'overcast'],
            },
            {
                src: '1f432.svg',
                keywords: ['🐲', 'dragon', 'thunderbolt', 'high_voltage'],
            },
            {
                src: '1f340.svg',
                keywords: ['luck', 'clover', 'shamrock', '🍀'],
            },

            {
                src: '1f3d6.svg',
                keywords: ['beach', 'umbrella', '🏖️'],
            },

            {
                src: '1f332.svg',
                keywords: ['pine', 'tree', '🌲'],
            },
        ]
    },
    {
        title: 'symbols',
        items: [
            {
                src: '2705.svg',
                keywords: ['tick', '✅', 'check', 'green'],
            },
        ]
    },
    {
        title: 'other',
        items: [
            {
                src: '1f4a0.svg',
                keywords: ['diamond', '💠', 'flower', '4'],
            },

            {
                src: '1f4ac.svg',
                keywords: ['speech', '💬', 'bubble', 'chat'],
            },

            {
                src: '1f30e.svg',
                keywords: ['globe', '🌎', 'world'],
            },
        ]
    }

]

const formatCategoryName = name => name.charAt(0).toUpperCase() + name.slice(1);

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            emojies: null
        }
    }

    filterEmojies(e) {
        if (!e.target.value) {
            this.setEmojies(emojies)
        } else {
            let filter = e.target.value
            let emojiesClone = JSON.parse(JSON.stringify(emojies))

            
            let filteredEmojies = emojiesClone.filter(category => {
                // Поиск по названию категории
                if (category.title.includes(filter)) return true

                // Поиск по эмодзям
                category.items = category.items.filter(item => {
                    return item.keywords.some(keyword => keyword.includes(filter))
                })
                return category.items.length
            })

            this.setEmojies(filteredEmojies)
        }
    }

    setEmojies(emojies) {
        this.setState({
            emojies
        })
    }

    componentDidMount() {
        this.setEmojies(emojies)
    }

    render() {

        let emojiCategories

        if (this.state.emojies) {
            emojiCategories = this.state.emojies.map((category, index) => 
                <div>
                    <h4 key={index} className="category-header">{formatCategoryName(category.title)}</h4>
                    <div className="emoji-items">
                        {this.state.emojies[index].items.map((emoji, index) =>
                            <div key={index} className="emoji-item" style={{ backgroundImage: `url(https://abs.twimg.com/emoji/v2/svg/${emoji.src})`}}></div>
                            )}
                    </div>
                </div>
            )
        }

        return (
            <div className="emojies-wrapper">
                <div className="filter-wrapper">
                    <input onChange={this.filterEmojies.bind(this, )} type="text" className="filter" placeholder="Search emoji" />
                </div>
                <div className="Emojies">
                    <div className="emoji-category">
                        {emojiCategories}
                    </div>
                </div>
            </div>
        )
    }
}