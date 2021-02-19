function generateList(n) {
  return Array.from({ length: n }, (_, index) => {
    return {
      key: `CR400BF-${index}`,
      value: `CR400BF-${index}`
    }
  })
}

export default generateList
