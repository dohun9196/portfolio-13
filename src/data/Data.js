<<<<<<< HEAD
export const Nav = [
    {
        NavTitle: "케이에스더블유", Lik: "/Sub01_01", Submenu: [
            { Title: "계열사", Lik: "/Sub01_01" },
        ]
    },
    {
        NavTitle: "회사소개", Lik: "/Sub02_01", Submenu: [
            { Title: "회사소개", Lik: "/Sub02_01" },
            { Title: "CEO 인사말", Lik: "/Sub02_02" },
            { Title: "LOGO소개", Lik: "/Sub02_03" },
            { Title: "채용정보", Lik: "/Sub02_04" },
            { Title: "위치안내", Lik: "/Sub02_05" },
        ]
    },
    {
        NavTitle: "제품소개", Lik: "/Sub03_01", Submenu: [
            { Title: "제품소개", Lik: "/Sub03_01" },
            { Title: "실크 브랜드", Lik: "/Sub03_02" },
            { Title: "합지브랜드", Lik: "/Sub03_03" },
        ]
    },
    {
        NavTitle: "홍보센터", Lik: "#", Submenu: [
            { Title: "인증 및 수상", Lik: "#" },
            { Title: "뉴스 및 언론홍보", Lik: "#" },
            { Title: "SNS", Lik: "#" },
            { Title: "이벤트", Lik: "#" },
        ]
    },
    {
        NavTitle: "인테리어", Lik: "#", Submenu: [
            { Title: "시공사례", Lik: "#" },
            { Title: "인테리어", Lik: "#" },
            { Title: "스타일링", Lik: "#" },
        ]
    },
    {
        NavTitle: "고객센터", Lik: "#", Submenu: [
            { Title: "공지사항", Lik: "#" },
            { Title: "디자인상담", Lik: "#" },
            { Title: "1:1문의", Lik: "#" },
            { Title: "대리점 찾기", Lik: "#" },
        ]
    },
];

export const MainVisual = [
    { Title: "E Room", Desc: "나만의 공간을 이루다", SubText: "#프리미엄 #친환경 #실크벽지", SlideText: "KS WALLCOVERINGS COLLECTION" },
    { Title: "The View", Desc: "벽지, 그 이상으로 공간을 보여주다", SubText: "#프리미엄 #친환경 #실크벽지", SlideText: "KS WALLCOVERINGS COLLECTION" },
    { Title: "Veluce", Desc: "당신이 꿈꾸는 라이프스타일이 담긴 공간", SubText: "#친환경 #합지벽지 #모던디자인", SlideText: "KS WALLCOVERINGS COLLECTION" },
    { Title: "The Home", Desc: "우리집에 꼭 맞는 스타일링", SubText: "#소폭합지 #합리적가격 #깔끔한디자인", SlideText: "KS WALLCOVERINGS COLLECTION" },
];

export const Collection = [
    {
        MainTitle: "실크 & 합지 브랜드", key: "TheView", Submenu: [
            { NavTitle: "The View", key: "TheView" },
            { NavTitle: "E Room", key: "ERoom" },
            { NavTitle: "Refractory", key: "Refractory" },
            { NavTitle: "VELUCE", key: "VELUCE" },
            { NavTitle: "The Home", key: "TheHome" },
        ]
    }
];

export const Coll_Content = [
    {
        Title: "더뷰 The View",
        SubTitle: "'벽지, 그 이상의 공간을 보다'",
        Desc01: "더뷰는 스타일리시한 컬러와 패턴 디자인으로 트렌디함을 갖춘 고급 실크벽지 컬렉션입니다.",
        Desc02: "내 공간을 특별하게 만드는 한 끗 차이.더뷰가 수놓은 감각적인 디자인으로 내가 가장 좋아하는 공간을 만들어보세요.",
        Src: [
            { Img: process.env.PUBLIC_URL + "/img/mainCollection_Silk_TheView01.jpg", Name: "3009-24" },
            { Img: process.env.PUBLIC_URL + "/img/mainCollection_Silk_TheView02.jpg", Name: "3031-2" },
            { Img: process.env.PUBLIC_URL + "/img/mainCollection_Silk_TheView03.jpg", Name: "3035-7" },
        ],
    },

    {
        Title: "이룸 E Room",
        SubTitle: "'나만의 공간을 이루다'",
        Desc01: "이룸은 다양한 소재감과 세련된 컬러를 활용해, 풍성한 디자인과 고급스러운 컬러의 프리미엄 실크 벽지 컬렉션입니다.",
        Desc02: "국가 안전기준 제품으로 인증된 친환경 방염 벽지. 기능을 겸비한 트랜디한 컬러의 제품으로 당신에게 안전하고 아름다운 공간을 선사합니다.",
        Src: [
            { Img: process.env.PUBLIC_URL + "/img/mainCollection_Silk_ERoom01.jpg", Name: "2109-2" },
            { Img: process.env.PUBLIC_URL + "/img/mainCollection_Silk_ERoom02.jpg", Name: "2097-1" },
            { Img: process.env.PUBLIC_URL + "/img/mainCollection_Silk_ERoom03.jpg", Name: "2107-5" },
        ],
    },

    {
        Title: "방염 Refractory",
        SubTitle: "'안전을 가장 먼저 생각한 친환경 방염벽지'",
        Desc01: "방염 벽지는 뛰어난 안정성은 물론, 친환경 품질인증으로 건강까지 세심하게 배려한 실크 벽지 컬렉션입니다.",
        Desc02: "국가 안전기준 제품으로 인증된 친환경 방염 벽지. 기능을 겸비한 트랜디한 컬러의 제품으로 당신에게 안전하고 아름다운 공간을 선사합니다.",
        Src: [
            { Img: process.env.PUBLIC_URL + "/img/mainCollection_Silk_Refractory01.jpg", Name: "9003-1" },
            { Img: process.env.PUBLIC_URL + "/img/mainCollection_Silk_Refractory02.jpg", Name: "9000-2" },
            { Img: process.env.PUBLIC_URL + "/img/mainCollection_Silk_Refractory03.jpg", Name: "9013-2" },
        ],
    },

    {
        Title: "벨루체 VELUCE",
        SubTitle: "'나만의 라이프 스타일이 담긴 공간'",
        Desc01: "벨루체는 깔끔한 컬러와 모던한 디자인, 풍부한 텍스쳐감까지 겸비한 친환경 합지벽지 컬렉션입니다.",
        Desc02: "벨루체가 제안하는 합리적인 라이프스타일. 편안한 내추럴부터 세련된 모던함까지 벨루체만의 은은하고 따뜻한 감성을 느껴보세요.",
        Src: [
            { Img: process.env.PUBLIC_URL + "/img/mainCollection_Laminat_Veluce01.jpg", Name: "93403-3" },
            { Img: process.env.PUBLIC_URL + "/img/mainCollection_Laminat_Veluce02.jpg", Name: "93427-3" },
            { Img: process.env.PUBLIC_URL + "/img/mainCollection_Laminat_Veluce03.jpg", Name: "93424-5" },
        ],
    },

    {
        Title: "더홈 The Home",
        SubTitle: "'나만의 라이프 스타일이 담긴 공간'",
        Desc01: "더홈은 어떠한 공간이던 화사하게 밝혀주는 컬러와 디자인의 소폭 합지벽지 컬렉션입니다.",
        Desc02: "더홈과 함께 완성하는 나만의 인테리어. 생기를 불어넣는 산뜻한 디자인으로 당신의 일상이 더욱 특별해지는 공간을 만들어보세요.",

        Src: [
            { Img: process.env.PUBLIC_URL + "/img/mainCollection_Laminat_TheHome01.jpg", Name: "5407-2" },
            { Img: process.env.PUBLIC_URL + "/img/mainCollection_Laminat_TheHome02.jpg", Name: "5404-2" },
            { Img: process.env.PUBLIC_URL + "/img/mainCollection_Laminat_TheHome03.jpg", Name: "5404-4" },
        ],
    }
];

export const News = [
    {
        Title: "벽지 제조기업 KS더블유, 천만불 수출의 탑 수상",
        Desc: "벽지 제조기업 케이에스더블유(KS더블유)는 제 59회 무역의날 기념식에서 천만불 수출의 탑 을 수상했다고 5일 밝혔다. 무역의 날은 1년간의 수출 실적을 기준으로 해외시장 개척과 수출 증대에 기여한 기업을 시상하는 행사로 산업통상자원부가 주관하고 한국무역협회가 주최한다. 케이에스더블유는 지난해 KS벽지와 제일벽지가 합병해 설립됐으며 품질과 디자인을 바탕으로 러시아와 사우디, 태국 등 전 세계 20여 개 국가에서 수출 성장세를 기록하고 있다. 박식순 KS더블유 회장은 '한발 앞선 창의적인 디자인과 경쟁력 있는 제품으로 국·내외 시장을 이끌어 갈 것'이라고 말했다. ",
        Date: "2023.01.03",
        Src: [
            { Img: process.env.PUBLIC_URL + "/img/mainNews01.jpg" }
        ]
    },
    {
        Title: "[신제품출시] THE HOME",
        Desc: "KS벽지가 ‘23년 소폭합지 더홈(THE HOME)’을 선보인다. 이번 출시된 ‘23년 소폭합지 더홈’은 깔끔하고 모던한 디자인으로 합리적인 라이프 스타일에 맞게끔 디자인을 수록함과 동시 저렴한 가격으로 가성비를 선호하는 소비자 니즈를 충족시킬 예정이다. 특히 ‘더홈으로 꾸며보는 우리 집’이라는 키워드로 거실과 침실, 휴식공간, 주방공간, 서재공간 등 각각의 공간에 어울리는 제품을 추천한다. 박식순 회장은 “주거공간의 품격을 높일 수 있는 아름다우면서도 시공하기 편한 친환경 벽지를 공급함으로써 소비자 분들의 건강한 삶을 위한 주거문화 개선에 기여하도록 노력하겠다”고 전했다. 한편, 케이에스더블유 ‘KS벽지’는 ‘23년 소폭합지 더홈’ 출시에 이어 내년 1월에는 프리미엄 실크벽지 ‘이룸(E-ROOM)’도 새롭게 출시할 예정이다.",
        Date: "2022.10.20",
        Src: [
            { Img: process.env.PUBLIC_URL + "/img/mainNews02.jpg" }
        ]
    },
    {
        Title: "KBS 추석장사 씨름대회 후원",
        Desc: "온 가족이 모이는 민족의 대명절 한가위에 열린 추석장사 씨름대회. 많은 관심 감사드립니다. 대한 씨름협회 공식 후원사 협약을 체결한 KS벽지가 전통 스포츠 씨름의 계승 발전을 응원합니다!",
        Date: "2022.09.15",
        Src: [
            { Img: process.env.PUBLIC_URL + "/img/mainNews03.jpg" }
        ]
    },
    {
        Title: "[신제품출시] E-ROOM",
        Desc: "친환경 벽지 기업 ‘KS벽지’가 프리미엄 실크벽지 ‘2023 이룸’을 새롭게 출시했다. ’2023 이룸’의 새로운 테마 “Love harmony”는 일상에서 건강하고 안정적인 루틴을 보낼 수 있으며 나 자신을 돌아보는 시간을 보내기도 하는 회복의 공간이라는 의미를 담았다. ‘2023 이룸’은 코로나19의 장기화와 정보 과잉 노출 등 일상에서 겪는 스트레스로 지친 현대인들의 일상을 치유하고, 다가오는 포스트 코로나 시대에 원활한 소통과 건강한 삶의 균형을 이루기 위한 공간 솔루션을 제안하는 실크 벽지 컬렉션이다. 또한 ‘2023 이룸’은 트렌디한 포인트벽지부터 모던한 무지 제품까지 공간의 장점을 살려주는 다양한 패턴으로 구성된 컬렉션으로, 많은 소비자들의 사랑을 받았던 지난 이룸에 이어 한층 더 세련된 컬러와 디자인이 적용되었다. 포인트 벽지는 몰딩, 그래픽, 플라워 패턴 등 다채롭고 세련된 디자인과 컬러감이 느껴지도록 디자인되었고, 무지 벽지는 인테리어 트렌드를 반영하여 도톰한 직물 텍스쳐와 네추럴한 컬러 계열이 강조되었다. 이렇듯 ‘2023 이룸’은 아래 4가지 컨셉으로 집과 상업공간 등 어느 장소에나 감각적이고 안정적인 힐링 공간을 만들어주는 제품을 선보였으며, 색다르고 다채로운 공간을 선사한다.",
        Date: "2023.01.06",
        Src: [
            { Img: process.env.PUBLIC_URL + "/img/mainNews04.jpg" }
        ]
    }
=======
export const Nav = [
    {
        NavTitle: '케이에스더블유', Lik: '/Sub01_01', Submenu: [
            { Title: '계열사', Lik: '/Sub01_01' },
        ]
    },
    {
        NavTitle: '회사소개', Lik: '/Sub02_01', Submenu: [
            { Title: '회사소개', Lik: '/Sub02_01' },
            { Title: 'CEO 인사말', Lik: '/Sub02_02' },
            { Title: 'LOGO소개', Lik: '/Sub02_03' },
            { Title: '채용정보', Lik: '/Sub02_04' },
            { Title: '위치안내', Lik: '/Sub02_05' },
        ]
    },
    {
        NavTitle: '제품소개', Lik: '/Sub03_01', Submenu: [
            { Title: '제품소개', Lik: '/Sub03_01' },
            { Title: '실크 브랜드', Lik: '/Sub03_02' },
            { Title: '합지브랜드', Lik: '/Sub03_03' },
        ]
    },
    {
        NavTitle: '홍보센터', Lik: '/Sub04_01', Submenu: [
            { Title: '인증 및 수상', Lik: '/Sub04_01' },
            { Title: '뉴스 및 언론홍보', Lik: '/Sub04_02' },
            { Title: 'SNS', Lik: '/Sub04_03' },
            { Title: '이벤트', Lik: '/Sub04_04' },
        ]
    },
    {
        NavTitle: '인테리어', Lik: '/Sub05_01', Submenu: [
            { Title: '시공사례', Lik: '/Sub05_01' },
            { Title: '인테리어', Lik: '/Sub05_02' },
            { Title: '스타일링', Lik: '/Sub05_03' },
        ]
    },
    {
        NavTitle: '고객센터', Lik: '/Sub06_01', Submenu: [
            { Title: '공지사항', Lik: '/Sub06_01' },
            { Title: '디자인상담', Lik: '/Sub06_02' },
            { Title: '1:1문의', Lik: '/Sub06_03' },
            { Title: '대리점 찾기', Lik: '/Sub06_04' },
        ]
    },
];

export const MainVisual = [
    { Title: 'E Room', Desc: '나만의 공간을 이루다', SubText: '#프리미엄 #친환경 #실크벽지', SlideText: 'KS WALLCOVERINGS COLLECTION' },
    { Title: 'The View', Desc: '벽지, 그 이상으로 공간을 보여주다', SubText: '#프리미엄 #친환경 #실크벽지', SlideText: 'KS WALLCOVERINGS COLLECTION' },
    { Title: 'Veluce', Desc: '당신이 꿈꾸는 라이프스타일이 담긴 공간', SubText: '#친환경 #합지벽지 #모던디자인', SlideText: 'KS WALLCOVERINGS COLLECTION' },
    { Title: 'The Home', Desc: '우리집에 꼭 맞는 스타일링', SubText: '#소폭합지 #합리적가격 #깔끔한디자인', SlideText: 'KS WALLCOVERINGS COLLECTION' },
];

export const Collection = [
    {
        MainTitle: '실크 & 합지 브랜드', key: 'TheView', Submenu: [
            { NavTitle: 'The View', key: 'TheView' },
            { NavTitle: 'E Room', key: 'ERoom' },
            { NavTitle: 'Refractory', key: 'Refractory' },
            { NavTitle: 'VELUCE', key: 'VELUCE' },
            { NavTitle: 'The Home', key: 'TheHome' },
        ]
    }
];

export const Coll_Content = [
    {
        Title: '더뷰 The View',
        SubTitle: '"벽지, 그 이상의 공간을 보다"',
        Desc01: '더뷰는 스타일리시한 컬러와 패턴 디자인으로 트렌디함을 갖춘 고급 실크벽지 컬렉션입니다.',
        Desc02: '내 공간을 특별하게 만드는 한 끗 차이.더뷰가 수놓은 감각적인 디자인으로 내가 가장 좋아하는 공간을 만들어보세요.',
        Src: [
            { Img: process.env.PUBLIC_URL + '/img/mainCollection_Silk_TheView01.jpg', Name: '3009-24' },
            { Img: process.env.PUBLIC_URL + '/img/mainCollection_Silk_TheView02.jpg', Name: '3031-2' },
            { Img: process.env.PUBLIC_URL + '/img/mainCollection_Silk_TheView03.jpg', Name: '3035-7' },
        ],
    },

    {
        Title: '이룸 E Room',
        SubTitle: '"나만의 공간을 이루다"',
        Desc01: '이룸은 다양한 소재감과 세련된 컬러를 활용해, 풍성한 디자인과 고급스러운 컬러의 프리미엄 실크 벽지 컬렉션입니다.',
        Desc02: '국가 안전기준 제품으로 인증된 친환경 방염 벽지. 기능을 겸비한 트랜디한 컬러의 제품으로 당신에게 안전하고 아름다운 공간을 선사합니다.',
        Src: [
            { Img: process.env.PUBLIC_URL + '/img/mainCollection_Silk_ERoom01.jpg', Name: '2109-2' },
            { Img: process.env.PUBLIC_URL + '/img/mainCollection_Silk_ERoom02.jpg', Name: '2097-1' },
            { Img: process.env.PUBLIC_URL + '/img/mainCollection_Silk_ERoom03.jpg', Name: '2107-5' },
        ],
    },

    {
        Title: '방염 Refractory',
        SubTitle: '"안전을 가장 먼저 생각한 친환경 방염벽지"',
        Desc01: '방염 벽지는 뛰어난 안정성은 물론, 친환경 품질인증으로 건강까지 세심하게 배려한 실크 벽지 컬렉션입니다.',
        Desc02: '국가 안전기준 제품으로 인증된 친환경 방염 벽지. 기능을 겸비한 트랜디한 컬러의 제품으로 당신에게 안전하고 아름다운 공간을 선사합니다.',
        Src: [
            { Img: process.env.PUBLIC_URL + '/img/mainCollection_Silk_Refractory01.jpg', Name: '9003-1' },
            { Img: process.env.PUBLIC_URL + '/img/mainCollection_Silk_Refractory02.jpg', Name: '9000-2' },
            { Img: process.env.PUBLIC_URL + '/img/mainCollection_Silk_Refractory03.jpg', Name: '9013-2' },
        ],
    },

    {
        Title: '벨루체 VELUCE',
        SubTitle: '"나만의 라이프 스타일이 담긴 공간"',
        Desc01: '벨루체는 깔끔한 컬러와 모던한 디자인, 풍부한 텍스쳐감까지 겸비한 친환경 합지벽지 컬렉션입니다.',
        Desc02: '벨루체가 제안하는 합리적인 라이프스타일. 편안한 내추럴부터 세련된 모던함까지 벨루체만의 은은하고 따뜻한 감성을 느껴보세요.',
        Src: [
            { Img: process.env.PUBLIC_URL + '/img/mainCollection_Laminat_Veluce01.jpg', Name: '93403-3' },
            { Img: process.env.PUBLIC_URL + '/img/mainCollection_Laminat_Veluce02.jpg', Name: '93427-3' },
            { Img: process.env.PUBLIC_URL + '/img/mainCollection_Laminat_Veluce03.jpg', Name: '93424-5' },
        ],
    },

    {
        Title: '더홈 The Home',
        SubTitle: '"나만의 라이프 스타일이 담긴 공간"',
        Desc01: '더홈은 어떠한 공간이던 화사하게 밝혀주는 컬러와 디자인의 소폭 합지벽지 컬렉션입니다.',
        Desc02: '더홈과 함께 완성하는 나만의 인테리어. 생기를 불어넣는 산뜻한 디자인으로 당신의 일상이 더욱 특별해지는 공간을 만들어보세요.',

        Src: [
            { Img: process.env.PUBLIC_URL + '/img/mainCollection_Laminat_TheHome01.jpg', Name: '5407-2' },
            { Img: process.env.PUBLIC_URL + '/img/mainCollection_Laminat_TheHome02.jpg', Name: '5404-2' },
            { Img: process.env.PUBLIC_URL + '/img/mainCollection_Laminat_TheHome03.jpg', Name: '5404-4' },
        ],
    }
];

export const News = [
    {
        Title: '벽지 제조기업 KS더블유, 천만불 수출의 탑 수상',
        Desc: '벽지 제조기업 케이에스더블유(KS더블유)는 제 59회 무역의날 기념식에서 천만불 수출의 탑 을 수상했다고 5일 밝혔다. 무역의 날은 1년간의 수출 실적을 기준으로 해외시장 개척과 수출 증대에 기여한 기업을 시상하는 행사로 산업통상자원부가 주관하고 한국무역협회가 주최한다. 케이에스더블유는 지난해 KS벽지와 제일벽지가 합병해 설립됐으며 품질과 디자인을 바탕으로 러시아와 사우디, 태국 등 전 세계 20여 개 국가에서 수출 성장세를 기록하고 있다. 박식순 KS더블유 회장은 "한발 앞선 창의적인 디자인과 경쟁력 있는 제품으로 국·내외 시장을 이끌어 갈 것"이라고 말했다. ',
        Date: '2023.01.03',
        Src: [
            { Img: process.env.PUBLIC_URL + '/img/mainNews01.jpg' }
        ]
    },
    {
        Title: '[신제품출시] THE HOME',
        Desc: 'KS벽지가 ‘23년 소폭합지 더홈(THE HOME)’을 선보인다. 이번 출시된 ‘23년 소폭합지 더홈’은 깔끔하고 모던한 디자인으로 합리적인 라이프 스타일에 맞게끔 디자인을 수록함과 동시 저렴한 가격으로 가성비를 선호하는 소비자 니즈를 충족시킬 예정이다. 특히 ‘더홈으로 꾸며보는 우리 집’이라는 키워드로 거실과 침실, 휴식공간, 주방공간, 서재공간 등 각각의 공간에 어울리는 제품을 추천한다. 박식순 회장은 “주거공간의 품격을 높일 수 있는 아름다우면서도 시공하기 편한 친환경 벽지를 공급함으로써 소비자 분들의 건강한 삶을 위한 주거문화 개선에 기여하도록 노력하겠다”고 전했다. 한편, 케이에스더블유 ‘KS벽지’는 ‘23년 소폭합지 더홈’ 출시에 이어 내년 1월에는 프리미엄 실크벽지 ‘이룸(E-ROOM)’도 새롭게 출시할 예정이다.',
        Date: '2022.10.20',
        Src: [
            { Img: process.env.PUBLIC_URL + '/img/mainNews02.jpg' }
        ]
    },
    {
        Title: 'KBS 추석장사 씨름대회 후원',
        Desc: '온 가족이 모이는 민족의 대명절 한가위에 열린 추석장사 씨름대회. 많은 관심 감사드립니다. 대한 씨름협회 공식 후원사 협약을 체결한 KS벽지가 전통 스포츠 씨름의 계승 발전을 응원합니다!',
        Date: '2022.09.15',
        Src: [
            { Img: process.env.PUBLIC_URL + '/img/mainNews03.jpg' }
        ]
    },
    {
        Title: '[신제품출시] E-ROOM',
        Desc: '친환경 벽지 기업 ‘KS벽지’가 프리미엄 실크벽지 ‘2023 이룸’을 새롭게 출시했다. ’2023 이룸’의 새로운 테마 “Love harmony”는 일상에서 건강하고 안정적인 루틴을 보낼 수 있으며 나 자신을 돌아보는 시간을 보내기도 하는 회복의 공간이라는 의미를 담았다. ‘2023 이룸’은 코로나19의 장기화와 정보 과잉 노출 등 일상에서 겪는 스트레스로 지친 현대인들의 일상을 치유하고, 다가오는 포스트 코로나 시대에 원활한 소통과 건강한 삶의 균형을 이루기 위한 공간 솔루션을 제안하는 실크 벽지 컬렉션이다. 또한 ‘2023 이룸’은 트렌디한 포인트벽지부터 모던한 무지 제품까지 공간의 장점을 살려주는 다양한 패턴으로 구성된 컬렉션으로, 많은 소비자들의 사랑을 받았던 지난 이룸에 이어 한층 더 세련된 컬러와 디자인이 적용되었다. 포인트 벽지는 몰딩, 그래픽, 플라워 패턴 등 다채롭고 세련된 디자인과 컬러감이 느껴지도록 디자인되었고, 무지 벽지는 인테리어 트렌드를 반영하여 도톰한 직물 텍스쳐와 네추럴한 컬러 계열이 강조되었다. 이렇듯 ‘2023 이룸’은 아래 4가지 컨셉으로 집과 상업공간 등 어느 장소에나 감각적이고 안정적인 힐링 공간을 만들어주는 제품을 선보였으며, 색다르고 다채로운 공간을 선사한다.',
        Date: '2023.01.06',
        Src: [
            { Img: process.env.PUBLIC_URL + '/img/mainNews04.jpg' }
        ]
    }
>>>>>>> 71274d17d50e357c313904cbb8bd416b1fcb7a5b
]