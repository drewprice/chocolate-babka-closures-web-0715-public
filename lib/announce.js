function Announce (item, count) {

  var announce = function () {
    return "Now serving " + item + " number " + count() + "!";
  };

  return announce;
}
