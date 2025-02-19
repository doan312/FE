import { useGetDesignerList } from '../../apis/api/get/useGetDesignerList'
import { useHomeStore } from '../../store/useStore'
import BottomSheet from './BottomSheet'
import Button from './Button'
import Chip from './Chip'
import DesignerCard from './DesignerCard'
import MethodSelectionCard from './MethodSelectionCard'
import ErrorCover from './NoResultCover'
import RegionSectionButton from './RegionSectionButton'

export default function MainSection() {
    const { displayCount } = useHomeStore()

    const filters = {
        districts: 'SEOUL_ALL',
        meetingModes: 'BOTH',
        categories: 'DYEING',
        page: 0,
        size: displayCount,
    }

    const { data: responseData, error, isLoading } = useGetDesignerList(filters)

    const designerList = responseData?.data

    return (
        <div className='flex flex-col mb-44 mt-69'>
            <h2 className='mb-16 -mx-4 font-bold text-h2 text-gray-1300'>
                어떤 방식으로 상담 받을까요?
            </h2>
            <div className='flex -mx-4 mb-21 gap-11'>
                <MethodSelectionCard type='inPerson' />
                <MethodSelectionCard type='online' />
            </div>
            <div className='flex items-center justify-between w-full mb-22'>
                <div className='flex gap-6'>
                    <Chip active value='전체' />
                    <Chip value='탈염색' />
                    <Chip value='염색' />
                    <Chip value='펌' />
                </div>
                <RegionSectionButton />
            </div>
            {/* ✅ 로딩 상태 추가 */}
            {isLoading && (
                <p className='text-center text-gray-600'>
                    디자이너 정보를 불러오는 중...
                </p>
            )}

            <div className='flex flex-col gap-16 mb-16'>
                {isLoading ? (
                    <p className='text-center text-gray-600'>
                        디자이너 정보를 불러오는 중...
                    </p>
                ) : error ? (
                    <ErrorCover type='network' />
                ) : designerList && designerList.length > 0 ? (
                    designerList.map((designer) => {
                        return <DesignerCard {...designer} />
                    })
                ) : (
                    <ErrorCover type='notfound' />
                )}
            </div>
            <Button />
            <BottomSheet />
        </div>
    )
}
