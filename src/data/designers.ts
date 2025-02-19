import { CategoryType } from '../components/home/HotNewCard'
import DesignerImg01 from '../../public/img/designer_image_1.jpg'
import DesignerImg02 from '../../public/img/designer_image_2.jpg'
import DesignerImg06 from '../../public/img/designer_image_6.jpg'
import DesignerImg11 from '../../public/img/designer_image_11.png'
import DesignerImg12 from '../../public/img/designer_image_12.png'
import DesignerImg13 from '../../public/img/designer_image_13.png'

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
        designer: '이초 디자이너',
        tag: ['직접', '온라인', '펌'],
        reservationRate: 98,
        reviewCount: 312,
        profileImg: DesignerImg01,
        shop: '블랑 에 누아르',
        rating: 4.9,
    },
    {
        designer: '로로 원장',
        tag: ['직접', '온라인', '탈염색'],
        reservationRate: 93,
        reviewCount: 213,
        profileImg: DesignerImg02,
        shop: '로로뷰티살롱',
        rating: 4.8,
    },
    {
        designer: '슈 대표원장',
        tag: ['직접', '탈염색'],
        reservationRate: 96,
        reviewCount: 602,
        profileImg: DesignerImg06,
        shop: '슈헤어스튜디오',
        rating: 4.5,
    },
    {
        designer: '랑 원장',
        tag: ['직접', '온라인', '탈염색'],
        reservationRate: 95,
        reviewCount: 212,
        profileImg: DesignerImg11,
        shop: '랑크헤어',
        rating: 4.9,
    },
    {
        designer: '히지 디자이너',
        tag: ['온라인', '펌'],
        reservationRate: 98,
        reviewCount: 445,
        profileImg: DesignerImg12,
        shop: '히지헤어 성수점',
        rating: 4.4,
    },
    {
        designer: '현영 디자이너',
        tag: ['직접', '온라인', '탈염색'],
        reservationRate: 96,
        reviewCount: 315,
        profileImg: DesignerImg13,
        shop: '현영헤어갤러리',
        rating: 4.7,
    },
]
