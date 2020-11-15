import {Injectable} from '@angular/core';
import * as stringSimilarity from 'string-similarity';

import {DistrictDto} from '../districts/district.dto';

const roomsRegex = String.raw`\S+(кімн\W+)(?=\sквартира)`;
const districtRegex = String.raw`\S+(?=\sрайоні)`;
const dict = {
  однокімнатна: 1,
  двокімнатна: 2,
  трикімнатна: 3,
};

@Injectable({
  providedIn: 'root'
})
export class NlpSearchService {

  constructor() {
  }

  matchSearchString(searchString: string, districtList: DistrictDto[]) {
    const result = {
      roomCount: null,
      districtID: null
    };
    const isContainRoomCount = searchString.match(roomsRegex);
    if (isContainRoomCount) {
      result.roomCount = dict[isContainRoomCount[0]];
    }
    const isContainDistrict = searchString.match(districtRegex);
    if (isContainDistrict) {
      const withSimilarity = districtList.map(district => ({
        ...district,
        similarity: stringSimilarity.compareTwoStrings(district.name.toLocaleLowerCase(), isContainDistrict[0])
      }));
      result.districtID = withSimilarity.reduce((prev, current) => (prev.similarity > current.similarity) ? prev : current).id;
    }
    return result;
  }

}
