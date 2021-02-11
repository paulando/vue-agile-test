<template>
    <div class="brands-carousel py-5 oh">
        <div class="container">
            <div class="has-text-centered mb-4 mb-3-mobile">
                <div>carouselTitle</div>
            </div>
            <agile :options="options" class="slide-brands">
                <div class="slide" v-for="(item, i) in carouselItems" :key="i">
                    <ImageBlock 
                        classes="" 
                        :src="item.src" 
                        :alt="item.alt" 
                        frame="im"
                    />
                </div>
                <template slot="prevButton"><button><SVGArrowShort /></button></template>
                <template slot="nextButton"><button @click="options.autoplay=false"><SVGArrowShort /></button></template>
            </agile>
        </div>
    </div>
</template>

<script>
import ImageBlock from './ImageBlock';
import SVGArrowShort from './svg/ArrowShort';
import { VueAgile } from 'vue-agile';

export default {
    components: {
        ImageBlock,
        SVGArrowShort,
        agile: VueAgile,
    },
    props: {
        category: {
            type: String,
            default: 'insurance',
        },
        items: {
            type: Array,
            default: () => {return []},
        },
    },
    data() {
        return {
            options: {
                slidesToShow: 2,
                autoplay: true,
                // autoplaySpeed: 5000,
				centerMode: true,
				dots: false,
				navButtons: false,
				responsive: [
                    {
						breakpoint: 1407,
						settings: {
							slidesToShow: 6,
						}
					},
					{
                        breakpoint: 1215,
                        settings: {
							slidesToShow: 5,
						}
					},
					{
                        breakpoint: 1023,
                        settings: {
                            slidesToShow: 4,
						}
					},
					{
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 3,
                            navButtons: true,
						}
					},
				]
			}
        }
    },
    // methods: {
    //     switchBrand(key) {
    //         switch (key) {
    //             case 'prev':
    //                 this.$refs.siema.prev();
    //                 break;
    //             case 'next':
    //                 this.$refs.siema.stop();
    //                 this.$refs.siema.next();
    //                 break;
    //             default:
    //                 break;
    //         }
    //     },
    // },
    computed: {
        carouselItems() {

            return [
                {
                    src: '/AAA.png',
                    alt: 'image',
                },
                {
                    src: '/American-Family.png',
                    alt: 'image',
                },
                {
                    src: '/Farmers.png',
                    alt: 'image',
                },
                {
                    src: '/Liberty-Mutual.png',
                    alt: 'image',
                },
                {
                    src: '/State-Farm.png',
                    alt: 'image',
                },
                {
                    src: '/Travelers.png',
                    alt: 'image',
                },
                {
                    src: '/USAA.png',
                    alt: 'image',
                },
            ]

        },
    },
}
</script>

<style lang="scss">
// @import '../scss/variables';
// @import '../scss/mixins';

// .brands-carousel {
//     position: relative;

//     &:before {
//         content: "";
//         display: block;
//         position: absolute;
//         top: 0;
//         left: 0;
//         right: 0;
//         height: 2px;
//         width: 6.25rem;
//         margin: 0 auto;
//         background-color: #ccc;
//     }
// }

// .slide-brands {
//     padding: 0 3rem;

//     .agile__list {
//         z-index: 3;

//         img {
//             margin: 0 auto;
//         }
//     }

//     .agile__actions {
//         position: absolute;
//         top: 50%;
//         left: 0;
//         width: 100%;
//         @include transform(translateY(-50%));

//         button {
//             cursor: pointer;
//             color: $third;
//             border: none;
//             background:transparent;
//             @include transition(all 300ms ease-in-out);

//             &:hover {
//                 color: $primary;
//                 @include transition(all 300ms ease-in-out);
//             }

//             &.agile__nav-button--prev {
//                 @include transform(scaleX(-1));
//             }
//         }
//     }
// }
</style>