const encouragementMessages = [
  {
    icon: "🚀",
    message:
      "انطلاقة ممتازة! واضح إنك بدأت بقوة.. خليك مستمر على نفس المستوى وهتتفوق بسهولة.",
    progress: 0,
  },
  {
    icon: "🔥",
    message:
      "انت على الطريق الصح! تقدّمك ثابت وواضح.. استمر بنفس الحماس، النجاح قريب!",
    progress: 25,
  },
  {
    icon: "⭐",
    message:
      "أداءك حاليًا من أفضل 30٪ من الطلبة! شغل ممتاز.. حاول تكمّل بنفس القوة.",
    progress: 50,
  },
  {
    icon: "📈",
    message: "تحسّن ملحوظ! الفرق واضح من أول أسبوع.. كمل بنفس التركيز.",
    progress: 65,
  },
  {
    icon: "🏆",
    message:
      "واو! انت من أفضل 10٪ في الكورس.. محتاجينك تفضل مصدر إلهام للباقي.",
    progress: 85,
  },
  {
    icon: "💪",
    message:
      "عاش يا صديقي.. أداءك في الكورس ده أفضل من 60% من باقي الطلبة.. كمّل عايز أشوف اسمك في الليدر بورد هنا",
    progress: 90,
  },
  {
    icon: "🎉",
    message: "قربت تخلّص الكورس! ضيف آخر لمسة وهتكون أنهيته بنجاح.",
    progress: 95,
  },
  {
    icon: "🏁",
    message: "مبروك! خلّصت الكورس.. استعد للتطبيق العملي ! 👏",
    progress: 100,
  },
];

const getSuitableMessage = (progress:number)=>{
    return encouragementMessages.filter((msg)=> (msg.progress <= progress)).pop();
}

export {
    encouragementMessages,
    getSuitableMessage,
}