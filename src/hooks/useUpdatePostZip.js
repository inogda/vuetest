import {ref, computed} from 'vue'

export default function useSortedPosts() {
    const searchQuery = ref('')

    alert('cxbcxbcxbcb');

    const sortedPosts = computed(() => {
        alert('cxbcxbcxbcb');
        return 'fgg';
        //return [...posts.value].sort((post1, post2) => post1[searchQuery.value]?.localeCompare(post2[searchQuery.value]))
    })

    return {
        searchQuery, sortedPosts
    }
}