func repeatStr(_ n: Int, _ string: String) -> String {
  // Code here:
  var a = ""
  for i in 0..<n {
    a = a + string
  }
  return a
}
