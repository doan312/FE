type MeetingModeType = 'REMOTE' | 'FACE_TO_FACE'
export type SpecialtyType = 'BLEACH' | 'DYEING' | 'PERM'
export type SpecialtyChipType = SpecialtyType | 'ALL'
export type TagType = MeetingModeType | SpecialtyType

export interface Designer {
    createdDate: string | null
    modifiedDate: string | null
    designerId: number
    designerName: string
    meetingMode: MeetingModeType | 'BOTH'
    designerShop: string
    designerDistrict: string
    designerSpecialty: SpecialtyType
    designerContactCost: number
    designerUntactCost: number
    designerDescription: string
    imageUrl: string
}

export interface DesignerListResponse {
    timestamp: string
    isSuccess: boolean
    code: string
    message: string
    data: Designer[]
}

export type MeetingMode = 'REMOTE' | 'FACE_TO_FACE' | 'BOTH'

export type District =
    | 'SEOUL_ALL'
    | 'GANGNAM_CHUNGDAM_APGUJUNG'
    | 'HONGDAE_YEONNAM_HAPJEONG'
    | 'SEONGSU_GUNDAE'
