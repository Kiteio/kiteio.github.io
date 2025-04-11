// @ts-ignore
import screenshoot_punica from '../assets/screenshoot_punica.jpg'
// @ts-ignore
import screenshoot_gdufe_wrapper from '../assets/screenshoot_gdufe_wrapper.png'

/**
 * 产品。
 * @property id id
 * @property name 名称
 * @property abbreviation 简称
 * @property description 描述
 * @property image 图片
 * @property isMobileImage 是否移动端图片
 * @property tags 标签
 * @property url 链接
 */
interface Product {
    id: string
    name: string
    abbreviation: string
    briefly: string
    url: string | null
    tags: string[]
    image: string
    isMobileImage: boolean
    description: string[]
}

const products: Product[] = [
    {
        id: 'punica-cmp',
        name: '小石榴（Punica-CMP）',
        abbreviation: '小石榴',
        briefly: '领先的广东财经大学教务系统工具',
        url: 'https://github.com/Kiteio/Punica-CMP',
        tags: ['广东财经大学', '教务系统客户端', 'Android', 'Windows', 'MIT License'],
        image: screenshoot_punica,
        isMobileImage: true,
        description: [
            '从2022年至今，我们尝试过使用uni-app、Jetpack Compose、Compose Multiplatform技术，涵盖小程序、Android、Windows平台，软件名称从Porridge You到馀情，再到Afterglow，我们试图构建出一款最好用的广东财经大学教务系统工具。',
            '沉舟侧畔千帆过，病树前头万木春。时至今日，小石榴带着前作的卓越设计，正式发布Android、Windows平台。如今，小石榴已经集成了包括课表、选课、OTP等10余项功能，优化了诸如登录体验、UI适配等问题。',
            '您可以在小石榴体验到无验证码、打开自动登录的畅快操作，还能体验其他平台没有的选课、OTP功能。小石榴全代码开源，并且没有自建服务器存储用户数据，所有个人信息在您的设备上保存。'
        ],
    },
    {
        id: 'gdufe-wrapper',
        name: '广东财经大学脚本（GDUFE-wrapper）',
        abbreviation: '广财脚本',
        briefly: '集成化广东财经大学教务系统、校园网脚本',
        url: 'https://github.com/Kiteio/GDUFE-wrapper',
        tags: ['广东财经大学', '教务系统', '校园网自动登录', 'Python', 'GPL-3.0 License'],
        image: screenshoot_gdufe_wrapper,
        isMobileImage: false,
        description: [
            '我们曾推出过红极一时的教务系统选课脚本，如今这部分内容已经被我们“封杀”。',
            '新的脚本仅提供了最简易的教务系统登录，以及Windows校园网开机自动登录功能。项目遵循 GNU GPLv3 开源，请确保您在分发该脚本的衍生品时遵循开源规则。',
        ],
    },
]

export default products