<template>
    <figure :class="['ib',$props.classes]">
        <template v-if="$props.isLazy">
            <picture :style="imgMaxHeight" :class="$props.frame">
                <img ref="image" v-lazy="$props.src" :src="thumbnail" :alt="$props.alt">
            </picture>
            <template v-if="$props.caption!==''">
                <div :class="['img-caption', {'active': captionToggle}]">
                    <div class="img-caption--content" v-html="captionText"></div>
                    <button class="img-caption--button" @click="captionToggle=!captionToggle" aria-label="Show image caption"><span></span></button>
                </div>
            </template>
            <slot></slot>
        </template>
        <template v-else>
            <picture>
                <img ref="image" :src="$props.src" :alt="$props.alt">
            </picture>
            <slot></slot>
        </template>
    </figure>
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            default: "",
        },
        alt: {
            type: String,
            default: "",
        },
        caption: {
            type: String,
            default: "",
        },
        classes: {
            default: "",
        },
        frame: {
            default: "",
        },
        imageRatio: {
            type: Number,
            default: 1.3,
        },
        imageWidth: {
            type: Number,
            default: 1,
        },
        isLazy: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            imgLoaded: false,
            imgMaxHeight: "10px",
            captionToggle: false,
        }
    },
    methods: {
        getImageHeight() {

            if (this.$props.frame === "") {
                let imgWidth = this.$props.imageWidth !== 1 ? this.$props.imageWidth : this.$refs.image.parentElement.clientWidth;

                if (this.$props.imageWidth !== 1) {
                    return 'min-height:' + imgWidth / this.$props.imageRatio + 'px';
                }
                else if (this.$refs.image.parentElement.clientWidth === 0) {
                    return;
                }
                else {
                    return 'min-height:' + imgWidth / this.$props.imageRatio + 'px';
                }
            }

        },
    },
    computed: {
        captionText() {
            const breaker = '<br />';

            if (this.$props.caption.indexOf(breaker) > -1) {
                let content = this.$props.caption
                    .replace("<p>", "")
                    .replace("</p>", "")
                    .split(breaker);
                return `<p><span class="caption-heading">${content[0]}</span>${content[1]}</p>`;
            }

            return this.$props.caption;

        },
        thumbnail() {
            return '/thumbnail.png';
        },
    },
    mounted() {
        this.imgMaxHeight = this.getImageHeight();
    }
}
</script>

<style lang="scss">

figure {

    &.ib {

        picture {
            position: relative;
            display: block;
            overflow: hidden;

            img {
                display: block;
            }
        }
    }
}

img[lazy="loading"] {
    max-height: 100%!important;
    max-width: 100%!important;
    top: 50%!important;
}

img[lazy="error"],
img[lazy="loading"] {

    &~ .img-caption {
        opacity: 0;
    }
}

img[lazy="error"],
img[lazy="loading"],
img[lazy="loaded"] {
    display: block;
    margin: 0px auto;
}

.img-caption {
    position: relative;
    display: block;
    text-align: left!important;

    &:before {
        content: "";
        display: block;
        position: absolute;
        right: 0;
        bottom: 0;
        height: 2.25rem;
        width: 2.25rem;
        background-color: #fff;
    }

    &.active {

        &:before {
            display: none;
        }

        .img-caption--content {
            display: block;
        }

        .img-caption--button {
            border: none;
            color: #fff;

            &:before {
                opacity: 0;
            }

            > span {

                &:before {
                    content: "-";
                }
            }
        }
    }

    &--content {
        display: none;
        position: absolute;
        right: 0;
        bottom: 0;
        color: #fff;
        max-width: 23.75rem;
        padding: 2.5rem 1.5rem 2rem;
        background-color: rgba(#000, .9);

        &:after {
            content: "";
            display: block;
            position: absolute;
            left: 1.5rem;
            top: 0;
            height: 1.875rem;
            width: 1px;
            background-color: #acacac;
        }

        &:last-of-type p {
            margin-bottom: 0;
        }

        .caption-heading {
            display: block;
            color: #ff0000;
            font-weight: 700;
        }
    }

    &--button {
        position: absolute;
        bottom: 0;
        right: 0;
        height: 1.625rem;
        width: 1.625rem;
        padding: 0;
        border: 1px solid #ddd;
        border-radius: 50%;
        box-shadow: none;
        background: transparent;

        > span {
            position: relative;
            z-index: 3;

            &:before {
                content: "+";
            }
        }

        &:before {
            content: "";
            display: block;
            position: absolute;
            top: -.65rem;
            left: 0;
            height: 2rem;
            width: 1rem;
            background-color: #fff;
            transform-origin: center;
            transform: rotate(45deg);
        }
    }
}

.is-round {
    border-radius: 50%;
}

.has-background-grey,
.has-background-gray {

    .img-caption {

        &:before {
            background-color: #ddd;
        }

        &--button {
            border: 1px solid #000;

            &:before {
                background-color: #ddd;
            }
        }
    }
}

@media screen and (max-width: 768px) {

    .hero-skeleton .b-skeleton-item {
        height: 10.5rem!important;
    }
}
</style>