function isPalindrome(string) {
  let processedContent = string.toLowerCase();
  return processedContent === reverseString(processedContent);
}

function reverseString(string) {
  return Array.from(string)
    .reverse()
    .join("");
}

function emailParts(emailAddress) {
  return emailAddress.toLowerCase().split("@");
}
