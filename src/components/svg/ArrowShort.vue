<template>
    <svg 
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="20px" height="35px">
        <path fill-rule="evenodd" :fill="$props.fill" d="M1.223,34.999 C0.918,34.999 0.612,34.885 0.379,34.652 C-0.087,34.191 -0.087,33.444 0.379,32.982 L16.115,17.399 L0.606,2.040 C0.140,1.579 0.140,0.831 0.606,0.369 C1.072,-0.093 1.828,-0.093 2.293,0.369 L18.646,16.564 C19.112,17.025 19.112,17.773 18.646,18.237 L2.067,34.652 C1.834,34.885 1.528,34.999 1.223,34.999 Z"/>
    </svg>
</template>

<script>
export default {
    props: {
        fill: {
            type: String,
            default: "currentColor",
        },
    },
}
</script>
