const uuid = require("uuid");
const nameMap = [
  "果博东方",
  "仙气满满",
  "十二冷言",
  "情深予你",
  "人生态度",
  "见利思义",
  "穷理尽性",
  "借风拥你",
  "长灯轻叹",
  "你是我的",
  "半路患者",
  "孤鸟的歌",
  "风中碰杯",
  "轮回宿命",
  "意念回归",
  "正等良人",
  "六字谏言",
  "乘车寻你",
  "你在回忆",
  "别了岁月",
  "土匪婆子",
  "冻结贪婪",
  "净化心根",
  "苦茶续杯",
  "心事使徒",
  "哄我入睡",
  "收起心跳",
  "随意流浪",
  "情绪矛盾",
  "拘禁自由",
  "莽撞热情",
  "类似感动",
  "温吞爱情",
  "习惯轻敌",
  "带走沉默",
  "尴尬身份",
  "主动热情",
  "妥协应允",
  "对你无感",
  "记得微笑"
];
const avatarMap = [
  "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
  "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=8232468,2916696848&fm=27&gp=0.jpg",
  "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1018364764,1223529536&fm=27&gp=0.jpg",
  "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2450994032,3525797548&fm=27&gp=0.jpg",
  "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=927595719,207396172&fm=27&gp=0.jpg",
  "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4074942720,165462932&fm=27&gp=0.jpg",
  "http://img5.imgtn.bdimg.com/it/u=3935129088,2286037641&fm=27&gp=0.jpg",
  "http://img3.imgtn.bdimg.com/it/u=438716606,482385799&fm=27&gp=0.jpg",
  "http://img1.imgtn.bdimg.com/it/u=1110030282,2062571059&fm=27&gp=0.jpg",
  "http://img2.imgtn.bdimg.com/it/u=1369073991,2884951979&fm=27&gp=0.jpg"
];
function createName(nameArr) {
  const randomNum = parseInt(Math.random() * 41);
  return nameArr[randomNum] || "正在睡觉";
}
function createAvatar(avatarMap) {
  const randomNum = parseInt(Math.random() * 10);
  return (
    avatarMap[randomNum] ||
    "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
  );
}

const createPerson = id => {
  const key = uuid.v4();
  const name = createName(nameMap);
  const avatar = createAvatar(avatarMap);
  const preson = {
    key: key,
    name: name,
    avatar: avatar,
    time: new Date(),
    friendList: []
  };
  return preson;
};

module.exports = createPerson;
