type MeetingModeType = 'REMOTE' | 'FACE_TO_FACE'
type SpecialtyType = 'BLEACH' | 'DYEING' | 'PERM'
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
