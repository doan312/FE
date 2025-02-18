import { CategoryType } from '../components/home/HotNewCard'
import DesignerImg01 from '../../public/img/designer_image_1.jpg'
import DesignerImg02 from '../../public/img/designer_image_2.jpg'
import DesignerImg03 from '../../public/img/designer_image_3.png'
import DesignerImg04 from '../../public/img/designer_image_4.png'
import DesignerImg05 from '../../public/img/designer_image_5.png'
import DesignerImg06 from '../../public/img/designer_image_6.jpg'
import DesignerImg07 from '../../public/img/designer_image_7.png'
import DesignerImg08 from '../../public/img/designer_image_8.png'
import DesignerImg09 from '../../public/img/designer_image_9.png'
import DesignerImg10 from '../../public/img/designer_image_10.png'

export const designersData: {
    designer: string
    tag: CategoryType[]
    reservationRate: number
    reviewCount: number
    profileImg: string
    shop: string
    rating: number
}[] = [
    {
        designer: '김민수 디자이너',
        tag: ['직접', '온라인', '염색 전문'],
        reservationRate: 98,
        reviewCount: 312,
        profileImg: DesignerImg01,
        shop: '준오헤어 반포점',
        rating: 4.7,
    },
    {
        designer: '최유진 원장',
        tag: ['온라인', 'D-DAY'],
        reservationRate: 93,
        reviewCount: 213,
        profileImg: DesignerImg02,
        shop: '살롱드라피네 선릉역점',
        rating: 4.8,
    },
    {
        designer: '윤성혁 원장',
        tag: ['직접', '온라인', '염색 전문'],
        reservationRate: 96,
        reviewCount: 602,
        profileImg: DesignerImg03,
        shop: '준오헤어 포스코사거리점',
        rating: 4.2,
    },
    {
        designer: '배종원 디자이너',
        tag: ['직접', 'D-DAY'],
        reservationRate: 95,
        reviewCount: 212,
        profileImg: DesignerImg04,
        shop: '차이헤어',
        rating: 4.5,
    },
    {
        designer: '김도연 디자이너',
        tag: ['직접', '염색 전문'],
        reservationRate: 98,
        reviewCount: 445,
        profileImg: DesignerImg05,
        shop: '준오헤어 강남역스퀘어점',
        rating: 3.9,
    },
    {
        designer: '김도연 디자이너',
        tag: ['직접', '염색 전문'],
        reservationRate: 98,
        reviewCount: 445,
        profileImg: DesignerImg06,
        shop: '헤어더뷰 이수점',
        rating: 4.1,
    },
    {
        designer: '김도연 디자이너',
        tag: ['직접', '염색 전문'],
        reservationRate: 98,
        reviewCount: 445,
        profileImg: DesignerImg07,
        shop: '박준뷰티랩 강남점',
        rating: 4.9,
    },
    {
        designer: '김도연 디자이너',
        tag: ['직접', '염색 전문'],
        reservationRate: 98,
        reviewCount: 445,
        profileImg: DesignerImg08,
        shop: '준오헤어 반포점',
        rating: 4.5,
    },
    {
        designer: '김도연 디자이너',
        tag: ['직접', '염색 전문'],
        reservationRate: 98,
        reviewCount: 445,
        profileImg: DesignerImg09,
        shop: '차홍룸 용산점',
        rating: 4.7,
    },
    {
        designer: '김도연 디자이너',
        tag: ['직접', '염색 전문'],
        reservationRate: 98,
        reviewCount: 445,
        profileImg: DesignerImg10,
        shop: '데이유헤어',
        rating: 4.8,
    },
]
