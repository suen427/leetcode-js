/*
 * @lc app=leetcode id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
 *
 * https://leetcode.com/problems/merge-k-sorted-lists/description/
 *
 * algorithms
 * Hard (32.87%)
 * Total Accepted:    345.2K
 * Total Submissions: 1M
 * Testcase Example:  '[[1,4,5],[1,3,4],[2,6]]'
 *
 * Merge k sorted linked lists and return it as one sorted list. Analyze and
 * describe its complexity.
 * 
 * Example:
 * 
 * 
 * Input:
 * [
 * 1->4->5,
 * 1->3->4,
 * 2->6
 * ]
 * Output: 1->1->2->3->4->4->5->6
 * 
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(lists.length === 0) return null
    sort(lists)
    lists.forEach(list => printNode(list))
    console.log('')
    let head = {val: null, next: null}
    let postion = head
    while (lists.length>0) {
        let temp = lists[0]
        if(!postion) break
        postion.next = temp
        postion = temp
        if(temp && temp.next !== null) {
            lists[0] = temp.next
            let p = 0
            for (let i = 1; i < lists.length; i++) {
                if (lists[i].val < lists[p].val) {
                    let temp = lists[p]
                    lists[p] = lists[i]
                    lists[i] = temp
                    p = i
                }
            }
        } else {
            lists.shift()
        }
        lists.forEach(list => printNode(list))
        console.log('')
    }
    printNode(head.next)
    return head.next
};

function sort(nodelist) {
    for(let i=0; i<nodelist.length; i++) {
        if(!nodelist[i]) continue
        for (let j = i+1; j < nodelist.length; j++) {
            if(!nodelist[j]) continue
            if (nodelist[i].val > nodelist[j].val) {
                let template = nodelist[i]
                nodelist[i] = nodelist[j]
                nodelist[j] = template
            }
        }
    }
}

function printNode(node) {
    if(!node) return
    let res = [node.val]
    while(node.next) {
        res.push(node.next.val)
        node = node.next
    }
    console.log(res.join(', '))
} 

// [1,3,4],[1,4,5],[2,3]
let node1 = {
    val: 1,
    next: {
        val: 4,
        next: {
            val: 5,
            next: null
        }
    }
}
let node2 = {
    val: 1,
    next: {
        val: 3,
        next: {
            val: 4,
            next: null
        }
    }
}
let node3 = {
    val: 2,
    next: {
        val: 6,
        next: null
    }
}
let lists = [node1, node2, node3]

mergeKLists(lists)

