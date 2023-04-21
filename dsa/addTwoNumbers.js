function addTwoNumbers(l1, l2) {
  let result = null, temp = null, carry = 0;
  while (l1 || l2) {
    let sum = 0;
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    sum += carry;
    if (sum > 9) {
      carry = Math.floor(sum / 10);
      sum = sum % 10;
    } else {
      carry = 0;
    }
    if (!result) {
      result = new ListNode(sum, null);
      temp = result;
      console.log(temp.val)
    } else {
      temp.next = new ListNode(sum, null);
      temp = temp.next;
      console.log(temp.val)
    }
  }
  if (carry) {
    temp.next = new ListNode(carry, null);
    temp = temp.next;
    console.log(temp.val)
  }
  return result;
};