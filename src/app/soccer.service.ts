import { Injectable } from '@angular/core';

import { Soccer } from './soccer';
import { SOCCERS } from './mock-soccers';


@Injectable()
export class SoccerService {
	getSoccer(): Soccer[] {
		return SOCCERS;
	}
}